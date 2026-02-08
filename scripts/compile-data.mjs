#!/usr/bin/env node

/**
 * PF2e Lite — Data Compilation Pipeline
 *
 * Reads data-sources.yaml, fetches from AoN Elasticsearch API (or cache),
 * applies PF2e Lite modifications, and writes compiled JSON to data/compiled/.
 *
 * Usage:
 *   node scripts/compile-data.mjs                    # Compile all datasets
 *   node scripts/compile-data.mjs spells feats       # Compile specific datasets
 *   node scripts/compile-data.mjs --force             # Re-fetch from AoN (ignore cache)
 *   node scripts/compile-data.mjs --dry-run           # Show what would be fetched/modified
 *
 * Output: data/compiled/<dataset>.json + data/compiled/manifest.json
 */

import crypto from 'crypto';
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CACHE_DIR = path.join(ROOT, '.aon-cache');
const DATA_DIR = path.join(ROOT, 'data');
const COMPILED_DIR = path.join(DATA_DIR, 'compiled');
const SOURCES_FILE = path.join(__dirname, 'data-sources.yaml');

const AON_ENDPOINT = 'https://elasticsearch.aonprd.com/aon70/_search';

// --- Minimal YAML parser (handles the subset we use) ---

function parseYaml(text) {
  // This is a minimal parser for our specific YAML structure.
  // For production use, consider adding js-yaml as a dependency.
  // For now, we parse the simple structures used in data-sources.yaml
  // and modification files.

  const lines = text.split('\n');
  return parseYamlLines(lines, 0, 0).value;
}

function parseYamlLines(lines, startIdx, baseIndent) {
  const result = {};
  let i = startIdx;

  while (i < lines.length) {
    const line = lines[i];
    const stripped = line.replace(/#.*$/, '').trimEnd();

    // Skip empty lines and comments
    if (stripped.trim() === '') {
      i++;
      continue;
    }

    const indent = stripped.search(/\S/);
    if (indent < baseIndent) break;
    if (indent > baseIndent && i > startIdx) break;

    const content = stripped.trim();

    // Array item: "- value" or "- key: value"
    if (content.startsWith('- ')) {
      // We're in an array context — caller should handle this
      break;
    }

    // Key-value pair
    const colonIdx = content.indexOf(':');
    if (colonIdx === -1) {
      i++;
      continue;
    }

    const key = content.slice(0, colonIdx).trim();
    const valueStr = content.slice(colonIdx + 1).trim();

    if (valueStr === '' || valueStr === '|') {
      // Check if next line is indented (nested object or array)
      const nextNonEmpty = findNextNonEmpty(lines, i + 1);
      if (nextNonEmpty < lines.length) {
        const nextLine = lines[nextNonEmpty].replace(/#.*$/, '').trimEnd();
        const nextIndent = nextLine.search(/\S/);
        if (nextIndent > indent) {
          if (nextLine.trim().startsWith('- ')) {
            const arr = parseYamlArray(lines, nextNonEmpty, nextIndent);
            result[key] = arr.value;
            i = arr.nextIdx;
          } else {
            const nested = parseYamlLines(lines, nextNonEmpty, nextIndent);
            result[key] = nested.value;
            i = nested.nextIdx;
          }
        } else {
          result[key] = null;
          i++;
        }
      } else {
        result[key] = null;
        i++;
      }
    } else {
      result[key] = parseYamlValue(valueStr);
      i++;
    }
  }

  return { value: result, nextIdx: i };
}

function parseYamlArray(lines, startIdx, baseIndent) {
  const result = [];
  let i = startIdx;

  while (i < lines.length) {
    const line = lines[i];
    const stripped = line.replace(/#.*$/, '').trimEnd();

    if (stripped.trim() === '') {
      i++;
      continue;
    }

    const indent = stripped.search(/\S/);
    if (indent < baseIndent) break;

    const content = stripped.trim();
    if (!content.startsWith('- ')) break;

    const itemContent = content.slice(2).trim();
    const colonIdx = itemContent.indexOf(':');

    if (colonIdx !== -1) {
      // Object item "- key: value"
      const key = itemContent.slice(0, colonIdx).trim();
      const val = itemContent.slice(colonIdx + 1).trim();
      const obj = {};
      obj[key] = val === '' ? null : parseYamlValue(val);

      // Check for continuation lines at deeper indent
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextStripped = nextLine.replace(/#.*$/, '').trimEnd();
        if (nextStripped.trim() === '') {
          i++;
          continue;
        }
        const nextIndent = nextStripped.search(/\S/);
        if (nextIndent <= indent) break;

        const nextContent = nextStripped.trim();
        if (nextContent.startsWith('- ')) {
          // Nested array within the object
          const nestedKey = Object.keys(obj).find(
            (k) => obj[k] === null || Array.isArray(obj[k]),
          );
          if (nestedKey) {
            const arr = parseYamlArray(lines, i, nextIndent);
            obj[nestedKey] = arr.value;
            i = arr.nextIdx;
          } else {
            break;
          }
        } else {
          const nextColon = nextContent.indexOf(':');
          if (nextColon !== -1) {
            const nk = nextContent.slice(0, nextColon).trim();
            const nv = nextContent.slice(nextColon + 1).trim();
            if (nv === '' || nv === '|') {
              // Check for nested content
              const peekIdx = findNextNonEmpty(lines, i + 1);
              if (peekIdx < lines.length) {
                const peekLine = lines[peekIdx].replace(/#.*$/, '').trimEnd();
                const peekIndent = peekLine.search(/\S/);
                if (peekIndent > nextIndent) {
                  if (peekLine.trim().startsWith('- ')) {
                    const arr = parseYamlArray(lines, peekIdx, peekIndent);
                    obj[nk] = arr.value;
                    i = arr.nextIdx;
                  } else {
                    const nested = parseYamlLines(lines, peekIdx, peekIndent);
                    obj[nk] = nested.value;
                    i = nested.nextIdx;
                  }
                } else {
                  obj[nk] = null;
                  i++;
                }
              } else {
                obj[nk] = null;
                i++;
              }
            } else {
              obj[nk] = parseYamlValue(nv);
              i++;
            }
          } else {
            i++;
          }
        }
      }

      result.push(obj);
    } else {
      // Simple value "- value"
      result.push(parseYamlValue(itemContent));
      i++;
    }
  }

  return { value: result, nextIdx: i };
}

function findNextNonEmpty(lines, startIdx) {
  let i = startIdx;
  while (i < lines.length) {
    const stripped = lines[i].replace(/#.*$/, '').trimEnd();
    if (stripped.trim() !== '') return i;
    i++;
  }
  return i;
}

function parseYamlValue(str) {
  if (str === 'true') return true;
  if (str === 'false') return false;
  if (str === 'null' || str === '~') return null;
  if (/^-?\d+$/.test(str)) return parseInt(str, 10);
  if (/^-?\d+\.\d+$/.test(str)) return parseFloat(str);
  // Strip quotes
  if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
    return str.slice(1, -1);
  }
  // Inline array [a, b, c]
  if (str.startsWith('[') && str.endsWith(']')) {
    return str
      .slice(1, -1)
      .split(',')
      .map((s) => parseYamlValue(s.trim()));
  }
  // Inline object { key: value }
  if (str.startsWith('{') && str.endsWith('}')) {
    const obj = {};
    const pairs = str.slice(1, -1).split(',');
    for (const pair of pairs) {
      const [k, ...rest] = pair.split(':');
      if (k && rest.length) {
        obj[k.trim()] = parseYamlValue(rest.join(':').trim());
      }
    }
    return obj;
  }
  return str;
}

// --- AoN API ---

function aonFetch(query, fields, size) {
  const body = {
    size,
    query,
    _source: fields,
  };

  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(body);
    const url = new URL(AON_ENDPOINT);

    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`AoN API HTTP ${res.statusCode}: ${data.slice(0, 300)}`));
          return;
        }
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`JSON parse error: ${e.message}`));
        }
      });
      res.on('error', reject);
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// --- Cache ---

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function cacheFile(dataset) {
  return path.join(CACHE_DIR, `${dataset}-raw.json`);
}

function readCache(dataset) {
  const file = cacheFile(dataset);
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch {
    return null;
  }
}

function writeCache(dataset, data) {
  ensureDir(CACHE_DIR);
  fs.writeFileSync(cacheFile(dataset), JSON.stringify(data, null, 2), 'utf-8');
}

// --- Modification Engine ---

function applyModifications(entries, modsPath) {
  const fullPath = path.join(DATA_DIR, modsPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  Warning: modification file not found: ${modsPath}`);
    return { entries, stats: { removed: 0, modified: 0, added: 0 } };
  }

  const modsYaml = fs.readFileSync(fullPath, 'utf-8');
  const mods = parseYaml(modsYaml);
  const stats = { removed: 0, modified: 0, added: 0 };

  // Apply removals
  const removeNames = new Set();
  if (Array.isArray(mods.remove)) {
    for (const item of mods.remove) {
      if (item.name) removeNames.add(item.name.toLowerCase());
    }
  }

  let result = entries.filter((entry) => {
    const name = entry.name?.toLowerCase();
    if (removeNames.has(name)) {
      stats.removed++;
      return false;
    }
    return true;
  });

  // Apply modifications
  if (Array.isArray(mods.modify)) {
    const modsByName = new Map();
    for (const mod of mods.modify) {
      if (mod.name) modsByName.set(mod.name.toLowerCase(), mod);
    }

    result = result.map((entry) => {
      const mod = modsByName.get(entry.name?.toLowerCase());
      if (!mod) return entry;

      stats.modified++;
      const modified = { ...entry, _pf2eLite: { status: 'modified', changes: [] } };

      if (mod.set) {
        for (const [key, value] of Object.entries(mod.set)) {
          modified[key] = value;
          modified._pf2eLite.changes.push({ field: key, value });
        }
      }
      if (mod.changes) {
        modified._pf2eLite.changes.push(...mod.changes);
      }
      if (mod.note) {
        modified._pf2eLite.note = mod.note;
      }

      return modified;
    });
  }

  // Apply global transforms
  if (mods.global) {
    if (mods.global.add_field) {
      for (const [fieldName, config] of Object.entries(mods.global.add_field)) {
        if (config.source && config.mapping) {
          result = result.map((entry) => {
            const sourceVal = entry[config.source];
            const mapped = config.mapping[sourceVal];
            if (mapped !== undefined) {
              return { ...entry, [fieldName]: mapped };
            }
            return entry;
          });
        }
      }
    }

    if (mods.global.retag && Array.isArray(mods.global.retag)) {
      for (const retag of mods.global.retag) {
        result = result.map((entry) => {
          if (Array.isArray(entry.trait) && entry.trait.includes(retag.from_trait)) {
            return {
              ...entry,
              trait: [...entry.trait.filter((t) => t !== retag.from_trait), retag.to_trait],
            };
          }
          return entry;
        });
      }
    }
  }

  // Apply additions
  if (Array.isArray(mods.add)) {
    for (const addition of mods.add) {
      if (addition.data_file) {
        const dataPath = path.join(DATA_DIR, addition.data_file);
        if (fs.existsSync(dataPath)) {
          try {
            const customData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
            const entry = {
              ...customData,
              name: addition.name || customData.name,
              _pf2eLite: { status: 'original', source: addition.source || 'PF2e Lite Original' },
            };
            result.push(entry);
            stats.added++;
          } catch (e) {
            console.warn(`  Warning: failed to read custom data file ${addition.data_file}: ${e.message}`);
          }
        } else {
          console.warn(`  Warning: custom data file not found: ${addition.data_file}`);
          // Add a stub entry so the name is tracked
          result.push({
            name: addition.name,
            _pf2eLite: {
              status: 'original',
              source: addition.source || 'PF2e Lite Original',
              stub: true,
              note: addition.note,
            },
          });
          stats.added++;
        }
      }
    }
  }

  return { entries: result, stats };
}

// --- Compile ---

async function compileDataset(name, config, { force, dryRun }) {
  console.log(`\n--- ${name} ---`);

  // Check cache
  let rawData = force ? null : readCache(name);

  if (rawData) {
    const count = rawData.hits?.hits?.length ?? 0;
    console.log(`  Cache hit: ${count} entries`);
  } else if (dryRun) {
    console.log(`  [dry-run] Would fetch from AoN (size: ${config.size})`);
    return null;
  } else {
    console.log(`  Fetching from AoN (size: ${config.size})...`);
    rawData = await aonFetch(config.query, config.fields, config.size);

    const total = rawData.hits?.total?.value ?? 0;
    const returned = rawData.hits?.hits?.length ?? 0;
    console.log(`  Fetched: ${returned} entries (${total} total in index)`);

    if (total > returned) {
      console.warn(`  WARNING: ${total - returned} entries truncated. Increase size to ${total}.`);
    }

    writeCache(name, rawData);
  }

  // Extract entries from Elasticsearch response
  const entries = (rawData.hits?.hits ?? []).map((hit) => ({
    _id: hit._id,
    ...hit._source,
  }));

  // Apply modifications
  const modsPath = config.modifications;
  const { entries: modified, stats } = applyModifications(entries, modsPath);

  console.log(
    `  Modifications: -${stats.removed} removed, ~${stats.modified} modified, +${stats.added} added`,
  );
  console.log(`  Final: ${modified.length} entries`);

  // Tag unmodified entries
  const result = modified.map((entry) => {
    if (!entry._pf2eLite) {
      return { ...entry, _pf2eLite: { status: 'included' } };
    }
    return entry;
  });

  // Write compiled output
  if (!dryRun) {
    ensureDir(COMPILED_DIR);
    const outPath = path.join(COMPILED_DIR, `${name}.json`);
    fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');
    const sizeKB = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`  Wrote: ${outPath} (${sizeKB} KB)`);
  }

  return result;
}

function contentHash(data) {
  return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex').slice(0, 12);
}

// --- Main ---

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const dryRun = args.includes('--dry-run');
  const datasetFilter = args.filter((a) => !a.startsWith('--'));

  // Read data sources manifest
  if (!fs.existsSync(SOURCES_FILE)) {
    console.error(`Error: ${SOURCES_FILE} not found`);
    process.exit(1);
  }

  const sourcesYaml = fs.readFileSync(SOURCES_FILE, 'utf-8');
  const sources = parseYaml(sourcesYaml);
  const datasets = sources.datasets;

  if (!datasets) {
    console.error('Error: no datasets found in data-sources.yaml');
    process.exit(1);
  }

  const datasetNames =
    datasetFilter.length > 0
      ? datasetFilter.filter((name) => {
          if (!datasets[name]) {
            console.error(`Unknown dataset: ${name}`);
            return false;
          }
          return true;
        })
      : Object.keys(datasets);

  if (datasetNames.length === 0) {
    console.error('No datasets to compile.');
    process.exit(1);
  }

  console.log(`PF2e Lite Data Compiler`);
  console.log(`Datasets: ${datasetNames.join(', ')}`);
  if (force) console.log('Mode: --force (ignoring cache)');
  if (dryRun) console.log('Mode: --dry-run (no writes)');

  const manifest = {
    buildDate: new Date().toISOString(),
    datasets: {},
  };

  for (const name of datasetNames) {
    try {
      const result = await compileDataset(name, datasets[name], { force, dryRun });
      if (result) {
        manifest.datasets[name] = {
          count: result.length,
          hash: contentHash(result),
        };
      }
    } catch (e) {
      console.error(`  ERROR compiling ${name}: ${e.message}`);
    }
  }

  // Write manifest
  if (!dryRun) {
    ensureDir(COMPILED_DIR);
    const manifestPath = path.join(COMPILED_DIR, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
    console.log(`\nManifest written: ${manifestPath}`);
  }

  console.log('\nDone.');
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});

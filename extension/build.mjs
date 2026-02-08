#!/usr/bin/env node

/**
 * PF2e Lite Extension — Build Script
 *
 * Uses esbuild to bundle TypeScript source into the extension's dist/ directory.
 * Copies compiled data from data/compiled/ into extension/data/.
 *
 * Usage:
 *   node extension/build.mjs           # One-off build
 *   node extension/build.mjs --watch   # Watch mode for development
 */

import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const EXT_DIR = __dirname;
const COMPILED_DIR = path.join(ROOT, 'data', 'compiled');
const EXT_DATA_DIR = path.join(EXT_DIR, 'data');
const DIST_DIR = path.join(EXT_DIR, 'dist');

const watch = process.argv.includes('--watch');

// --- Copy compiled data ---

function copyCompiledData() {
  if (!fs.existsSync(COMPILED_DIR)) {
    console.warn('Warning: data/compiled/ not found. Run `npm run compile-data` first.');
    fs.mkdirSync(EXT_DATA_DIR, { recursive: true });
    return;
  }

  fs.mkdirSync(EXT_DATA_DIR, { recursive: true });
  const files = fs.readdirSync(COMPILED_DIR).filter((f) => f.endsWith('.json'));
  let copied = 0;
  for (const file of files) {
    fs.copyFileSync(path.join(COMPILED_DIR, file), path.join(EXT_DATA_DIR, file));
    copied++;
  }
  console.log(`Copied ${copied} data files to extension/data/`);
}

// --- Build ---

const sharedConfig = {
  bundle: true,
  minify: !watch,
  sourcemap: watch ? 'inline' : false,
  target: ['chrome120', 'firefox120'],
  logLevel: 'info',
};

async function build() {
  copyCompiledData();

  // Background service worker
  await esbuild.build({
    ...sharedConfig,
    entryPoints: [path.join(EXT_DIR, 'src', 'background.ts')],
    outfile: path.join(DIST_DIR, 'background.js'),
    format: 'esm',
  });

  // Content script (annotator + detectors)
  await esbuild.build({
    ...sharedConfig,
    entryPoints: [path.join(EXT_DIR, 'src', 'content', 'annotator.ts')],
    outfile: path.join(DIST_DIR, 'content', 'annotator.js'),
    format: 'iife',
  });

  console.log('Extension build complete.');
}

async function watchBuild() {
  copyCompiledData();

  const bgCtx = await esbuild.context({
    ...sharedConfig,
    entryPoints: [path.join(EXT_DIR, 'src', 'background.ts')],
    outfile: path.join(DIST_DIR, 'background.js'),
    format: 'esm',
  });

  const contentCtx = await esbuild.context({
    ...sharedConfig,
    entryPoints: [path.join(EXT_DIR, 'src', 'content', 'annotator.ts')],
    outfile: path.join(DIST_DIR, 'content', 'annotator.js'),
    format: 'iife',
  });

  await Promise.all([bgCtx.watch(), contentCtx.watch()]);
  console.log('Watching for changes...');
}

if (watch) {
  watchBuild().catch(console.error);
} else {
  build().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

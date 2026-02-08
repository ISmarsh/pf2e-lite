/**
 * PF2e Lite Companion — Background Service Worker
 *
 * Loads compiled game data and responds to queries from the content script.
 * Data is loaded once on install/startup and cached in memory.
 */

interface PF2eLiteEntry {
  name: string;
  _pf2eLite: {
    status: 'included' | 'modified' | 'original';
    changes?: Array<{ field: string; value?: string; note?: string }>;
    note?: string;
    source?: string;
  };
  [key: string]: unknown;
}

interface LookupResult {
  found: boolean;
  status: 'included' | 'modified' | 'not-found' | 'original';
  name?: string;
  note?: string;
  changes?: Array<{ field: string; value?: string; note?: string }>;
  mana_cost?: number;
}

// In-memory index: lowercase name -> entry
const dataIndex = new Map<string, PF2eLiteEntry>();

// Names that were explicitly removed (from modification files)
// These aren't in the compiled data, so we track "not in PF2e Lite" separately.
// For now, any AoN entry not found in our compiled data is assumed "not in PF2e Lite".

const DATASETS = [
  'ancestries',
  'heritages',
  'backgrounds',
  'classes',
  'feats',
  'spells',
  'equipment',
  'conditions',
];

async function loadData(): Promise<void> {
  dataIndex.clear();
  let totalLoaded = 0;

  for (const dataset of DATASETS) {
    try {
      const url = chrome.runtime.getURL(`data/${dataset}.json`);
      const response = await fetch(url);
      if (!response.ok) continue;

      const entries: PF2eLiteEntry[] = await response.json();
      for (const entry of entries) {
        if (entry.name) {
          dataIndex.set(entry.name.toLowerCase(), entry);
          totalLoaded++;
        }
      }
    } catch {
      // Dataset not yet compiled — skip silently
    }
  }

  console.log(`[PF2e Lite] Loaded ${totalLoaded} entries from ${DATASETS.length} datasets`);
}

function lookup(name: string): LookupResult {
  const entry = dataIndex.get(name.toLowerCase());

  if (!entry) {
    return { found: false, status: 'not-found' };
  }

  const lite = entry._pf2eLite;
  const result: LookupResult = {
    found: true,
    status: lite?.status || 'included',
    name: entry.name,
  };

  if (lite?.note) result.note = lite.note;
  if (lite?.changes) result.changes = lite.changes;
  if ('mana_cost' in entry) result.mana_cost = entry.mana_cost as number;

  return result;
}

// Listen for messages from content script
chrome.runtime.onMessage.addListener(
  (
    message: { type: string; name?: string },
    _sender: chrome.runtime.MessageSender,
    sendResponse: (response: LookupResult | { loaded: number }) => void,
  ) => {
    if (message.type === 'lookup' && message.name) {
      sendResponse(lookup(message.name));
    } else if (message.type === 'status') {
      sendResponse({ loaded: dataIndex.size });
    }
    return false; // Synchronous response
  },
);

// Load data on install and startup
chrome.runtime.onInstalled.addListener(() => {
  loadData();
});

chrome.runtime.onStartup.addListener(() => {
  loadData();
});

// Also load immediately (for development reloads)
loadData();

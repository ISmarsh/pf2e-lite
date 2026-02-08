/**
 * PF2e Lite Companion — Content Script (AoN Annotator)
 *
 * Injected into Archives of Nethys (2e.aonprd.com) pages.
 * Detects what entry the user is viewing and injects a PF2e Lite status badge.
 */

import { detectPageEntry } from './detectors';

interface LookupResult {
  found: boolean;
  status: 'included' | 'modified' | 'not-found' | 'original';
  name?: string;
  note?: string;
  changes?: Array<{ field: string; value?: string; note?: string }>;
  mana_cost?: number;
}

const BADGE_CONFIG = {
  included: {
    label: 'PF2e Lite',
    className: 'pf2e-lite-badge--included',
    tooltip: 'Included in PF2e Lite as-is',
  },
  modified: {
    label: 'Modified',
    className: 'pf2e-lite-badge--modified',
    tooltip: 'Included in PF2e Lite with changes',
  },
  'not-found': {
    label: 'Not in PF2e Lite',
    className: 'pf2e-lite-badge--excluded',
    tooltip: 'Not included in PF2e Lite',
  },
  original: {
    label: 'PF2e Lite Original',
    className: 'pf2e-lite-badge--original',
    tooltip: 'Original PF2e Lite content',
  },
} as const;

function createBadge(result: LookupResult): HTMLElement {
  const config = BADGE_CONFIG[result.status];
  const badge = document.createElement('span');
  badge.className = `pf2e-lite-badge ${config.className}`;
  badge.textContent = config.label;

  // Build tooltip content
  const lines: string[] = [config.tooltip];

  if (result.mana_cost !== undefined && result.mana_cost > 0) {
    lines.push(`Mana cost: ${result.mana_cost}`);
  }

  if (result.note) {
    lines.push(result.note);
  }

  if (result.changes) {
    for (const change of result.changes) {
      if (change.note) lines.push(change.note);
    }
  }

  badge.title = lines.join('\n');

  return badge;
}

function injectBadge(badge: HTMLElement): void {
  // AoN page titles are typically in <h1> elements.
  // Try several selectors to find the right insertion point.
  const titleEl =
    document.querySelector('h1.title') ||
    document.querySelector('h1') ||
    document.querySelector('[class*="title"]');

  if (titleEl) {
    // Insert badge after the title text
    titleEl.appendChild(document.createTextNode(' '));
    titleEl.appendChild(badge);
  }
}

async function annotate(): Promise<void> {
  const entry = detectPageEntry();
  if (!entry) return;

  try {
    const result: LookupResult = await chrome.runtime.sendMessage({
      type: 'lookup',
      name: entry.name,
    });

    const badge = createBadge(result);
    injectBadge(badge);
  } catch (e) {
    console.warn('[PF2e Lite] Failed to annotate:', e);
  }
}

// Run annotation after page load
annotate();

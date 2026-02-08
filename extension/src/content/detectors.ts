/**
 * PF2e Lite Companion — Page Entry Detectors
 *
 * Identifies what AoN entry the user is viewing based on URL and DOM.
 * AoN uses client-side routing; URL patterns are the primary detection method.
 */

export interface DetectedEntry {
  name: string;
  category: string;
}

/**
 * Detect the current AoN page entry from URL and DOM.
 *
 * AoN URL patterns (as of 2026):
 *   /Spells/SpellName
 *   /Feats/FeatName
 *   /Classes/ClassName
 *   /Ancestries/AncestryName
 *   /Equipment/ItemName
 *   /Conditions/ConditionName
 *   /Backgrounds/BackgroundName
 *   /Heritages/HeritageName
 *
 * NOTE: AoN's DOM structure is not stable and may change.
 * This detector is intentionally simple and may need updates.
 */
export function detectPageEntry(): DetectedEntry | null {
  const path = window.location.pathname;

  // Match /Category/EntryName pattern
  const match = path.match(
    /^\/(Spells|Feats|Classes|Ancestries|Equipment|Conditions|Backgrounds|Heritages)\/(.+)$/i,
  );

  if (match) {
    const category = match[1].toLowerCase();
    // AoN uses URL-encoded names with spaces as %20 or sometimes camelCase
    const rawName = decodeURIComponent(match[2]).replace(/([a-z])([A-Z])/g, '$1 $2');

    return { name: rawName, category };
  }

  // Fallback: try to extract from page title / h1
  const h1 = document.querySelector('h1');
  if (h1?.textContent) {
    const name = h1.textContent.trim();
    // Try to infer category from URL segments or page content
    const segments = path.split('/').filter(Boolean);
    const category = segments[0]?.toLowerCase() || 'unknown';

    if (name && name.length < 100) {
      return { name, category };
    }
  }

  return null;
}

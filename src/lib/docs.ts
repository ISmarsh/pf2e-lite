import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join(process.cwd(), 'docs');

/** Ordered list of docs to show in the sidebar. */
const DOC_ORDER = [
  '00-overview',
  '01-core-rules',
  '02-character-creation',
  '03-ancestries',
  '04-backgrounds',
  '05-classes',
  '06-artificer',
  '07-skills',
  '08-feats',
  '09-equipment',
  '10-spellcasting',
  '11-conditions',
  '12-dying',
  '13-shields',
  '14-crafting',
  '15-dedications',
  '16-exploration-and-downtime',
  '17-game-mastering',
  '18-open-questions',
  '19-setting',
  '20-creature-taxonomy',
  '21-magick-schools',
];

export interface DocMeta {
  slug: string;
  title: string;
}

/** Extract first # heading from markdown content. */
export function getDocTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : 'Untitled';
}

/** Read raw markdown content for a slug. */
export function getDocContent(slug: string): string {
  const filePath = path.join(DOCS_DIR, `${slug}.md`);
  return fs.readFileSync(filePath, 'utf-8');
}

/** Get all doc slugs that exist on disk, in display order. */
export function getDocSlugs(): string[] {
  const files = fs.readdirSync(DOCS_DIR).filter((f) => f.endsWith('.md'));
  const slugs = files.map((f) => f.replace(/\.md$/, ''));

  // Return ordered docs first, then any extras (supporting docs) in alphabetical order
  const ordered = DOC_ORDER.filter((s) => slugs.includes(s));
  const extras = slugs.filter((s) => !DOC_ORDER.includes(s)).sort();
  return [...ordered, ...extras];
}

/** Get metadata (slug + title) for all docs. */
export function getAllDocs(): DocMeta[] {
  return getDocSlugs().map((slug) => {
    const content = getDocContent(slug);
    return { slug, title: getDocTitle(content) };
  });
}

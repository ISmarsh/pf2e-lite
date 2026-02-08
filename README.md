# PF2e Lite

A streamlined Pathfinder 2e variant for levels 1-10. Browser extension for Archives of Nethys annotations + character builder.

**Version:** 0.2 Draft — February 2026
**License:** Game content under [ORC](ORC_NOTICE.md) (Open RPG Creative License) | Code under [MIT](LICENSE)

---

## Components

### Browser Extension (`extension/`)

A Chrome/Firefox extension that annotates [Archives of Nethys](https://2e.aonprd.com) with PF2e Lite compatibility info — badges showing whether each spell, feat, class, etc. is included, modified, or excluded from PF2e Lite.

### Character Builder (`builder/`)

A React SPA for building PF2e Lite characters (levels 1-10). Under development.

### Design Documents (`docs/`)

The source-of-truth for all rule modifications. See the full table below.

---

## Getting Started

```bash
npm install

# Compile game data (fetches from AoN API, applies PF2e Lite modifications)
npm run compile-data

# Build the extension
npm run build:extension

# Develop the character builder
cd builder && npm install && cd ..
npm run dev:builder       # http://localhost:5173
```

### Loading the Extension

1. Run `npm run build:extension`
2. Open Chrome → `chrome://extensions/` → Enable Developer Mode
3. Click "Load unpacked" → select the `extension/` directory

## Scripts

| Command | Description |
|---------|-------------|
| `npm run compile-data` | Fetch AoN data + apply PF2e Lite modifications |
| `npm run build:extension` | Build extension with esbuild |
| `npm run dev:extension` | Extension build in watch mode |
| `npm run dev:builder` | Start builder dev server (Vite) |
| `npm run build:builder` | Build builder for production |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run aon` | Low-level AoN API fetch utility |

## Design Documents

All design docs live in [`docs/`](docs/). These are the source-of-truth for the rule system.

| # | File | Status | Contents |
|---|------|--------|----------|
| 00 | [Overview](docs/00-overview.md) | Draft | Vision, design principles, ORC licensing, scope, AI policy, references |
| 01 | [Core Rules](docs/01-core-rules.md) | Draft | Level range, proficiency cap, action economy, degrees of success, standard variant rules |
| 02 | [Character Creation](docs/02-character-creation.md) | Stub | Character creation walkthrough, ability scores, gradual boosts |
| 03 | [Ancestries](docs/03-ancestries.md) | Draft | 7 core ancestries, 43 heritages, class pairings, expansion candidates |
| 04 | [Backgrounds](docs/04-backgrounds.md) | Draft | Character backgrounds, skill training, ability boosts |
| 05 | [Classes](docs/05-classes.md) | Draft | 12-class roster, subclasses, stat balance, expansion candidates |
| 06 | [Artificer](docs/06-artificer.md) | Draft | Full Artificer design — 4 subclasses, production systems, crafting interaction |
| 07 | [Skills](docs/07-skills.md) | Draft | 16 skills unchanged from PF2e, design rationale |
| 08 | [Feats](docs/08-feats.md) | Draft | Three feat tracks, proficiency auto-unlocks, advancement table |
| 09 | [Equipment](docs/09-equipment.md) | Stub | Weapons, armor, adventuring gear, materials, pricing |
| 10 | [Spellcasting](docs/10-spellcasting.md) | Draft | Mana system, cost curve, pools, caster tiers, heightening, metamagic |
| 11 | [Conditions](docs/11-conditions.md) | Draft | 20 consolidated conditions, detection simplification, cuts and rationale |
| 12 | [Dying](docs/12-dying.md) | Draft | Three-box dying system, baked-in wounded, survival probability |
| 13 | [Shields](docs/13-shields.md) | Draft | Simplified shield system — block value, durability ticks |
| 14 | [Crafting](docs/14-crafting.md) | Draft | Redesigned crafting — 25% cost, proficiency-based time, batch crafting |
| 15 | [Dedications](docs/15-dedications.md) | Draft | Multiclass dedication templates, all 12 dedications, Artificer dedication |
| 16 | [Exploration & Downtime](docs/16-exploration-and-downtime.md) | Draft | Exploration mode, travel, rest, downtime activities, Hero Points, clocks |
| 17 | [Game Mastering](docs/17-game-mastering.md) | Draft | Encounter math verified, XP budgets, DCs, creature benchmarks, treasure by level |
| 18 | [Open Questions](docs/18-open-questions.md) | Draft | Prioritized to-do, open design questions, next steps |

### Supporting Files

- `docs/pf2e_mana_math.xlsx` — Mana system mathematical analysis (cost curves, pool sizing, flexibility scenarios)
- [10a-spell-audit.md](docs/10a-spell-audit.md) — Spell list audit: 412 spells analyzed for mana compatibility, class feature conversions, Golarion references
- [06c-artificer-balance-report.md](docs/06c-artificer-balance-report.md) — Artificer balance analysis vs empowered peers

## Key Design Decisions

- **Levels 1-10, Master cap** — Adventurer tier only
- **Mana replaces Vancian** — Moderate cost curve (1/2/4/7/11), long rest recovery only, full-caster-only
- **20 conditions** — Down from 40+, two-tier detection
- **Three-box dying** — Visual checkboxes, baked-in wounded escalation
- **Simplified shields** — Block value + durability ticks
- **Three feat tracks** — Class / General (merged skill+general) / Ancestry + proficiency auto-unlocks
- **16 skills unchanged**
- **12 classes** — 4 martial + 4 full caster + 4 empowered (one per tradition pair)
- **Empowered classes** — Tradition-flavored martial/skill classes with focus spells, no mana pool (Champion, Ranger, Artificer, Thaumaturge)
- **Artificer** — INT arcane-empowered crafter, Alchemist-model infusion system, 4 subclasses
- **Thaumaturge** — CHA occult-empowered martial, Exploit Vulnerability + Implements, ported from Dark Archive Remastered
- **7 ancestries, 43 heritages** — All ported from PF2e Remastered
- **Crafting redesigned** — 25% material cost, 1-3 day crafting time by proficiency
- **Free Archetype + Gradual Ability Boosts** — Standard rules
- **All multiclass dedications defined** — Three templates (martial/empowered/full caster), 12 dedications total

# Equipment

All equipment ported directly from PF2e Remastered under ORC. Weapon and armor math is part of PF2e's core balance -- straight ports except where noted (shields use simplified system, see [Shields](13-shields.md)).

## Cached Data

| Category | Cache File | Entries | Sources |
|----------|-----------|---------|---------|
| Weapons | `.aon-cache/weapons.json` | 83 | Player Core, Player Core 2 |
| Armor | `.aon-cache/armor.json` | 13 | Player Core, Player Core 2 |
| Shields | `.aon-cache/shields.json` | 4 | Player Core, Player Core 2 |
| Runes | `.aon-cache/equipment-runes.json` | 146 | Player Core, Player Core 2, GM Core |
| Staves | `.aon-cache/equipment-staves.json` | 80 | Player Core, Player Core 2, GM Core, Rage of Elements |
| Wands | `.aon-cache/equipment-wands.json` | 64 | Player Core, Player Core 2, GM Core |
| Talismans | `.aon-cache/equipment-talismans.json` | 65 | Player Core, Player Core 2, GM Core, Rage of Elements |
| Worn Items | `.aon-cache/equipment-worn.json` | 222 | Player Core, Player Core 2, GM Core, Rage of Elements, Howl of the Wild |

Caches include all remastered items at all levels. Our system uses levels 1-10 only -- filter by `level` field.

## Weapons

Ported as-is. Includes simple (melee + ranged), martial (melee + ranged), ancestry weapons (uncommon), and monk weapons (uncommon). Handwraps of Mighty Blows are essential for unarmed-focused characters (primarily Monk) -- they transfer weapon rune bonuses to unarmed attacks.

## Armor

Ported as-is. Unarmored through Heavy (Full Plate). Explorer's Clothing accepts armor property runes for unarmored characters. Bulwark trait on Full Plate uses +3 modifier for Reflex saves if DEX modifier is +0 or +1.

## Shields

Uses simplified Hardness + Durability system. See [Shields](13-shields.md) for full mechanics, conversion formula, and progression tables.

## Runes

### Fundamental Runes

Weapon: Potency +1 (L2), Striking (L4), Potency +2 (L10). Greater Striking (L12) and +3 Potency (L16) are above our level range.

Armor: Potency +1 (L5), Resilient (L8), Potency +2 (L11 -- just outside our range). Characters cap at +1 Resilient armor.

Shield: Reinforcing at Minor/Lesser/Moderate (L4/L7/L10). Reinforcing trails Sturdy at each tier -- see [Shields](13-shields.md) for comparison.

### Property Runes

Weapon: 14 property runes available at L3-L9. Energy runes (Flaming, Frost, Shock, etc.) cluster at L8. All ported as-is.

Armor: 10 property runes available at L5-L10. Skill bonuses (Shadow, Slick) and utility (Ready, Energy-Resistant, Invisibility). All ported as-is.

## Staves

Magical staves give casters access to themed spell lists and extra daily casting capacity through a charge system separate from mana. 36 staves across 19 staff lines in L1-10 (all ORC licensed).

### Mana Interaction

**Preparing a staff:** During daily preparations, a caster prepares one staff. The staff gains **charges equal to the highest spell rank you can cast** (free, no mana cost).

**Casting from a staff:** Spend charges equal to the spell's rank. Uses your spell modifiers. Staff cantrips are free.

**Bonus charges (prepared casters -- Wizard, Cleric, Druid):** During daily prep, spend mana equal to a rank's mana cost to add charges equal to that rank number. Maximum one sacrifice per day. Example: spend 4 mana (R3 cost) to add 3 charges.

**Bonus charges (spontaneous casters -- Bard):** During play, cast a staff spell by spending 1 charge + the mana cost of the rank you're casting at. Example: cast a R3 staff spell for 1 charge + 4 mana (instead of 3 charges).

**Staff weapons:** Staves can be etched with fundamental runes (potency, striking) but not property runes.

### What This Preserves

- Charge management mini-game: allocating limited charges across multiple spell ranks remains a meaningful daily decision
- Prepared vs. spontaneous distinction: different bonus charge mechanics match PF2e's different staff interactions
- Spell access value: staves provide access to spells outside your preparations or repertoire

### What This Simplifies

- "Sacrifice a spell slot" becomes "spend mana equal to that rank's cost" for prepared casters. Same power level, one fewer concept.
- Spontaneous charge discount maps directly: 1 charge + 1 slot becomes 1 charge + mana. No new mechanics needed.

## Wands

Wands hold a single spell and let you cast it once per day without spending mana. Each wand contains a specific spell at a specific rank. 9 specialty wand types, 20 specific variants in L1-10 (all ORC licensed).

**Overcharge:** After using the wand for the day, attempt one more cast via DC 10 flat check -- on success: broken (repairable); on failure: destroyed.

**No mana interaction.** Wands are self-contained 1/day resources.

## Scrolls

Single-use consumables containing one spell at a fixed rank. Item level = (spell rank x 2) - 1. **No mana interaction.**

**Batch crafting:** Scrolls can be crafted in batches of four (same spell, same rank). See [Crafting](14-crafting.md).

## Worn Magic Items

222 remastered worn items exist across all levels (filtered to L1-10 for our system). Most port with zero changes -- no mana interaction.

**Skill bonus items** form the backbone: each skill typically has a +1 item at L3-5 and a +2 at L9-10.

**Focused items** (L10, 1,000 gp each) grant 1 bonus Focus Point per day for class-specific focus spells. Focus Point economy preserved from PF2e -- no mana conversion needed.

### Mana Conversion Notes

- **Mage's Hat (Greater)** is the only worn item referencing prepared spells: "If you prepare arcane spells, you can change the spell." Rephrase to: "If you are an arcane caster, you can change the spell."
- All other items are self-contained activations (fixed DCs, no slot costs) or skill bonuses. Zero mana interaction.

### Deferred Categories

- **Aeon Stones** (10 items, all uncommon): Niche ecosystem tied to Wayfinder item. Deferred to expansion.
- **Companion Items** (5 items): Blocked on animal companion rules. See [Open Questions](18-open-questions.md).

## Talismans

Single-use magical charms affixed to weapons, armor, or shields. Activated as a free action during a specific trigger, then crumbles to dust. "Martial characters' answer to scrolls." 38 items in L1-10 (36 common, 2 uncommon, all ORC licensed).

**Affixing:** 10 minutes with a repair toolkit. One talisman per item.

**No mana interaction.** Talismans are entirely self-contained consumables. No spellcasting prerequisites.

**Enchanter subclass relevance:** The Artificer's Enchanter subclass creates temporary enchantments. Talismans are the consumable half of that design space. See [Artificer](06-artificer.md).

## Precious Materials

6 materials available at levels 1-10: Cold Iron (common, L2/L7), Silver (common, L2/L7), Adamantine (uncommon, L8), Dawnsilver (uncommon, L8), Duskwood (uncommon, L8), Dragonhide (uncommon, L8).

Low-grade cold iron and silver (L2) are the primary early-game material interaction (creature vulnerabilities). Standard-grade special materials (L8) are late-game upgrades.

## Adventuring Gear

Ported as-is. Upgraded toolkits at L3 grant +1 item bonuses to associated skill checks (Healer's Toolkit, Thieves' Toolkit, Artisan's Toolkit, etc.).

## Equipment Progression Benchmarks

Typical upgrade path for a martial character:

| Level | Weapon | Armor | Shield |
|-------|--------|-------|--------|
| 1 | Base weapon | Starting armor | Base shield |
| 2 | +1 Weapon Potency (35 gp) | -- | Low-grade material (optional) |
| 4 | +1 Striking (100 gp total) | -- | Sturdy Minor (100 gp) |
| 5 | -- | +1 Armor Potency (160 gp) | -- |
| 7 | -- | -- | Sturdy Lesser (360 gp) |
| 8 | First property rune (500 gp) | Resilient (500 gp total) | -- |
| 10 | +2 Striking (1,000 gp total) | -- | Sturdy Moderate (1,000 gp) |

## Design Notes

- **Weapon and armor tables are straight ports** -- the math is PF2e's core balance. No modifications needed.
- **Shield stats use the simplified system** from [Shields](13-shields.md). Hardness kept as-is; Durability derived from expected Shield Blocks at-level.
- **Runes capped at L10** -- only fundamental runes and property runes available in our range are listed.
- **Armor Potency +2 (L11)** is technically out of range -- characters cap at +1 Armor Potency + Resilient. Natural power ceiling.
- **Material progression matters** -- cold iron and silver are affordable by L2 and relevant for creature vulnerabilities.
- **Magic items are overwhelmingly clean ports.** Staves are the only category requiring mana conversion. Wands, scrolls, worn items, talismans, and held items are self-contained -- no mana interaction. Only one item (Mage's Hat Greater) needs minor rephrasing.

## Interaction with Artificer Infusions

Artificer infusions (see [Artificer](06-artificer.md)) occupy a separate "space" from permanent runes. A weapon can have both its normal runes and an active infusion without conflict. Most infusions provide qualitative capabilities, not numerical bonuses. Exception: the Enchanter subclass can create temporary fundamental runes, but standard rune restrictions prevent stacking.

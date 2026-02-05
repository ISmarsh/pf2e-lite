# Open Questions & To-Do

## High Priority

### Encounter Building Math Verification — Resolved

No gaps. Within levels 1-10, PF2e's natural proficiency progression rarely reaches Master and never reaches Legendary. The "Master cap" isn't actively constraining anything — it's a restatement of "we stop at level 10." Fighter gets Master weapons at 5 (normal PF2e). All other classes stay at Expert in their key offensive stat through level 10 (normal PF2e). Creature stat benchmarks, XP budgets, and hit rate targets all port directly.

- ✅ Master cap doesn't create gaps — classes naturally stay within Master through level 10
- ✅ GM Core creature building benchmarks hold — designed for full 1-25 range, work fine at 1-10
- ✅ 65% hit rate and crit thresholds work — same proficiency bonuses as standard PF2e at these levels
- ⚠️ Watch during playtesting: mana flexibility may change *pacing* (front-loading power) even though encounter *balance* is unchanged
- See [Game Mastering](17-game-mastering.md)

### Skill Feat Evaluation — Resolved

Evaluated all 16 skills for must-take feats (RPGBot ratings, community consensus, AoN API verification). Only Medicine had universally mandatory feats. Auto-unlock subsystem replaced with Medicine proficiency benefits.

- ✅ Continual Recovery and Ward Medic folded into Medicine proficiency (Expert: 10-min immunity, Master: 4 targets)
- ✅ Battle Medicine remains a general feat (genuine choice, not a tax)
- ✅ Crafting/Stealth feats confirmed build-dependent, not mandatory
- ✅ PF2e feat count corrected (15 across four tracks, not 17)
- ✅ Feat density verified: 4 genuine choices vs PF2e's ~4-5, offset by Free Archetype
- See [Skills](07-skills.md#proficiency-benefits) and [Feats](08-feats.md)

### Artificer Deep Design — Resolved

Complete class design in [Artificer](06-artificer.md). All major items resolved:

- ✅ Four subclasses designed (Alchemist, Innovator, Gadgeteer, Enchanter) with production systems and feat lines
- ✅ Tamper as universal combat action (Crafting vs. Reflex DC, auto-scaling E@3/M@7)
- ✅ Arcwright focus spell system (14 spells, 4-tier feat chain at L1/L4/L6/L10)
- ✅ 54 class feats across L1-10
- ✅ Production slot counts: INT mod formula for all three production subclasses
- ✅ Balance report completed vs empowered peers — see [Balance Report](06c-artificer-balance-report.md)
- ⚠️ Number tuning (damage dice, temp HP, healing amounts) deferred to playtesting

### Thaumaturge Integration — Resolved

All questions answered, class ports cleanly:

- **Implement system:** ✅ Ports cleanly. 1st implement at level 1, 2nd at level 5, adept upgrade at level 7. 3rd implement (15) and paragon (17) are outside our level 10 cap — clean cutoff.
- **All 9 implements in core:** ✅ Keep all 9. Each serves a distinct role (defense, debuff, healing, revelation, positioning, social, knowledge, ranged, martial). Players only pick 2 — comparable to Barbarian's 6 instincts or Druid's 4 orders. Low play complexity, high build variety.
- **Occult tradition assignment:** ✅ Assign occult to any focus spells gained through Thaumaturge class feats. Minor bookkeeping, matches flavor and PF1e Occultist lineage.
- **Scroll Thaumaturgy:** ✅ Keep all-tradition scroll use. Core class identity — Thaumaturge understands all magic through esoteric study. Restricting to occult would remove a defining feature.
- **Personal Antithesis scaling:** ✅ Competitive through level 10. Damage is 2 + half level (7 at level 10) — solid flat bonus per hit, balanced against Expert (not Master) weapon proficiency. Comparable to Ranger's Precision edge and weapon specialization bonuses.
- **Dedication:** ✅ Ports directly from PF2e Dark Archive. Glimpse Vulnerability (flat weakness 2) at level 2, Implement Initiate at level 6.
- See [Classes](05-classes.md)

## Medium Priority

### Generic Archetypes Review

- Review PF2e's complete archetype list
- Flag high-priority generic archetypes for first expansion (likely Medic, Marshal, Sentinel)
- Check for archetypes that interact with changed systems (mana, conditions) and may need adaptation
- See [Dedications](15-dedications.md)

### Monk as Fourth Martial — Resolved

Promoted to core. Grid is now 4 martial / 4 full caster / 4 empowered = 12 classes.

- ✅ Symmetric 4/4/4 grid — easier to communicate, aesthetically clean
- ✅ Popular class fantasy — more mainstream than Thaumaturge or Champion, not "niche"
- ✅ Mechanically distinct — unarmed/unarmored chassis, Flurry of Blows, stances. No overlap with Fighter/Rogue/Barbarian
- ✅ Clean port from Player Core 2 — zero custom design needed, all mechanics work within L1-10
- ✅ Qi spells (optional, feat-gated) give WIS secondary martial relevance. Key ability is STR or DEX (not WIS as previously noted)
- ✅ Handwraps of Mighty Blows added to equipment for unarmed rune progression
- ✅ Monk Dedication added to martial dedications (prereq STR 14, DEX 14)
- See [Classes](05-classes.md)

### Expansion Classes

- Psychic as first expansion caster (occult full caster, complex but distinct — streamline amps and Unleash Psyche)
- Monk promoted to core — Swashbuckler is the primary expansion martial candidate
- Sorcerer, Witch, Magus, Swashbuckler as expansion candidates
- Inventor, Oracle, Summoner, Kineticist as later waves
- With Psychic as expansion: two occult full casters (Bard + Psychic) — acceptable since they play very differently
- See [Classes](05-classes.md)

### Expansion Ancestries

- Leshy, Catfolk, Ratfolk, Tengu, Kobold, Gnoll/Kholo as candidates
- Versatile Heritages (Tiefling, Aasimar, Changeling, Dhampir) as a system addition
- Check HP/Size grid gaps that new ancestries could fill
- See [Ancestries](03-ancestries.md)

### Metamagic System

- Full metamagic design for Wizard
- Mana cost multipliers or flat additions for each effect
- Which metamagic options are available to non-Wizards via feats
- See [Spellcasting](10-spellcasting.md)

### Spell List Audit

- Verify all PF2e spells in ranks 1-5 work with the mana system
- Spells referencing Golarion-specific concepts need renaming
- Spells balanced around specific slot counts may need rebalancing for mana flexibility
- See [Spellcasting](10-spellcasting.md)

## Lower Priority

### Detection System Edge Cases

- Two-tier detection (Concealed/Hidden): how do abilities referencing Undetected or Unnoticed map to Hidden?
- Playtest to confirm DC 5 and DC 11 flat checks feel right
- See [Conditions](11-conditions.md)

### Stupefied Simplification

- Verify no spells or abilities specifically rely on the "flat check to lose spell" mechanic
- Check if creature abilities or class features reference the removed mechanic
- See [Conditions](11-conditions.md)

### Dying System Edge Cases

- How do effects referencing "Dying value" translate to the box system?
- How does Diehard feat (or equivalent) interact with boxes?
- Verify knockdown count reset timing
- See [Dying](12-dying.md)

### Shield Material Progression — Resolved

Conversion formula defined: Block Value = Hardness (1:1), Durability Ticks derived from expected Shield Blocks at-level. Full progression documented including base shields, Sturdy shields, Reinforcing runes, and material shields.

- ✅ Conversion formula with validation table
- ✅ Base shields: Buckler 3/2, Wooden 3/2, Steel 5/3, Tower 5/3
- ✅ Sturdy shields: Minor 8/6, Lesser 10/7, Moderate 13/8
- ✅ Reinforcing runes: +2/+2, +3/+3, +4/+4 (trails Sturdy by design)
- ✅ Material shields: special materials gain +1 Tick
- ⚠️ Remaining: shield repair tick restoration amount (all ticks vs fixed number?)
- See [Shields](13-shields.md)

### Crafting System Details

- Define field crafting item list and DCs
- Consumable batch size: is 4 the right number for all types?
- See [Crafting](14-crafting.md)

### Equipment Tables

- Port relevant equipment from PF2e, verify pricing against crafting economics
- See [Equipment](09-equipment.md)

### Exploration and Downtime

- Review PF2e's exploration mode and downtime rules for simplification opportunities
- See [Exploration & Downtime](16-exploration.md)

## Open Design Questions

### Mana System

- Is the moderate cost curve (1/2/4/7/11) the right balance? Needs playtesting.
- Does mana flexibility (many low-rank spells vs. fewer high-rank) create balance issues at specific levels?

### Conditions

- Is two-tier detection sufficient, or do edge cases require the full four-tier PF2e system?
- Does simplified Stupefied (no spell-loss flat check) make the condition too weak as a caster debuff?

### Feats

- Does merging general and skill feats feel like enough choices at each level?

### Classes

- ~~Should Monk move from expansion to core?~~ — ✅ Resolved. Monk promoted to core, 4/4/4 grid.
- With 12 classes, does the roster feel too large for a "lite" system, or does the symmetry justify it?

### Crafting

- Does 25% material cost + specialty feat gate create the right economic balance?
- Is batch-of-4 consumable crafting too generous?

### Dedications

- Is quarter-caster mana (7 at level 8) too flexible compared to PF2e's rigid 3 slots?
- How does Free Archetype as standard interact with dedication balance? (Every character gets free archetype feats, so dedication investment costs nothing from class progression.)

## Next Steps

1. ~~Encounter math verification~~ — ✅ Resolved, ports directly
1. ~~Artificer class design~~ — ✅ Resolved. Full design in [06-artificer.md](06-artificer.md), balance report in [06c-artificer-balance-report.md](06c-artificer-balance-report.md)
1. ~~Thaumaturge integration review~~ — ✅ Resolved, ports cleanly
1. ~~Auto-unlock feat list~~ — ✅ Resolved. Finalized in [08-feats.md](08-feats.md)
1. ~~Shield conversion formula~~ — ✅ Resolved. Formula and full progression in [13-shields.md](13-shields.md)
1. Pull all sections into a unified playtest document
1. Begin human-written flavor text for classes and ancestries
1. Character sheet design

## Supporting Analysis

- `pf2e_mana_math.xlsx` — Six-sheet workbook analyzing spell slot to mana conversion, cost curves, mana pools, and casting flexibility scenarios

## Reference Sources (ORC Licensed)

- **Archives of Nethys** (2e.aonprd.com) — Complete PF2e Remastered rules reference
- **GM Core Chapter 2: Building Creatures** — Benchmark stat tables by level
- **GM Core Chapter 1: Difficulty Classes** — Level-based DC table
- **The Finished Book** (tomedunn.github.io) — Community math analysis
- **RPGBot Fundamental Math guide** — Degrees of success probability analysis

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

### Generic Archetypes Review — Resolved

Reviewed all 10 remastered generic archetypes from Player Core 2 (ORC-licensed). Categorized by priority, flagged system interactions. Core vs expansion placement deferred to compilation phase.

- ✅ 4 high-priority archetypes identified: Marshal (14 feats L2-L10), Medic (4 feats), Sentinel (5 feats), Bastion (13 feats)
- ✅ 5 medium-priority: Archer, Acrobat, Beastmaster (blocked — needs animal companion rules), Blessed One, Archaeologist
- ✅ 1 low-priority: Assassin (condition mapping needed for cut detection states)
- ✅ System interactions mapped: Bastion needs shield terminology translation, Archer/Blessed One need mana conversion, Medic confirmed no overlap with Medicine proficiency benefits
- ✅ 14 popular legacy-only archetypes (APG) noted as future review candidates
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

### Metamagic System — Resolved

Ported directly from PF2e Remastered as "Spellshape" class feats. Action cost (not mana cost), per-class feat lists, truncated at level 10. All four full caster classes get spellshape options. Detection-interacting feats (Conceal Spell, Melodious Spell) reviewed and confirmed to port cleanly with the finalized two-tier detection system.

- ✅ Action-cost model preserved from PF2e (1 extra action, not mana)
- ✅ Per-class feat lists: Wizard 6, Cleric 5, Druid 7, Bard 9 options within L1-10
- ✅ Shared feats (Reach Spell, Widen Spell) kept shared across applicable classes
- ✅ Conceal Spell / Melodious Spell: interact with Concealed/Hidden two-tier system — detection resolved, feats port with two-tier terminology
- See [Spellcasting](10-spellcasting.md#spellshape-metamagic)

### Spell List Audit — Resolved

406 remastered spells audited across ranks 1-5 (excluding cantrips and focus spells). Vast majority compatible with mana system without modification.

- ✅ Mana pool equals total Vancian slot value at each level — total daily output is equivalent
- ✅ Cost curve (1/2/4/7/11) creates natural efficiency gradient — lower ranks are more mana-efficient, discouraging degenerate top-rank concentration
- ✅ PF2e's existing constraints (bonus type stacking, Sustained action limits, 3-action rounds) are unaffected
- ✅ Only 1 of 406 spells (Ymeri's Mark) requires Golarion-specific renaming
- ✅ Healing Font: WIS mod free Heal/Harm casts per day (free casts, not tagged mana — flat mana doesn't scale with rank costs)
- ✅ Wizard curriculum: 1 free curriculum spell per rank per day (maps 1:1 to PF2e bonus prepared slots)
- ⚠️ 8 spells flagged for playtest monitoring (Heal, Haste, Heroism, Slow, summons, Invisibility, Fly, Wall of Stone)
- See [Spell List Audit](10a-spell-audit.md)

## Lower Priority

### Detection System Edge Cases — Resolved

Two feats excluded from the system due to two-tier collapse; all other references map cleanly.

- ✅ Blind-Fight (Fighter/Ranger L8): excluded — upgrades Undetected→Hidden, same tier in our system
- ✅ Startling Appearance (Rogue L6): excluded — requires Unnoticed, which no longer exists
- ✅ Revealing Stab (Rogue L6): minor rephrase ("make Hidden creature Concealed")
- ✅ All spells granting Undetected (Invisibility, etc.) map cleanly to Hidden
- ⚠️ Playtest: confirm DC 5 and DC 11 flat checks feel right
- See [Conditions](11-conditions.md)

### Stupefied — Resolved (Kept As-Is)

Flat check (DC 5 + value) preserved from PF2e. Removing it would weaken the condition by ~45-60% against casters.

- ✅ No abilities specifically rely on the flat check mechanic — they just apply the Stupefied value
- ✅ Flat check is core to PF2e Remastered's condition definition
- ✅ Preserves Stupefied's identity as the anti-caster debuff
- See [Conditions](11-conditions.md)

### Dying System Edge Cases

- How do effects referencing "Dying value" translate to the box system?
- How does Diehard feat (or equivalent) interact with boxes?
- Verify knockdown count reset timing
- See [Dying](12-dying.md)

### Shield Material Progression — Resolved

Keeping PF2e's "Hardness" term (same values, no rename). Durability derived from expected Shield Blocks at-level. Full progression documented including base shields, Sturdy shields, Reinforcing runes, and material shields.

- ✅ Conversion formula with validation table
- ✅ Base shields: Buckler 3/2, Wooden 3/2, Steel 5/3, Tower 5/3
- ✅ Sturdy shields: Minor 8/6, Lesser 10/7, Moderate 13/8
- ✅ Reinforcing runes: +2/+2, +3/+3, +4/+4 (trails Sturdy by design)
- ✅ Material shields: special materials gain +1 Durability
- ⚠️ Remaining: shield repair restoration amount (all durability vs fixed number?)
- See [Shields](13-shields.md)

### Crafting System Details

- Define field crafting item list and DCs
- Consumable batch size: is 4 the right number for all types?
- See [Crafting](14-crafting.md)

### Equipment Tables — Partially Resolved

Core weapon/armor/shield tables ported. Six magic item categories documented (staves, wands, scrolls, worn items, talismans, held items). All port cleanly with zero or minimal mana conversion.

- ✅ Staves: charge system preserved; prepared casters spend mana for bonus charges, spontaneous casters spend 1 charge + mana
- ✅ Wands: 1/day + overcharge, no mana interaction
- ✅ Scrolls: single-use consumables, no mana interaction
- ✅ Worn items: 108 items cataloged; only Mage's Hat (Greater) needs minor rephrasing
- ✅ Talismans: 38 items, zero mana interaction
- ✅ Held items: 22 item families, zero mana interaction
- ⚠️ Remaining: verify pricing against crafting economics, Aeon Stones (deferred to expansion), Companion Items (blocked on companion rules)
- See [Equipment](09-equipment.md)

### Animal Companion Rules

- Required for Beastmaster archetype (currently blocked), Druid Animal Order, Ranger companion feats
- No core class *requires* companions (Druid Animal is one of four orders, Ranger companions are feat-gated), but missing rules leave a gap
- See [Dedications](15-dedications.md)

### Hero Points

- Port PF2e's Hero Point system as-is, or simplify?
- Hero Points provide a narrative safety valve (spend to stabilize or reroll) — interacts with our three-box dying system
- See [Exploration & Downtime](16-exploration-and-downtime.md)

### Archetype Implementation Work — Partially Resolved

Follow-up from the resolved Generic Archetypes Review. Bastion and mana conversions complete; Assassin blocked on detection system.

- ✅ Bastion: keeping "Hardness" — Destructive Block ports as-is. Shield Salvation above L10 cap.
- ✅ Eldritch Archer: Basic EA Spellcasting grants quarter-caster mana pool. Eldritch Reload triggers on mana casting.
- ✅ Blessed Spell: prerequisite and effect updated from "spell slots" to "mana"
- ✅ Assassin: Observed→default state, Undetected→Hidden. Assassinate (L12) above cap. Functional with minor rephrasing.
- See [Dedications](15-dedications.md)

### Exploration and Downtime — Resolved

PF2e exploration and downtime systems ported with evaluation of SMARS Focus check innovations.

- ✅ All PF2e exploration activities ported (Avoid Notice, Scout, Search, Detect Magic, Investigate, Defend, Hustle, Follow the Expert, etc.)
- ✅ All PF2e downtime activities ported (Craft cross-ref to [14-crafting.md](14-crafting.md), Earn Income, Retraining, Learn a Spell, Treat Disease, Subsist)
- ✅ Resting mechanics documented (10-min rest activities, long rest recovery, post-combat sequence)
- ✅ Hero Points ported with three-box dying interaction analysis
- ✅ SMARS Focus check system evaluated: progress/danger clocks adopted as core addition, Focus dice presented as optional variant
- ⚠️ Clock sizes and GM guidance need expansion during playtesting
- See [Exploration & Downtime](16-exploration-and-downtime.md)

## Open Design Questions

### Focus Terminology Collision

If the SMARS Focus check system (proficiency-driven dice for Exploration/Downtime) is adopted, "Focus" would mean two things: Focus spells/Focus Points (per-encounter casting) and Focus checks (exploration dice). Options:

- Rename the exploration mechanic (e.g., "Settle checks")
- Keep both and rely on context

The Focus dice system is recommended as an optional variant only (see [Exploration & Downtime](16-exploration-and-downtime.md#part-6-variant-rule----focus-dice)), which reduces the urgency of this naming collision. If the variant sees adoption, the terminology will need resolution.

### Saving Throw Pairings

SMARS proposes dual-ability saves where the player chooses the better modifier:

| Save | SMARS Abilities | PF2e Standard |
|------|----------------|---------------|
| Fortitude | STR or CON | CON-based |
| Reflex | DEX or INT | DEX-based |
| Will | WIS or CHA | WIS-based |

This would make INT relevant to Reflex (reflecting quick analytical threat processing) and CHA relevant to Will (reflecting force of personality against mental effects). **Not implemented** -- flagged for evaluation. Key concern: does this make saves too easy by letting players always use their better stat?

### Mana System

- Is the moderate cost curve (1/2/4/7/11) the right balance? Needs playtesting.
- Does mana flexibility (many low-rank spells vs. fewer high-rank) create balance issues at specific levels?
- **Overcasting:** SMARS proposes spending HP or taking exhaustion to cast beyond your pool. Defer as optional playtest variant.

### Conditions

- ~~Is two-tier detection sufficient?~~ — ✅ Yes, with 2 feat exclusions and 1 rephrase. See Detection System Edge Cases above.
- ~~Does simplified Stupefied make the condition too weak?~~ — ✅ Resolved by keeping flat check as-is from PF2e. See Stupefied above.

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
- ~~Which generic archetypes to include?~~ — ✅ Reviewed and categorized. See Generic Archetypes Review above.

## Next Steps

1. ~~Encounter math verification~~ -- ✅ Resolved, ports directly
1. ~~Artificer class design~~ -- ✅ Resolved. Full design in [06-artificer.md](06-artificer.md), balance report in [06c-artificer-balance-report.md](06c-artificer-balance-report.md)
1. ~~Thaumaturge integration review~~ -- ✅ Resolved, ports cleanly
1. ~~Auto-unlock feat list~~ -- ✅ Resolved. Finalized in [08-feats.md](08-feats.md)
1. ~~Shield conversion formula~~ -- ✅ Resolved. Formula and full progression in [13-shields.md](13-shields.md)
1. ~~Exploration & Downtime~~ -- ✅ [Exploration & Downtime](16-exploration-and-downtime.md) developed (PF2e audit + Focus check evaluation + clocks + variant rule)
1. Pull all sections into a unified playtest document
1. Begin human-written flavor text for classes and ancestries
1. Character sheet design

### ORC Content Verification — Partially Resolved

AoN Elasticsearch audit verified all referenced content against remastered ORC-licensed sources (Feb 2026).

- ✅ Spell list: all 406 spells confirmed in ORC sources (Player Core, PC2, Rage of Elements, Howl of the Wild, War of Immortals, Divine Mysteries)
- ✅ Zero Secrets of Magic-only, APG-only, or CRB-only spells referenced
- ✅ Pre-remaster spell names corrected (Magic Missile → Force Barrage, Magic Weapon removed, Remove Curse → Cleanse Affliction)
- ✅ Flash Pellet removed (item doesn't exist in PF2e), Dust Pods removed (AP-only, never reprinted)
- ✅ 5 Gadgeteer items confirmed ORC (Alarm Snare, Hampering Snare, Trip Snare from PC2; Potency Crystal, Jade Cat from GM Core)
- ⚠️ 8 Gadgeteer items from G&G original — G&G Remastered (Feb 2025, ORC) exists but AoN hasn't indexed it yet
- ⚠️ All Thaumaturge content matches pre-remaster Dark Archive — Dark Archive Remastered (Feb 2026, ORC) exists but AoN hasn't indexed it yet
- ⚠️ Re-verify Gadgeteer and Thaumaturge content once AoN indexes remastered editions
- See [ORC_NOTICE.md](../ORC_NOTICE.md) for full attribution

## Supporting Analysis

- `pf2e_mana_math.xlsx` — Six-sheet workbook analyzing spell slot to mana conversion, cost curves, mana pools, and casting flexibility scenarios

## Reference Sources (ORC Licensed)

- **Archives of Nethys** (2e.aonprd.com) — Complete PF2e Remastered rules reference
- **GM Core Chapter 2: Building Creatures** — Benchmark stat tables by level
- **GM Core Chapter 1: Difficulty Classes** — Level-based DC table
- **The Finished Book** (tomedunn.github.io) — Community math analysis
- **RPGBot Fundamental Math guide** — Degrees of success probability analysis

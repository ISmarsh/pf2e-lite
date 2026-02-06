# Game Mastering

> **Status:** Draft — encounter math verified, systems to port.

## Encounter Math Verification — Resolved

The Master proficiency cap does **not** create gaps in PF2e's encounter math. Within levels 1-10, PF2e's natural proficiency progression rarely reaches Master, and never reaches Legendary:

- **Fighter** (the most advanced martial): Expert weapons at 1, Master at 5. Legendary is at 13 — outside our range. The Master cap is never hit.
- **Other weapon classes** (Barbarian, Rogue, Ranger, Champion, Thaumaturge — martials and empowered alike): Expert weapons by level 5-7. Master at 13 — outside our range. They never reach Master in weapons during levels 1-10.
- **Full casters** (Wizard, Cleric, Druid, Bard): Expert spell DCs around level 7. Master at 15+ — outside our range.
- **Saving throws**: Most Master save upgrades happen around levels 7-17 depending on class. A few classes reach Master in one save within our range (e.g., Fighter Fort at 3).
- **Skills**: Master is achievable at level 7 (requires Expert first). This is within our range and works normally.

**Conclusion:** Our "Master cap" is a statement that we stop at level 10, not an active constraint on the math. PF2e's proficiency progression naturally stays within Master through level 10. The encounter building system, creature stat benchmarks, XP budgets, and hit rate targets all port directly.

### Creature Level Range

In PF2e's encounter building system, party level determines what creature levels are appropriate:

- **Trivial-Low encounters:** Creatures at Party Level -4 to Party Level -1
- **Moderate encounters:** Creatures at Party Level -1 to Party Level +1
- **Severe encounters:** Creatures at Party Level to Party Level +2
- **Extreme encounters:** Creatures at Party Level +2 to Party Level +4

For a level 10 party, Extreme encounters can include up to level 14 creatures. These creatures are designed for PCs with Expert/Master proficiency — the same proficiency ranks our level 10 PCs have. No Legendary gap.

### What Our Changes Don't Affect

- **Mana replacing slots** — Changes resource management pacing, not attack/AC/save math. Encounter difficulty ratings stay valid.
- **Simplified conditions** — Equivalent mechanical effects, no numerical changes to the hit/damage/save economy.
- **Three-box dying** — Survival math, not encounter building.
- **Simplified shields** — Block values can be tuned independently; doesn't affect creature stat benchmarks.

### What to Watch in Playtesting

- **Mana flexibility and encounter pacing** — Mana lets casters front-load power (many high-rank spells early, nothing left later). This doesn't change whether encounters are balanced, but it changes *how* a caster's adventuring day feels. Multiple Severe encounters in a row may drain mana faster than slots would have been depleted. Monitor during playtesting.

## Encounter Building

Port PF2e's encounter building system directly. No modifications needed.

### XP Budget by Difficulty (4-Player Party)

| Difficulty | XP Budget | Description |
|------------|-----------|-------------|
| Trivial | 40 or less | No real threat, resource drain at most |
| Low | 60 | Minor challenge, unlikely to drain significant resources |
| Moderate | 80 | Typical encounter, some resource expenditure |
| Severe | 120 | Dangerous, significant resource drain |
| Extreme | 160 | Potentially lethal, all-out effort required |

Adjust by 20 XP per player above or below 4.

### Creature XP by Level Difference

| Creature Level vs. Party | XP |
|--------------------------|----|
| Party Level -4 | 10 |
| Party Level -3 | 15 |
| Party Level -2 | 20 |
| Party Level -1 | 30 |
| Party Level | 40 |
| Party Level +1 | 60 |
| Party Level +2 | 80 |
| Party Level +3 | 120 |
| Party Level +4 | 160 |

Ports directly from PF2e GM Core. Hazard XP uses the same table.

## Difficulty Classes

Port PF2e's DC system directly:

- Level-based DC table (GM Core Chapter 1)
- Simple DCs (untrained through incredible)
- DC adjustments (easy, hard, very hard, incredibly hard)

*Full DC table to be ported.*

## Creature Building

GM Core Chapter 2 creature building benchmarks port directly for our level range. Creature stat tables (AC, attack, saves, HP, damage, ability DCs by level) are designed for the full level 1-25 range and work without modification at levels 1-10.

*Relevant stat ranges for creature levels -1 through 14 to be ported as GM reference.*

## Treasure by Level

Port PF2e's treasure by level guidelines:

- Expected wealth at each level
- Currency, consumables, and permanent items distribution
- Adjust for our crafting economics (25% material cost means crafted items are cheaper — does this affect how much treasure GMs should give?)
- Formula distribution as treasure (crafting formulas are meaningful loot)

*Treasure tables to be ported. Account for ~17% effective wealth increase from crafting system.*

## Skill DCs and Challenges

Port PF2e's skill DC system for:

- Recall Knowledge checks
- Social encounters
- Environmental challenges
- Traps and hazards

*Full system to be ported.*

## Design Considerations

- Treasure guidelines need to account for our crafting system's increased savings. A party with a dedicated crafter has ~17% more effective wealth.
- Consider providing pre-built encounter tables for levels 1-10 as GM quick-reference tools.
- Monster/creature stat blocks themselves are outside the scope of the core design document but need to be validated against our rules changes.

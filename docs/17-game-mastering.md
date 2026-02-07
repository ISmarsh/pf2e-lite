# Game Mastering

> **Status:** Draft -- encounter math verified, systems to port.

GM Core encounter building, DCs, creature building, and treasure tables all port directly. Full rules cached in `.aon-cache/gm-encounter-rules.json` (32 entries from GM Core). Exploration and downtime GM guidance in `.aon-cache/exploration-downtime-rules.json`.

## Encounter Math Verification -- Resolved

The Master proficiency cap does **not** create gaps in PF2e's encounter math. Within levels 1-10, PF2e's natural proficiency progression rarely reaches Master, and never reaches Legendary:

- **Fighter** (most advanced martial): Expert weapons at 1, Master at 5. Legendary is at 13 -- outside our range.
- **Other weapon classes:** Expert weapons by level 5-7. Master at 13 -- outside our range.
- **Full casters:** Expert spell DCs around level 7. Master at 15+ -- outside our range.
- **Saving throws:** A few classes reach Master in one save within our range (e.g., Fighter Fort at 3).
- **Skills:** Master is achievable at level 7 (requires Expert first). Works normally.

**Conclusion:** Our "Master cap" is a statement that we stop at level 10, not an active constraint on the math. The encounter building system, creature stat benchmarks, XP budgets, and hit rate targets all port directly.

### What Our Changes Don't Affect

- **Mana replacing slots** -- Changes resource pacing, not attack/AC/save math. Encounter difficulty ratings stay valid.
- **Simplified conditions** -- Equivalent mechanical effects, no numerical changes.
- **Three-box dying** -- Survival math, not encounter building.
- **Simplified shields** -- Hardness and Durability can be tuned independently.

### What to Watch in Playtesting

Mana lets casters front-load power (many high-rank spells early, nothing left later). This doesn't change whether encounters are balanced, but it changes how a caster's adventuring day feels. Monitor during playtesting.

## Systems to Port

All ported as-is from GM Core. See `.aon-cache/gm-encounter-rules.json` for full reference.

- **Encounter building:** XP budgets by difficulty (Trivial 40, Low 60, Moderate 80, Severe 120, Extreme 160 for 4-player party). Creature XP by level difference. Adjust by 20 XP per player above/below 4.
- **Difficulty Classes:** Level-based DC table, simple DCs, DC adjustments.
- **Creature building:** Stat benchmarks (AC, attack, saves, HP, damage, ability DCs by level) for creature levels -1 through 14.
- **Treasure by level:** Expected wealth, currency/consumable/permanent item distribution.

### Creature Taxonomy

When building or classifying creatures, GMs can use the compositional creature taxonomy (see [Creature Taxonomy](20-creature-taxonomy.md)) for structured trait assignment. This is a classification aid -- it doesn't change stat block format or encounter math.

## Design Considerations

- Treasure guidelines need to account for our crafting system's increased savings. A party with a dedicated crafter has ~17% more effective wealth.
- Consider providing pre-built encounter tables for levels 1-10 as GM quick-reference tools.
- Formula distribution as treasure (crafting formulas are meaningful loot).

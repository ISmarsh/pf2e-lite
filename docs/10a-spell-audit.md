# Spell List Audit

Compatibility analysis of PF2e Remastered spells (ranks 1-5) with the mana system. Assesses three areas: mechanical compatibility, balance under mana flexibility, and Golarion-specific content requiring ORC-safe renaming.

## Methodology

- Queried AoN Elasticsearch API for all remastered spells at ranks 1-5, excluding cantrips and focus spells (filtered by `cantrip` and `focus` traits).
- Sources: Player Core, Player Core 2, Rage of Elements, Howl of the Wild, War of Immortals, Divine Mysteries.
- Deduplicated by AoN document ID (`_id`). AoN's `primary_source:"Player Core"` query returns PC2 spells as a superset -- all 158 PC2 entries appear in the PC1 result set with identical IDs. Raw cross-source total is 466; after deduplication, 406.
- Category-based risk assessment — flagged spell types where mana flexibility changes incentives vs. Vancian slots, then analyzed specific high-profile spells.
- Cross-referenced with [Spellcasting](10-spellcasting.md) mana pools, [Classes](05-classes.md) class features, and `pf2e_mana_math.xlsx`.

## Spell Count by Rank

| Rank | Regular Spells |
|------|---------------|
| 1 | 106 |
| 2 | 100 |
| 3 | 70 |
| 4 | 66 |
| 5 | 64 |
| **Total** | **406** |

This excludes cantrips (auto-heighten, infinite use -- no mana interaction) and focus spells (per-encounter, independent of mana). All 406 spells consume mana when cast.

## Mana-Vancian Equivalence

The mana pool at each level equals the total mana value of PF2e's spell slots at that level. This is by design — the system preserves total daily output while changing how it's distributed.

| Level | Mana Pool | PF2e Slots | Slot Mana Value | Match? |
|-------|-----------|------------|-----------------|--------|
| 1 | 2 | 2× R1 | 2 | ✓ |
| 2 | 3 | 3× R1 | 3 | ✓ |
| 3 | 7 | 3× R1 + 2× R2 | 7 | ✓ |
| 4 | 9 | 3× R1 + 3× R2 | 9 | ✓ |
| 5 | 17 | 3× R1 + 3× R2 + 2× R3 | 17 | ✓ |
| 6 | 21 | 3× R1 + 3× R2 + 3× R3 | 21 | ✓ |
| 7 | 35 | 3× R1 + 3× R2 + 3× R3 + 2× R4 | 35 | ✓ |
| 8 | 42 | 3× R1 + 3× R2 + 3× R3 + 3× R4 | 42 | ✓ |
| 9 | 57 | 3× R1 + 3× R2 + 3× R3 + 3× R4 + 2× R5 | 64 | Smoothed |
| 10 | 75 | 3× R1 + 3× R2 + 3× R3 + 3× R4 + 3× R5 | 75 | ✓ |

**Level 9 smoothing:** The pool is 57 vs a slot value of 64 (-7 mana). Levels 9-10 combined total 132 mana vs 139 slot value — the pool redistributes growth more evenly across the two levels rather than spiking at R5 introduction. Intentional design: L9 is slightly conservative (new highest rank), L10 catches up.

### Flexibility Comparison (Level 10)

The total is the same (75 mana = 15 slots of equivalent value). The difference is **concentration** — mana allows casting many more spells of a single rank by sacrificing other ranks.

| Rank | Mana Cost | Vancian Max (3 slots) | Mana Max (75 pool) | Ratio |
|------|-----------|----------------------|-------------------|-------|
| 1 | 1 | 3 | 75 | 25× |
| 2 | 2 | 3 | 37 | 12× |
| 3 | 4 | 3 | 18 | 6× |
| 4 | 7 | 3 | 10 | 3.3× |
| 5 | 11 | 3 | 6 | 2× |

The flexibility ratio is highest at low ranks (cheap to spam) and lowest at high ranks (expensive, self-limiting). This is a natural consequence of the moderate cost curve.

**Critical constraint:** Per-round output is identical. Both systems are limited by 3 actions per round. Mana changes *daily* distribution, not *per-round* power.

## Risk Assessment

### 1. Healing Concentration (MEDIUM)

**Concern:** Heal can be heightened to any rank, so a cleric could concentrate all mana into Heal.

**Heal scaling (2-action version, heightened +1 per rank):**

| Cast Rank | Healing | Mana Cost | HP per Mana |
|-----------|---------|-----------|-------------|
| R1 | 1d8 + 8 (avg 12.5) | 1 | 12.5 |
| R2 | 2d8 + 16 (avg 25) | 2 | 12.5 |
| R3 | 3d8 + 24 (avg 37.5) | 4 | 9.4 |
| R4 | 4d8 + 32 (avg 50) | 7 | 7.1 |
| R5 | 5d8 + 40 (avg 62.5) | 11 | 5.7 |

**Key insight:** Lower-rank Heals are more mana-efficient. R1-R2 give 12.5 HP per mana vs R5 at 5.7. The cost curve creates a natural throughput-vs-efficiency tradeoff — high-rank Heals are more powerful per cast but less efficient per mana.

**Worst-case comparison at level 10 (all resources devoted to Heal):**

| System | Strategy | Total HP Healed |
|--------|----------|----------------|
| Mana (75) | 75× R1 Heal (2-action) | 937 HP |
| Mana (75) | 6× R5 Heal (66 mana) | 375 HP |
| Vancian | 15 slots across R1-R5 | 562 HP |
| Vancian + Font | 15 slots + ~4 bonus R5 | 812 HP |

The mana system's maximum healing (all R1) is ~15% above Vancian+Font (~937 vs ~812). But this requires spending *every point of mana on Heal* — zero offensive spells, zero utility, zero control. The Vancian cleric with Font has the same healing output AND can prepare non-Heal spells in remaining slots.

At the top end (R5 Heals only), mana gives 6 casts vs Vancian's 3 slots + ~4 Font = 7 casts. The mana cleric actually gets *fewer* top-rank Heals when Font is included.

**Assessment:** Total healing output is comparable. The flexibility to choose between many weak heals or fewer strong heals is a feature, not a bug — it creates meaningful tactical decisions. However, **Healing Font needs a mana-system conversion** to maintain the Cleric's healing identity (see Class Feature Conversions below).

- ⚠️ Monitor in playtest: does R1 Heal spam between encounters trivialize attrition?
- ✅ Per-round healing is unchanged (still limited by 3 actions)
- ✅ Total output is comparable to Vancian + Font

---

### 2. Guaranteed Encounter Buffs (MEDIUM)

**Concern:** Powerful per-combat buffs (Haste, Heroism, Slow) can be cast every encounter instead of rationed across 3 slots.

**Haste (R3, 4 mana, 1-minute duration, single target):**

| Scenario | Mana Cost | % of L10 Pool |
|----------|-----------|---------------|
| 1 combat | 4 | 5% |
| 3 combats | 12 | 16% |
| 5 combats (full day) | 20 | 27% |

In Vancian, 3 R3 slots covers 3 of 5 daily combats. Mana covers all 5 at 27% of the daily budget. The difference: removing the choice of "which fights deserve Haste." This is real but bounded — 27% of the pool is a meaningful commitment, and Haste only heightens at R7 (outside our range), so it stays single-target.

**Heroism (R3, 4 mana, 10-minute duration, +1 status bonus to attacks/Perception/saves/skills):**

Heroism's 10-minute duration often covers an entire encounter even with only one cast. The mana concern is maintaining it across *more* encounters:
- 5 combats × 4 mana = 20 mana (27% of pool) — same as Haste
- But Heroism can cover multiple encounters per cast if fights are close together
- Status bonus doesn't stack — multiple Heroisms on the same target don't compound

**Slow (R3, 4 mana, 1-minute duration, Fort save):**

Same cost profile as Haste. Requires the target to fail a save. The concern is guaranteed availability, not spam within one fight. Having Slow available every combat is powerful but costs the same 27% pool commitment.

**Assessment:** Guaranteed encounter buffs is the most noticeable behavioral change from mana. The tradeoff is real (27% of pool = less mana for everything else) but the *choice of when to use buffs* is diminished. This is an acceptable trade — the player is choosing to specialize in buff support rather than versatility.

- ⚠️ Monitor in playtest: does Haste every combat warp action economy expectations?
- ✅ PF2e's bonus type rules prevent meaningful buff stacking (status bonuses don't stack with each other)
- ✅ Total mana spent on buffs is mana NOT spent on damage/control/utility

---

### 3. Exploration Trivialization (LOW)

**Concern:** Cheap long-duration spells (Invisibility, Fly) can be maintained throughout exploration.

**Invisibility (R2, 2 mana, 10-minute duration, ends on hostile action):**
- 37 possible casts = 370 minutes of out-of-combat invisibility
- Vs Vancian: 3 R2 slots = 30 minutes
- This IS more exploration invisibility, but:
  - Ends immediately on hostile action (no combat benefit)
  - PF2e's exploration mode already has Scout activity for stealth
  - 10-minute intervals require recasting (costs an action, interrupts flow)
  - The rogue can Avoid Notice indefinitely without spells

**Fly (R4, 7 mana, 5-minute duration):**
- 10 possible casts = 50 minutes of flight vs Vancian 15 minutes
- Meaningful for vertical exploration, but:
  - 5-minute windows still require planning
  - Flight already trivializes many encounters in standard PF2e
  - 7 mana per cast is not trivial (9% of L10 pool)

**Assessment:** Exploration-mode balance is already loose in PF2e — these spells were already powerful with 3 slots. More casts extends their reach but doesn't change the fundamental dynamic. GMs can design for expected spell access regardless of slot vs mana.

- ✅ No combat balance impact (duration/action constraints still apply)
- ✅ Exploration pacing is a GM-facing concern, not a system balance issue

---

### 4. Summoning Economy (LOW)

**Concern:** Cheap summons could flood encounters with extra creatures.

**Built-in constraint:** All summon spells require a **Sustained** action (1 action per round to maintain). A caster can only sustain one summon at a time. This hard limit exists in both Vancian and mana systems.

**Cost analysis:**

| Summon Rank | Mana Cost | Creature Level | Action Tax |
|-------------|-----------|---------------|-----------|
| R1 | 1 | Level -1 | 1 action/round (33%) |
| R3 (heightened) | 4 | Level 3 | 1 action/round (33%) |
| R5 (heightened) | 11 | Level 5 | 1 action/round (33%) |

Low-rank summons are cheap (1 mana) but summon very weak creatures. High-rank summons are expensive (11 mana × 5 combats = 55 mana, 73% of pool). The 33% action tax (sustaining costs 1 of 3 actions) means the caster does significantly less on their own turns.

**Assessment:** Self-balancing. The Sustained action constraint prevents multiple simultaneous summons, the action tax is steep, and the mana cost at useful creature levels is high. A caster who summons every combat pays heavily in both mana and action economy.

- ✅ No spam risk — Sustained limits to 1 active summon per caster
- ✅ Action tax makes summoning a real commitment, not a free bonus

---

### 5. Class Feature Conversions

Several PF2e class features grant bonus spell slots that don't directly map to mana. These need conversion to maintain class identity.

#### Healing Font / Harmful Font (Cleric)

PF2e's Cleric gets bonus spell slots exclusively for Heal (or Harm, for evil-aligned Clerics). These are separate from regular slots and reinforce the Cleric's role as primary healer.

**Proposed conversion options:**

| Option | Mechanism | Pros | Cons |
|--------|-----------|------|------|
| **A. Bonus mana (tagged)** | +WIS mod mana, Heal/Harm only | Simple, preserves identity | Tracking two mana pools |
| **B. Free casts** | WIS mod free Heal/Harm casts per day at highest rank | Direct slot mapping | Reintroduces slot-like tracking |
| **C. Mana discount** | Heal/Harm costs 1 less mana (minimum 1) | Elegant, no extra pool | Hard to balance; R1 Heal at 0 cost is too strong |

**Resolution:** Free casts (Option B variant). WIS modifier (minimum 1) free Heal/Harm casts per day at any rank you can cast. At WIS +4, level 10: 4 free R5 Heals (44 mana equivalent), matching PF2e Font exactly. Option A (tagged mana) was rejected — flat +WIS mod mana doesn't scale with rank costs (4 mana at L10 can't buy a single R4 Heal, 91% underpowered vs PF2e Font). See [Spellcasting](10-spellcasting.md#class-bonus-casts).

#### Wizard Curriculum Spells

PF2e Remastered Wizards get one bonus prepared spell per rank from their school's curriculum list. These represent the school's specialized knowledge.

**Proposed conversion options:**

| Option | Mechanism | Pros | Cons |
|--------|-----------|------|------|
| **A. Bonus mana (tagged)** | +INT mod mana, curriculum spells only | Consistent with Font | Tracking another tagged pool |
| **B. Free curriculum cast** | One free cast per rank per day of a curriculum spell | Familiar to slot players | Complex — tracking 5 separate free casts |
| **C. Curriculum discount** | Curriculum spells cost 1 less mana (minimum 1) | Elegant, no tracking | R1 curriculum spells at 0 cost; hard to balance |
| **D. Extended spell list** | School grants bonus spells known (spontaneous), not bonus resources | Works for spontaneous; prepared already know full list | Doesn't apply to prepared casters |

**Resolution:** Free casts (Option B). 1 free curriculum spell cast per day per spell rank you can access. At level 10: 5 free curriculum casts (1 × R1 through R5, total 25 mana equivalent). Maps 1:1 to PF2e's bonus prepared curriculum spell per rank. Option A (tagged mana) was rejected for the same scaling reason as Healing Font — flat +INT mod mana is dramatically underpowered at higher levels. See [Spellcasting](10-spellcasting.md#class-bonus-casts).

#### Drain Bonded Item (Wizard)

Already deferred — noted in [Spellcasting](10-spellcasting.md) as "future design space, not in base system." No action needed for this audit.

---

## Heightening Analysis

The mana cost curve (1/2/4/7/11) creates a natural efficiency gradient when heightening spells.

### Efficiency by Rank (using Heal 2-action as example)

| Heightened Rank | Effect Increase | Mana Cost | Marginal Cost | Efficiency |
|----------------|-----------------|-----------|---------------|------------|
| R1 (base) | 1d8 + 8 | 1 | — | 12.5 HP/mana |
| R2 (+1) | 2d8 + 16 | 2 | +1 for +12.5 HP | 12.5 HP/mana |
| R3 (+2) | 3d8 + 24 | 4 | +2 for +12.5 HP | 9.4 HP/mana |
| R4 (+3) | 4d8 + 32 | 7 | +3 for +12.5 HP | 7.1 HP/mana |
| R5 (+4) | 5d8 + 40 | 11 | +4 for +12.5 HP | 5.7 HP/mana |

**Pattern:** Each heightened rank adds the same flat benefit (+1d8 + 8 = avg 12.5 HP) but costs progressively more mana (+1, +2, +3, +4). This means:

- **Low-rank casting is more mana-efficient** (more total output per mana spent)
- **High-rank casting is more action-efficient** (more output per cast/action)
- Players face a genuine **throughput vs. efficiency tradeoff**

This emergent property is a feature of the moderate cost curve. It incentivizes using an appropriate spell rank rather than always maxing out, and it naturally limits the "spam your highest rank" concern — doing so is the *least* mana-efficient option.

### Heightening Patterns That Work Well

- **+1 heightening** (Heal, Harm, Force Barrage, Fireball): Smooth scaling, natural efficiency tradeoff. No issues.
- **+2 heightening** (Dispel Magic, Invisibility): Jumps two ranks per improvement. Less spammable since you skip a cost tier. No issues.
- **Fixed heightening** (Haste at R7 only): Not reachable in our R1-5 range. Single-target at R3 is the only option. No issues.
- **No heightening** (single-rank spells): Cast at base rank only. Mana cost is fixed. No issues.

### Heightening Patterns to Monitor

- **Duration-extending heightening** (e.g., some spells gain longer duration at higher ranks): Could be underpriced if the mana cost doesn't justify the duration extension. Rare in PF2e's rank 1-5 range.

**Overall:** The cost curve's built-in efficiency gradient is the primary balancing mechanism for heightening under mana. No systemic changes needed.

## Golarion-Specific References

The PF2e Remaster intentionally genericized spell names for ORC compatibility. Very few setting-specific references remain.

### Spells Requiring Renaming

| Spell | Rank | Source | Issue | Action |
|-------|------|--------|-------|--------|
| **Ymeri's Mark** | 4 | Rage of Elements | Ymeri is a Golarion elemental lord | Rename required |

### Possessive-Name Spells (No Action Needed)

These spells use possessive names but reference generic concepts, not Golarion-specific entities:

| Spell | Rank | Source | Name Origin |
|-------|------|--------|-------------|
| Rainbow's End | 1 | War of Immortals | Generic folklore |
| Cloud Dragon's Cloak | 3 | Rage of Elements | Generic dragon type |
| Mariner's Curse | 5 | Player Core | Generic archetype |
| Nature's Pathway | 5 | Player Core | Generic concept |
| Outcast's Curse | 4 | Player Core | Generic concept |
| Trickster's Feathers | 4 | War of Immortals | Generic archetype |
| Fire's Pathway | 5 | Rage of Elements | Generic element |

**Assessment:** Only 1 of 406 spells (0.2%) requires renaming. The Remaster already did the heavy lifting for ORC compatibility.

## Recommendations

| # | Category | Severity | Recommendation |
|---|----------|----------|---------------|
| 1 | Healing concentration | MEDIUM | Accept. Total output is comparable to Vancian+Font. Monitor R1 Heal spam between encounters during playtest. |
| 2 | Guaranteed encounter buffs | MEDIUM | Accept. 27% pool cost for every-combat Haste/Heroism is a real tradeoff. Monitor action economy impact in playtest. |
| 3 | Exploration trivialization | LOW | Accept. Exploration balance is GM-facing, not system-critical. No changes needed. |
| 4 | Summoning economy | LOW | Accept. Sustained action constraint is sufficient. Self-balancing. |
| 5 | Healing Font conversion | ~~HIGH~~ ✅ | Resolved. Free casts: WIS mod free Heal/Harm per day at any rank. See [Spellcasting](10-spellcasting.md#class-bonus-casts). |
| 6 | Curriculum spell conversion | ~~HIGH~~ ✅ | Resolved. Free casts: 1 curriculum spell per rank per day. See [Spellcasting](10-spellcasting.md#class-bonus-casts). |
| 7 | Ymeri's Mark | LOW | Rename to setting-agnostic alternative (e.g., "Flame Lord's Mark"). |
| 8 | Per-rank casting caps | — | **Not recommended.** Would defeat the purpose of switching to mana. The cost curve and total pool equivalence provide sufficient balance. |

## Playtest Watch List

Specific spells to monitor during playtesting for mana-related balance issues:

| Spell | Rank | Concern | What to Watch |
|-------|------|---------|---------------|
| Heal / Harm | 1+ | Concentration spam | Does between-encounter R1 spam eliminate attrition? |
| Haste | 3 | Every-combat use | Does guaranteed Haste warp expected action economy? |
| Heroism | 3 | Persistent uptime | Does always-on +1 status bonus flatten difficulty? |
| Slow | 3 | Asymmetric debuff | Is guaranteed Slow availability too strong alongside Haste? |
| Summon Animal/Construct | 1+ | Cheap summons | Do R1 summons in every fight add too much action economy? |
| Invisibility | 2 | Exploration use | Does cheap invisibility trivialize stealth segments? |
| Fly | 4 | Exploration use | Does abundant flight trivialize vertical encounters? |
| Wall of Stone | 5 | Dungeon reshaping | Do 6 walls/day vs 3 break dungeon pacing? |

## Verdict

**The vast majority of PF2e Remastered spells (ranks 1-5) work with the mana system without modification.**

The mana pool is designed to match total Vancian slot value at each level. The moderate cost curve (1/2/4/7/11) creates natural efficiency tradeoffs that discourage degenerate concentration. PF2e's existing constraints — bonus type stacking rules, Sustained action limits, 3-action rounds, save-based mitigation — remain the primary balance mechanisms and are unaffected by the resource change.

The two class feature conversions (Healing Font, Wizard curriculum spells) have been resolved — both use free casts per day that map 1:1 to PF2e's bonus slots. See [Spellcasting](10-spellcasting.md#class-bonus-casts).

Eight spells are flagged for playtest monitoring, but none require preemptive mechanical changes. The recommended approach is **accept and observe** — the theoretical flexibility concerns are bounded by real tradeoffs that only playtesting can validate.

One spell (Ymeri's Mark) requires ORC-safe renaming.

---

*Audit data sourced from `.aon-cache/spells-all.json` (915 spells deduplicated across 6 remastered sources). See [Spellcasting](10-spellcasting.md) for mana system details.*

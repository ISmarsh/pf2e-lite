# Spellcasting

## Overview

Vancian spell slots are replaced with a mana pool. Full recovery on long rest only. No mid-day mana recovery — preserves PF2e's philosophy that daily casting resources don't come back easily.

## Mana Cost Curve (Moderate)

| Spell Rank | Mana Cost |
|------------|-----------|
| Rank 1 | 1 |
| Rank 2 | 2 |
| Rank 3 | 4 |
| Rank 4 | 7 |
| Rank 5 | 11 |

**Rationale:** Prices spell ranks by cumulative increments (+1, +2, +3, +4). Each tier is meaningfully more expensive without being punitive. Linear curve (1/2/3/4/5) was too cheap at high ranks. Triangular curve (1/3/6/10/15) overcorrected. See `pf2e_mana_math.xlsx` for full analysis.

## Mana Pools by Level (Full Caster)

| Level | Mana Pool | Max Spell Rank |
|-------|-----------|----------------|
| 1 | 2 | 1 |
| 2 | 3 | 1 |
| 3 | 7 | 2 |
| 4 | 9 | 2 |
| 5 | 17 | 3 |
| 6 | 21 | 3 |
| 7 | 35 | 4 |
| 8 | 42 | 4 |
| 9 | 57 | 5 |
| 10 | 75 | 5 |

Max spell rank formula: (level+1)/2, capped at 5.

## Who Gets Mana

Mana is a **full-caster-only system**. Empowered classes (Champion, Ranger, Artificer, Thaumaturge) express their tradition through class features and focus spells, not through a mana pool.

| Tier | Mana Pool | Examples |
|------|-----------|----------|
| Full caster | Full pool (per table above) | Wizard, Cleric, Druid, Bard |
| Empowered | No mana pool — focus spells + signature mechanics | Champion, Ranger, Artificer, Thaumaturge |
| Martial | No mana pool — focus spells from subclass/feats | Fighter, Rogue, Barbarian |
| Dedication caster | Quarter pool (see below) | Any class via multiclass dedication |

## Heightening

Costs mana of the heightened rank. A rank 1 spell heightened to rank 3 costs 4 mana.

## Flexibility Premium

The mana system's key advantage over slots is flexibility. At level 10, a full caster could theoretically cast 6× Rank 5 spells (66 mana) but would have almost nothing left for other spells. Spiking is expensive. The tradeoff is real and self-balancing.

## Three-Tier Resource Structure

Every caster interacts with up to three resource tiers:

1. **Cantrips:** Infinite use, no mana cost, auto-heighten to half level rounded up.
2. **Focus Spells:** Per-encounter tactical resource. 10-minute Refocus recovery. Cap of 3 focus points. Works exactly as PF2e Remaster (recover 1 point per Refocus, can stack to recover all points over 30 minutes).
3. **Mana Pool:** Daily strategic budget. Long rest recovery only.

Every class with magical features gets at least one focus spell from their class features (or access to them through feats). Focus spells are completely independent of the mana system — empowered classes like Champion and Thaumaturge rely on them as their primary magical resource.

## Spell Lists

Full tradition access for all casters — no curated sublists within a tradition. Restriction comes through mana pool size and max rank, not list limitation.

Four traditions preserved:

- **Arcane** — material + matter
- **Divine** — spiritual + matter
- **Primal** — material + spirit
- **Occult** — spiritual + mind

## Spellshape (Metamagic)

Ported directly from PF2e Remastered. Spellshape feats modify a spell as part of casting — typically costing 1 extra action, not mana. Each full caster class has spellshape feats on its class feat list, truncated at level 10.

### Available Spellshape Feats by Class (L1-10)

| Class | Feats |
|-------|-------|
| **Wizard** | Reach Spell (1), Widen Spell (1), Conceal Spell (2), Energy Ablation (2), Quickened Casting (10), Overwhelming Energy (10) |
| **Cleric** | Reach Spell (1), Divine Infusion (4), Cast Down (6), Martyr (8), Heroic Recovery (10) |
| **Druid** | Reach Spell (1), Widen Spell (1), Form Control (4), Snowdrift Spell (4), Current Spell (6), Healing Transformation (10), Thunderclap Spell (10) |
| **Bard** | Reach Spell (1), Courageous Advance (4), In Tune (4), Melodious Spell (4), Defensive Coordination (6), Harmonize (6), Call and Response (8), Courageous Assault (10), Unusual Composition (10) |

Shared feats (Reach Spell, Widen Spell) appear on multiple class lists. All feats above are class feats — they compete with other class feat options at that level.

**Note:** Conceal Spell and Melodious Spell interact with the two-tier detection system (Concealed/Hidden). Both port cleanly with two-tier terminology. See [Conditions](11-conditions.md).

## Dedication Caster Mana (Multiclass Spellcasting)

Characters who take a caster multiclass dedication and invest in Basic Spellcasting gain a quarter-caster mana pool:

| Level | Mana | Max Rank |
|-------|------|----------|
| 4 | 1 | 1 |
| 6 | 3 | 2 |
| 8 | 7 | 3 |

Same progression regardless of source class. Roughly quarter-caster — enough for a few utility spells per day, clearly not approaching real caster power. 7 total mana at level 8 vs. a full caster's 42.

Equivalent to PF2e's Basic Spellcasting slots (1× R1, 1× R2, 1× R3) converted to our mana costs (1 + 2 + 4 = 7).

See [Dedications](15-dedications.md) for full multiclass details.

## Class Bonus Casts

Some class features grant free spell casts per day that don't cost mana. These supplement the mana pool, preserving PF2e's class-specific bonus slot mechanics without introducing a second mana pool.

### Healing Font / Harmful Font (Cleric)

WIS modifier (minimum 1) free Heal (or Harm) casts per day at any rank you can cast. Choose Healing Font or Harmful Font at character creation.

| Level | Max Rank | Free Casts (WIS +4) | Equivalent Mana Value |
|-------|----------|---------------------|----------------------|
| 1 | R1 | 4 × R1 | 4 |
| 3 | R2 | 4 × up to R2 | up to 8 |
| 5 | R3 | 4 × up to R3 | up to 16 |
| 7 | R4 | 4 × up to R4 | up to 28 |
| 10 | R5 | 4 × up to R5 | up to 44 |

Each free cast can be at any rank up to your maximum — you choose the rank when you cast. This matches PF2e Font's bonus slots, which are all at the caster's highest available rank. The free casts are Heal (or Harm) only; they can't be used for other spells.

**Design rationale:** PF2e Font gives ~WIS mod bonus Heal slots separate from regular slots. Free casts map 1:1 to this power level. A flat tagged mana bonus (+WIS mod mana) was considered but doesn't scale with rank costs — at level 10, +4 mana can't buy a single R4 Heal, while PF2e Font gives ~4 R5 Heals.

### Wizard Curriculum Spells

1 free curriculum spell cast per day per spell rank you can access. Must be a spell from your school's curriculum list.

| Level | Max Rank | Free Casts | Equivalent Mana Value |
|-------|----------|-----------|----------------------|
| 1 | R1 | 1 × R1 | 1 |
| 3 | R2 | 1 × R1 + 1 × R2 | 3 |
| 5 | R3 | 1 × R1 + 1 × R2 + 1 × R3 | 7 |
| 7 | R4 | 1 × R1 through R4 | 14 |
| 10 | R5 | 1 × R1 through R5 | 25 |

Each rank's free cast is independent — using your free R2 curriculum cast doesn't affect your free R3 cast. You can cast any curriculum spell at that rank (not locked to a single prepared choice), which is slightly more flexible than PF2e's prepared bonus but consistent with mana's inherent flexibility.

**Design rationale:** PF2e gives 1 bonus prepared curriculum spell per rank. Free casts map 1:1. Preserves school specialization incentive — your curriculum spells are effectively cheaper than general spells.

## Open Design Work

- Mana cost curve needs playtesting validation
- Partial mana recovery: deferred, preserving PF2e's no-slot-recovery philosophy
- ~~Staves~~ — ✅ Resolved. Charge system ports directly; prepared casters spend mana during prep for bonus charges, spontaneous casters spend 1 charge + mana during play. See [Equipment](09-equipment.md#staves).
- Arcane bond, slot-expansion equivalents: future design space, not in base system
- ~~Spell list audit~~ — ✅ Resolved. 412 spells audited, vast majority compatible. See [Spell List Audit](10a-spell-audit.md)
- ~~Healing Font mana conversion~~ — ✅ Resolved. Free casts (WIS mod Heal/Harm per day). See [Class Bonus Casts](#class-bonus-casts).
- ~~Wizard curriculum spell conversion~~ — ✅ Resolved. Free casts (1 curriculum spell per rank per day). See [Class Bonus Casts](#class-bonus-casts).

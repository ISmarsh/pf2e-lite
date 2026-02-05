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

## Metamagic

Modular complexity lever, primarily for Wizards. Extra mana cost to modify spells (extend range, widen area, quicken casting, add effects). Wizards get more metamagic access via class feats. Base casting system stays simple for all classes; Wizards have a deeper toolkit for players who want to master it.

*Full metamagic design to be developed.*

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

## Open Design Work

- Mana cost curve needs playtesting validation
- Partial mana recovery: deferred, preserving PF2e's no-slot-recovery philosophy
- Staves, arcane bond, slot-expansion equivalents: future design space, not in base system
- Spell list audit: verify all PF2e spells in ranks 1-5 work with mana system

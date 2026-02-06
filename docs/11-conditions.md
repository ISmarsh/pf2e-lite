# Conditions

## Overview

PF2e has 40+ conditions. Reduced to **20 core conditions** by merging redundant states and simplifying edge cases. Each surviving condition earns its place by being mechanically distinct and tactically relevant.

## The 20 Core Conditions

| Condition | Type | Notes |
|-----------|------|-------|
| **Blinded** | Sensory | Can't see, all terrain is difficult, -4 to Perception |
| **Clumsy** (value) | Physical penalty | Penalty to DEX-based checks and DCs |
| **Concealed** (new scope) | Detection tier 1 | DC 5 flat check to target, you know their location |
| **Confused** | Mental | Attack randomly, can't use reactions |
| **Deafened** | Sensory | Can't hear, -2 to Perception and initiative |
| **Drained** (value) | Vitality | Penalty to CON-based checks, lose max HP |
| **Enfeebled** (value) | Physical penalty | Penalty to STR-based checks and DCs |
| **Fatigued** | General | -1 to AC and saves, can't explore efficiently |
| **Frightened** (value) | Mental | Penalty to all checks, reduces by 1 each turn |
| **Grabbed/Restrained** (severity) | Movement | Grabbed = flat-footed + immobilized; Restrained = worse |
| **Hidden** (new scope) | Detection tier 2 | DC 11 flat check to target, don't know location |
| **Immobilized** | Movement | Can't use move actions |
| **Prone** | Positional | Flat-footed, -2 to attacks, must Stand to move |
| **Quickened** | Beneficial | Gain 1 extra action per turn (restricted use) |
| **Sickened** (value) | Physical | Penalty to all checks, must retch to reduce |
| **Slowed** (value) | Action | Lose actions at start of turn |
| **Stunned** (value) | Action | Lose actions, more severe than slowed |
| **Stupefied** (value) | Mental penalty | Penalty to spell attacks and DCs + flat check to lose spells |
| **Unconscious** | Incapacitation | Can't act, flat-footed, drop items |
| **Wounded** | Death track | Baked into dying system (see [Dying](12-dying.md)) |

## Key Simplifications

### Detection: Two Tiers Instead of Four

PF2e has four detection states: Observed → Concealed → Hidden → Undetected → Unnoticed. Consolidated to two:

- **Concealed** (DC 5 flat check, know location) — You can see something is there but not clearly. Fog, dim light, blur effects.
- **Hidden** (DC 11 flat check, don't know location) — You can't see them and don't know exactly where they are. Absorbs both Undetected and Unnoticed.

**Excluded feats:** Two feats within L1-10 become non-functional under two-tier detection and are excluded from the system:

- **Blind-Fight** (Fighter/Ranger L8) — Upgrades Undetected to Hidden, but those are now the same tier. Excluded.
- **Startling Appearance** (Rogue L6) — Requires being Unnoticed, which no longer exists as a distinct state. Excluded.

Revealing Stab (Rogue L6) ports with minor rephrasing: "make Hidden creature Concealed" instead of referencing Undetected.

### Stupefied: Kept As-Is

PF2e Stupefied imposes a penalty on spell attacks/DCs AND requires a flat check (DC 5 + value) to avoid losing the spell when casting. Both effects preserved — the flat check is what makes Stupefied the anti-caster debuff rather than just a weaker Clumsy. At Stupefied 1 (DC 6), the 25% failure chance is meaningful but not crippling. The condition is uncommon and usually temporary. Losing the flat check would weaken Stupefied by ~45-60% against casters, undermining spells specifically designed to punish spellcasting (Stupefy, Crisis of Faith, Never Mind).

### Frightened and Sickened: Kept Separate

Both impose penalties to all checks, but they have different recovery mechanics (Frightened auto-reduces by 1 each turn; Sickened requires spending an action to retch). These different recovery patterns create different tactical texture — Frightened is temporary pressure, Sickened is persistent until you act. Worth keeping distinct.

### Clumsy and Enfeebled: Kept Separate

STR penalty vs DEX penalty matters for martial/caster balance. Merging would create one condition that's either too broad or requires tracking which stat it applies to. Keeping them separate is cleaner.

## Conditions Cut

| Condition | Reason |
|-----------|--------|
| **Doomed** | Cut. Wounded provides escalating danger; Drained handles "existentially scary" threats |
| **Undetected** | Merged into Hidden |
| **Unnoticed** | Merged into Hidden |
| **Observed** | Default state, doesn't need a named condition |
| Various minor/niche | Absorbed into the 20 core or handled through spell descriptions |

## Open Design Work

- ~~Detection two-tier system~~ — ✅ Resolved. Two feats excluded (Blind-Fight, Startling Appearance); Revealing Stab rephrased. All spells granting Undetected map cleanly to Hidden.
- ~~Stupefied simplification~~ — ✅ Resolved. Flat check kept as-is from PF2e. No abilities specifically rely on the flat check mechanic — they just apply the Stupefied value.
- Verify creature abilities that reference removed conditions still work

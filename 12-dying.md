# Dying

## Overview

Replaces PF2e's Dying/Wounded value tracking with a visual checkbox system. Uses 5e's interface (checkboxes) with PF2e's escalating danger and ±10 degrees of success.

## Core Mechanic

When you reach 0 HP: you become **unconscious and dying**. You get three boxes: ☐ ☐ ☐

**All three boxes marked = death.**

### Entering Dying

- Reduced to 0 HP: unconscious, gain three empty boxes
- Critical hit that drops you to 0 HP: mark one box immediately

### On Your Turn While Dying (Flat Check DC 10)

| Result | Outcome |
|--------|---------|
| **Critical Success** (20+) | Clear two boxes. If none marked, wake at 0 HP |
| **Success** (10-19) | Clear one box. If none marked, stabilize (unconscious but no longer dying) |
| **Failure** (1-9) | Mark one box |
| **Critical Failure** (nat 1 or <0) | Mark two boxes |

### Taking Damage While Dying

- Regular damage: mark one box
- Critical hit damage: mark two boxes

### Receiving Healing While Dying

Any healing: wake with healed HP, clear all boxes.

## Wounded (Baked In)

Each time you recover from dying (via healing or stabilizing), note your knockdown count. The next time you reach 0 HP, you start with that many boxes pre-marked.

| Times Knocked Down Previously | Boxes Pre-Marked on Next KO |
|-------------------------------|----------------------------|
| 0 (first time) | 0 — clean slate (☐ ☐ ☐) |
| 1 | 1 — one already marked (☒ ☐ ☐) |
| 2 | 2 — two already marked (☒ ☒ ☐) — one failure = death |

Knockdown count resets on long rest.

## Survival Probability

This system's math closely matches PF2e's Dying/Wounded progression:

- First knockout with no prior knockdowns: reasonable chance of survival across multiple failed checks
- Second knockout: significantly more dangerous due to pre-marked box
- Third knockout: almost certainly fatal (start with 2 of 3 boxes filled)

The escalating danger of repeated knockdowns is preserved without needing to track a separate Wounded value — it's built into the box system.

## Design Rationale

- **Visual and intuitive:** Checkboxes are immediately understandable, no value tracking
- **Preserves degrees of success:** The ±10 crit thresholds on the flat check create meaningful variance
- **Preserves escalating danger:** Wounded mechanic is baked in through knockdown count
- **Compatible with PF2e healing:** Any healing wakes you up and clears all boxes, same as PF2e

## Open Design Work

- How do effects that reference "Dying value" translate to the box system?
- How does the Diehard feat (or equivalent) interact with boxes?
- Verify knockdown count reset timing (long rest only? Or also with specific healing?)

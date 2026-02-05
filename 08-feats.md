# Feats

## Overview

PF2e's four feat tracks (class, skill, general, ancestry) consolidated to **three chosen tracks** plus one automatic system. Reduces browsing complexity while preserving meaningful character customization.

## The Three Feat Tracks

### Class Feats — Every Even Level (2, 4, 6, 8, 10)

5 total. Define your playstyle within your class. Unchanged from PF2e. This is where real character identity lives.

### General Feats (Merged Skill + General) — Every Odd Level Starting at 3 (3, 5, 7, 9)

4 total. Combined pool of PF2e's skill feats and general feats. More interesting choices at each level because you're choosing between "skill unlock or general improvement" rather than picking one of each from separate lists.

### Ancestry Feats — Levels 1, 5, 9

3 total. Ancestry-specific abilities. Unchanged from PF2e. First feat picked at level 1 is a good onboarding moment — "what's cool about being a dwarf?" is an easier question than browsing class feats.

## Advancement Table

| Level | Class Feat | General Feat | Ancestry Feat |
|-------|-----------|-------------|--------------|
| 1 | — | — | ✓ |
| 2 | ✓ | — | — |
| 3 | — | ✓ | — |
| 4 | ✓ | — | — |
| 5 | — | ✓ | ✓ |
| 6 | ✓ | — | — |
| 7 | — | ✓ | — |
| 8 | ✓ | — | — |
| 9 | — | ✓ | ✓ |
| 10 | ✓ | — | — |

**Total: 5 class + 4 general + 3 ancestry = 12 feats** (down from PF2e's 17 across four tracks).

With Free Archetype as standard (see [Core Rules](01-core-rules.md)), characters also get archetype feats at every even level, partially compensating for the reduction.

## Proficiency Auto-Unlocks

When you reach a proficiency threshold in a skill, you automatically gain the feat that most players would take anyway. The "feat tax" becomes a reward for investment.

**Design test:** "Would an experienced PF2e player tell a new player they're making a mistake by *not* taking this feat?" If yes, it should auto-unlock.

### Auto-Unlock Table

| Skill | Trained | Expert | Master |
|-------|---------|--------|--------|
| **Medicine** | Battle Medicine | Continual Recovery | Ward Medic |
| **Crafting** | Repair (system baseline) | Quick Repair + Field Crafting | Efficient Crafting |
| **Stealth** | — | — | Swift Sneak |

**No class overlap:** No class feature in the system auto-grants any of these feats, so there are no double-granting issues.

#### Medicine

The strongest auto-unlock chain. Every skill in PF2e has "trap" feats that look optional but are actually mandatory — Medicine has the most.

- **Battle Medicine** (Trained): Use Medicine in combat to heal an adjacent ally. One action, once per target per day. Without this, Medicine investment has zero combat utility — every experienced player takes it.
- **Continual Recovery** (Expert): Reduces Treat Wounds cooldown from 1 hour to 10 minutes. RPGBOT: "If you only take one skill feat in Medicine, make it this one." Without it, out-of-combat healing is painfully slow.
- **Ward Medic** (Master): Treat Wounds affects 2 targets at once (4 at Master). At this proficiency level, you're the party medic — treating one person at a time is an obvious bottleneck.

#### Crafting

Already defined in [Crafting](14-crafting.md). The specialty feats (Alchemical Crafting, Magical Crafting, Snare Crafting) remain in the general pool as genuine choices — they're specialization gates, not universal taxes.

- **Repair** (Trained): System baseline, 10 minutes to restore item durability.
- **Quick Repair + Field Crafting** (Expert): Faster repairs and ability to create temporary items from available materials during 10-minute rests.
- **Efficient Crafting** (Master): Reduced material costs (details in [Crafting](14-crafting.md)).

#### Stealth

- **Swift Sneak** (Master): Move at full Speed while Sneaking. By Master proficiency, a character is a committed stealth specialist. The half-speed penalty without this feat makes Sneak borderline unusable in combat — experienced players consider it mandatory at this tier.

### Skills Without Auto-Unlocks

The remaining 13 skills (Acrobatics, Arcana, Athletics, Deception, Diplomacy, Intimidation, Lore, Nature, Occultism, Performance, Religion, Society, Thievery) have no auto-unlocks. Their skill feats are build-dependent rather than universally mandatory:

- **Athletics:** Feats vary by fighting style — Titan Wrestler matters for grapplers but not climbers or swimmers. No single feat passes the design test for all Athletics users.
- **Intimidation:** Intimidating Glare is useful but not essential — Demoralize works fine with a verbal check. Many Intimidation builds skip it entirely.
- **Acrobatics:** Cat Fall and Kip Up are nice but situational. No universal must-take.
- **Social skills** (Diplomacy, Deception, Performance): Feats are roleplay-dependent and build-specific. No feat taxes.
- **Knowledge skills** (Arcana, Nature, Occultism, Religion, Society, Lore): Feats unlock specific uses (Recognize Spell, Identify Magic) but none are mandatory for all users of the skill.
- **Thievery:** Pick a Lock and Disable a Device are skill actions, not feats. Thievery feats are Rogue-specific optimizations.

All skill feats for these skills remain in the merged general feat pool as genuine choices.

## Feat Density Math

- PF2e across levels 1–10: 5 skill feats + 4 general feats = 9 picks from those tracks
- Our system: 4 general feats (merged pool) + 5–7 automatic proficiency unlocks = 9–11 total
- Result: Similar or slightly higher feat density, higher average quality of choices, less time browsing for the "right" answer

## Open Design Work

- Balance review of Battle Medicine at Trained — auto-granting in-combat healing to all characters with Trained Medicine is powerful. Monitor during playtesting for whether it reduces incentive to play dedicated healers.
- Verify Efficient Crafting specifics once finalized in [Crafting](14-crafting.md).

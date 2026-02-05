# Shields

## Overview

Preserves PF2e's shield action economy and tactical decisions while simplifying the damage/hardness math.

## Core Mechanics

### Raise Shield (One Action)

+2 AC until your next turn. Unchanged from PF2e.

### Shield Block (Reaction)

When you take physical damage while your shield is raised:

- Reduce damage by the shield's **Block value** (single number, replaces Hardness)
- Mark **one tick** on the shield (two ticks on a critical hit)
- If damage exceeds **double the Block value**, shield is destroyed outright

### Durability

Each shield has a total number of **durability ticks** before it becomes broken. Repair during downtime using the Crafting skill (see [Crafting](14-crafting.md)).

## Shield Stat Block

Every shield has three stats:

| Stat | Description | Example (Basic Steel Shield) |
|------|-------------|------------------------------|
| AC Bonus | Bonus to AC when raised | +2 |
| Block Value | Damage reduced on Shield Block | 5 |
| Durability | Total ticks before broken | 3 |

## What This Preserves

- **Action economy choice:** Spending an action to Raise Shield is still a meaningful tactical decision
- **Reaction decision:** Choosing when to Shield Block (and risk ticks) vs. taking the hit
- **Material progression:** Better shields have higher Block values and more durability
- **Consumable resource feel:** Shields degrade and need repair, creating resource management
- **Crit danger:** Critical hits mark two ticks, making crits threatening to shield users

## What This Simplifies

- **No granular damage splitting:** PF2e splits damage between shield and wielder based on Hardness, then tracks shield HP and Broken Threshold separately. Our system uses a single Block value and tick marks.
- **Acceptable tradeoff:** Big hits and small hits treat the shield equally (one tick each). This loses some granularity but dramatically simplifies in-play math.

## Conversion Formula

Our Block Value and Durability Ticks are derived from PF2e's Hardness, HP, and Broken Threshold using two rules:

**Block Value = Hardness (1:1)**

PF2e's Hardness directly reduces damage on Shield Block. Our Block Value does the same thing, so a direct conversion preserves the damage reduction math. Mundane shields block less damage per hit than Sturdy shields — this is intentional. Mundane shields are starter gear; Sturdy shields are the dedicated Shield Block upgrade path.

**Durability Ticks ≈ ceil(BT / (avg damage at level − Hardness))**

This measures how many Shield Blocks a shield survives against level-appropriate monsters before reaching its Broken Threshold in PF2e. Average monster damage benchmarks: ~9 at level 1, ~13 at level 4, ~17 at level 7, ~21 at level 10.

### Validation

| Shield | PF2e Stats | Block Value | Ticks (formula) | Ticks (final) |
|--------|-----------|-------------|-----------------|---------------|
| Buckler (L0) | H3 / HP6 / BT3 | 3 | ceil(3/6) = 1 → min 2 | **2** |
| Wooden (L0) | H3 / HP12 / BT6 | 3 | ceil(6/6) = 1 → min 2 | **2** |
| Steel (L0) | H5 / HP20 / BT10 | 5 | ceil(10/4) = 3 | **3** |
| Tower (L0) | H5 / HP20 / BT10 | 5 | ceil(10/4) = 3 | **3** |
| Sturdy Minor (L4) | H8 / HP64 / BT32 | 8 | ceil(32/5) = 7 → tuned | **6** |
| Sturdy Lesser (L7) | H10 / HP80 / BT40 | 10 | ceil(40/7) = 6 → tuned | **7** |
| Sturdy Moderate (L10) | H13 / HP104 / BT52 | 13 | ceil(52/8) = 7 → tuned | **8** |

Sturdy shields are tuned to a mild ascending curve (6/7/8) rather than the flat 6-7 the formula produces. This gives each Sturdy tier a clear durability upgrade while staying close to PF2e's actual survival rate. The primary upgrade at each tier remains Block Value (more damage reduced per hit), with a small durability bonus on top.

Mundane shields (Buckler/Wooden at 2 ticks, Steel at 3 ticks) are intentionally fragile. In PF2e, mundane shields break quickly under Shield Block — they're cheap, replaceable, and intended as early-game gear before Sturdy shields become available at level 4.

## Shield Progression

### Base Shields

| Shield | AC | Block | Ticks | Price | Bulk |
|--------|-----|-------|-------|-------|------|
| Buckler | +1 | 3 | 2 | 1 gp | L |
| Wooden Shield | +2 | 3 | 2 | 1 gp | 1 |
| Steel Shield | +2 | 5 | 3 | 2 gp | 1 |
| Tower Shield | +2 (+4 Take Cover) | 5 | 3 | 10 gp | 4 |

> **Tower Shield:** Takes an action to set in place (Take Cover), granting +4 AC instead of +2. -5 ft speed penalty while wielding.

### Sturdy Shields

The dedicated Shield Block line. No special abilities — just the best Block Value and Durability available at each tier.

| Shield | Level | Block | Ticks | Price |
|--------|-------|-------|-------|-------|
| Sturdy Shield (Minor) | 4 | 8 | 6 | 100 gp |
| Sturdy Shield (Lesser) | 7 | 10 | 7 | 360 gp |
| Sturdy Shield (Moderate) | 10 | 13 | 8 | 1,000 gp |

### Reinforcing Runes

Reinforcing runes upgrade an existing shield's Block Value and Durability. They make non-Sturdy shields viable for occasional Shield Block use — useful for special-ability shields (like a Dragonslayer's Shield) that would otherwise be too fragile to block with.

Reinforcing trails Sturdy at each tier. A character who wants to Shield Block as a core tactic should use Sturdy shields. Reinforcing is for characters who want to block *sometimes* without giving up their shield's special ability.

| Rune | Level | Block + | Ticks + | Price |
|------|-------|---------|---------|-------|
| Reinforcing (Minor) | 4 | +2 | +2 | 75 gp |
| Reinforcing (Lesser) | 7 | +3 | +3 | 300 gp |
| Reinforcing (Moderate) | 10 | +4 | +4 | 900 gp |

**Comparison at each tier (Steel Shield + Reinforcing vs. Sturdy):**

| Tier | Steel + Rune | Sturdy |
|------|-------------|--------|
| L4 | 7 Block / 5 Ticks | 8 Block / 6 Ticks |
| L7 | 8 Block / 6 Ticks | 10 Block / 7 Ticks |
| L10 | 9 Block / 7 Ticks | 13 Block / 8 Ticks |

The gap widens at higher levels — Sturdy Moderate blocks 4 more damage per hit than a reinforced steel shield. This rewards characters who commit to Shield Block as their primary defensive tactic.

### Material Progression

Precious material shields use the base shield type's Block Value. Special materials are tougher than mundane construction, gaining +1 Durability Tick over the base type.

| Material | Grade | Level | Block | Ticks | Notes |
|----------|-------|-------|-------|-------|-------|
| Cold Iron / Silver | Low | 2 | Base | Base | Effective against fey/demons or devils/werewolves |
| Cold Iron / Silver | Standard | 7 | Base | Base | |
| Adamantine | Standard | 8 | Base | Base +1 | Hardest common metal |
| Dawnsilver | Standard | 8 | Base | Base +1 | Silver properties, 1 Bulk lighter |
| Duskwood | Standard | 8 | Base | Base +1 | 1 Bulk lighter (wooden shields only) |

> "Base" means the Block Value and Durability of the underlying shield type (Buckler, Wooden, Steel, or Tower). For example, a Standard Adamantine Steel Shield has Block 5 / Ticks 4 (base Steel 3 + 1 for Adamantine material = 4 total).

Material shields can also receive Reinforcing runes, stacking both bonuses.

## Interaction with Crafting

Characters with Crafting proficiency can repair shields during 10-minute rests (Repair action). The Artificer class has enhanced repair capabilities. This creates a natural link between the shield system and Crafting investment.

## Open Design Work

- Interaction between shield repair and the Crafting system timing — how many ticks does a Repair action restore? All ticks, or a fixed number?

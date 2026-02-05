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

| Stat | Description | Example (Basic Wooden Shield) |
|------|-------------|-------------------------------|
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

## Interaction with Crafting

Characters with Crafting proficiency can repair shields during 10-minute rests (Repair action). The Artificer class has enhanced repair capabilities. This creates a natural link between the shield system and Crafting investment.

## Open Design Work

- Define shield material progression (wooden → steel → special materials)
- Block value and durability numbers for each tier
- Interaction between shield repair and the Crafting system timing

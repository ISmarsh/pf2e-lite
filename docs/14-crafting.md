# Crafting

## Design Goals

PF2e's crafting is widely considered the system's weakest subsystem. It takes too long, saves too little gold, and doesn't feel rewarding. Our redesign follows real-world DIY economics: if you have the skill, making something yourself should be substantially cheaper than buying it, with the tradeoff being time and risk.

> **Downtime context:** Crafting is a downtime activity. For how it fits into the broader downtime and resting framework (including Field Crafting during 10-minute rests), see [Exploration & Downtime](16-exploration-and-downtime.md).

## Core Economics

| Element | Rule |
|---------|------|
| **Material cost** | **25% of item price** |
| **Formula required** | Yes, per PF2e pricing (~10-15% of item price) |
| **First craft total cost** | ~35-40% of item price (materials + formula) |
| **Subsequent crafts** | 25% of item price (formula already owned) |
| **Effective savings** | ~75% per craft (after first), ~60% on first craft |

### Comparison to PF2e

| | PF2e | Our System |
|---|---|---|
| Material cost | 50% of item price | 25% of item price |
| Effective savings per item | ~50% (most players stop here) | ~75% |
| Base crafting time | 4 days (flat, all proficiencies) | 1-3 days (by proficiency) |
| Extended crafting for more savings | Yes (tiny marginal savings/day) | **No** — savings built into material cost |
| Proficiency impact on time | None (only affects extended savings rate) | Direct — higher proficiency = faster crafting |

The elimination of extended crafting is the biggest quality-of-life win. No more "do I keep spending days to save a few more silver?" decisions.

## Crafting Time by Proficiency

| Proficiency | Time |
|-------------|------|
| Trained | 3 days |
| Expert | 2 days |
| Master | 1 day |

Getting better at Crafting makes you faster. Intuitive, rewarding, and a real payoff for skill investment.

## Crafting Check (Degrees of Success)

Standard PF2e Crafting check against item's DC (scales with item level).

| Result | Outcome |
|--------|---------|
| **Critical Success** | Complete in **half time** |
| **Success** | Complete in normal time |
| **Failure** | Not complete, materials preserved, can retry next day |
| **Critical Failure** | Not complete, **lose 10% of item price** in wasted materials |

- Crit success rewards time, not materials (avoids fiddly material refund math)
- Crit failure is the only time you lose materials (10% of item price is clean mental math)
- Normal failure just costs time — frustrating but not devastating

## Specialty Crafting Feats

Base Crafting (Trained) only allows mundane items. Specialty feats (from the merged general feat pool, see [Feats](08-feats.md)) gate access to other item types:

| Feat | Requirement | Unlocks |
|------|-------------|---------|
| **Alchemical Crafting** | Trained in Crafting | Alchemical items (bombs, elixirs, poisons, mutagens) |
| **Magical Crafting** | Trained in Crafting | Magic items (runes, wands, scrolls, talismans, enchanted equipment) |
| **Snare Crafting** | Trained in Crafting | Traps and snares |

Taking a specialty feat is a meaningful investment (one of four general feats across levels 1-10), rewarded by the substantial savings crafting provides.

## Formulas

Formulas are required for each item you want to craft. This creates progression — you build a library over time.

- **Formula cost:** Per PF2e pricing (~10-15% of item price)
- **Acquisition:** Buy from shops, find as loot, research during downtime, reverse-engineer with the Inventor feat
- **Formula book:** Standard adventuring gear for crafters
- Common formulas for basic adventuring gear are cheap or free at character creation
- Finding a rare formula in a dungeon feels like real loot for a crafting character

## Consumable Batch Crafting

Consumable items (ammunition, potions, alchemical items) allow batch production. One crafting check and materials payment produces a **batch of 4** items. Efficient and avoids tedious individual crafting for cheap consumables.

## Repair

- 10 minutes, Crafting check
- Restores durability to damaged items (ties into shield system, see [Shields](13-shields.md))
- Quick Repair at Expert proficiency (auto-unlock) reduces time
- Works as PF2e, no changes needed

## Field Crafting (Expert Auto-Unlock)

During a 10-minute rest, an Expert crafter can create simple temporary items from available materials. DC based on item complexity. Success produces a functional but temporary item — works for the current adventure day then falls apart.

Examples: improvised caltrops, a splint, a basic disguise, a torch, a simple snare or alarm.

Gives Crafting active utility during adventures without producing permanent items that affect the economy.

## Proficiency Auto-Unlocks for Crafting

| Proficiency | Auto-Unlock |
|-------------|-------------|
| Trained | Repair (10 min, restore item durability) — already standard |
| Expert | Quick Repair (reduced time) + Field Crafting (temporary items) |
| Master | Efficient Crafting (reduced material costs — details TBD) |

## Balance Analysis

### Wealth Impact

A dedicated crafter (feat + skill investment + formula library) crafting all major items levels 1-10 saves approximately **1,440 gp** after formula costs, against total expected wealth of ~8,500 gp. That's roughly a **17% wealth advantage**.

### Mitigating Factors

- **Formula investment:** ~255 gp in formulas across the campaign
- **Feat opportunity cost:** One of four general feats dedicated to crafting
- **Skill opportunity cost:** Crafting proficiency instead of another skill
- **Time investment:** 8-10 days of downtime that could be spent on other activities
- **Failure risk:** Statistical likelihood of at least one failure across major crafts
- **GM throttle:** Formula availability naturally paced by what's available in settlements

### Party Crafter Scenario

If the Artificer crafts for all four party members, time constraints limit total output. Crafting 20 major items at 1-2 days each = 20-40 days of downtime. Most campaigns have 30-60 days total. Net party wealth advantage: ~10-12%, earned through significant time and resource investment.

**Assessment:** Balanced. The wealth advantage is real but earned, constrained by time, and proportional to opportunity costs.

## Artificer Interaction

The Artificer class gets features that improve all Crafting activities — faster times, check bonuses, special formulas, abilities others can't access. But any character with Crafting investment has access to the full system and is meaningfully rewarded for it.

The Artificer's infusion system is separate from the Crafting skill — infusions are a class feature, not a skill activity. See [Artificer](06-artificer.md).

## Open Design Work

- Finalize Master auto-unlock details (Efficient Crafting specifics)
- Define field crafting item list and DCs
- Consumable batch size: is 4 the right number for all consumable types?

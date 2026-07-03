# Effect Predicate Audit

This report flags generated effect sources that likely need extra runtime predicates before modifier attribution can be trusted.

## Summary

- Records flagged: 2448
- Interesting records: 366

### Tag Counts

- activation.active-modifier-window: 1173
- activation.focus-state: 14
- attacker.elite-or-stronger: 14
- direction.damage-dealt: 543
- direction.damage-taken-or-defense: 282
- effect.compound-components: 582
- needs.description-extraction: 70
- needs.effect-component-classification: 175
- needs.module-description-extraction: 16
- relationship.produced-damage-row: 713
- scope.skill-or-recount-targeted: 826
- source.armor-or-defense-scaling: 22
- source.battle-imagine: 11
- source.companion-or-summon: 145
- target.armor-or-defense: 10
- target.boss-or-elite-suspect: 13
- target.elite-or-stronger: 145
- target.resistance: 1
- target.state-or-debuff: 23
- target.super-armor: 2
- window.stack-state: 28
- window.timed: 96

### Family Counts

- ConsumableBuffBridge: 108
- EffectSources: 2030
- ModuleBuffCatalog: 16
- SeasonPhantomFactors: 197
- TalentEffectModelProbe: 97

## Representative Rows

### Cuisine (food-buff:2032161)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032161
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv1——
### Cuisine (food-buff:2032171)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032171
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv1——
### Cuisine (food-buff:2032181)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032181
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv1——
### Cuisine (food-buff:2032261)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032261
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】物攻+精英增伤Lv1——
### Cuisine (food-buff:2032262)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032262
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】物攻+精英增伤Lv2
### Cuisine (food-buff:2032263)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032263
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】物攻+精英增伤Lv3
### Cuisine (food-buff:2032264)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032264
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】物攻+精英增伤Lv4
### Cuisine (food-buff:2032271)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032271
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】魔攻+精英增伤Lv1——
### Cuisine (food-buff:2032272)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032272
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】魔攻+精英增伤Lv2
### Cuisine (food-buff:2032273)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032273
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】魔攻+精英增伤Lv3
### Cuisine (food-buff:2032274)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032274
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】魔攻+精英增伤Lv4
### Cuisine (food-buff:2032281)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032281
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】护甲+精英减伤Lv1——
### Cuisine (food-buff:2032282)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032282
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】护甲+精英减伤Lv2
### Cuisine (food-buff:2032283)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032283
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】护甲+精英减伤Lv3
### Cuisine (food-buff:2032284)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032284
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】护甲+精英减伤Lv4
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 (food-buff:2032182)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032182
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv2 | [S2]Armor + Elite DMG Reduction Lv.2
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 (food-buff:2032183)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032183
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv3 | [S2]Armor + Elite DMG Reduction Lv.3
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.4 (food-buff:2032184)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032184
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv4 | [S2]Armor + Elite DMG Reduction Lv.4
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.5 (food-buff:2032185)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032185
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv5 | [S2]Armor + Elite DMG Reduction Lv.5
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.6 (food-buff:2032186)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032186
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv6 | [S2]Armor + Elite DMG Reduction Lv.6
### Cuisine - [S2]ATK + DMG to Elites Lv.2 (food-buff:2032162)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032162
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv2 | [S2]ATK + DMG to Elites Lv.2
### Cuisine - [S2]ATK + DMG to Elites Lv.3 (food-buff:2032163)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032163
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv3 | [S2]ATK + DMG to Elites Lv.3
### Cuisine - [S2]ATK + DMG to Elites Lv.4 (food-buff:2032164)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032164
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv4 | [S2]ATK + DMG to Elites Lv.4
### Cuisine - [S2]ATK + DMG to Elites Lv.5 (food-buff:2032165)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032165
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv5 | [S2]ATK + DMG to Elites Lv.5
### Cuisine - [S2]ATK + DMG to Elites Lv.6 (food-buff:2032166)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032166
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv6 | [S2]ATK + DMG to Elites Lv.6
### Cuisine - [S2]MATK + DMG to Elites Lv.2 (food-buff:2032172)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032172
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv2 | [S2]MATK + DMG to Elites Lv.2
### Cuisine - [S2]MATK + DMG to Elites Lv.3 (food-buff:2032173)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032173
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv3 | [S2]MATK + DMG to Elites Lv.3
### Cuisine - [S2]MATK + DMG to Elites Lv.4 (food-buff:2032174)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032174
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv4 | [S2]MATK + DMG to Elites Lv.4
### Cuisine - [S2]MATK + DMG to Elites Lv.5 (food-buff:2032175)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032175
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv5 | [S2]MATK + DMG to Elites Lv.5
### Cuisine - [S2]MATK + DMG to Elites Lv.6 (food-buff:2032176)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032176
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv6 | [S2]MATK + DMG to Elites Lv.6
### Cuisine - S1-Armor + Elite DMG Reduction Lv.1 (food-buff:2032086)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032086
- Components: S1-Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv1 | S1-Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1 | Honey Glazed Fish Lv.1 | Chewy Mutton Chop Burger Lv.1 | Sweet and Spicy Seafood Noodles Lv.1 | F
### Cuisine - S1-Armor + Elite DMG Reduction Lv.2 (food-buff:2032088)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032088
- Components: S1-Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv2 | S1-Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2 | Honey Glazed Fish Lv.2 | Chewy Mutton Chop Burger Lv.2 | Sweet and Spicy Seafood Noodles Lv.2 | F
### Cuisine - S1-ATK + DMG to Elites Lv.1 (food-buff:2032065)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032065
- Components: S1-ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv1 | S1-ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Tangy Fish Lv.1 | Spicy Fish Noodle Soup Lv.1
### Cuisine - S1-ATK + DMG to Elites Lv.2 (food-buff:2032067)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032067
- Components: S1-ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv2 | S1-ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Tangy Fish Lv.2 | Spicy Fish Noodle Soup Lv.2
### Cuisine - S1-MATK + DMG to Elites Lv.1 (food-buff:2032075)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032075
- Components: S1-MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv1 | S1-MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Tangy Mutton Pot Lv.1 | Fiery Mutton Soup Lv.1
### Cuisine - S1-MATK + DMG to Elites Lv.2 (food-buff:2032077)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032077
- Components: S1-MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv2 | S1-MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Tangy Mutton Pot Lv.2 | Fiery Mutton Soup Lv.2
### Agility (talent:3)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_attrdexterity
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Agility | 敏捷 | 민첩 | Agilité | Agilität | Agilidad | Agilidade | Agi | AGI | ui/atlas/weaponhero/new/common_attrdexterity
### Arachnocrab Summon (season-rogue-entry:365)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997583
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry152
- Text: Arachnocrab Summon | 蟹蛛召唤 | 蟹蛛召喚 | カニクモ召喚 | 거미게 소환 | Invocation d'arachnocrabe | Spinnenkrabben-Beschwörung | Invocación de Crustaraña | Invocação de Aracnoguejo | Spidercrab Summon | ui/textures/rouge_icon/rogue_icon_entry152
### Arcane! Blazing Axe (buff-source:3210051)
- Family: EffectSources
- Kind: imagine / imagine
- Tags: relationship.produced-damage-row, scope.skill-or-recount-targeted, target.elite-or-stronger
- Buff ids: 3210051
- Components: Produced Damage [proc-damage; relationship.produced-damage-row]
- Icon: ui/textures/skill_aoyi/skill_aoyi_skill_icon_018
- Target count: 2
- Text: Arcane! Blazing Axe | 山贼首领 - 被动 - 子buff dot | 奥义！炽炎战斧 | 奧義！熾炎戰斧 | Arcane ! Hache ardente | Arkana! Lodernde Axt | ¡Arcano! Hacha Ardiente | Arcano! Machado Flamejante | ui/textures/skill_aoyi/skill_aoyi_skill_icon_018 | Parent or linked row is an Arcane/Imagine entry.
### Arrow Rain Acceleration (talent:1138)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2203380
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/gongjian1138
- Text: Arrow Rain Acceleration | 箭雨加速 | 矢雨加速 | 화살비 가속 | Accélération de Pluie de flèches | Pfeilregen-Beschleunigung | Aceleración de Lluvia de Flechas | Aceleração da Chuva de Flechas | ฝนศรเร่งรัว | ui/atlas/talent_passive_11/gongjian1138
### Attack Speed (talent:41)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, direction.damage-dealt, needs.description-extraction
- Components: Haste / Attack Speed [hit-timing; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon13
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Attack Speed | 攻击速度 | 攻擊速度 | 攻撃速度 | 공격 속도 | Vitesse d'attaque | Angriffsgeschwindigkeit | VEL de ATQ | Velocidade de Ataque | ความเร็วโจมตี | ui/atlas/weaponhero/new/common_icon13
### Beast Power (talent:1133)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: source.companion-or-summon
- Buff ids: 2203330
- Icon: ui/atlas/talent_passive_11/gongjian1133
- Text: Beast Power | 野兽之力 | 野獸之力 | 臣獣の力 | 야수의 힘 | Puissance de la bête | Macht der Bestie | Poder de Bestia | Poder da Fera | พลังของสัตว์ | ui/atlas/talent_passive_11/gongjian1133
### Beast Tidal Power (talent:1137)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: source.companion-or-summon
- Buff ids: 2203370, 2203371
- Icon: ui/atlas/talent_passive_11/gongjian1137
- Text: Beast Tidal Power | 野兽怒涛之力 | 野獸怒濤之力 | 怒涛の臣獣 | 야수 분노의 힘 | Puissance bestiale des marées | Gezeitenmacht der Bestie | Poder de Marea Bestial | Poder da Maré Bestial | พลังคลื่นแห่งความโกรธของสัตว์ | Beast Rage Power | ui/atlas/talent_passive_11/gongjian1137 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Beat Performer Reality Factor X5 (phantom-factor:3057440)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: activation.active-modifier-window, direction.damage-dealt, source.companion-or-summon
- Buff ids: 3057440
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: xuwangyinzi_s2_13_005
- Text: Beat Performer Reality Factor X5 | 灵魂真实因子X5 | 靈魂真實因子X5 | ビートパフォーマー・実像因子X5 | 비트 퍼포머 진실 인자X5 | Facteur de réalité de Virtuose du rythme X5 | Beat-Performer X5 | Artista del ritmo X5 | Fator de Realidade de Artista do Ritmo X5 | Beat Truth Factor X5 | xuwangyinzi_s2_13_005 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as 
### Block DMG Reduction (talent:49)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, needs.description-extraction
- Components: Damage Reduction / Defense [damage-reduction; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon04
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Block DMG Reduction | 格挡减伤 | 格擋減傷 | レジストダメージ軽減 | 막기 대미지 감소 | Réduction de dégâts de blocage | Block-SCH-Reduktion | Reducción de DÑO de bloqueo | Redução de Dano por Bloqueio | ลด DMG บล็อก | Block DR | ui/atlas/weaponhero/new/common_icon04
### Blood Pact Summon (season-rogue-entry:405)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997633
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry192
- Text: Blood Pact Summon | 血契召唤 | 血契召喚 | 血の契約召喚 | 혈계 소환 | Invocation de pacte de sang | Blutpakt-Beschwörung | Invocación de Pacto de Sangre | Invocação de Pacto de Sangue | Bloodpact Summon | ui/textures/rouge_icon/rogue_icon_entry192
### Boundless Frost (talent:225)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2204230
- Components: Cooldown / Resource [cooldown-or-resource; activation.active-modifier-window] / Elemental DMG [elemental-damage; activation.active-modifier-window] / Generic DMG [damage-modifier; activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceskyhit
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Boundless Frost | 玄冰无界 | 玄冰無界 | 玄氷無界 | 무한 미스틱 아이스 | Givre Infini | Grenzenloser Frost | Escarcha Ilimitada | Cristal de Gelo Ilimitado | Boundless Black Ice | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceskyhit
### Brigand Leader - Fiery Battle Will (buff-source:2110065)
- Family: EffectSources
- Kind: imagine / imagine-buff
- Tags: source.battle-imagine, target.boss-or-elite-suspect
- Buff ids: 2110064, 2110065
- Components: ATK [offense-stat; source.battle-imagine]
- Icon: ui/atlas/buff/buff_passive_icon_dps_crit04
- Notes: Boss/elite hint came from name/icon text; needs description or runtime target predicate proof.
- Text: Brigand Leader - Fiery Battle Will | 山贼头目 - 炽热战意 | 山賊頭目 - 熾熱戰意 | 異国の山賊長ヒグマ - 灼熱の戦意 | 산적 두목 - 타오르는 전의 | Chef des brigands - Volonté guerrière ardente | Brigantenboss - Feuriger Kampfwille | Líder bandido - Ímpetu de Batalla Ardiente | Líder dos Bandidos - Vontade de Batalha Ardente | Brigand Leader - Fiery Battle Spirit | Bandit Chief - Blazing War Intent | ui/atlas/buff/buff_passive_icon_dps_crit04
### Cabbage Is the Best (buff-source:2110119)
- Family: EffectSources
- Kind: imagine / imagine-buff
- Tags: target.elite-or-stronger
- Buff ids: 2110119
- Icon: ui/atlas/buff/buff_icon18
- Text: Cabbage Is the Best | 卷心菜天下第一 | 捲心菜天下第一 | 甘藍天下一 | 양배추 최고 | Le chou, c'est la vie ! | Kohl ist das Größte | La col es lo máximo | Repolho Acima de Tudo | กะหล่ำปลีคือที่หนึ่งในใต้หล้า | Cabbage Rules | 卷心菜首领主动 | ui/atlas/buff/buff_icon18
### Captain's Summon (season-rogue-entry:189)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997484
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry103
- Text: Captain's Summon | 兵长召唤 | 兵長召喚 | ウォーリアー召喚 | 병장 소환 | Invocation du Capitaine | Beschwörung des Hauptmanns | Invocación del capitán | Invocação do Capitão | อัญเชิญหัวหน้าหน่วย | Commander Summon | ui/textures/rouge_icon/rogue_icon_entry103
### Casting SPD (talent:42)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon13
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Casting SPD | 施法速度 | 発動速度 | 스킬 시전 속도 | Vitesse d'incantation | Zauber-GES | VEL de lanzamiento | VEL de Conjuração | ความเร็วร่ายสกิล | Cast Speed | ui/atlas/weaponhero/new/common_icon13
### Celestial Eagle (talent:1160)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, scope.skill-or-recount-targeted, source.companion-or-summon, target.state-or-debuff
- Buff ids: 55223, 55413, 55414, 2203600
- Components: Haste / Attack Speed [hit-timing; target.state-or-debuff, source.companion-or-summon, activation.active-modifier-window] / Cooldown / Resource [cooldown-or-resource; target.state-or-debuff, source.companion-or-summon, activation.active-modifier-window] / Damage Reduction / Defense [damage-reduction; target.state-or-debuff, source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; target.state-or-debuff, source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/gongjian1160
- Target count: 3
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Celestial Eagle | 天界雄鹰 | 天界雄鷹 | 天界の臣鷹 | 천공의 매 | Aigle céleste | Himmlischer Adler | Águila celestial | Águia Celestial | ui/atlas/talent_passive_11/gongjian1160 | Activation aliases map a talent/passive source row to the runtime buff window that enables it. They only expose uptime; they do not imply a damage formula.
### Chasing Step (talent:422)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2205210, 2205211, 2205580
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_4/talent_passive_icon_general_dps_ruthless
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Chasing Step | 追击身法 | 追擊身法 | 追撃身法 | 추격 신법 | Pas de poursuite | Verfolgungsschritt | Paso Persecutor | Postura de Caça | Pursuit Technique | Pursuit Maneuver | ui/atlas/talent_passive_4/talent_passive_icon_general_dps_ruthless | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula. | Activation aliases map a talent/passive source row to the runtime buff window that enab
### Cinder of Reverie (season-talent-node:1107)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 3002270
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Text: Cinder of Reverie | 残梦余烬 | 殘夢餘燼 | 残夢の余燼 | 남은 꿈의 잔여 | Cendre de rêverie | Glut der Träumerei | Ceniza del Ensueño | Cinzas do Devaneio | เถ้าถ่าน Forgotten Dream | Embers of Fading Dream | ui/atlas/season_talent_icon/s2talent01_04
### Cold Wind Convergence (talent:211)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 705001, 2204110, 2204111
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Elemental DMG [elemental-damage; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergyget
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cold Wind Convergence | 寒风凝聚 | 寒風凝聚 | 寒風の集約 | 냉기 응집 | Convergence des vents froids | Kaltwindkonvergenz | Convergencia de Viento Gélido | Convergência do Vento Gélido | Chilling Wind | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergyget | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula. | Activation aliases map a talent/passive source row to the
### Crit (talent:5)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, needs.description-extraction
- Buff ids: 997022
- Components: Crit [critical-stat; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon12
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit | 暴击 | 暴擊 | 会心 | 치명타 | Critique | Krit | Crítico | CRIT | ui/atlas/weaponhero/new/common_icon12 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Crit Chance (talent:40)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, needs.description-extraction
- Components: Crit [critical-stat; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon12
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit Chance | 暴击几率 | 暴擊機率 | 会心率 | 치명타 확률 | Chances de coups critiques | Krit-Chance | Probabilidad de crítico | Chance de Crítico | โอกาส CRIT | Critical Chance | ui/atlas/weaponhero/new/common_icon12
### Crit DMG (talent:45)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, direction.damage-dealt, needs.description-extraction
- Components: Crit DMG [critical-damage-stat; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon12
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit DMG | 暴击伤害 | 暴擊傷害 | 会心ダメージ | 치명타 대미지 | Dégâts critiques | Krit-SCH | DÑO crítico | Dano Crítico | CRIT DMG | ui/atlas/weaponhero/new/common_icon12
### Cuisine (buff-source:2032161)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032161
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv1—— | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032171)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032171
- Components: MATK [offense-stat; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv1—— | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032181)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032181
- Components: Damage Reduction / Defense [damage-reduction; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv1—— | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032261)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032261
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】物攻+精英增伤Lv1—— | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032262)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032262
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032263)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032263
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032264)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032264
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】物攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032271)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032271
- Components: MATK [offense-stat; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】魔攻+精英增伤Lv1—— | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032272)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032272
- Components: MATK [offense-stat; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032273)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032273
- Components: MATK [offense-stat; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】魔攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032274)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-dealt, target.elite-or-stronger
- Buff ids: 2032274
- Components: MATK [offense-stat; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】魔攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032281)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032281
- Components: Damage Reduction / Defense [damage-reduction; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】护甲+精英减伤Lv1—— | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032282)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032282
- Components: Damage Reduction / Defense [damage-reduction; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032283)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032283
- Components: Damage Reduction / Defense [damage-reduction; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】护甲+精英减伤Lv3 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine (buff-source:2032284)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, target.elite-or-stronger
- Buff ids: 2032284
- Components: Damage Reduction / Defense [damage-reduction; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/buff/buff_food_up
- Text: Cuisine | 料理 | 요리 | Kochkunst | Cocina | Culinária | ทำอาหาร | 【S3】护甲+精英减伤Lv4 | ui/atlas/buff/buff_food_up | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 (buff-source:2032182)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032182
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 (buff-source:2032183)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032183
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv3 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.4 (buff-source:2032184)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032184
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv4 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.5 (buff-source:2032185)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032185
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv5 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.6 (buff-source:2032186)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032186
- Components: [S2]Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv6 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.2 (buff-source:2032162)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032162
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.3 (buff-source:2032163)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032163
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.4 (buff-source:2032164)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032164
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.5 (buff-source:2032165)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032165
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.6 (buff-source:2032166)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032166
- Components: [S2]ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.2 (buff-source:2032172)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032172
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.3 (buff-source:2032173)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032173
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.4 (buff-source:2032174)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032174
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.5 (buff-source:2032175)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032175
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.6 (buff-source:2032176)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032176
- Components: [S2]MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - S1-Armor + Elite DMG Reduction Lv.1 (buff-source:2032086)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032086
- Components: S1-Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | S1-Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1 | Honey Glazed Fish Lv.1 | Chewy Mutton Chop Burger Lv.1 | Sweet and S
### Cuisine - S1-Armor + Elite DMG Reduction Lv.2 (buff-source:2032088)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032088
- Components: S1-Armor [unknown-effect; needs.effect-component-classification] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | S1-Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2 | Honey Glazed Fish Lv.2 | Chewy Mutton Chop Burger Lv.2 | Sweet and S
### Cuisine - S1-ATK + DMG to Elites Lv.1 (buff-source:2032065)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032065
- Components: S1-ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | S1-ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Tangy Fish Lv.1 | Spicy Fish Noodle Soup Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as c
### Cuisine - S1-ATK + DMG to Elites Lv.2 (buff-source:2032067)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032067
- Components: S1-ATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | S1-ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Tangy Fish Lv.2 | Spicy Fish Noodle Soup Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as c
### Cuisine - S1-MATK + DMG to Elites Lv.1 (buff-source:2032075)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032075
- Components: S1-MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | S1-MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Tangy Mutton Pot Lv.1 | Fiery Mutton Soup Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family an
### Cuisine - S1-MATK + DMG to Elites Lv.2 (buff-source:2032077)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, needs.effect-component-classification, target.elite-or-stronger
- Buff ids: 2032077
- Components: S1-MATK [unknown-effect; needs.effect-component-classification] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - S1-MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | S1-MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Tangy Mutton Pot Lv.2 | Fiery Mutton Soup Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family an
### Dark Attack (talent:25)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-dealt, needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon03
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Dark Attack | 暗元素攻击 | 暗元素攻擊 | 闇属性攻撃 | 어둠 원소 공격 | Attaque des ténèbres | Dunkelangriff | Ataque oscuro | Ataque das Trevas | โจมตีธาตุมืด | Dark ATK | ui/atlas/weaponhero/new/common_icon03
### Demon Wolf Twin (talent:1110)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2203110
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfonce
- Text: Demon Wolf Twin | 魔狼双生 | 魔狼雙生 | 双生の臣狼 | 쌍둥이 늑대 마수 | Loup-démon jumeau | Dämonenwolf-Zwilling | Lobo Demoniaco Gemelo | Lobo Gêmeo Demoníaco | Twin Demon Wolves | Demonic Wolf Twin | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfonce
### Denvel Summon (season-rogue-entry:390)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 997618
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry177
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Denvel Summon | 丹佛召唤 | 丹佛召喚 | デンヴェル召喚 | 덴벨 소환 | Invocation de Denvel | Denvel-Beschwörung | Invocación de Denvel | Invocação de Denvel | อัญเชิญ Denvel | Denver Summon | ui/textures/rouge_icon/rogue_icon_entry177
### Direwolf's Hunger (talent:1106)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2203070, 2203071
- Components: Haste / Attack Speed [hit-timing; source.companion-or-summon, activation.active-modifier-window] / ATK [offense-stat; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfspeedup
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Direwolf's Hunger | 魔狼之嗜 | 臣狼の爪 | 늑대 마수의 탐욕 | Faim du loup sinistre | Hunger des Schreckenswolfs | Hambre del Lobo Huargo | Fome do Lobo Atroz | Demon Wolf's Hunger | Demonic Wolf Hunger | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfspeedup | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Dreamarrow Storm (season-talent-node:1203)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 3002430
- Components: Generic DMG [damage-modifier; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Text: Dreamarrow Storm | 梦矢封暴 | 夢矢封暴 | 夢矢封殺 | 꿈 화살 폭풍 | Tempête de flèches oniriques | Traumpfeilsturm | Tormenta de Flechas Oníricas | Tempestade de Flechas Oníricas | ศรฝันผนึกพายุ | Rage Seal | ui/atlas/season_talent_icon/s2talent01_04
### Dual (season-talent-node:1007)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 3002070
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Dual | 二重 | 이중 | Double | Duplo | สองชั้น | ui/atlas/season_talent_icon/s2talent01_04
### Dual Blade Intent (talent:145)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2200470
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window] / Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Elemental DMG [elemental-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_1/taidao145
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Dual Blade Intent | 刀意双绝 | 刀意雙絕 | 刀意無双 | 도의 쌍절 | Double Intention de la lame | Doppelter Klingenwille | Voluntad del Filo Dual | Intenção da Lâmina Dupla | เจตจำนงใบมีดสองสุดยอด | Bladewill Dual | ui/atlas/talent_passive_1/taidao145
### Dual Summon (season-rogue-entry:186)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997481
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry100
- Text: Dual Summon | 双重召唤 | 雙重召喚 | ダブル召喚 | 이중 소환 | Double Invocation | Doppelbeschwörung | Invocación Doble | Invocação Dupla | อัญเชิญคู่ | Double Summon | ui/textures/rouge_icon/rogue_icon_entry100
### Dual Time (season-talent-node:1202)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 3002420
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Damage Reduction / Defense [damage-reduction; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Dual Time | 双时 | 雙時 | デュアルタイム | 이중 시공간 | Temps double | Doppelzeit | Tiempo Dual | Tempo Duplo | เวลาคู่ | ui/atlas/season_talent_icon/s2talent01_04
### Eightfold Skyflow (season-talent-node:1205)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 3002450
- Components: Generic DMG [damage-modifier; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Text: Eightfold Skyflow | 天流八重 | 천류 팔중 | Flux céleste octuple | Achtfacher Himmelsfluss | Flujo Celestial Óctuple | Fluxo Celestial Óctuplo | แปดกระแสสวรรค์ | Celestial Flow | ui/atlas/season_talent_icon/s2talent01_04
### Elemental Phantom (season-rogue-entry:178)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997473
- Components: Elemental DMG [elemental-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry092
- Text: Elemental Phantom | 元素幻灵 | 元素幻靈 | 属性の幻霊 | 원소 환령 | Fantôme Élémentaire | Elementarphantom | Fantasma Elemental | ภูตมายาธาตุ | Element Phantom | ui/textures/rouge_icon/rogue_icon_entry092
### Endurance (talent:4)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon08
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Endurance | 耐力 | 耐久力 | 내구력 | Ausdauer | Aguante | Tenacidade | ui/atlas/weaponhero/new/common_icon08
### Execution Force (season-talent-node:1103)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 3002230
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Text: Execution Force | 诛势 | 誅勢 | 討勢 | 처형의 기세 | Force d'exécution | Vollstreckungsmacht | Fuerza de Ejecución | Força de Execução | ท่าสังหาร | Execution Momentum | ui/atlas/season_talent_icon/s2talent01_04
### Falcon Break (talent:1158)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2203580
- Components: Damage Reduction / Defense [damage-reduction; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/gongjian1158
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Falcon Break | 猎鹰破式 | 獵鷹破式 | 破壊の臣鷹 | 팔콘 파식 | Percée du faucon | Falkenbruch | Ruptura del Halcón | Ruptura do Falcão | เหยี่ยวทำลาย | Hawk Break Form | ui/atlas/talent_passive_11/gongjian1158
### Falcon Raid (talent:1118)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2203180
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_thunderbird02
- Text: Falcon Raid | 鹰眼闪电破 | 鷹眼閃電破 | 臣鷹の閃撃 | 팔콘 섬광 돌진 | Raid du Faucon | Falkenangriff | Asalto del Halcón | Ataque do Falcão | Hawkeye Lightning Break | Eagleview Lightning Break | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_thunderbird02
### Falcon's Heart (talent:1121)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2203210
- Components: Damage Reduction / Defense [damage-reduction; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_birdingnoredef
- Text: Falcon's Heart | 心之鹰击 | 心之鷹擊 | 臣鷹の心 | 팔콘 관통 공격 | Cœur de Faucon | Herz des Falken | Corazón de Halcón | Coração de Falcão | Heart of the Eagle Strike | Eagle Heart Strike | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_birdingnoredef
### Falconry Spec (talent:1129)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2203290
- Components: Haste / Attack Speed [hit-timing; source.companion-or-summon, activation.active-modifier-window] / Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_skyhitget
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Falconry Spec | 驯鹰流 | 馴鷹流 | 鷹弓型 | 맹금 조련사 계열 | Spécialisation Fauconnerie | Falknerei-Spezialisierung | Especialización de Cetrería | Especialização: Falcoaria | Falconer | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_skyhitget
### Fang of the Alpha (talent:924)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, target.elite-or-stronger
- Components: Produced Damage [proc-damage; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_9/talent_passive_icon_tank_ridiculeconversion
- Text: Fang of the Alpha | 首领之牙 | 首領之牙 | 精鋭の牙 | 보스의 이빨 | Croc de l'Alpha | Reißzahn des Alphas | Colmillo del Alfa | Presa do Alfa | Fang of the Boss | Leader's Fang | ui/atlas/talent_passive_9/talent_passive_icon_tank_ridiculeconversion
### Final Summon (season-rogue-entry:174)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997463
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry088
- Text: Final Summon | 终焉召唤 | 終焉召喚 | 終焉の呼び声 | 종언 소환 | Invocation Finale | Finale Beschwörung | Invocación Final | Invocação Final | อัญเชิญจุดจบ | ui/textures/rouge_icon/rogue_icon_entry088
### Fire Attack (talent:27)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-dealt, needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon03
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Fire Attack | 火元素攻击 | 火元素攻擊 | 火属性攻撃 | 불 원소 공격 | Attaque de feu | Feuerangriff | Ataque ígneo | Ataque de Fogo | โจมตีธาตุไฟ | Fire ATK | ui/atlas/weaponhero/new/common_icon03
### Forest Attack (talent:23)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-dealt, needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon03
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Forest Attack | 森元素攻击 | 森元素攻擊 | 森属性攻撃 | 나무 원소 공격 | Attaque de la forêt | Waldangriff | Ataque forestal | Ataque de Floresta | โจมตีธาตุป่า | Forest ATK | ui/atlas/weaponhero/new/common_icon03
### Foxen Summon (season-rogue-entry:369)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997587
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry156
- Text: Foxen Summon | 地狐召唤 | 地狐召喚 | ランドフォックス召喚 | 땅여우 소환 | Invocation de renard | Fux-Beschwörung | Invocación de Zorros | Invocação de Raposa | Earthfox Summon | ui/textures/rouge_icon/rogue_icon_entry156
### Frost Comet (talent:215)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 2204140
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_icecomet
- Target count: 2
- Text: Frost Comet | 冰霜彗星 | 氷慧 | 프로스트 코멧 | Comète de givre | Frostkomet | Cometa Gélido | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_icecomet
### Frost Mage - Final Meteor (season-rogue-entry:245)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 3052180
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry045
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Frost Mage - Final Meteor | 冰魔导师·陨星终召 | 冰魔導師·隕星終召 | フロストメイジ・隕星終臨 | 프로스트 메이지・유성 최종 소환 | Mage de givre - Météore final | Frostmagier – Finaler Meteor | Mago gélido: Meteorito Final | Mago do Gelo — Meteoro Final | Frost Mage - Meteor Final Summons | Frost Mage·Meteor Terminus Summon | ui/textures/rouge_icon/rogue_icon_entry045
### Frost Mage - Triple Storm (season-rogue-entry:244)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 3052170
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry043
- Target count: 1
- Text: Frost Mage - Triple Storm | 冰魔导师·三重风暴 | 冰魔導師·三重風暴 | フロストメイジ・三連氷嵐 | 프로스트 메이지・삼중 폭풍 | Mage de givre - Triple tempête | Frostmagier – Dreifachsturm | Mago gélido: Tormenta Triple | Mago do Gelo — Tempestade Tripla | Frost Mage·Triple Storm | ui/textures/rouge_icon/rogue_icon_entry043
### Frost Mage Reality Factor X2 (phantom-factor:3052410)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: activation.active-modifier-window, direction.damage-dealt, effect.compound-components, source.companion-or-summon, target.state-or-debuff
- Buff ids: 3052410
- Components: Cooldown / Resource [cooldown-or-resource; target.state-or-debuff, source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; target.state-or-debuff, source.companion-or-summon, activation.active-modifier-window]
- Icon: xuwangyinzi_s3_02_002
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Frost Mage Reality Factor X2 | 冰魔真实因子X2 | 冰魔真實因子X2 | フロストメイジ・実像因子X2 | 프로스트 메이지 진실 인자X2 | Facteur de réalité du Mage de givre X2 | Frostmagier X2 | Factor de realidad de mago gélido X2 | Fator de Realidade de Mago do Gelo X2 | Frost Truth Factor X2 | xuwangyinzi_s3_02_002 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as

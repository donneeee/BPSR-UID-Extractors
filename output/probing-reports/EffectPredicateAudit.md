# Effect Predicate Audit

This report flags generated effect sources that likely need extra runtime predicates before modifier attribution can be trusted.

## Summary

- Records flagged: 2124
- Interesting records: 320

### Tag Counts

- activation.active-modifier-window: 964
- activation.focus-state: 14
- attacker.elite-or-stronger: 16
- direction.damage-dealt: 412
- direction.damage-taken-or-defense: 225
- effect.compound-components: 477
- needs.description-extraction: 70
- needs.effect-component-classification: 3
- needs.module-description-extraction: 16
- relationship.produced-damage-row: 643
- scope.global: 188
- scope.skill-or-recount-targeted: 925
- source.armor-or-defense-scaling: 15
- source.battle-imagine: 11
- source.companion-or-summon: 128
- target.armor-or-defense: 9
- target.boss-or-elite-suspect: 12
- target.elite-or-stronger: 116
- target.resistance: 1
- target.state-or-debuff: 18
- target.super-armor: 3
- window.stack-state: 22
- window.timed: 54

### Family Counts

- ConsumableBuffBridge: 94
- EffectSources: 1782
- ModuleBuffCatalog: 16
- SeasonPhantomFactors: 134
- TalentEffectModelProbe: 98

## Representative Rows

### Cuisine - Armor + Elite DMG Reduction Lv.1 (food-buff:2032086)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032086
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
### Cuisine - Armor + Elite DMG Reduction Lv.1 (food-buff:2032181)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032181
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1
### Cuisine - Armor + Elite DMG Reduction Lv.2 (food-buff:2032088)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032088
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
### Cuisine - Armor + Elite DMG Reduction Lv.2 (food-buff:2032182)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032182
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2
### Cuisine - Armor + Elite DMG Reduction Lv.3 (food-buff:2032183)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032183
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv3 | Armor + Elite DMG Reduction Lv.3
### Cuisine - Armor + Elite DMG Reduction Lv.4 (food-buff:2032184)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032184
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv4 | Armor + Elite DMG Reduction Lv.4
### Cuisine - Armor + Elite DMG Reduction Lv.5 (food-buff:2032185)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032185
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv5 | Armor + Elite DMG Reduction Lv.5
### Cuisine - Armor + Elite DMG Reduction Lv.6 (food-buff:2032186)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032186
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv6 | Armor + Elite DMG Reduction Lv.6
### Cuisine - ATK + DMG to Elites Lv.1 (food-buff:2032065)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032065
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
### Cuisine - ATK + DMG to Elites Lv.1 (food-buff:2032161)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032161
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1
### Cuisine - ATK + DMG to Elites Lv.2 (food-buff:2032067)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032067
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
### Cuisine - ATK + DMG to Elites Lv.2 (food-buff:2032162)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032162
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2
### Cuisine - ATK + DMG to Elites Lv.3 (food-buff:2032163)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032163
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv3 | ATK + DMG to Elites Lv.3
### Cuisine - ATK + DMG to Elites Lv.4 (food-buff:2032164)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032164
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv4 | ATK + DMG to Elites Lv.4
### Cuisine - ATK + DMG to Elites Lv.5 (food-buff:2032165)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032165
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv5 | ATK + DMG to Elites Lv.5
### Cuisine - ATK + DMG to Elites Lv.6 (food-buff:2032166)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032166
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv6 | ATK + DMG to Elites Lv.6
### Cuisine - MATK + DMG to Elites Lv.1 (food-buff:2032075)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032075
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
### Cuisine - MATK + DMG to Elites Lv.1 (food-buff:2032171)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032171
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1
### Cuisine - MATK + DMG to Elites Lv.2 (food-buff:2032077)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032077
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2
### Cuisine - MATK + DMG to Elites Lv.2 (food-buff:2032172)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032172
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2
### Cuisine - MATK + DMG to Elites Lv.3 (food-buff:2032173)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032173
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv3 | MATK + DMG to Elites Lv.3
### Cuisine - MATK + DMG to Elites Lv.4 (food-buff:2032174)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032174
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv4 | MATK + DMG to Elites Lv.4
### Cuisine - MATK + DMG to Elites Lv.5 (food-buff:2032175)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032175
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv5 | MATK + DMG to Elites Lv.5
### Cuisine - MATK + DMG to Elites Lv.6 (food-buff:2032176)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032176
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv6 | MATK + DMG to Elites Lv.6
### Agility (talent:3)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_attrdexterity
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Agility | 敏捷 | 민첩 | Agilité | Agilität | Agilidad | Agilidade | Agi | AGI | ui/atlas/weaponhero/new/common_attrdexterity
### Arcane! Blazing Axe (buff-source:3210051)
- Family: EffectSources
- Kind: imagine / imagine
- Tags: relationship.produced-damage-row, scope.skill-or-recount-targeted, target.elite-or-stronger
- Buff ids: 3210051
- Components: Produced Damage [proc-damage; relationship.produced-damage-row]
- Icon: ui/textures/skill_aoyi/skill_aoyi_skill_icon_018
- Target count: 2
- Text: Arcane! Blazing Axe | 山贼首领 - 被动 - 子buff dot | 奥义！炽炎战斧 | 奧義！熾炎戰斧 | 奥義！炎のバトルアクス | 오의! 작열의 전투도끼 | Arcane ! Hache ardente | Arkana! Lodernde Axt | ¡Arcano! Hacha Ardiente | Arcano! Machado Flamejante | ui/textures/skill_aoyi/skill_aoyi_skill_icon_018 | Parent or linked row is an Arcane/Imagine entry.
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
### Block DMG Reduction (talent:49)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, needs.description-extraction
- Components: Damage Reduction / Defense [damage-reduction; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon04
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Block DMG Reduction | 格挡减伤 | 格擋減傷 | レジストダメージ軽減 | 막기 대미지 감소 | Réduction de dégâts de blocage | Block-SCH-Reduktion | Reducción de DÑO de bloqueo | Redução de Dano por Bloqueio | ลด DMG บล็อก | Block DR | ui/atlas/weaponhero/new/common_icon04
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
- Components: Damage Reduction / Defense [damage-reduction; target.state-or-debuff, source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; target.state-or-debuff, source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/gongjian1160
- Target count: 3
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Celestial Eagle | 天界雄鹰 | 天界雄鷹 | 天界の臣鷹 | 천공의 매 | Aigle céleste | Himmlischer Adler | Águila celestial | Águia Celestial | ui/atlas/talent_passive_11/gongjian1160 | Activation aliases map a talent/passive source row to the runtime buff window that enables it. They only expose uptime; they do not imply a damage formula.
### Chasing Step (talent:422)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2205210, 2205211, 2205580
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_4/talent_passive_icon_general_dps_ruthless
- Text: Chasing Step | 追击身法 | 追擊身法 | 追撃身法 | 추격 신법 | Pas de poursuite | Verfolgungsschritt | Paso Persecutor | Postura de Caça | Pursuit Technique | Pursuit Maneuver | ui/atlas/talent_passive_4/talent_passive_icon_general_dps_ruthless | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula. | Activation aliases map a talent/passive source row to the runtime buff window that enab
### Cinder of Reverie (season-talent-node:1107)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 3002270
- Components: Season DMG [season-damage; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
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
### Cuisine - Armor + Elite DMG Reduction Lv.1 (buff-source:2032086)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032086
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the ob
### Cuisine - Armor + Elite DMG Reduction Lv.1 (buff-source:2032181)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032181
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.1 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.2 (buff-source:2032088)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032088
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the ob
### Cuisine - Armor + Elite DMG Reduction Lv.2 (buff-source:2032182)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032182
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.3 (buff-source:2032183)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032183
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv3 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.4 (buff-source:2032184)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032184
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv4 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.5 (buff-source:2032185)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032185
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv5 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.6 (buff-source:2032186)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032186
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv6 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.1 (buff-source:2032065)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032065
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - ATK + DMG to Elites Lv.1 (buff-source:2032161)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032161
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.1 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.2 (buff-source:2032067)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032067
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - ATK + DMG to Elites Lv.2 (buff-source:2032162)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032162
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.3 (buff-source:2032163)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032163
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.4 (buff-source:2032164)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032164
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.5 (buff-source:2032165)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032165
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.6 (buff-source:2032166)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032166
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.1 (buff-source:2032075)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032075
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - MATK + DMG to Elites Lv.1 (buff-source:2032171)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032171
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.1 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.2 (buff-source:2032077)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032077
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - MATK + DMG to Elites Lv.2 (buff-source:2032172)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032172
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.3 (buff-source:2032173)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032173
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.4 (buff-source:2032174)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032174
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.5 (buff-source:2032175)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032175
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.6 (buff-source:2032176)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032176
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
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
- Tags: activation.active-modifier-window, effect.compound-components, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 3002430
- Components: ATK [offense-stat; source.companion-or-summon, activation.active-modifier-window] / Season DMG [season-damage; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Target count: 1
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Dreamarrow Storm | 梦矢封暴 | 夢矢封暴 | 夢矢封殺 | 꿈 화살 폭풍 | Tempête de flèches oniriques | Traumpfeilsturm | Tormenta de Flechas Oníricas | Tempestade de Flechas Oníricas | ศรฝันผนึกพายุ | Rage Seal | ui/atlas/season_talent_icon/s2talent01_04
### Dual (season-talent-node:1007)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 3002070
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Text: Dual | 二重 | 이중 | Double | Duplo | สองชั้น | ui/atlas/season_talent_icon/s2talent01_04
### Dual Blade Intent (talent:145)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2200470
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window] / Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
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
- Tags: activation.active-modifier-window, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 3002450
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Target count: 1
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
- Tags: activation.active-modifier-window, effect.compound-components, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 3002230
- Components: Season DMG [season-damage; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Target count: 1
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
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
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Season DMG [season-damage; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry045
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Frost Mage - Final Meteor | 冰魔导师·陨星终召 | 冰魔導師·隕星終召 | フロストメイジ・隕星終臨 | 프로스트 메이지・유성 최종 소환 | Mage de givre - Météore final | Frostmagier – Finaler Meteor | Mago gélido: Meteorito Final | Mago do Gelo — Meteoro Final | Frost Mage - Meteor Final Summons | Frost Mage·Meteor Terminus Summon | ui/textures/rouge_icon/rogue_icon_entry045
### Frost Mage - Triple Storm (season-rogue-entry:244)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 3052170
- Components: Season DMG [season-damage; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry043
- Target count: 1
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Frost Mage - Triple Storm | 冰魔导师·三重风暴 | 冰魔導師·三重風暴 | フロストメイジ・三連氷嵐 | 프로스트 메이지・삼중 폭풍 | Mage de givre - Triple tempête | Frostmagier – Dreifachsturm | Mago gélido: Tormenta Triple | Mago do Gelo — Tempestade Tripla | Frost Mage·Triple Storm | ui/textures/rouge_icon/rogue_icon_entry043
### Frost Mage Rhapsody X4 (phantom-factor:3052150)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: activation.active-modifier-window, direction.damage-dealt, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 3052150
- Components: Seasonal Factor DMG [seasonal-factor-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: kuangxiangyinzi_s2_02_004
- Target count: 1
- Text: Frost Mage Rhapsody X4 | 冰魔狂想X4.G1 | フロストメイジ・狂想X4.G1 | 프로스트 메이지 광상X4 | Rhapsodie de Mage de givre X4 | Frostmagier-Rhapsodie X4 | Rapsodia: Mago gélido X4 | Rapsódia do Mago do Gelo X4 | Frost Rhapsody X4 | Frost Rhapsody X4.G1 | kuangxiangyinzi_s2_02_004 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-tar
### Glazed Vastness (talent:223)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, target.elite-or-stronger
- Buff ids: 2204210
- Components: Elemental DMG [elemental-damage; target.elite-or-stronger, activation.active-modifier-window] / Produced Damage [proc-damage; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_tank_suppressex
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Glazed Vastness | 琉璃浩瀚 | 無辺なる氷 | 유리 광야 | Immensité Verglacée | Gläserne Weite | Inmensidad Cristalina | Vastidão Vítrea | Glassy Expanse | ui/atlas/talent_passive_2/talent_passive_icon_general_tank_suppressex
### Goblin Charge (season-rogue-entry:184)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997479
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry098
- Text: Goblin Charge | 哥布林冲锋 | 哥布林衝鋒 | ゴブリンアタック | 고블린 돌격 | Charge de Gobelin | Goblin-Ansturm | Carga de Goblin | Investida Goblin | Goblin ชาร์จ | Goblin Assault | ui/textures/rouge_icon/rogue_icon_entry098
### Granite (talent:960)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 2201620
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_9/weiren960
- Target count: 3
- Text: Granite | 岩弹 | 岩彈 | 岩石弾 | 암석탄 | Granit | Granito | กระสุนหิน | Stone Projectile | ui/atlas/talent_passive_9/weiren960
### Granite Combo (talent:965)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2201670
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_9/weiren965
- Text: Granite Combo | 岩弹二连击 | 岩彈二連擊 | 岩弾連撃 | 2단 암석탄 | Combo de Granit | Granit-Kombo | Combo de Granito | กระสุนหินคอมโบ 2 | Stone Projectile Double Strike | ui/atlas/talent_passive_9/weiren965
### Granite Fury (talent:961)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 50062, 2201630
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_9/weiren961
- Text: Granite Fury | 岩弹激怒 | 岩彈激怒 | 憤怒の岩弾 | 격노 암석탄 | Furie de granit | Granitfuror | Furia de Granito | Fúria de Granito | Enraged กระสุนหิน | Stone Projectile Enrage | ui/atlas/talent_passive_9/weiren961 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Great Rock Master (talent:953)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2201550
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_9/weiren953
- Text: Great Rock Master | 巨岩之主 | 巨岩 | 거암의 주인 | Super Maître du roc | Großer Steinmeister | Gran Maestro de Roca | Grande Mestre da Rocha | จอมภูเขาขนาดใหญ่ | Giant Rock Lord | ui/atlas/talent_passive_9/weiren953
### Group Suppress (talent:928)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, target.elite-or-stronger
- Buff ids: 2201300
- Components: Produced Damage [proc-damage; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_9/talent_passive_icon_tank_bk04
- Text: Group Suppress | 群敌压制 | 群敵壓制 | 衆敵抑圧 | 적군 제압 | Suppression de groupe | Gruppenunterdrückung | Supresión Grupal | Supressão em Grupo | Suppression of Enemies | Enemy Suppression | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk04
### Guardian Synergy—Swarm (season-rogue-entry:214)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, effect.compound-components, source.companion-or-summon
- Buff ids: 997544
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Healing / Lifesteal [healing-or-lifesteal; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry128
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Guardian Synergy—Swarm | 守护协同：蜂群 | 守護協同：蜂群 | 防御連携：ミーンの群れ | 협동 수호: 벌떼 | Synergie Gardienne - Essaim | Wächtersynergie – Schwarm | Sinergia de Guardián: Enjambre | Sinergia de Guardião – Enxame | ประสานคุ้มกัน: ฝูงผึ้ง | Guardian Sync: Swarm | ui/textures/rouge_icon/rogue_icon_entry128
### Haste (talent:6)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, needs.description-extraction
- Buff ids: 880022, 997023, 2110042
- Components: Haste / Attack Speed [hit-timing; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_attrhaste
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Haste | 急速 | ファスト | 속공 | Célérité | Tempo | Presteza | Celeridade | ui/atlas/weaponhero/new/common_attrhaste | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Healing (talent:47)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, needs.description-extraction
- Buff ids: 2202142
- Components: Healing / Lifesteal [healing-or-lifesteal; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon04
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Healing | 治疗效果 | 治療效果 | 回復効果 | 치료 효과 | Soins | Heilung | Curación | Cura | เอฟเฟกต์ Heal | Healing Effect | ui/atlas/weaponhero/new/common_icon04 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Heavy Guardian - Twentyfold Rockfall (buff-source:3055290)
- Family: EffectSources
- Kind: skill-proc / buff
- Tags: direction.damage-dealt, relationship.produced-damage-row, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 3055290
- Components: Produced Damage [proc-damage; relationship.produced-damage-row]
- Icon: ui/atlas/rouge_entry_icon/rogue_icon_entry120
- Target count: 1
- Text: Heavy Guardian - Twentyfold Rockfall | 巨刃守护者·二十岩陨 | 巨刃守護者·二十岩隕 | ヘヴィガーディアン・20ロックフォール | 헤비 가디언・이십중 암석 낙하 | Gardien imposant - Éboulement vingtuplé | Schwerer Wächter – Zwanzigfacher Steinschlag | Guardián pesado: Caída de Rocas x20 | Guardião Pesado — Queda de Rochas Víntupla | Heavy Guardian - 20-Fold Rockfall | Heavy Guardian·Twenty Rockfall | 每触发N个巨岩轰击，召唤一个巨大的岩石掉下，对目标造成伤害，额外附加目标生命上限百分1%伤害 | ui/atlas/rouge_entry_ico
### Heavy Guardian - Twentyfold Rockfall (season-rogue-entry:319)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 3055290
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry120
- Text: Heavy Guardian - Twentyfold Rockfall | 巨刃守护者·二十岩陨 | 巨刃守護者·二十岩隕 | ヘヴィガーディアン・20ロックフォール | 헤비 가디언・이십중 암석 낙하 | Gardien imposant - Éboulement vingtuplé | Schwerer Wächter – Zwanzigfacher Steinschlag | Guardián pesado: Caída de Rocas x20 | Guardião Pesado — Queda de Rochas Víntupla | Heavy Guardian - 20-Fold Rockfall | Heavy Guardian·Twenty Rockfall | ui/textures/rouge_icon/rogue_icon_entry120
### Heroic Descent (season-rogue-entry:187)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997482
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry101
- Text: Heroic Descent | 英灵降临 | 英靈降臨 | 英霊降臨 | 영웅 강림 | Descente Héroïque | Herabkunft des Helden | Descenso Heroico | Descida Heroica | วีรชนจุติ | Hero Spirit Descends | ui/textures/rouge_icon/rogue_icon_entry101
### Holy Summon (talent:1239)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2206400
- Components: Crit DMG [critical-damage-stat; source.companion-or-summon, activation.active-modifier-window] / Shield / Barrier [shield-or-barrier; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_12/jiandun1239
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Holy Summon | 圣光召唤 | 聖光召喚 | 성스러운 빛 소환 | Invocation sacrée | Heilige Beschwörung | Invocación Sagrada | Invocação Sagrada | อัญเชิญแสงศักดิ์สิทธิ์ | Holylight Summon | ui/atlas/talent_passive_12/jiandun1239
### Ice Attack (talent:20)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-dealt, needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon03
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Ice Attack | 冰元素攻击 | 冰元素攻擊 | 氷属性攻撃 | 얼음 원소 공격 | Attaque de glace | Eisangriff | Ataque helado | Ataque de Gelo | โจมตีธาตุน้ำแข็ง | Ice ATK | ui/atlas/weaponhero/new/common_icon03
### Ice Revelation (talent:203)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2204040
- Components: Elemental DMG [elemental-damage; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_doubleicearrow
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Ice Revelation | 寒冰启示 | 寒冰啟示 | 氷の啓示 | 얼음의 계시 | Révélation de glace | Eis-Offenbarung | Revelación Gélida | Revelação de Gelo | การเปิดเผยแห่งน้ำแข็ง | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_doubleicearrow
### Ignore Defense (talent:57)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, needs.description-extraction
- Components: Damage Reduction / Defense [damage-reduction; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon13
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Ignore Defense | 忽视防御 | 忽視防禦 | 防御無視 | 방어 무시 | Pénétration de défense | Verteidigung ignorieren | Ignorar defensa | Ignorar Defesa | ไม่สนป้องกัน | ui/atlas/weaponhero/new/common_icon13
### Inspiring Effect (talent:56)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon05
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Inspiring Effect | 鼓舞效果 | 鼓舞効果 | 고무 효과 | Effet inspirant | Inspirierender Effekt | Efecto inspirador | Efeito Inspirador | เอฟเฟกต์ Inspire | Inspiration Effect | ui/atlas/weaponhero/new/common_icon05
### Instant (season-talent-node:1105)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 3002250
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Instant | 瞬刻 | 순각 | Instantanéité | Augenblick | Instante | ชั่วพริบตา | Instant Moment | ui/atlas/season_talent_icon/s2talent01_04
### Intellect (talent:2)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon06
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Intellect | 智力 | 知力 | 지력 | Intelligence | Intelligenz | Intelecto | Int | INT | ui/atlas/weaponhero/new/common_icon06
### King's Reinforcements (season-rogue-entry:190)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 997485
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry104
- Text: King's Reinforcements | 王者的援军 | 王者的援軍 | 王者からの援軍 | 왕의 원군 | Renforts du Roi | Verstärkung des Königs | Refuerzos del Rey | Reforços do Rei | กองหนุนราชา | King's Aid | ui/textures/rouge_icon/rogue_icon_entry104
### Legendary Beast (talent:1143)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2203430
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/gongjian1143
- Text: Legendary Beast | 传奇野兽 | 傳奇野獸 | 伝説の臣獣 | 전설의 야수 | Bête légendaire | Legendäre Bestie | Bestia Legendaria | Fera Lendária | สัตว์ร้ายระดับตำนาน | ui/atlas/talent_passive_11/gongjian1143
### Light Attack (talent:24)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-dealt, needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon03
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Light Attack | 光元素攻击 | 光元素攻擊 | 光属性攻撃 | 빛 원소 공격 | Attaque de lumière | Lichtangriff | Ataque lumínico | Ataque de Luz | โจมตีธาตุแสง | Light ATK | ui/atlas/weaponhero/new/common_icon03
### Lightfall (talent:1122)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2203220
- Components: Crit DMG [critical-damage-stat; activation.active-modifier-window] / Crit [critical-stat; activation.active-modifier-window] / Cooldown / Resource [cooldown-or-resource; activation.active-modifier-window] / Produced Damage [proc-damage; activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_skyhitcrilight
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Lightfall | 光落 | 閃落 | 떨어지는 빛 | Chute de lumière | Lichtfall | Lluvia de Luz | Queda de Luz | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_skyhitcrilight
### Lightforged Greatsword (talent:1216)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2206170, 2206171
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window] / Healing / Lifesteal [healing-or-lifesteal; source.companion-or-summon, activation.active-modifier-window] / Damage Reduction / Defense [damage-reduction; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_12/jiandun1216
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Lightforged Greatsword | 光明圣剑 | 光明聖劍 | 光明聖剣 | 광명 성검 | Espadon forgelumière | Lichtgeschmiedetes Großschwert | Mandoble Lumínico | Montante Forjada em Luz | Holy Sword of Light | Light Holysword | ui/atlas/talent_passive_12/jiandun1216 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Luck (talent:7)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 997025
- Icon: ui/atlas/weaponhero/new/common_attrluck
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Luck | 幸运 | 幸運 | 행운 | Chance | Glück | Suerte | Sorte | Lucky | ui/atlas/weaponhero/new/common_attrluck | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Luck Chance (talent:44)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_attrluck
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Luck Chance | 幸运几率 | 幸運機率 | 幸運確率 | 행운 확률 | Taux de chance | Glückschance | Probabilidad de suerte | Chance de Sorte | โอกาส Lucky | Lucky Chance | ui/atlas/weaponhero/new/common_attrluck
### Luck Damage (talent:46)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-dealt, needs.description-extraction
- Buff ids: 2202570, 2204520
- Icon: ui/atlas/weaponhero/new/common_attrluck
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Luck Damage | 幸运伤害 | 幸運傷害 | 幸運ダメージ | 행운 대미지 | Dégâts de chance | Glücksschaden | Daño de suerte | Dano de Sorte | DMG Lucky | Lucky DMG | ui/atlas/weaponhero/new/common_attrluck | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Lucky Crit (buff-source:2110132)
- Family: EffectSources
- Kind: imagine / imagine-buff
- Tags: activation.active-modifier-window, effect.compound-components, target.elite-or-stronger
- Buff ids: 2110132
- Components: Crit DMG [critical-damage-stat; activation.active-modifier-window] / Crit [critical-stat; activation.active-modifier-window]
- Icon: ui/atlas/hud/buff/buff_blue_atk
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Lucky Crit | 幸运会心 | 幸運會心 | 幸運会心 | 행운 회심 | Critique porte-bonheur | Glücklicher Krit | Crítico de suerte | Crítico de Sorte | รวมจิตโชคดี | Luck Crit | 卷心菜精英1-主动 | ui/atlas/hud/buff/buff_blue_atk

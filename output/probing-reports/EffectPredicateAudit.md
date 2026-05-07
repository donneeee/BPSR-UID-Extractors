# Effect Predicate Audit

This report flags generated effect sources that likely need extra runtime predicates before modifier attribution can be trusted.

## Summary

- Records flagged: 1951
- Interesting records: 275

### Tag Counts

- activation.active-modifier-window: 802
- activation.focus-state: 14
- attacker.elite-or-stronger: 10
- direction.damage-dealt: 391
- direction.damage-taken-or-defense: 209
- effect.compound-components: 323
- needs.description-extraction: 70
- needs.module-description-extraction: 16
- relationship.produced-damage-row: 653
- scope.global: 120
- scope.skill-or-recount-targeted: 925
- source.armor-or-defense-scaling: 6
- source.companion-or-summon: 101
- target.armor-or-defense: 2
- target.boss-or-elite-suspect: 12
- target.elite-or-stronger: 97
- target.resistance: 1
- target.state-or-debuff: 13
- target.super-armor: 3
- window.stack-state: 22
- window.timed: 54

### Family Counts

- ConsumableBuffBridge: 26
- EffectSources: 1677
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
### Cuisine - Armor + Elite DMG Reduction Lv.2 (food-buff:2032088)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032088
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
### Cuisine - ATK + DMG to Elites Lv.1 (food-buff:2032065)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032065
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
### Cuisine - ATK + DMG to Elites Lv.2 (food-buff:2032067)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032067
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
### Cuisine - MATK + DMG to Elites Lv.1 (food-buff:2032075)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032075
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
### Cuisine - MATK + DMG to Elites Lv.2 (food-buff:2032077)
- Family: ConsumableBuffBridge
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032077
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2
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
- Tags: target.boss-or-elite-suspect
- Buff ids: 2110064, 2110065
- Icon: ui/atlas/buff/buff_passive_icon_dps_crit04
- Notes: Boss/elite hint came from name/icon text; needs description or runtime target predicate proof.
- Text: Brigand Leader - Fiery Battle Will | 山贼头目 - 炽热战意 | 山賊頭目 - 熾熱戰意 | 異国の山賊長ヒグマ - 灼熱の戦意 | 산적 두목 - 타오르는 전의 | Chef des brigands - Volonté guerrière ardente | Brigantenboss - Feuriger Kampfwille | Líder bandido - Ímpetu de Batalla Ardiente | Líder dos Bandidos - Vontade de Batalha Ardente | Brigand Leader - Fiery Battle Spirit | Bandit Chief - Blazing War Intent | ui/atlas/buff/buff_passive_icon_dps_crit04
### Burning Attack (talent:338)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, target.elite-or-stronger
- Buff ids: 2208390
- Components: ATK [offense-stat; target.elite-or-stronger, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_4/changqiang441
- Text: Burning Attack | 焚攻 | 화공 | Attaque brûlante | Brennender Angriff | Ataque ardiente | Ataque Ardente | โจมตีด้วยไฟ | serangan api | ui/atlas/talent_passive_4/changqiang441
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
### Chasing Step (talent:422)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2205210, 2205211, 2205580
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_4/talent_passive_icon_general_dps_ruthless
- Text: Chasing Step | 追击身法 | 追擊身法 | 追撃身法 | 추격 신법 | Pas de poursuite | Verfolgungsschritt | Paso Persecutor | Postura de Caça | Pursuit Technique | Pursuit Maneuver | ui/atlas/talent_passive_4/talent_passive_icon_general_dps_ruthless | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula. | Activation aliases map a talent/passive source row to the runtime buff window that enab
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
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
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
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.3 (buff-source:2032183)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032183
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv3 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.4 (buff-source:2032184)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032184
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv4 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.5 (buff-source:2032185)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032185
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv5 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.6 (buff-source:2032186)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: attacker.elite-or-stronger, direction.damage-taken-or-defense, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032186
- Components: Armor [defense-stat; scope.global] / Elite DMG Reduction [damage-reduction; attacker.elite-or-stronger, direction.damage-taken-or-defense]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv6 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
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
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
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
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.3 (buff-source:2032163)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032163
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.4 (buff-source:2032164)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032164
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.5 (buff-source:2032165)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032165
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.6 (buff-source:2032166)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032166
- Components: ATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
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
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
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
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.3 (buff-source:2032173)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032173
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.4 (buff-source:2032174)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032174
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.5 (buff-source:2032175)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032175
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.6 (buff-source:2032176)
- Family: EffectSources
- Kind: consumable / food-buff
- Tags: direction.damage-dealt, effect.compound-components, scope.global, target.elite-or-stronger
- Buff ids: 2032176
- Components: MATK [offense-stat; scope.global] / DMG to Elites [damage-modifier; direction.damage-dealt, target.elite-or-stronger]
- Icon: ui/atlas/buff/buff_food_up
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Cuisine - MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Dark Attack (talent:25)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, direction.damage-dealt, needs.description-extraction
- Components: ATK [offense-stat; activation.active-modifier-window]
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
- Components: Crit DMG [critical-damage-stat; source.companion-or-summon, activation.active-modifier-window] / Haste / Attack Speed [hit-timing; source.companion-or-summon, activation.active-modifier-window] / ATK [offense-stat; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfspeedup
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Direwolf's Hunger | 魔狼之嗜 | 臣狼の爪 | 늑대 마수의 탐욕 | Faim du loup sinistre | Hunger des Schreckenswolfs | Hambre del Lobo Huargo | Fome do Lobo Atroz | Demon Wolf's Hunger | Demonic Wolf Hunger | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfspeedup | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Dreamarrow Storm (season-talent-node:1203)
- Family: EffectSources
- Kind: season-talent-node / deep-slumber-mind-projection-node
- Tags: activation.active-modifier-window, effect.compound-components, scope.skill-or-recount-targeted, source.companion-or-summon
- Buff ids: 3002430
- Components: Crit DMG [critical-damage-stat; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Target count: 1
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Dreamarrow Storm | 梦矢封暴 | 夢矢封暴 | 夢矢封殺 | 꿈 화살 폭풍 | Tempête de flèches oniriques | Traumpfeilsturm | Tormenta de Flechas Oníricas | Tempestade de Flechas Oníricas | ศรฝันผนึกพายุ | Rage Seal | ui/atlas/season_talent_icon/s2talent01_04
### Dual Blade Intent (talent:145)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2200470
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_1/taidao145
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
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / ATK [offense-stat; source.companion-or-summon, activation.active-modifier-window] / Damage Reduction / Defense [damage-reduction; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Dual Time | 双时 | 雙時 | デュアルタイム | 이중 시공간 | Temps double | Doppelzeit | Tiempo Dual | Tempo Duplo | เวลาคู่ | ui/atlas/season_talent_icon/s2talent01_04
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
- Components: Crit DMG [critical-damage-stat; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
- Target count: 1
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Execution Force | 诛势 | 誅勢 | 討勢 | 처형의 기세 | Force d'exécution | Vollstreckungsmacht | Fuerza de Ejecución | Força de Execução | ท่าสังหาร | Execution Momentum | ui/atlas/season_talent_icon/s2talent01_04
### Falcon Break (talent:1158)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2203580
- Components: Crit DMG [critical-damage-stat; source.companion-or-summon, activation.active-modifier-window] / Damage Reduction / Defense [damage-reduction; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/gongjian1158
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Falcon Break | 猎鹰破式 | 獵鷹破式 | 破壊の臣鷹 | 팔콘 파식 | Percée du faucon | Falkenbruch | Ruptura del Halcón | Ruptura do Falcão | เหยี่ยวทำลาย | Hawk Break Form | ui/atlas/talent_passive_11/gongjian1158
### Falcon Raid (talent:1118)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2203180
- Components: Crit DMG [critical-damage-stat; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_thunderbird02
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
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
- Components: Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window] / Haste / Attack Speed [hit-timing; source.companion-or-summon, activation.active-modifier-window] / Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
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
- Tags: activation.active-modifier-window, direction.damage-dealt, needs.description-extraction
- Components: ATK [offense-stat; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon03
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Fire Attack | 火元素攻击 | 火元素攻擊 | 火属性攻撃 | 불 원소 공격 | Attaque de feu | Feuerangriff | Ataque ígneo | Ataque de Fogo | โจมตีธาตุไฟ | Fire ATK | ui/atlas/weaponhero/new/common_icon03
### Forest Attack (talent:23)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, direction.damage-dealt, needs.description-extraction
- Components: ATK [offense-stat; activation.active-modifier-window]
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
### Glazed Vastness (talent:223)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, target.elite-or-stronger
- Buff ids: 2204210
- Components: Elemental DMG [elemental-damage; target.elite-or-stronger, activation.active-modifier-window] / Generic DMG [damage-modifier; target.elite-or-stronger, activation.active-modifier-window]
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
### Granite Combo (talent:965)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 2201670
- Components: Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/talent_passive_9/weiren965
- Text: Granite Combo | 岩弹二连击 | 岩彈二連擊 | 岩弾連撃 | 2단 암석탄 | Combo de Granit | Granit-Kombo | Combo de Granito | กระสุนหินคอมโบ 2 | Stone Projectile Double Strike | ui/atlas/talent_passive_9/weiren965
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
- Tags: activation.active-modifier-window, direction.damage-dealt, needs.description-extraction
- Components: ATK [offense-stat; activation.active-modifier-window]
- Icon: ui/atlas/weaponhero/new/common_icon03
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Ice Attack | 冰元素攻击 | 冰元素攻擊 | 氷属性攻撃 | 얼음 원소 공격 | Attaque de glace | Eisangriff | Ataque helado | Ataque de Gelo | โจมตีธาตุน้ำแข็ง | Ice ATK | ui/atlas/weaponhero/new/common_icon03
### Ice Revelation (talent:203)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 2204040
- Components: ATK [offense-stat; source.companion-or-summon, activation.active-modifier-window] / Elemental DMG [elemental-damage; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
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
- Tags: activation.active-modifier-window, source.companion-or-summon
- Buff ids: 3002250
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/atlas/season_talent_icon/s2talent01_04
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
- Tags: activation.active-modifier-window, direction.damage-dealt, needs.description-extraction
- Components: ATK [offense-stat; activation.active-modifier-window]
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
- Tags: activation.active-modifier-window, target.elite-or-stronger
- Buff ids: 2110132
- Components: Crit [critical-stat; activation.active-modifier-window]
- Icon: ui/atlas/hud/buff/buff_blue_atk
- Text: Lucky Crit | 幸运会心 | 幸運會心 | 幸運会心 | 행운 회심 | Critique porte-bonheur | Glücklicher Krit | Crítico de suerte | Crítico de Sorte | รวมจิตโชคดี | Luck Crit | 卷心菜精英1-主动 | ui/atlas/hud/buff/buff_blue_atk
### Lucky Phantom (season-rogue-entry:193)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon
- Buff ids: 997488
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Healing / Lifesteal [healing-or-lifesteal; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry107
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Lucky Phantom | 幸运幻影 | 幸運幻影 | 행운 환영 | Fantôme chanceux | Glücksphantom | Fantasma de la Suerte | Fantasma da Sorte | เงาลวงโชคดี | Luck Phantom | ui/textures/rouge_icon/rogue_icon_entry107
### Marksman - Boundless Volley (season-rogue-entry:256)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: target.elite-or-stronger
- Buff ids: 3053250
- Icon: ui/textures/rouge_icon/rogue_icon_entry056
- Text: Marksman - Boundless Volley | 神射手·爆箭无界 | 神射手·爆箭無界 | ディバインアーチャー・爆矢無限 | 디바인 아처・폭발 화살 무한 | Tireur d'élite - Volée sans fin | Scharfschütze – Grenzenlose Salve | Tirador: Descarga Desatada | Atirador de Elite — Saraivada Sem Limites | Markman - Explosive Arrow: Boundless | Divine Archer·Ledakan Panah Tanpa Batas | ui/textures/rouge_icon/rogue_icon_entry056
### Marksman - Call of the Wild (season-rogue-entry:247)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053160
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry047
- Text: Marksman - Call of the Wild | 神射手·群兽光召 | 神射手·群獸光召 | ディバインアーチャー・群獣召光 | 디바인 아처・군수 광휘 소환 | Tireur d'élite - Appel de la nature | Scharfschütze – Ruf der Wildnis | Tirador: Llamada de lo Salvaje | Atirador de Elite — Chamado Selvagem | Markman - Beast Herd: Light Call | Divine Archer·Panggilan Cahaya Kawanan | ui/textures/rouge_icon/rogue_icon_entry047
### Marksman - Charged Execution (season-rogue-entry:260)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, target.elite-or-stronger
- Buff ids: 3053290
- Components: Elemental DMG [elemental-damage; activation.active-modifier-window] / Generic DMG [damage-modifier; activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry060
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman - Charged Execution | 神射手·聚能斩血 | 神射手·聚能斬血 | ディバインアーチャー・チャージ削命 | 디바인 아처・집중 참혈 | Tireur d'élite - Exécution chargée | Scharfschütze – Aufgeladene Hinrichtung | Tirador: Ejecución Cargada | Atirador de Elite — Execução Carregada | Markman - Charged Bloodslash | Divine Archer·Focus Pemotong Darah | ui/textures/rouge_icon/rogue_icon_entry060
### Marksman - Charged Triple Shot (season-rogue-entry:259)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, target.elite-or-stronger
- Buff ids: 3053280
- Components: Produced Damage [proc-damage; activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry059
- Text: Marksman - Charged Triple Shot | 神射手·聚能三向 | ディバインアーチャー・三向チャージ | 디바인 아처・삼방향 집중 | Tireur d'élite - Triple tir chargé | Scharfschütze – Aufgeladener Dreifachschuss | Tirador: Triple Disparo Cargado | Atirador de Elite — Tiro Triplo Carregado | Markman - Triple-Direction Charge | Divine Archer·Focus Tiga Arah | ui/textures/rouge_icon/rogue_icon_entry059
### Marksman - Crit CD Reduction (season-rogue-entry:261)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, direction.damage-taken-or-defense, effect.compound-components, target.elite-or-stronger
- Buff ids: 3053300
- Components: Crit [critical-stat; activation.active-modifier-window] / Cooldown / Resource [cooldown-or-resource; activation.active-modifier-window] / Damage Reduction / Defense [damage-reduction; activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry061
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Reduction | ui/textures/rouge_icon/rogue_icon_entry061
### Marksman - Demon Wolf Beast (season-rogue-entry:253)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053220
- Icon: ui/textures/rouge_icon/rogue_icon_entry053
- Text: Marksman - Demon Wolf Beast | 神射手·魔狼归兽 | 神射手·魔狼歸獸 | ディバインアーチャー・魔狼獣化 | 디바인 아처・늑대 마수 귀환 | Tireur d'élite - Bête loup démon | Scharfschütze – Dämonenwolf-Bestie | Tirador: Bestia Lobo Demonio | Atirador de Elite — Besta Lobo Demoníaco | Markman - Direwolf Regression | Divine Archer·Serigala Magis Kembali | ui/textures/rouge_icon/rogue_icon_entry053
### Marksman - Devastating Bombardment (season-rogue-entry:262)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, target.elite-or-stronger
- Buff ids: 3053310
- Components: Crit DMG [critical-damage-stat; activation.active-modifier-window] / Crit [critical-stat; activation.active-modifier-window] / Cooldown / Resource [cooldown-or-resource; activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry062
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman - Devastating Bombardment | 神射手·轰炸暴伤 | 神射手·轟炸暴傷 | ディバインアーチャー・爆撃増傷 | 디바인 아처・폭격 강타 | Tireur d'élite - Bombardement dévastateur | Scharfschütze – Verheerendes Bombardement | Tirador: Bombardeo Devastador | Atirador de Elite — Bombardeio Devastador | Markman - Bombardment: Crit DMG | Divine Archer·Ledakan Crit DMG | ui/textures/rouge_icon/rogue_icon_entry062
### Marksman - Eagle-Eyed Focus (season-rogue-entry:257)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053260
- Components: Crit DMG [critical-damage-stat; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry057
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Tertunda | ui/textures/rouge_icon/rogue_icon_entry057
### Marksman - Falcon's Gift (season-rogue-entry:255)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053240
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window] / Produced Damage [proc-damage; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry055
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/rogue_icon_entry055
### Marksman - Legendary Companion (season-rogue-entry:248)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053170
- Icon: ui/textures/rouge_icon/rogue_icon_entry048
- Text: Marksman - Legendary Companion | 神射手·传奇同临 | 神射手·傳奇同臨 | ディバインアーチャー・伝説同臨 | 디바인 아처・전설 동행 | Tireur d'élite - Compagnon légendaire | Scharfschütze – Legendärer Begleiter | Tirador: Acompañante Legendario | Atirador de Elite — Companheiro Lendário | Markman - Legendary Resonance | Divine Archer·Legendary Bersatu | ui/textures/rouge_icon/rogue_icon_entry048
### Marksman - Multiplying Arrow Rain (season-rogue-entry:251)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053200
- Components: ATK [offense-stat; source.companion-or-summon, activation.active-modifier-window] / Generic DMG [damage-modifier; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry051
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman - Multiplying Arrow Rain | 神射手·箭雨倍增 | ディバインアーチャー・アローレイン倍増 | 디바인 아처・화살비 배가 | Tireur d'élite - Pluie de flèches multiplicatrice | Scharfschütze – Multiplizierender Pfeilregen | Tirador: Lluvia de Flechas Multiplicadora | Atirador de Elite — Chuva de Flechas Multiplicadora | Markman - Arrow Rain Multiplier | Pemanah Ilahi · Peningkatan Jumlah Panah Hujan | ui/textures/rouge_icon/rogue_icon_entry051
### Marksman - Primal Power (season-rogue-entry:250)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053190
- Icon: ui/textures/rouge_icon/rogue_icon_entry050
- Text: Marksman - Primal Power | 神射手·兽攻强化 | 神射手·獸攻強化 | ディバインアーチャー・獣攻強化 | 디바인 아처・야수 공격 강화 | Tireur d'élite - Puissance primitive | Scharfschütze – Urkraft | Tirador: Poder Primigenio | Atirador de Elite — Poder Primal | Markman - Beast ATK Enhancement | Divine Archer·Penguatan Serangan Beast | ui/textures/rouge_icon/rogue_icon_entry050
### Marksman - Storm Tamer (season-rogue-entry:254)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053230
- Components: Crit DMG [critical-damage-stat; source.companion-or-summon, activation.active-modifier-window] / Crit [critical-stat; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry054
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman - Storm Tamer | 神射手·暴风驯兽 | 神射手·暴風馴獸 | ディバインアーチャー・暴風制獣 | 디바인 아처・폭풍 조련 | Tireur d'élite - Dompteur de tempête | Scharfschütze – Sturmbändiger | Tirador: Domador de Tormentas | Atirador de Elite — Domador de Tempestades | Markman - Tempest Taming | Divine Archer·Penjinak Storm | ui/textures/rouge_icon/rogue_icon_entry054
### Marksman - Tidal Fury (season-rogue-entry:252)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, effect.compound-components, target.elite-or-stronger
- Buff ids: 3053210
- Components: Crit DMG [critical-damage-stat; activation.active-modifier-window] / Crit [critical-stat; activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry052
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman - Tidal Fury | 神射手·怒涛必暴 | 神射手·怒濤必暴 | ディバインアーチャー・怒涛会心 | 디바인 아처・치명적 격류 | Tireur d'élite - Fureur des marées | Scharfschütze – Gezeitenwut | Tirador: Furia de Marea | Atirador de Elite — Fúria da Maré | Markman - Surge: Guaranteed Crit | Divine Archer·Badai Kemarahan | ui/textures/rouge_icon/rogue_icon_entry052
### Marksman - Twin Talon Strike (season-rogue-entry:258)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053270
- Icon: ui/textures/rouge_icon/rogue_icon_entry058
- Text: Marksman - Twin Talon Strike | 神射手·双鹰齐唤 | 神射手·雙鷹齊喚 | ディバインアーチャー・双鷹同召 | 디바인 아처・더블 팔콘 소환 | Tireur d'élite - Frappe de serres jumelles | Scharfschütze – Zwillingsklauenschlag | Tirador: Golpe de Garra Gemela | Atirador de Elite — Golpe de Garra Gêmea | Markman - Dual Falcon Summon | Divine Archer·Panggilan Dua Elang | ui/textures/rouge_icon/rogue_icon_entry058
### Marksman - Wolf's Focus (season-rogue-entry:249)
- Family: EffectSources
- Kind: season-rogue-entry / advanced-rogue-entry
- Tags: activation.active-modifier-window, source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053180
- Components: Cooldown / Resource [cooldown-or-resource; source.companion-or-summon, activation.active-modifier-window]
- Icon: ui/textures/rouge_icon/rogue_icon_entry049
- Text: Marksman - Wolf's Focus | 神射手·狼唤凝神 | 神射手·狼喚凝神 | ディバインアーチャー・召狼専心 | 디바인 아처・늑대 집중 소환 | Tireur d'élite - Concentration du loup | Scharfschütze – Wolfsfokus | Tirador: Enfoque de Lobo | Atirador de Elite – Concentração do Lobo | Markman - Wolf Call: Focus | Divine Archer·Wolf Summoning Focus | ui/textures/rouge_icon/rogue_icon_entry049
### Marksman Rhapsody X1 (phantom-factor:3053120)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: activation.active-modifier-window, direction.damage-dealt, scope.skill-or-recount-targeted, source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053120
- Components: Haste / Attack Speed [hit-timing; source.companion-or-summon, activation.active-modifier-window]
- Icon: kuangxiangyinzi_s2_11_001
- Target count: 1
- Text: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | kuangxiangyinzi_s2_11_001 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as descrip
### Marksman Rhapsody X2 (phantom-factor:3053130)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: activation.active-modifier-window, direction.damage-dealt, source.companion-or-summon, target.elite-or-stronger
- Buff ids: 3053130
- Components: Generic DMG [damage-modifier; source.companion-or-summon, activation.active-modifier-window]
- Icon: kuangxiangyinzi_s2_11_002
- Text: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | kuangxiangyinzi_s2_11_002 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as descrip
### Marksman Rhapsody X3 (phantom-factor:3053140)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: direction.damage-dealt, target.elite-or-stronger
- Buff ids: 3053140
- Icon: kuangxiangyinzi_s2_11_003
- Text: Marksman Rhapsody X3 | 神射狂想X3.G1 | ディバインアーチャー・狂想X3.G1 | 디바인 아처 광상X3 | Rhapsodie de Tireur d'élite X3 | Scharfschützen-Rhapsodie X3 | Rapsodia: Tirador X3 | Rapsódia do Atirador​ de Elite X3 | Markman Rhapsody X3 | Divine Rhapsody X3.G1 | kuangxiangyinzi_s2_11_003 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as descrip
### Marksman Rhapsody X4 (phantom-factor:3053150)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: direction.damage-dealt, scope.skill-or-recount-targeted, target.elite-or-stronger
- Buff ids: 3053150
- Icon: kuangxiangyinzi_s2_11_004
- Target count: 2
- Text: Marksman Rhapsody X4 | 神射狂想X4.G1 | ディバインアーチャー・狂想X4.G1 | 디바인 아처 광상X4 | Rhapsodie de Tireur d'élite X4 | Scharfschützen-Rhapsodie X4 | Rapsodia: Tirador X4 | Rapsódia do Atirador​ de Elite X4 | Markman Rhapsody X4 | Divine Rhapsody X4.G1 | kuangxiangyinzi_s2_11_004 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as descrip
### Marksman Stasis X1 (phantom-factor:3059160)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: activation.active-modifier-window, direction.damage-dealt, target.elite-or-stronger
- Buff ids: 3059160
- Components: Damage Reduction / Defense [damage-reduction; activation.active-modifier-window]
- Icon: yinzi_s2_common_027
- Text: Marksman Stasis X1 | 神射稳态X1 | 神射穩態X1 | ディバインアーチャー・恒常性X1 | 디바인 아처 안정X1 | Stase de Tireur d'élite X1 | Scharfschütze-Stase X1 | Estasis: Tirador X1 | Estase do Atirador​ de Elite X1 | Marksman Steady X1 | Divine Steady X1 | yinzi_s2_common_027 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, 
### Marksman Stasis X2 (phantom-factor:3059170)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: activation.active-modifier-window, direction.damage-dealt, effect.compound-components, target.elite-or-stronger
- Buff ids: 3059170
- Components: Cooldown / Resource [cooldown-or-resource; activation.active-modifier-window] / Damage Reduction / Defense [damage-reduction; activation.active-modifier-window]
- Icon: yinzi_s2_common_028
- Notes: This source has split effect components; parser attribution should apply predicates per component, not to the whole source row.
- Text: Marksman Stasis X2 | 神射稳态X2 | 神射穩態X2 | ディバインアーチャー・恒常性X2 | 디바인 아처 안정X2 | Stase de Tireur d'élite X2 | Scharfschütze-Stase X2 | Estasis: Tirador X2 | Estase do Atirador​ de Elite X2 | Marksman Steady X2 | Divine Steady X2 | yinzi_s2_common_028 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, 
### Marksman X1 (phantom-factor:3053010)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: direction.damage-dealt, scope.skill-or-recount-targeted, target.elite-or-stronger
- Buff ids: 3053010
- Icon: yinzi_s2_11_001
- Target count: 1
- Text: Marksman X1 | 神射X1 | ディバインアーチャーX1 | 디바인 아처X1 | Tireur d'élite X1 | Scharfschütze X1 | Tirador X1 | Atirador de Elite X1 | Divine X1 | yinzi_s2_11_001 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman X10 (phantom-factor:3053100)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: direction.damage-dealt, scope.skill-or-recount-targeted, target.elite-or-stronger
- Buff ids: 3053100
- Icon: yinzi_s2_11_010
- Target count: 3
- Text: Marksman X10 | 神射X10 | ディバインアーチャーX10 | 디바인 아처X10 | Tireur d'élite X10 | Scharfschütze X10 | Tirador X10 | Atirador de Elite X10 | Divine X10 | yinzi_s2_11_010 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman X11 (phantom-factor:3053110)
- Family: EffectSources
- Kind: phantom-factor / season-phantom-factor
- Tags: direction.damage-dealt, scope.skill-or-recount-targeted, target.elite-or-stronger
- Buff ids: 3053110
- Icon: yinzi_s2_11_011
- Target count: 3
- Text: Marksman X11 | 神射X11 | ディバインアーチャーX11 | 디바인 아처X11 | Tireur d'élite X11 | Scharfschütze X11 | Tirador X11 | Atirador de Elite X11 | Divine X11 | 神射G11 | yinzi_s2_11_011 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence. | DamageAttr row links directly to BuffName.

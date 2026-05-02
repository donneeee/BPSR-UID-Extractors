# Effect Predicate Audit

This report flags generated effect sources that likely need extra runtime predicates before modifier attribution can be trusted.

## Summary

- Records flagged: 2353
- Interesting records: 1263

### Tag Counts

- activation.focus-state: 14
- attacker.elite-or-stronger: 10
- direction.damage-dealt: 402
- direction.damage-taken-or-defense: 212
- effect.compound-components: 30
- needs.description-extraction: 1106
- needs.module-description-extraction: 16
- scope.global: 120
- scope.skill-or-recount-targeted: 925
- source.companion-or-summon: 62
- target.boss-or-elite-suspect: 24
- target.elite-or-stronger: 93
- window.stack-state: 21
- window.timed: 54

### Family Counts

- ConsumableBuffBridge: 26
- EffectSources: 1613
- ModuleBuffCatalog: 16
- SeasonPhantomFactors: 134
- TalentEffectModelProbe: 564

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
### Absolute Center Stage (talent:1348)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207490
- Icon: ui/atlas/talent_passive_13/gita1348
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Absolute Center Stage | 绝顶万众瞩目 | 絕頂萬眾矚目 | 絶頂スポットライト | 절정의 어텐션 | Scène Centrale Absolue | Absolute Hauptbühne | Escenario Central Absoluto | Palco Central Absoluto | Center Stage Extreme | Supreme Spotlight | ui/atlas/talent_passive_13/gita1348
### Absolute Center Stage (talent:1366)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207490
- Icon: ui/atlas/talent_passive_13/gita1366
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Absolute Center Stage | 绝顶万众瞩目 | 絕頂萬眾矚目 | 絶頂スポットライト | 절정의 어텐션 | Scène Centrale Absolue | Absolute Hauptbühne | Escenario Central Absoluto | Palco Central Absoluto | Center Stage Extreme | Supreme Spotlight | ui/atlas/talent_passive_13/gita1366
### Advancement (talent:154)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2200560
- Icon: ui/atlas/talent_passive_1/taidao154
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Advancement | 精进 | 精進 | 改良 | 정진 | Progression | Fortschritt | Avance | Avanço | ปรับปรุง | Mastery | ui/atlas/talent_passive_1/taidao154
### Adversity Enhancement (talent:1251)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2206520
- Icon: ui/atlas/talent_passive_12/jiandun1251
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Adversity Enhancement | 逆境强化 | 逆境強化 | 역경 강화 | Renforcement par l'adversité | Notlagenverbesserung | Mejora por Adversidad | Melhoria da Adversidade | เพิ่มพลังต้านทาน | Adversity Boost | ui/atlas/talent_passive_12/jiandun1251
### Aegis Ward's Anthem (talent:1213)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 55405, 2206140
- Icon: ui/atlas/talent_passive_12/jiandun1213
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Aegis Ward's Anthem | 圣光守卫赞歌 | 聖光守衛讚歌 | 聖光守護の賛歌 | 빛의 보호의 찬가 | Hymne de la Protection d'égide | Hymne des Ägis-Wächters | Himno de Protección de Égida | Hino da Proteção de Égide | Hymn of the Lightguard | Hymn of Holylight Guard | ui/atlas/talent_passive_12/jiandun1213 | Activation aliases map a talent/passive source row to the runtime buff window that enables it. They only expose uptime; they do not imply a damage f
### Aegis Ward's Retribution (talent:1215)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 55405, 2206160
- Icon: ui/atlas/talent_passive_12/jiandun1215
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Aegis Ward's Retribution | 圣光守卫惩戒 | 聖光守衛懲戒 | 聖光懲戒 | 빛의 보호의 징벌 | Châtiment de la Protection d'égide | Vergeltung des Ägis-Wächters | Retribución de Protección de Égida | Retribuição da Proteção de Égide | Lightguard Retribution | Holylight Guard Retribution | ui/atlas/talent_passive_12/jiandun1215 | Activation aliases map a talent/passive source row to the runtime buff window that enables it. They only expose uptime; 
### Agility (talent:3)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_attrdexterity
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Agility | 敏捷 | 민첩 | Agilité | Agilität | Agilidad | Agilidade | Agi | AGI | ui/atlas/weaponhero/new/common_attrdexterity
### Air Dance Strike (talent:419)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2205180
- Icon: ui/atlas/talent_passive_4/talent_passive_icon_general_dps_flycriluck
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Air Dance Strike | 空舞重击 | 空舞重擊 | 空舞重撃 | 하늘춤 강타 | Frappe de danse aérienne | Lufttanzschlag | Golpe Danzante Aéreo | Golpe da Dança Aérea | Aerial Bash | ui/atlas/talent_passive_4/talent_passive_icon_general_dps_flycriluck
### Amplified Earthfort (talent:944)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-taken-or-defense, needs.description-extraction
- Buff ids: 2201460, 2201461
- Icon: ui/atlas/talent_passive_9/weiren944
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Amplified Earthfort | 岩盾倍增 | 剛身強化 | 암석 방패 강화 | Forteresse terrestre amplifiée | Verstärkte Erdfestung | Escudo Rocoso Amplificado | Baluarte Terreno Amplificado | Rock Shield Multiplier | ui/atlas/talent_passive_9/weiren944 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Arcane (talent:152)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2200540
- Icon: ui/atlas/talent_passive_1/taidao152
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Arcane | 暴裂 | 爆裂 | 폭렬 | Bersten | Estallido | Arcano | ระเบิด | Explosive Slash | ui/atlas/talent_passive_1/taidao152
### Arcane Ascension (talent:1304)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207050
- Icon: ui/atlas/talent_passive_13/gita1304
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Arcane Ascension | 魔力升华 | 魔力昇華 | 마력 승화 | Ascension arcanique | Arkaner Aufstieg | Ascensión Arcana | Ascensão Arcana | พลังเวทระเหิด | Magic Ascension | ui/atlas/talent_passive_13/gita1304
### Arcane of Green (talent:506)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2202080, 2202081
- Icon: ui/atlas/talent_passive_5/talent_passive_icon_general_sup_grassdammastery
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Arcane of Green | 绿意之爆发 | 綠意之爆發 | 緑の爆発 | 녹음의 향연 | Arcane du Vert | Arkana von Green | Arcano Verde | Burst of Green | Greenwill Burst | ui/atlas/talent_passive_5/talent_passive_icon_general_sup_grassdammastery | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Arcane! Blazing Axe (buff-source:3210051)
- Family: EffectSources
- Kind: imagine / imagine
- Tags: scope.skill-or-recount-targeted, target.elite-or-stronger
- Buff ids: 3210051
- Icon: ui/textures/skill_aoyi/skill_aoyi_skill_icon_018
- Target count: 2
- Text: Arcane! Blazing Axe | 山贼首领 - 被动 - 子buff dot | 奥义！炽炎战斧 | 奧義！熾炎戰斧 | 奥義！炎のバトルアクス | 오의! 작열의 전투도끼 | Arcane ! Hache ardente | Arkana! Lodernde Axt | ¡Arcano! Hacha Ardiente | Arcano! Machado Flamejante | ui/textures/skill_aoyi/skill_aoyi_skill_icon_018 | Parent or linked row is an Arcane/Imagine entry.
### Arrow Barrage (talent:1127)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2203270
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_threetargetarrow
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Arrow Barrage | 连珠箭雨 | 連珠箭雨 | 矢の雨 | 쏟아지는 화살비 | Barrage de Flèches | Pfeilhagel | Descarga de Flechas | Saraivada de Flechas | Rapid Fire Arrow | Rapid Arrow Rain | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_threetargetarrow
### Arrow of Light (talent:1148)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2203480
- Icon: ui/atlas/talent_passive_11/gongjian1148
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Arrow of Light | 追光之箭 | 閃光矢 | 빛을 쫓는 화살 | Flèche de lumière | Pfeil des Lichts | Flecha de Luz | ศรแสงไล่ล่า | Pursuit Light Arrow | ui/atlas/talent_passive_11/gongjian1148
### Arrow Rain Acceleration (talent:1138)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2203380
- Icon: ui/atlas/talent_passive_11/gongjian1138
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Arrow Rain Acceleration | 箭雨加速 | 矢雨加速 | 화살비 가속 | Accélération de Pluie de flèches | Pfeilregen-Beschleunigung | Aceleración de Lluvia de Flechas | Aceleração da Chuva de Flechas | ฝนศรเร่งรัว | ui/atlas/talent_passive_11/gongjian1138
### Ascension of the Lightforged Barrier (talent:1220)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2206210
- Icon: ui/atlas/talent_passive_12/jiandun1220
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Ascension of the Lightforged Barrier | 光铸屏障的升华 | 光鑄屏障的昇華 | 光盾障壁強化 | 라이트포지드 배리어의 승화 | Ascension de la Barrière forgelumière | Aufstieg der Lichtgeschmiedeten Barriere | Ascensión de la Barrera Lumiforjada | Ascensão da Barreira Forjada em Luz | การยกระดับของ Lightforged Barrier | Lightforged Barrier Ascension | ui/atlas/talent_passive_12/jiandun1220
### Attack Speed (talent:41)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-dealt, needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon13
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Attack Speed | 攻击速度 | 攻擊速度 | 攻撃速度 | 공격 속도 | Vitesse d'attaque | Angriffsgeschwindigkeit | VEL de ATQ | Velocidade de Ataque | ความเร็วโจมตี | ui/atlas/weaponhero/new/common_icon13
### Battle Howl (talent:1105)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2203060
- Icon: ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfroar
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Battle Howl | 战吼之法 | 戰吼之法 | 咆哮法 | 울부짖는 법 | Chant de guerre | Kampfgeheul | Aullido de Batalla | Uivo de Batalha | Battle Cry Method | Battle Cry Technique | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfroar
### Beast Power (talent:1133)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, source.companion-or-summon
- Buff ids: 2203330
- Icon: ui/atlas/talent_passive_11/gongjian1133
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Beast Power | 野兽之力 | 野獸之力 | 臣獣の力 | 야수의 힘 | Puissance de la bête | Macht der Bestie | Poder de Bestia | Poder da Fera | พลังของสัตว์ | ui/atlas/talent_passive_11/gongjian1133
### Beast Tidal Power (talent:1137)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, source.companion-or-summon
- Buff ids: 2203370, 2203371
- Icon: ui/atlas/talent_passive_11/gongjian1137
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Beast Tidal Power | 野兽怒涛之力 | 野獸怒濤之力 | 怒涛の臣獣 | 야수 분노의 힘 | Puissance bestiale des marées | Gezeitenmacht der Bestie | Poder de Marea Bestial | Poder da Maré Bestial | พลังคลื่นแห่งความโกรธของสัตว์ | Beast Rage Power | ui/atlas/talent_passive_11/gongjian1137 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Bird Advancement (talent:455)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2205530
- Icon: ui/atlas/talent_passive_4/changqiang455
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Bird Advancement | 飞鸟精进 | 飛鳥精進 | 飛鳥投［強化］ | 팔콘 토스 정진 | Progression aviaire | Vogelfortschritt | Avance del Halcón | Avanço do Pássaro | การปรับปรุงการโยน | Bird Mastery | ui/atlas/talent_passive_4/changqiang455
### Bitter Cold (talent:251)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204480
- Icon: ui/atlas/talent_passive_2/mozhang251
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Bitter Cold | 凛冽 | 凜冽 | 凛烈 | 날카로운 추위 | Froid Mordant | Bittere Kälte | Frío Penetrante | Frio Intenso | ความหนาวเย็น | Piercing Cold | ui/atlas/talent_passive_2/mozhang251
### Blade Intent (talent:100)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-taken-or-defense, needs.description-extraction
- Buff ids: 2200020, 3210151
- Icon: ui/atlas/talent_passive_1/talent_passive_icon_general_tank_shieldbash
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Blade Intent | 刀意 | 도의 | Intention de la lame | Klingenwille | Voluntad del Filo | Intenção da Lâmina | Bladewill | ui/atlas/talent_passive_1/talent_passive_icon_general_tank_shieldbash | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Blade Intent - Rare (talent:160)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2200620
- Icon: ui/atlas/talent_passive_1/taidao160
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Blade Intent - Rare | 刀意·极 | 刀意·極 | 刀意・極 | 도의・극 | Intention de la lame - Rare | Klingenwille – Selten | Voluntad del Filo: Superior | Intenção da Lâmina – Raro | Blade Intent - สุดยอด | Bladewill - Ultimate | ui/atlas/talent_passive_1/taidao160
### Blade Intent Recovery (talent:156)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2200580
- Icon: ui/atlas/talent_passive_1/taidao156
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Blade Intent Recovery | 刀意回复 | 刀意回復 | 도의 회복 | Récupération d'Intention de la lame | Klingenwille-Erholung | Recuperación de Voluntad del Filo | Recuperação de Intenção da Lâmina | การฟื้นฟู Blade Intent | Bladewill Recovery | ui/atlas/talent_passive_1/taidao156
### Blade Intent Thunderstrike (talent:149)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2200510
- Icon: ui/atlas/talent_passive_1/taidao149
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Blade Intent Thunderstrike | 刀意雷击 | 刀意雷擊 | 刀意雷撃 | 도의 뇌격 | Frappe-foudre de l'Intention de la lame | Klingenwille-Donnerschlag | Voluntad del Filo: Golpe del Trueno | Golpe do Trovão da Intenção da Lâmina | ใบมีดเจตจำนงฟ้าผ่า | Bladewill Thunderstrike | ui/atlas/talent_passive_1/taidao149
### Bladewind Domain (talent:113)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, scope.skill-or-recount-targeted
- Buff ids: 2200150, 2200151
- Icon: ui/atlas/talent_passive_1/talent_skill_360105
- Target count: 5
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Bladewind Domain | 刃风界域 | 刃風界域 | 刃域 | 검풍 영역 | Domaine du vent des lames | Klingenwinddomäne | Área de viento cortante | Domínio do Vento Cortante | ui/atlas/talent_passive_1/talent_skill_360105 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Blazing Heal (talent:1314)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, scope.skill-or-recount-targeted
- Buff ids: 2207150
- Icon: ui/atlas/talent_passive_13/gita1314
- Target count: 2
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Blazing Heal | 炽焰治愈 | 熾焰治癒 | 熱き治療 | 작염 치유 | Guérison ardente | Lodernde Heilung | Curación Ardiente | Cura Flamejante | ui/atlas/talent_passive_13/gita1314
### Blessing of Holy Sigil (talent:1202)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2206030, 2206031
- Icon: ui/atlas/talent_passive_12/jiandun1202
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Blessing of Holy Sigil | 圣令的恩惠 | 聖令的恩惠 | 光力の恩惠 | 칙령의 은혜 | Bénédiction du Sceau sacré | Segen des Heiligen Siegels | Bendición del Sello Sagrado | Bênção do Símbolo Sagrado | Blessing of the Holy Order | Holy Decree Blessing | ui/atlas/talent_passive_12/jiandun1202 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Blizzard Dual Lances (talent:217)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204160
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_icepearextra
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Blizzard Dual Lances | 冰暴双矛 | 冰暴雙矛 | 氷槍追加 | 더블 스피어 | Doubles lances du blizzard | Schneesturm-Doppellanzen | Lanzas Dobles de Ventisca | Lanças Duplas da Nevasca | Ice Storm Dual Spears | Icestorm Dual Spear | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_icepearextra
### Block Blessing (talent:935)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-taken-or-defense, needs.description-extraction
- Buff ids: 2201370
- Icon: ui/atlas/talent_passive_9/talent_passive_icon_general_tank_blockbless
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Block Blessing | 格挡祝福 | 格擋祝福 | レジスト祝福 | 막기 축복 | Bénédiction de blocage | Segen des Blocks | Bendición de Bloqueo | Bênção do Bloqueio | ui/atlas/talent_passive_9/talent_passive_icon_general_tank_blockbless
### Block DMG Reduction (talent:49)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-taken-or-defense, needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon04
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Block DMG Reduction | 格挡减伤 | 格擋減傷 | レジストダメージ軽減 | 막기 대미지 감소 | Réduction de dégâts de blocage | Block-SCH-Reduktion | Reducción de DÑO de bloqueo | Redução de Dano por Bloqueio | ลด DMG บล็อก | Block DR | ui/atlas/weaponhero/new/common_icon04
### Block Recovery (talent:906)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-taken-or-defense, needs.description-extraction, scope.skill-or-recount-targeted
- Buff ids: 2201080
- Icon: ui/atlas/talent_passive_9/talent_passive_icon_general_sup_starfield
- Target count: 2
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Block Recovery | 格挡回复 | 格擋回復 | レジスト回復 | 막기 회복 | Récupération après blocage | Block-Erholung | Recuperación por Bloqueo | Recuperação de Bloqueio | ui/atlas/talent_passive_9/talent_passive_icon_general_sup_starfield
### Block Shelter (talent:957)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-taken-or-defense, needs.description-extraction
- Buff ids: 2201590, 2201591
- Icon: ui/atlas/talent_passive_9/weiren957
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Block Shelter | 格挡庇护 | 格擋庇護 | レジストの庇護 | 막기 가호 | Abri du blocage | Blockschutz | Refugio de Bloqueo | Abrigo de Bloqueio | การปกป้อง Block | Block Protection | ui/atlas/talent_passive_9/weiren957 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Blooming Reincarnation (talent:561)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2202650, 2202651
- Icon: ui/atlas/talent_passive_5/fahuan561
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Blooming Reincarnation | 绽放轮回 | 綻放輪回 | 開花循環 | 만개의 윤회 | Réincarnation florissante | Blühende Reinkarnation | Reencarnación Floreciente | Reencarnação Florescente | วงจรการผลิบาน | Bloom Reincarnation | ui/atlas/talent_passive_5/fahuan561 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Bold Fearless (talent:1253)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2206540, 2206542
- Icon: ui/atlas/talent_passive_12/jiandun1253
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Bold Fearless | 悍勇无畏 | 悍勇無畏 | 剛勇無畏 | 용감무쌍 | Courage intrépide | Kühne Furchtlosigkeit | Intrepidez Absoluta | Bravura Destemida | Brave and Fearless | Fearless Valor | ui/atlas/talent_passive_12/jiandun1253 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Boulder Shield (talent:945)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-taken-or-defense, needs.description-extraction
- Buff ids: 2201470
- Icon: ui/atlas/talent_passive_9/weiren945
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Boulder Shield | 巨石护体 | 巨石護體 | 巨岩の加護 | 거석의 가호 | Bouclier de roc | Felsbrockenschild | Escudo de Peñasco | Escudo de Pedregulho | การป้องกันของหินใหญ่ | Giant Stone Guard | ui/atlas/talent_passive_9/weiren945
### Boundless Frost (talent:225)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, source.companion-or-summon
- Buff ids: 2204230
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceskyhit
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Boundless Frost | 玄冰无界 | 玄冰無界 | 玄氷無界 | 무한 미스틱 아이스 | Givre Infini | Grenzenloser Frost | Escarcha Ilimitada | Cristal de Gelo Ilimitado | Boundless Black Ice | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceskyhit
### Bravery in Battle (talent:954)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2201560
- Icon: ui/atlas/talent_passive_9/weiren954
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Bravery in Battle | 愈战愈勇 | 愈戰愈勇 | 勇猛果敢 | 재생하는 투지 | Bravoure au combat | Kampfesmut | Valentía en Combate | Bravura em Batalha | สู้ยิ่งขึ้น | Growing Valor | ui/atlas/talent_passive_9/weiren954
### Break Pursuit Advancement (talent:439)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2205370, 2205371
- Icon: ui/atlas/talent_passive_4/changqiang439
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Break Pursuit Advancement | 破追精进 | 破追精進 | 破追［強化］ | 체이싱 정진 | Progression de Poursuite brisante | Durchbruch-Verfolgung-Aufstieg | Avance de Persecución de Ruptura | Aprimoramento de Perseguição Invasiva | การปรับปรุงการไล่ล่า | Chase Break Mastery | ui/atlas/talent_passive_4/changqiang439 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Break Slash (talent:151)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2200530
- Icon: ui/atlas/talent_passive_1/taidao151
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Break Slash | 破斩 | 破斬 | 파참 | Taillade Brisegarde | Bruchhieb | Corte Rompedor | Corte de Ruptura | ผ่าฟัน | Breaking Slash | ui/atlas/talent_passive_1/taidao151
### Break Style (talent:468)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2205660
- Icon: ui/atlas/talent_passive_4/changqiang468
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Break Style | 破式 | 파식 | Style Brisegarde | Stilbruch | Estilo de Ruptura | Estilo da Ruptura | การทำลาย | Breaking Form | ui/atlas/talent_passive_4/changqiang468
### Breath of Buds (talent:504)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2202060
- Icon: ui/atlas/talent_passive_5/talent_passive_icon_dps_luckyconversion
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Breath of Buds | 蓓蕾之息 | 蕾の息吹 | 꽃망울의 기운 | Souffle des Bourgeons | Atem der Knospen | Aliento de Brotes | Sopro dos Brotos | Breath of the Bud | Bud's Breath | ui/atlas/talent_passive_5/talent_passive_icon_dps_luckyconversion
### Breath of Frost (talent:204)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204050
- Icon: ui/atlas/talent_passive_2/mozhang262
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Breath of Frost | 玄冰之息 | 氷の吐息 | 신비한 기운 | Souffle de givre | Atem des Frostkristalls | Aliento Gélido | Sopro Gélido | ลมหายใจน้ำแข็งทมิฬ | Black Ice Breath | ui/atlas/talent_passive_2/mozhang262
### Breath of Mark (talent:115)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2200170
- Icon: ui/atlas/talent_passive_1/talent_passive_icon_general_dps_thunderrepro
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Breath of Mark | 印记之息 | 印記之息 | 刻印回復 | 인장의 숨결 | Souffle de la marque | Atem des Mals | Aliento de la Marca | Sopro da Marca | ลมหายใจแห่งเครื่องหมาย | Mark's Breath | ui/atlas/talent_passive_1/talent_passive_icon_general_dps_thunderrepro
### Breath of Stone (talent:920)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2201210
- Icon: ui/atlas/talent_passive_9/talent_passive_icon_general_tank_victoryrush
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Breath of Stone | 巨岩之息 | 巨岩の息吹 | 거암의 숨결 | Souffle de pierre | Atem des Steins | Aliento de Piedra | Sopro de Pedra | Breath of the Rock | Giant Rock Breath | ui/atlas/talent_passive_9/talent_passive_icon_general_tank_victoryrush
### Breath of Symbiosis (talent:550)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2202540
- Icon: ui/atlas/talent_passive_5/fahuan550
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Breath of Symbiosis | 共生之息 | 共生の息吹 | 공생의 기운 | Souffle de symbiose | Atem der Symbiose | Aliento de Simbiosis | Sopro da Simbiose | ลมหายใจของการร่วมอยู่ | Symbiotic Breath | ui/atlas/talent_passive_5/fahuan550
### Breath of Wind (talent:449)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2205470
- Icon: ui/atlas/talent_passive_4/changqiang449
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Breath of Wind | 风元素之息 | 風元素之息 | 바람 원소의 기운 | Souffle du vent | Atem des Windes | Aliento del Viento | Sopro do Vento | ลมหายใจของธาตุลม | Wind Element Breath | ui/atlas/talent_passive_4/changqiang449
### Brilliant Charge (talent:1318)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207190
- Icon: ui/atlas/talent_passive_13/gita1318
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Brilliant Charge | 华彩章节充能 | 華彩章節充能 | 華章充填 | 화려한 악장 충전 | Charge éclatante | Brillante Aufladung | Carga Brillante | Carga Reluzente | ชาร์จบทที่มีสีสัน | Brilliant Chapter Charge | ui/atlas/talent_passive_13/gita1318
### Brimming Vitality (talent:500)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2202020
- Icon: ui/atlas/talent_passive_5/talent_passive_icon_general_sup_grassenergyup
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Brimming Vitality | 活力充盈 | 活力充実 | 넘치는 활력 | Vitalité débordante | Strotzende Vitalität | Vitalidad Rebosante | Vitalidade Plena | Vitality Overflow | Vitality Surge | ui/atlas/talent_passive_5/talent_passive_icon_general_sup_grassenergyup
### Bud Acquisition (talent:528)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2202300
- Icon: ui/atlas/talent_passive_5/talent_passive_icon_general_sup_killgrassenergy
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Bud Acquisition | 蓓蕾获取 | 蓓蕾獲取 | 蕾の芽吹き | 꽃망울 획득 | Acquisition de bourgeons | Knospenerwerb | Adquisición de Brotes | Aquisição de Botões | ui/atlas/talent_passive_5/talent_passive_icon_general_sup_killgrassenergy
### Bud to Blossom (talent:567)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2202710
- Icon: ui/atlas/talent_passive_5/fahuan567
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Bud to Blossom | 蓓蕾生花 | 蕾の開花 | 피어나는 꽃망울 | Du bourgeon à la fleur | Von der Knospe zur Blüte | De Capullo a Flor | De Broto a Flor | การเกิดของดอกกุหลาบ | Bud Bloom | ui/atlas/talent_passive_5/fahuan567
### Captain's Summon (season-rogue-entry:189)
- Family: EffectSources
- Kind: season-rogue-entry / generic-rogue-entry
- Tags: source.companion-or-summon
- Buff ids: 997484
- Icon: ui/textures/rouge_icon/rogue_icon_entry103
- Text: Captain's Summon | 兵长召唤 | 兵長召喚 | ウォーリアー召喚 | 병장 소환 | Invocation du Capitaine | Beschwörung des Hauptmanns | Invocación del capitán | Invocação do Capitão | อัญเชิญหัวหน้าหน่วย | Commander Summon | ui/textures/rouge_icon/rogue_icon_entry103
### Casting SPD (talent:42)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon13
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Casting SPD | 施法速度 | 発動速度 | 스킬 시전 속도 | Vitesse d'incantation | Zauber-GES | VEL de lanzamiento | VEL de Conjuração | ความเร็วร่ายสกิล | Cast Speed | ui/atlas/weaponhero/new/common_icon13
### Catcher (talent:427)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2205240, 2205241
- Icon: ui/atlas/talent_passive_4/talent_passive_icon_tank_bk01
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Catcher | 捕手 | 怒涛 | 포획자 | Attrapeur | Fänger | Neutralizador | Apanhador | ui/atlas/talent_passive_4/talent_passive_icon_tank_bk01 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Celestial Eagle (talent:1160)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, scope.skill-or-recount-targeted
- Buff ids: 2203600
- Icon: ui/atlas/talent_passive_11/gongjian1160
- Target count: 3
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Celestial Eagle | 天界雄鹰 | 天界雄鷹 | 天界の臣鷹 | 천공의 매 | Aigle céleste | Himmlischer Adler | Águila celestial | Águia Celestial | ui/atlas/talent_passive_11/gongjian1160
### Center Stage: Concerto (talent:1365)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207660
- Icon: ui/atlas/talent_passive_13/gita1365
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Center Stage: Concerto | 极意万众瞩目·协奏 | 極意萬眾矚目·協奏 | 響奏極意 | 극의의 어텐션・협주 | Scène centrale : Concerto | Hauptbühne: Konzert | Escenario Central: Concierto | Palco Central: Concerto | Center Stage ความหมายสูงสุด -คอนแชร์โต้ | Ultimate Spotlight - Concerto | ui/atlas/talent_passive_13/gita1365
### Center Stage: Mad Tune (talent:1349)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207500
- Icon: ui/atlas/talent_passive_13/gita1349
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Center Stage: Mad Tune | 极意万众瞩目·狂音 | 極意萬眾矚目·狂音 | 狂音極意 | 극의의 어텐션・음파 | Scène centrale : Mélodie frénétique | Hauptbühne: Verrückte Melodie | Escenario Central: Melodía Demente | Palco Central: Melodia Insana | สุดยอด Center Stage-เสียงคลั่ง | Ultimate Spotlight - Frenzy | ui/atlas/talent_passive_13/gita1349
### Chain Explosion (talent:1167)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2203670
- Icon: ui/atlas/talent_passive_11/gongjian1167
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Chain Explosion | 连环爆炸 | 連環爆炸 | 連環爆発 | 연쇄 폭발 | Explosion en chaîne | Kettenexplosion | Explosión en Cadena | Explosão em Cadeia | ระเบิดลูกโซ่ | ui/atlas/talent_passive_11/gongjian1167
### Chaos Breaker (talent:162)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, scope.skill-or-recount-targeted
- Buff ids: 2200640, 2200641
- Icon: ui/atlas/talent_passive_1/taidao162
- Target count: 3
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Chaos Breaker | 缭乱兜割 | 繚亂兜割 | 繚乱兜割 | 흩날리는 칼날 | ​Briseur du chaos​ | Chaosbrecher | Rompecaos | Destruidor do Caos | Whirling Slash | ui/atlas/talent_passive_1/taidao162 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Charge Catcher (talent:164)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: activation.focus-state, needs.description-extraction
- Buff ids: 2200660
- Icon: ui/atlas/talent_passive_1/taidao164
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Charge Catcher | 电荷捕手 | 電荷捕手 | 集中電禍 | 전하 포획자 | Capteur de charge | Ladungsfänger | Captor de Cargas | Coletor de Carga | จับประจุ | ui/atlas/talent_passive_1/taidao164
### Chasing Step (talent:422)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2205210, 2205211
- Icon: ui/atlas/talent_passive_4/talent_passive_icon_general_dps_ruthless
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Chasing Step | 追击身法 | 追擊身法 | 追撃身法 | 추격 신법 | Pas de poursuite | Verfolgungsschritt | Paso Persecutor | Postura de Caça | Pursuit Technique | Pursuit Maneuver | ui/atlas/talent_passive_4/talent_passive_icon_general_dps_ruthless | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Cold Intent - Flow (talent:238)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204350
- Icon: ui/atlas/talent_passive_2/mozhang238
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Cold Intent - Flow | 寒意·流 | 冷気流 | 서늘한 기운・흐름 | Dessein glacial - Flux | Eisiger Wille – Fluss | Voluntad Gélida: Flujo | Intenção Gélida – Fluxo | ความหนาว - ไหล | Chill - Flow | ui/atlas/talent_passive_2/mozhang238
### Cold Intent - Sharp (talent:200)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204010
- Icon: ui/atlas/talent_passive_2/mozhang238
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Cold Intent - Sharp | 寒意·锐 | 寒意·銳 | 鋭い冷気 | 서늘한 기운・날카로움 | Dessein glacial - Tranchant | Kalte Absicht – Scharf | Intención Gélida: Afilado | Intenção Gélida – Afiação | ความเย็นชา - แหลมคม | Chill - Edge | ui/atlas/talent_passive_2/mozhang238
### Cold Pulse (talent:235)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, scope.skill-or-recount-targeted
- Buff ids: 2204320
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_icepulse
- Target count: 2
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Cold Pulse | 冰冷脉冲 | 冰冷脈衝 | 氷冷波動 | 콜드 펄스 | Impulsion froide | Kälteimpuls | Pulso Gélido | Pulso Frio | Chill Pulse | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_icepulse
### Cold Retention (talent:256)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204530
- Icon: ui/atlas/talent_passive_2/mozhang256
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Cold Retention | 寒意留存 | 冷気温存 | 냉기 여운 | Rétention du Froid | Anhaltende Kälte | Frío Persistente | Retenção de Frio | ความเย็นที่ยังคงอยู่ | Chill Persistence | ui/atlas/talent_passive_2/mozhang256
### Cold Stream (talent:230)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204280
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergy02
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Cold Stream | 寒流 | 차가운 흐름 | Courant Froid | Kaltstrom | Corriente Fría | Corrente Fria | Cold Current | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergy02
### Cold Wind Convergence (talent:211)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204110, 2204111
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergyget
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Cold Wind Convergence | 寒风凝聚 | 寒風凝聚 | 寒風の集約 | 냉기 응집 | Convergence des vents froids | Kaltwindkonvergenz | Convergencia de Viento Gélido | Convergência do Vento Gélido | Chilling Wind | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergyget | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Combat Expertise (talent:424)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2205220, 2205221
- Icon: ui/atlas/talent_passive_4/talent_passive_icon_sup_melee02
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Combat Expertise | 战斗专长 | 戰鬥專長 | 戦闘熟練 | 전투 특화 | Expertise du combat | Kampfexpertise | Pericia de Combate | Perícia de Combate | ui/atlas/talent_passive_4/talent_passive_icon_sup_melee02 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Concerto (talent:1315)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207160
- Icon: ui/atlas/talent_passive_13/gita1315
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Concerto | 协奏 | 協奏 | 響奏 | 협주 | Konzert | Concierto | คอนแชร์โต้ | ui/atlas/talent_passive_13/gita1315
### Concerto Spec (talent:1317)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207180
- Icon: ui/atlas/talent_passive_13/gita1317
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Concerto Spec | 协奏流 | 協奏流 | 響奏型 | 협주 계열 | Spécialisation Concerto | Konzert-Spezialisierung | Especialización de Concierto | Especialização: Concerto | คลื่นบรรเลง | Ensemble | ui/atlas/talent_passive_13/gita1317
### Condemn (talent:1201)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, scope.skill-or-recount-targeted
- Buff ids: 2206020
- Icon: ui/atlas/talent_passive_12/jiandun1201
- Target count: 2
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Condemn | 断罪 | 斷罪 | パニッシュメント | 단죄 | Condamnation | Verurteilung | Condena | Condenação | ui/atlas/talent_passive_12/jiandun1201
### Condemn Time Limit (talent:1234)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction, window.timed
- Buff ids: 2206020, 2206350
- Icon: ui/atlas/talent_passive_12/jiandun1234
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Condemn Time Limit | 断罪时效 | 斷罪時效 | 断罪時限 | 단죄 시효 | Délai de Condamnation | Zeitlimit der Verurteilung | Tiempo Límite de Condena | Limite de Tempo da Condenação | ตัดบาปทันที | Condemn Duration | ui/atlas/talent_passive_12/jiandun1234 | Activation aliases map a talent/passive source row to the runtime buff window that enables it. They only expose uptime; they do not imply a damage formula.
### Conquest Pursuit (talent:1255)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2206560
- Icon: ui/atlas/talent_passive_12/jiandun1255
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Conquest Pursuit | 征伐追击 | 征伐追擊 | 征伐追撃 | 정벌 추격 | Poursuite conquérante | Eroberungsjagd | Persecución de Conquista | Perseguição da Conquista | พิชิตไล่ล่า | ui/atlas/talent_passive_12/jiandun1255
### Continuous Stream (talent:224)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204220
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_general_dps_icedamgeup
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Continuous Stream | 涓流连绵 | 涓流連綿 | 氷流連綿 | 끊기지 않는 흐름 | Flux continu | Steter Strom | Flujo Continuo | Fluxo Contínuo | Trickle Stream | Trickling Flow | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_icedamgeup
### Counter Storm (talent:968)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2201700
- Icon: ui/atlas/talent_passive_9/weiren968
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Counter Storm | 反击风暴 | 反擊風暴 | 反撃の嵐 | 반격 폭풍 | Contre-tempête | Kontersturm | Tormenta de Contraataque | Tempestade de Contra-ataque | พายุ Counter | ui/atlas/talent_passive_9/weiren968
### Countercrush (talent:907)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-taken-or-defense, needs.description-extraction, scope.skill-or-recount-targeted
- Buff ids: 50050, 2201090
- Icon: ui/atlas/talent_passive_9/talent_passive_icon_general_sup_guide
- Target count: 7
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Countercrush | 格挡反击 | 格擋反擊 | レジスト反撃 | 막기 반격 | Contre-écrasement | Konterzermalmer | Contrachoque | Bloqueio Esmagador | Block Counter | ui/atlas/talent_passive_9/talent_passive_icon_general_sup_guide | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Crescendo Healing Chord (talent:1358)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207590
- Icon: ui/atlas/talent_passive_13/gita1358
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crescendo Healing Chord | 渐强治愈和弦 | 漸強治癒和絃 | 漸進治癒和音 | 크레센도 치유 화음 | Accord de soin crescendo | Crescendo-Heilakkord | Acorde Curativo Crescendo | Acorde de Cura em Crescendo | คอร์ด Healing ค่อยๆแกร่ง | ui/atlas/talent_passive_13/gita1358
### Crimson Foxen - Pet Frenzy (buff-source:3210121)
- Family: EffectSources
- Kind: imagine / imagine-buff
- Tags: source.companion-or-summon
- Buff ids: 3210121
- Icon: ui/atlas/buff/buff_icon144
- Text: Crimson Foxen - Pet Frenzy | 赤玉地狐 - 宠物狂暴 | 赤玉地狐 - 寵物狂暴 | 猛る獣 - 臣獣狂化 | 루비 땅여우 - 야수 광폭 | Renard pourpre - Frénésie de familier | Karmesin-Fux - Haustier-Raserei | Vulpe carmesí - Frenesí de Mascotas | Raposa Carmesim - Frenesi da Mascote | Crimson Earthfox - สัตว์เลี้ยงบ้าคลั่ง | Ruby Earthfox - Pet Frenzy | 赤玉地狐 - 被动 - 子buff | ui/atlas/buff/buff_icon144
### Crit (talent:5)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 997022
- Icon: ui/atlas/weaponhero/new/common_icon12
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit | 暴击 | 暴擊 | 会心 | 치명타 | Critique | Krit | Crítico | CRIT | ui/atlas/weaponhero/new/common_icon12 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Crit Chance (talent:40)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon12
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit Chance | 暴击几率 | 暴擊機率 | 会心率 | 치명타 확률 | Chances de coups critiques | Krit-Chance | Probabilidad de crítico | Chance de Crítico | โอกาส CRIT | Critical Chance | ui/atlas/weaponhero/new/common_icon12
### Crit Charge Rhythm (talent:1352)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207530
- Icon: ui/atlas/talent_passive_13/gita1352
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit Charge Rhythm | 会心充能律 | 會心充能律 | 会心充填率 | 회심 충전 법칙 | Rythme de charge critique | Krit-Ladungs-Rhythmus | Ritmo de Carga Crítica | จังหวะชาร์จคริติคอล | Critical Charge Law | ui/atlas/talent_passive_13/gita1352
### Crit DMG (talent:45)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: direction.damage-dealt, needs.description-extraction
- Icon: ui/atlas/weaponhero/new/common_icon12
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit DMG | 暴击伤害 | 暴擊傷害 | 会心ダメージ | 치명타 대미지 | Dégâts critiques | Krit-SCH | DÑO crítico | Dano Crítico | CRIT DMG | ui/atlas/weaponhero/new/common_icon12
### Crit Healing (talent:1320)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207210
- Icon: ui/atlas/talent_passive_13/gita1320
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit Healing | 暴击治疗 | 暴擊治療 | 会心回復 | 치명타 치료 | Soins critiques | Krit. Heilung | Curación crítica | Cura Crítica | CRIT Heal | Crit Heal | ui/atlas/talent_passive_13/gita1320
### Crit Scale (talent:1359)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207600
- Icon: ui/atlas/talent_passive_13/gita1359
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crit Scale | 暴击天秤 | 暴擊天秤 | 会心の天秤 | 치명타 저울 | Balance critique | Krit-Waage | Balanza Crítica | Balança Crítica | ตาชั่ง CRIT | Critical Scales | ui/atlas/talent_passive_13/gita1359
### Critical Acclaim (talent:1327)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207280
- Icon: ui/atlas/talent_passive_13/gita1327
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Critical Acclaim | 临界喝彩 | 臨界喝彩 | 喝彩 | 임계 환호 | Acclamation critique | Kritischer Beifall | Aclamación Crítica | Aclamação Crítica | Critical Cheer | Critical Applause | ui/atlas/talent_passive_13/gita1327
### Critical Cold (talent:250)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204470
- Icon: ui/atlas/talent_passive_2/mozhang250
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Critical Cold | 暴击之寒 | 暴擊之寒 | 酷寒 | 냉기 치명타 | Froid critique | Kritische Kälte | Frío Crítico | Frio Crítico | CRIT แห่งความหนาว | Critical Chill | ui/atlas/talent_passive_2/mozhang250
### Critical Encore (talent:1322)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2207230
- Icon: ui/atlas/talent_passive_13/gita1322
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Critical Encore | 安可暴击增幅 | 安可暴擊增幅 | 追奏会心増幅 | 앵콜 치명타 만능 | Rappel critique | Kritische Zugabe | Bis Crítico | บูสต์ Encore CRIT | Encore Critical Boost | ui/atlas/talent_passive_13/gita1322
### Crystal Resonance (talent:207)
- Family: EffectSources
- Kind: talent-passive / talent
- Tags: needs.description-extraction
- Buff ids: 2204070, 2204071
- Icon: ui/atlas/talent_passive_2/talent_passive_icon_dps_sacrificeconversion
- Notes: Talent row currently lacks captured UI description text; name/icon/buff evidence is not enough for exact semantics.
- Text: Crystal Resonance | 冰晶共鸣 | 冰晶共鳴 | 氷晶共鳴 | 얼음 수정 공명 | Résonance cristalline | Kristallresonanz | Resonancia Cristalina | Ressonância Cristalina | Ice Crystal Resonance | ui/atlas/talent_passive_2/talent_passive_icon_dps_sacrificeconversion | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
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

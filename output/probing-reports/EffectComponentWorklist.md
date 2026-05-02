# Effect Component Worklist

This report classifies broad effect-description matches into component, behavior, predicate, and required-runtime-evidence buckets. It is a worklist, not parser truth.

## Summary

- Surface records classified: 20000
- Predicate-audit records classified: 1263
- Total work items: 21263

### Confidence Counts

- ctb-string-discovery: 2550
- generated-bridge-surface: 4828
- generated-component-audit: 30
- generated-component-surface: 356
- generated-source-audit: 1233
- localization-discovery: 10542
- localization-effect-text: 1724

### Promotion State Counts

- candidate-for-structured-component-promotion: 98
- discovery-only-needs-bridge: 14816
- keep-out-of-offensive-damage-until-report-split: 474
- needs-component-parser: 5006
- needs-runtime-predicate-before-attribution: 161
- needs-runtime-window-before-attribution: 258
- needs-stat-state-before-attribution: 450

### Required Evidence Counts

- damage-id-or-recount-produced-row: 555
- focus-or-activation-window: 298
- incoming-attacker-monster-type: 10
- modifier-window-open-close: 3383
- raw-attacker-vs-top-summoner: 1610
- selected-loadout-or-static-state: 4640
- separate-tanked-or-healing-report: 1361
- source-player-or-party-host: 139
- stack-count-window: 1682
- stat-conversion-chain: 155
- stat-snapshot-or-temp-attr: 8213
- structured-source-row-bridge: 14816
- target-debuff-host-window: 146
- target-monster-type-per-hit: 1444

## Component Buckets

### component.unknown-effect

- Count: 5963
- Top evidence: damage-id-or-recount-produced-row=125, focus-or-activation-window=160, modifier-window-open-close=1121, raw-attacker-vs-top-summoner=1087, selected-loadout-or-static-state=768, separate-tanked-or-healing-report=42

- Marksman - Legendary Companion [needs-component-parser]: Marksman - Legendary Companion | 神射手·传奇同临 | 神射手·傳奇同臨 | ディバインアーチャー・伝説同臨 | 디바인 아처・전설 동행 | Tireur d'élite - Compagnon légendaire | Scharfschütze – Legendärer Begleiter | Tirador: Acompañante Legendario | Atirador de Elite — Companheiro Lendário | Markman - Legendary Resonance | Divine Archer·Legendary Bersatu | ui/texture
- Marksman - Wolf's Focus [needs-component-parser]: Marksman - Wolf's Focus | 神射手·狼唤凝神 | 神射手·狼喚凝神 | ディバインアーチャー・召狼専心 | 디바인 아처・늑대 집중 소환 | Tireur d'élite - Concentration du loup | Scharfschütze – Wolfsfokus | Tirador: Enfoque de Lobo | Atirador de Elite – Concentração do Lobo | Markman - Wolf Call: Focus | Divine Archer·Wolf Summoning Focus | ui/textures/rouge_icon/rogue_i
- Marksman - Demon Wolf Beast [needs-component-parser]: Marksman - Demon Wolf Beast | 神射手·魔狼归兽 | 神射手·魔狼歸獸 | ディバインアーチャー・魔狼獣化 | 디바인 아처・늑대 마수 귀환 | Tireur d'élite - Bête loup démon | Scharfschütze – Dämonenwolf-Bestie | Tirador: Bestia Lobo Demonio | Atirador de Elite — Besta Lobo Demoníaco | Markman - Direwolf Regression | Divine Archer·Serigala Magis Kembali | ui/textures/rou
- Marksman - Twin Talon Strike [needs-component-parser]: Marksman - Twin Talon Strike | 神射手·双鹰齐唤 | 神射手·雙鷹齊喚 | ディバインアーチャー・双鷹同召 | 디바인 아처・더블 팔콘 소환 | Tireur d'élite - Frappe de serres jumelles | Scharfschütze – Zwillingsklauenschlag | Tirador: Golpe de Garra Gemela | Atirador de Elite — Golpe de Garra Gêmea | Markman - Dual Falcon Summon | Divine Archer·Panggilan Dua Elang | ui/
### component.stat-unspecified

- Count: 5398
- Top evidence: focus-or-activation-window=15, modifier-window-open-close=830, raw-attacker-vs-top-summoner=44, selected-loadout-or-static-state=484, separate-tanked-or-healing-report=143, stack-count-window=70

- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv1
- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv1
- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv2
- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv2
### component.damage-unspecified

- Count: 5247
- Top evidence: damage-id-or-recount-produced-row=5, modifier-window-open-close=314, raw-attacker-vs-top-summoner=80, selected-loadout-or-static-state=2706, separate-tanked-or-healing-report=57, source-player-or-party-host=10

- EffectSources.json [needs-component-parser]: dmg-to-elites
- EffectSources.json [needs-component-parser]: damage-dealt
- EffectSources.json [needs-component-parser]: damage-modifier
- EffectSources.json [needs-component-parser]: direction.damage-dealt
### component.offense-stat

- Count: 1534
- Top evidence: damage-id-or-recount-produced-row=137, focus-or-activation-window=14, modifier-window-open-close=265, raw-attacker-vs-top-summoner=76, selected-loadout-or-static-state=131, separate-tanked-or-healing-report=177

- Cuisine - ATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
- Cuisine - ATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
- Cuisine - MATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
- Cuisine - MATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2
### component.damage-modifier

- Count: 1094
- Top evidence: damage-id-or-recount-produced-row=11, focus-or-activation-window=18, modifier-window-open-close=455, raw-attacker-vs-top-summoner=146, selected-loadout-or-static-state=69, separate-tanked-or-healing-report=105

- Cuisine - ATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
- Cuisine - ATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
- Cuisine - MATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
- Cuisine - MATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2
### component.combat-rating-stat

- Count: 784
- Top evidence: damage-id-or-recount-produced-row=98, focus-or-activation-window=38, modifier-window-open-close=127, raw-attacker-vs-top-summoner=29, selected-loadout-or-static-state=101, separate-tanked-or-healing-report=99

- Marksman Rhapsody X1 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | For 15 seconds after casting Wildcall, the Companion's Attack SPD +. Wild Wolf - T
- Marksman - Tidal Fury [needs-runtime-predicate-before-attribution]: Marksman - Tidal Fury | 神射手·怒涛必暴 | 神射手·怒濤必暴 | ディバインアーチャー・怒涛会心 | 디바인 아처・치명적 격류 | Tireur d'élite - Fureur des marées | Scharfschütze – Gezeitenwut | Tirador: Furia de Marea | Atirador de Elite — Fúria da Maré | Markman - Surge: Guaranteed Crit | Divine Archer·Badai Kemarahan | ui/textures/rouge_icon/rogue_icon_entry052
- Marksman - Crit CD Reduction [keep-out-of-offensive-damage-until-report-split]: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Red
- Marksman - Devastating Bombardment [needs-runtime-predicate-before-attribution]: Marksman - Devastating Bombardment | 神射手·轰炸暴伤 | 神射手·轟炸暴傷 | ディバインアーチャー・爆撃増傷 | 디바인 아처・폭격 강타 | Tireur d'élite - Bombardement dévastateur | Scharfschütze – Verheerendes Bombardement | Tirador: Bombardeo Devastador | Atirador de Elite — Bombardeio Devastador | Markman - Bombardment: Crit DMG | Divine Archer·Ledakan Crit DMG
### component.elemental-stat

- Count: 648
- Top evidence: damage-id-or-recount-produced-row=100, focus-or-activation-window=11, modifier-window-open-close=153, raw-attacker-vs-top-summoner=83, selected-loadout-or-static-state=208, separate-tanked-or-healing-report=132

- Marksman - Call of the Wild [needs-runtime-predicate-before-attribution]: Marksman - Call of the Wild | 神射手·群兽光召 | 神射手·群獸光召 | ディバインアーチャー・群獣召光 | 디바인 아처・군수 광휘 소환 | Tireur d'élite - Appel de la nature | Scharfschütze – Ruf der Wildnis | Tirador: Llamada de lo Salvaje | Atirador de Elite — Chamado Selvagem | Markman - Beast Herd: Light Call | Divine Archer·Panggilan Cahaya Kawanan | ui/textures/
- Marksman X9 [needs-runtime-predicate-before-attribution]: Marksman X9 | 神射X9 | ディバインアーチャーX9 | 디바인 아처X9 | Tireur d'élite X9 | Scharfschütze X9 | Tirador X9 | Atirador de Elite X9 | Divine X9 | Each Haste increases Radiance Barrage hit count by 1; Radiance Barrage Dream DMG increases by | 每急速使光能轰炸攻击次数+1；光能轰炸梦境伤害+ | 每急速使光能轟炸攻擊次數+1；光能轟炸夢境傷害+ | ファストにつき、エナジーショットの攻撃回数+1。エナジーショットの夢界ダ
- Marksman Rhapsody X4 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X4 | 神射狂想X4.G1 | ディバインアーチャー・狂想X4.G1 | 디바인 아처 광상X4 | Rhapsodie de Tireur d'élite X4 | Scharfschützen-Rhapsodie X4 | Rapsodia: Tirador X4 | Rapsódia do Atirador​ de Elite X4 | Markman Rhapsody X4 | Divine Rhapsody X4.G1 | Casting Powerdraw triggers Radiance Barrage. Casting Radiance Barrage triggers Pow
- Wind Knight - Sever Wind Summoning [needs-runtime-predicate-before-attribution]: Wind Knight - Sever Wind Summoning | 青岚骑士·岚切召风 | 青嵐騎士·嵐切召風 | ゲイルランサー・嵐斬招風 | 윈드 나이트・난절 바람 소환 | Chevalier du vent - Invocation de vent tranchant | Windritter – Windtrennungsbeschwörung | Caballero del viento: Invocación de Viento Cortante | Cavaleiro do Vento — Invocação de Vento de Corte | Wind Knight - Tempest Slash Ga
### component.defense-stat

- Count: 413
- Top evidence: damage-id-or-recount-produced-row=22, focus-or-activation-window=15, incoming-attacker-monster-type=10, modifier-window-open-close=131, raw-attacker-vs-top-summoner=19, selected-loadout-or-static-state=100

- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorc
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorc
### component.cooldown-or-resource

- Count: 399
- Top evidence: damage-id-or-recount-produced-row=141, focus-or-activation-window=42, modifier-window-open-close=119, raw-attacker-vs-top-summoner=109, separate-tanked-or-healing-report=117, source-player-or-party-host=38

- Overcharge [candidate-for-structured-component-promotion]: Overcharge | 激能 | 活力充填 | 격능 | Surcharge | Überladung | Sobrecarga | Energize | Energy Surge | 三重之矢 | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_thirddamup | DamageAttr row links directly to BuffName.
- Wild Call CD [candidate-for-structured-component-promotion]: Wild Call CD | 狂野呼唤冷却 | 狂野呼喚冷卻 | 臣獣の呼び声 | 야생의 부름 쿨다운 | TdR d'Appel de la nature | Wildruf-AZ | TdR de Llamada Salvaje | TR de Chamado Selvagem | คูลดาวน์ Wild Call | Wild Call Cooldown | ui/atlas/talent_passive_11/gongjian1145
- Energy Gathering Power [candidate-for-structured-component-promotion]: Energy Gathering Power | 聚能之力 | 集力 | 응집된 힘 | Pouvoir de concentration d'énergie | Kraft der Energiesammlung | Poder de Acumulación de Energía | Poder de Acúmulo de Energia | พลังรวมศูนย์ | Energy Convergence | ui/atlas/talent_passive_11/gongjian1164
- Instant Cooling [candidate-for-structured-component-promotion]: Instant Cooling | 冷却瞬息 | 冷卻瞬息 | 瞬間冷却 | 냉각의 순간 | Refroidissement Instantané | Sofortige Abkühlung | Enfriamiento Instantáneo | Resfriamento Instantâneo | Instant Cooldown | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergy
### component.proc-damage

- Count: 308
- Top evidence: damage-id-or-recount-produced-row=308, focus-or-activation-window=7, modifier-window-open-close=111, raw-attacker-vs-top-summoner=52, separate-tanked-or-healing-report=92, source-player-or-party-host=23

- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
- EffectSources.json [candidate-for-structured-component-promotion]: When the Falcon deals damage, 1 Photon Energy is restored, and Companion's DMG is increased by 50%. Available only in [Hard] and [Nightmare].
### component.healing-or-lifesteal

- Count: 298
- Top evidence: damage-id-or-recount-produced-row=52, focus-or-activation-window=6, modifier-window-open-close=96, raw-attacker-vs-top-summoner=30, selected-loadout-or-static-state=55, separate-tanked-or-healing-report=298

- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: When dealing damage or healing triggers a Lucky Strike, randomly summons a Luck Imagine (CD: 30s)
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: When dealing damage or healing triggers a Lucky Strike, randomly summons a Luck Imagine (CD: 30s )
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: When dealing damage or healing triggers a Lucky Strike, randomly summons a Luck Imagine (CD: 30s)
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: When healing is applied, summons a Basilisk Imagine (CD: 30s).
### component.shield-or-barrier

- Count: 230
- Top evidence: damage-id-or-recount-produced-row=17, modifier-window-open-close=104, raw-attacker-vs-top-summoner=13, selected-loadout-or-static-state=40, separate-tanked-or-healing-report=230, source-player-or-party-host=12

- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Nature Ward Shield Amount +, and for every 1% Luck or Crit, it gains an additional +1%;Nature Ward grants an additional All Element Resistance for 8s
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Nature Ward Shield Amount + , and for every 1% Luck or Crit, it gains an additional + 1% ;​Nature Ward grants an additional All Element Resistance for 8s
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Nature Ward Shield Amount +5%, and for every 1% Luck or Crit, it gains an additional +1%;Nature Ward grants an additional 1% All Element Resistance for 8s
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Nature Ward Shield Amount +10%, and for every 1% Luck or Crit, it gains an additional +1%;Nature Ward grants an additional 1.44% All Element Resistance for 8s
### component.damage-reduction

- Count: 203
- Top evidence: damage-id-or-recount-produced-row=31, incoming-attacker-monster-type=10, modifier-window-open-close=12, raw-attacker-vs-top-summoner=2, selected-loadout-or-static-state=62, separate-tanked-or-healing-report=203

- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorc
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorc
### component.health-stat

- Count: 195
- Top evidence: damage-id-or-recount-produced-row=40, modifier-window-open-close=95, raw-attacker-vs-top-summoner=6, selected-loadout-or-static-state=8, separate-tanked-or-healing-report=195, source-player-or-party-host=10

- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Excess healing received is converted into a Shield lasting 10s, up to Max HP
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Excess healing received is converted into a Shield lasting 10s , up to Max HP
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Excess healing received is converted into a Shield lasting 10s, up to 6.4% Max HP
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Excess healing received is converted into a Shield lasting 10s, up to 7.68% Max HP

## Behavior Buckets

### behavior.static-or-selected-state-suspect

- Count: 13249
- Top evidence: selected-loadout-or-static-state=4640, separate-tanked-or-healing-report=545, stat-snapshot-or-temp-attr=5923, structured-source-row-bridge=8609

- EffectSources.json [needs-stat-state-before-attribution]: atk
- EffectSources.json [needs-stat-state-before-attribution]: atk
- EffectSources.json [needs-stat-state-before-attribution]: atk
- EffectSources.json [needs-stat-state-before-attribution]: atk
### behavior.timed-window

- Count: 3383
- Top evidence: damage-id-or-recount-produced-row=144, focus-or-activation-window=23, modifier-window-open-close=3383, raw-attacker-vs-top-summoner=233, separate-tanked-or-healing-report=359, source-player-or-party-host=69

- english [discovery-only-needs-bridge]: Effect: ATK + , DMG to Elites or stronger enemies + for 30m . Reusing stacks duration, up to 720m [Up to 30% of current Basic ATK].
- english [discovery-only-needs-bridge]: Effect: MATK + , DMG to Elites or stronger enemies + for 30m Reusing stacks duration, up to 720m [Up to 30% of current Basic MATK]
- Marksman Rhapsody X1 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | For 15 seconds after casting Wildcall, the Companion's Attack SPD +. Wild Wolf - T
- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
### behavior.stack-or-ramp

- Count: 1682
- Top evidence: damage-id-or-recount-produced-row=85, focus-or-activation-window=2, modifier-window-open-close=446, raw-attacker-vs-top-summoner=31, separate-tanked-or-healing-report=209, source-player-or-party-host=32

- english [discovery-only-needs-bridge]: Effect: ATK + , DMG to Elites or stronger enemies + for 30m . Reusing stacks duration, up to 720m [Up to 30% of current Basic ATK].
- english [discovery-only-needs-bridge]: Effect: MATK + , DMG to Elites or stronger enemies + for 30m Reusing stacks duration, up to 720m [Up to 30% of current Basic MATK]
- chinese [discovery-only-needs-bridge]: 可用于激活或者进阶姆克尖兵的战斗幻想技能：绝技！追猎猛斩。 绝技！追猎猛斩 召唤 精英·姆克尖兵，持续追击目标，造成 物理伤害 。 技能释放后立刻获得满层被动效果，且 20秒 内层数视为翻倍。
- chinese [discovery-only-needs-bridge]: 召唤 精英·姆克尖兵，持续追击目标，造成 物理伤害 。 技能释放后立刻获得满层被动效果，且 20秒 内层数视为翻倍。
### behavior.companion-or-summon

- Count: 1610
- Top evidence: damage-id-or-recount-produced-row=284, focus-or-activation-window=15, modifier-window-open-close=233, raw-attacker-vs-top-summoner=1610, separate-tanked-or-healing-report=67, source-player-or-party-host=22

- Marksman - Call of the Wild [needs-runtime-predicate-before-attribution]: Marksman - Call of the Wild | 神射手·群兽光召 | 神射手·群獸光召 | ディバインアーチャー・群獣召光 | 디바인 아처・군수 광휘 소환 | Tireur d'élite - Appel de la nature | Scharfschütze – Ruf der Wildnis | Tirador: Llamada de lo Salvaje | Atirador de Elite — Chamado Selvagem | Markman - Beast Herd: Light Call | Divine Archer·Panggilan Cahaya Kawanan | ui/textures/
- Marksman - Legendary Companion [needs-component-parser]: Marksman - Legendary Companion | 神射手·传奇同临 | 神射手·傳奇同臨 | ディバインアーチャー・伝説同臨 | 디바인 아처・전설 동행 | Tireur d'élite - Compagnon légendaire | Scharfschütze – Legendärer Begleiter | Tirador: Acompañante Legendario | Atirador de Elite — Companheiro Lendário | Markman - Legendary Resonance | Divine Archer·Legendary Bersatu | ui/texture
- Marksman - Wolf's Focus [needs-component-parser]: Marksman - Wolf's Focus | 神射手·狼唤凝神 | 神射手·狼喚凝神 | ディバインアーチャー・召狼専心 | 디바인 아처・늑대 집중 소환 | Tireur d'élite - Concentration du loup | Scharfschütze – Wolfsfokus | Tirador: Enfoque de Lobo | Atirador de Elite – Concentração do Lobo | Markman - Wolf Call: Focus | Divine Archer·Wolf Summoning Focus | ui/textures/rouge_icon/rogue_i
- Marksman - Primal Power [needs-runtime-predicate-before-attribution]: Marksman - Primal Power | 神射手·兽攻强化 | 神射手·獸攻強化 | ディバインアーチャー・獣攻強化 | 디바인 아처・야수 공격 강화 | Tireur d'élite - Puissance primitive | Scharfschütze – Urkraft | Tirador: Poder Primigenio | Atirador de Elite — Poder Primal | Markman - Beast ATK Enhancement | Divine Archer·Penguatan Serangan Beast | ui/textures/rouge_icon/rogue_icon
### behavior.target-rank-conditional

- Count: 1444
- Top evidence: damage-id-or-recount-produced-row=3, focus-or-activation-window=3, incoming-attacker-monster-type=10, modifier-window-open-close=120, raw-attacker-vs-top-summoner=102, separate-tanked-or-healing-report=63

- Cuisine - ATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
- Cuisine - ATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
- Cuisine - MATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
- Cuisine - MATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2
### behavior.threshold-or-state-conditional

- Count: 800
- Top evidence: damage-id-or-recount-produced-row=232, focus-or-activation-window=33, modifier-window-open-close=252, raw-attacker-vs-top-summoner=137, separate-tanked-or-healing-report=286, source-player-or-party-host=54

- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
### behavior.proc-buff

- Count: 644
- Top evidence: damage-id-or-recount-produced-row=151, focus-or-activation-window=14, modifier-window-open-close=290, raw-attacker-vs-top-summoner=63, separate-tanked-or-healing-report=239, source-player-or-party-host=58

- EffectSources.json [candidate-for-structured-component-promotion]: When Azure Sever deals damage, it triggers an additional Tornado. This Tornado's Dream DMG is increased by 100%. Available only in [Nightmare].
- EffectSources.json [candidate-for-structured-component-promotion]: When Azure Sever deals damage, it triggers an additional Tornado. This Tornado's Dream DMG is increased by 100%. Available only in [Nightmare].
- EffectSources.json [candidate-for-structured-component-promotion]: When Azure Sever deals damage, it triggers an additional Tornado. This Tornado's Dream DMG is increased by 100%. Available only in [Nightmare].
- EffectSources.json [needs-runtime-predicate-before-attribution]: The Ultimate also triggers Stampede of Beasts, consuming all Photon Energy to summon Wild Wolves. 1 Wild Wolf is summoned for every 20 Photon Energy consumed. This lasts for 8s. Available only in [Nightmare].
### behavior.proc-damage

- Count: 555
- Top evidence: damage-id-or-recount-produced-row=555, focus-or-activation-window=12, modifier-window-open-close=144, raw-attacker-vs-top-summoner=284, separate-tanked-or-healing-report=118, source-player-or-party-host=30

- Marksman - Twin Talon Strike [needs-component-parser]: Marksman - Twin Talon Strike | 神射手·双鹰齐唤 | 神射手·雙鷹齊喚 | ディバインアーチャー・双鷹同召 | 디바인 아처・더블 팔콘 소환 | Tireur d'élite - Frappe de serres jumelles | Scharfschütze – Zwillingsklauenschlag | Tirador: Golpe de Garra Gemela | Atirador de Elite — Golpe de Garra Gêmea | Markman - Dual Falcon Summon | Divine Archer·Panggilan Dua Elang | ui/
- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
- EffectSources.json [candidate-for-structured-component-promotion]: When dealing damage with Class Skills, attacks deal bonus DMG equal to 0.2% of the enemy's current HP
### behavior.cooldown-resource

- Count: 483
- Top evidence: damage-id-or-recount-produced-row=148, focus-or-activation-window=48, modifier-window-open-close=144, raw-attacker-vs-top-summoner=111, separate-tanked-or-healing-report=145, source-player-or-party-host=40

- Overcharge [candidate-for-structured-component-promotion]: Overcharge | 激能 | 活力充填 | 격능 | Surcharge | Überladung | Sobrecarga | Energize | Energy Surge | 三重之矢 | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_thirddamup | DamageAttr row links directly to BuffName.
- Wild Call CD [candidate-for-structured-component-promotion]: Wild Call CD | 狂野呼唤冷却 | 狂野呼喚冷卻 | 臣獣の呼び声 | 야생의 부름 쿨다운 | TdR d'Appel de la nature | Wildruf-AZ | TdR de Llamada Salvaje | TR de Chamado Selvagem | คูลดาวน์ Wild Call | Wild Call Cooldown | ui/atlas/talent_passive_11/gongjian1145
- Energy Gathering Power [candidate-for-structured-component-promotion]: Energy Gathering Power | 聚能之力 | 集力 | 응집된 힘 | Pouvoir de concentration d'énergie | Kraft der Energiesammlung | Poder de Acumulación de Energía | Poder de Acúmulo de Energia | พลังรวมศูนย์ | Energy Convergence | ui/atlas/talent_passive_11/gongjian1164
- Instant Cooling [candidate-for-structured-component-promotion]: Instant Cooling | 冷却瞬息 | 冷卻瞬息 | 瞬間冷却 | 냉각의 순간 | Refroidissement Instantané | Sofortige Abkühlung | Enfriamiento Instantáneo | Resfriamento Instantâneo | Instant Cooldown | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergy
### behavior.focus-gated

- Count: 298
- Top evidence: damage-id-or-recount-produced-row=12, focus-or-activation-window=298, modifier-window-open-close=23, raw-attacker-vs-top-summoner=15, separate-tanked-or-healing-report=21, source-player-or-party-host=1

- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
- Marksman X8 [needs-component-parser]: Marksman X8 | 神射X8 | ディバインアーチャーX8 | 디바인 아처X8 | Tireur d'élite X8 | Scharfschütze X8 | Tirador X8 | Atirador de Elite X8 | Divine X8 | During Torrent Volley, Focus duration is paused; Torrent Volley Dream DMG + | 怒涛射击施放期间精神凝聚持续时间停滞；怒涛射击梦境伤害+ | 怒濤射擊施放期間精神凝聚持續時間停滯；怒濤射擊夢境傷害+ | レイジショット発動中、メンタルフォーカスの持続時間は停止する。レイジショットの夢界ダメージ+
- Marksman Stasis X1 [keep-out-of-offensive-damage-until-report-split]: Marksman Stasis X1 | 神射稳态X1 | 神射穩態X1 | ディバインアーチャー・恒常性X1 | 디바인 아처 안정X1 | Stase de Tireur d'élite X1 | Scharfschütze-Stase X1 | Estasis: Tirador X1 | Estase do Atirador​ de Elite X1 | Marksman Steady X1 | Divine Steady X1 | During Focus, Dream DMG Resistance + | 精神凝聚持续期间，梦境伤害减免+ | 精神凝聚持續期間，夢境傷害減免+ | メンタルフォーカスの有効中、夢界ダメージ軽
- EffectSources.json [needs-component-parser]: DMG dari Class Skill mendapat peningkatan selama Mental Focus berlangsung. Nilai peningkatannya sama dengan persentase DMG pet x jumlah beast di arena x .
### behavior.conversion-or-indirect-stat

- Count: 155
- Top evidence: damage-id-or-recount-produced-row=22, focus-or-activation-window=2, modifier-window-open-close=83, raw-attacker-vs-top-summoner=18, separate-tanked-or-healing-report=70, source-player-or-party-host=10

- EffectSources.json [needs-runtime-predicate-before-attribution]: The Ultimate also triggers Stampede of Beasts, consuming all Photon Energy to summon Wild Wolves. 1 Wild Wolf is summoned for every 20 Photon Energy consumed. This lasts for 8s. Available only in [Nightmare].
- EffectSources.json [needs-runtime-predicate-before-attribution]: The Ultimate also triggers Stampede of Beasts, consuming all Photon Energy to summon Wild Wolves. 1 Wild Wolf is summoned for every 20 Photon Energy consumed. This lasts for 8s. Available only in [Nightmare].
- EffectSources.json [needs-runtime-predicate-before-attribution]: The Ultimate also triggers Stampede of Beasts, consuming all Photon Energy to summon Wild Wolves. 1 Wild Wolf is summoned for every 20 Photon Energy consumed. This lasts for 8s. Available only in [Nightmare].
- EffectSources.json [needs-runtime-predicate-before-attribution]: For every 7 times a Tornado is triggered, an Enhanced Tornado is summoned, dealing damage equal to 2,000% of your ATK. Available only in [Hard] and [Nightmare].
### behavior.target-debuff

- Count: 146
- Top evidence: damage-id-or-recount-produced-row=13, focus-or-activation-window=2, modifier-window-open-close=29, raw-attacker-vs-top-summoner=3, separate-tanked-or-healing-report=92, source-player-or-party-host=8

- english [discovery-only-needs-bridge]: Effect: Armor + , DMG taken from Elites or stronger enemies - for 30m . Reusing stacks duration, up to 720m ).
- Vulnerable Strike [needs-runtime-predicate-before-attribution]: Vulnerable Strike | 易伤一击 | 易傷一擊 | 易傷一撃 | 취약 일격 | Frappe vulnérabilisante | Verwundbarer Schlag | Golpe Vulnerable | Golpe de Vulnerabilidade | โจมตีเจ็บง่าย | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_icenucleus
- Breath of Mark [needs-runtime-predicate-before-attribution]: Breath of Mark | 印记之息 | 印記之息 | 刻印回復 | 인장의 숨결 | Souffle de la marque | Atem des Mals | Aliento de la Marca | Sopro da Marca | ลมหายใจแห่งเครื่องหมาย | Mark's Breath | ui/atlas/talent_passive_1/talent_passive_icon_general_dps_thunderrepro
- Vulnerable Strike [needs-runtime-predicate-before-attribution]: Vulnerable Strike | 易伤一击 | 易傷一擊 | 易傷一撃 | 취약 일격 | Frappe vulnérabilisante | Verwundbarer Schlag | Golpe Vulnerable | Golpe de Vulnerabilidade | โจมตีเจ็บง่าย | ui/atlas/talent_passive_4/talent_passive_icon_general_dps_icenucleus
### behavior.party-or-external

- Count: 139
- Top evidence: damage-id-or-recount-produced-row=30, focus-or-activation-window=1, modifier-window-open-close=69, raw-attacker-vs-top-summoner=22, separate-tanked-or-healing-report=49, source-player-or-party-host=139

- Group Suppress [needs-component-parser]: Group Suppress | 群敌压制 | 群敵壓制 | 衆敵抑圧 | 적군 제압 | Suppression de groupe | Gruppenunterdrückung | Supresión Grupal | Supressão em Grupo | Suppression of Enemies | Enemy Suppression | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk04
- Team Luck & Crit [needs-stat-state-before-attribution]: Team Luck & Crit | 极·全队幸暴 | 極·全隊幸暴 | 極・幸運会心 | 극・팀 전체 행운 치명타 | Chance et critique d'équipe | Team-Glück & Krit | Crítico y suerte grupal | Sorte e Crítico da Equipe | Ultimate - Team Crit | 【同调】 | ui/atlas/mod_effect/mod_effect_icon_017
- Group Suppress [needs-component-parser]: Group Suppress | 群敌压制 | 群敵壓制 | 衆敵抑圧 | 적군 제압 | Suppression de groupe | Gruppenunterdrückung | Supresión Grupal | Supressão em Grupo | Suppression of Enemies | Enemy Suppression | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk04 | 压制放大
- EffectSources.json [needs-runtime-window-before-attribution]: When your Class Skills deal damage, restores 1% HP to yourself and nearby allies and grants a 15% ATK bonus for 3s (CD: 0.3s).

## Priority Rows

### Cuisine - ATK + DMG to Elites Lv.1
- Id: audit:ConsumableBuffBridge:food-buff:2032065
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
### Cuisine - ATK + DMG to Elites Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032067
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
### Cuisine - MATK + DMG to Elites Lv.1
- Id: audit:ConsumableBuffBridge:food-buff:2032075
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
### Cuisine - MATK + DMG to Elites Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032077
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2
### Cuisine - Armor + Elite DMG Reduction Lv.1
- Id: audit:ConsumableBuffBridge:food-buff:2032086
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
### Cuisine - Armor + Elite DMG Reduction Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032088
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
### Cuisine - ATK + DMG to Elites Lv.1
- Id: audit:EffectSources:buff-source:2032065
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - ATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032067
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - MATK + DMG to Elites Lv.1
- Id: audit:EffectSources:buff-source:2032075
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - MATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032077
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - Armor + Elite DMG Reduction Lv.1
- Id: audit:EffectSources:buff-source:2032086
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - Armor + Elite DMG Reduction Lv.2
- Id: audit:EffectSources:buff-source:2032088
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - ATK + DMG to Elites Lv.1
- Id: audit:EffectSources:buff-source:2032161
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032162
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.3
- Id: audit:EffectSources:buff-source:2032163
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.4
- Id: audit:EffectSources:buff-source:2032164
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.5
- Id: audit:EffectSources:buff-source:2032165
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - ATK + DMG to Elites Lv.6
- Id: audit:EffectSources:buff-source:2032166
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.1
- Id: audit:EffectSources:buff-source:2032171
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032172
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.3
- Id: audit:EffectSources:buff-source:2032173
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.4
- Id: audit:EffectSources:buff-source:2032174
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.5
- Id: audit:EffectSources:buff-source:2032175
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - MATK + DMG to Elites Lv.6
- Id: audit:EffectSources:buff-source:2032176
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.1
- Id: audit:EffectSources:buff-source:2032181
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.2
- Id: audit:EffectSources:buff-source:2032182
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.3
- Id: audit:EffectSources:buff-source:2032183
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv3 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.4
- Id: audit:EffectSources:buff-source:2032184
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv4 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.5
- Id: audit:EffectSources:buff-source:2032185
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv5 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### Cuisine - Armor + Elite DMG Reduction Lv.6
- Id: audit:EffectSources:buff-source:2032186
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv6 | ui/atlas/buff/buff_food_up | Runtime buff is exposed as a generic food/potion buff because no exact item row was proven from the current game files.
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032011.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032011.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032012.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032012.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032013.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032013.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032014.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032014.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032015.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032015.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032016.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032016.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032017.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032017.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032018.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032018.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032021.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032021.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032022.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032022.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032023.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032023.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032024.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032024.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032025.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032025.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032026.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032026.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032027.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032027.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032028.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032028.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: matk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032031.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032031.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032032.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032032.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032033.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032033.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032034.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032034.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032035.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032035.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032036.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032036.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032037.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032037.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032038.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032038.evidence.0.foodEffectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.defense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: armor
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032065.effectComponents.0.componentKey
- Confidence: generated-component-surface
- Components: component.offense-stat
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state, stat-snapshot-or-temp-attr
- State: needs-stat-state-before-attribution
- Action: Record the relevant stat/temp-attr/conversion state before estimating contribution.
- Text: atk
### EffectSources.json
- Id: surface:EffectSources.json:effectSourcesById.buff-source:2032065.effectComponents.1.componentKey
- Confidence: generated-component-surface
- Components: component.damage-unspecified
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: none
- Required evidence: selected-loadout-or-static-state
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: dmg-to-elites

# Effect Component Worklist

This report classifies broad effect-description matches into component, behavior, predicate, and required-runtime-evidence buckets. It is a worklist, not parser truth.

## Summary

- Surface records classified: 20000
- Predicate-audit records classified: 366
- Total work items: 20366

### Confidence Counts

- ctb-string-discovery: 2811
- generated-bridge-surface: 2826
- generated-component-audit: 220
- generated-component-surface: 715
- generated-source-audit: 146
- localization-discovery: 11794
- localization-effect-text: 1854

### Promotion State Counts

- candidate-for-structured-component-promotion: 2
- discovery-only-needs-bridge: 16459
- keep-out-of-offensive-damage-until-report-split: 309
- needs-component-parser: 2910
- needs-runtime-predicate-before-attribution: 266
- needs-runtime-window-before-attribution: 16
- needs-stat-state-before-attribution: 404

### Required Evidence Counts

- damage-id-or-recount-produced-row: 511
- focus-or-activation-window: 217
- incoming-attacker-monster-type: 14
- modifier-window-open-close: 2734
- raw-attacker-vs-top-summoner: 1622
- selected-loadout-or-static-state: 3183
- separate-tanked-or-healing-report: 1347
- source-player-or-party-host: 116
- stack-count-window: 1524
- stat-conversion-chain: 110
- stat-snapshot-or-temp-attr: 8421
- structured-source-row-bridge: 16459
- target-debuff-host-window: 212
- target-monster-type-per-hit: 1959

## Component Buckets

### component.stat-unspecified

- Count: 5608
- Top evidence: focus-or-activation-window=18, modifier-window-open-close=676, raw-attacker-vs-top-summoner=47, selected-loadout-or-static-state=386, separate-tanked-or-healing-report=154, stack-count-window=61

- EffectSources.json [needs-component-parser]: 物理攻擊額外+75，對精英及以上目標傷害+5%
- EffectSources.json [needs-component-parser]: 物理攻擊額外+75，對精英及以上目標傷害+5%
- EffectSources.json [needs-component-parser]: S1-物攻+精英增伤Lv1
- EffectSources.json [needs-component-parser]: S1-物攻+精英增伤Lv1
### component.unknown-effect

- Count: 5213
- Top evidence: damage-id-or-recount-produced-row=103, focus-or-activation-window=112, incoming-attacker-monster-type=14, modifier-window-open-close=897, raw-attacker-vs-top-summoner=1036, selected-loadout-or-static-state=29

- Cuisine - S1-ATK + DMG to Elites Lv.1 [needs-component-parser]: Cuisine - S1-ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv1 | S1-ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Tangy Fish Lv.1 | Spicy Fish Noodle Soup Lv.1
- Cuisine - S1-ATK + DMG to Elites Lv.2 [needs-component-parser]: Cuisine - S1-ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv2 | S1-ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Tangy Fish Lv.2 | Spicy Fish Noodle Soup Lv.2
- Cuisine - S1-MATK + DMG to Elites Lv.1 [needs-component-parser]: Cuisine - S1-MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv1 | S1-MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Tangy Mutton Pot Lv.1 | Fiery Mutton Soup Lv.1
- Cuisine - S1-MATK + DMG to Elites Lv.2 [needs-component-parser]: Cuisine - S1-MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv2 | S1-MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Tangy Mutton Pot Lv.2 | Fiery Mutton Soup Lv.2
### component.damage-unspecified

- Count: 4881
- Top evidence: damage-id-or-recount-produced-row=7, modifier-window-open-close=246, raw-attacker-vs-top-summoner=59, selected-loadout-or-static-state=2128, separate-tanked-or-healing-report=88, source-player-or-party-host=14

- EffectSources.json [needs-component-parser]: produced-damage
- EffectSources.json [needs-component-parser]: produced-damage-row
- EffectSources.json [needs-component-parser]: damage-dealt
- EffectSources.json [needs-component-parser]: proc-damage
### component.offense-stat

- Count: 1873
- Top evidence: damage-id-or-recount-produced-row=135, focus-or-activation-window=14, modifier-window-open-close=214, raw-attacker-vs-top-summoner=74, selected-loadout-or-static-state=366, separate-tanked-or-healing-report=154

- Cuisine - S1-ATK + DMG to Elites Lv.1 [needs-component-parser]: Cuisine - S1-ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv1 | S1-ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Tangy Fish Lv.1 | Spicy Fish Noodle Soup Lv.1
- Cuisine - S1-ATK + DMG to Elites Lv.2 [needs-component-parser]: Cuisine - S1-ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv2 | S1-ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Tangy Fish Lv.2 | Spicy Fish Noodle Soup Lv.2
- Cuisine - S1-MATK + DMG to Elites Lv.1 [needs-component-parser]: Cuisine - S1-MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv1 | S1-MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Tangy Mutton Pot Lv.1 | Fiery Mutton Soup Lv.1
- Cuisine - S1-MATK + DMG to Elites Lv.2 [needs-component-parser]: Cuisine - S1-MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv2 | S1-MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Tangy Mutton Pot Lv.2 | Fiery Mutton Soup Lv.2
### component.damage-modifier

- Count: 1040
- Top evidence: damage-id-or-recount-produced-row=11, focus-or-activation-window=7, modifier-window-open-close=390, raw-attacker-vs-top-summoner=166, separate-tanked-or-healing-report=104, source-player-or-party-host=3

- Cuisine - S1-ATK + DMG to Elites Lv.1 [needs-component-parser]: Cuisine - S1-ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv1 | S1-ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Tangy Fish Lv.1 | Spicy Fish Noodle Soup Lv.1
- Cuisine - S1-ATK + DMG to Elites Lv.2 [needs-component-parser]: Cuisine - S1-ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv2 | S1-ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Tangy Fish Lv.2 | Spicy Fish Noodle Soup Lv.2
- Cuisine - S1-MATK + DMG to Elites Lv.1 [needs-component-parser]: Cuisine - S1-MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv1 | S1-MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Tangy Mutton Pot Lv.1 | Fiery Mutton Soup Lv.1
- Cuisine - S1-MATK + DMG to Elites Lv.2 [needs-component-parser]: Cuisine - S1-MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv2 | S1-MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Tangy Mutton Pot Lv.2 | Fiery Mutton Soup Lv.2
### component.combat-rating-stat

- Count: 689
- Top evidence: damage-id-or-recount-produced-row=66, focus-or-activation-window=32, modifier-window-open-close=99, raw-attacker-vs-top-summoner=26, selected-loadout-or-static-state=42, separate-tanked-or-healing-report=74

- Lucky Crit [needs-runtime-predicate-before-attribution]: Lucky Crit | 幸运会心 | 幸運會心 | 幸運会心 | 행운 회심 | Critique porte-bonheur | Glücklicher Krit | Crítico de suerte | Crítico de Sorte | รวมจิตโชคดี | Luck Crit | 卷心菜精英1-主动 | ui/atlas/hud/buff/buff_blue_atk
- Marksman - Tidal Fury [needs-runtime-predicate-before-attribution]: Marksman - Tidal Fury | 神射手·怒涛必暴 | 神射手·怒濤必暴 | ディバインアーチャー・怒涛会心 | 디바인 아처・치명적 격류 | Tireur d'élite - Fureur des marées | Scharfschütze – Gezeitenwut | Tirador: Furia de Marea | Atirador de Elite — Fúria da Maré | Markman - Surge: Guaranteed Crit | Divine Archer·Badai Kemarahan | ui/textures/rouge_icon/rogue_icon_entry052
- Marksman - Crit CD Reduction [keep-out-of-offensive-damage-until-report-split]: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Red
- Marksman - Devastating Bombardment [needs-runtime-predicate-before-attribution]: Marksman - Devastating Bombardment | 神射手·轰炸暴伤 | 神射手·轟炸暴傷 | ディバインアーチャー・爆撃増傷 | 디바인 아처・폭격 강타 | Tireur d'élite - Bombardement dévastateur | Scharfschütze – Verheerendes Bombardement | Tirador: Bombardeo Devastador | Atirador de Elite — Bombardeio Devastador | Markman - Bombardment: Crit DMG | Divine Archer·Ledakan Crit DMG
### component.defense-stat

- Count: 471
- Top evidence: damage-id-or-recount-produced-row=29, focus-or-activation-window=1, incoming-attacker-monster-type=14, modifier-window-open-close=83, raw-attacker-vs-top-summoner=21, selected-loadout-or-static-state=155

- Cuisine - S1-Armor + Elite DMG Reduction Lv.1 [needs-component-parser]: Cuisine - S1-Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv1 | S1-Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
- Cuisine - S1-Armor + Elite DMG Reduction Lv.2 [needs-component-parser]: Cuisine - S1-Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv2 | S1-Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
- Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 [needs-component-parser]: Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv2 | [S2]Armor + Elite DMG Reduction Lv.2
- Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 [needs-component-parser]: Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv3 | [S2]Armor + Elite DMG Reduction Lv.3
### component.elemental-stat

- Count: 426
- Top evidence: damage-id-or-recount-produced-row=83, focus-or-activation-window=12, modifier-window-open-close=147, raw-attacker-vs-top-summoner=95, selected-loadout-or-static-state=14, separate-tanked-or-healing-report=126

- Wind Knight X10 [needs-runtime-predicate-before-attribution]: Wind Knight X10 | 青岚X10 | 青嵐X10 | ゲイルランサーX10 | 윈드 나이트X10 | Chevalier du vent X10 | Windritter X10 | Caballero del viento X10 | Cavaleiro do Vento X10 | Wind X10 | Gale X10 | yinzi_s2_04_010 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map pare
- Wind King's Pact [needs-runtime-predicate-before-attribution]: Wind King's Pact | 风王契约 | 風王契約 | 風の王の契約 | 바람 왕의 계약 | Pacte du Roi du Vent | Pakt des Windkönigs | Pacto del Rey del Viento | Pacto do Rei do Vento | พันธสัญญาจ้าววายุ | Wind King Covenant | ui/textures/rouge_icon/rogue_icon_entry087
- Lightforged Greatsword [keep-out-of-offensive-damage-until-report-split]: Lightforged Greatsword | 光明圣剑 | 光明聖劍 | 光明聖剣 | 광명 성검 | Espadon forgelumière | Lichtgeschmiedetes Großschwert | Mandoble Lumínico | Montante Forjada em Luz | Holy Sword of Light | Light Holysword | ui/atlas/talent_passive_12/jiandun1216 | Exact localized name groups are used as runtime buff aliases only; they do not impl
- Unmatched Raijin Dash [keep-out-of-offensive-damage-until-report-split]: Unmatched Raijin Dash | 无双飞雷神 | 無雙飛雷神 | 無双飛雷 | 무쌍 비뢰신 | Ruée de Raijin inégalée | Unübertroffener Raijin-Flitzer | Destello Raijin Inigualable | Investida de Raijin Inigualável | เทพสายฟ้าไร้คู่ | Peerless Flying Thunder God | ui/atlas/talent_passive_1/taidao142
### component.cooldown-or-resource

- Count: 416
- Top evidence: damage-id-or-recount-produced-row=134, focus-or-activation-window=37, modifier-window-open-close=118, raw-attacker-vs-top-summoner=133, separate-tanked-or-healing-report=103, source-player-or-party-host=24

- Marksman X6 [needs-runtime-predicate-before-attribution]: Marksman X6 | 神射X6 | ディバインアーチャーX6 | 디바인 아처X6 | Tireur d'élite X6 | Scharfschütze X6 | Tirador X6 | Atirador de Elite X6 | Divine X6 | yinzi_s2_11_006 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target ev
- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman X3 [needs-runtime-predicate-before-attribution]: Marksman X3 | 神射X3 | ディバインアーチャーX3 | 디바인 아처X3 | Tireur d'élite X3 | Scharfschütze X3 | Tirador X3 | Atirador de Elite X3 | Divine X3 | yinzi_s2_11_003 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target ev
- Marksman X4 [needs-runtime-predicate-before-attribution]: Marksman X4 | 神射X4 | ディバインアーチャーX4 | 디바인 아처X4 | Tireur d'élite X4 | Scharfschütze X4 | Tirador X4 | Atirador de Elite X4 | Divine X4 | yinzi_s2_11_004 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target ev
### component.proc-damage

- Count: 309
- Top evidence: damage-id-or-recount-produced-row=309, focus-or-activation-window=4, modifier-window-open-close=91, raw-attacker-vs-top-summoner=111, separate-tanked-or-healing-report=78, source-player-or-party-host=19

- Marksman X6 [needs-runtime-predicate-before-attribution]: Marksman X6 | 神射X6 | ディバインアーチャーX6 | 디바인 아처X6 | Tireur d'élite X6 | Scharfschütze X6 | Tirador X6 | Atirador de Elite X6 | Divine X6 | yinzi_s2_11_006 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target ev
- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
- Marksman X3 [needs-runtime-predicate-before-attribution]: Marksman X3 | 神射X3 | ディバインアーチャーX3 | 디바인 아처X3 | Tireur d'élite X3 | Scharfschütze X3 | Tirador X3 | Atirador de Elite X3 | Divine X3 | yinzi_s2_11_003 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target ev
### component.damage-reduction

- Count: 293
- Top evidence: damage-id-or-recount-produced-row=24, focus-or-activation-window=1, incoming-attacker-monster-type=14, modifier-window-open-close=15, raw-attacker-vs-top-summoner=13, selected-loadout-or-static-state=134

- Cuisine - S1-Armor + Elite DMG Reduction Lv.1 [needs-component-parser]: Cuisine - S1-Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv1 | S1-Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
- Cuisine - S1-Armor + Elite DMG Reduction Lv.2 [needs-component-parser]: Cuisine - S1-Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv2 | S1-Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
- Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 [needs-component-parser]: Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv2 | [S2]Armor + Elite DMG Reduction Lv.2
- Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 [needs-component-parser]: Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv3 | [S2]Armor + Elite DMG Reduction Lv.3
### component.healing-or-lifesteal

- Count: 181
- Top evidence: damage-id-or-recount-produced-row=44, focus-or-activation-window=6, modifier-window-open-close=63, raw-attacker-vs-top-summoner=25, selected-loadout-or-static-state=5, separate-tanked-or-healing-report=181

- Lucky Phantom [keep-out-of-offensive-damage-until-report-split]: Lucky Phantom | 幸运幻影 | 幸運幻影 | 행운 환영 | Fantôme chanceux | Glücksphantom | Fantasma de la Suerte | Fantasma da Sorte | เงาลวงโชคดี | Luck Phantom | ui/textures/rouge_icon/rogue_icon_entry107
- Synergy Summon—Petrified Behemoth [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Petrified Behemoth | 协同召唤：石化巨兽 | 協同召喚：石化巨獸 | 連携召喚：石化巨獣 | 협동 소환: 석화 거대 몬스터 | Invocation Synergique - Béhémoth pétrifié | Synergie-Beschwörung – Versteinerter Behemoth | Invocación Sinérgica: Monstruo Petrificado | Invocação Sinérgica – Colosso Petrificado | อัญเชิญประสาน: อสูรยักษ์ศิลา | Sync Summon: Petr
- Synergy Summon—Brigand King [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Brigand King | 协同召唤：山贼之王 | 協同召喚：山賊之王 | 連携召喚：山賊王 | 협동 소환: 산적의 왕 | Invocation Synergique - Roi des Brigands | Synergie-Beschwörung – Brigantenkönig | Invocación Sinérgica: Rey Bandido | Invocação Sinérgica – Rei dos Bandidos | อัญเชิญประสาน: Brigand King | Sync Summon: Bandit King | ui/textures/rouge_icon/
- Guardian Synergy—Swarm [keep-out-of-offensive-damage-until-report-split]: Guardian Synergy—Swarm | 守护协同：蜂群 | 守護協同：蜂群 | 防御連携：ミーンの群れ | 협동 수호: 벌떼 | Synergie Gardienne - Essaim | Wächtersynergie – Schwarm | Sinergia de Guardián: Enjambre | Sinergia de Guardião – Enxame | ประสานคุ้มกัน: ฝูงผึ้ง | Guardian Sync: Swarm | ui/textures/rouge_icon/rogue_icon_entry128
### component.shield-or-barrier

- Count: 147
- Top evidence: damage-id-or-recount-produced-row=17, modifier-window-open-close=61, raw-attacker-vs-top-summoner=17, selected-loadout-or-static-state=2, separate-tanked-or-healing-report=147, source-player-or-party-host=13

- Shadow Veil [keep-out-of-offensive-damage-until-report-split]: Shadow Veil | 敌影之盾 | 敵影之盾 | 敵影の盾 | 대군 방패 | Voile d'ombre | Schatten-Schleier | Velo Sombrío | Véu de Sombra | Shadow Shield | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk03
- Holy Summon [keep-out-of-offensive-damage-until-report-split]: Holy Summon | 圣光召唤 | 聖光召喚 | 성스러운 빛 소환 | Invocation sacrée | Heilige Beschwörung | Invocación Sagrada | Invocação Sagrada | อัญเชิญแสงศักดิ์สิทธิ์ | Holylight Summon | ui/atlas/talent_passive_12/jiandun1239
- Rage Burst improvement [keep-out-of-offensive-damage-until-report-split]: Rage Burst improvement | 怒爆精进 | 怒爆精進 | 憤怒の剛撃［強化］ | 분노 폭발 정진 | Amélioration d'Explosion de rage | Wutausbruch-Verbesserung | Mejora de Estallido de Furia | Aprimoramento de Explosão de Fúria | การปรับปรุงการระเบิดแห่งความโกรธ | Rage Burst Mastery | ui/atlas/talent_passive_9/weiren941
- Shield DMG Reduction [keep-out-of-offensive-damage-until-report-split]: Shield DMG Reduction | 护盾减伤 | 護盾減傷 | バリアダメージ軽減 | 실드 대미지 감소 | Réduction de dégâts de bouclier | Schild-SCH-Reduktion | Reducción de DÑO de escudo | Redução de Dano de Escudo | ลด DMG โล่ | Shield DR | ui/atlas/weaponhero/new/common_icon04
### component.health-stat

- Count: 135
- Top evidence: damage-id-or-recount-produced-row=22, modifier-window-open-close=44, raw-attacker-vs-top-summoner=9, separate-tanked-or-healing-report=135, source-player-or-party-host=11, stack-count-window=34

- english [discovery-only-needs-bridge]: Effect: HP + /s for 30m . Reusing stacks duration, up to 720m [Up to 5% of current max HP].
- indonesian [discovery-only-needs-bridge]: Sebuah Tour Song yang dimainkan sambil bergerak. Selama pertunjukan berlangsung, pulihkan HP rekan secara berkelanjutan. Pada saat yang sama, berikan Magic Damage kepada musuh di sekitar. Setiap kali heal 1 rekan, Healing Effect + 6% , maks. + 30% ; setiap kali mengenai 1 musuh, DMG + 6% , maks. 30% . Strategi: Efek He
- indonesian [discovery-only-needs-bridge]: Saat berada dalam status Flame Fantasy , Lucky Chance dari semua sumber meningkat 50% , dan DR + 25% . Paused Healing : Jika tidak mengakibatkan DMG terhadap target selama 5 detik, Normal Attack yang kamu lancarkan akan memulihkan HP hingga 10 rekan (rekan tim akan diprioritaskan). Total pemulihan dari empat tahap sera
- english [discovery-only-needs-bridge]: Corroding Seed: In Hard Mode and above, the Erosion Bloom Afterimage plants Corroding Seeds. After a long incubation period, they bloom, spreading Corroding Seed energy across the arena, reducing players' ATK and Max HP. Corroding Seeds can only be destroyed by Arc Slash. Strategy: Place the Erosion Bloom's Seal togeth

## Behavior Buckets

### behavior.static-or-selected-state-suspect

- Count: 12650
- Top evidence: selected-loadout-or-static-state=3183, separate-tanked-or-healing-report=566, stat-snapshot-or-temp-attr=6289, structured-source-row-bridge=9467

- Shield DMG Reduction [keep-out-of-offensive-damage-until-report-split]: Shield DMG Reduction | 护盾减伤 | 護盾減傷 | バリアダメージ軽減 | 실드 대미지 감소 | Réduction de dégâts de bouclier | Schild-SCH-Reduktion | Reducción de DÑO de escudo | Redução de Dano de Escudo | ลด DMG โล่ | Shield DR | ui/atlas/weaponhero/new/common_icon04
- Crit Chance [needs-stat-state-before-attribution]: Crit Chance | 暴击几率 | 暴擊機率 | 会心率 | 치명타 확률 | Chances de coups critiques | Krit-Chance | Probabilidad de crítico | Chance de Crítico | โอกาส CRIT | Critical Chance | ui/atlas/weaponhero/new/common_icon12
- Attack Speed [needs-stat-state-before-attribution]: Attack Speed | 攻击速度 | 攻擊速度 | 攻撃速度 | 공격 속도 | Vitesse d'attaque | Angriffsgeschwindigkeit | VEL de ATQ | Velocidade de Ataque | ความเร็วโจมตี | ui/atlas/weaponhero/new/common_icon13
- Crit DMG [needs-stat-state-before-attribution]: Crit DMG | 暴击伤害 | 暴擊傷害 | 会心ダメージ | 치명타 대미지 | Dégâts critiques | Krit-SCH | DÑO crítico | Dano Crítico | CRIT DMG | ui/atlas/weaponhero/new/common_icon12
### behavior.timed-window

- Count: 2734
- Top evidence: damage-id-or-recount-produced-row=124, focus-or-activation-window=8, modifier-window-open-close=2734, raw-attacker-vs-top-summoner=199, separate-tanked-or-healing-report=265, source-player-or-party-host=43

- english [discovery-only-needs-bridge]: Effect: ATK + , DMG to Elites or stronger enemies + for 30m . Reusing stacks duration, up to 720m [Up to 30% of current Basic ATK].
- english [discovery-only-needs-bridge]: Effect: MATK + , DMG to Elites or stronger enemies + for 30m Reusing stacks duration, up to 720m [Up to 30% of current Basic MATK]
- Marksman Rhapsody X1 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X1 | 神射狂想X1 | ディバインアーチャー・狂想X1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1 | For 15s after casting Wildcall, the Companion's Attack SPD +. Wild Wolf - Tail Sweep Illusio
- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2 | ディバインアーチャー・狂想X2 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2 | While Focus is active, Class Skill damage is increased by an amount equal to: Companion's DM
### behavior.target-rank-conditional

- Count: 1959
- Top evidence: damage-id-or-recount-produced-row=35, focus-or-activation-window=5, incoming-attacker-monster-type=14, modifier-window-open-close=124, raw-attacker-vs-top-summoner=123, separate-tanked-or-healing-report=172

- Marksman X6 [needs-runtime-predicate-before-attribution]: Marksman X6 | 神射X6 | ディバインアーチャーX6 | 디바인 아처X6 | Tireur d'élite X6 | Scharfschütze X6 | Tirador X6 | Atirador de Elite X6 | Divine X6 | yinzi_s2_11_006 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target ev
- Marksman - Storm Tamer [needs-runtime-predicate-before-attribution]: Marksman - Storm Tamer | 神射手·暴风驯兽 | 神射手·暴風馴獸 | ディバインアーチャー・暴風制獣 | 디바인 아처・폭풍 조련 | Tireur d'élite - Dompteur de tempête | Scharfschütze – Sturmbändiger | Tirador: Domador de Tormentas | Atirador de Elite — Domador de Tempestades | Markman - Tempest Taming | Divine Archer·Penjinak Storm | ui/textures/rouge_icon/rogue_icon_
- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
### behavior.companion-or-summon

- Count: 1622
- Top evidence: damage-id-or-recount-produced-row=296, focus-or-activation-window=8, modifier-window-open-close=199, raw-attacker-vs-top-summoner=1622, separate-tanked-or-healing-report=83, source-player-or-party-host=26

- Marksman X6 [needs-runtime-predicate-before-attribution]: Marksman X6 | 神射X6 | ディバインアーチャーX6 | 디바인 아처X6 | Tireur d'élite X6 | Scharfschütze X6 | Tirador X6 | Atirador de Elite X6 | Divine X6 | yinzi_s2_11_006 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target ev
- Marksman - Storm Tamer [needs-runtime-predicate-before-attribution]: Marksman - Storm Tamer | 神射手·暴风驯兽 | 神射手·暴風馴獸 | ディバインアーチャー・暴風制獣 | 디바인 아처・폭풍 조련 | Tireur d'élite - Dompteur de tempête | Scharfschütze – Sturmbändiger | Tirador: Domador de Tormentas | Atirador de Elite — Domador de Tempestades | Markman - Tempest Taming | Divine Archer·Penjinak Storm | ui/textures/rouge_icon/rogue_icon_
- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
### behavior.stack-or-ramp

- Count: 1524
- Top evidence: damage-id-or-recount-produced-row=73, focus-or-activation-window=2, modifier-window-open-close=329, raw-attacker-vs-top-summoner=33, separate-tanked-or-healing-report=150, source-player-or-party-host=28

- english [discovery-only-needs-bridge]: Effect: ATK + , DMG to Elites or stronger enemies + for 30m . Reusing stacks duration, up to 720m [Up to 30% of current Basic ATK].
- english [discovery-only-needs-bridge]: Effect: MATK + , DMG to Elites or stronger enemies + for 30m Reusing stacks duration, up to 720m [Up to 30% of current Basic MATK]
- chinese [discovery-only-needs-bridge]: 可用于激活或者进阶姆克尖兵的战斗幻想技能：绝技！追猎猛斩。 绝技！追猎猛斩 召唤 精英·姆克尖兵，持续追击目标，造成 物理伤害 。 技能释放后立刻获得满层被动效果，且 20秒 内层数视为翻倍。
- chinese [discovery-only-needs-bridge]: 召唤 精英·姆克尖兵，持续追击目标，造成 物理伤害 。 技能释放后立刻获得满层被动效果，且 20秒 内层数视为翻倍。
### behavior.threshold-or-state-conditional

- Count: 625
- Top evidence: damage-id-or-recount-produced-row=151, focus-or-activation-window=20, modifier-window-open-close=195, raw-attacker-vs-top-summoner=120, separate-tanked-or-healing-report=189, source-player-or-party-host=42

- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2 | ディバインアーチャー・狂想X2 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2 | While Focus is active, Class Skill damage is increased by an amount equal to: Companion's DM
- Marksman X9 [needs-runtime-predicate-before-attribution]: Marksman X9 | 神射X9 | ディバインアーチャーX9 | 디바인 아처X9 | Tireur d'élite X9 | Scharfschütze X9 | Tirador X9 | Atirador de Elite X9 | Divine X9 | Each Haste increases Radiance Barrage hit count by 1; Radiance Barrage Illusion-Breaking DMG increases by . Dealing damage with Radiance Barrage (triggers only once when hitting multiple
- Frost Mage Rhapsody X4 [needs-runtime-predicate-before-attribution]: Frost Mage Rhapsody X4 | 冰魔狂想X4 | フロストメイジ・狂想X4 | 프로스트 메이지 광상X4 | Rhapsodie de Mage de givre X4 | Frostmagier-Rhapsodie X4 | Rapsodia: Mago gélido X4 | Rapsódia do Mago do Gelo X4 | Frost Rhapsody X4 | When casting Meteor Storm, a Meteor Storm is simultaneously summoned at the location of Blizzard (including Endless Col
- Frost Mage Reality Factor X2 [needs-runtime-predicate-before-attribution]: Frost Mage Reality Factor X2 | 冰魔真实因子X2 | 冰魔真實因子X2 | フロストメイジ・実像因子X2 | 프로스트 메이지 진실 인자X2 | Facteur de réalité du Mage de givre X2 | Frostmagier X2 | Factor de realidad de mago gélido X2 | Fator de Realidade de Mago do Gelo X2 | Frost Truth Factor X2 | When Illusion Energy reaches points, dealing damage summons a Blizzard
### behavior.proc-buff

- Count: 494
- Top evidence: damage-id-or-recount-produced-row=118, focus-or-activation-window=19, modifier-window-open-close=195, raw-attacker-vs-top-summoner=51, separate-tanked-or-healing-report=173, source-player-or-party-host=41

- Summon on Crit [needs-runtime-predicate-before-attribution]: Summon on Crit | 暴击召唤 | 暴擊召喚 | 会心召喚 | 치명타 소환 | Invocation sur Critique | Beschwörung bei Krit | Invocación por Crítico | Invocação por Crítico | อัญเชิญ CRIT | Critical Summon | ui/textures/rouge_icon/rogue_icon_entry072
- Heavy Guardian - Twentyfold Rockfall [needs-runtime-predicate-before-attribution]: Heavy Guardian - Twentyfold Rockfall | 巨刃守护者·二十岩陨 | 巨刃守護者·二十岩隕 | ヘヴィガーディアン・20ロックフォール | 헤비 가디언・이십중 암석 낙하 | Gardien imposant - Éboulement vingtuplé | Schwerer Wächter – Zwanzigfacher Steinschlag | Guardián pesado: Caída de Rocas x20 | Guardião Pesado — Queda de Rochas Víntupla | Heavy Guardian - 20-Fold Rockfall | Heavy 
- Marksman X2 [needs-runtime-predicate-before-attribution]: Marksman X2 | 神射X2 | ディバインアーチャーX2 | 디바인 아처X2 | Tireur d'élite X2 | Scharfschütze X2 | Tirador X2 | Atirador de Elite X2 | Divine X2 | Wild Wolf - Tail Sweep Illusion-Breaking DMG +. Casting Arrow Rain grants Illusion Energy. | 野狼扫尾破妄伤害+。 施放箭雨获得点虚妄能量。 | 野狼掃尾破妄傷害+。 施放箭雨獲得點虛妄能量。 | 臣狼の掃撃の滅妄ダメージ+。 アローレインを発動すると虚妄エネルギー+pt。 | 
- Marksman X3 [needs-runtime-predicate-before-attribution]: Marksman X3 | 神射X3 | ディバインアーチャーX3 | 디바인 아처X3 | Tireur d'élite X3 | Scharfschütze X3 | Tirador X3 | Atirador de Elite X3 | Divine X3 | Wild Wolf - Bite Illusion-Breaking DMG +. Dealing damage with Wild Wolf grants Illusion Energy. | 野狼撕咬破妄伤害+。 野狼造成伤害获得点虚妄能量。 | 野狼撕咬破妄傷害+。 野狼造成傷害獲得點虛妄能量。 | 臣狼の噛みつきの滅妄ダメージ+。 臣狼でダメージを与えると虚妄エ
### behavior.cooldown-resource

- Count: 450
- Top evidence: damage-id-or-recount-produced-row=105, focus-or-activation-window=43, incoming-attacker-monster-type=5, modifier-window-open-close=141, raw-attacker-vs-top-summoner=82, separate-tanked-or-healing-report=129

- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Cuisine - [S2]ATK + DMG to Elites Lv.2 [needs-component-parser]: Cuisine - [S2]ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
- Cuisine - [S2]ATK + DMG to Elites Lv.3 [needs-component-parser]: Cuisine - [S2]ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
- Cuisine - [S2]ATK + DMG to Elites Lv.4 [needs-component-parser]: Cuisine - [S2]ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### behavior.proc-damage

- Count: 420
- Top evidence: damage-id-or-recount-produced-row=420, focus-or-activation-window=7, modifier-window-open-close=124, raw-attacker-vs-top-summoner=233, separate-tanked-or-healing-report=86, source-player-or-party-host=28

- Summon on Crit [needs-runtime-predicate-before-attribution]: Summon on Crit | 暴击召唤 | 暴擊召喚 | 会心召喚 | 치명타 소환 | Invocation sur Critique | Beschwörung bei Krit | Invocación por Crítico | Invocação por Crítico | อัญเชิญ CRIT | Critical Summon | ui/textures/rouge_icon/rogue_icon_entry072
- Synergy Summon—Petrified Behemoth [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Petrified Behemoth | 协同召唤：石化巨兽 | 協同召喚：石化巨獸 | 連携召喚：石化巨獣 | 협동 소환: 석화 거대 몬스터 | Invocation Synergique - Béhémoth pétrifié | Synergie-Beschwörung – Versteinerter Behemoth | Invocación Sinérgica: Monstruo Petrificado | Invocação Sinérgica – Colosso Petrificado | อัญเชิญประสาน: อสูรยักษ์ศิลา | Sync Summon: Petr
- Synergy Summon—Brigand King [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Brigand King | 协同召唤：山贼之王 | 協同召喚：山賊之王 | 連携召喚：山賊王 | 협동 소환: 산적의 왕 | Invocation Synergique - Roi des Brigands | Synergie-Beschwörung – Brigantenkönig | Invocación Sinérgica: Rey Bandido | Invocação Sinérgica – Rei dos Bandidos | อัญเชิญประสาน: Brigand King | Sync Summon: Bandit King | ui/textures/rouge_icon/
- Frost Mage - Final Meteor [needs-runtime-predicate-before-attribution]: Frost Mage - Final Meteor | 冰魔导师·陨星终召 | 冰魔導師·隕星終召 | フロストメイジ・隕星終臨 | 프로스트 메이지・유성 최종 소환 | Mage de givre - Météore final | Frostmagier – Finaler Meteor | Mago gélido: Meteorito Final | Mago do Gelo — Meteoro Final | Frost Mage - Meteor Final Summons | Frost Mage·Meteor Terminus Summon | ui/textures/rouge_icon/rogue_icon_en
### behavior.focus-gated

- Count: 217
- Top evidence: damage-id-or-recount-produced-row=7, focus-or-activation-window=217, modifier-window-open-close=8, raw-attacker-vs-top-summoner=8, separate-tanked-or-healing-report=8, source-player-or-party-host=1

- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2 | ディバインアーチャー・狂想X2 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2 | While Focus is active, Class Skill damage is increased by an amount equal to: Companion's DM
- Marksman X8 [needs-runtime-predicate-before-attribution]: Marksman X8 | 神射X8 | ディバインアーチャーX8 | 디바인 아처X8 | Tireur d'élite X8 | Scharfschütze X8 | Tirador X8 | Atirador de Elite X8 | Divine X8 | During Torrent Volley, Focus duration is paused; Torrent Volley Illusion-Breaking DMG +. Dealing damage with Torrent Volley grants Illusion Energy. | 怒涛射击施放期间精神凝聚持续时间停滞；怒涛射击破妄伤害+。 怒涛射击造成
- Marksman Stasis X1 [keep-out-of-offensive-damage-until-report-split]: Marksman Stasis X1 | 神射稳态X1 | 神射穩態X1 | ディバインアーチャー・恒常性X1 | 디바인 아처 안정X1 | Stase de Tireur d'élite X1 | Scharfschütze-Stase X1 | Estasis: Tirador X1 | Estase do Atirador de Elite X1 | Marksman Steady X1 | Divine Steady X1 | During Focus, increases Illusion-Breaking DMG Reduction by | 精神凝聚持续期间，破妄伤害减免+ | 精神凝聚持續期間，破妄傷害減免+ | 
- chinese [discovery-only-needs-bridge]: 次元崩坏：裂隙崩裂后，卡特格里夫对场景中所有玩家造成持续高额伤害，在正确的次元裂隙位置会形成保护罩提供大量伤害减免效果。 技巧攻略：想象次元和现实次元的玩家，需要集合后再进行次元逃离，否则会受到高额伤害。治疗注意对队友进行集中治疗。
### behavior.target-debuff

- Count: 212
- Top evidence: damage-id-or-recount-produced-row=14, focus-or-activation-window=2, modifier-window-open-close=31, raw-attacker-vs-top-summoner=8, separate-tanked-or-healing-report=154, source-player-or-party-host=5

- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Armor +400, DMG taken from Elites or stronger enemies -5%
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Armor +400, DMG taken from Elites or stronger enemies -5%
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Armor +400, DMG taken from Elites or stronger enemies -5%
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Armor +640, DMG taken from Elites or stronger enemies -10%
### behavior.party-or-external

- Count: 116
- Top evidence: damage-id-or-recount-produced-row=29, focus-or-activation-window=1, modifier-window-open-close=43, raw-attacker-vs-top-summoner=26, separate-tanked-or-healing-report=45, source-player-or-party-host=116

- Group Suppress [needs-runtime-predicate-before-attribution]: Group Suppress | 群敌压制 | 群敵壓制 | 衆敵抑圧 | 적군 제압 | Suppression de groupe | Gruppenunterdrückung | Supresión Grupal | Supressão em Grupo | Suppression of Enemies | Enemy Suppression | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk04
- Nature's Ally [needs-runtime-predicate-before-attribution]: Nature's Ally | 自然盟友 | 自然の友 | 자연 맹우 | Allié de la Nature | Verbündeter der Natur | Aliado de la Naturaleza | Aliado da Natureza | ฝ่ายเราธรรมชาติ | Natural Ally | ui/textures/rouge_icon/rogue_icon_entry099
- Team Luck & Crit [needs-stat-state-before-attribution]: Team Luck & Crit | 极·全队幸暴 | 極·全隊幸暴 | 極・幸運会心 | 극・팀 전체 행운 치명타 | Chance et critique d'équipe | Team-Glück & Krit | Crítico y suerte grupal | Sorte e Crítico da Equipe | Ultimate - Team Crit | 【同调】 | ui/atlas/mod_effect/mod_effect_icon_017
- english [discovery-only-needs-bridge]: Visibility of Ally Skill Effects
### behavior.conversion-or-indirect-stat

- Count: 110
- Top evidence: damage-id-or-recount-produced-row=22, focus-or-activation-window=3, modifier-window-open-close=51, raw-attacker-vs-top-summoner=12, separate-tanked-or-healing-report=43, source-player-or-party-host=13

- english [discovery-only-needs-bridge]: Adventurers can enhance their combat strength by equipping gear. Gear Slot: There are 11 equipment slots in total: Weapon, Helmet, Armor, Gauntlets, Boots, Necklace, Earrings, Ring, Charm, Bracelet (L), and Bracelet (R). Gear Effect: Gear effects are categorized into Basic Attributes, Advanced Attributes (which include
- english [discovery-only-needs-bridge]: Consumes 10 HP to attack with Fafala's sword. If the attack hits a Stalker , restores 50 HP. Killing a Stalker fully restores HP. Cannot be used when HP is insufficient. The actual damage is calculated based on the Armor of the object the Stalker has transformed into . Weapon Special Effect: Nearby Stalkers continuousl
- english [discovery-only-needs-bridge]: Consumes 10 HP to attack with Denvel's greatsword. If the attack hits a Stalker , restores 50 HP. Killing a Stalker fully restores HP. Cannot be used when HP is insufficient. The actual damage is calculated based on the Armor of the object the Stalker has transformed into . Weapon Special Effect: Fires 2 additional bla
- english [discovery-only-needs-bridge]: Consumes 10 HP to attack with a Pickaxe. If the attack hits a Stalker , restores 50 HP. Killing a Stalker fully restores HP. Cannot be used when HP is insufficient. The actual damage is calculated based on the Armor of the object the Stalker has transformed into . Weapon Special Effect: Grants a random piece of ore on 

## Priority Rows

### Marksman X6
- Id: audit:EffectSources:phantom-factor:3053060
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman X6 | 神射X6 | ディバインアーチャーX6 | 디바인 아처X6 | Tireur d'élite X6 | Scharfschütze X6 | Tirador X6 | Atirador de Elite X6 | Divine X6 | yinzi_s2_11_006 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman - Storm Tamer
- Id: audit:EffectSources:season-rogue-entry:254
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.critical-stat
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Storm Tamer | 神射手·暴风驯兽 | 神射手·暴風馴獸 | ディバインアーチャー・暴風制獣 | 디바인 아처・폭풍 조련 | Tireur d'élite - Dompteur de tempête | Scharfschütze – Sturmbändiger | Tirador: Domador de Tormentas | Atirador de Elite — Domador de Tempestades | Markman - Tempest Taming | Divine Archer·Penjinak Storm | ui/textures/rouge_icon/rogue_icon_entry054
### Marksman - Falcon's Gift
- Id: audit:EffectSources:season-rogue-entry:255
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon, behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/rogue_icon_entry055
### Marksman - Eagle-Eyed Focus
- Id: audit:EffectSources:season-rogue-entry:257
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Tertunda | ui/textures/rouge_icon/rogue_icon_entry057
### Cuisine - S1-ATK + DMG to Elites Lv.1
- Id: audit:ConsumableBuffBridge:food-buff:2032065
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv1 | S1-ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Tangy Fish Lv.1 | Spicy Fish Noodle Soup Lv.1
### Cuisine - S1-ATK + DMG to Elites Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032067
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv2 | S1-ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Tangy Fish Lv.2 | Spicy Fish Noodle Soup Lv.2
### Cuisine - S1-MATK + DMG to Elites Lv.1
- Id: audit:ConsumableBuffBridge:food-buff:2032075
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv1 | S1-MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Tangy Mutton Pot Lv.1 | Fiery Mutton Soup Lv.1
### Cuisine - S1-MATK + DMG to Elites Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032077
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv2 | S1-MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Tangy Mutton Pot Lv.2 | Fiery Mutton Soup Lv.2
### Cuisine - S1-Armor + Elite DMG Reduction Lv.1
- Id: audit:ConsumableBuffBridge:food-buff:2032086
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv1 | S1-Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1 | Honey Glazed Fish Lv.1 | Chewy Mutton Chop Burger Lv.1 | Sweet and Spicy Seafood Noodles Lv.1 | Fiery Mutton Chop Noodles Lv.1
### Cuisine - S1-Armor + Elite DMG Reduction Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032088
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv2 | S1-Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2 | Honey Glazed Fish Lv.2 | Chewy Mutton Chop Burger Lv.2 | Sweet and Spicy Seafood Noodles Lv.2 | Fiery Mutton Chop Noodles Lv.2
### Cuisine - [S2]ATK + DMG to Elites Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032162
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv2 | [S2]ATK + DMG to Elites Lv.2
### Cuisine - [S2]ATK + DMG to Elites Lv.3
- Id: audit:ConsumableBuffBridge:food-buff:2032163
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv3 | [S2]ATK + DMG to Elites Lv.3
### Cuisine - [S2]ATK + DMG to Elites Lv.4
- Id: audit:ConsumableBuffBridge:food-buff:2032164
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv4 | [S2]ATK + DMG to Elites Lv.4
### Cuisine - [S2]ATK + DMG to Elites Lv.5
- Id: audit:ConsumableBuffBridge:food-buff:2032165
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv5 | [S2]ATK + DMG to Elites Lv.5
### Cuisine - [S2]ATK + DMG to Elites Lv.6
- Id: audit:ConsumableBuffBridge:food-buff:2032166
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv6 | [S2]ATK + DMG to Elites Lv.6
### Cuisine - [S2]MATK + DMG to Elites Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032172
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv2 | [S2]MATK + DMG to Elites Lv.2
### Cuisine - [S2]MATK + DMG to Elites Lv.3
- Id: audit:ConsumableBuffBridge:food-buff:2032173
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv3 | [S2]MATK + DMG to Elites Lv.3
### Cuisine - [S2]MATK + DMG to Elites Lv.4
- Id: audit:ConsumableBuffBridge:food-buff:2032174
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv4 | [S2]MATK + DMG to Elites Lv.4
### Cuisine - [S2]MATK + DMG to Elites Lv.5
- Id: audit:ConsumableBuffBridge:food-buff:2032175
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv5 | [S2]MATK + DMG to Elites Lv.5
### Cuisine - [S2]MATK + DMG to Elites Lv.6
- Id: audit:ConsumableBuffBridge:food-buff:2032176
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv6 | [S2]MATK + DMG to Elites Lv.6
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032182
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv2 | [S2]Armor + Elite DMG Reduction Lv.2
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.3
- Id: audit:ConsumableBuffBridge:food-buff:2032183
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv3 | [S2]Armor + Elite DMG Reduction Lv.3
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.4
- Id: audit:ConsumableBuffBridge:food-buff:2032184
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv4 | [S2]Armor + Elite DMG Reduction Lv.4
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.5
- Id: audit:ConsumableBuffBridge:food-buff:2032185
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv5 | [S2]Armor + Elite DMG Reduction Lv.5
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.6
- Id: audit:ConsumableBuffBridge:food-buff:2032186
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv6 | [S2]Armor + Elite DMG Reduction Lv.6
### Cuisine - S1-ATK + DMG to Elites Lv.1
- Id: audit:EffectSources:buff-source:2032065
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | S1-ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1 | Tangy Fish Lv.1 | Spicy Fish Noodle Soup Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - S1-ATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032067
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | S1-ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2 | Tangy Fish Lv.2 | Spicy Fish Noodle Soup Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - S1-MATK + DMG to Elites Lv.1
- Id: audit:EffectSources:buff-source:2032075
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | S1-MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1 | Tangy Mutton Pot Lv.1 | Fiery Mutton Soup Lv.1 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - S1-MATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032077
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | S1-MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2 | Tangy Mutton Pot Lv.2 | Fiery Mutton Soup Lv.2 | Runtime food buff id is shared by multiple candidate food items; label the observed source by effect family and keep item names as candidates only.
### Cuisine - S1-Armor + Elite DMG Reduction Lv.1
- Id: audit:EffectSources:buff-source:2032086
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | S1-Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1 | Honey Glazed Fish Lv.1 | Chewy Mutton Chop Burger Lv.1 | Sweet and Spicy Seafood Noodles Lv.1 | Fiery Mutton Chop Noodles Lv.1 | Runtime food buff i
### Cuisine - S1-Armor + Elite DMG Reduction Lv.2
- Id: audit:EffectSources:buff-source:2032088
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - S1-Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | S1-护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | S1-Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2 | Honey Glazed Fish Lv.2 | Chewy Mutton Chop Burger Lv.2 | Sweet and Spicy Seafood Noodles Lv.2 | Fiery Mutton Chop Noodles Lv.2 | Runtime food buff i
### Cuisine - [S2]ATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032162
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.3
- Id: audit:EffectSources:buff-source:2032163
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.4
- Id: audit:EffectSources:buff-source:2032164
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.5
- Id: audit:EffectSources:buff-source:2032165
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]ATK + DMG to Elites Lv.6
- Id: audit:EffectSources:buff-source:2032166
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]物攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | [S2]ATK + DMG to Elites Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032172
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.3
- Id: audit:EffectSources:buff-source:2032173
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.4
- Id: audit:EffectSources:buff-source:2032174
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.5
- Id: audit:EffectSources:buff-source:2032175
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]MATK + DMG to Elites Lv.6
- Id: audit:EffectSources:buff-source:2032176
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]魔攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | [S2]MATK + DMG to Elites Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.2
- Id: audit:EffectSources:buff-source:2032182
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.3
- Id: audit:EffectSources:buff-source:2032183
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv3 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.4
- Id: audit:EffectSources:buff-source:2032184
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv4 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.5
- Id: audit:EffectSources:buff-source:2032185
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv5 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - [S2]Armor + Elite DMG Reduction Lv.6
- Id: audit:EffectSources:buff-source:2032186
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat, component.unknown-effect
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: needs-component-parser
- Action: Parse the description into explicit effectComponents before parser attribution.
- Text: Cuisine - [S2]Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | [S2]护甲+精英减伤Lv6 | ui/atlas/buff/buff_food_up | [S2]Armor + Elite DMG Reduction Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Lucky Crit
- Id: audit:EffectSources:buff-source:2110132
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.critical-damage-stat, component.critical-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Lucky Crit | 幸运会心 | 幸運會心 | 幸運会心 | 행운 회심 | Critique porte-bonheur | Glücklicher Krit | Crítico de suerte | Crítico de Sorte | รวมจิตโชคดี | Luck Crit | 卷心菜精英1-主动 | ui/atlas/hud/buff/buff_blue_atk
### Marksman X3
- Id: audit:EffectSources:phantom-factor:3053030
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman X3 | 神射X3 | ディバインアーチャーX3 | 디바인 아처X3 | Tireur d'élite X3 | Scharfschütze X3 | Tirador X3 | Atirador de Elite X3 | Divine X3 | yinzi_s2_11_003 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman X4
- Id: audit:EffectSources:phantom-factor:3053040
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.critical-damage-stat, component.proc-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman X4 | 神射X4 | ディバインアーチャーX4 | 디바인 아처X4 | Tireur d'élite X4 | Scharfschütze X4 | Tirador X4 | Atirador de Elite X4 | Divine X4 | yinzi_s2_11_004 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman X7
- Id: audit:EffectSources:phantom-factor:3053070
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman X7 | 神射X7 | ディバインアーチャーX7 | 디바인 아처X7 | Tireur d'élite X7 | Scharfschütze X7 | Tirador X7 | Atirador de Elite X7 | Divine X7 | yinzi_s2_11_007 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman X8
- Id: audit:EffectSources:phantom-factor:3053080
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman X8 | 神射X8 | ディバインアーチャーX8 | 디바인 아처X8 | Tireur d'élite X8 | Scharfschütze X8 | Tirador X8 | Atirador de Elite X8 | Divine X8 | yinzi_s2_11_008 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman X9
- Id: audit:EffectSources:phantom-factor:3053090
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.hit-timing, component.proc-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman X9 | 神射X9 | ディバインアーチャーX9 | 디바인 아처X9 | Tireur d'élite X9 | Scharfschütze X9 | Tirador X9 | Atirador de Elite X9 | Divine X9 | yinzi_s2_11_009 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman Stasis X1
- Id: audit:EffectSources:phantom-factor:3059160
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.damage-reduction
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Marksman Stasis X1 | 神射稳态X1 | 神射穩態X1 | ディバインアーチャー・恒常性X1 | 디바인 아처 안정X1 | Stase de Tireur d'élite X1 | Scharfschütze-Stase X1 | Estasis: Tirador X1 | Estase do Atirador de Elite X1 | Marksman Steady X1 | Divine Steady X1 | yinzi_s2_common_027 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman Stasis X2
- Id: audit:EffectSources:phantom-factor:3059170
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.damage-reduction
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Marksman Stasis X2 | 神射稳态X2 | 神射穩態X2 | ディバインアーチャー・恒常性X2 | 디바인 아처 안정X2 | Stase de Tireur d'élite X2 | Scharfschütze-Stase X2 | Estasis: Tirador X2 | Estase do Atirador de Elite X2 | Marksman Steady X2 | Divine Steady X2 | yinzi_s2_common_028 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman - Tidal Fury
- Id: audit:EffectSources:season-rogue-entry:252
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.critical-damage-stat, component.critical-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Tidal Fury | 神射手·怒涛必暴 | 神射手·怒濤必暴 | ディバインアーチャー・怒涛会心 | 디바인 아처・치명적 격류 | Tireur d'élite - Fureur des marées | Scharfschütze – Gezeitenwut | Tirador: Furia de Marea | Atirador de Elite — Fúria da Maré | Markman - Surge: Guaranteed Crit | Divine Archer·Badai Kemarahan | ui/textures/rouge_icon/rogue_icon_entry052
### Marksman - Charged Execution
- Id: audit:EffectSources:season-rogue-entry:260
- Confidence: generated-component-audit
- Components: component.elemental-damage, component.proc-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Charged Execution | 神射手·聚能斩血 | 神射手·聚能斬血 | ディバインアーチャー・チャージ削命 | 디바인 아처・집중 참혈 | Tireur d'élite - Exécution chargée | Scharfschütze – Aufgeladene Hinrichtung | Tirador: Ejecución Cargada | Atirador de Elite — Execução Carregada | Markman - Charged Bloodslash | Divine Archer·Focus Pemotong Darah | ui/textures/rouge_icon/rogue_icon_entry060
### Marksman - Crit CD Reduction
- Id: audit:EffectSources:season-rogue-entry:261
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.cooldown-or-resource, component.critical-stat, component.damage-reduction
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: separate-tanked-or-healing-report, stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Reduction | ui/textures/rouge_icon/rogue_icon_entry061
### Marksman - Devastating Bombardment
- Id: audit:EffectSources:season-rogue-entry:262
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.cooldown-or-resource, component.critical-damage-stat, component.critical-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Devastating Bombardment | 神射手·轰炸暴伤 | 神射手·轟炸暴傷 | ディバインアーチャー・爆撃増傷 | 디바인 아처・폭격 강타 | Tireur d'élite - Bombardement dévastateur | Scharfschütze – Verheerendes Bombardement | Tirador: Bombardeo Devastador | Atirador de Elite — Bombardeio Devastador | Markman - Bombardment: Crit DMG | Divine Archer·Ledakan Crit DMG | ui/textures/rouge_icon/rogue_icon_entry062
### Glazed Vastness
- Id: audit:EffectSources:talent:223
- Confidence: generated-component-audit
- Components: component.elemental-damage, component.proc-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Glazed Vastness | 琉璃浩瀚 | 無辺なる氷 | 유리 광야 | Immensité Verglacée | Gläserne Weite | Inmensidad Cristalina | Vastidão Vítrea | Glassy Expanse | ui/atlas/talent_passive_2/talent_passive_icon_general_tank_suppressex
### Shadow Veil
- Id: audit:EffectSources:talent:926
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.damage-reduction, component.shield-or-barrier
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Shadow Veil | 敌影之盾 | 敵影之盾 | 敵影の盾 | 대군 방패 | Voile d'ombre | Schatten-Schleier | Velo Sombrío | Véu de Sombra | Shadow Shield | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk03
### Wind Knight X10
- Id: audit:EffectSources:phantom-factor:3051100
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.critical-stat, component.elemental-stat
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.outgoing-damage, predicate.source-companion-or-summon
- Required evidence: raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Wind Knight X10 | 青岚X10 | 青嵐X10 | ゲイルランサーX10 | 윈드 나이트X10 | Chevalier du vent X10 | Windritter X10 | Caballero del viento X10 | Cavaleiro do Vento X10 | Wind X10 | Gale X10 | yinzi_s2_04_010 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Frost Mage Reality Factor X2
- Id: audit:EffectSources:phantom-factor:3052410
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.outgoing-damage, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Frost Mage Reality Factor X2 | 冰魔真实因子X2 | 冰魔真實因子X2 | フロストメイジ・実像因子X2 | 프로스트 메이지 진실 인자X2 | Facteur de réalité du Mage de givre X2 | Frostmagier X2 | Factor de realidad de mago gélido X2 | Fator de Realidade de Mago do Gelo X2 | Frost Truth Factor X2 | xuwangyinzi_s3_02_002 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman Reality Factor X1
- Id: audit:EffectSources:phantom-factor:3053400
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.outgoing-damage, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman Reality Factor X1 | 神射真实因子X1 | 神射真實因子X1 | ディバインアーチャー・実像因子X1 | 디바인 아처 진실 인자X1 | Facteur de réalité du Tireur d'élite X1 | Scharfschütze X1 | Factor de realidad de tirador X1 | Fator de Realidade de Atirador X1 | Divine Truth Factor X1 | xuwangyinzi_s2_11_001 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman Reality Factor X5
- Id: audit:EffectSources:phantom-factor:3053440
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.outgoing-damage, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman Reality Factor X5 | 神射真实因子X5 | 神射真實因子X5 | ディバインアーチャー・実像因子X5 | 디바인 아처 진실 인자X5 | Facteur de réalité du Tireur d'élite X5 | Scharfschütze X5 | Factor de realidad de tirador X5 | Fator de Realidade de Atirador X5 | Divine Truth Factor X5 | xuwangyinzi_s2_11_005 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman Reality Factor X6
- Id: audit:EffectSources:phantom-factor:3053450
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.outgoing-damage, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman Reality Factor X6 | 神射真实因子X6 | 神射真實因子X6 | ディバインアーチャー・実像因子X6 | 디바인 아처 진실 인자X6 | Facteur de réalité du Tireur d'élite X6 | Scharfschütze X6 | Factor de realidad de tirador X6 | Fator de Realidade de Atirador X6 | Divine Truth Factor X6 | xuwangyinzi_s2_11_006 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Summon on Crit
- Id: audit:EffectSources:season-rogue-entry:158
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.cooldown-or-resource, component.critical-stat
- Behaviors: behavior.companion-or-summon, behavior.proc-buff, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Summon on Crit | 暴击召唤 | 暴擊召喚 | 会心召喚 | 치명타 소환 | Invocation sur Critique | Beschwörung bei Krit | Invocación por Crítico | Invocação por Crítico | อัญเชิญ CRIT | Critical Summon | ui/textures/rouge_icon/rogue_icon_entry072
### Wind King's Pact
- Id: audit:EffectSources:season-rogue-entry:173
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.elemental-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Wind King's Pact | 风王契约 | 風王契約 | 風の王の契約 | 바람 왕의 계약 | Pacte du Roi du Vent | Pakt des Windkönigs | Pacto del Rey del Viento | Pacto do Rei do Vento | พันธสัญญาจ้าววายุ | Wind King Covenant | ui/textures/rouge_icon/rogue_icon_entry087
### Lucky Phantom
- Id: audit:EffectSources:season-rogue-entry:193
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.cooldown-or-resource, component.healing-or-lifesteal, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, separate-tanked-or-healing-report, stat-snapshot-or-temp-attr
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Lucky Phantom | 幸运幻影 | 幸運幻影 | 행운 환영 | Fantôme chanceux | Glücksphantom | Fantasma de la Suerte | Fantasma da Sorte | เงาลวงโชคดี | Luck Phantom | ui/textures/rouge_icon/rogue_icon_entry107
### Synergy Summon—Petrified Behemoth
- Id: audit:EffectSources:season-rogue-entry:212
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.healing-or-lifesteal
- Behaviors: behavior.companion-or-summon, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Synergy Summon—Petrified Behemoth | 协同召唤：石化巨兽 | 協同召喚：石化巨獸 | 連携召喚：石化巨獣 | 협동 소환: 석화 거대 몬스터 | Invocation Synergique - Béhémoth pétrifié | Synergie-Beschwörung – Versteinerter Behemoth | Invocación Sinérgica: Monstruo Petrificado | Invocação Sinérgica – Colosso Petrificado | อัญเชิญประสาน: อสูรยักษ์ศิลา | Sync Summon: Petrify Giant Beast | ui/textures/rouge_icon/rogue_icon_entry126
### Synergy Summon—Brigand King
- Id: audit:EffectSources:season-rogue-entry:213
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.healing-or-lifesteal
- Behaviors: behavior.companion-or-summon, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Synergy Summon—Brigand King | 协同召唤：山贼之王 | 協同召喚：山賊之王 | 連携召喚：山賊王 | 협동 소환: 산적의 왕 | Invocation Synergique - Roi des Brigands | Synergie-Beschwörung – Brigantenkönig | Invocación Sinérgica: Rey Bandido | Invocação Sinérgica – Rei dos Bandidos | อัญเชิญประสาน: Brigand King | Sync Summon: Bandit King | ui/textures/rouge_icon/rogue_icon_entry127
### Guardian Synergy—Swarm
- Id: audit:EffectSources:season-rogue-entry:214
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.healing-or-lifesteal
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.incoming-or-defense, predicate.source-companion-or-summon
- Required evidence: raw-attacker-vs-top-summoner, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Guardian Synergy—Swarm | 守护协同：蜂群 | 守護協同：蜂群 | 防御連携：ミーンの群れ | 협동 수호: 벌떼 | Synergie Gardienne - Essaim | Wächtersynergie – Schwarm | Sinergia de Guardián: Enjambre | Sinergia de Guardião – Enxame | ประสานคุ้มกัน: ฝูงผึ้ง | Guardian Sync: Swarm | ui/textures/rouge_icon/rogue_icon_entry128
### Stormblade - Phantom Edgewind
- Id: audit:EffectSources:season-rogue-entry:215
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.damage-reduction, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Stormblade - Phantom Edgewind | 雷影剑士·刃风绝影 | 雷影劍士·刃風絕影 | ストームブレイド・刃風残影 | 스톰 블레이드・검풍 절영 | Lame-tempête - Vent de lame fantôme | Sturmklinge – Phantom-Schneidenwind | Filo tormentoso: Filo de Viento Fantasma | Lâmina Tempestuosa — Vento Afiado Fantasma | Stormblade - Phantom Gale Slash | Stormblade Swordsman · Bladewind Shadow | ui/textures/rouge_icon/rogue_icon_entry010
### Frost Mage - Final Meteor
- Id: audit:EffectSources:season-rogue-entry:245
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Frost Mage - Final Meteor | 冰魔导师·陨星终召 | 冰魔導師·隕星終召 | フロストメイジ・隕星終臨 | 프로스트 메이지・유성 최종 소환 | Mage de givre - Météore final | Frostmagier – Finaler Meteor | Mago gélido: Meteorito Final | Mago do Gelo — Meteoro Final | Frost Mage - Meteor Final Summons | Frost Mage·Meteor Terminus Summon | ui/textures/rouge_icon/rogue_icon_entry045
### Frost Summon
- Id: audit:EffectSources:season-rogue-entry:359
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Frost Summon | 寒霜召唤 | 寒霜召喚 | 霜寒召喚 | 서리 소환 | Invocation de givre | Frostbeschwörung | Invocación de Escarcha | Invocação Gélida | อัญเชิญ Frost | Arctic Summon | ui/textures/rouge_icon/rogue_icon_entry146
### Denvel Summon
- Id: audit:EffectSources:season-rogue-entry:390
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Denvel Summon | 丹佛召唤 | 丹佛召喚 | デンヴェル召喚 | 덴벨 소환 | Invocation de Denvel | Denvel-Beschwörung | Invocación de Denvel | Invocação de Denvel | อัญเชิญ Denvel | Denver Summon | ui/textures/rouge_icon/rogue_icon_entry177
### Dual
- Id: audit:EffectSources:season-talent-node:1007
- Confidence: generated-component-audit
- Components: component.critical-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Dual | 二重 | 이중 | Double | Duplo | สองชั้น | ui/atlas/season_talent_icon/s2talent01_04
### Mirage Edge
- Id: audit:EffectSources:season-talent-node:1102
- Confidence: generated-component-audit
- Components: component.critical-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Mirage Edge | 幻刃心眼 | 幻刃閃 | 환검 심안 | Lame courte du mirage | Trugbildschneide | Filo Espejismo | Gume da Miragem | เพลงดาบมายาเนตรจิต | Illusory Blade Insight | ui/atlas/season_talent_icon/s2talent01_04
### Time-Slit
- Id: audit:EffectSources:season-talent-node:1104
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.damage-modifier
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Time-Slit | 时隙 | 時隙 | 時の狭間 | 시간 균열 | Fissure temporelle | Zeitschlitz | Brecha Temporal | Fenda Temporal | Time Slot | Time Rift | ui/atlas/season_talent_icon/s2talent01_04
### Instant
- Id: audit:EffectSources:season-talent-node:1105
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Instant | 瞬刻 | 순각 | Instantanéité | Augenblick | Instante | ชั่วพริบตา | Instant Moment | ui/atlas/season_talent_icon/s2talent01_04
### Swift-Calc
- Id: audit:EffectSources:season-talent-node:1110
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Swift-Calc | 速算 | 암산 | Calcul rapide | Blitzrechnung | Cálculo Veloz | Cálculo Rápido | คำนวณไว | Swift Math | ui/atlas/season_talent_icon/s2talent01_05sel

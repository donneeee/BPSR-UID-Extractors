# Effect Component Worklist

This report classifies broad effect-description matches into component, behavior, predicate, and required-runtime-evidence buckets. It is a worklist, not parser truth.

## Summary

- Surface records classified: 20000
- Predicate-audit records classified: 275
- Total work items: 20275

### Confidence Counts

- ctb-string-discovery: 2550
- generated-bridge-surface: 4018
- generated-component-audit: 156
- generated-component-surface: 1166
- generated-source-audit: 119
- localization-discovery: 10542
- localization-effect-text: 1724

### Promotion State Counts

- candidate-for-structured-component-promotion: 4
- discovery-only-needs-bridge: 14816
- keep-out-of-offensive-damage-until-report-split: 184
- needs-component-parser: 4820
- needs-runtime-predicate-before-attribution: 156
- needs-stat-state-before-attribution: 295

### Required Evidence Counts

- damage-id-or-recount-produced-row: 420
- focus-or-activation-window: 198
- incoming-attacker-monster-type: 10
- modifier-window-open-close: 2502
- raw-attacker-vs-top-summoner: 1407
- selected-loadout-or-static-state: 5132
- separate-tanked-or-healing-report: 1037
- source-player-or-party-host: 105
- stack-count-window: 1354
- stat-conversion-chain: 92
- stat-snapshot-or-temp-attr: 7104
- structured-source-row-bridge: 14816
- target-debuff-host-window: 134
- target-monster-type-per-hit: 1432

## Component Buckets

### component.damage-unspecified

- Count: 6981
- Top evidence: damage-id-or-recount-produced-row=5, modifier-window-open-close=204, raw-attacker-vs-top-summoner=50, selected-loadout-or-static-state=4594, separate-tanked-or-healing-report=51, source-player-or-party-host=10

- EffectSources.json [needs-component-parser]: produced-damage
- EffectSources.json [needs-component-parser]: produced-damage-row
- EffectSources.json [needs-component-parser]: damage-dealt
- EffectSources.json [needs-component-parser]: proc-damage
### component.stat-unspecified

- Count: 4753
- Top evidence: focus-or-activation-window=15, modifier-window-open-close=634, raw-attacker-vs-top-summoner=38, selected-loadout-or-static-state=51, separate-tanked-or-healing-report=127, stack-count-window=52

- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv1
- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv1
- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv2
- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv2
### component.unknown-effect

- Count: 4688
- Top evidence: damage-id-or-recount-produced-row=102, focus-or-activation-window=103, modifier-window-open-close=843, raw-attacker-vs-top-summoner=940, selected-loadout-or-static-state=37, separate-tanked-or-healing-report=34

- EffectSources.json [needs-component-parser]: source.companion-or-summon
- Marksman - Legendary Companion [needs-component-parser]: Marksman - Legendary Companion | 神射手·传奇同临 | 神射手·傳奇同臨 | ディバインアーチャー・伝説同臨 | 디바인 아처・전설 동행 | Tireur d'élite - Compagnon légendaire | Scharfschütze – Legendärer Begleiter | Tirador: Acompañante Legendario | Atirador de Elite — Companheiro Lendário | Markman - Legendary Resonance | Divine Archer·Legendary Bersatu | ui/texture
- Marksman - Demon Wolf Beast [needs-component-parser]: Marksman - Demon Wolf Beast | 神射手·魔狼归兽 | 神射手·魔狼歸獸 | ディバインアーチャー・魔狼獣化 | 디바인 아처・늑대 마수 귀환 | Tireur d'élite - Bête loup démon | Scharfschütze – Dämonenwolf-Bestie | Tirador: Bestia Lobo Demonio | Atirador de Elite — Besta Lobo Demoníaco | Markman - Direwolf Regression | Divine Archer·Serigala Magis Kembali | ui/textures/rou
- Marksman - Twin Talon Strike [needs-component-parser]: Marksman - Twin Talon Strike | 神射手·双鹰齐唤 | 神射手·雙鷹齊喚 | ディバインアーチャー・双鷹同召 | 디바인 아처・더블 팔콘 소환 | Tireur d'élite - Frappe de serres jumelles | Scharfschütze – Zwillingsklauenschlag | Tirador: Golpe de Garra Gemela | Atirador de Elite — Golpe de Garra Gêmea | Markman - Dual Falcon Summon | Divine Archer·Panggilan Dua Elang | ui/
### component.offense-stat

- Count: 1533
- Top evidence: damage-id-or-recount-produced-row=124, focus-or-activation-window=14, modifier-window-open-close=199, raw-attacker-vs-top-summoner=72, selected-loadout-or-static-state=257, separate-tanked-or-healing-report=131

- Marksman - Multiplying Arrow Rain [needs-runtime-predicate-before-attribution]: Marksman - Multiplying Arrow Rain | 神射手·箭雨倍增 | ディバインアーチャー・アローレイン倍増 | 디바인 아처・화살비 배가 | Tireur d'élite - Pluie de flèches multiplicatrice | Scharfschütze – Multiplizierender Pfeilregen | Tirador: Lluvia de Flechas Multiplicadora | Atirador de Elite — Chuva de Flechas Multiplicadora | Markman - Arrow Rain Multiplier | Pema
- Cuisine - ATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
- Cuisine - ATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
- Cuisine - MATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
### component.damage-modifier

- Count: 923
- Top evidence: damage-id-or-recount-produced-row=11, focus-or-activation-window=6, modifier-window-open-close=368, raw-attacker-vs-top-summoner=143, selected-loadout-or-static-state=2, separate-tanked-or-healing-report=94

- Marksman - Multiplying Arrow Rain [needs-runtime-predicate-before-attribution]: Marksman - Multiplying Arrow Rain | 神射手·箭雨倍增 | ディバインアーチャー・アローレイン倍増 | 디바인 아처・화살비 배가 | Tireur d'élite - Pluie de flèches multiplicatrice | Scharfschütze – Multiplizierender Pfeilregen | Tirador: Lluvia de Flechas Multiplicadora | Atirador de Elite — Chuva de Flechas Multiplicadora | Markman - Arrow Rain Multiplier | Pema
- Cuisine - ATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
- Cuisine - ATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
- Cuisine - MATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
### component.combat-rating-stat

- Count: 604
- Top evidence: damage-id-or-recount-produced-row=63, focus-or-activation-window=31, modifier-window-open-close=79, raw-attacker-vs-top-summoner=22, selected-loadout-or-static-state=42, separate-tanked-or-healing-report=65

- Marksman - Tidal Fury [needs-runtime-predicate-before-attribution]: Marksman - Tidal Fury | 神射手·怒涛必暴 | 神射手·怒濤必暴 | ディバインアーチャー・怒涛会心 | 디바인 아처・치명적 격류 | Tireur d'élite - Fureur des marées | Scharfschütze – Gezeitenwut | Tirador: Furia de Marea | Atirador de Elite — Fúria da Maré | Markman - Surge: Guaranteed Crit | Divine Archer·Badai Kemarahan | ui/textures/rouge_icon/rogue_icon_entry052
- Marksman - Crit CD Reduction [keep-out-of-offensive-damage-until-report-split]: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Red
- Marksman - Devastating Bombardment [needs-runtime-predicate-before-attribution]: Marksman - Devastating Bombardment | 神射手·轰炸暴伤 | 神射手·轟炸暴傷 | ディバインアーチャー・爆撃増傷 | 디바인 아처・폭격 강타 | Tireur d'élite - Bombardement dévastateur | Scharfschütze – Verheerendes Bombardement | Tirador: Bombardeo Devastador | Atirador de Elite — Bombardeio Devastador | Markman - Bombardment: Crit DMG | Divine Archer·Ledakan Crit DMG
- Summon on Crit [needs-runtime-predicate-before-attribution]: Summon on Crit | 暴击召唤 | 暴擊召喚 | 会心召喚 | 치명타 소환 | Invocation sur Critique | Beschwörung bei Krit | Invocación por Crítico | Invocação por Crítico | อัญเชิญ CRIT | Critical Summon | ui/textures/rouge_icon/rogue_icon_entry072
### component.elemental-stat

- Count: 382
- Top evidence: damage-id-or-recount-produced-row=75, focus-or-activation-window=11, modifier-window-open-close=136, raw-attacker-vs-top-summoner=83, selected-loadout-or-static-state=14, separate-tanked-or-healing-report=111

- Wind King's Pact [needs-runtime-predicate-before-attribution]: Wind King's Pact | 风王契约 | 風王契約 | 風の王の契約 | 바람 왕의 계약 | Pacte du Roi du Vent | Pakt des Windkönigs | Pacto del Rey del Viento | Pacto do Rei do Vento | พันธสัญญาจ้าววายุ | Wind King Covenant | ui/textures/rouge_icon/rogue_icon_entry087
- Wind Knight - Sevenfold Tornado [needs-runtime-predicate-before-attribution]: Wind Knight - Sevenfold Tornado | 青岚骑士·七重龙卷 | 青嵐騎士·七重龍捲 | ゲイルランサー・七連トルネード | 윈드 나이트・칠중 회오리 | Chevalier du vent - Tornade septuple | Windritter – Siebenfacher Tornado | Caballero del viento: Tornado Séptuple | Cavaleiro do Vento — Tornado Sétuplo | Wind Knight - Septuple Tornado | Gale Lancer·Tujuh Lapisan Tornado | ui/t
- Lightforged Greatsword [keep-out-of-offensive-damage-until-report-split]: Lightforged Greatsword | 光明圣剑 | 光明聖劍 | 光明聖剣 | 광명 성검 | Espadon forgelumière | Lichtgeschmiedetes Großschwert | Mandoble Lumínico | Montante Forjada em Luz | Holy Sword of Light | Light Holysword | ui/atlas/talent_passive_12/jiandun1216 | Exact localized name groups are used as runtime buff aliases only; they do not impl
- Unmatched Raijin Dash [keep-out-of-offensive-damage-until-report-split]: Unmatched Raijin Dash | 无双飞雷神 | 無雙飛雷神 | 無双飛雷 | 무쌍 비뢰신 | Ruée de Raijin inégalée | Unübertroffener Raijin-Flitzer | Destello Raijin Inigualable | Investida de Raijin Inigualável | เทพสายฟ้าไร้คู่ | Peerless Flying Thunder God | ui/atlas/talent_passive_1/taidao142
### component.defense-stat

- Count: 359
- Top evidence: damage-id-or-recount-produced-row=22, focus-or-activation-window=3, incoming-attacker-monster-type=10, modifier-window-open-close=80, raw-attacker-vs-top-summoner=19, selected-loadout-or-static-state=117

- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorc
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorc
### component.cooldown-or-resource

- Count: 283
- Top evidence: damage-id-or-recount-produced-row=88, focus-or-activation-window=30, modifier-window-open-close=80, raw-attacker-vs-top-summoner=85, separate-tanked-or-healing-report=87, source-player-or-party-host=24

- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman Stasis X2 [keep-out-of-offensive-damage-until-report-split]: Marksman Stasis X2 | 神射稳态X2 | 神射穩態X2 | ディバインアーチャー・恒常性X2 | 디바인 아처 안정X2 | Stase de Tireur d'élite X2 | Scharfschütze-Stase X2 | Estasis: Tirador X2 | Estase do Atirador​ de Elite X2 | Marksman Steady X2 | Divine Steady X2 | yinzi_s2_common_028 | Direct game-file ID links map child damage rows. Structured Dream DMG target
- Marksman - Crit CD Reduction [keep-out-of-offensive-damage-until-report-split]: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Red
- Marksman - Devastating Bombardment [needs-runtime-predicate-before-attribution]: Marksman - Devastating Bombardment | 神射手·轰炸暴伤 | 神射手·轟炸暴傷 | ディバインアーチャー・爆撃増傷 | 디바인 아처・폭격 강타 | Tireur d'élite - Bombardement dévastateur | Scharfschütze – Verheerendes Bombardement | Tirador: Bombardeo Devastador | Atirador de Elite — Bombardeio Devastador | Markman - Bombardment: Crit DMG | Divine Archer·Ledakan Crit DMG
### component.proc-damage

- Count: 245
- Top evidence: damage-id-or-recount-produced-row=245, focus-or-activation-window=4, modifier-window-open-close=90, raw-attacker-vs-top-summoner=71, separate-tanked-or-healing-report=67, source-player-or-party-host=20

- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
- Wind King's Pact [needs-runtime-predicate-before-attribution]: Wind King's Pact | 风王契约 | 風王契約 | 風の王の契約 | 바람 왕의 계약 | Pacte du Roi du Vent | Pakt des Windkönigs | Pacto del Rey del Viento | Pacto do Rei do Vento | พันธสัญญาจ้าววายุ | Wind King Covenant | ui/textures/rouge_icon/rogue_icon_entry087
- Lucky Phantom [keep-out-of-offensive-damage-until-report-split]: Lucky Phantom | 幸运幻影 | 幸運幻影 | 행운 환영 | Fantôme chanceux | Glücksphantom | Fantasma de la Suerte | Fantasma da Sorte | เงาลวงโชคดี | Luck Phantom | ui/textures/rouge_icon/rogue_icon_entry107
### component.healing-or-lifesteal

- Count: 164
- Top evidence: damage-id-or-recount-produced-row=41, focus-or-activation-window=6, modifier-window-open-close=51, raw-attacker-vs-top-summoner=24, selected-loadout-or-static-state=5, separate-tanked-or-healing-report=164

- Lucky Phantom [keep-out-of-offensive-damage-until-report-split]: Lucky Phantom | 幸运幻影 | 幸運幻影 | 행운 환영 | Fantôme chanceux | Glücksphantom | Fantasma de la Suerte | Fantasma da Sorte | เงาลวงโชคดี | Luck Phantom | ui/textures/rouge_icon/rogue_icon_entry107
- Synergy Summon—Petrified Behemoth [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Petrified Behemoth | 协同召唤：石化巨兽 | 協同召喚：石化巨獸 | 連携召喚：石化巨獣 | 협동 소환: 석화 거대 몬스터 | Invocation Synergique - Béhémoth pétrifié | Synergie-Beschwörung – Versteinerter Behemoth | Invocación Sinérgica: Monstruo Petrificado | Invocação Sinérgica – Colosso Petrificado | อัญเชิญประสาน: อสูรยักษ์ศิลา | Sync Summon: Petr
- Synergy Summon—Brigand King [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Brigand King | 协同召唤：山贼之王 | 協同召喚：山賊之王 | 連携召喚：山賊王 | 협동 소환: 산적의 왕 | Invocation Synergique - Roi des Brigands | Synergie-Beschwörung – Brigantenkönig | Invocación Sinérgica: Rey Bandido | Invocação Sinérgica – Rei dos Bandidos | อัญเชิญประสาน: Brigand King | Sync Summon: Bandit King | ui/textures/rouge_icon/
- Guardian Synergy—Swarm [keep-out-of-offensive-damage-until-report-split]: Guardian Synergy—Swarm | 守护协同：蜂群 | 守護協同：蜂群 | 防御連携：ミーンの群れ | 협동 수호: 벌떼 | Synergie Gardienne - Essaim | Wächtersynergie – Schwarm | Sinergia de Guardián: Enjambre | Sinergia de Guardião – Enxame | ประสานคุ้มกัน: ฝูงผึ้ง | Guardian Sync: Swarm | ui/textures/rouge_icon/rogue_icon_entry128
### component.damage-reduction

- Count: 160
- Top evidence: damage-id-or-recount-produced-row=19, incoming-attacker-monster-type=10, modifier-window-open-close=12, raw-attacker-vs-top-summoner=9, selected-loadout-or-static-state=41, separate-tanked-or-healing-report=160

- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorc
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorc
### component.shield-or-barrier

- Count: 135
- Top evidence: damage-id-or-recount-produced-row=18, modifier-window-open-close=56, raw-attacker-vs-top-summoner=14, selected-loadout-or-static-state=2, separate-tanked-or-healing-report=135, source-player-or-party-host=12

- Shadow Veil [keep-out-of-offensive-damage-until-report-split]: Shadow Veil | 敌影之盾 | 敵影之盾 | 敵影の盾 | 대군 방패 | Voile d'ombre | Schatten-Schleier | Velo Sombrío | Véu de Sombra | Shadow Shield | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk03
- Holy Summon [keep-out-of-offensive-damage-until-report-split]: Holy Summon | 圣光召唤 | 聖光召喚 | 성스러운 빛 소환 | Invocation sacrée | Heilige Beschwörung | Invocación Sagrada | Invocação Sagrada | อัญเชิญแสงศักดิ์สิทธิ์ | Holylight Summon | ui/atlas/talent_passive_12/jiandun1239
- Shield DMG Reduction [keep-out-of-offensive-damage-until-report-split]: Shield DMG Reduction | 护盾减伤 | 護盾減傷 | バリアダメージ軽減 | 실드 대미지 감소 | Réduction de dégâts de bouclier | Schild-SCH-Reduktion | Reducción de DÑO de escudo | Redução de Dano de Escudo | ลด DMG โล่ | Shield DR | ui/atlas/weaponhero/new/common_icon04
- Shield DMG Reduction [keep-out-of-offensive-damage-until-report-split]: Shield DMG Reduction | 护盾减伤 | 護盾減傷 | バリアダメージ軽減 | 실드 대미지 감소 | Réduction de dégâts de bouclier | Schild-SCH-Reduktion | Reducción de DÑO de escudo | Redução de Dano de Escudo | ลด DMG โล่ | Shield DR | 护盾减伤+4% | ui/atlas/weaponhero/new/common_icon04
### component.health-stat

- Count: 102
- Top evidence: damage-id-or-recount-produced-row=16, modifier-window-open-close=40, raw-attacker-vs-top-summoner=6, separate-tanked-or-healing-report=102, source-player-or-party-host=10, stack-count-window=28

- english [discovery-only-needs-bridge]: Effect: HP + /s for 30m . Reusing stacks duration, up to 720m [Up to 5% of current max HP].
- indonesian [discovery-only-needs-bridge]: Sebuah Tour Song yang dimainkan sambil bergerak. Selama pertunjukan berlangsung, pulihkan HP rekan secara berkelanjutan. Pada saat yang sama, berikan Magic Damage kepada musuh di sekitar. Setiap kali heal 1 rekan, Healing Effect + 6% , maks. + 30% ; setiap kali mengenai 1 musuh, DMG + 6% , maks. 30% . Strategi: Efek He
- indonesian [discovery-only-needs-bridge]: Saat berada dalam status Flame Fantasy , Lucky Chance dari semua sumber meningkat 50% , dan DR + 25% . Paused Healing : Jika tidak mengakibatkan DMG terhadap target selama 5 detik, Normal Attack yang kamu lancarkan akan memulihkan HP hingga 10 rekan (rekan tim akan diprioritaskan). Total pemulihan dari empat tahap sera
- english [discovery-only-needs-bridge]: Corroding Seed: In Hard Mode and above, the Erosion Bloom Afterimage plants Corroding Seeds. After a long incubation period, they bloom, spreading Corroding Seed energy across the arena, reducing players' ATK and Max HP. Corroding Seeds can only be destroyed by Arc Slash. Strategy: Place the Erosion Bloom's Seal togeth

## Behavior Buckets

### behavior.static-or-selected-state-suspect

- Count: 13741
- Top evidence: selected-loadout-or-static-state=5132, separate-tanked-or-healing-report=450, stat-snapshot-or-temp-attr=5365, structured-source-row-bridge=8609

- Shield DMG Reduction [keep-out-of-offensive-damage-until-report-split]: Shield DMG Reduction | 护盾减伤 | 護盾減傷 | バリアダメージ軽減 | 실드 대미지 감소 | Réduction de dégâts de bouclier | Schild-SCH-Reduktion | Reducción de DÑO de escudo | Redução de Dano de Escudo | ลด DMG โล่ | Shield DR | ui/atlas/weaponhero/new/common_icon04
- Ice Attack [needs-stat-state-before-attribution]: Ice Attack | 冰元素攻击 | 冰元素攻擊 | 氷属性攻撃 | 얼음 원소 공격 | Attaque de glace | Eisangriff | Ataque helado | Ataque de Gelo | โจมตีธาตุน้ำแข็ง | Ice ATK | ui/atlas/weaponhero/new/common_icon03
- Rock Attack [needs-stat-state-before-attribution]: Rock Attack | 岩元素攻击 | 岩元素攻擊 | 岩属性攻撃 | 바위 원소 공격 | Attaque de roche | Steinangriff | Ataque rocoso | Ataque de Rocha | โจมตีธาตุหิน | Rock ATK | ui/atlas/weaponhero/new/common_icon03
- Thunder Attack [needs-stat-state-before-attribution]: Thunder Attack | 雷元素攻击 | 雷元素攻擊 | 雷属性攻撃 | 번개 원소 공격 | Attaque de foudre | Donnerangriff | Ataque atronador | Ataque de Trovão | โจมตีธาตุสายฟ้า | Thunder ATK | ui/atlas/weaponhero/new/common_icon03
### behavior.timed-window

- Count: 2502
- Top evidence: damage-id-or-recount-produced-row=117, focus-or-activation-window=8, modifier-window-open-close=2502, raw-attacker-vs-top-summoner=174, separate-tanked-or-healing-report=237, source-player-or-party-host=39

- english [discovery-only-needs-bridge]: Effect: ATK + , DMG to Elites or stronger enemies + for 30m . Reusing stacks duration, up to 720m [Up to 30% of current Basic ATK].
- english [discovery-only-needs-bridge]: Effect: MATK + , DMG to Elites or stronger enemies + for 30m Reusing stacks duration, up to 720m [Up to 30% of current Basic MATK]
- Marksman Rhapsody X1 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | For 15 seconds after casting Wildcall, the Companion's Attack SPD +. Wild Wolf - T
- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
### behavior.target-rank-conditional

- Count: 1432
- Top evidence: damage-id-or-recount-produced-row=21, focus-or-activation-window=3, incoming-attacker-monster-type=10, modifier-window-open-close=118, raw-attacker-vs-top-summoner=106, separate-tanked-or-healing-report=66

- Marksman - Multiplying Arrow Rain [needs-runtime-predicate-before-attribution]: Marksman - Multiplying Arrow Rain | 神射手·箭雨倍增 | ディバインアーチャー・アローレイン倍増 | 디바인 아처・화살비 배가 | Tireur d'élite - Pluie de flèches multiplicatrice | Scharfschütze – Multiplizierender Pfeilregen | Tirador: Lluvia de Flechas Multiplicadora | Atirador de Elite — Chuva de Flechas Multiplicadora | Markman - Arrow Rain Multiplier | Pema
- Marksman - Storm Tamer [needs-runtime-predicate-before-attribution]: Marksman - Storm Tamer | 神射手·暴风驯兽 | 神射手·暴風馴獸 | ディバインアーチャー・暴風制獣 | 디바인 아처・폭풍 조련 | Tireur d'élite - Dompteur de tempête | Scharfschütze – Sturmbändiger | Tirador: Domador de Tormentas | Atirador de Elite — Domador de Tempestades | Markman - Tempest Taming | Divine Archer·Penjinak Storm | ui/textures/rouge_icon/rogue_icon_
- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
### behavior.companion-or-summon

- Count: 1407
- Top evidence: damage-id-or-recount-produced-row=231, focus-or-activation-window=8, modifier-window-open-close=174, raw-attacker-vs-top-summoner=1407, separate-tanked-or-healing-report=68, source-player-or-party-host=23

- Marksman - Multiplying Arrow Rain [needs-runtime-predicate-before-attribution]: Marksman - Multiplying Arrow Rain | 神射手·箭雨倍增 | ディバインアーチャー・アローレイン倍増 | 디바인 아처・화살비 배가 | Tireur d'élite - Pluie de flèches multiplicatrice | Scharfschütze – Multiplizierender Pfeilregen | Tirador: Lluvia de Flechas Multiplicadora | Atirador de Elite — Chuva de Flechas Multiplicadora | Markman - Arrow Rain Multiplier | Pema
- Marksman - Storm Tamer [needs-runtime-predicate-before-attribution]: Marksman - Storm Tamer | 神射手·暴风驯兽 | 神射手·暴風馴獸 | ディバインアーチャー・暴風制獣 | 디바인 아처・폭풍 조련 | Tireur d'élite - Dompteur de tempête | Scharfschütze – Sturmbändiger | Tirador: Domador de Tormentas | Atirador de Elite — Domador de Tempestades | Markman - Tempest Taming | Divine Archer·Penjinak Storm | ui/textures/rouge_icon/rogue_icon_
- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
### behavior.stack-or-ramp

- Count: 1354
- Top evidence: damage-id-or-recount-produced-row=66, focus-or-activation-window=2, modifier-window-open-close=303, raw-attacker-vs-top-summoner=28, separate-tanked-or-healing-report=137, source-player-or-party-host=29

- english [discovery-only-needs-bridge]: Effect: ATK + , DMG to Elites or stronger enemies + for 30m . Reusing stacks duration, up to 720m [Up to 30% of current Basic ATK].
- english [discovery-only-needs-bridge]: Effect: MATK + , DMG to Elites or stronger enemies + for 30m Reusing stacks duration, up to 720m [Up to 30% of current Basic MATK]
- chinese [discovery-only-needs-bridge]: 可用于激活或者进阶姆克尖兵的战斗幻想技能：绝技！追猎猛斩。 绝技！追猎猛斩 召唤 精英·姆克尖兵，持续追击目标，造成 物理伤害 。 技能释放后立刻获得满层被动效果，且 20秒 内层数视为翻倍。
- chinese [discovery-only-needs-bridge]: 召唤 精英·姆克尖兵，持续追击目标，造成 物理伤害 。 技能释放后立刻获得满层被动效果，且 20秒 内层数视为翻倍。
### behavior.threshold-or-state-conditional

- Count: 512
- Top evidence: damage-id-or-recount-produced-row=125, focus-or-activation-window=18, modifier-window-open-close=156, raw-attacker-vs-top-summoner=92, separate-tanked-or-healing-report=166, source-player-or-party-host=36

- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
- Frost Mage Rhapsody X4 [needs-runtime-predicate-before-attribution]: Frost Mage Rhapsody X4 | 冰魔狂想X4.G1 | フロストメイジ・狂想X4.G1 | 프로스트 메이지 광상X4 | Rhapsodie de Mage de givre X4 | Frostmagier-Rhapsodie X4 | Rapsodia: Mago gélido X4 | Rapsódia do Mago do Gelo X4 | Frost Rhapsody X4 | Frost Rhapsody X4.G1 | When casting Meteor Storm, a Meteor Storm is simultaneously summoned at the location of Bl
- english [discovery-only-needs-bridge]: When a Lucky Strike is launched, the Lucky Effect may be activated: Launches a meteor strike, dealing Magic DMG equal to ATK (CD: 0.3s ). Tier 5: Each time a meteor is summoned, immediately reduces the CD of this skill by 0.5s . Triggers at most once per second .
- english [discovery-only-needs-bridge]: Adventurers can enhance their combat strength by equipping gear. Gear Slot: There are 11 equipment slots in total: Weapon, Helmet, Armor, Gauntlets, Boots, Necklace, Earrings, Ring, Charm, Bracelet (L), and Bracelet (R). Gear Effect: Gear effects are categorized into Basic Attributes, Advanced Attributes (which include
### behavior.proc-buff

- Count: 401
- Top evidence: damage-id-or-recount-produced-row=101, focus-or-activation-window=14, modifier-window-open-close=167, raw-attacker-vs-top-summoner=39, separate-tanked-or-healing-report=149, source-player-or-party-host=37

- Summon on Crit [needs-runtime-predicate-before-attribution]: Summon on Crit | 暴击召唤 | 暴擊召喚 | 会心召喚 | 치명타 소환 | Invocation sur Critique | Beschwörung bei Krit | Invocación por Crítico | Invocação por Crítico | อัญเชิญ CRIT | Critical Summon | ui/textures/rouge_icon/rogue_icon_entry072
- Stunt! Cabbage Blitz [needs-runtime-predicate-before-attribution]: Stunt! Cabbage Blitz | 卷心菜精英2-被动触发 | 绝技！卷心菜霹雳闪 | 絕技！捲心菜霹靂閃 | 絶技！甘藍稲妻落とし | 비기! 양배추 벽력 섬광 | Acrobatie ! Foudre du chou | Stunt! Kohlblitz | ¡Proeza! Bombardeo de Col | Proeza! Bombardeio Repolho | Ultimate! สายฟ้าฟาดกะหล่ำปลี | Ultimate! Cabbage Thunderbolt Flash | Name marks a passive-triggered row.
- Heavy Guardian - Twentyfold Rockfall [needs-runtime-predicate-before-attribution]: Heavy Guardian - Twentyfold Rockfall | 巨刃守护者·二十岩陨 | 巨刃守護者·二十岩隕 | ヘヴィガーディアン・20ロックフォール | 헤비 가디언・이십중 암석 낙하 | Gardien imposant - Éboulement vingtuplé | Schwerer Wächter – Zwanzigfacher Steinschlag | Guardián pesado: Caída de Rocas x20 | Guardião Pesado — Queda de Rochas Víntupla | Heavy Guardian - 20-Fold Rockfall | Heavy 
- Marksman Rhapsody X4 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X4 | 神射狂想X4.G1 | ディバインアーチャー・狂想X4.G1 | 디바인 아처 광상X4 | Rhapsodie de Tireur d'élite X4 | Scharfschützen-Rhapsodie X4 | Rapsodia: Tirador X4 | Rapsódia do Atirador​ de Elite X4 | Markman Rhapsody X4 | Divine Rhapsody X4.G1 | Casting Powerdraw triggers Radiance Barrage. Casting Radiance Barrage triggers Pow
### behavior.proc-damage

- Count: 372
- Top evidence: damage-id-or-recount-produced-row=372, focus-or-activation-window=7, modifier-window-open-close=117, raw-attacker-vs-top-summoner=199, separate-tanked-or-healing-report=79, source-player-or-party-host=27

- Summon on Crit [needs-runtime-predicate-before-attribution]: Summon on Crit | 暴击召唤 | 暴擊召喚 | 会心召喚 | 치명타 소환 | Invocation sur Critique | Beschwörung bei Krit | Invocación por Crítico | Invocação por Crítico | อัญเชิญ CRIT | Critical Summon | ui/textures/rouge_icon/rogue_icon_entry072
- Synergy Summon—Petrified Behemoth [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Petrified Behemoth | 协同召唤：石化巨兽 | 協同召喚：石化巨獸 | 連携召喚：石化巨獣 | 협동 소환: 석화 거대 몬스터 | Invocation Synergique - Béhémoth pétrifié | Synergie-Beschwörung – Versteinerter Behemoth | Invocación Sinérgica: Monstruo Petrificado | Invocação Sinérgica – Colosso Petrificado | อัญเชิญประสาน: อสูรยักษ์ศิลา | Sync Summon: Petr
- Synergy Summon—Brigand King [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Brigand King | 协同召唤：山贼之王 | 協同召喚：山賊之王 | 連携召喚：山賊王 | 협동 소환: 산적의 왕 | Invocation Synergique - Roi des Brigands | Synergie-Beschwörung – Brigantenkönig | Invocación Sinérgica: Rey Bandido | Invocação Sinérgica – Rei dos Bandidos | อัญเชิญประสาน: Brigand King | Sync Summon: Bandit King | ui/textures/rouge_icon/
- Frost Mage - Final Meteor [needs-runtime-predicate-before-attribution]: Frost Mage - Final Meteor | 冰魔导师·陨星终召 | 冰魔導師·隕星終召 | フロストメイジ・隕星終臨 | 프로스트 메이지・유성 최종 소환 | Mage de givre - Météore final | Frostmagier – Finaler Meteor | Mago gélido: Meteorito Final | Mago do Gelo — Meteoro Final | Frost Mage - Meteor Final Summons | Frost Mage·Meteor Terminus Summon | ui/textures/rouge_icon/rogue_icon_en
### behavior.cooldown-resource

- Count: 315
- Top evidence: damage-id-or-recount-produced-row=81, focus-or-activation-window=36, modifier-window-open-close=102, raw-attacker-vs-top-summoner=56, separate-tanked-or-healing-report=104, source-player-or-party-host=25

- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Crit CD Reduction [keep-out-of-offensive-damage-until-report-split]: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Red
- Skill CD [candidate-for-structured-component-promotion]: Skill CD | 技能冷却 | 技能冷卻 | リキャスト | 스킬 쿨타임 | TdR de compétence | Fähigkeits-AZ | TdR de habilidad | Recarga de Habilidade | CD สกิล | Skill Cooldown | ui/atlas/weaponhero/new/common_icon13
- Skill CD [candidate-for-structured-component-promotion]: Skill CD | 技能冷却 | 技能冷卻 | リキャスト | 스킬 쿨타임 | TdR de compétence | Fähigkeits-AZ | TdR de habilidad | Recarga de Habilidade | CD สกิล | Skill Cooldown | 技能冷却+1% | ui/atlas/weaponhero/new/common_icon13
### behavior.focus-gated

- Count: 198
- Top evidence: damage-id-or-recount-produced-row=7, focus-or-activation-window=198, modifier-window-open-close=8, raw-attacker-vs-top-summoner=8, separate-tanked-or-healing-report=9, source-player-or-party-host=1

- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
- Marksman X8 [needs-component-parser]: Marksman X8 | 神射X8 | ディバインアーチャーX8 | 디바인 아처X8 | Tireur d'élite X8 | Scharfschütze X8 | Tirador X8 | Atirador de Elite X8 | Divine X8 | During Torrent Volley, Focus duration is paused; Torrent Volley Dream DMG + | 怒涛射击施放期间精神凝聚持续时间停滞；怒涛射击梦境伤害+ | 怒濤射擊施放期間精神凝聚持續時間停滯；怒濤射擊夢境傷害+ | レイジショット発動中、メンタルフォーカスの持続時間は停止する。レイジショットの夢界ダメージ+
- Marksman Stasis X1 [keep-out-of-offensive-damage-until-report-split]: Marksman Stasis X1 | 神射稳态X1 | 神射穩態X1 | ディバインアーチャー・恒常性X1 | 디바인 아처 안정X1 | Stase de Tireur d'élite X1 | Scharfschütze-Stase X1 | Estasis: Tirador X1 | Estase do Atirador​ de Elite X1 | Marksman Steady X1 | Divine Steady X1 | During Focus, Dream DMG Resistance + | 精神凝聚持续期间，梦境伤害减免+ | 精神凝聚持續期間，夢境傷害減免+ | メンタルフォーカスの有効中、夢界ダメージ軽
- chinese [discovery-only-needs-bridge]: 次元崩坏：裂隙崩裂后，卡特格里夫对场景中所有玩家造成持续高额伤害，在正确的次元裂隙位置会形成保护罩提供大量伤害减免效果。 技巧攻略：想象次元和现实次元的玩家，需要集合后再进行次元逃离，否则会受到高额伤害。治疗注意对队友进行集中治疗。
### behavior.target-debuff

- Count: 134
- Top evidence: damage-id-or-recount-produced-row=13, focus-or-activation-window=2, modifier-window-open-close=29, raw-attacker-vs-top-summoner=3, separate-tanked-or-healing-report=86, source-player-or-party-host=5

- english [discovery-only-needs-bridge]: Effect: Armor + , DMG taken from Elites or stronger enemies - for 30m . Reusing stacks duration, up to 720m ).
- Vulnerability Damage Bonus [needs-runtime-predicate-before-attribution]: Vulnerability Damage Bonus | 易伤增伤 | 易傷增傷 | 脆弱ダメージボーナス | 취약 대미지 증가 | Bonus de dégâts de vulnérabilité | Verwundbarkeits-Schadensbonus | Bonus de daño por vulnerabilidad | Bônus de Dano de Vulnerabilidade | เพิ่ม DMG เจ็บง่าย | Vulnerable DMG Up | ui/atlas/weaponhero/new/common_icon07
- DMG Stack [needs-runtime-predicate-before-attribution]: DMG Stack | 极·伤害叠加 | 極·傷害疊加 | 極・ダメージ増強 | 극・대미지 중첩 | Cumul de dégâts | SCH-Stapel | Acumulación de DÑO | Acúmulo de Dano | Ultimate - DMG Stack | 【连击】 | ui/atlas/mod_effect/mod_effect_icon_016
- DMG Stack [needs-runtime-predicate-before-attribution]: DMG Stack | 极·伤害叠加 | 極·傷害疊加 | 極・ダメージ増強 | 극・대미지 중첩 | Cumul de dégâts | SCH-Stapel | Acumulación de DÑO | Acúmulo de Dano | Ultimate - DMG Stack | ————叠层 | ui/atlas/mod_effect/mod_effect_icon_016
### behavior.party-or-external

- Count: 105
- Top evidence: damage-id-or-recount-produced-row=27, focus-or-activation-window=1, modifier-window-open-close=39, raw-attacker-vs-top-summoner=23, separate-tanked-or-healing-report=43, source-player-or-party-host=105

- Nature's Ally [needs-runtime-predicate-before-attribution]: Nature's Ally | 自然盟友 | 自然の友 | 자연 맹우 | Allié de la Nature | Verbündeter der Natur | Aliado de la Naturaleza | Aliado da Natureza | ฝ่ายเราธรรมชาติ | Natural Ally | ui/textures/rouge_icon/rogue_icon_entry099
- Team Luck & Crit [needs-stat-state-before-attribution]: Team Luck & Crit | 极·全队幸暴 | 極·全隊幸暴 | 極・幸運会心 | 극・팀 전체 행운 치명타 | Chance et critique d'équipe | Team-Glück & Krit | Crítico y suerte grupal | Sorte e Crítico da Equipe | Ultimate - Team Crit | 【同调】 | ui/atlas/mod_effect/mod_effect_icon_017
- english [discovery-only-needs-bridge]: Ally Special Effects Visibility
- english [discovery-only-needs-bridge]: Visibility of Ally Skill Effects
### behavior.conversion-or-indirect-stat

- Count: 92
- Top evidence: damage-id-or-recount-produced-row=16, focus-or-activation-window=2, modifier-window-open-close=44, raw-attacker-vs-top-summoner=9, separate-tanked-or-healing-report=37, source-player-or-party-host=10

- english [discovery-only-needs-bridge]: Adventurers can enhance their combat strength by equipping gear. Gear Slot: There are 11 equipment slots in total: Weapon, Helmet, Armor, Gauntlets, Boots, Necklace, Earrings, Ring, Charm, Bracelet (L), and Bracelet (R). Gear Effect: Gear effects are categorized into Basic Attributes, Advanced Attributes (which include
- english [discovery-only-needs-bridge]: Consumes 10 HP to attack with Fafala's sword. If the attack hits a Stalker , restores 50 HP. Killing a Stalker fully restores HP. Cannot be used when HP is insufficient. The actual damage is calculated based on the Armor of the object the Stalker has transformed into . Weapon Special Effect: Nearby Stalkers continuousl
- english [discovery-only-needs-bridge]: Consumes 10 HP to attack with Denvel's greatsword. If the attack hits a Stalker , restores 50 HP. Killing a Stalker fully restores HP. Cannot be used when HP is insufficient. The actual damage is calculated based on the Armor of the object the Stalker has transformed into . Weapon Special Effect: Fires 2 additional bla
- english [discovery-only-needs-bridge]: Consumes 10 HP to attack with a Pickaxe. If the attack hits a Stalker , restores 50 HP. Killing a Stalker fully restores HP. Cannot be used when HP is insufficient. The actual damage is calculated based on the Armor of the object the Stalker has transformed into . Weapon Special Effect: Grants a random piece of ore on 

## Priority Rows

### Marksman - Multiplying Arrow Rain
- Id: audit:EffectSources:season-rogue-entry:251
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Multiplying Arrow Rain | 神射手·箭雨倍增 | ディバインアーチャー・アローレイン倍増 | 디바인 아처・화살비 배가 | Tireur d'élite - Pluie de flèches multiplicatrice | Scharfschütze – Multiplizierender Pfeilregen | Tirador: Lluvia de Flechas Multiplicadora | Atirador de Elite — Chuva de Flechas Multiplicadora | Markman - Arrow Rain Multiplier | Pemanah Ilahi · Peningkatan Jumlah Panah Hujan | ui/textures/rouge_icon/rogue_icon_entry051
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
### Marksman Stasis X2
- Id: audit:EffectSources:phantom-factor:3059170
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.damage-reduction
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Marksman Stasis X2 | 神射稳态X2 | 神射穩態X2 | ディバインアーチャー・恒常性X2 | 디바인 아처 안정X2 | Stase de Tireur d'élite X2 | Scharfschütze-Stase X2 | Estasis: Tirador X2 | Estase do Atirador​ de Elite X2 | Marksman Steady X2 | Divine Steady X2 | yinzi_s2_common_028 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
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
- Components: component.damage-modifier, component.elemental-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: target-monster-type-per-hit
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
- Components: component.damage-modifier, component.elemental-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: target-monster-type-per-hit
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
### Summon on Crit
- Id: audit:EffectSources:season-rogue-entry:158
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.cooldown-or-resource, component.critical-stat, component.offense-stat
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
### Wind Knight - Sevenfold Tornado
- Id: audit:EffectSources:season-rogue-entry:288
- Confidence: generated-component-audit
- Components: component.elemental-stat, component.offense-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Wind Knight - Sevenfold Tornado | 青岚骑士·七重龙卷 | 青嵐騎士·七重龍捲 | ゲイルランサー・七連トルネード | 윈드 나이트・칠중 회오리 | Chevalier du vent - Tornade septuple | Windritter – Siebenfacher Tornado | Caballero del viento: Tornado Séptuple | Cavaleiro do Vento — Tornado Sétuplo | Wind Knight - Septuple Tornado | Gale Lancer·Tujuh Lapisan Tornado | ui/textures/rouge_icon/rogue_icon_entry088
### Execution Force
- Id: audit:EffectSources:season-talent-node:1103
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.skill-or-recount-targeted, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Execution Force | 诛势 | 誅勢 | 討勢 | 처형의 기세 | Force d'exécution | Vollstreckungsmacht | Fuerza de Ejecución | Força de Execução | ท่าสังหาร | Execution Momentum | ui/atlas/season_talent_icon/s2talent01_04
### Time-Slit
- Id: audit:EffectSources:season-talent-node:1104
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.offense-stat
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Time-Slit | 时隙 | 時隙 | 時の狭間 | 시간 균열 | Fissure temporelle | Zeitschlitz | Brecha Temporal | Fenda Temporal | Time Slot | Time Rift | ui/atlas/season_talent_icon/s2talent01_04
### Swift-Calc
- Id: audit:EffectSources:season-talent-node:1110
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.critical-damage-stat, component.offense-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Swift-Calc | 速算 | 암산 | Calcul rapide | Blitzrechnung | Cálculo Veloz | Cálculo Rápido | คำนวณไว | Swift Math | ui/atlas/season_talent_icon/s2talent01_05sel
### Phantom Arrow
- Id: audit:EffectSources:season-talent-node:1201
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.damage-modifier, component.offense-stat
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Phantom Arrow | 梦幻之箭 | 夢幻之箭 | 夢幻の矢 | 몽환의 화살 | Flèche fantôme | Phantompfeil | Flecha Fantasma | Arrow of Dream | Dream Arrow | ui/atlas/season_talent/s2talent03_01
### Dual Time
- Id: audit:EffectSources:season-talent-node:1202
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.damage-reduction, component.offense-stat
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: raw-attacker-vs-top-summoner, separate-tanked-or-healing-report, stat-snapshot-or-temp-attr
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Dual Time | 双时 | 雙時 | デュアルタイム | 이중 시공간 | Temps double | Doppelzeit | Tiempo Dual | Tempo Duplo | เวลาคู่ | ui/atlas/season_talent_icon/s2talent01_04
### Dreamarrow Storm
- Id: audit:EffectSources:season-talent-node:1203
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.skill-or-recount-targeted, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Dreamarrow Storm | 梦矢封暴 | 夢矢封暴 | 夢矢封殺 | 꿈 화살 폭풍 | Tempête de flèches oniriques | Traumpfeilsturm | Tormenta de Flechas Oníricas | Tempestade de Flechas Oníricas | ศรฝันผนึกพายุ | Rage Seal | ui/atlas/season_talent_icon/s2talent01_04
### Direwolf's Hunger
- Id: audit:EffectSources:talent:1106
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.hit-timing, component.offense-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Direwolf's Hunger | 魔狼之嗜 | 臣狼の爪 | 늑대 마수의 탐욕 | Faim du loup sinistre | Hunger des Schreckenswolfs | Hambre del Lobo Huargo | Fome do Lobo Atroz | Demon Wolf's Hunger | Demonic Wolf Hunger | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfspeedup | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Phantom Wolfstrike
- Id: audit:EffectSources:talent:1108
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.offense-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Phantom Wolfstrike | 幻影狼袭 | 幻影狼襲 | 幻影魔狼 | 환영 늑대 습격 | Frappe du loup fantôme | Phantomwolfsschlag | Golpe de Lobo Fantasma | Ataque do Lobo Fantasma | Phantom Wolf Assault | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_wolfswoop
### Falcon Raid
- Id: audit:EffectSources:talent:1118
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Falcon Raid | 鹰眼闪电破 | 鷹眼閃電破 | 臣鷹の閃撃 | 팔콘 섬광 돌진 | Raid du Faucon | Falkenangriff | Asalto del Halcón | Ataque do Falcão | Hawkeye Lightning Break | Eagleview Lightning Break | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_thunderbird02
### Lightfall
- Id: audit:EffectSources:talent:1122
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.critical-damage-stat, component.critical-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Lightfall | 光落 | 閃落 | 떨어지는 빛 | Chute de lumière | Lichtfall | Lluvia de Luz | Queda de Luz | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_skyhitcrilight
### Wildpack Spec
- Id: audit:EffectSources:talent:1126
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.hit-timing, component.offense-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Wildpack Spec | 驭兽流 | 馭獸流 | 狼弓型 | 야수 조련사 계열 | Spécialisation Meute Sauvage | Wildrudel-Spezialisierung | Especialización de Manada Salvaje | Especialização: Bando Selvagem | Beastmaster Build | Beastmaster | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_petbig
### Falconry Spec
- Id: audit:EffectSources:talent:1129
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.critical-stat, component.hit-timing, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Falconry Spec | 驯鹰流 | 馴鷹流 | 鷹弓型 | 맹금 조련사 계열 | Spécialisation Fauconnerie | Falknerei-Spezialisierung | Especialización de Cetrería | Especialização: Falcoaria | Falconer | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_skyhitget
### Steel Beak
- Id: audit:EffectSources:talent:1152
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Steel Beak | 钢制喙 | 鋼製喙 | 弓心 | 강철 부리 | Bec d'acier | Stahlschnabel | Pico de Acero | Bico de Aço | ui/atlas/talent_passive_11/gongjian1152
### Falcon Break
- Id: audit:EffectSources:talent:1158
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.damage-reduction, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Falcon Break | 猎鹰破式 | 獵鷹破式 | 破壊の臣鷹 | 팔콘 파식 | Percée du faucon | Falkenbruch | Ruptura del Halcón | Ruptura do Falcão | เหยี่ยวทำลาย | Hawk Break Form | ui/atlas/talent_passive_11/gongjian1158
### Lightforged Greatsword
- Id: audit:EffectSources:talent:1216
- Confidence: generated-component-audit
- Components: component.critical-stat, component.damage-reduction, component.elemental-stat, component.healing-or-lifesteal, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, separate-tanked-or-healing-report, stat-snapshot-or-temp-attr
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Lightforged Greatsword | 光明圣剑 | 光明聖劍 | 光明聖剣 | 광명 성검 | Espadon forgelumière | Lichtgeschmiedetes Großschwert | Mandoble Lumínico | Montante Forjada em Luz | Holy Sword of Light | Light Holysword | ui/atlas/talent_passive_12/jiandun1216 | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula.
### Holy Summon
- Id: audit:EffectSources:talent:1239
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.proc-damage, component.shield-or-barrier
- Behaviors: behavior.companion-or-summon, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Holy Summon | 圣光召唤 | 聖光召喚 | 성스러운 빛 소환 | Invocation sacrée | Heilige Beschwörung | Invocación Sagrada | Invocação Sagrada | อัญเชิญแสงศักดิ์สิทธิ์ | Holylight Summon | ui/atlas/talent_passive_12/jiandun1239
### Unmatched Raijin Dash
- Id: audit:EffectSources:talent:142
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.damage-reduction, component.elemental-stat
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: raw-attacker-vs-top-summoner, separate-tanked-or-healing-report, stat-snapshot-or-temp-attr
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Unmatched Raijin Dash | 无双飞雷神 | 無雙飛雷神 | 無双飛雷 | 무쌍 비뢰신 | Ruée de Raijin inégalée | Unübertroffener Raijin-Flitzer | Destello Raijin Inigualable | Investida de Raijin Inigualável | เทพสายฟ้าไร้คู่ | Peerless Flying Thunder God | ui/atlas/talent_passive_1/taidao142
### Moonstrike Spec
- Id: audit:EffectSources:talent:157
- Confidence: generated-component-audit
- Components: component.hit-timing, component.offense-stat
- Behaviors: behavior.companion-or-summon, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Moonstrike Spec | 月刃召唤流 | 月刃召喚流 | 月影型 | 월광의 낫 계열 | Spécialisation Frappe lunaire | Mondschlag-Spezialisierung | Especialización de Ataque Lunar | Especialização: Golpe Lunar | สายอัญเชิญ Moon Blade | Moonblade Summon | ui/atlas/talent_passive_1/talent_passive_icon_general_dps_sickleget
### Ice Revelation
- Id: audit:EffectSources:talent:203
- Confidence: generated-component-audit
- Components: component.elemental-damage, component.elemental-stat, component.offense-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Ice Revelation | 寒冰启示 | 寒冰啟示 | 氷の啓示 | 얼음의 계시 | Révélation de glace | Eis-Offenbarung | Revelación Gélida | Revelação de Gelo | การเปิดเผยแห่งน้ำแข็ง | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_doubleicearrow
### Cold Wind Convergence
- Id: audit:EffectSources:talent:211
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.elemental-damage, component.elemental-stat, component.proc-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cold Wind Convergence | 寒风凝聚 | 寒風凝聚 | 寒風の集約 | 냉기 응집 | Convergence des vents froids | Kaltwindkonvergenz | Convergencia de Viento Gélido | Convergência do Vento Gélido | Chilling Wind | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceenergyget | Exact localized name groups are used as runtime buff aliases only; they do not imply a damage formula. | Activation aliases map a talent/passive source row to the runtime buff window that enables it. They only expose uptime; they do not imply
### Boundless Frost
- Id: audit:EffectSources:talent:225
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.damage-modifier, component.elemental-damage, component.elemental-stat
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Boundless Frost | 玄冰无界 | 玄冰無界 | 玄氷無界 | 무한 미스틱 아이스 | Givre Infini | Grenzenloser Frost | Escarcha Ilimitada | Cristal de Gelo Ilimitado | Boundless Black Ice | ui/atlas/talent_passive_2/talent_passive_icon_general_dps_iceskyhit
### Marksman Rhapsody X1
- Id: audit:EffectSources:phantom-factor:3053120
- Confidence: generated-component-audit
- Components: component.hit-timing
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.skill-or-recount-targeted, predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | kuangxiangyinzi_s2_11_001 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman Rhapsody X2
- Id: audit:EffectSources:phantom-factor:3053130
- Confidence: generated-component-audit
- Components: component.damage-modifier
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | kuangxiangyinzi_s2_11_002 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman - Call of the Wild
- Id: audit:EffectSources:season-rogue-entry:247
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.elemental-stat
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Call of the Wild | 神射手·群兽光召 | 神射手·群獸光召 | ディバインアーチャー・群獣召光 | 디바인 아처・군수 광휘 소환 | Tireur d'élite - Appel de la nature | Scharfschütze – Ruf der Wildnis | Tirador: Llamada de lo Salvaje | Atirador de Elite — Chamado Selvagem | Markman - Beast Herd: Light Call | Divine Archer·Panggilan Cahaya Kawanan | ui/textures/rouge_icon/rogue_icon_entry047
### Marksman - Wolf's Focus
- Id: audit:EffectSources:season-rogue-entry:249
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman - Wolf's Focus | 神射手·狼唤凝神 | 神射手·狼喚凝神 | ディバインアーチャー・召狼専心 | 디바인 아처・늑대 집중 소환 | Tireur d'élite - Concentration du loup | Scharfschütze – Wolfsfokus | Tirador: Enfoque de Lobo | Atirador de Elite – Concentração do Lobo | Markman - Wolf Call: Focus | Divine Archer·Wolf Summoning Focus | ui/textures/rouge_icon/rogue_icon_entry049
### Valiant Heart
- Id: audit:EffectSources:talent:1124
- Confidence: generated-component-audit
- Components: component.damage-modifier
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Valiant Heart | 勇者之心 | 勇敢な心 | 영웅의 마음가짐 | Cœur Vaillant | Tapferes Herz | Corazón Valiente | Coração Valente | Heart of the Brave | Brave Heart | ui/atlas/talent_passive_11/talent_passive_icon_general_dps_petdamboss
### Skill CD
- Id: audit:EffectSources:talent:43
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource
- Behaviors: behavior.cooldown-resource
- Predicates: none
- Required evidence: none
- State: candidate-for-structured-component-promotion
- Action: Candidate for promotion once the source bridge is confirmed and tests cover the bucket.
- Text: Skill CD | 技能冷却 | 技能冷卻 | リキャスト | 스킬 쿨타임 | TdR de compétence | Fähigkeits-AZ | TdR de habilidad | Recarga de Habilidade | CD สกิล | Skill Cooldown | ui/atlas/weaponhero/new/common_icon13
### Shield DMG Reduction
- Id: audit:EffectSources:talent:48
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.shield-or-barrier
- Behaviors: behavior.static-or-selected-state-suspect
- Predicates: predicate.incoming-or-defense
- Required evidence: selected-loadout-or-static-state, separate-tanked-or-healing-report
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Shield DMG Reduction | 护盾减伤 | 護盾減傷 | バリアダメージ軽減 | 실드 대미지 감소 | Réduction de dégâts de bouclier | Schild-SCH-Reduktion | Reducción de DÑO de escudo | Redução de Dano de Escudo | ลด DMG โล่ | Shield DR | ui/atlas/weaponhero/new/common_icon04
### Lucky Crit
- Id: audit:EffectSources:buff-source:2110132
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.critical-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Lucky Crit | 幸运会心 | 幸運會心 | 幸運会心 | 행운 회심 | Critique porte-bonheur | Glücklicher Krit | Crítico de suerte | Crítico de Sorte | รวมจิตโชคดี | Luck Crit | 卷心菜精英1-主动 | ui/atlas/hud/buff/buff_blue_atk
### Stunt! Cabbage Blitz
- Id: audit:EffectSources:buff-source:3210171
- Confidence: generated-component-audit
- Components: component.proc-damage
- Behaviors: behavior.proc-buff, behavior.target-rank-conditional
- Predicates: predicate.skill-or-recount-targeted, predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Stunt! Cabbage Blitz | 卷心菜精英2-被动触发 | 绝技！卷心菜霹雳闪 | 絕技！捲心菜霹靂閃 | 絶技！甘藍稲妻落とし | 비기! 양배추 벽력 섬광 | Acrobatie ! Foudre du chou | Stunt! Kohlblitz | ¡Proeza! Bombardeo de Col | Proeza! Bombardeio Repolho | Ultimate! สายฟ้าฟาดกะหล่ำปลี | Ultimate! Cabbage Thunderbolt Flash | Name marks a passive-triggered row.

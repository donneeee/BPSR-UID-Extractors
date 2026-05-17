# Effect Component Worklist

This report classifies broad effect-description matches into component, behavior, predicate, and required-runtime-evidence buckets. It is a worklist, not parser truth.

## Summary

- Surface records classified: 20000
- Predicate-audit records classified: 321
- Total work items: 20321

### Confidence Counts

- ctb-string-discovery: 2550
- generated-bridge-surface: 4113
- generated-component-audit: 205
- generated-component-surface: 1068
- generated-source-audit: 116
- localization-discovery: 10547
- localization-effect-text: 1722

### Promotion State Counts

- candidate-for-structured-component-promotion: 6
- discovery-only-needs-bridge: 14819
- keep-out-of-offensive-damage-until-report-split: 256
- needs-component-parser: 4605
- needs-runtime-predicate-before-attribution: 254
- needs-runtime-window-before-attribution: 30
- needs-stat-state-before-attribution: 351

### Required Evidence Counts

- damage-id-or-recount-produced-row: 444
- focus-or-activation-window: 198
- incoming-attacker-monster-type: 16
- modifier-window-open-close: 2566
- raw-attacker-vs-top-summoner: 1440
- selected-loadout-or-static-state: 4872
- separate-tanked-or-healing-report: 1133
- source-player-or-party-host: 106
- stack-count-window: 1363
- stat-conversion-chain: 96
- stat-snapshot-or-temp-attr: 7564
- structured-source-row-bridge: 14819
- target-debuff-host-window: 158
- target-monster-type-per-hit: 1638

## Component Buckets

### component.damage-unspecified

- Count: 6421
- Top evidence: damage-id-or-recount-produced-row=5, modifier-window-open-close=210, raw-attacker-vs-top-summoner=50, selected-loadout-or-static-state=3980, separate-tanked-or-healing-report=67, source-player-or-party-host=10

- EffectSources.json [needs-component-parser]: produced-damage
- EffectSources.json [needs-component-parser]: produced-damage-row
- EffectSources.json [needs-component-parser]: damage-dealt
- EffectSources.json [needs-component-parser]: proc-damage
### component.stat-unspecified

- Count: 5067
- Top evidence: focus-or-activation-window=15, modifier-window-open-close=640, raw-attacker-vs-top-summoner=40, selected-loadout-or-static-state=307, separate-tanked-or-healing-report=133, stack-count-window=54

- EffectSources.json [needs-component-parser]: 物理攻擊額外+75，對精英及以上目標傷害+5%
- EffectSources.json [needs-component-parser]: 物理攻擊額外+75，對精英及以上目標傷害+5%
- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv1
- EffectSources.json [needs-component-parser]: 物攻+精英增伤Lv1
### component.unknown-effect

- Count: 4722
- Top evidence: damage-id-or-recount-produced-row=102, focus-or-activation-window=103, modifier-window-open-close=855, raw-attacker-vs-top-summoner=939, selected-loadout-or-static-state=51, separate-tanked-or-healing-report=34

- EffectSources.json [needs-component-parser]: source.companion-or-summon
- Marksman - Legendary Companion [needs-component-parser]: Marksman - Legendary Companion | 神射手·传奇同临 | 神射手·傳奇同臨 | ディバインアーチャー・伝説同臨 | 디바인 아처・전설 동행 | Tireur d'élite - Compagnon légendaire | Scharfschütze – Legendärer Begleiter | Tirador: Acompañante Legendario | Atirador de Elite — Companheiro Lendário | Markman - Legendary Resonance | Divine Archer·Legendary Bersatu | ui/texture
- Marksman - Demon Wolf Beast [needs-component-parser]: Marksman - Demon Wolf Beast | 神射手·魔狼归兽 | 神射手·魔狼歸獸 | ディバインアーチャー・魔狼獣化 | 디바인 아처・늑대 마수 귀환 | Tireur d'élite - Bête loup démon | Scharfschütze – Dämonenwolf-Bestie | Tirador: Bestia Lobo Demonio | Atirador de Elite — Besta Lobo Demoníaco | Markman - Direwolf Regression | Divine Archer·Serigala Magis Kembali | ui/textures/rou
- Marksman - Twin Talon Strike [needs-component-parser]: Marksman - Twin Talon Strike | 神射手·双鹰齐唤 | 神射手·雙鷹齊喚 | ディバインアーチャー・双鷹同召 | 디바인 아처・더블 팔콘 소환 | Tireur d'élite - Frappe de serres jumelles | Scharfschütze – Zwillingsklauenschlag | Tirador: Golpe de Garra Gemela | Atirador de Elite — Golpe de Garra Gêmea | Markman - Dual Falcon Summon | Divine Archer·Panggilan Dua Elang | ui/
### component.offense-stat

- Count: 1619
- Top evidence: damage-id-or-recount-produced-row=119, focus-or-activation-window=14, modifier-window-open-close=205, raw-attacker-vs-top-summoner=68, selected-loadout-or-static-state=281, separate-tanked-or-healing-report=131

- Cuisine - ATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
- Cuisine - ATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
- Cuisine - MATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
- Cuisine - MATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2
### component.damage-modifier

- Count: 944
- Top evidence: damage-id-or-recount-produced-row=11, focus-or-activation-window=6, modifier-window-open-close=370, raw-attacker-vs-top-summoner=148, selected-loadout-or-static-state=4, separate-tanked-or-healing-report=97

- Cuisine - ATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1 | Painfly Lv.2 | Fresh Soup Lv.1 | Fiery Pan-Seared Fish Lv.1
- Cuisine - ATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2 | Painfly Lv.3 | Fresh Soup Lv.2 | Fiery Pan-Seared Fish Lv.2
- Cuisine - MATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1 | Seabreeze Special Lv.2 | Spiced Lamb Rib Delight Lv.1 | Pepper Rib Strips Lv.1
- Cuisine - MATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2 | Seabreeze Special Lv.3 | Spiced Lamb Rib Delight Lv.2 | Pepper Rib Strips Lv.2
### component.combat-rating-stat

- Count: 661
- Top evidence: damage-id-or-recount-produced-row=64, focus-or-activation-window=31, modifier-window-open-close=101, raw-attacker-vs-top-summoner=23, selected-loadout-or-static-state=76, separate-tanked-or-healing-report=66

- Lucky Crit [needs-runtime-predicate-before-attribution]: Lucky Crit | 幸运会心 | 幸運會心 | 幸運会心 | 행운 회심 | Critique porte-bonheur | Glücklicher Krit | Crítico de suerte | Crítico de Sorte | รวมจิตโชคดี | Luck Crit | 卷心菜精英1-主动 | ui/atlas/hud/buff/buff_blue_atk
- Marksman - Tidal Fury [needs-runtime-predicate-before-attribution]: Marksman - Tidal Fury | 神射手·怒涛必暴 | 神射手·怒濤必暴 | ディバインアーチャー・怒涛会心 | 디바인 아처・치명적 격류 | Tireur d'élite - Fureur des marées | Scharfschütze – Gezeitenwut | Tirador: Furia de Marea | Atirador de Elite — Fúria da Maré | Markman - Surge: Guaranteed Crit | Divine Archer·Badai Kemarahan | ui/textures/rouge_icon/rogue_icon_entry052
- Marksman - Crit CD Reduction [keep-out-of-offensive-damage-until-report-split]: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Red
- Marksman - Devastating Bombardment [needs-runtime-predicate-before-attribution]: Marksman - Devastating Bombardment | 神射手·轰炸暴伤 | 神射手·轟炸暴傷 | ディバインアーチャー・爆撃増傷 | 디바인 아처・폭격 강타 | Tireur d'élite - Bombardement dévastateur | Scharfschütze – Verheerendes Bombardement | Tirador: Bombardeo Devastador | Atirador de Elite — Bombardeio Devastador | Markman - Bombardment: Crit DMG | Divine Archer·Ledakan Crit DMG
### component.defense-stat

- Count: 414
- Top evidence: damage-id-or-recount-produced-row=23, focus-or-activation-window=3, incoming-attacker-monster-type=16, modifier-window-open-close=84, raw-attacker-vs-top-summoner=20, selected-loadout-or-static-state=137

- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2
### component.elemental-stat

- Count: 392
- Top evidence: damage-id-or-recount-produced-row=75, focus-or-activation-window=11, modifier-window-open-close=136, raw-attacker-vs-top-summoner=85, selected-loadout-or-static-state=22, separate-tanked-or-healing-report=113

- Wind King's Pact [needs-runtime-predicate-before-attribution]: Wind King's Pact | 风王契约 | 風王契約 | 風の王の契約 | 바람 왕의 계약 | Pacte du Roi du Vent | Pakt des Windkönigs | Pacto del Rey del Viento | Pacto do Rei do Vento | พันธสัญญาจ้าววายุ | Wind King Covenant | ui/textures/rouge_icon/rogue_icon_entry087
- Wind Knight - Sever Wind Summoning [needs-runtime-predicate-before-attribution]: Wind Knight - Sever Wind Summoning | 青岚骑士·岚切召风 | 青嵐騎士·嵐切召風 | ゲイルランサー・嵐斬招風 | 윈드 나이트・난절 바람 소환 | Chevalier du vent - Invocation de vent tranchant | Windritter – Windtrennungsbeschwörung | Caballero del viento: Invocación de Viento Cortante | Cavaleiro do Vento — Invocação de Vento de Corte | Wind Knight - Tempest Slash Ga
- Lightforged Greatsword [keep-out-of-offensive-damage-until-report-split]: Lightforged Greatsword | 光明圣剑 | 光明聖劍 | 光明聖剣 | 광명 성검 | Espadon forgelumière | Lichtgeschmiedetes Großschwert | Mandoble Lumínico | Montante Forjada em Luz | Holy Sword of Light | Light Holysword | ui/atlas/talent_passive_12/jiandun1216 | Exact localized name groups are used as runtime buff aliases only; they do not impl
- Unmatched Raijin Dash [keep-out-of-offensive-damage-until-report-split]: Unmatched Raijin Dash | 无双飞雷神 | 無雙飛雷神 | 無双飛雷 | 무쌍 비뢰신 | Ruée de Raijin inégalée | Unübertroffener Raijin-Flitzer | Destello Raijin Inigualable | Investida de Raijin Inigualável | เทพสายฟ้าไร้คู่ | Peerless Flying Thunder God | ui/atlas/talent_passive_1/taidao142
### component.cooldown-or-resource

- Count: 291
- Top evidence: damage-id-or-recount-produced-row=95, focus-or-activation-window=30, modifier-window-open-close=82, raw-attacker-vs-top-summoner=91, separate-tanked-or-healing-report=87, source-player-or-party-host=24

- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman Stasis X2 [keep-out-of-offensive-damage-until-report-split]: Marksman Stasis X2 | 神射稳态X2 | 神射穩態X2 | ディバインアーチャー・恒常性X2 | 디바인 아처 안정X2 | Stase de Tireur d'élite X2 | Scharfschütze-Stase X2 | Estasis: Tirador X2 | Estase do Atirador​ de Elite X2 | Marksman Steady X2 | Divine Steady X2 | yinzi_s2_common_028 | Direct game-file ID links map child damage rows. Structured Dream DMG target
- Marksman - Crit CD Reduction [keep-out-of-offensive-damage-until-report-split]: Marksman - Crit CD Reduction | 神射手·暴击缩冷 | 神射手·暴擊縮冷 | ディバインアーチャー・会心リキャスト短縮 | 디바인 아처・치명적 냉기 | Tireur d'élite - Réduction de TdR critique | Scharfschütze – Krit-AZ-Verringerung | Tirador: Reducción de TdR de Crítico | Atirador de Elite — Redução de TR de Crítico | Markman - Crit Cooldown Reduction | Divine Archer·Crit Red
- Marksman - Devastating Bombardment [needs-runtime-predicate-before-attribution]: Marksman - Devastating Bombardment | 神射手·轰炸暴伤 | 神射手·轟炸暴傷 | ディバインアーチャー・爆撃増傷 | 디바인 아처・폭격 강타 | Tireur d'élite - Bombardement dévastateur | Scharfschütze – Verheerendes Bombardement | Tirador: Bombardeo Devastador | Atirador de Elite — Bombardeio Devastador | Markman - Bombardment: Crit DMG | Divine Archer·Ledakan Crit DMG
### component.proc-damage

- Count: 269
- Top evidence: damage-id-or-recount-produced-row=269, focus-or-activation-window=4, modifier-window-open-close=90, raw-attacker-vs-top-summoner=91, separate-tanked-or-healing-report=74, source-player-or-party-host=20

- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
- Marksman - Charged Execution [needs-runtime-predicate-before-attribution]: Marksman - Charged Execution | 神射手·聚能斩血 | 神射手·聚能斬血 | ディバインアーチャー・チャージ削命 | 디바인 아처・집중 참혈 | Tireur d'élite - Exécution chargée | Scharfschütze – Aufgeladene Hinrichtung | Tirador: Ejecución Cargada | Atirador de Elite — Execução Carregada | Markman - Charged Bloodslash | Divine Archer·Focus Pemotong Darah | ui/textures/rou
- Wide-area Thorns [needs-runtime-predicate-before-attribution]: Wide-area Thorns | 广域荆棘 | 廣域荊棘 | 広域の茨 | 광역 가시 | Épines de zone | Flächendornen | Espinas Expansivas | Espinhos em Área | Thorns ขอบเขตกว้าง | Wide Thorn | ui/atlas/talent_passive_5/fahuan544
### component.healing-or-lifesteal

- Count: 175
- Top evidence: damage-id-or-recount-produced-row=44, focus-or-activation-window=6, modifier-window-open-close=57, raw-attacker-vs-top-summoner=25, selected-loadout-or-static-state=7, separate-tanked-or-healing-report=175

- Lucky Phantom [keep-out-of-offensive-damage-until-report-split]: Lucky Phantom | 幸运幻影 | 幸運幻影 | 행운 환영 | Fantôme chanceux | Glücksphantom | Fantasma de la Suerte | Fantasma da Sorte | เงาลวงโชคดี | Luck Phantom | ui/textures/rouge_icon/rogue_icon_entry107
- Synergy Summon—Petrified Behemoth [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Petrified Behemoth | 协同召唤：石化巨兽 | 協同召喚：石化巨獸 | 連携召喚：石化巨獣 | 협동 소환: 석화 거대 몬스터 | Invocation Synergique - Béhémoth pétrifié | Synergie-Beschwörung – Versteinerter Behemoth | Invocación Sinérgica: Monstruo Petrificado | Invocação Sinérgica – Colosso Petrificado | อัญเชิญประสาน: อสูรยักษ์ศิลา | Sync Summon: Petr
- Synergy Summon—Brigand King [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Brigand King | 协同召唤：山贼之王 | 協同召喚：山賊之王 | 連携召喚：山賊王 | 협동 소환: 산적의 왕 | Invocation Synergique - Roi des Brigands | Synergie-Beschwörung – Brigantenkönig | Invocación Sinérgica: Rey Bandido | Invocação Sinérgica – Rei dos Bandidos | อัญเชิญประสาน: Brigand King | Sync Summon: Bandit King | ui/textures/rouge_icon/
- Guardian Synergy—Swarm [keep-out-of-offensive-damage-until-report-split]: Guardian Synergy—Swarm | 守护协同：蜂群 | 守護協同：蜂群 | 防御連携：ミーンの群れ | 협동 수호: 벌떼 | Synergie Gardienne - Essaim | Wächtersynergie – Schwarm | Sinergia de Guardián: Enjambre | Sinergia de Guardião – Enxame | ประสานคุ้มกัน: ฝูงผึ้ง | Guardian Sync: Swarm | ui/textures/rouge_icon/rogue_icon_entry128
### component.damage-reduction

- Count: 170
- Top evidence: damage-id-or-recount-produced-row=22, incoming-attacker-monster-type=16, modifier-window-open-close=12, raw-attacker-vs-top-summoner=11, selected-loadout-or-static-state=43, separate-tanked-or-healing-report=170

- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1 | Shroomfish Stew Lv.2 | Buttermelt Roast Lv.2 | Honey Fish Delight Lv.1 | Salt-Baked Lamb Ribs Lv.1 | Windy Seafood Chowder Lv.1 | Scorching Spicy Ribs Lv.1
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2 | Shroomfish Stew Lv.3 | Buttermelt Roast Lv.3 | Honey Fish Delight Lv.2 | Salt-Baked Lamb Ribs Lv.2 | Windy Seafood Chowder Lv.2 | Scorching Spicy Ribs Lv.2
- Cuisine - Armor + Elite DMG Reduction Lv.1 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1
- Cuisine - Armor + Elite DMG Reduction Lv.2 [keep-out-of-offensive-damage-until-report-split]: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2
### component.shield-or-barrier

- Count: 138
- Top evidence: damage-id-or-recount-produced-row=18, modifier-window-open-close=56, raw-attacker-vs-top-summoner=15, selected-loadout-or-static-state=4, separate-tanked-or-healing-report=138, source-player-or-party-host=12

- Shadow Veil [keep-out-of-offensive-damage-until-report-split]: Shadow Veil | 敌影之盾 | 敵影之盾 | 敵影の盾 | 대군 방패 | Voile d'ombre | Schatten-Schleier | Velo Sombrío | Véu de Sombra | Shadow Shield | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk03
- Holy Summon [keep-out-of-offensive-damage-until-report-split]: Holy Summon | 圣光召唤 | 聖光召喚 | 성스러운 빛 소환 | Invocation sacrée | Heilige Beschwörung | Invocación Sagrada | Invocação Sagrada | อัญเชิญแสงศักดิ์สิทธิ์ | Holylight Summon | ui/atlas/talent_passive_12/jiandun1239
- Rage Burst improvement [keep-out-of-offensive-damage-until-report-split]: Rage Burst improvement | 怒爆精进 | 怒爆精進 | 憤怒の剛撃［強化］ | 분노 폭발 정진 | Amélioration d'Explosion de rage | Wutausbruch-Verbesserung | Mejora de Estallido de Furia | Aprimoramento de Explosão de Fúria | การปรับปรุงการระเบิดแห่งความโกรธ | Rage Burst Mastery | ui/atlas/talent_passive_9/weiren941
- Shield DMG Reduction [keep-out-of-offensive-damage-until-report-split]: Shield DMG Reduction | 护盾减伤 | 護盾減傷 | バリアダメージ軽減 | 실드 대미지 감소 | Réduction de dégâts de bouclier | Schild-SCH-Reduktion | Reducción de DÑO de escudo | Redução de Dano de Escudo | ลด DMG โล่ | Shield DR | ui/atlas/weaponhero/new/common_icon04
### component.health-stat

- Count: 102
- Top evidence: damage-id-or-recount-produced-row=16, modifier-window-open-close=40, raw-attacker-vs-top-summoner=6, separate-tanked-or-healing-report=102, source-player-or-party-host=10, stack-count-window=28

- english [discovery-only-needs-bridge]: Effect: HP + /s for 30m . Reusing stacks duration, up to 720m [Up to 5% of current max HP].
- indonesian [discovery-only-needs-bridge]: Sebuah Tour Song yang dimainkan sambil bergerak. Selama pertunjukan berlangsung, pulihkan HP rekan secara berkelanjutan. Pada saat yang sama, berikan Magic Damage kepada musuh di sekitar. Setiap kali heal 1 rekan, Healing Effect + 6% , maks. + 30% ; setiap kali mengenai 1 musuh, DMG + 6% , maks. 30% . Strategi: Efek He
- indonesian [discovery-only-needs-bridge]: Saat berada dalam status Flame Fantasy , Lucky Chance dari semua sumber meningkat 50% , dan DR + 25% . Paused Healing : Jika tidak mengakibatkan DMG terhadap target selama 5 detik, Normal Attack yang kamu lancarkan akan memulihkan HP hingga 10 rekan (rekan tim akan diprioritaskan). Total pemulihan dari empat tahap sera
- english [discovery-only-needs-bridge]: Corroding Seed: In Hard Mode and above, the Erosion Bloom Afterimage plants Corroding Seeds. After a long incubation period, they bloom, spreading Corroding Seed energy across the arena, reducing players' ATK and Max HP. Corroding Seeds can only be destroyed by Arc Slash. Strategy: Place the Erosion Bloom's Seal togeth

## Behavior Buckets

### behavior.static-or-selected-state-suspect

- Count: 13479
- Top evidence: selected-loadout-or-static-state=4872, separate-tanked-or-healing-report=478, stat-snapshot-or-temp-attr=5679, structured-source-row-bridge=8607

- Shield DMG Reduction [keep-out-of-offensive-damage-until-report-split]: Shield DMG Reduction | 护盾减伤 | 護盾減傷 | バリアダメージ軽減 | 실드 대미지 감소 | Réduction de dégâts de bouclier | Schild-SCH-Reduktion | Reducción de DÑO de escudo | Redução de Dano de Escudo | ลด DMG โล่ | Shield DR | ui/atlas/weaponhero/new/common_icon04
- Crit Chance [needs-stat-state-before-attribution]: Crit Chance | 暴击几率 | 暴擊機率 | 会心率 | 치명타 확률 | Chances de coups critiques | Krit-Chance | Probabilidad de crítico | Chance de Crítico | โอกาส CRIT | Critical Chance | ui/atlas/weaponhero/new/common_icon12
- Attack Speed [needs-stat-state-before-attribution]: Attack Speed | 攻击速度 | 攻擊速度 | 攻撃速度 | 공격 속도 | Vitesse d'attaque | Angriffsgeschwindigkeit | VEL de ATQ | Velocidade de Ataque | ความเร็วโจมตี | ui/atlas/weaponhero/new/common_icon13
- Crit DMG [needs-stat-state-before-attribution]: Crit DMG | 暴击伤害 | 暴擊傷害 | 会心ダメージ | 치명타 대미지 | Dégâts critiques | Krit-SCH | DÑO crítico | Dano Crítico | CRIT DMG | ui/atlas/weaponhero/new/common_icon12
### behavior.timed-window

- Count: 2566
- Top evidence: damage-id-or-recount-produced-row=117, focus-or-activation-window=8, modifier-window-open-close=2566, raw-attacker-vs-top-summoner=174, separate-tanked-or-healing-report=247, source-player-or-party-host=39

- english [discovery-only-needs-bridge]: Effect: ATK + , DMG to Elites or stronger enemies + for 30m . Reusing stacks duration, up to 720m [Up to 30% of current Basic ATK].
- english [discovery-only-needs-bridge]: Effect: MATK + , DMG to Elites or stronger enemies + for 30m Reusing stacks duration, up to 720m [Up to 30% of current Basic MATK]
- Marksman Rhapsody X1 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | For 15 seconds after casting Wildcall, the Companion's Attack SPD +. Wild Wolf - T
- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
### behavior.target-rank-conditional

- Count: 1638
- Top evidence: damage-id-or-recount-produced-row=23, focus-or-activation-window=3, incoming-attacker-monster-type=16, modifier-window-open-close=118, raw-attacker-vs-top-summoner=108, separate-tanked-or-healing-report=118

- Marksman Rhapsody X1 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | kuangxiangyinzi_s2_11_001 | Direct game-file ID links map child damage rows. Struc
- Marksman - Storm Tamer [needs-runtime-predicate-before-attribution]: Marksman - Storm Tamer | 神射手·暴风驯兽 | 神射手·暴風馴獸 | ディバインアーチャー・暴風制獣 | 디바인 아처・폭풍 조련 | Tireur d'élite - Dompteur de tempête | Scharfschütze – Sturmbändiger | Tirador: Domador de Tormentas | Atirador de Elite — Domador de Tempestades | Markman - Tempest Taming | Divine Archer·Penjinak Storm | ui/textures/rouge_icon/rogue_icon_
- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
### behavior.companion-or-summon

- Count: 1440
- Top evidence: damage-id-or-recount-produced-row=251, focus-or-activation-window=8, modifier-window-open-close=174, raw-attacker-vs-top-summoner=1440, separate-tanked-or-healing-report=72, source-player-or-party-host=23

- Marksman Rhapsody X1 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | kuangxiangyinzi_s2_11_001 | Direct game-file ID links map child damage rows. Struc
- Marksman - Storm Tamer [needs-runtime-predicate-before-attribution]: Marksman - Storm Tamer | 神射手·暴风驯兽 | 神射手·暴風馴獸 | ディバインアーチャー・暴風制獣 | 디바인 아처・폭풍 조련 | Tireur d'élite - Dompteur de tempête | Scharfschütze – Sturmbändiger | Tirador: Domador de Tormentas | Atirador de Elite — Domador de Tempestades | Markman - Tempest Taming | Divine Archer·Penjinak Storm | ui/textures/rouge_icon/rogue_icon_
- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Marksman - Eagle-Eyed Focus [needs-runtime-predicate-before-attribution]: Marksman - Eagle-Eyed Focus | 神射手·鹰击延凝 | 神射手·鷹擊延凝 | ディバインアーチャー・鷹撃延長 | 디바인 아처・팔콘 공격 응결 | Tireur d'élite - Concentration d'aigle | Scharfschütze – Adleraugen-Fokus | Tirador: Enfoque de Ojo de Águila | Atirador de Elite — Concentração Olhos de Águia | Markman - Falcon Strike: Linger | Divine Archer·Serangan Elang yang Te
### behavior.stack-or-ramp

- Count: 1363
- Top evidence: damage-id-or-recount-produced-row=66, focus-or-activation-window=2, modifier-window-open-close=307, raw-attacker-vs-top-summoner=28, separate-tanked-or-healing-report=137, source-player-or-party-host=29

- english [discovery-only-needs-bridge]: Effect: ATK + , DMG to Elites or stronger enemies + for 30m . Reusing stacks duration, up to 720m [Up to 30% of current Basic ATK].
- english [discovery-only-needs-bridge]: Effect: MATK + , DMG to Elites or stronger enemies + for 30m Reusing stacks duration, up to 720m [Up to 30% of current Basic MATK]
- chinese [discovery-only-needs-bridge]: 可用于激活或者进阶姆克尖兵的战斗幻想技能：绝技！追猎猛斩。 绝技！追猎猛斩 召唤 精英·姆克尖兵，持续追击目标，造成 物理伤害 。 技能释放后立刻获得满层被动效果，且 20秒 内层数视为翻倍。
- chinese [discovery-only-needs-bridge]: 召唤 精英·姆克尖兵，持续追击目标，造成 物理伤害 。 技能释放后立刻获得满层被动效果，且 20秒 内层数视为翻倍。
### behavior.threshold-or-state-conditional

- Count: 516
- Top evidence: damage-id-or-recount-produced-row=125, focus-or-activation-window=18, modifier-window-open-close=160, raw-attacker-vs-top-summoner=92, separate-tanked-or-healing-report=166, source-player-or-party-host=36

- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
- Frost Mage Rhapsody X4 [needs-runtime-predicate-before-attribution]: Frost Mage Rhapsody X4 | 冰魔狂想X4.G1 | フロストメイジ・狂想X4.G1 | 프로스트 메이지 광상X4 | Rhapsodie de Mage de givre X4 | Frostmagier-Rhapsodie X4 | Rapsodia: Mago gélido X4 | Rapsódia do Mago do Gelo X4 | Frost Rhapsody X4 | Frost Rhapsody X4.G1 | When casting Meteor Storm, a Meteor Storm is simultaneously summoned at the location of Bl
- english [discovery-only-needs-bridge]: When a Lucky Strike is launched, the Lucky Effect may be activated: Launches a meteor strike, dealing Magic DMG equal to ATK (CD: 0.3s ). Tier 5: Each time a meteor is summoned, immediately reduces the CD of this skill by 0.5s . Triggers at most once per second .
- english [discovery-only-needs-bridge]: Adventurers can enhance their combat strength by equipping gear. Gear Slot: There are 11 equipment slots in total: Weapon, Helmet, Armor, Gauntlets, Boots, Necklace, Earrings, Ring, Charm, Bracelet (L), and Bracelet (R). Gear Effect: Gear effects are categorized into Basic Attributes, Advanced Attributes (which include
### behavior.proc-buff

- Count: 405
- Top evidence: damage-id-or-recount-produced-row=101, focus-or-activation-window=14, modifier-window-open-close=171, raw-attacker-vs-top-summoner=39, separate-tanked-or-healing-report=149, source-player-or-party-host=37

- Summon on Crit [needs-runtime-predicate-before-attribution]: Summon on Crit | 暴击召唤 | 暴擊召喚 | 会心召喚 | 치명타 소환 | Invocation sur Critique | Beschwörung bei Krit | Invocación por Crítico | Invocação por Crítico | อัญเชิญ CRIT | Critical Summon | ui/textures/rouge_icon/rogue_icon_entry072
- Stunt! Cabbage Blitz [needs-runtime-predicate-before-attribution]: Stunt! Cabbage Blitz | 卷心菜精英2-被动触发 | 绝技！卷心菜霹雳闪 | 絕技！捲心菜霹靂閃 | 絶技！甘藍稲妻落とし | 비기! 양배추 벽력 섬광 | Acrobatie ! Foudre du chou | Stunt! Kohlblitz | ¡Proeza! Bombardeo de Col | Proeza! Bombardeio Repolho | Ultimate! สายฟ้าฟาดกะหล่ำปลี | Ultimate! Cabbage Thunderbolt Flash | Name marks a passive-triggered row.
- Heavy Guardian - Twentyfold Rockfall [needs-runtime-predicate-before-attribution]: Heavy Guardian - Twentyfold Rockfall | 巨刃守护者·二十岩陨 | 巨刃守護者·二十岩隕 | ヘヴィガーディアン・20ロックフォール | 헤비 가디언・이십중 암석 낙하 | Gardien imposant - Éboulement vingtuplé | Schwerer Wächter – Zwanzigfacher Steinschlag | Guardián pesado: Caída de Rocas x20 | Guardião Pesado — Queda de Rochas Víntupla | Heavy Guardian - 20-Fold Rockfall | Heavy 
- Marksman Rhapsody X4 [needs-runtime-predicate-before-attribution]: Marksman Rhapsody X4 | 神射狂想X4.G1 | ディバインアーチャー・狂想X4.G1 | 디바인 아처 광상X4 | Rhapsodie de Tireur d'élite X4 | Scharfschützen-Rhapsodie X4 | Rapsodia: Tirador X4 | Rapsódia do Atirador​ de Elite X4 | Markman Rhapsody X4 | Divine Rhapsody X4.G1 | Casting Powerdraw triggers Radiance Barrage. Casting Radiance Barrage triggers Pow
### behavior.proc-damage

- Count: 374
- Top evidence: damage-id-or-recount-produced-row=374, focus-or-activation-window=7, modifier-window-open-close=117, raw-attacker-vs-top-summoner=199, separate-tanked-or-healing-report=81, source-player-or-party-host=27

- Summon on Crit [needs-runtime-predicate-before-attribution]: Summon on Crit | 暴击召唤 | 暴擊召喚 | 会心召喚 | 치명타 소환 | Invocation sur Critique | Beschwörung bei Krit | Invocación por Crítico | Invocação por Crítico | อัญเชิญ CRIT | Critical Summon | ui/textures/rouge_icon/rogue_icon_entry072
- Synergy Summon—Petrified Behemoth [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Petrified Behemoth | 协同召唤：石化巨兽 | 協同召喚：石化巨獸 | 連携召喚：石化巨獣 | 협동 소환: 석화 거대 몬스터 | Invocation Synergique - Béhémoth pétrifié | Synergie-Beschwörung – Versteinerter Behemoth | Invocación Sinérgica: Monstruo Petrificado | Invocação Sinérgica – Colosso Petrificado | อัญเชิญประสาน: อสูรยักษ์ศิลา | Sync Summon: Petr
- Synergy Summon—Brigand King [keep-out-of-offensive-damage-until-report-split]: Synergy Summon—Brigand King | 协同召唤：山贼之王 | 協同召喚：山賊之王 | 連携召喚：山賊王 | 협동 소환: 산적의 왕 | Invocation Synergique - Roi des Brigands | Synergie-Beschwörung – Brigantenkönig | Invocación Sinérgica: Rey Bandido | Invocação Sinérgica – Rei dos Bandidos | อัญเชิญประสาน: Brigand King | Sync Summon: Bandit King | ui/textures/rouge_icon/
- Frost Mage - Final Meteor [needs-runtime-predicate-before-attribution]: Frost Mage - Final Meteor | 冰魔导师·陨星终召 | 冰魔導師·隕星終召 | フロストメイジ・隕星終臨 | 프로스트 메이지・유성 최종 소환 | Mage de givre - Météore final | Frostmagier – Finaler Meteor | Mago gélido: Meteorito Final | Mago do Gelo — Meteoro Final | Frost Mage - Meteor Final Summons | Frost Mage·Meteor Terminus Summon | ui/textures/rouge_icon/rogue_icon_en
### behavior.cooldown-resource

- Count: 335
- Top evidence: damage-id-or-recount-produced-row=81, focus-or-activation-window=36, incoming-attacker-monster-type=6, modifier-window-open-close=104, raw-attacker-vs-top-summoner=56, separate-tanked-or-healing-report=110

- Marksman - Falcon's Gift [needs-runtime-predicate-before-attribution]: Marksman - Falcon's Gift | 神射手·猎鹰回能 | 神射手·獵鷹回能 | ディバインアーチャー・臣鷹回復 | 디바인 아처・팔콘 에너지 회복 | Tireur d'élite - Don du faucon | Scharfschütze – Geschenk des Falken | Tirador: Talento de Halcón | Atirador de Elite — Presente do Falcão | Markman - Falcon Energy Regen | Divine Archer·Hawk Energy Restore | ui/textures/rouge_icon/ro
- Cuisine - ATK + DMG to Elites Lv.1 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.1 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
- Cuisine - ATK + DMG to Elites Lv.2 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
- Cuisine - ATK + DMG to Elites Lv.3 [needs-runtime-predicate-before-attribution]: Cuisine - ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### behavior.focus-gated

- Count: 198
- Top evidence: damage-id-or-recount-produced-row=7, focus-or-activation-window=198, modifier-window-open-close=8, raw-attacker-vs-top-summoner=8, separate-tanked-or-healing-report=9, source-player-or-party-host=1

- Marksman Rhapsody X2 [needs-component-parser]: Marksman Rhapsody X2 | 神射狂想X2.G1 | ディバインアーチャー・狂想X2.G1 | 디바인 아처 광상X2 | Rhapsodie de Tireur d'élite X2 | Scharfschützen-Rhapsodie X2 | Rapsodia: Tirador X2 | Rapsódia do Atirador​ de Elite X2 | Markman Rhapsody X2 | Divine Rhapsody X2.G1 | While Focus is active, Class Skill damage is increased by an amount equal to: Comp
- Marksman X8 [needs-component-parser]: Marksman X8 | 神射X8 | ディバインアーチャーX8 | 디바인 아처X8 | Tireur d'élite X8 | Scharfschütze X8 | Tirador X8 | Atirador de Elite X8 | Divine X8 | During Torrent Volley, Focus duration is paused; Torrent Volley Dream DMG + | 怒涛射击施放期间精神凝聚持续时间停滞；怒涛射击梦境伤害+ | 怒濤射擊施放期間精神凝聚持續時間停滯；怒濤射擊夢境傷害+ | レイジショット発動中、メンタルフォーカスの持続時間は停止する。レイジショットの夢界ダメージ+
- Marksman Stasis X1 [keep-out-of-offensive-damage-until-report-split]: Marksman Stasis X1 | 神射稳态X1 | 神射穩態X1 | ディバインアーチャー・恒常性X1 | 디바인 아처 안정X1 | Stase de Tireur d'élite X1 | Scharfschütze-Stase X1 | Estasis: Tirador X1 | Estase do Atirador​ de Elite X1 | Marksman Steady X1 | Divine Steady X1 | During Focus, Dream DMG Resistance + | 精神凝聚持续期间，梦境伤害减免+ | 精神凝聚持續期間，夢境傷害減免+ | メンタルフォーカスの有効中、夢界ダメージ軽
- chinese [discovery-only-needs-bridge]: 次元崩坏：裂隙崩裂后，卡特格里夫对场景中所有玩家造成持续高额伤害，在正确的次元裂隙位置会形成保护罩提供大量伤害减免效果。 技巧攻略：想象次元和现实次元的玩家，需要集合后再进行次元逃离，否则会受到高额伤害。治疗注意对队友进行集中治疗。
### behavior.target-debuff

- Count: 158
- Top evidence: damage-id-or-recount-produced-row=13, focus-or-activation-window=2, modifier-window-open-close=29, raw-attacker-vs-top-summoner=3, separate-tanked-or-healing-report=110, source-player-or-party-host=5

- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Armor +400, DMG taken from Elites or stronger enemies -5%
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Armor +400, DMG taken from Elites or stronger enemies -5%
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Armor +400, DMG taken from Elites or stronger enemies -5%
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Armor +640, DMG taken from Elites or stronger enemies -10%
### behavior.party-or-external

- Count: 106
- Top evidence: damage-id-or-recount-produced-row=27, focus-or-activation-window=1, modifier-window-open-close=39, raw-attacker-vs-top-summoner=23, separate-tanked-or-healing-report=43, source-player-or-party-host=106

- Group Suppress [needs-runtime-predicate-before-attribution]: Group Suppress | 群敌压制 | 群敵壓制 | 衆敵抑圧 | 적군 제압 | Suppression de groupe | Gruppenunterdrückung | Supresión Grupal | Supressão em Grupo | Suppression of Enemies | Enemy Suppression | ui/atlas/talent_passive_9/talent_passive_icon_tank_bk04
- Nature's Ally [needs-runtime-predicate-before-attribution]: Nature's Ally | 自然盟友 | 自然の友 | 자연 맹우 | Allié de la Nature | Verbündeter der Natur | Aliado de la Naturaleza | Aliado da Natureza | ฝ่ายเราธรรมชาติ | Natural Ally | ui/textures/rouge_icon/rogue_icon_entry099
- Team Luck & Crit [needs-stat-state-before-attribution]: Team Luck & Crit | 极·全队幸暴 | 極·全隊幸暴 | 極・幸運会心 | 극・팀 전체 행운 치명타 | Chance et critique d'équipe | Team-Glück & Krit | Crítico y suerte grupal | Sorte e Crítico da Equipe | Ultimate - Team Crit | 【同调】 | ui/atlas/mod_effect/mod_effect_icon_017
- english [discovery-only-needs-bridge]: Ally Special Effects Visibility
### behavior.conversion-or-indirect-stat

- Count: 96
- Top evidence: damage-id-or-recount-produced-row=16, focus-or-activation-window=2, modifier-window-open-close=48, raw-attacker-vs-top-summoner=9, separate-tanked-or-healing-report=39, source-player-or-party-host=10

- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Deals additional damage based on a percentage of Defense during the duration
- EffectSources.json [keep-out-of-offensive-damage-until-report-split]: Deals additional damage based on a percentage of Defense during the duration
- EffectSources.json [needs-runtime-window-before-attribution]: Increases Crit Rate and Crit DMG during the duration
- EffectSources.json [needs-runtime-window-before-attribution]: Increases Crit Rate and Crit DMG during the duration

## Priority Rows

### Marksman Rhapsody X1
- Id: audit:EffectSources:phantom-factor:3053120
- Confidence: generated-component-audit
- Components: component.hit-timing, component.seasonal-factor-damage
- Behaviors: behavior.companion-or-summon, behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.skill-or-recount-targeted, predicate.source-companion-or-summon, predicate.target-monster-rank
- Required evidence: raw-attacker-vs-top-summoner, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman Rhapsody X1 | 神射狂想X1.G1 | ディバインアーチャー・狂想X1.G1 | 디바인 아처 광상X1 | Rhapsodie de Tireur d'élite X1 | Scharfschützen-Rhapsodie X1 | Rapsodia: Tirador X1 | Rapsódia do Atirador​ de Elite X1 | Markman Rhapsody X1 | Divine Rhapsody X1.G1 | kuangxiangyinzi_s2_11_001 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
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
- Id: audit:ConsumableBuffBridge:food-buff:2032161
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ATK + DMG to Elites Lv.1
### Cuisine - ATK + DMG to Elites Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032162
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ATK + DMG to Elites Lv.2
### Cuisine - ATK + DMG to Elites Lv.3
- Id: audit:ConsumableBuffBridge:food-buff:2032163
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv3 | ATK + DMG to Elites Lv.3
### Cuisine - ATK + DMG to Elites Lv.4
- Id: audit:ConsumableBuffBridge:food-buff:2032164
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv4 | ATK + DMG to Elites Lv.4
### Cuisine - ATK + DMG to Elites Lv.5
- Id: audit:ConsumableBuffBridge:food-buff:2032165
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv5 | ATK + DMG to Elites Lv.5
### Cuisine - ATK + DMG to Elites Lv.6
- Id: audit:ConsumableBuffBridge:food-buff:2032166
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv6 | ATK + DMG to Elites Lv.6
### Cuisine - MATK + DMG to Elites Lv.1
- Id: audit:ConsumableBuffBridge:food-buff:2032171
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | MATK + DMG to Elites Lv.1
### Cuisine - MATK + DMG to Elites Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032172
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | MATK + DMG to Elites Lv.2
### Cuisine - MATK + DMG to Elites Lv.3
- Id: audit:ConsumableBuffBridge:food-buff:2032173
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv3 | MATK + DMG to Elites Lv.3
### Cuisine - MATK + DMG to Elites Lv.4
- Id: audit:ConsumableBuffBridge:food-buff:2032174
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv4 | MATK + DMG to Elites Lv.4
### Cuisine - MATK + DMG to Elites Lv.5
- Id: audit:ConsumableBuffBridge:food-buff:2032175
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv5 | MATK + DMG to Elites Lv.5
### Cuisine - MATK + DMG to Elites Lv.6
- Id: audit:ConsumableBuffBridge:food-buff:2032176
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv6 | MATK + DMG to Elites Lv.6
### Cuisine - Armor + Elite DMG Reduction Lv.1
- Id: audit:ConsumableBuffBridge:food-buff:2032181
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | Armor + Elite DMG Reduction Lv.1
### Cuisine - Armor + Elite DMG Reduction Lv.2
- Id: audit:ConsumableBuffBridge:food-buff:2032182
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | Armor + Elite DMG Reduction Lv.2
### Cuisine - Armor + Elite DMG Reduction Lv.3
- Id: audit:ConsumableBuffBridge:food-buff:2032183
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv3 | Armor + Elite DMG Reduction Lv.3
### Cuisine - Armor + Elite DMG Reduction Lv.4
- Id: audit:ConsumableBuffBridge:food-buff:2032184
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv4 | Armor + Elite DMG Reduction Lv.4
### Cuisine - Armor + Elite DMG Reduction Lv.5
- Id: audit:ConsumableBuffBridge:food-buff:2032185
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv5 | Armor + Elite DMG Reduction Lv.5
### Cuisine - Armor + Elite DMG Reduction Lv.6
- Id: audit:ConsumableBuffBridge:food-buff:2032186
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv6 | Armor + Elite DMG Reduction Lv.6
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
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.1 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032162
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.3
- Id: audit:EffectSources:buff-source:2032163
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.4
- Id: audit:EffectSources:buff-source:2032164
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.5
- Id: audit:EffectSources:buff-source:2032165
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - ATK + DMG to Elites Lv.6
- Id: audit:EffectSources:buff-source:2032166
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - ATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 物攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | ATK + DMG to Elites Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.1
- Id: audit:EffectSources:buff-source:2032171
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv1 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.1 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.2
- Id: audit:EffectSources:buff-source:2032172
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv2 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.3
- Id: audit:EffectSources:buff-source:2032173
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv3 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.4
- Id: audit:EffectSources:buff-source:2032174
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv4 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.5
- Id: audit:EffectSources:buff-source:2032175
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv5 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - MATK + DMG to Elites Lv.6
- Id: audit:EffectSources:buff-source:2032176
- Confidence: generated-component-audit
- Components: component.damage-modifier, component.offense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.global, predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: stat-snapshot-or-temp-attr, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Cuisine - MATK + DMG to Elites Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 魔攻+精英增伤Lv6 | ui/atlas/buff/buff_food_up | MATK + DMG to Elites Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.1
- Id: audit:EffectSources:buff-source:2032181
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.1 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv1 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.1 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.2
- Id: audit:EffectSources:buff-source:2032182
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.2 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv2 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.2 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.3
- Id: audit:EffectSources:buff-source:2032183
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.3 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv3 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.3 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.4
- Id: audit:EffectSources:buff-source:2032184
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.4 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv4 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.4 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.5
- Id: audit:EffectSources:buff-source:2032185
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.5 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv5 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.5 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
### Cuisine - Armor + Elite DMG Reduction Lv.6
- Id: audit:EffectSources:buff-source:2032186
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.defense-stat
- Behaviors: behavior.cooldown-resource, behavior.target-rank-conditional
- Predicates: predicate.attacker-monster-rank, predicate.global, predicate.incoming-or-defense, predicate.target-monster-rank
- Required evidence: incoming-attacker-monster-type, separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Cuisine - Armor + Elite DMG Reduction Lv.6 | 料理 | 요리 | Cuisine | Kochkunst | Cocina | Culinária | ทำอาหาร | 护甲+精英减伤Lv6 | ui/atlas/buff/buff_food_up | Armor + Elite DMG Reduction Lv.6 | Runtime food buff has a direct BuffTable description/value row, but no exact consumed item row was proven from the current item-use bridge.
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
### Marksman X4
- Id: audit:EffectSources:phantom-factor:3053040
- Confidence: generated-component-audit
- Components: component.critical-damage-stat, component.seasonal-factor-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.skill-or-recount-targeted, predicate.target-monster-rank
- Required evidence: target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman X4 | 神射X4 | ディバインアーチャーX4 | 디바인 아처X4 | Tireur d'élite X4 | Scharfschütze X4 | Tirador X4 | Atirador de Elite X4 | Divine X4 | yinzi_s2_11_004 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman X9
- Id: audit:EffectSources:phantom-factor:3053090
- Confidence: generated-component-audit
- Components: component.hit-timing, component.seasonal-factor-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.skill-or-recount-targeted, predicate.target-monster-rank
- Required evidence: target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Marksman X9 | 神射X9 | ディバインアーチャーX9 | 디바인 아처X9 | Tireur d'élite X9 | Scharfschütze X9 | Tirador X9 | Atirador de Elite X9 | Divine X9 | yinzi_s2_11_009 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman Stasis X1
- Id: audit:EffectSources:phantom-factor:3059160
- Confidence: generated-component-audit
- Components: component.damage-reduction, component.seasonal-factor-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.outgoing-damage, predicate.target-monster-rank
- Required evidence: separate-tanked-or-healing-report, target-monster-type-per-hit
- State: keep-out-of-offensive-damage-until-report-split
- Action: Keep this out of the offensive modifier view unless building incoming damage, shield, or healing attribution.
- Text: Marksman Stasis X1 | 神射稳态X1 | 神射穩態X1 | ディバインアーチャー・恒常性X1 | 디바인 아처 안정X1 | Stase de Tireur d'élite X1 | Scharfschütze-Stase X1 | Estasis: Tirador X1 | Estase do Atirador​ de Elite X1 | Marksman Steady X1 | Divine Steady X1 | yinzi_s2_common_027 | Direct game-file ID links map child damage rows. Structured Dream DMG target clauses from localized factor descriptions map parent Recount rows as description-target evidence, not formula evidence.
### Marksman Stasis X2
- Id: audit:EffectSources:phantom-factor:3059170
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.damage-reduction, component.physical-magic-enhancement
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
- Components: component.elemental-damage, component.proc-damage, component.season-damage
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
- Components: component.damage-modifier, component.elemental-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Glazed Vastness | 琉璃浩瀚 | 無辺なる氷 | 유리 광야 | Immensité Verglacée | Gläserne Weite | Inmensidad Cristalina | Vastidão Vítrea | Glassy Expanse | ui/atlas/talent_passive_2/talent_passive_icon_general_tank_suppressex
### Wide-area Thorns
- Id: audit:EffectSources:talent:544
- Confidence: generated-component-audit
- Components: component.physical-magic-enhancement, component.proc-damage
- Behaviors: behavior.target-rank-conditional
- Predicates: predicate.target-monster-rank
- Required evidence: damage-id-or-recount-produced-row, target-monster-type-per-hit
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Wide-area Thorns | 广域荆棘 | 廣域荊棘 | 広域の茨 | 광역 가시 | Épines de zone | Flächendornen | Espinas Expansivas | Espinhos em Área | Thorns ขอบเขตกว้าง | Wide Thorn | ui/atlas/talent_passive_5/fahuan544
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
### Frost Mage - Triple Storm
- Id: audit:EffectSources:season-rogue-entry:244
- Confidence: generated-component-audit
- Components: component.proc-damage, component.season-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.skill-or-recount-targeted, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Frost Mage - Triple Storm | 冰魔导师·三重风暴 | 冰魔導師·三重風暴 | フロストメイジ・三連氷嵐 | 프로스트 메이지・삼중 폭풍 | Mage de givre - Triple tempête | Frostmagier – Dreifachsturm | Mago gélido: Tormenta Triple | Mago do Gelo — Tempestade Tripla | Frost Mage·Triple Storm | ui/textures/rouge_icon/rogue_icon_entry043
### Frost Mage - Final Meteor
- Id: audit:EffectSources:season-rogue-entry:245
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage, component.season-damage
- Behaviors: behavior.companion-or-summon, behavior.proc-damage
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Frost Mage - Final Meteor | 冰魔导师·陨星终召 | 冰魔導師·隕星終召 | フロストメイジ・隕星終臨 | 프로스트 메이지・유성 최종 소환 | Mage de givre - Météore final | Frostmagier – Finaler Meteor | Mago gélido: Meteorito Final | Mago do Gelo — Meteoro Final | Frost Mage - Meteor Final Summons | Frost Mage·Meteor Terminus Summon | ui/textures/rouge_icon/rogue_icon_entry045
### Wind Knight - Sever Wind Summoning
- Id: audit:EffectSources:season-rogue-entry:287
- Confidence: generated-component-audit
- Components: component.elemental-stat, component.proc-damage, component.season-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.skill-or-recount-targeted, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Wind Knight - Sever Wind Summoning | 青岚骑士·岚切召风 | 青嵐騎士·嵐切召風 | ゲイルランサー・嵐斬招風 | 윈드 나이트・난절 바람 소환 | Chevalier du vent - Invocation de vent tranchant | Windritter – Windtrennungsbeschwörung | Caballero del viento: Invocación de Viento Cortante | Cavaleiro do Vento — Invocação de Vento de Corte | Wind Knight - Tempest Slash Gale | Gale Lancer · Pemanggil Angin | ui/textures/rouge_icon/rogue_icon_entry087
### Ripple of Fate
- Id: audit:EffectSources:season-talent-node:1006
- Confidence: generated-component-audit
- Components: component.combat-rating-stat, component.proc-damage, component.season-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner, stat-snapshot-or-temp-attr
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Ripple of Fate | 幸厄波纹 | 幸厄波紋 | 幸運と不運の波 | 행운 재앙 물결 | Onde du destin | Schicksalswelle | Onda del Destino | Ondulação do Destino | ระลอกคลื่นโชคร้ายดี | Luck and Calamity | ui/atlas/season_talent_icon/s2talent01_04
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
### Execution Force
- Id: audit:EffectSources:season-talent-node:1103
- Confidence: generated-component-audit
- Components: component.proc-damage, component.season-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.skill-or-recount-targeted, predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Execution Force | 诛势 | 誅勢 | 討勢 | 처형의 기세 | Force d'exécution | Vollstreckungsmacht | Fuerza de Ejecución | Força de Execução | ท่าสังหาร | Execution Momentum | ui/atlas/season_talent_icon/s2talent01_04
### Time-Slit
- Id: audit:EffectSources:season-talent-node:1104
- Confidence: generated-component-audit
- Components: component.cooldown-or-resource, component.proc-damage, component.season-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
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
### Nirvana Leap
- Id: audit:EffectSources:season-talent-node:1106
- Confidence: generated-component-audit
- Components: component.proc-damage, component.season-damage
- Behaviors: behavior.companion-or-summon
- Predicates: predicate.source-companion-or-summon
- Required evidence: damage-id-or-recount-produced-row, raw-attacker-vs-top-summoner
- State: needs-runtime-predicate-before-attribution
- Action: Add the listed runtime predicate evidence first, then apply this only to matching hits.
- Text: Nirvana Leap | 灭渡三跳 | 滅渡三跳 | 寂滅三躍 | 멸도 3점프 | Saut du Nirvana | Nirwana-Sprung | Salto del Nirvana | Salto do Nirvana | สามกระโดดข้ามภพ | Triple Extinction Leap | ui/atlas/season_talent_icon/s2talent01_04

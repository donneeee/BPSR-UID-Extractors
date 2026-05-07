# Skill Damage Chain Bridge

Generated: 2026-05-06T05:10:27.609Z

## Summary

- Damage rows: 4764
- Rows with Recount parents: 683
- Rows with SkillEffect links: 3794
- Rows with SkillFight links: 3810
- Rows with coefficient candidates: 358
- Rows ready for replay validation: 18
- Rows needing chain allocation: 560

## Candidate Rows

| Damage | Name | Kind | Recount | Allocation | SkillEffect | SkillFight | Coeff Candidates | Blockers |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 112940102 | Red Light Counter | MAttack | 24:Red Light Counter | single-damage-parent | 129401/1294:v16=20 | 1294->129401:lv1-30:v28=0 | 129401/1294:20 |  |
| 117170101 | Flash Strike | Attack | 53:Flash Strike | single-damage-parent | 171701/1717:v16=2.86 | 1717->171701:lv1-30:v28=15 | 171701/1717:2.86 |  |
| 117180102 | Raijin Dash | Attack | 54:Raijin Dash | single-damage-parent | 171801/1718:v16=2.86 | 1718->171801:lv1-30:v28=25 | 171801/1718:2.86 |  |
| 117320101 | Stormflash | Attack | 60:Stormflash | single-damage-parent | 173201/1732:v16=0; 173101/1731:v16=2.86 | 1732->173201:lv1-1:v28=0; 1731->173101:lv1-30:v28=45 | 173101/1731:2.86 |  |
| 11799060101 | Thunderreign Art | Attack | 57:Moonblade Whirl | single-damage-parent | 17990601/179906:v16=0; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179906->17990601:lv1-30:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 |  |
| 11799080101 | Thunderreign Art | Attack | 71:Thunderstrike | single-damage-parent | 17990801/179908:v16=0; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179908->17990801:lv1-30:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 |  |
| 11799100101 | Thunderreign Art | Attack | 72:Thunderburst | single-damage-parent | 17991001/179910:v16=0; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179910->17991001:lv1-1:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 |  |
| 122110102 | Red Light Counter | Attack | 73:Red Light Counter | single-damage-parent | 221101/2211:v16=15 | 2211->221101:lv1-30:v28=0 | 221101/2211:15 |  |
| 124160102 | Condemn | Attack | 154:Condemn | single-damage-parent | 241601/2416:v16=0; 120101/1201:v16=15; 12010201/120102:v16=0 | 2416->241601:lv1-30:v28=0; 1201->120101:lv1-30:v28=0; 120101->12010101:lv1-1:v28=10 | 120101/1201:15 |  |
| 17010010101 | Void Corruption Frenzy Burst | AutoAttack | 281:Void Corruption Frenzy Burst | single-damage-parent | 70100101/701001:v16=5 | 701001->70100101:lv1-1:v28=0 | 70100101/701001:5 |  |
| 312090200 | Frost Lance | MAttack | 27:Frost Lance | single-damage-parent | 12090201/120902:v16=0; 120901/1209:v16=15; 12090101/120901:v16=0 | 1209->120901:lv1-30:v28=0; 120902->12090201:lv1-1:v28=0; 120901->12090101:lv1-5:v28=0 | 120901/1209:15 |  |
| 322010200 | Torrent Volley | Attack | 81:Torrent Volley | single-damage-parent | 220101/2201:v16=15; 223001/2230:v16=0 | 2201->220101:lv1-30:v28=0; 2230->223001:lv1-30:v28=23 | 220101/2201:15 |  |
| 322010400 | Storm Arrow | Attack | 76:Storm Arrow | single-damage-parent | 220101/2201:v16=15 | 2201->220101:lv1-30:v28=0 | 220101/2201:15 |  |
| 322010500 | Lightseeker Arrow | Attack | 103:Lightseeker Arrow | single-damage-parent | 220101/2201:v16=15 | 2201->220101:lv1-30:v28=0 | 220101/2201:15 |  |
| 322010600 | Double Arrow | Attack | 77:Double Arrow | single-damage-parent | 220101/2201:v16=15; 222201/2222:v16=0 | 2201->220101:lv1-30:v28=0; 2222->222201:lv1-30:v28=0 | 220101/2201:15 |  |
| 322010700 | Magic Arrow | Attack | 105:Magic Arrow | single-damage-parent | 220101/2201:v16=15 | 2201->220101:lv1-30:v28=0 | 220101/2201:15 |  |
| 322010900 | Deter Shot | Attack | 88:Deter Shot | single-damage-parent | 220101/2201:v16=15; 223501/2235:v16=0 | 2201->220101:lv1-30:v28=0; 2235->223501:lv1-30:v28=1 | 220101/2201:15 |  |
| 322011200 | Photon Arrow | Attack | 104:Photon Arrow | single-damage-parent | 220101/2201:v16=15 | 2201->220101:lv1-30:v28=0 | 220101/2201:15 |  |
| 112030101 | Raincall Surge | MAttack | 26:Raincall Surge | needs-chain-allocation | 120301/1203:v16=15; 120101/1201:v16=15; 12010201/120102:v16=0 | 1203->120301:lv1-30:v28=0; 1201->120101:lv1-30:v28=0; 120101->12010101:lv1-1:v28=10 | 120301/1203:15; 120101/1201:15 | needs-chain-allocation |
| 112160101 | Crystal Veil | MAttack | 31:Crystal Veil | needs-chain-allocation | 121601/1216:v16=4; 121101/1211:v16=15 | 1216->121601:lv1-30:v28=0; 1211->121101:lv1-30:v28=1 | 121601/1216:4; 121101/1211:15 | needs-chain-allocation |
| 112500101 | Maelstrom | MAttack | 33:Maelstrom | needs-chain-allocation | 125001/1250:v16=0; 121001/1210:v16=15 | 1250->125001:lv1-30:v28=0; 1210->121001:lv1-30:v28=15 | 121001/1210:15 | needs-chain-allocation |
| 112500104 | Maelstrom | MAttack | 33:Maelstrom | needs-chain-allocation | 125001/1250:v16=0; 121001/1210:v16=15 | 1250->125001:lv1-30:v28=0; 1210->121001:lv1-30:v28=15 | 121001/1210:15 | needs-chain-allocation |
| 112570101 | Blizzard | MAttack | 32:Blizzard | needs-chain-allocation | 125701/1257:v16=20; 124401/1244:v16=20 | 1257->125701:lv1-30:v28=0; 1244->124401:lv1-30:v28=30 | 125701/1257:20; 124401/1244:20 | needs-chain-allocation |
| 112610101 | Blizzard | MAttack | 32:Blizzard | needs-chain-allocation | 126101/1261:v16=20; 124401/1244:v16=20 | 1261->126101:lv1-1:v28=0; 1244->124401:lv1-30:v28=30 | 126101/1261:20; 124401/1244:20 | needs-chain-allocation |
| 115010102 | Vines' Embrace | MAttack | 166:Vines' Embrace | needs-chain-allocation | 150101/1501:v16=12; 15010101/150101:v16=0 | 1501->150101:lv1-30:v28=0; 150101->15010101:lv1-30:v28=0 | 150101/1501:12 | needs-chain-allocation |
| 115020102 | Vines' Embrace | MAttack | 166:Vines' Embrace | needs-chain-allocation | 150201/1502:v16=12; 15020101/150201:v16=0; 150101/1501:v16=12 | 1502->150201:lv1-30:v28=0; 150201->15020101:lv1-30:v28=0; 1501->150101:lv1-30:v28=0 | 150201/1502:12; 150101/1501:12 | needs-chain-allocation |
| 115020103 | Vines' Embrace | MAttack | 166:Vines' Embrace | needs-chain-allocation | 150201/1502:v16=12; 15020101/150201:v16=0; 150101/1501:v16=12 | 1502->150201:lv1-30:v28=0; 150201->15020101:lv1-30:v28=0; 1501->150101:lv1-30:v28=0 | 150201/1502:12; 150101/1501:12 | needs-chain-allocation |
| 115030102 | Vines' Embrace | MAttack | 166:Vines' Embrace | needs-chain-allocation | 150301/1503:v16=12; 15030101/150301:v16=0; 150101/1501:v16=12 | 1503->150301:lv1-30:v28=0; 150301->15030101:lv1-30:v28=0; 1501->150101:lv1-30:v28=0 | 150301/1503:12; 150101/1501:12 | needs-chain-allocation |
| 115030103 | Vines' Embrace | MAttack | 166:Vines' Embrace | needs-chain-allocation | 150301/1503:v16=12; 15030101/150301:v16=0; 150101/1501:v16=12 | 1503->150301:lv1-30:v28=0; 150301->15030101:lv1-30:v28=0; 1501->150101:lv1-30:v28=0 | 150301/1503:12; 150101/1501:12 | needs-chain-allocation |
| 115030104 | Vines' Embrace | MAttack | 166:Vines' Embrace | needs-chain-allocation | 150301/1503:v16=12; 15030101/150301:v16=0; 150101/1501:v16=12 | 1503->150301:lv1-30:v28=0; 150301->15030101:lv1-30:v28=0; 1501->150101:lv1-30:v28=0 | 150301/1503:12; 150101/1501:12 | needs-chain-allocation |
| 115040102 | Vines' Embrace | MAttack | 166:Vines' Embrace | needs-chain-allocation | 150401/1504:v16=12; 15040101/150401:v16=0; 150101/1501:v16=12 | 1504->150401:lv1-30:v28=0; 150401->15040101:lv1-30:v28=0; 1501->150101:lv1-30:v28=0 | 150401/1504:12; 150101/1501:12 | needs-chain-allocation |
| 115040104 | Vines' Embrace | MAttack | 166:Vines' Embrace | needs-chain-allocation | 150401/1504:v16=12; 15040101/150401:v16=0; 150101/1501:v16=12 | 1504->150401:lv1-30:v28=0; 150401->15040101:lv1-30:v28=0; 1501->150101:lv1-30:v28=0 | 150401/1504:12; 150101/1501:12 | needs-chain-allocation |
| 115500101 | Feral Seed | MAttack | 172:Feral Seed | needs-chain-allocation | 155001/1550:v16=0; 151901/1519:v16=12.5 | 1550->155001:lv1-30:v28=0; 1519->151901:lv1-30:v28=1 | 151901/1519:12.5 | needs-chain-allocation |
| 117010101 | Judgment Cut | Attack | 48:Judgment Cut | needs-chain-allocation | 170101/1701:v16=1.18; 17010101/170101:v16=0; 17010201/170102:v16=0 | 1701->170101:lv1-30:v28=0; 170101->17010101:lv1-1:v28=0; 170102->17010201:lv1-1:v28=30 | 170101/1701:1.18 | needs-chain-allocation |
| 117020101 | Judgment Cut | Attack | 48:Judgment Cut | needs-chain-allocation | 170201/1702:v16=1.61; 17020101/170201:v16=0; 170101/1701:v16=1.18 | 1702->170201:lv1-30:v28=0; 170201->17020101:lv1-30:v28=0; 1701->170101:lv1-30:v28=0 | 170201/1702:1.61; 170101/1701:1.18 | needs-chain-allocation |
| 117020103 | Judgment Cut | Attack | 48:Judgment Cut | needs-chain-allocation | 170201/1702:v16=1.61; 17020101/170201:v16=0; 170101/1701:v16=1.18 | 1702->170201:lv1-30:v28=0; 170201->17020101:lv1-30:v28=0; 1701->170101:lv1-30:v28=0 | 170201/1702:1.61; 170101/1701:1.18 | needs-chain-allocation |
| 117030101 | Judgment Cut | Attack | 48:Judgment Cut | needs-chain-allocation | 170301/1703:v16=3.12; 170101/1701:v16=1.18; 17030101/170301:v16=0 | 1703->170301:lv1-30:v28=0; 1701->170101:lv1-30:v28=0; 170301->17030101:lv1-1:v28=0 | 170301/1703:3.12; 170101/1701:1.18 | needs-chain-allocation |
| 117030103 | Judgment Cut | Attack | 48:Judgment Cut | needs-chain-allocation | 170301/1703:v16=3.12; 170101/1701:v16=1.18; 17030101/170301:v16=0 | 1703->170301:lv1-30:v28=0; 1701->170101:lv1-30:v28=0; 170301->17030101:lv1-1:v28=0 | 170301/1703:3.12; 170101/1701:1.18 | needs-chain-allocation |
| 117030104 | Judgment Cut | Attack | 48:Judgment Cut | needs-chain-allocation | 170301/1703:v16=3.12; 170101/1701:v16=1.18; 17030101/170301:v16=0 | 1703->170301:lv1-30:v28=0; 1701->170101:lv1-30:v28=0; 170301->17030101:lv1-1:v28=0 | 170301/1703:3.12; 170101/1701:1.18 | needs-chain-allocation |
| 117040102 | Judgment Cut | Attack | 48:Judgment Cut | needs-chain-allocation | 170401/1704:v16=2.86; 17040101/170401:v16=0; 170101/1701:v16=1.18 | 1704->170401:lv1-30:v28=0; 170401->17040101:lv1-1:v28=0; 1701->170101:lv1-30:v28=0 | 170401/1704:2.86; 170101/1701:1.18 | needs-chain-allocation |
| 117050101 | Overdrive | Attack | 52:Overdrive | needs-chain-allocation | 170501/1705:v16=2.86 | 1705->170501:lv1-30:v28=0 | 170501/1705:2.86 | needs-chain-allocation |
| 117050103 | Overdrive | Attack | 52:Overdrive | needs-chain-allocation | 170501/1705:v16=2.86 | 1705->170501:lv1-30:v28=0 | 170501/1705:2.86 | needs-chain-allocation |
| 117050104 | Overdrive | Attack | 52:Overdrive | needs-chain-allocation | 170501/1705:v16=2.86 | 1705->170501:lv1-30:v28=0 | 170501/1705:2.86 | needs-chain-allocation |
| 117050105 | Overdrive | Attack | 52:Overdrive | needs-chain-allocation | 170501/1705:v16=2.86 | 1705->170501:lv1-30:v28=0 | 170501/1705:2.86 | needs-chain-allocation |
| 117050106 | Overdrive | Attack | 52:Overdrive | needs-chain-allocation | 170501/1705:v16=2.86 | 1705->170501:lv1-30:v28=0 | 170501/1705:2.86 | needs-chain-allocation |
| 117050108 | Overdrive | Attack | 52:Overdrive | needs-chain-allocation | 170501/1705:v16=2.86 | 1705->170501:lv1-30:v28=0 | 170501/1705:2.86 | needs-chain-allocation |
| 117140101 | Iaido Slash | Attack | 49:Iaido Slash | needs-chain-allocation | 171401/1714:v16=2.86 | 1714->171401:lv1-30:v28=1 | 171401/1714:2.86 | needs-chain-allocation |
| 117140102 | Iaido Slash | Attack | 49:Iaido Slash | needs-chain-allocation | 171401/1714:v16=2.86 | 1714->171401:lv1-30:v28=1 | 171401/1714:2.86 | needs-chain-allocation |
| 117140111 | Iaido Slash | Attack | 49:Iaido Slash | needs-chain-allocation | 171401/1714:v16=2.86 | 1714->171401:lv1-30:v28=1 | 171401/1714:2.86 | needs-chain-allocation |
| 117150102 | Moonstrike | Attack | 50:Moonstrike | needs-chain-allocation | 171501/1715:v16=2.86 | 1715->171501:lv1-30:v28=0 | 171501/1715:2.86 | needs-chain-allocation |
| 117150103 | Moonstrike | Attack | 50:Moonstrike | needs-chain-allocation | 171501/1715:v16=2.86 | 1715->171501:lv1-30:v28=0 | 171501/1715:2.86 | needs-chain-allocation |
| 117150105 | Moonstrike | Attack | 50:Moonstrike | needs-chain-allocation | 171501/1715:v16=2.86 | 1715->171501:lv1-30:v28=0 | 171501/1715:2.86 | needs-chain-allocation |
| 117150107 | Moonstrike | Attack | 50:Moonstrike | needs-chain-allocation | 171501/1715:v16=2.86 | 1715->171501:lv1-30:v28=0 | 171501/1715:2.86 | needs-chain-allocation |
| 117150109 | Moonstrike | Attack | 50:Moonstrike | needs-chain-allocation | 171501/1715:v16=2.86 | 1715->171501:lv1-30:v28=0 | 171501/1715:2.86 | needs-chain-allocation |
| 117150110 | Moonstrike | Attack | 50:Moonstrike | needs-chain-allocation | 171501/1715:v16=2.86 | 1715->171501:lv1-30:v28=0 | 171501/1715:2.86 | needs-chain-allocation |
| 117150112 | Moonstrike | Attack | 50:Moonstrike | needs-chain-allocation | 171501/1715:v16=2.86 | 1715->171501:lv1-30:v28=0 | 171501/1715:2.86 | needs-chain-allocation |
| 117150115 | Moonstrike | Attack | 50:Moonstrike | needs-chain-allocation | 171501/1715:v16=2.86 | 1715->171501:lv1-30:v28=0 | 171501/1715:2.86 | needs-chain-allocation |
| 117190104 | Scythe Wheel | Attack | 55:Scythe Wheel | needs-chain-allocation | 171901/1719:v16=2.86 | 1719->171901:lv1-30:v28=30 | 171901/1719:2.86 | needs-chain-allocation |
| 117190105 | Scythe Wheel | Attack | 55:Scythe Wheel | needs-chain-allocation | 171901/1719:v16=2.86 | 1719->171901:lv1-30:v28=30 | 171901/1719:2.86 | needs-chain-allocation |
| 117200103 | True Sight | Attack | 61:True Sight | needs-chain-allocation | 172001/1720:v16=2.86 | 1720->172001:lv1-30:v28=30 | 172001/1720:2.86 | needs-chain-allocation |
| 117200105 | True Sight | Attack | 61:True Sight | needs-chain-allocation | 172001/1720:v16=2.86 | 1720->172001:lv1-30:v28=30 | 172001/1720:2.86 | needs-chain-allocation |
| 117240103 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240104 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240106 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240107 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240108 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240120 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240121 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240126 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240127 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240128 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240129 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240130 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240131 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240132 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240133 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240134 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240135 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240136 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240137 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240138 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240139 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240140 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240141 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240142 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117240143 | Thundercut | Attack | 58:Thundercut | needs-chain-allocation | 172401/1724:v16=2.86 | 1724->172401:lv1-30:v28=2 | 172401/1724:2.86 | needs-chain-allocation |
| 117330104 | Storm Scythe | Attack | 66:Storm Scythe | needs-chain-allocation | 173301/1733:v16=2.86 | 1733->173301:lv1-1:v28=0 | 173301/1733:2.86 | needs-chain-allocation |
| 117330106 | Storm Scythe | Attack | 66:Storm Scythe | needs-chain-allocation | 173301/1733:v16=2.86 | 1733->173301:lv1-1:v28=0 | 173301/1733:2.86 | needs-chain-allocation |
| 117350103 | Dracoflash | Attack | 63:Dracoflash | needs-chain-allocation | 173501/1735:v16=2.86 | 1735->173501:lv1-1:v28=0 | 173501/1735:2.86 | needs-chain-allocation |
| 117350105 | Dracoflash | Attack | 63:Dracoflash | needs-chain-allocation | 173501/1735:v16=2.86 | 1735->173501:lv1-1:v28=0 | 173501/1735:2.86 | needs-chain-allocation |
| 117350106 | Dracoflash | Attack | 63:Dracoflash | needs-chain-allocation | 173501/1735:v16=2.86 | 1735->173501:lv1-1:v28=0 | 173501/1735:2.86 | needs-chain-allocation |
| 117360102 | Phantom Slash | Attack | 64:Phantom Slash | needs-chain-allocation | 173601/1736:v16=2.86 | 1736->173601:lv1-1:v28=0 | 173601/1736:2.86 | needs-chain-allocation |
| 117370101 | Divine Sickle | Attack | 65:Divine Sickle | needs-chain-allocation | 173701/1737:v16=2.86 | 1737->173701:lv1-1:v28=0 | 173701/1737:2.86 | needs-chain-allocation |
| 117370106 | Divine Sickle | Attack | 65:Divine Sickle | needs-chain-allocation | 173701/1737:v16=2.86 | 1737->173701:lv1-1:v28=0 | 173701/1737:2.86 | needs-chain-allocation |
| 117370112 | Divine Sickle | Attack | 65:Divine Sickle | needs-chain-allocation | 173701/1737:v16=2.86 | 1737->173701:lv1-1:v28=0 | 173701/1737:2.86 | needs-chain-allocation |
| 117380101 | Chaos Breaker | Attack | 68:Chaos Breaker | needs-chain-allocation | 173801/1738:v16=2.86 | 1738->173801:lv1-1:v28=0 | 173801/1738:2.86 | needs-chain-allocation |
| 117380105 | Chaos Breaker | Attack | 68:Chaos Breaker | needs-chain-allocation | 173801/1738:v16=2.86 | 1738->173801:lv1-1:v28=0 | 173801/1738:2.86 | needs-chain-allocation |
| 117420101 | Thundercleave | Attack | 67:Thundercleave | needs-chain-allocation | 174201/1742:v16=2.86 | 1742->174201:lv1-1:v28=0 | 174201/1742:2.86 | needs-chain-allocation |
| 117420102 | Thundercleave | Attack | 67:Thundercleave | needs-chain-allocation | 174201/1742:v16=2.86 | 1742->174201:lv1-1:v28=0 | 174201/1742:2.86 | needs-chain-allocation |
| 117420103 | Thundercleave | Attack | 67:Thundercleave | needs-chain-allocation | 174201/1742:v16=2.86 | 1742->174201:lv1-1:v28=0 | 174201/1742:2.86 | needs-chain-allocation |
| 117420108 | Thundercleave | Attack | 67:Thundercleave | needs-chain-allocation | 174201/1742:v16=2.86 | 1742->174201:lv1-1:v28=0 | 174201/1742:2.86 | needs-chain-allocation |
| 117440103 | True Sight | Attack | 61:True Sight | needs-chain-allocation | 174401/1744:v16=2.86; 172001/1720:v16=2.86 | 1744->174401:lv1-1:v28=0; 1720->172001:lv1-30:v28=30 | 174401/1744:2.86; 172001/1720:2.86 | needs-chain-allocation |
| 117440105 | True Sight | Attack | 61:True Sight | needs-chain-allocation | 174401/1744:v16=2.86; 172001/1720:v16=2.86 | 1744->174401:lv1-1:v28=0; 1720->172001:lv1-30:v28=30 | 174401/1744:2.86; 172001/1720:2.86 | needs-chain-allocation |
| 11799020101 | Thunderreign Art | Attack | 69:Piercing Slash | needs-chain-allocation | 17990201/179902:v16=5; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179902->17990201:lv1-30:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 | needs-chain-allocation |
| 11799040101 | Thunderreign Art | Attack | 64:Phantom Slash | needs-chain-allocation | 179901/1799:v16=0; 17990401/179903:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179904->17990401:lv1-30:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 | needs-chain-allocation |
| 11799070101 | Bladewind Domain | Attack | 70:Bladewind Domain | needs-chain-allocation | 17990701/179907:v16=0; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179907->17990701:lv1-30:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 | needs-chain-allocation |
| 11799070102 | Bladewind Domain | Attack | 70:Bladewind Domain | needs-chain-allocation | 17990701/179907:v16=0; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179907->17990701:lv1-30:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 | needs-chain-allocation |
| 11799070103 | Bladewind Domain | Attack | 70:Bladewind Domain | needs-chain-allocation | 17990701/179907:v16=0; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179907->17990701:lv1-30:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 | needs-chain-allocation |
| 11799070104 | Bladewind Domain | Attack | 70:Bladewind Domain | needs-chain-allocation | 17990701/179907:v16=0; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179907->17990701:lv1-30:v28=0; 179901->17990101:lv1-30:v28=0 | 17990201/179902:5 | needs-chain-allocation |
| 11799110101 | Divine Sickle | Attack | 65:Divine Sickle | needs-chain-allocation | 17991101/179911:v16=0; 179901/1799:v16=0; 17990101/179901:v16=0 | 1799->179901:lv1-30:v28=0; 179911->17991101:lv1-1:v28=0; 179901->17990101:lv1-30:v28=0 | 173701/1737:2.86; 17990201/179902:5 | needs-chain-allocation |
| 118500101 | Arcane! Illusion Resonance | AutoAttack | 263:Arcane! Illusion Resonance | needs-chain-allocation | 185001/1850:v16=20; 394901/3949:v16=0 | 1850->185001:lv1-30:v28=0; 3949->394901:lv1-1:v28=20 | 185001/1850:20 | needs-chain-allocation |
| 122950102 | Luminary Bolt | Attack | 79:Luminary Bolt | needs-chain-allocation | 229501/2295:v16=0; 220901/2209:v16=15 | 2295->229501:lv1-1:v28=0; 2209->220901:lv1-30:v28=60 | 220901/2209:15 | needs-chain-allocation |
| 129005400101 | Arcane! Flash Execution | AutoAttack | 255:Arcane! Flash Execution | needs-chain-allocation | 290054001/2900540:v16=2.86 | 2900540->290054001:lv1-1:v28=0 | 290054001/2900540:2.86 | needs-chain-allocation |
| 129005400103 | Arcane! Flash Execution | AutoAttack | 255:Arcane! Flash Execution | needs-chain-allocation | 290054001/2900540:v16=2.86 | 2900540->290054001:lv1-1:v28=0 | 290054001/2900540:2.86 | needs-chain-allocation |
| 129005400104 | Arcane! Flash Execution | AutoAttack | 255:Arcane! Flash Execution | needs-chain-allocation | 290054001/2900540:v16=2.86 | 2900540->290054001:lv1-1:v28=0 | 290054001/2900540:2.86 | needs-chain-allocation |
| 129005400105 | Arcane! Flash Execution | AutoAttack | 255:Arcane! Flash Execution | needs-chain-allocation | 290054001/2900540:v16=2.86 | 2900540->290054001:lv1-1:v28=0 | 290054001/2900540:2.86 | needs-chain-allocation |
| 129005400106 | Arcane! Flash Execution | AutoAttack | 255:Arcane! Flash Execution | needs-chain-allocation | 290054001/2900540:v16=2.86 | 2900540->290054001:lv1-1:v28=0 | 290054001/2900540:2.86 | needs-chain-allocation |
| 17010020101 | Void Corruption Frenzy Wave | AutoAttack | 283:Void Corruption Frenzy Wave | needs-chain-allocation | 70100201/701002:v16=5 | 701002->70100201:lv1-1:v28=0 | 70100201/701002:5 | needs-chain-allocation |
| 2220331101 | Explosive Arrow | Attack | 106:Explosive Arrow | needs-chain-allocation | 220101/2201:v16=15 | 2201->220101:lv1-30:v28=0 | 220101/2201:15 | needs-chain-allocation |
| 312020100 | Raincall Surge | MAttack | 26:Raincall Surge | needs-chain-allocation | 120201/1202:v16=15; 120101/1201:v16=15; 12010201/120102:v16=0 | 1202->120201:lv1-30:v28=0; 1201->120101:lv1-30:v28=0; 120101->12010101:lv1-1:v28=10 | 120201/1202:15; 120101/1201:15 | needs-chain-allocation |

## Boundary

This bridge is static UID evidence for efficient replay work. Final totals still come from live packets, and candidate numeric fields remain untrusted until formula replay validates them.

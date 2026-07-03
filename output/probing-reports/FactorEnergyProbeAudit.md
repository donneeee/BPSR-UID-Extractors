# Factor Energy Probe Audit

- scanned files: 1
- files with entries: 1
- files with probe rows: 1
- fight resource rows: 0
- container probe rows: 2 (0 full, 2 dirty)
- dirty frame decoded rows: 2
- dirty delimited-tree rows: 0
- packet resource changes: 0
- factor counter rows: 140
- panel attr rows: 233
- panel attr IDs seen: 5
- panel attr changes: 228
- resource IDs seen: 0
- counter slots seen: 5
- panel attr/counter pair candidates: 25
- pair window: 2000ms

## Observed Event Logger Actions

| category/action | rows |
| --- | ---: |
| player_target_skill_damage\|snapshot | 2547 |
| player_target_damage\|snapshot | 1633 |
| buff\|update | 1377 |
| player_skill_damage\|snapshot | 1187 |
| hate\|update | 1055 |
| monster_buff\|update | 1019 |
| factor_energy_probe\|sync_near_delta_attrs | 866 |
| factor_energy_probe\|sync_to_me_delta_attrs | 812 |
| player\|snapshot | 505 |
| live_totals\|snapshot | 504 |
| raw_service_probe\|notify | 498 |
| mob\|snapshot | 248 |
| system\|panel_attr | 233 |
| factor_energy_probe\|fight_resource_tuple_candidate | 231 |
| factor_energy_probe\|factor_counter_update | 140 |
| chat\|message | 9 |
| container_probe\|sync_container_dirty | 2 |
| system\|entity_names | 2 |

## Recent Files

| file | entries | factor probe rows | fight resource rows | top actions |
| --- | ---: | ---: | ---: | --- |
| C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json | 12868 | 140 | 0 | player_target_skill_damage\|snapshot=2547, player_target_damage\|snapshot=1633, buff\|update=1377, player_skill_damage\|snapshot=1187, hate\|update=1055 |

## Resource IDs

| resource id | rows | min | max | last | sample values |
| ---: | ---: | ---: | ---: | ---: | --- |
| _none_ | 0 |  |  |  |  |

## Container Probe Rows

These are raw SyncContainerData/SyncContainerDirtyData probes. They are not proven current-energy values yet, but they are the packet family that fired in the fresh capture.

| ts ms | action | uid | size | factor candidates | proto candidates | selected core nodes | normal holes | source file |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
| 1780346954708 | sync_container_dirty | 0 | 64 | 131072 |  |  |  | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347014838 | sync_container_dirty | 0 | 64 | 131072 |  |  |  | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |

## Dirty Container Correlation

This compares dirty container rows to the latest full SeasonMedalInfo snapshot and nearby factor counter/buff rows. Empty match cells mean the dirty values did not directly match the selected core-node or normal-hole values from the last full snapshot.

| ts ms | size | root fields | frames | dirty values | season medal baseline | nearby counters | nearby buffs | source file |
| ---: | ---: | --- | --- | --- | --- | --- | --- | --- |
| 1780346954708 | 64 | 2 char_base, 104 unknown | 24, 52 | 1780346955x2 epoch-seconds-like, 93750x2 mid-id-like |  | -69ms 920020412:1=1180/0, 920020424:1=102/0, 920021032:1=1180/0 | 15ms 3053101 srcCfg 3053100 dur 10000; 15ms 3059061 srcCfg 3059060 dur 0; 15ms 3002611 srcCfg 3002630 dur 10000; -69ms 3053101 srcCfg 3053100 dur 10000; -69ms 3059061 srcCfg 3059060 dur 0 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347014838 | 64 | 2 char_base, 104 unknown | 24, 52 | 1780347015x2 epoch-seconds-like, 93751x2 mid-id-like |  |  | -176ms 3059061 srcCfg 3059060 dur 0 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |

## Panel Attr Changes

These are normal system panel_attr rows, not fight-resource packets. They can hint at changing local attributes, but they are not the packet-backed current factor energy source unless an attr ID is later proven.

| attr id | hex | rows | changes | increases | decreases | first | last | min | max | last delta | sample values |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 12510 | 0x30DE | 141 | 140 | 132 | 8 | 8916 | 12891 | 8916 | 12891 | 420 | 8916, 9016, 9041, 9141, 9166, 9586, 10106, 10131, 10551, 11071, 11096, 11516, ... |
| 11710 | 0x2DBE | 64 | 63 | 60 | 3 | 5032 | 5782 | 5032 | 5782 | 50 | 5032, 5082, 5132, 5182, 5232, 5282, 5332, 5382, 5432, 5482, 5532, 5582, ... |
| 11720 | 0x2DC8 | 17 | 16 | 9 | 7 | 4761 | 8205 | 3428 | 8205 | 444 | 3428, 3872, 4761, 5205, 6428, 6872, 7761, 8205 |
| 11930 | 0x2E9A | 7 | 6 | 3 | 3 | 5058 | 5058 | 2835 | 5058 | 2223 | 2835, 5058 |
| 11330 | 0x2C42 | 4 | 3 | 1 | 2 | 4824 | 4561 | 4561 | 4824 | -263 | 4561, 4824 |

### Recent Panel Attr Changes

| ts ms | attr id | hex | previous | current | delta | source file |
| ---: | ---: | --- | ---: | ---: | ---: | --- |
| 1780347021355 | 12510 | 0x30DE | 12116 | 12141 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347021805 | 11710 | 0x2DBE | 5482 | 5532 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347021805 | 12510 | 0x30DE | 12141 | 12241 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347021896 | 12510 | 0x30DE | 12241 | 12266 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347022240 | 11710 | 0x2DBE | 5532 | 5582 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347022240 | 12510 | 0x30DE | 12266 | 12366 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347022331 | 12510 | 0x30DE | 12366 | 12391 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347022747 | 11710 | 0x2DBE | 5582 | 5632 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347022747 | 12510 | 0x30DE | 12391 | 12491 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347022974 | 12510 | 0x30DE | 12491 | 12516 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347023294 | 11710 | 0x2DBE | 5632 | 5682 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347023294 | 12510 | 0x30DE | 12516 | 12616 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347023296 | 12510 | 0x30DE | 12616 | 12641 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347023793 | 11710 | 0x2DBE | 5682 | 5732 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347023793 | 12510 | 0x30DE | 12641 | 12741 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347023794 | 12510 | 0x30DE | 12741 | 12766 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347024326 | 11710 | 0x2DBE | 5732 | 5782 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347024326 | 12510 | 0x30DE | 12766 | 12866 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347024440 | 12510 | 0x30DE | 12866 | 12891 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347035016 | 11710 | 0x2DBE | 5782 | 5032 | -750 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347035016 | 11720 | 0x2DC8 | 8205 | 6872 | -1333 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347035016 | 12510 | 0x30DE | 12891 | 11391 | -1500 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347035016 | 11930 | 0x2E9A | 5058 | 2835 | -2223 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347035078 | 11720 | 0x2DC8 | 6872 | 6428 | -444 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347035078 | 12510 | 0x30DE | 11391 | 11016 | -375 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049008 | 11720 | 0x2DC8 | 6428 | 7761 | 1333 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049008 | 11930 | 0x2E9A | 2835 | 5058 | 2223 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049009 | 11720 | 0x2DC8 | 7761 | 8205 | 444 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049233 | 11710 | 0x2DBE | 5032 | 5082 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049233 | 12510 | 0x30DE | 11016 | 11116 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049399 | 12510 | 0x30DE | 11116 | 11141 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049699 | 11710 | 0x2DBE | 5082 | 5132 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049699 | 12510 | 0x30DE | 11141 | 11241 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347049780 | 12510 | 0x30DE | 11241 | 11266 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347050354 | 11710 | 0x2DBE | 5132 | 5182 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347050354 | 12510 | 0x30DE | 11266 | 11366 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347050356 | 12510 | 0x30DE | 11366 | 11391 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347050764 | 11710 | 0x2DBE | 5182 | 5232 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347050764 | 12510 | 0x30DE | 11391 | 11491 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347050909 | 12510 | 0x30DE | 11491 | 11516 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347051215 | 11710 | 0x2DBE | 5232 | 5282 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347051215 | 12510 | 0x30DE | 11516 | 11616 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347051347 | 12510 | 0x30DE | 11616 | 11641 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347051743 | 11710 | 0x2DBE | 5282 | 5332 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347051743 | 12510 | 0x30DE | 11641 | 11741 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347051888 | 12510 | 0x30DE | 11741 | 11766 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347052345 | 11710 | 0x2DBE | 5332 | 5382 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347052345 | 12510 | 0x30DE | 11766 | 11866 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347052347 | 12510 | 0x30DE | 11866 | 11891 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347052763 | 11710 | 0x2DBE | 5382 | 5432 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347052763 | 12510 | 0x30DE | 11891 | 11991 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347052854 | 12510 | 0x30DE | 11991 | 12016 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347053252 | 11710 | 0x2DBE | 5432 | 5482 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347053252 | 12510 | 0x30DE | 12016 | 12116 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347053470 | 12510 | 0x30DE | 12116 | 12141 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347053704 | 11710 | 0x2DBE | 5482 | 5532 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347053704 | 12510 | 0x30DE | 12141 | 12241 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347053953 | 12510 | 0x30DE | 12241 | 12266 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347054394 | 11710 | 0x2DBE | 5532 | 5582 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347054394 | 12510 | 0x30DE | 12266 | 12366 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347054395 | 12510 | 0x30DE | 12366 | 12391 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347054710 | 11710 | 0x2DBE | 5582 | 5632 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347054710 | 12510 | 0x30DE | 12391 | 12491 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347054954 | 12510 | 0x30DE | 12491 | 12516 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347055279 | 11710 | 0x2DBE | 5632 | 5682 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347055279 | 12510 | 0x30DE | 12516 | 12616 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347055638 | 12510 | 0x30DE | 12616 | 12641 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347055815 | 11710 | 0x2DBE | 5682 | 5732 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347055815 | 12510 | 0x30DE | 12641 | 12741 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347056026 | 12510 | 0x30DE | 12741 | 12766 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347056306 | 11710 | 0x2DBE | 5732 | 5782 | 50 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347056306 | 12510 | 0x30DE | 12766 | 12866 | 100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347056307 | 12510 | 0x30DE | 12866 | 12891 | 25 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347056716 | 12510 | 0x30DE | 12891 | 10791 | -2100 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347058922 | 12510 | 0x30DE | 10791 | 11211 | 420 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347059103 | 12510 | 0x30DE | 11211 | 11631 | 420 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347059336 | 12510 | 0x30DE | 11631 | 12051 | 420 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347059483 | 12510 | 0x30DE | 12051 | 12471 | 420 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347059731 | 11330 | 0x2C42 | 4824 | 4561 | -263 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |
| 1780347059731 | 12510 | 0x30DE | 12471 | 12891 | 420 | C:\Users\dbcas\AppData\Roaming\com.resonance-logs-global\EventLogs\2026.06.01\MarieRose.3296036.Guild_Center.01062026-165100.json |

## Panel Attr/Counter Pair Candidates

This compares normal panel_attr values near inferred New Factor counter rows. It is a side-channel check only, not proof of current factor energy.

| attr id | hex | counter slot | pairs | non-zero exact | non-zero /10 | non-zero /100 | non-zero /1000 | all exact | delta ms range | last attr | last counter |
| ---: | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: | ---: |
| 12510 | 0x30DE | 920020424:1 | 943 | 0 | 0 | 6 | 0 | 0 | 1-2000 | 11211 | 153 |
| 12510 | 0x30DE | 920020412:1 | 943 | 0 | 0 | 2 | 0 | 0 | 1-2000 | 11211 | 7295 |
| 12510 | 0x30DE | 920021032:1 | 943 | 0 | 0 | 2 | 0 | 0 | 1-2000 | 11211 | 7295 |
| 12510 | 0x30DE | 920021042:1 | 943 | 0 | 0 | 2 | 0 | 0 | 1-2000 | 11211 | 7295 |
| 12510 | 0x30DE | 920021944:1 | 943 | 0 | 0 | 2 | 0 | 0 | 1-2000 | 11211 | 7295 |
| 11710 | 0x2DBE | 920020424:1 | 435 | 0 | 0 | 1 | 0 | 0 | 1-1993 | 5282 | 102 |
| 11930 | 0x2E9A | 920020424:1 | 33 | 0 | 0 | 1 | 0 | 0 | 60-1917 | 5058 | 204 |

## Packet Resource Changes

This is the raw packet-backed current-resource view. It does not use inferred New Factor counters.

| resource id | rows | changes | increases | decreases | first | last | last delta |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| _none_ | 0 | 0 | 0 | 0 |  |  |  |

### Recent Packet Resource Changes

| ts ms | resource id | previous | current | delta | source file |
| ---: | ---: | ---: | ---: | ---: | --- |
| _none_ |  |  |  |  |  |

## Inferred Factor Counters

| counter slot | rows | threshold(s) | min | max | last | reset-active rows | sample values |
| --- | ---: | --- | ---: | ---: | ---: | ---: | --- |
| 920020412:1 | 140 | 0 | 60 | 7295 | 7295 | 0 | 60, 90, 182, 242, 272, 332, 362, 422, 473, 503, 614, 644, ... |
| 920020424:1 | 140 | 0 | 0 | 804 | 153 | 38 | 0, 51, 60, 90, 102, 150, 153, 180, 204, 240, 255, 264, ... |
| 920021032:1 | 140 | 0 | 60 | 7295 | 7295 | 0 | 60, 90, 182, 242, 272, 332, 362, 422, 473, 503, 614, 644, ... |
| 920021042:1 | 140 | 0 | 60 | 7295 | 7295 | 140 | 60, 90, 182, 242, 272, 332, 362, 422, 473, 503, 614, 644, ... |
| 920021944:1 | 140 | 100 | 60 | 7295 | 7295 | 0 | 60, 90, 182, 242, 272, 332, 362, 422, 473, 503, 614, 644, ... |

## Resource/Counter Pair Candidates

| resource id | counter slot | pairs | exact | /10 | /100 | /1000 | delta ms range | last resource | last counter |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | --- | ---: | ---: |
| _none_ |  | 0 | 0 | 0 | 0 | 0 |  |  |  |

## Notes

- Packet resource rows come from ATTR_FIGHT_RESOURCE_IDS/ATTR_FIGHT_RESOURCES, currently observed through fight-res-update.
- Packet resource changes are raw current resource value deltas and do not use inferred factor counter guesses.
- Container probe rows come from SyncContainerData/SyncContainerDirtyData and are summarized separately because the fresh captures did not expose New Factor energy through fight-resource attrs.
- Dirty container correlation uses generic frame/value scanning plus nearby counter/buff timing; it is evidence only, not a runtime decoder.
- Panel attr/counter pairing is a side-channel check only. Panel attrs are normal local stat attrs unless a later controlled capture proves a specific attr is current factor energy.
- Factor counter rows are inferred New Factor tracker values, logged only when RESONANCE_ENABLE_FACTOR_ENERGY_PROBES=1.
- A high exact/div10/div100/div1000 match is only a candidate for the real packet-backed energy meter; confirm with controlled spend/gain captures before wiring runtime behavior.

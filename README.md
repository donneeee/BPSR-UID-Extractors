# BPSR UID Extractors

This is a standalone toolkit for rebuilding Blue Protocol Star Resonance lookup JSONs from the installed game files. The scripts decode package data, CTB tables, and game localization byte tables, then write generated artifacts to `output`.

## What This Section Does

The generator section answers questions like:

- What item id maps to which localized item name?
- What buff id maps to which game buff name?
- What scene or monster id is shown in each supported locale?
- Which skill, damage, recount, or Aoyi-icon ids can be proven from current game tables?
- Which talents, passives, seasonal Phantom Factors, and effect-source buffs can be tied to modifier attribution?

Each script keeps provenance in the output where the game files expose it, such as source table, source offset, linked ids, name ids, and locale-keyed `Names` objects.

## Data Flow

1. Locate the game package files from `gamepath.json` or `--game`.
2. Read `meta.pkg` to find hashed package entries such as `SceneTable.ctb`, `SkillTable.ctb`, or `english.bytes`.
3. Read `m*.pkg` package payloads and decode CTB rows or localization byte tables.
4. Carry icon fields forward only when a direct game table string or generated game-derived bridge proves the relationship.
5. Write generated JSON under `output` unless `--out` or `--output-dir` points elsewhere.

Normal generators read game package data only. A generator may read another generated output when that file is an explicit game-derived dependency, such as `DamageAttrIdName.gen` reading `BuffName.json`, `ConsumableBuffBridge.gen` reading generated BuffName and item rows to label game-derived item-use relationships, or `EffectSources.gen` reading generated BuffName, item, monster, consumable-bridge, skill-breakdown, and probe outputs.

## Maintenance Rule

When adding or materially changing an extractor generator, update this README in the same change. At minimum, keep the script list, dependency order, output descriptions, and current boundaries accurate. If the generator creates icon-bearing JSON, place it before `ExtractIcons.gen` in `GenerateAll.gen` so icon discovery can see the new references.

## Folder Layout

- `gamepath.json`: launcher preset, output folder, and probe folder settings.
- `gamepath.local.json`: optional private override for a machine-specific game path.
- `generator-common.mjs`: shared package, CTB, localization, JSON, and path helpers.
- `*.gen`: individual generator entrypoints.
- `GenerateAll.gen`: runs the current generators in dependency order.
- `ExtractIcons.gen`: resolves icon references to game texture or sprite-atlas assets and writes PNG work manifests.
- `ExportIconPngs.gen`: decodes those game assets to PNG using temporary bundle files that are removed after export.
- `ProbeSources.gen`: compares external JSON samples against the current generated outputs.
- `FormulaSurfaceProbe.gen`: scans CTB-like package entries, localization byte tables, generated outputs, and existing probe reports for damage-formula-adjacent surfaces.
- `EffectDescriptionSurfaceProbe.gen`: scans decodable CTB string pools, all loaded game localization strings, and generated parser/probe strings for effect-bearing descriptions and broad predicate tags.
- `EffectPredicateAudit.gen`: scans generated modifier/source outputs for effect rows that need extra runtime predicates, such as elite-or-stronger targets, companion/summon-only damage, timed windows, stack states, defensive direction, or missing talent/module description text.
- `EffectComponentWorklist.gen`: classifies broad effect-description and predicate-audit rows into component, behavior, predicate, and required-runtime-evidence work buckets.
- `Probing Sources/`: optional audit input folder for external JSON samples.
- `ui/`: local generator UI served by `npm run ui`.
- `output/`: generated JSON artifacts and probe reports.

## Probing Sources

`Probing Sources` is for optional samples from any external tool. JSON samples can be compared against generated outputs. Icon probes can go in `Probing Sources/images` or `Probing Sources/text`, and additional image or text probe folders can be listed in `gamepath.json` when you intentionally want to audit them. By default, icon generation uses the generated JSON outputs and current game files only.

Run:

```powershell
node .\ProbeSources.gen --dry-run
node .\ProbeSources.gen
```

The probe report is written to `output/probing-reports/ProbeSourcesReport.json`. It records matched files, output coverage, id overlap, sample-only ids, and generated-only ids.

Probe samples never become output data. If a probe exposes a useful missing id or icon, add or improve a direct game-file bridge, then regenerate from the game files.

## Formula Surface Probe

`FormulaSurfaceProbe.gen` is a broad audit tool for parser research. It scans every CTB-like package entry it can decode, row numeric fields, nested int-pool arrays, CTB strings, localization byte tables, generated parser outputs, and existing probe reports for damage formula surfaces.

Run:

```powershell
npm run probe:formula
node .\FormulaSurfaceProbe.gen --max-samples 80
```

The report is written to `output/probing-reports/FormulaSurfaceProbe.json` and `output/probing-reports/FormulaSurfaceProbe.md`. Treat the Markdown report as the community-shareable summary. It separates exact emitted child damage rows, source-only factor evidence, parameterized Phantom Factor descriptions, talent/passive evidence, ID-construction formula hits, and candidate numeric formula tables. A formula-like text hit is not proof of runtime contribution math until the table schema, active source state, target skill scope, stacking rules, and base total semantics are all validated.

## Scripts

- `ItemNames.gen`: rebuilds `itemnames.json` by scanning item table families, resolving game name ids through the language-byte localization tables, using package string fallback when the game lacks a localization hit, and attaching direct `ItemTable.ctb` icon paths when present.
- `BuffNames.gen`: rebuilds `BuffName.json` from BuffTable rows and BuffTable name ids. It can also recover unambiguous secondary names and non-generic icon paths through direct module-effect table bridges.
- `DamageAttrIdName.gen`: rebuilds `DamageAttrIdName.json` from `DamageAttrTable.ctb`. It prefers direct DamageAttr design names, then direct linked bridges through BuffName, SkillEffect, SkillTable, and SkillFightLevel data, carrying linked skill/buff names and icon paths where proven.
- `RecountTable.gen`: rebuilds `RecountTable.json` from the direct Recount row block, including localized recount labels, packed damage-id lists, icon paths inherited from generated DamageAttr rows, strict current-game talent/passive name bridges from `CTB:3345237628`, direct talent-buff formula bridges when localized names differ, and strict base-skill ownership bridges from `SkillTable.ctb`.
- `SkillAoyiIcons.gen`: rebuilds `skill_aoyi_icons.json` from `SkillAoyiTable.ctb` and proven `SkillTable.ctb` adjacent Aoyi icon paths.
- `MonsterNames.gen`: rebuilds `monsternames.json` from the monster table and game localization files.
- `SceneNames.gen`: rebuilds `scenenames.json` from the scene table and game localization files.
- `SkillNames.gen`: rebuilds `skillnames.json` from direct game-derived skill, recount, DamageAttr, SkillEffect, SkillFightLevel, SkillTable, TempAttr, and talent/passive name bridges. SkillEffect and SkillFightLevel rows can inherit localized names and icons from their proven parent `SkillTable.ctb` row.
- `ClassLabels.gen`: rebuilds class/spec label data from generated skill and class evidence.
- `SkillBreakdownDetails.gen`: rebuilds `SkillBreakdownDetails.json` from generated direct-game `DamageAttrIdName.json` and `RecountTable.json`, classifying runtime damage rows as base skill hits, procs, talents, buffs, Lucky Strike, set effects, or Imagine/Arcane rows. It preserves both the Recount owner skill/talent and the underlying DamageAttr/SkillFight source, so reused hit rows can be displayed under the correct parent while still keeping the lower-level source evidence. If a Recount-owned damage row reuses another skill's hit formula, the output keeps the Recount owner as the display name and records the reused underlying source separately.
- `SeasonTalentNodeProbe.gen`: probes seasonal talent-node rows and writes source evidence used by modifier generators.
- `SeasonRogueEntryProbe.gen`: probes seasonal rogue-entry rows and writes source evidence used by modifier generators.
- `SeasonPhantomFactorProbe.gen`: probes seasonal Phantom Factor rows, localized descriptions, icon paths, buff ids, and affected damage/recount links.
- `TalentEffectModelProbe.gen`: probes talent/effect model rows used to connect talent/passive sources to generated parser rows.
- `SeasonPhantomFactors.gen`: rebuilds `SeasonPhantomFactors.json` from `SeasonPhantomFactorProbe.json` and generated breakdown rows, promoting seasonal Phantom Factor buff ids, icon paths, grade evidence, and affected damage/recount links into parser-shaped production data.
- `ConsumableBuffBridge.gen`: rebuilds `ConsumableBuffBridge.json` from `CTB:1485987280`, `ItemTable.ctb`, generated `itemnames.json`, and generated `BuffName.json`. It maps every food item-use row to the runtime food buff effect row. Shared food buff ids are labeled by effect family, with exact dish names preserved only as candidate evidence because active-buff packets expose the effect buff, not the consumed item. Compound food effects are split into `effectComponents`; for example `ATK + DMG to Elites` becomes a global ATK component plus a target-gated elite damage component.
- `EffectSources.gen`: rebuilds `EffectSources.json` from generated BuffName, item, monster, skill breakdown, consumable bridge, and probe outputs, promoting talents, passives, Battle Imagine-owned buff sources, consumable food/potion buff sources, BuffName-linked mechanic sources, seasonal nodes, rogue-entry buffs, and Phantom Factors into a conservative modifier/source evidence index for parser attribution. Battle Imagine item names are used to owner-qualify ambiguous buff labels such as `Rorola - Enchantment`; food buff item names are candidate evidence from `ConsumableBuffBridge.json` because many dishes share one runtime effect buff, while potion item names are still used only when BuffName and itemnames share the proven final-three-digit id family. Consumable `effectComponents` are carried forward so parser attribution can apply global stat, target-gated elite damage, and incoming elite-reduction predicates separately. Monster names are fallback owner evidence only when another generated bridge proves the buff/source relationship. `ClassSpecSkillModelProbe.sharedLocalizedNames` is used as a runtime alias bridge, so child buff rows such as `Focused Concentration` can resolve back to their parent talent without implying formula semantics. It also derives activation aliases from shared base-skill/buff groups plus talent descriptions or conservative name-stem matches, so buff windows such as `Focus` can activate related passive rows like `Focused Shot` and `Focused Concentration` without hard-coded ID one-offs.
  Design-only `buff-source:*` rows are post-processed before export: if the same runtime buff id has a localized generated sibling, such as a Phantom Factor or talent, the design-only row is collapsed into that source; otherwise a unique localized parent Recount row can supply the display label. Rows with no proven localized sibling or unique Recount parent keep their design evidence but receive an `Unmapped Buff <id>` English placeholder instead of leaking raw CN labels into the UI.
- `EffectDescriptionSurfaceProbe.gen`: writes `output/probing-reports/EffectDescriptionSurfaceProbe.json` and `.md`. It scans decodable CTB string pools, all loaded game localization strings, and generated parser/probe strings for effect-bearing text, then tags broad semantics such as stat/attribute components, elite predicates, timed windows, stack states, focus windows, companion/summon sources, and compound rows that must be split before attribution. Direct CTB string-pool hits are intentionally broad and can include quest/shop/meta text; use them as discovery evidence until a structured row bridge proves parser semantics.
- `EffectPredicateAudit.gen`: writes `output/probing-reports/EffectPredicateAudit.json` and `.md`. It flags predicate-sensitive rows across `EffectSources.json`, `SeasonPhantomFactors.json`, `ConsumableBuffBridge.json`, module-like BuffName rows, and talent/passive probe rows. Use this as a checklist before parser attribution changes: rows tagged `target.elite-or-stronger` need target monster type, rows tagged `source.companion-or-summon` need original attacker/top-summoner evidence, and rows tagged `needs.description-extraction` or `needs.module-description-extraction` need richer game-file description extraction before exact semantics are trusted.
- `EffectComponentWorklist.gen`: writes `output/probing-reports/EffectComponentWorklist.json` and `.md`. It consumes `EffectDescriptionSurfaceProbe.json` and `EffectPredicateAudit.json`, then groups rows into effect component buckets such as offense stats, damage modifiers, damage reduction, healing/shields, proc damage, cooldown/resource effects, timed windows, stack/ramp effects, target-rank predicates, companion/summon source predicates, party/external predicates, target debuffs, stat-conversion chains, and required parser evidence. It is a promotion worklist only; it does not write production attribution data.
- `ExtractIcons.gen`: scans generated JSON files plus configured probe folders for icon-like references, resolves texture and sprite-atlas bridges through the game catalogs, and writes manifests under `output/icons`.
- `ExportIconPngs.gen`: reads icon manifests, temporarily loads the required game bundles, exports PNG files under `output/icons/<group>/`, verifies probe-image pixel matches when available, and removes the temporary bundle files.
- `ExportParserAssets.gen`: stages a parser-shaped image tree under `output/parser-assets/static/images` and writes `asset-path-map.json` with the game-file-derived parser image path for each exported asset.
- `GenerateAll.gen`: runs the generator set in dependency order.
- `ProbeSources.gen`: audits external JSON samples against generated outputs.
- `FormulaSurfaceProbe.gen`: builds a conservative formula-surface report for parser developers, highlighting exact child damage ids separately from source-only or parameterized modifier evidence.
- `EffectDescriptionSurfaceProbe.gen`: builds a broad effect-description surface report for parser developers, highlighting component, predicate, timing, stack, focus, companion/summon, and compound-effect text across CTB string pools, game localization, and generated JSON.
- `EffectPredicateAudit.gen`: builds a conservative modifier predicate report for parser developers, highlighting rows that need target monster, source actor, direction, timing, stack, or description-extraction work before contribution math can be exact.
- `EffectComponentWorklist.gen`: builds the next-step classification worklist from the broad surface and predicate audit, separating discovery-only text from structured component candidates and runtime-evidence blockers.

## Running

From this folder:

```powershell
node .\GenerateAll.gen --dry-run
node .\GenerateAll.gen
```

`GenerateAll.gen` currently runs in this order:

1. `ItemNames.gen`
2. `BuffNames.gen`
3. `ConsumableBuffBridge.gen`
4. `DamageAttrIdName.gen`
5. `RecountTable.gen`
6. `SkillAoyiIcons.gen`
7. `MonsterNames.gen`
8. `SceneNames.gen`
9. `SkillNames.gen`
10. `ClassLabels.gen`
11. `SkillBreakdownDetails.gen`
12. `SeasonTalentNodeProbe.gen`
13. `SeasonRogueEntryProbe.gen`
14. `SeasonPhantomFactorProbe.gen`
15. `TalentEffectModelProbe.gen`
16. `SeasonPhantomFactors.gen`
17. `EffectSources.gen`
18. `EffectDescriptionSurfaceProbe.gen`
19. `EffectPredicateAudit.gen`
20. `EffectComponentWorklist.gen`
21. `ExtractIcons.gen`
22. `ExportIconPngs.gen`
23. `ExportParserAssets.gen`

The modifier generators intentionally run before icon extraction. This lets `ExtractIcons.gen` discover nested `yinzi_*` and `kuangxiangyinzi_*` references from `SeasonPhantomFactors.json` and `EffectSources.json`, then lets `ExportParserAssets.gen` stage those factor images under `static/images/season_phantom_factor`.

Run the standalone generator UI:

```powershell
npm run ui
```

The UI starts a local server at `http://127.0.0.1:8735/`. It runs the same `.gen` files from this folder and shows current output status without requiring the parser app.

Run one generator when you are working on a single table:

```powershell
node .\DamageAttrIdName.gen --dry-run
node .\SkillNames.gen --dry-run
```

Use `--out <file>` or `--output-dir <dir>` to redirect output. By default, output stays under `output`.

`gamepath.json` defaults to the Steam launcher preset:

```json
{
  "gamePath": "steam"
}
```

Supported presets are `steam`, `epic`, `standalone`, and `auto`. Use `--game <path|preset>` for a one-off run. For a machine-specific install path, create `gamepath.local.json`; it is ignored by git and overrides `gamepath.json`.

Extract icons from generated outputs and configured probe folders:

```powershell
node .\ExtractIcons.gen --dry-run
node .\ExtractIcons.gen
node .\ExportIconPngs.gen
node .\ExportParserAssets.gen --dry-run
node .\ExportParserAssets.gen
```

Icon extraction writes manifests first, then PNG files. Durable icon output is PNG plus provenance JSON only. The manifests record the original field or probe, game asset address, address hash, bundle hash, sprite or texture name, PNG file, image size, and probe pixel-match status when applicable.

Parser asset staging does not write into the parser repository. It produces `output/parser-assets/static/images`, `output/parser-assets/asset-path-map.json`, and `output/parser-assets/manifest.json` so the staged tree can be compared before anything is copied over parser assets. Use `--compare-static-dir <path>` to compare against an existing parser `static/images` folder.

PNG export uses local Python decoder packages. Install them into the extractor folder when needed:

```powershell
python -m pip install --target .\.pydeps UnityPy Pillow texture2ddecoder
```

## Current Boundaries

The current generators intentionally exclude ids that cannot be proven from current game files.

- DamageAttr ids must exist as current `DamageAttrTable.ctb` rows.
- Skill rows need a direct name, recount, damage, effect, fight-level, table, or TempAttr bridge.
- Aoyi icon rows need a current game table bridge for the id and icon/name relationship.
- Modifier source rows need generated source evidence from current game tables or generated game-derived probes; BuffName-linked mechanic sources are promoted when `SkillBreakdownDetails` proves the buff id and affected damage/recount row. Targetless Battle Imagine-owned buff catalog rows are promoted only when `BuffName.json` plus `itemnames.json` proves the owner. Food and potion runtime buffs are promoted from the 2032xxx/2033xxx BuffName ranges; exact consumable names are attached only when the matching 1012xxx/1015xxx item row exists under the same final-three-digit id family. Monster owner names may enrich already-proven rows but do not create targetless sources by themselves. Probe-only samples are not promoted by themselves.
- Seasonal Phantom Factor output currently depends on the probe chain plus generated skill-breakdown evidence, then stages icon refs during parser asset export.
- Some BuffName rows only expose design/internal strings because the game row has no localization name id.
- Monster and scene rows currently emit names only; no direct icon field has been proven for those tables.

When a row is missing, use the probe report to guide a game-file search, then update the direct bridge that proves it.

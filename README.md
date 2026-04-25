# BPSR UID Extractors

This is a standalone toolkit for rebuilding Blue Protocol Star Resonance lookup JSONs from the installed game files. The scripts decode package data, CTB tables, and game localization byte tables, then write generated artifacts to `output`.

## What This Section Does

The generator section answers questions like:

- What item id maps to which localized item name?
- What buff id maps to which game buff name?
- What scene or monster id is shown in each supported locale?
- Which skill, damage, recount, or Aoyi-icon ids can be proven from current game tables?

Each script keeps provenance in the output where the game files expose it, such as source table, source offset, linked ids, name ids, and locale-keyed `Names` objects.

## Data Flow

1. Locate the game package files from `gamepath.json` or `--game`.
2. Read `meta.pkg` to find hashed package entries such as `SceneTable.ctb`, `SkillTable.ctb`, or `english.bytes`.
3. Read `m*.pkg` package payloads and decode CTB rows or localization byte tables.
4. Carry icon fields forward only when a direct game table string or generated game-derived bridge proves the relationship.
5. Write generated JSON under `output` unless `--out` or `--output-dir` points elsewhere.

Normal generators read game package data only. A generator may read another generated output when that file is an explicit game-derived dependency, such as `DamageAttrIdName.gen` reading `BuffName.json`.

## Folder Layout

- `gamepath.json`: launcher preset, output folder, and probe folder settings.
- `gamepath.local.json`: optional private override for a machine-specific game path.
- `generator-common.mjs`: shared package, CTB, localization, JSON, and path helpers.
- `*.gen`: individual generator entrypoints.
- `GenerateAll.gen`: runs the current generators in dependency order.
- `ExtractIcons.gen`: resolves icon references to game texture or sprite-atlas assets and writes PNG work manifests.
- `ExportIconPngs.gen`: decodes those game assets to PNG using temporary bundle files that are removed after export.
- `ProbeSources.gen`: compares external JSON samples against the current generated outputs.
- `Probing Sources/`: optional audit input folder for external JSON samples.
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

## Scripts

- `ItemNames.gen`: rebuilds `itemnames.json` by scanning item table families, resolving game name ids through the language-byte localization tables, using package string fallback when the game lacks a localization hit, and attaching direct `ItemTable.ctb` icon paths when present.
- `BuffNames.gen`: rebuilds `BuffName.json` from BuffTable rows and BuffTable name ids. It can also recover unambiguous secondary names and non-generic icon paths through direct module-effect table bridges.
- `RecountTable.gen`: rebuilds `RecountTable.json` from the direct Recount row block, including localized recount labels, packed damage-id lists, icon paths inherited from generated DamageAttr rows, strict current-game talent/passive name bridges from `CTB:3345237628`, direct talent-buff formula bridges when localized names differ, and strict base-skill ownership bridges from `SkillTable.ctb`.
- `DamageAttrIdName.gen`: rebuilds `DamageAttrIdName.json` from `DamageAttrTable.ctb`. It prefers direct DamageAttr design names, then direct linked bridges through BuffName, SkillEffect, SkillTable, and SkillFightLevel data, carrying linked skill/buff names and icon paths where proven.
- `SkillBreakdownDetails.gen`: rebuilds `SkillBreakdownDetails.json` from generated direct-game `DamageAttrIdName.json` and `RecountTable.json`, classifying runtime damage rows as base skill hits, procs, talents, buffs, Lucky Strike, set effects, or Imagine/Arcane rows. It preserves both the Recount owner skill/talent and the underlying DamageAttr/SkillFight source, so reused hit rows can be displayed under the correct parent while still keeping the lower-level source evidence. If a Recount-owned damage row reuses another skill's hit formula, the output keeps the Recount owner as the display name and records the reused underlying source separately.
- `SkillAoyiIcons.gen`: rebuilds `skill_aoyi_icons.json` from `SkillAoyiTable.ctb` and proven `SkillTable.ctb` adjacent Aoyi icon paths.
- `MonsterNames.gen`: rebuilds `monsternames.json` from the monster table and game localization files.
- `SceneNames.gen`: rebuilds `scenenames.json` from the scene table and game localization files.
- `SkillNames.gen`: rebuilds `skillnames.json` from direct game-derived skill, recount, DamageAttr, SkillEffect, SkillFightLevel, SkillTable, TempAttr, and talent/passive name bridges. SkillEffect and SkillFightLevel rows can inherit localized names and icons from their proven parent `SkillTable.ctb` row.
- `ExtractIcons.gen`: scans generated JSON files plus configured probe folders for icon-like references, resolves texture and sprite-atlas bridges through the game catalogs, and writes manifests under `output/icons`.
- `ExportIconPngs.gen`: reads icon manifests, temporarily loads the required game bundles, exports PNG files under `output/icons/<group>/`, verifies probe-image pixel matches when available, and removes the temporary bundle files.
- `ExportParserAssets.gen`: stages a parser-shaped image tree under `output/parser-assets/static/images` and writes `asset-path-map.json` with the game-file-derived parser image path for each exported asset.
- `GenerateAll.gen`: runs the generator set in dependency order.
- `ProbeSources.gen`: audits external JSON samples against generated outputs.

## Running

From this folder:

```powershell
node .\GenerateAll.gen --dry-run
node .\GenerateAll.gen
```

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
- Some BuffName rows only expose design/internal strings because the game row has no localization name id.
- Monster and scene rows currently emit names only; no direct icon field has been proven for those tables.

When a row is missing, use the probe report to guide a game-file search, then update the direct bridge that proves it.

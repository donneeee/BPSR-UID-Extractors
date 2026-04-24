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
4. Write generated JSON under `output` unless `--out` or `--output-dir` points elsewhere.

Normal generators read game package data only. A generator may read another generated output when that file is an explicit game-derived dependency, such as `DamageAttrIdName.gen` reading `BuffName.json`.

## Folder Layout

- `gamepath.json`: local game path, output folder, and probe folder settings.
- `generator-common.mjs`: shared package, CTB, localization, JSON, and path helpers.
- `*.gen`: individual generator entrypoints.
- `GenerateAll.gen`: runs the current generators in dependency order.
- `ExtractIcons.gen`: extracts icon asset bundles referenced by generated JSON outputs.
- `ExportIconPngs.gen`: converts extracted icon asset bundles into PNG files.
- `Probing Sources/`: optional audit input folder for external JSON samples.
- `output/`: generated JSON artifacts and probe reports.

## Probing Sources

`Probing Sources` is for optional JSON samples from any external tool. Keep filenames close to the output you want to compare, such as `BuffName.json`, `skillnames.json`, or `scenenames.json`.

Run:

## Scripts

- `ItemNames.gen`: rebuilds `itemnames.json` by scanning item table families, resolving game name ids through the language-byte localization tables, and using package string fallback when the game lacks a localization hit.
- `BuffNames.gen`: rebuilds `BuffName.json` from BuffTable rows and BuffTable name ids. It can also recover unambiguous secondary names through direct module-effect table bridges.
- `RecountTable.gen`: rebuilds `RecountTable.json` from `RecountTable.ctb`, including localized recount labels and packed damage-id lists.
- `DamageAttrIdName.gen`: rebuilds `DamageAttrIdName.json` from `DamageAttrTable.ctb`. It prefers direct DamageAttr design names, then direct linked bridges through BuffName, SkillEffect, SkillTable, and SkillFightLevel data.
- `SkillAoyiIcons.gen`: rebuilds `skill_aoyi_icons.json` from `SkillAoyiTable.ctb` and proven `SkillTable.ctb` adjacent Aoyi icon paths.
- `MonsterNames.gen`: rebuilds `monsternames.json` from the monster table and game localization files.
- `SceneNames.gen`: rebuilds `scenenames.json` from the scene table and game localization files.
- `SkillNames.gen`: rebuilds `skillnames.json` from direct game-derived skill, recount, DamageAttr, SkillEffect, SkillFightLevel, SkillTable, and TempAttr bridges.
- `ExtractIcons.gen`: scans generated JSON files for icon asset references, resolves them through the game address catalog, and writes matching UnityFS bundles under `output/icons/<json-name>/`.
- `ExportIconPngs.gen`: decodes extracted icon bundles into PNG files and updates the icon manifests with image metadata.
- `GenerateAll.gen`: runs the generator set in dependency order.
- `ProbeSources.gen`: audits external JSON samples against generated outputs.

## Running

From this folder:

```powershell
node .\GenerateAll.gen --dry-run
node .\GenerateAll.gen
```

Run one generator when you are working on a single table:

```powershell
node .\DamageAttrIdName.gen --dry-run
node .\SkillNames.gen --dry-run
```

Use `--out <file>` or `--output-dir <dir>` to redirect output. By default, output stays under `output`.

Extract icons from the generated JSON outputs:

```powershell
node .\ExtractIcons.gen --dry-run
node .\ExtractIcons.gen
```

Icon extraction writes game asset bundles and PNG files to `output/icons/<json-name>/`. The manifests record the original JSON field, asset address, address hash, bundle hash, output file, PNG file, and image size.

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

When a row is missing, use the probe report to guide a game-file search, then update the direct bridge that proves it.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const generatorDir = path.dirname(fileURLToPath(import.meta.url));

export function readJson(filePath, fallback = undefined) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    if (fallback !== undefined && error && error.code === "ENOENT") {
      return fallback;
    }
    throw error;
  }
}

export function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function resolveNearGenerator(maybeRelative) {
  if (!maybeRelative) {
    return "";
  }
  return path.isAbsolute(maybeRelative)
    ? path.normalize(maybeRelative)
    : path.resolve(generatorDir, maybeRelative);
}

export function displayPath(filePath) {
  const resolved = path.resolve(String(filePath || ""));
  const relative = path.relative(generatorDir, resolved);
  if (!relative || relative === "") {
    return ".";
  }
  if (!relative.startsWith("..") && !path.isAbsolute(relative)) {
    return relative.replace(/\\/g, "/");
  }
  return path.basename(resolved);
}

export function loadGeneratorConfig() {
  const configPath = path.join(generatorDir, "gamepath.json");
  const localConfigPath = path.join(generatorDir, "gamepath.local.json");
  const config = {
    ...readJson(configPath, {}),
    ...readJson(localConfigPath, {})
  };
  const outputDir = resolveNearGenerator(config.outputDir || "./output");
  const probingSourcesDir = resolveNearGenerator(config.probingSourcesDir || "./Probing Sources");
  const probeImageDirs = resolveConfiguredPathList(config.probeImageDirs);
  const probeTextDirs = resolveConfiguredPathList(config.probeTextDirs);
  return {
    configPath,
    localConfigPath,
    gamePath: config.gamePath || "steam",
    outputDir,
    probingSourcesDir,
    probeImageDirs,
    probeTextDirs
  };
}

function resolveConfiguredPathList(value) {
  const values = Array.isArray(value) ? value : value ? [value] : [];
  return values.map(resolveNearGenerator).filter(Boolean);
}

export function parseArgs(argv, defaults = {}) {
  const args = { ...defaults, _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) {
      args._.push(token);
      continue;
    }

    const eq = token.indexOf("=");
    const key = token.slice(2, eq === -1 ? undefined : eq);
    const inlineValue = eq === -1 ? undefined : token.slice(eq + 1);

    if (key === "dry-run" || key === "help") {
      args[toCamel(key)] = true;
      continue;
    }

    const value = inlineValue ?? argv[++i];
    if (value === undefined) {
      throw new Error(`Missing value for --${key}`);
    }
    args[toCamel(key)] = value;
  }
  return args;
}

function toCamel(value) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function printHelp(title, options) {
  console.log(title);
  console.log("");
  console.log("Common options:");
  console.log("  --game <path|preset>      Game path or launcher preset: steam, epic, standalone, auto.");
  console.log("  --out <path>              Output JSON file path.");
  console.log("  --output-dir <path>       Output directory override.");
  console.log("  --dry-run                 Scan and report without writing.");
  if (options) {
    console.log("");
    console.log(options.trimEnd());
  }
}

export function resolvePaths(args, defaultOutName) {
  const config = loadGeneratorConfig();
  const outputDir = path.resolve(args.outputDir ? args.outputDir : config.outputDir);
  const probingSourcesDir = path.resolve(
    args.probingSourcesDir ? args.probingSourcesDir : config.probingSourcesDir
  );
  const probeImageDirs = resolveArgPathList(args.probeImageDir, config.probeImageDirs);
  const probeTextDirs = resolveArgPathList(args.probeTextDir, config.probeTextDirs);
  const out = path.resolve(args.out ? args.out : path.join(outputDir, defaultOutName));
  const gameRoot = args.game || config.gamePath;
  const m0Path = resolveM0Package(gameRoot);
  return {
    ...config,
    outputDir,
    probingSourcesDir,
    probeImageDirs,
    probeTextDirs,
    out,
    gameRoot,
    m0Path
  };
}

function resolveArgPathList(value, fallback) {
  if (!value) {
    return Array.isArray(fallback) ? fallback : [];
  }
  const values = Array.isArray(value) ? value : [value];
  return values.map((entry) => path.resolve(entry)).filter(Boolean);
}

export function resolveM0Package(gamePath) {
  const candidates = [];
  const gamePathText = String(gamePath || "steam").trim();
  const preset = normalizeGamePathPreset(gamePathText);
  const explicitGamePath = gamePathText && !preset;

  if (explicitGamePath) {
    addGameRootCandidates(candidates, path.resolve(gamePathText));
  } else {
    for (const root of launcherRootCandidates(preset || "steam")) {
      addGameRootCandidates(candidates, root);
    }
  }

  for (const candidate of candidates) {
    if (candidate && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return path.normalize(candidate);
    }
  }

  throw new Error(
    "Could not find m0.pkg. Set BPSR-UID-Extractors/gamepath.json gamePath or pass --game."
  );
}

function normalizeGamePathPreset(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized) return "steam";
  if (["steam", "epic", "standalone", "auto"].includes(normalized)) return normalized;
  return "";
}

function launcherRootCandidates(preset) {
  const roots = [];
  if (preset === "steam" || preset === "auto") {
    for (const programRoot of programFileRoots()) {
      roots.push(path.join(programRoot, "Steam", "steamapps", "common", "Blue Protocol Star Resonance"));
    }
  }
  if (preset === "epic" || preset === "auto") {
    for (const programRoot of programFileRoots()) {
      roots.push(path.join(programRoot, "Epic Games", "Blue Protocol Star Resonance"));
      roots.push(path.join(programRoot, "Epic Games", "BlueProtocolStarResonance"));
      roots.push(path.join(programRoot, "Epic Games", "Star Resonance"));
    }
  }
  if (preset === "standalone" || preset === "auto") {
    for (const programRoot of programFileRoots()) {
      roots.push(path.join(programRoot, "Blue Protocol Star Resonance"));
      roots.push(path.join(programRoot, "Star Resonance"));
      roots.push(path.join(programRoot, "BPSR"));
    }
  }
  return uniquePathCandidates(roots);
}

function programFileRoots() {
  return uniquePathCandidates([process.env["ProgramFiles(x86)"], process.env.ProgramFiles]);
}

function addGameRootCandidates(candidates, root) {
  candidates.push(root);
  candidates.push(path.join(root, "m0.pkg"));
  candidates.push(path.join(root, "container", "m0.pkg"));
  candidates.push(path.join(root, "BPSR_STEAM_Data", "StreamingAssets", "container", "m0.pkg"));
  candidates.push(path.join(root, "bpsr", "BPSR_STEAM_Data", "StreamingAssets", "container", "m0.pkg"));
}

function uniquePathCandidates(values) {
  const seen = new Set();
  const out = [];
  for (const value of values) {
    if (!value) continue;
    const normalized = path.normalize(value);
    const key = normalized.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(normalized);
  }
  return out;
}

export function readPackage(m0Path) {
  const stat = fs.statSync(m0Path);
  console.log("Reading game package m0.pkg");
  console.log(`Package size: ${formatBytes(stat.size)}`);
  return fs.readFileSync(m0Path);
}

export function validatePackagePath(m0Path) {
  const stat = fs.statSync(m0Path);
  console.log("Found game package m0.pkg");
  console.log(`Package size: ${formatBytes(stat.size)}`);
}

function formatBytes(size) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KiB`;
  return `${(size / 1024 / 1024).toFixed(1)} MiB`;
}

export function readU16(buffer, offset) {
  if (offset < 0 || offset + 2 > buffer.length) return undefined;
  return buffer.readUInt16LE(offset);
}

export function readU32(buffer, offset) {
  if (offset < 0 || offset + 4 > buffer.length) return undefined;
  return buffer.readUInt32LE(offset);
}

export function normalizeText(value) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const GAME_LANGUAGE_TO_LOCALE_ID = Object.freeze({
  english: "en",
  chinese: "zh-CN",
  traditionalchinese: "zh-TW",
  japanese: "ja",
  korean: "ko-KR",
  french: "fr",
  german: "de",
  spanish: "es",
  portuguese: "pt-BR",
  thai: "th",
  indonesian: "id"
});

export const DEFAULT_LOCALE_ID_ORDER = Object.freeze([
  "en",
  "zh-CN",
  "zh-TW",
  "ja",
  "ko-KR",
  "fr",
  "de",
  "es",
  "pt-BR",
  "th",
  "id",
  "und",
  "design"
]);

export function localeIdFromGameLanguage(language) {
  const normalized = normalizeText(language).toLowerCase();
  return GAME_LANGUAGE_TO_LOCALE_ID[normalized] || normalized;
}

export function buildLocaleTextObject(entries, options = {}) {
  const byLocale = new Map();
  const localeOrder = Array.isArray(options.localeOrder)
    ? options.localeOrder
    : DEFAULT_LOCALE_ID_ORDER;
  const designKey = normalizeText(options.designKey || "design") || "design";
  const designText = normalizeText(options.designText || "");
  const includeDesign = options.includeDesign !== false;

  for (const entry of Array.isArray(entries) ? entries : []) {
    if (!entry) {
      continue;
    }
    const localeId =
      normalizeText(entry.localeId || "") ||
      localeIdFromGameLanguage(entry.language || entry.locale || "");
    const text = normalizeText(entry.text ?? entry.label ?? "");
    if (!localeId || !text || byLocale.has(localeId)) {
      continue;
    }
    byLocale.set(localeId, text);
  }

  if (includeDesign && designText) {
    const hasDesignDuplicate = [...byLocale.values()].some((value) => value === designText);
    if (!hasDesignDuplicate) {
      byLocale.set(designKey, designText);
    }
  }

  const out = {};
  const seen = new Set();
  const orderedLocaleIds = [
    ...localeOrder,
    ...[...byLocale.keys()].filter((localeId) => !localeOrder.includes(localeId)).sort((a, b) =>
      a.localeCompare(b)
    )
  ];

  for (const localeId of orderedLocaleIds) {
    if (seen.has(localeId) || !byLocale.has(localeId)) {
      continue;
    }
    seen.add(localeId);
    out[localeId] = byLocale.get(localeId);
  }

  return out;
}

export function choosePreferredLocaleText(namesByLocale, fallback = "", options = {}) {
  const localeOrder = Array.isArray(options.localeOrder)
    ? options.localeOrder
    : DEFAULT_LOCALE_ID_ORDER;
  const names =
    namesByLocale instanceof Map
      ? Object.fromEntries(namesByLocale.entries())
      : namesByLocale && typeof namesByLocale === "object"
        ? namesByLocale
        : {};

  for (const localeId of localeOrder) {
    const text = normalizeText(names[localeId]);
    if (text) {
      return text;
    }
  }

  for (const value of Object.values(names)) {
    const text = normalizeText(value);
    if (text) {
      return text;
    }
  }

  return normalizeText(fallback) || "";
}

export const GAME_LOCALIZATION_LANGUAGES = Object.freeze([
  "english",
  "chinese",
  "traditionalchinese",
  "japanese",
  "korean",
  "french",
  "german",
  "spanish",
  "portuguese",
  "thai",
  "indonesian"
]);

export function hash33(value) {
  let hash = 5381 >>> 0;
  for (const char of String(value || "")) {
    hash = (Math.imul(hash, 33) + char.charCodeAt(0)) >>> 0;
  }
  return hash >>> 0;
}

export function readMetaEntries(metaPath) {
  const buffer = fs.readFileSync(metaPath);
  let offset = 0;
  const readI32 = () => {
    const value = buffer.readInt32LE(offset);
    offset += 4;
    return value;
  };
  const readMetaU32 = () => {
    const value = buffer.readUInt32LE(offset);
    offset += 4;
    return value;
  };
  const readMetaU16 = () => {
    const value = buffer.readUInt16LE(offset);
    offset += 2;
    return value;
  };

  readI32();
  readI32();
  readI32();
  offset += 8;
  readMetaU32();
  const headerCount = readMetaU16();
  offset += 16 * headerCount;

  const entries = new Map();
  readEntrySection(readI32());
  readEntrySection(readI32());
  return entries;

  function readEntrySection(count) {
    for (let i = 0; i < count; i += 1) {
      const key = readMetaU32();
      const type = buffer[offset];
      offset += 1;
      const index = readMetaU16();
      const entryOffset = readI32();
      const length = readI32();
      entries.set(key, { key, type, index, offset: entryOffset, length });
    }
  }
}

export function loadMetaEntries(containerDir) {
  const metaPath = path.join(containerDir, "meta.pkg");
  if (!fs.existsSync(metaPath)) {
    return new Map();
  }
  return readMetaEntries(metaPath);
}

export function readPkgEntry(containerDir, entry) {
  const pkgPath = path.join(containerDir, `m${entry.index}.pkg`);
  const fd = fs.openSync(pkgPath, "r");
  try {
    const buffer = Buffer.alloc(entry.length);
    fs.readSync(fd, buffer, 0, entry.length, entry.offset);
    return buffer;
  } finally {
    fs.closeSync(fd);
  }
}

export function parseLocalizationBytes(buffer) {
  let offset = 0;
  const readI32 = () => {
    const value = buffer.readInt32LE(offset);
    offset += 4;
    return value;
  };
  const indexCount = readI32();
  const index = new Map();
  for (let i = 0; i < indexCount; i += 1) {
    const key = readI32();
    const value = readI32();
    index.set(key, value);
  }

  const stringCount = readI32();
  const strings = [];
  for (let i = 0; i < stringCount; i += 1) {
    const [len, nextOffset] = readSevenBitEncodedInt(buffer, offset);
    offset = nextOffset;
    strings.push(buffer.subarray(offset, offset + len).toString("utf8"));
    offset += len;
  }

  return { index, strings };
}

export function loadLocalizationTables(containerDir, options = {}) {
  const metaEntries = options.metaEntries instanceof Map ? options.metaEntries : loadMetaEntries(containerDir);
  const languages = Array.isArray(options.languages)
    ? options.languages
    : GAME_LOCALIZATION_LANGUAGES;
  if (!metaEntries.size) {
    return [];
  }

  const tables = [];
  for (const language of languages) {
    const entry = metaEntries.get(hash33(`${language}.bytes`));
    if (!entry) {
      continue;
    }
    const data = readPkgEntry(containerDir, entry);
    tables.push({ language, ...parseLocalizationBytes(data) });
  }
  return tables;
}

export function readCtbTable(containerDir, metaEntries, tableName) {
  const entries = metaEntries instanceof Map ? metaEntries : loadMetaEntries(containerDir);
  const key = hash33(tableName);
  const entry = entries.get(key);
  if (!entry) {
    throw new Error(`Missing ${tableName} entry in meta.pkg.`);
  }

  return readCtbTableEntry(containerDir, entry, tableName, key);
}

export function readCtbTableByHash(containerDir, metaEntries, hash, tableName = `CTB:${hash}`) {
  const entries = metaEntries instanceof Map ? metaEntries : loadMetaEntries(containerDir);
  const key = Number(hash) >>> 0;
  const entry = entries.get(key);
  if (!entry) {
    throw new Error(`Missing ${tableName} entry (${key}) in meta.pkg.`);
  }

  return readCtbTableEntry(containerDir, entry, tableName, key);
}

export function readCtbTableEntry(containerDir, entry, tableName = `CTB:${entry?.key ?? ""}`, key = entry?.key) {
  const data = readPkgEntry(containerDir, entry);
  const rowCount = data.readInt32LE(8);
  const poolCount = data.readInt32LE(12);
  const rowDataBytes = data.readInt32LE(16);
  if (rowCount <= 0 || poolCount < 0 || rowDataBytes <= 0 || rowDataBytes % rowCount !== 0) {
    throw new Error(`Invalid CTB header for ${tableName}.`);
  }

  const rowSize = rowDataBytes / rowCount;
  const indexStart = 20;
  const rowStart = indexStart + rowCount * 8;
  let offset = rowStart + rowDataBytes;
  const pools = new Map();

  for (let index = 0; index < poolCount; index += 1) {
    if (offset + 8 > data.length) {
      throw new Error(`Invalid CTB pool header for ${tableName}.`);
    }
    const type = data.readInt32LE(offset);
    const length = data.readInt32LE(offset + 4);
    offset += 8;
    if (length < 0 || offset + length > data.length) {
      throw new Error(`Invalid CTB pool length for ${tableName}.`);
    }
    pools.set(type, data.subarray(offset, offset + length));
    offset += length;
  }

  return {
    tableName,
    key,
    entry,
    data,
    rowCount,
    poolCount,
    rowDataBytes,
    rowSize,
    indexStart,
    rowStart,
    pools
  };
}

export function readCtbString(table, poolType, offset, options = {}) {
  const pool = table?.pools?.get(poolType);
  const numericOffset = Number(offset);
  if (!pool || !Number.isInteger(numericOffset) || numericOffset < 0) {
    return "";
  }
  if (numericOffset === 0 && options.allowZero === false) {
    return "";
  }
  if (numericOffset + 2 > pool.length) {
    return "";
  }
  const len = pool.readUInt16LE(numericOffset);
  const maxLen = Number(options.maxLen || 512);
  if (!len || len > maxLen || numericOffset + 2 + len > pool.length) {
    return "";
  }
  const bytes = pool.subarray(numericOffset + 2, numericOffset + 2 + len);
  if (bytes.includes(0)) {
    return "";
  }
  return normalizeText(bytes.toString("utf8"));
}

export function nextCtbStringOffset(table, poolType, offset) {
  const pool = table?.pools?.get(poolType);
  const numericOffset = Number(offset);
  if (!pool || !Number.isInteger(numericOffset) || numericOffset < 0 || numericOffset + 2 > pool.length) {
    return -1;
  }
  const len = pool.readUInt16LE(numericOffset);
  if (!len || numericOffset + 2 + len > pool.length) {
    return -1;
  }
  return numericOffset + 2 + len;
}

export function looksLikeIconPath(value) {
  const text = normalizeText(value).replace(/\\/g, "/");
  if (!text) {
    return false;
  }
  if (/^ui\//i.test(text)) {
    return true;
  }
  if (/\.(png|dds|tga|ktx)$/i.test(text)) {
    return true;
  }
  if (/^skill_aoyi_advanced_texture\d+$/i.test(text)) {
    return true;
  }
  return text.includes("/") && /(icon|texture|sprite|skill|buff|item|weapon|atlas|mainui)/i.test(text);
}

function readSevenBitEncodedInt(buffer, offset) {
  let count = 0;
  let shift = 0;
  let current = 0;
  do {
    current = buffer[offset];
    offset += 1;
    count |= (current & 0x7f) << shift;
    shift += 7;
    if (shift > 35) {
      throw new Error("Invalid 7-bit encoded integer in localization bytes.");
    }
  } while ((current & 0x80) !== 0);
  return [count, offset];
}

export function readStructuredStringRecord(buffer, offset) {
  const id = readU32(buffer, offset);
  const len = readU16(buffer, offset + 4);
  if (!id || !len || len > 512 || offset + 6 + len > buffer.length) {
    return null;
  }
  const textBytes = buffer.subarray(offset + 6, offset + 6 + len);
  if (textBytes.includes(0)) {
    return null;
  }
  const text = normalizeText(textBytes.toString("utf8"));
  if (!isLikelyShortText(text)) {
    return null;
  }
  return { id, len, text, offset, end: offset + 6 + len };
}

export function isLikelyShortText(text) {
  if (!text || text.length > 160) return false;
  if (/[\uFFFD]/u.test(text)) return false;
  if (/[\x00-\x08\x0e-\x1f]/.test(text)) return false;
  return true;
}

export function isLikelyNameText(text) {
  if (!isLikelyShortText(text)) return false;
  if (text.length > 96) return false;
  if (/[\\/][A-Za-z0-9_. -]+[\\/]/.test(text)) return false;
  if (/\.(png|jpg|jpeg|dds|tga|prefab|asset|uasset|wav|ogg|bnk)$/i.test(text)) return false;
  if (/^(icon|sprite|effect|sound|ui|assets?)\b/i.test(text)) return false;
  return true;
}

export function collectStructuredStringsByIds(buffer, ids, options = {}) {
  const idSet = new Set(ids.map((id) => Number(id)));
  const out = new Map();
  const start = Math.max(0, Number(options.start || 0));
  const end = Math.min(buffer.length - 6, Number(options.end || buffer.length - 6));
  const maxLen = Number(options.maxLen || 512);

  for (let offset = start; offset <= end; offset += 1) {
    const id = readU32(buffer, offset);
    if (!idSet.has(id) || out.has(id)) {
      continue;
    }
    const len = readU16(buffer, offset + 4);
    if (!len || len > maxLen || offset + 6 + len > buffer.length) {
      continue;
    }
    const textBytes = buffer.subarray(offset + 6, offset + 6 + len);
    if (textBytes.includes(0)) {
      continue;
    }
    const text = normalizeText(textBytes.toString("utf8"));
    if (isLikelyNameText(text)) {
      out.set(id, { id, text, offset });
    }
  }

  return out;
}

export function makeU32Pattern(values, stride = 4) {
  const width = stride * values.length;
  const pattern = Buffer.alloc(width);
  for (let i = 0; i < values.length; i += 1) {
    pattern.writeUInt32LE(values[i], i * stride);
  }
  return pattern;
}

export function findFirstPattern(buffer, pattern, start = 0) {
  return buffer.indexOf(pattern, start);
}

export function collectU32Rows(buffer, startOffset, options = {}) {
  const stride = Number(options.stride || 8);
  const maxRows = Number(options.maxRows || 20000);
  const maxMisses = Number(options.maxMisses || 64);
  const minId = Number(options.minId || 1);
  const maxId = Number(options.maxId || 0xffffffff);
  const requireZeroTail = options.requireZeroTail !== false;
  const rows = [];
  let misses = 0;

  for (let row = 0; row < maxRows; row += 1) {
    const offset = startOffset + row * stride;
    if (offset + 4 > buffer.length) break;
    const id = readU32(buffer, offset);
    const tail = stride >= 8 ? readU32(buffer, offset + 4) : 0;
    const valid =
      id >= minId &&
      id <= maxId &&
      (!requireZeroTail || tail === 0);

    if (valid) {
      rows.push({ id, offset, row });
      misses = 0;
    } else {
      misses += 1;
      if (misses >= maxMisses) {
        break;
      }
    }
  }

  return rows;
}

export function parseLengthPrefixedStrings(buffer, startOffset, options = {}) {
  const end = Math.min(buffer.length, Number(options.end || startOffset + 8 * 1024 * 1024));
  const max = Number(options.max || 50000);
  const maxLen = Number(options.maxLen || 240);
  const out = [];
  let offset = Math.max(0, startOffset);

  while (offset + 2 <= end && out.length < max) {
    const withId = readStructuredStringRecord(buffer, offset);
    if (withId && withId.len <= maxLen) {
      out.push(withId);
      offset = withId.end;
      continue;
    }

    const len = readU16(buffer, offset);
    if (len && len <= maxLen && offset + 2 + len <= end) {
      const bytes = buffer.subarray(offset + 2, offset + 2 + len);
      if (!bytes.includes(0)) {
        const text = normalizeText(bytes.toString("utf8"));
        if (isLikelyNameText(text)) {
          out.push({ id: null, len, text, offset, end: offset + 2 + len });
          offset += 2 + len;
          continue;
        }
      }
    }

    offset += 1;
  }

  return out;
}

export function uniqueById(rows) {
  const seen = new Set();
  const out = [];
  for (const row of rows) {
    if (seen.has(row.id)) continue;
    seen.add(row.id);
    out.push(row);
  }
  return out;
}

export function maybeWriteJson(out, value, dryRun) {
  if (dryRun) {
    console.log(`Dry run: would write ${displayPath(out)}`);
    return;
  }
  writeJson(out, value);
  console.log(`Wrote ${displayPath(out)}`);
}

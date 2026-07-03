#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

function argValues(flag) {
  const values = [];
  for (let i = 2; i < process.argv.length - 1; i += 1) {
    if (process.argv[i] === flag) {
      values.push(process.argv[i + 1]);
      i += 1;
    }
  }
  return values;
}

function argValue(flag, fallback = null) {
  return argValues(flag).at(-1) ?? fallback;
}

function defaultInputRoots() {
  const roots = [];
  if (process.env.APPDATA) {
    roots.push(path.join(process.env.APPDATA, "com.resonance-logs-global", "EventLogs"));
  }
  if (process.env.LOCALAPPDATA) {
    roots.push(path.join(process.env.LOCALAPPDATA, "com.resonance-logs-global", "EventLogs"));
  }
  return roots;
}

function collectJsonFiles(inputPath, out) {
  if (!inputPath || !fs.existsSync(inputPath)) return;
  const stat = fs.statSync(inputPath);
  if (stat.isFile()) {
    if (inputPath.toLowerCase().endsWith(".json")) out.push(inputPath);
    return;
  }
  for (const entry of fs.readdirSync(inputPath, { withFileTypes: true })) {
    const child = path.join(inputPath, entry.name);
    if (entry.isDirectory()) {
      collectJsonFiles(child, out);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".json")) {
      out.push(child);
    }
  }
}

function readSessionFile(filePath) {
  try {
    const payload = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const entries = Array.isArray(payload.entries) ? payload.entries : [];
    return { payload, entries };
  } catch {
    return null;
  }
}

function parseRaw(entry) {
  if (!entry || entry.raw == null) return null;
  if (typeof entry.raw === "object") return entry.raw;
  if (typeof entry.raw !== "string" || entry.raw.trim() === "") return null;
  try {
    return JSON.parse(entry.raw);
  } catch {
    return null;
  }
}

function numberOrNull(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function compactPath(filePath) {
  const relative = path.relative(process.cwd(), filePath);
  return relative && !relative.startsWith("..") ? relative : filePath;
}

function normalizeFightResourceEntries(raw) {
  const fightRes = raw?.fightRes ?? raw;
  const entries = Array.isArray(fightRes?.entries) ? fightRes.entries : [];
  return entries
    .map((entry) => ({
      id: numberOrNull(entry.id),
      value: numberOrNull(entry.value),
    }))
    .filter((entry) => entry.id !== null && entry.value !== null);
}

function normalizeCounterRows(raw) {
  const counters = Array.isArray(raw?.counters) ? raw.counters : [];
  const rows = [];
  for (const counter of counters) {
    const ruleId = numberOrNull(counter.ruleId);
    for (const slot of Array.isArray(counter.slots) ? counter.slots : []) {
      const slotId = numberOrNull(slot.slotId);
      const currentCount = numberOrNull(slot.currentCount);
      if (ruleId === null || slotId === null || currentCount === null) continue;
      rows.push({
        ruleId,
        slotId,
        key: `${ruleId}:${slotId}`,
        currentCount,
        threshold: numberOrNull(slot.threshold),
        effectiveThreshold: numberOrNull(slot.effectiveThreshold),
        isCounting: Boolean(slot.isCounting),
        resetBuffActive: Boolean(slot.resetBuffActive),
      });
    }
  }
  return rows;
}

function normalizePanelAttrEntry(raw, entry) {
  const attrId = numberOrNull(raw?.attr_id ?? raw?.attrId ?? entry.uid);
  const value = numberOrNull(raw?.value ?? entry.value);
  if (attrId === null || value === null) return null;
  return { attrId, value };
}

function candidateValueCounts(candidates) {
  const counts = new Map();
  for (const candidate of Array.isArray(candidates) ? candidates : []) {
    const value = numberOrNull(candidate?.value);
    if (value === null) continue;
    const key = String(value);
    const bucket = statsBucket(counts, key, () => ({
      value,
      count: 0,
      encodings: new Set(),
      kinds: new Set(),
      offsets: [],
    }));
    bucket.count += 1;
    if (candidate?.encoding) bucket.encodings.add(candidate.encoding);
    if (candidate?.kind) bucket.kinds.add(candidate.kind);
    if (numberOrNull(candidate?.offset) !== null && bucket.offsets.length < 6) {
      bucket.offsets.push(numberOrNull(candidate.offset));
    }
  }
  return [...counts.values()]
    .map((row) => ({
      ...row,
      encodings: [...row.encodings].sort(),
      kinds: [...row.kinds].sort(),
    }))
    .sort((left, right) => right.count - left.count || left.value - right.value);
}

function normalizeSeasonMedal(raw) {
  const seasonMedal = raw?.seasonMedal;
  if (!seasonMedal || typeof seasonMedal !== "object") return null;
  const selectedCoreNodes = Array.isArray(seasonMedal.selectedCoreHoleNodeInfos)
    ? seasonMedal.selectedCoreHoleNodeInfos
    : Array.isArray(seasonMedal.coreHoleNodeInfos)
      ? seasonMedal.coreHoleNodeInfos.filter((row) => row?.choose === true)
      : [];
  return {
    seasonId: numberOrNull(seasonMedal.seasonId),
    coreHoleInfo: seasonMedal.coreHoleInfo ?? null,
    selectedCoreNodes: selectedCoreNodes.map((row) => ({
      slot: numberOrNull(row?.slot),
      nodeId: numberOrNull(row?.nodeId),
      canonicalNodeId: numberOrNull(row?.canonicalNodeId),
      nodeLevel: numberOrNull(row?.nodeLevel),
    })),
    normalHoleInfos: Array.isArray(seasonMedal.normalHoleInfos)
      ? seasonMedal.normalHoleInfos.map((row) => ({
          holeId: numberOrNull(row?.holeId),
          holeLevel: numberOrNull(row?.holeLevel),
          curExp: numberOrNull(row?.curExp),
        }))
      : [],
  };
}

function hexToBuffer(hex) {
  if (typeof hex !== "string" || hex.length === 0 || hex.length % 2 !== 0) return null;
  try {
    return Buffer.from(hex, "hex");
  } catch {
    return null;
  }
}

function readU32(buffer, offset) {
  return offset + 4 <= buffer.length ? buffer.readUInt32LE(offset) : null;
}

function readI32(buffer, offset) {
  return offset + 4 <= buffer.length ? buffer.readInt32LE(offset) : null;
}

function readU64Safe(buffer, offset) {
  if (offset + 8 > buffer.length) return null;
  const value = buffer.readBigUInt64LE(offset);
  return value <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(value) : null;
}

const CHAR_SERIALIZE_FIELD_NAMES = new Map([
  [1, "char_id"],
  [2, "char_base"],
  [3, "scene_data"],
  [5, "pioneer_data"],
  [6, "buff_info"],
  [7, "item_package"],
  [8, "quest_list"],
  [13, "energy_item"],
  [16, "attr"],
  [20, "counter_list"],
  [24, "transfer_point"],
  [37, "anti_info"],
  [52, "season_medal_info"],
  [55, "slots"],
  [61, "profession_list"],
  [88, "lucky_value_mgr"],
  [91, "statistics_data"],
  [98, "char_statistics_data"],
  [101, "season_cultivate_line_data"],
]);

function charSerializeFieldName(fieldId) {
  return CHAR_SERIALIZE_FIELD_NAMES.get(fieldId) ?? "unknown";
}

function dirtyValueCategory(value) {
  if (!Number.isFinite(value)) return null;
  if (value >= 20000000 && value <= 20100000) return "factor-grade-item-like";
  if (value >= 2000000 && value <= 3999999) return "buff-or-skill-like";
  if (value >= 1600000000 && value <= 2000000000) return "epoch-seconds-like";
  if (value >= 100000 && value <= 200000) return "season-medal-core-like";
  if (value >= 1000 && value <= 2000) return "seasonal-node-like";
  if (value >= 10000 && value <= 999999) return "mid-id-like";
  return null;
}

function pushInterestingValue(values, value, offset, width, category) {
  if (value === null || value === undefined) return;
  const resolvedCategory = category ?? dirtyValueCategory(value);
  if (!resolvedCategory) return;
  const key = `${value}:${resolvedCategory}`;
  const existing = values.get(key);
  if (existing) {
    existing.count += 1;
    if (existing.offsets.length < 6) existing.offsets.push(offset);
    return;
  }
  values.set(key, {
    value,
    category: resolvedCategory,
    count: 1,
    width,
    offsets: [offset],
  });
}

function summarizeDirtyBuffer(bufferHex) {
  const buffer = hexToBuffer(bufferHex);
  if (!buffer) return null;

  let delimiterCount = 0;
  for (let offset = 0; offset + 4 <= buffer.length; offset += 1) {
    if (buffer.readUInt32LE(offset) === 0xdeadbeef) delimiterCount += 1;
  }

  const frames = [];
  const interestingValues = new Map();
  const u32Counts = new Map();
  for (let offset = 0; offset + 4 <= buffer.length; offset += 4) {
    const signed = readI32(buffer, offset);
    const value = readU32(buffer, offset);
    if (signed === -2 && offset + 8 <= buffer.length) {
      const length = readU32(buffer, offset + 4);
      const bodyStart = offset + 8;
      const bodyEnd = bodyStart + length;
      const endMarker = bodyEnd + 4 <= buffer.length ? readI32(buffer, bodyEnd) : null;
      frames.push({
        offset,
        length,
        bodyStart,
        bodyEnd,
        endMarkerOk: endMarker === -3,
      });
    }
    if (signed === -2 || signed === -3 || value === null) continue;
    u32Counts.set(value, (u32Counts.get(value) ?? 0) + 1);
    pushInterestingValue(interestingValues, value, offset, 4);
  }

  for (let offset = 0; offset + 8 <= buffer.length; offset += 4) {
    const value = readU64Safe(buffer, offset);
    pushInterestingValue(interestingValues, value, offset, 8);
  }

  const rootFields = summarizeRootFields(buffer, frames[0]).map((field) => ({
    ...field,
    fieldName: charSerializeFieldName(field.fieldId),
  }));

  const frameLengthCounts = new Map();
  for (const frame of frames) {
    const key = String(frame.length);
    frameLengthCounts.set(key, (frameLengthCounts.get(key) ?? 0) + 1);
  }

  return {
    byteLength: buffer.length,
    delimiterCount,
    frameCount: frames.length,
    frameLengths: [...frameLengthCounts.entries()]
      .map(([length, count]) => ({ length: Number(length), count }))
      .sort((left, right) => left.length - right.length),
    frames: frames.slice(0, 24),
    rootFields,
    interestingValues: [...interestingValues.values()].sort(
      (left, right) =>
        left.category.localeCompare(right.category) || left.value - right.value || left.width - right.width,
    ),
    topU32Values: [...u32Counts.entries()]
      .map(([value, count]) => ({ value, count }))
      .sort((left, right) => right.count - left.count || left.value - right.value)
      .slice(0, 24),
  };
}

function normalizeRawRootFields(rows) {
  if (!Array.isArray(rows)) return [];
  return rows
    .map((row) => {
      const fieldId = numberOrNull(row?.fieldId);
      if (fieldId === null) return null;
      return {
        fieldId,
        fieldName:
          typeof row?.fieldName === "string" && row.fieldName.trim()
            ? row.fieldName.trim()
            : charSerializeFieldName(fieldId),
        offset: numberOrNull(row?.offset),
      };
    })
    .filter(Boolean);
}

function summarizeRootFields(buffer, rootFrame) {
  if (!rootFrame || rootFrame.offset !== 0 || !rootFrame.endMarkerOk) return [];
  const fields = [];
  let offset = rootFrame.bodyStart;
  const end = Math.min(rootFrame.bodyEnd, buffer.length);

  while (offset + 4 <= end) {
    const fieldId = readI32(buffer, offset);
    if (fieldId === null || fieldId <= 0) break;
    fields.push({ fieldId, offset });
    offset += 4;

    if (readI32(buffer, offset) === -2 && offset + 8 <= end) {
      const length = readU32(buffer, offset + 4);
      const bodyEnd = offset + 8 + length;
      offset = bodyEnd + (readI32(buffer, bodyEnd) === -3 ? 4 : 0);
      continue;
    }

    const afterU64 = offset + 8;
    const markerAfterU64 = readI32(buffer, afterU64);
    if (
      afterU64 <= end &&
      (markerAfterU64 === -2 ||
        markerAfterU64 === -3 ||
        (markerAfterU64 !== null && markerAfterU64 > 0 && markerAfterU64 <= 200))
    ) {
      offset = afterU64;
      continue;
    }

    offset += 4;
  }

  return fields;
}

function seasonMedalValueSets(seasonMedal) {
  const selectedNodeIds = new Set();
  const normalHoleIds = new Set();
  const normalHoleExpValues = new Set();
  const coreHoleValues = new Set();
  for (const node of Array.isArray(seasonMedal?.selectedCoreNodes) ? seasonMedal.selectedCoreNodes : []) {
    for (const value of [node.nodeId, node.canonicalNodeId]) {
      if (numberOrNull(value) !== null) selectedNodeIds.add(numberOrNull(value));
    }
    if (numberOrNull(node.canonicalNodeId) !== null) selectedNodeIds.add(100000 + numberOrNull(node.canonicalNodeId));
  }
  for (const hole of Array.isArray(seasonMedal?.normalHoleInfos) ? seasonMedal.normalHoleInfos : []) {
    if (numberOrNull(hole.holeId) !== null) normalHoleIds.add(numberOrNull(hole.holeId));
    if (numberOrNull(hole.curExp) !== null) normalHoleExpValues.add(numberOrNull(hole.curExp));
  }
  const core = seasonMedal?.coreHoleInfo;
  for (const value of [core?.holeId, core?.holeLevel, core?.curExp]) {
    if (numberOrNull(value) !== null) coreHoleValues.add(numberOrNull(value));
  }
  return { selectedNodeIds, normalHoleIds, normalHoleExpValues, coreHoleValues };
}

function uniqueSortedNumbers(values) {
  return [...new Set(values.filter((value) => Number.isFinite(value)))].sort((left, right) => left - right);
}

function compareDirtyRowToSeasonMedal(row, baselineRow) {
  if (!baselineRow?.seasonMedal) return null;
  const values = [
    ...row.factorCandidateValues.map((candidate) => candidate.value),
    ...(row.dirtyBuffer?.interestingValues ?? []).map((value) => value.value),
  ];
  const sets = seasonMedalValueSets(baselineRow.seasonMedal);
  return {
    baselineTsMs: baselineRow.tsMs,
    baselineAgeMs: row.tsMs - baselineRow.tsMs,
    selectedNodeMatches: uniqueSortedNumbers(values.filter((value) => sets.selectedNodeIds.has(value))),
    normalHoleIdMatches: uniqueSortedNumbers(values.filter((value) => sets.normalHoleIds.has(value))),
    normalHoleExpMatches: uniqueSortedNumbers(values.filter((value) => sets.normalHoleExpValues.has(value))),
    coreHoleMatches: uniqueSortedNumbers(values.filter((value) => sets.coreHoleValues.has(value))),
  };
}

function normalizeContainerProbe(raw, entry, file, tsMs) {
  const factorCandidates = Array.isArray(raw?.factorCandidates) ? raw.factorCandidates : [];
  const rawProtoCandidates = Array.isArray(raw?.rawProtoCandidates) ? raw.rawProtoCandidates : [];
  const topLevelSections = Array.isArray(raw?.topLevelSections) ? raw.topLevelSections : [];
  let dirtyBuffer = summarizeDirtyBuffer(raw?.bufferHex);
  const rawRootFields = normalizeRawRootFields(raw?.rootFields);
  if (rawRootFields.length > 0) {
    dirtyBuffer = dirtyBuffer ?? {};
    dirtyBuffer.rootFields = rawRootFields;
    dirtyBuffer.seasonRootFields = rawRootFields.filter((row) => row.fieldId === 52 || row.fieldId === 101);
  }
  return {
    tsMs,
    action: entry.action,
    method: entry.targetLabel ?? null,
    uid: numberOrNull(entry.uid),
    sourceUid: numberOrNull(entry.sourceUid),
    sourceLabel: entry.sourceLabel ?? "",
    targetLabel: entry.targetLabel ?? "",
    summary: entry.summary ?? "",
    value: entry.value ?? "",
    charId: numberOrNull(raw?.charId),
    bufferLength: numberOrNull(raw?.bufferLength),
    vdataBytesLength: numberOrNull(raw?.vdataBytesLength),
    factorCandidateCount: numberOrNull(raw?.factorCandidateCount) ?? factorCandidates.length,
    rawProtoCandidateCount: numberOrNull(raw?.rawProtoCandidateCount) ?? rawProtoCandidates.length,
    factorCandidateValues: candidateValueCounts(factorCandidates).slice(0, 16),
    rawProtoCandidateValues: candidateValueCounts(rawProtoCandidates).slice(0, 16),
    equippedFactorItems: Array.isArray(raw?.equippedFactorItems) ? raw.equippedFactorItems.slice(0, 24) : [],
    seasonMedal: normalizeSeasonMedal(raw),
    seasonSectionsSeen: topLevelSections.filter((section) => /^Season/i.test(String(section))),
    dirtyBuffer,
    bufferHexPrefix:
      typeof raw?.bufferHex === "string" ? raw.bufferHex.slice(0, 96) : null,
    file: compactPath(file),
  };
}

function latestFiles(files, maxFiles) {
  return files
    .map((file) => ({ file, mtime: fs.statSync(file).mtimeMs, size: fs.statSync(file).size }))
    .sort((left, right) => right.mtime - left.mtime)
    .slice(0, maxFiles);
}

function statsBucket(map, key, make) {
  let value = map.get(key);
  if (!value) {
    value = make();
    map.set(key, value);
  }
  return value;
}

function updateSeriesStats(bucket, value, tsMs) {
  bucket.count += 1;
  bucket.min = bucket.min === null ? value : Math.min(bucket.min, value);
  bucket.max = bucket.max === null ? value : Math.max(bucket.max, value);
  bucket.last = value;
  bucket.lastTsMs = tsMs;
  if (bucket.values.size < 32) bucket.values.add(value);
}

function nearestFightRow(fightRows, tsMs, maxWindowMs) {
  let best = null;
  let bestDelta = Infinity;
  for (const row of fightRows) {
    const delta = Math.abs(row.tsMs - tsMs);
    if (delta < bestDelta) {
      best = row;
      bestDelta = delta;
    }
  }
  if (!best || bestDelta > maxWindowMs) return null;
  return { row: best, deltaMs: bestDelta };
}

function updatePairStats(bucket, resourceValue, counterValue, deltaMs) {
  bucket.pairs += 1;
  bucket.minDeltaMs = Math.min(bucket.minDeltaMs, deltaMs);
  bucket.maxDeltaMs = Math.max(bucket.maxDeltaMs, deltaMs);
  if (resourceValue === counterValue) bucket.exactMatches += 1;
  if (Math.round(resourceValue / 10) === counterValue) bucket.div10Matches += 1;
  if (Math.round(resourceValue / 100) === counterValue) bucket.div100Matches += 1;
  if (Math.round(resourceValue / 1000) === counterValue) bucket.div1000Matches += 1;
  bucket.lastResourceValue = resourceValue;
  bucket.lastCounterValue = counterValue;
}

function formatValueSet(values) {
  const items = [...values].sort((left, right) => left - right);
  const rendered = items.slice(0, 12).join(", ");
  return items.length > 12 ? `${rendered}, ...` : rendered;
}

function tableCell(value) {
  return String(value ?? "").replaceAll("|", "\\|").replace(/\s+/g, " ").trim();
}

function formatCandidateValueCounts(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return "";
  return rows
    .slice(0, 8)
    .map((row) => {
      const suffix = row.count > 1 ? `x${row.count}` : "";
      return `${row.value}${suffix}`;
    })
    .join(", ");
}

function formatSelectedCoreNodes(seasonMedal) {
  const nodes = Array.isArray(seasonMedal?.selectedCoreNodes) ? seasonMedal.selectedCoreNodes : [];
  if (nodes.length === 0) return "";
  return nodes
    .map((row) => {
      const slot = row.slot ?? "?";
      const nodeId = row.canonicalNodeId ?? row.nodeId ?? "?";
      const level = row.nodeLevel ?? "?";
      return `slot ${slot}: ${nodeId} L${level}`;
    })
    .join("; ");
}

function formatNormalHoles(seasonMedal) {
  const holes = Array.isArray(seasonMedal?.normalHoleInfos) ? seasonMedal.normalHoleInfos : [];
  if (holes.length === 0) return "";
  return holes
    .map((row) => {
      const holeId = row.holeId ?? "?";
      const level = row.holeLevel ?? "?";
      const exp = row.curExp ?? "null";
      return `${holeId}:L${level}/exp${exp}`;
    })
    .join(", ");
}

function formatFrameLengths(dirtyBuffer) {
  const rows = Array.isArray(dirtyBuffer?.frameLengths) ? dirtyBuffer.frameLengths : [];
  if (rows.length === 0) return "";
  return rows
    .slice(0, 8)
    .map((row) => `${row.length}${row.count > 1 ? `x${row.count}` : ""}`)
    .join(", ");
}

function formatRootFields(dirtyBuffer) {
  const rows = Array.isArray(dirtyBuffer?.rootFields) ? dirtyBuffer.rootFields : [];
  if (rows.length === 0) return "";
  return rows
    .slice(0, 8)
    .map((row) => `${row.fieldId} ${row.fieldName}`)
    .join(", ");
}

function formatDirtyInterestingValues(dirtyBuffer) {
  const rows = Array.isArray(dirtyBuffer?.interestingValues) ? dirtyBuffer.interestingValues : [];
  if (rows.length === 0) return "";
  return rows
    .slice(0, 10)
    .map((row) => `${row.value}${row.count > 1 ? `x${row.count}` : ""} ${row.category}`)
    .join(", ");
}

function formatSeasonMedalBaseline(comparison) {
  if (!comparison) return "";
  const parts = [`age ${comparison.baselineAgeMs}ms`];
  if (comparison.selectedNodeMatches.length) parts.push(`selected ${comparison.selectedNodeMatches.join("/")}`);
  if (comparison.normalHoleIdMatches.length) parts.push(`hole ${comparison.normalHoleIdMatches.join("/")}`);
  if (comparison.normalHoleExpMatches.length) parts.push(`exp ${comparison.normalHoleExpMatches.join("/")}`);
  if (comparison.coreHoleMatches.length) parts.push(`core ${comparison.coreHoleMatches.join("/")}`);
  if (parts.length === 1) parts.push("no direct value match");
  return parts.join("; ");
}

function formatCounterRefs(counters) {
  if (!Array.isArray(counters) || counters.length === 0) return "";
  return counters
    .slice(0, 4)
    .map((row) => {
      const slots = row.slots
        .slice(0, 3)
        .map((slot) => `${slot.key}=${slot.currentCount}/${slot.effectiveThreshold ?? slot.threshold ?? "?"}`)
        .join(", ");
      return `${row.deltaMs}ms ${slots}`;
    })
    .join("; ");
}

function formatBuffRefs(buffs) {
  if (!Array.isArray(buffs) || buffs.length === 0) return "";
  return buffs
    .slice(0, 5)
    .map((row) => {
      const id = row.baseId ?? row.uid ?? "?";
      const source = row.sourceConfigId !== null ? ` srcCfg ${row.sourceConfigId}` : "";
      const duration = row.durationMs !== null ? ` dur ${row.durationMs}` : "";
      return `${row.deltaMs}ms ${id}${source}${duration}`;
    })
    .join("; ");
}

function printHelp() {
  console.log(`FactorEnergyProbeAudit.mjs - correlate Resonance Logs factor-energy packet probes.

Options:
  --input <path>           Event Logger JSON file or directory. Can be repeated.
  --out-json <path>        JSON report path.
                           Default: output/probing-reports/FactorEnergyProbeAudit.json
  --out-md <path>          Markdown report path.
                           Default: output/probing-reports/FactorEnergyProbeAudit.md
  --max-files <n>          Latest Event Logger files to scan. Default: 80.
  --pair-window-ms <n>     Timestamp window for resource/counter pairing. Default: 2000.
  --help                   Show this help.

Notes:
  This is an extractor-side packet audit. It reads app Event Logger captures
  containing factor_energy_probe rows and reports candidate packet resource IDs
  for current New Factor energy. The packet resource change section is raw
  packet data only; inferred factor counters are only a comparison side-channel.
  Do not promote candidates into runtime behavior until a controlled spend/gain
  capture proves the mapping.`);
}

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  printHelp();
  process.exit(0);
}

const inputs = argValues("--input");
const roots = inputs.length ? inputs : defaultInputRoots();
const outJson = argValue("--out-json", "output/probing-reports/FactorEnergyProbeAudit.json");
const outMd = argValue("--out-md", "output/probing-reports/FactorEnergyProbeAudit.md");
const maxFiles = Number(argValue("--max-files", "80"));
const maxPairWindowMs = Number(argValue("--pair-window-ms", "2000"));

const files = [];
for (const root of roots) collectJsonFiles(root, files);
const scannedFiles = latestFiles(files, Number.isFinite(maxFiles) && maxFiles > 0 ? maxFiles : 80);

const fightRows = [];
const counterRows = [];
const panelAttrRows = [];
const containerRows = [];
const buffRows = [];
const sourceFiles = new Set();
const actionCounts = new Map();
const fileSummaries = [];

function incrementCount(map, key, amount = 1) {
  map.set(key, (map.get(key) ?? 0) + amount);
}

for (const { file } of scannedFiles) {
  const session = readSessionFile(file);
  if (!session) continue;
  const fileActionCounts = new Map();
  const fileSummary = {
    file: compactPath(file),
    entries: session.entries.length,
    factorEnergyProbeRows: 0,
    fightResourceRows: 0,
    actions: fileActionCounts,
  };
  for (const entry of session.entries) {
    const actionKey = `${entry.category ?? ""}|${entry.action ?? ""}`;
    incrementCount(actionCounts, actionKey);
    incrementCount(fileActionCounts, actionKey);

    const raw = parseRaw(entry);
    const tsMs = numberOrNull(entry.tsMs ?? entry.ts_ms);
    if (tsMs === null) continue;
    const isEnergyFightProbe =
      entry.category === "factor_energy_probe" && entry.action === "fight_resource_update";
    const isLegacyFightProbe = entry.category === "system" && entry.action === "fight_resource";
    if (isEnergyFightProbe || isLegacyFightProbe) {
      fileSummary.fightResourceRows += 1;
      const resources = normalizeFightResourceEntries(raw);
      if (resources.length > 0) {
        sourceFiles.add(file);
        fightRows.push({
          tsMs,
          file,
          source: isEnergyFightProbe ? "factor_energy_probe" : "system.fight_resource",
          resources,
        });
      }
    }

    if (entry.category === "factor_energy_probe" && entry.action === "factor_counter_update") {
      fileSummary.factorEnergyProbeRows += 1;
      const slots = normalizeCounterRows(raw);
      if (slots.length > 0) {
        sourceFiles.add(file);
        counterRows.push({
          tsMs,
          file,
          sourceItemIds: Array.isArray(raw?.sourceItemIds) ? raw.sourceItemIds : [],
          slotItemIds: Array.isArray(raw?.slotItemIds) ? raw.slotItemIds : [],
          slots,
        });
      }
    }

    if (entry.category === "system" && entry.action === "panel_attr") {
      const attr = normalizePanelAttrEntry(raw, entry);
      if (attr) {
        panelAttrRows.push({
          tsMs,
          file,
          ...attr,
        });
      }
    }

    if (entry.category === "buff" && entry.action === "update") {
      buffRows.push({
        tsMs,
        file,
        uid: numberOrNull(entry.uid),
        baseId: numberOrNull(raw?.baseId ?? entry.uid),
        sourceConfigId: numberOrNull(raw?.sourceConfigId),
        sourceUid: numberOrNull(raw?.sourceUid ?? entry.sourceUid),
        layer: numberOrNull(raw?.layer ?? entry.stacks),
        durationMs: numberOrNull(raw?.durationMs ?? entry.durationMs),
        remainingMs: numberOrNull(raw?.remainingMs ?? entry.remainingMs),
        sourceLabel: entry.sourceLabel ?? "",
      });
    }

    if (
      entry.category === "container_probe" &&
      (entry.action === "sync_container" || entry.action === "sync_container_dirty")
    ) {
      sourceFiles.add(file);
      containerRows.push(normalizeContainerProbe(raw, entry, file, tsMs));
    }
  }
  if (fileSummary.entries > 0) {
    fileSummaries.push({
      ...fileSummary,
      actions: [...fileActionCounts.entries()]
        .map(([action, count]) => ({ action, count }))
        .sort((left, right) => right.count - left.count || left.action.localeCompare(right.action)),
    });
  }
}

fightRows.sort((left, right) => left.tsMs - right.tsMs);
counterRows.sort((left, right) => left.tsMs - right.tsMs);
panelAttrRows.sort((left, right) => left.tsMs - right.tsMs);
containerRows.sort((left, right) => left.tsMs - right.tsMs);
buffRows.sort((left, right) => left.tsMs - right.tsMs);

function rowsNear(rows, tsMs, windowMs) {
  return rows
    .map((row) => ({ ...row, deltaMs: row.tsMs - tsMs, absDeltaMs: Math.abs(row.tsMs - tsMs) }))
    .filter((row) => row.absDeltaMs <= windowMs)
    .sort((left, right) => left.absDeltaMs - right.absDeltaMs || left.tsMs - right.tsMs);
}

let lastSeasonMedalContainer = null;
for (const row of containerRows) {
  if (row.action === "sync_container" && row.seasonMedal) {
    lastSeasonMedalContainer = row;
  }
  if (row.action !== "sync_container_dirty") continue;
  row.seasonMedalBaseline = compareDirtyRowToSeasonMedal(row, lastSeasonMedalContainer);
  row.nearbyCounters = rowsNear(counterRows, row.tsMs, 250).slice(0, 6).map((counterRow) => ({
    deltaMs: counterRow.deltaMs,
    sourceItemIds: counterRow.sourceItemIds,
    slotItemIds: counterRow.slotItemIds,
    slots: counterRow.slots,
    file: compactPath(counterRow.file),
  }));
  row.nearbyBuffs = rowsNear(buffRows, row.tsMs, 250).slice(0, 8).map((buffRow) => ({
    deltaMs: buffRow.deltaMs,
    uid: buffRow.uid,
    baseId: buffRow.baseId,
    sourceConfigId: buffRow.sourceConfigId,
    layer: buffRow.layer,
    durationMs: buffRow.durationMs,
    remainingMs: buffRow.remainingMs,
    sourceUid: buffRow.sourceUid,
    sourceLabel: buffRow.sourceLabel,
    file: compactPath(buffRow.file),
  }));
}

const resourceStats = new Map();
for (const row of fightRows) {
  for (const resource of row.resources) {
    const bucket = statsBucket(resourceStats, String(resource.id), () => ({
      id: resource.id,
      count: 0,
      first: null,
      firstTsMs: null,
      min: null,
      max: null,
      last: null,
      lastTsMs: null,
      lastDelta: null,
      changeCount: 0,
      increaseCount: 0,
      decreaseCount: 0,
      unchangedCount: 0,
      values: new Set(),
    }));
    updateSeriesStats(bucket, resource.value, row.tsMs);
  }
}

const packetResourceChanges = [];
const lastResourceValues = new Map();
for (const row of fightRows) {
  for (const resource of row.resources) {
    const key = String(resource.id);
    const bucket = resourceStats.get(key);
    const previous = lastResourceValues.get(key);

    if (bucket && previous === undefined) {
      bucket.first = resource.value;
      bucket.firstTsMs = row.tsMs;
    }

    if (previous !== undefined) {
      const delta = resource.value - previous.value;
      if (bucket) {
        bucket.lastDelta = delta;
        if (delta === 0) {
          bucket.unchangedCount += 1;
        } else {
          bucket.changeCount += 1;
          if (delta > 0) bucket.increaseCount += 1;
          if (delta < 0) bucket.decreaseCount += 1;
        }
      }

      if (delta !== 0) {
        packetResourceChanges.push({
          tsMs: row.tsMs,
          resourceId: resource.id,
          previousValue: previous.value,
          value: resource.value,
          delta,
          source: row.source,
          file: compactPath(row.file),
        });
      }
    }

    lastResourceValues.set(key, {
      value: resource.value,
      tsMs: row.tsMs,
    });
  }
}

const counterStats = new Map();
for (const row of counterRows) {
  for (const slot of row.slots) {
    const bucket = statsBucket(counterStats, slot.key, () => ({
      key: slot.key,
      ruleId: slot.ruleId,
      slotId: slot.slotId,
      count: 0,
      min: null,
      max: null,
      last: null,
      lastTsMs: null,
      values: new Set(),
      thresholds: new Set(),
      resetActiveCount: 0,
    }));
    updateSeriesStats(bucket, slot.currentCount, row.tsMs);
    if (slot.effectiveThreshold !== null) bucket.thresholds.add(slot.effectiveThreshold);
    if (slot.resetBuffActive) bucket.resetActiveCount += 1;
  }
}

const panelAttrStats = new Map();
const panelAttrChanges = [];
const lastPanelAttrValues = new Map();
for (const row of panelAttrRows) {
  const key = String(row.attrId);
  const bucket = statsBucket(panelAttrStats, key, () => ({
    attrId: row.attrId,
    attrIdHex: `0x${row.attrId.toString(16).toUpperCase()}`,
    count: 0,
    first: null,
    firstTsMs: null,
    min: null,
    max: null,
    last: null,
    lastTsMs: null,
    lastDelta: null,
    changeCount: 0,
    increaseCount: 0,
    decreaseCount: 0,
    unchangedCount: 0,
    values: new Set(),
  }));
  const previous = lastPanelAttrValues.get(key);
  if (previous === undefined) {
    bucket.first = row.value;
    bucket.firstTsMs = row.tsMs;
  }
  updateSeriesStats(bucket, row.value, row.tsMs);
  if (previous !== undefined) {
    const delta = row.value - previous.value;
    bucket.lastDelta = delta;
    if (delta === 0) {
      bucket.unchangedCount += 1;
    } else {
      bucket.changeCount += 1;
      if (delta > 0) bucket.increaseCount += 1;
      if (delta < 0) bucket.decreaseCount += 1;
      panelAttrChanges.push({
        tsMs: row.tsMs,
        attrId: row.attrId,
        attrIdHex: bucket.attrIdHex,
        previousValue: previous.value,
        value: row.value,
        delta,
        file: compactPath(row.file),
      });
    }
  }
  lastPanelAttrValues.set(key, {
    value: row.value,
    tsMs: row.tsMs,
  });
}

const pairStats = new Map();
for (const counterRow of counterRows) {
  const nearest = nearestFightRow(fightRows, counterRow.tsMs, maxPairWindowMs);
  if (!nearest) continue;
  for (const slot of counterRow.slots) {
    for (const resource of nearest.row.resources) {
      const key = `${resource.id}|${slot.key}`;
      const bucket = statsBucket(pairStats, key, () => ({
        resourceId: resource.id,
        counterKey: slot.key,
        pairs: 0,
        exactMatches: 0,
        div10Matches: 0,
        div100Matches: 0,
        div1000Matches: 0,
        minDeltaMs: Infinity,
        maxDeltaMs: 0,
        lastResourceValue: null,
        lastCounterValue: null,
      }));
      updatePairStats(bucket, resource.value, slot.currentCount, nearest.deltaMs);
    }
  }
}

const panelAttrPairStats = new Map();
for (const counterRow of counterRows) {
  const nearbyPanelAttrs = rowsNear(panelAttrRows, counterRow.tsMs, maxPairWindowMs);
  for (const slot of counterRow.slots) {
    for (const attr of nearbyPanelAttrs) {
      const key = `${attr.attrId}|${slot.key}`;
      const bucket = statsBucket(panelAttrPairStats, key, () => ({
        attrId: attr.attrId,
        attrIdHex: `0x${attr.attrId.toString(16).toUpperCase()}`,
        counterKey: slot.key,
        pairs: 0,
        exactMatches: 0,
        div10Matches: 0,
        div100Matches: 0,
        div1000Matches: 0,
        nonZeroExactMatches: 0,
        nonZeroDiv10Matches: 0,
        nonZeroDiv100Matches: 0,
        nonZeroDiv1000Matches: 0,
        minDeltaMs: Infinity,
        maxDeltaMs: 0,
        lastAttrValue: null,
        lastCounterValue: null,
      }));
      updatePairStats(bucket, attr.value, slot.currentCount, Math.abs(attr.deltaMs));
      if (attr.value !== 0 && slot.currentCount !== 0) {
        if (attr.value === slot.currentCount) bucket.nonZeroExactMatches += 1;
        if (Math.round(attr.value / 10) === slot.currentCount) bucket.nonZeroDiv10Matches += 1;
        if (Math.round(attr.value / 100) === slot.currentCount) bucket.nonZeroDiv100Matches += 1;
        if (Math.round(attr.value / 1000) === slot.currentCount) bucket.nonZeroDiv1000Matches += 1;
      }
      bucket.lastAttrValue = attr.value;
    }
  }
}

const report = {
  generatedBy: "audit-factor-energy-probes.mjs",
  inputs: {
    roots,
    scannedFiles: scannedFiles.map((item) => compactPath(item.file)),
    maxFiles,
    maxPairWindowMs,
  },
  summary: {
    scannedFileCount: scannedFiles.length,
    filesWithEntries: fileSummaries.length,
    filesWithProbeRows: sourceFiles.size,
    fightResourceRows: fightRows.length,
    containerProbeRows: containerRows.length,
    containerFullRows: containerRows.filter((row) => row.action === "sync_container").length,
    containerDirtyRows: containerRows.filter((row) => row.action === "sync_container_dirty").length,
    dirtyFrameDecodedRows: containerRows.filter((row) => row.dirtyBuffer?.frameCount > 0).length,
    dirtyDelimitedTreeRows: containerRows.filter((row) => (row.dirtyBuffer?.delimiterCount ?? 0) > 0).length,
    factorCounterRows: counterRows.length,
    panelAttrRows: panelAttrRows.length,
    panelAttrIdsSeen: panelAttrStats.size,
    panelAttrChanges: panelAttrChanges.length,
    resourceIdsSeen: resourceStats.size,
    packetResourceChanges: packetResourceChanges.length,
    counterSlotsSeen: counterStats.size,
    pairStats: pairStats.size,
    panelAttrPairStats: panelAttrPairStats.size,
  },
  actionCounts: [...actionCounts.entries()]
    .map(([action, count]) => ({ action, count }))
    .sort((left, right) => right.count - left.count || left.action.localeCompare(right.action)),
  fileSummaries: fileSummaries.slice(0, 80),
  resources: [...resourceStats.values()].map((row) => ({
    ...row,
    values: [...row.values].sort((left, right) => left - right),
  })),
  counters: [...counterStats.values()].map((row) => ({
    ...row,
    values: [...row.values].sort((left, right) => left - right),
    thresholds: [...row.thresholds].sort((left, right) => left - right),
  })),
  panelAttrs: [...panelAttrStats.values()].map((row) => ({
    ...row,
    values: [...row.values].sort((left, right) => left - right),
  })),
  recentPanelAttrChanges: panelAttrChanges.slice(-80),
  resourceCounterPairs: [...pairStats.values()].sort((left, right) =>
    right.exactMatches - left.exactMatches ||
    right.div10Matches - left.div10Matches ||
    right.div100Matches - left.div100Matches ||
    right.div1000Matches - left.div1000Matches ||
    right.pairs - left.pairs,
  ),
  panelAttrCounterPairs: [...panelAttrPairStats.values()].sort((left, right) =>
    right.nonZeroExactMatches - left.nonZeroExactMatches ||
    right.nonZeroDiv10Matches - left.nonZeroDiv10Matches ||
    right.nonZeroDiv100Matches - left.nonZeroDiv100Matches ||
    right.nonZeroDiv1000Matches - left.nonZeroDiv1000Matches ||
    right.exactMatches - left.exactMatches ||
    right.div10Matches - left.div10Matches ||
    right.div100Matches - left.div100Matches ||
    right.div1000Matches - left.div1000Matches ||
    right.pairs - left.pairs ||
    left.attrId - right.attrId ||
    left.counterKey.localeCompare(right.counterKey),
  ),
  recentFightRows: fightRows.slice(-20).map((row) => ({
    tsMs: row.tsMs,
    source: row.source,
    resources: row.resources,
    file: compactPath(row.file),
  })),
  recentContainerRows: containerRows.slice(-20),
  recentPacketResourceChanges: packetResourceChanges.slice(-80),
  recentCounterRows: counterRows.slice(-20).map((row) => ({
    tsMs: row.tsMs,
    sourceItemIds: row.sourceItemIds,
    slotItemIds: row.slotItemIds,
    slots: row.slots,
    file: compactPath(row.file),
  })),
  notes: [
    "Packet resource rows come from ATTR_FIGHT_RESOURCE_IDS/ATTR_FIGHT_RESOURCES, currently observed through fight-res-update.",
    "Packet resource changes are raw current resource value deltas and do not use inferred factor counter guesses.",
    "Container probe rows come from SyncContainerData/SyncContainerDirtyData and are summarized separately because the fresh captures did not expose New Factor energy through fight-resource attrs.",
    "Dirty container correlation uses generic frame/value scanning plus nearby counter/buff timing; it is evidence only, not a runtime decoder.",
    "Panel attr/counter pairing is a side-channel check only. Panel attrs are normal local stat attrs unless a later controlled capture proves a specific attr is current factor energy.",
    "Factor counter rows are inferred New Factor tracker values, logged only when RESONANCE_ENABLE_FACTOR_ENERGY_PROBES=1.",
    "A high exact/div10/div100/div1000 match is only a candidate for the real packet-backed energy meter; confirm with controlled spend/gain captures before wiring runtime behavior.",
  ],
};

fs.mkdirSync(path.dirname(outJson), { recursive: true });
fs.writeFileSync(outJson, `${JSON.stringify(report, null, 2)}\n`);
fs.mkdirSync(path.dirname(outMd), { recursive: true });

const lines = [
  "# Factor Energy Probe Audit",
  "",
  `- scanned files: ${report.summary.scannedFileCount}`,
  `- files with entries: ${report.summary.filesWithEntries}`,
  `- files with probe rows: ${report.summary.filesWithProbeRows}`,
  `- fight resource rows: ${report.summary.fightResourceRows}`,
  `- container probe rows: ${report.summary.containerProbeRows} (${report.summary.containerFullRows} full, ${report.summary.containerDirtyRows} dirty)`,
  `- dirty frame decoded rows: ${report.summary.dirtyFrameDecodedRows}`,
  `- dirty delimited-tree rows: ${report.summary.dirtyDelimitedTreeRows}`,
  `- packet resource changes: ${report.summary.packetResourceChanges}`,
  `- factor counter rows: ${report.summary.factorCounterRows}`,
  `- panel attr rows: ${report.summary.panelAttrRows}`,
  `- panel attr IDs seen: ${report.summary.panelAttrIdsSeen}`,
  `- panel attr changes: ${report.summary.panelAttrChanges}`,
  `- resource IDs seen: ${report.summary.resourceIdsSeen}`,
  `- counter slots seen: ${report.summary.counterSlotsSeen}`,
  `- panel attr/counter pair candidates: ${report.summary.panelAttrPairStats}`,
  `- pair window: ${maxPairWindowMs}ms`,
  "",
  "## Observed Event Logger Actions",
  "",
  "| category/action | rows |",
  "| --- | ---: |",
];

for (const row of report.actionCounts.slice(0, 80)) {
  lines.push(`| ${tableCell(row.action)} | ${row.count} |`);
}
if (report.actionCounts.length === 0) lines.push("| _none_ | 0 |");

lines.push(
  "",
  "## Recent Files",
  "",
  "| file | entries | factor probe rows | fight resource rows | top actions |",
  "| --- | ---: | ---: | ---: | --- |",
);
for (const row of report.fileSummaries.slice(0, 30)) {
  const topActions = row.actions
    .slice(0, 5)
    .map((action) => `${action.action}=${action.count}`)
    .join(", ");
  lines.push(
    `| ${tableCell(row.file)} | ${row.entries} | ${row.factorEnergyProbeRows} | ${row.fightResourceRows} | ${tableCell(topActions)} |`,
  );
}
if (report.fileSummaries.length === 0) lines.push("| _none_ | 0 | 0 | 0 |  |");

lines.push(
  "",
  "## Resource IDs",
  "",
  "| resource id | rows | min | max | last | sample values |",
  "| ---: | ---: | ---: | ---: | ---: | --- |",
);

for (const row of report.resources.slice().sort((left, right) => left.id - right.id)) {
  lines.push(
    `| ${row.id} | ${row.count} | ${row.min ?? ""} | ${row.max ?? ""} | ${row.last ?? ""} | ${tableCell(formatValueSet(new Set(row.values)))} |`,
  );
}
if (report.resources.length === 0) lines.push("| _none_ | 0 |  |  |  |  |");

lines.push(
  "",
  "## Container Probe Rows",
  "",
  "These are raw SyncContainerData/SyncContainerDirtyData probes. They are not proven current-energy values yet, but they are the packet family that fired in the fresh capture.",
  "",
  "| ts ms | action | uid | size | factor candidates | proto candidates | selected core nodes | normal holes | source file |",
  "| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |",
);
for (const row of report.recentContainerRows) {
  const size = row.bufferLength ?? row.vdataBytesLength ?? "";
  const factorValues = formatCandidateValueCounts(row.factorCandidateValues);
  const protoValues = formatCandidateValueCounts(row.rawProtoCandidateValues);
  lines.push(
    `| ${row.tsMs} | ${tableCell(row.action)} | ${row.uid ?? ""} | ${size} | ${tableCell(factorValues)} | ${tableCell(protoValues)} | ${tableCell(formatSelectedCoreNodes(row.seasonMedal))} | ${tableCell(formatNormalHoles(row.seasonMedal))} | ${tableCell(row.file)} |`,
  );
}
if (report.recentContainerRows.length === 0) {
  lines.push("| _none_ |  |  |  |  |  |  |  |  |");
}

const dirtyRows = report.recentContainerRows.filter((row) => row.action === "sync_container_dirty");
lines.push(
  "",
  "## Dirty Container Correlation",
  "",
  "This compares dirty container rows to the latest full SeasonMedalInfo snapshot and nearby factor counter/buff rows. Empty match cells mean the dirty values did not directly match the selected core-node or normal-hole values from the last full snapshot.",
  "",
  "| ts ms | size | root fields | frames | dirty values | season medal baseline | nearby counters | nearby buffs | source file |",
  "| ---: | ---: | --- | --- | --- | --- | --- | --- | --- |",
);
for (const row of dirtyRows) {
  const size = row.bufferLength ?? row.dirtyBuffer?.byteLength ?? "";
  lines.push(
    `| ${row.tsMs} | ${size} | ${tableCell(formatRootFields(row.dirtyBuffer))} | ${tableCell(formatFrameLengths(row.dirtyBuffer))} | ${tableCell(formatDirtyInterestingValues(row.dirtyBuffer))} | ${tableCell(formatSeasonMedalBaseline(row.seasonMedalBaseline))} | ${tableCell(formatCounterRefs(row.nearbyCounters))} | ${tableCell(formatBuffRefs(row.nearbyBuffs))} | ${tableCell(row.file)} |`,
  );
}
if (dirtyRows.length === 0) {
  lines.push("| _none_ |  |  |  |  |  |  |  |  |");
}

lines.push(
  "",
  "## Panel Attr Changes",
  "",
  "These are normal system panel_attr rows, not fight-resource packets. They can hint at changing local attributes, but they are not the packet-backed current factor energy source unless an attr ID is later proven.",
  "",
  "| attr id | hex | rows | changes | increases | decreases | first | last | min | max | last delta | sample values |",
  "| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |",
);
for (const row of report.panelAttrs
  .slice()
  .sort((left, right) => right.changeCount - left.changeCount || left.attrId - right.attrId)
  .slice(0, 80)) {
  lines.push(
    `| ${row.attrId} | ${row.attrIdHex} | ${row.count} | ${row.changeCount} | ${row.increaseCount} | ${row.decreaseCount} | ${row.first ?? ""} | ${row.last ?? ""} | ${row.min ?? ""} | ${row.max ?? ""} | ${row.lastDelta ?? ""} | ${tableCell(formatValueSet(new Set(row.values)))} |`,
  );
}
if (report.panelAttrs.length === 0) {
  lines.push("| _none_ |  | 0 | 0 | 0 | 0 |  |  |  |  |  |  |");
}

lines.push(
  "",
  "### Recent Panel Attr Changes",
  "",
  "| ts ms | attr id | hex | previous | current | delta | source file |",
  "| ---: | ---: | --- | ---: | ---: | ---: | --- |",
);
for (const row of report.recentPanelAttrChanges) {
  lines.push(
    `| ${row.tsMs} | ${row.attrId} | ${row.attrIdHex} | ${row.previousValue} | ${row.value} | ${row.delta} | ${tableCell(row.file)} |`,
  );
}
if (report.recentPanelAttrChanges.length === 0) {
  lines.push("| _none_ |  |  |  |  |  |  |");
}

lines.push(
  "",
  "## Panel Attr/Counter Pair Candidates",
  "",
  "This compares normal panel_attr values near inferred New Factor counter rows. It is a side-channel check only, not proof of current factor energy.",
  "",
  "| attr id | hex | counter slot | pairs | non-zero exact | non-zero /10 | non-zero /100 | non-zero /1000 | all exact | delta ms range | last attr | last counter |",
  "| ---: | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: | ---: |",
);
let visiblePanelAttrPairs = 0;
for (const row of report.panelAttrCounterPairs.slice(0, 80)) {
  if (
    row.nonZeroExactMatches === 0 &&
    row.nonZeroDiv10Matches === 0 &&
    row.nonZeroDiv100Matches === 0 &&
    row.nonZeroDiv1000Matches === 0
  ) {
    continue;
  }
  visiblePanelAttrPairs += 1;
  lines.push(
    `| ${row.attrId} | ${row.attrIdHex} | ${tableCell(row.counterKey)} | ${row.pairs} | ${row.nonZeroExactMatches} | ${row.nonZeroDiv10Matches} | ${row.nonZeroDiv100Matches} | ${row.nonZeroDiv1000Matches} | ${row.exactMatches} | ${row.minDeltaMs}-${row.maxDeltaMs} | ${row.lastAttrValue ?? ""} | ${row.lastCounterValue ?? ""} |`,
  );
}
if (visiblePanelAttrPairs === 0) {
  lines.push("| _none with non-zero exact /10 /100 /1000 matches_ |  |  | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |");
}

lines.push(
  "",
  "## Packet Resource Changes",
  "",
  "This is the raw packet-backed current-resource view. It does not use inferred New Factor counters.",
  "",
  "| resource id | rows | changes | increases | decreases | first | last | last delta |",
  "| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
);
for (const row of report.resources
  .slice()
  .sort((left, right) => right.changeCount - left.changeCount || left.id - right.id)) {
  lines.push(
    `| ${row.id} | ${row.count} | ${row.changeCount} | ${row.increaseCount} | ${row.decreaseCount} | ${row.first ?? ""} | ${row.last ?? ""} | ${row.lastDelta ?? ""} |`,
  );
}
if (report.resources.length === 0) lines.push("| _none_ | 0 | 0 | 0 | 0 |  |  |  |");

lines.push(
  "",
  "### Recent Packet Resource Changes",
  "",
  "| ts ms | resource id | previous | current | delta | source file |",
  "| ---: | ---: | ---: | ---: | ---: | --- |",
);
for (const row of report.recentPacketResourceChanges) {
  lines.push(
    `| ${row.tsMs} | ${row.resourceId} | ${row.previousValue} | ${row.value} | ${row.delta} | ${tableCell(row.file)} |`,
  );
}
if (report.recentPacketResourceChanges.length === 0) lines.push("| _none_ |  |  |  |  |  |");

lines.push(
  "",
  "## Inferred Factor Counters",
  "",
  "| counter slot | rows | threshold(s) | min | max | last | reset-active rows | sample values |",
  "| --- | ---: | --- | ---: | ---: | ---: | ---: | --- |",
);
for (const row of report.counters.slice().sort((left, right) => left.key.localeCompare(right.key))) {
  lines.push(
    `| ${tableCell(row.key)} | ${row.count} | ${tableCell(row.thresholds.join(", "))} | ${row.min ?? ""} | ${row.max ?? ""} | ${row.last ?? ""} | ${row.resetActiveCount} | ${tableCell(formatValueSet(new Set(row.values)))} |`,
  );
}
if (report.counters.length === 0) lines.push("| _none_ | 0 |  |  |  |  |  |  |");

lines.push(
  "",
  "## Resource/Counter Pair Candidates",
  "",
  "| resource id | counter slot | pairs | exact | /10 | /100 | /1000 | delta ms range | last resource | last counter |",
  "| ---: | --- | ---: | ---: | ---: | ---: | ---: | --- | ---: | ---: |",
);
for (const row of report.resourceCounterPairs.slice(0, 40)) {
  lines.push(
    `| ${row.resourceId} | ${tableCell(row.counterKey)} | ${row.pairs} | ${row.exactMatches} | ${row.div10Matches} | ${row.div100Matches} | ${row.div1000Matches} | ${row.minDeltaMs}-${row.maxDeltaMs} | ${row.lastResourceValue ?? ""} | ${row.lastCounterValue ?? ""} |`,
  );
}
if (report.resourceCounterPairs.length === 0) lines.push("| _none_ |  | 0 | 0 | 0 | 0 | 0 |  |  |  |");

lines.push("", "## Notes", "");
for (const note of report.notes) lines.push(`- ${note}`);

fs.writeFileSync(outMd, `${lines.join("\n")}\n`);
console.log(`Wrote ${outJson}`);
console.log(`Wrote ${outMd}`);

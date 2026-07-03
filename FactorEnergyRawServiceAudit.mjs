#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";

function printHelp() {
  console.log(`FactorEnergyRawServiceAudit.mjs - inspect raw service probes near New Factor counters.

Options:
  --input <path>           Event Logger JSON file or directory. Can be repeated.
  --out-json <path>        JSON report path.
                           Default: output/probing-reports/FactorEnergyRawServiceAudit.json
  --out-md <path>          Markdown report path.
                           Default: output/probing-reports/FactorEnergyRawServiceAudit.md
  --max-files <n>          Latest Event Logger files to scan. Default: 20.
  --near-ms <n>            Window for raw rows near factor counters. Default: 250.
  --pair-window-ms <n>     Wider pairing window for raw rows/counters. Default: 2000.
  --help                   Show this help.

Notes:
  This is an extractor-side report only. It scans raw_service_probe/service_probe
  Event Logger rows created by npm run tauri:dev:factor-probes -- --raw-service-probes-all
  and compares their timing/candidate values against inferred factor counters.
  Do not promote raw matches into runtime behavior without a controlled
  gain/spend capture that proves the mapping.`);
}

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  printHelp();
  process.exit(0);
}

function argValues(name) {
  const values = [];
  for (let i = 2; i < process.argv.length; i += 1) {
    const arg = process.argv[i];
    if (arg === name && i + 1 < process.argv.length) {
      values.push(process.argv[i + 1]);
      i += 1;
    } else if (arg.startsWith(`${name}=`)) {
      values.push(arg.slice(name.length + 1));
    }
  }
  return values;
}

function argValue(name, fallback) {
  return argValues(name).at(-1) ?? fallback;
}

function defaultInputRoots() {
  const roots = [];
  if (process.env.APPDATA) {
    roots.push(path.join(process.env.APPDATA, "com.resonance-logs-global", "EventLogs"));
  }
  roots.push(path.join(os.homedir(), "AppData", "Roaming", "com.resonance-logs-global", "EventLogs"));
  return [...new Set(roots)].filter((root) => fs.existsSync(root));
}

function collectJsonFiles(inputPath, files) {
  if (!inputPath || !fs.existsSync(inputPath)) return;
  const stat = fs.statSync(inputPath);
  if (stat.isFile()) {
    if (inputPath.toLowerCase().endsWith(".json")) files.push(inputPath);
    return;
  }
  for (const entry of fs.readdirSync(inputPath, { withFileTypes: true })) {
    collectJsonFiles(path.join(inputPath, entry.name), files);
  }
}

function latestFiles(files, maxFiles) {
  return files
    .map((file) => ({ file, mtime: fs.statSync(file).mtimeMs, size: fs.statSync(file).size }))
    .sort((left, right) => right.mtime - left.mtime)
    .slice(0, maxFiles);
}

function readSessionFile(file) {
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    return Array.isArray(parsed?.entries) ? parsed : null;
  } catch {
    return null;
  }
}

function parseRaw(entry) {
  if (!entry?.raw) return null;
  if (typeof entry.raw === "object") return entry.raw;
  if (typeof entry.raw !== "string") return null;
  try {
    return JSON.parse(entry.raw);
  } catch {
    return null;
  }
}

function numberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function compactPath(filePath) {
  const relative = path.relative(process.cwd(), filePath);
  return relative && !relative.startsWith("..") ? relative : filePath;
}

function tableCell(value) {
  return String(value ?? "").replaceAll("|", "\\|").replace(/\s+/g, " ").trim();
}

function hexToBuffer(hex) {
  if (typeof hex !== "string" || hex.length < 2 || hex.length % 2 !== 0) return null;
  try {
    return Buffer.from(hex, "hex");
  } catch {
    return null;
  }
}

function readU32(buffer, offset) {
  return offset + 4 <= buffer.length ? buffer.readUInt32LE(offset) : null;
}

function readU16(buffer, offset) {
  return offset + 2 <= buffer.length ? buffer.readUInt16LE(offset) : null;
}

function readVarint(buffer, offset) {
  let value = 0;
  let shift = 0;
  for (let index = offset; index < buffer.length && index < offset + 10; index += 1) {
    const byte = buffer[index];
    value += (byte & 0x7f) * 2 ** shift;
    if (value > Number.MAX_SAFE_INTEGER) return null;
    if ((byte & 0x80) === 0) return { value, width: index - offset + 1 };
    shift += 7;
  }
  return null;
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
        effectiveThreshold: numberOrNull(slot.effectiveThreshold),
        resetBuffActive: Boolean(slot.resetBuffActive),
      });
    }
  }
  return rows;
}

function rowsNear(rows, tsMs, windowMs) {
  return rows
    .map((row) => ({ ...row, deltaMs: row.tsMs - tsMs, absDeltaMs: Math.abs(row.tsMs - tsMs) }))
    .filter((row) => row.absDeltaMs <= windowMs)
    .sort((left, right) => left.absDeltaMs - right.absDeltaMs || left.tsMs - right.tsMs);
}

function formatCounters(counterRows) {
  return counterRows
    .slice(0, 4)
    .flatMap((row) => row.slots.slice(0, 5).map((slot) => `${slot.key}=${slot.currentCount}`))
    .join(", ");
}

function formatValues(values) {
  const unique = [...new Set(values.filter((value) => Number.isFinite(value)))].sort((left, right) => left - right);
  const rendered = unique.slice(0, 12).join(", ");
  return unique.length > 12 ? `${rendered}, ...` : rendered;
}

function formatTopValueCounts(valueCounts, limit = 12) {
  const rows = [...valueCounts.entries()]
    .map(([value, count]) => ({ value: Number(value), count }))
    .sort((left, right) => right.count - left.count || left.value - right.value)
    .slice(0, limit)
    .map((row) => `${row.value}x${row.count}`);
  return valueCounts.size > limit ? `${rows.join(", ")}, ...` : rows.join(", ");
}

function increment(map, key, amount = 1) {
  map.set(key, (map.get(key) ?? 0) + amount);
}

function methodLabel(raw, entry) {
  const methodName = raw?.methodName ?? raw?.shadowDispatch?.methodName ?? entry.targetLabel;
  const serviceName = raw?.serviceName ?? raw?.shadowDispatch?.serviceName ?? entry.sourceLabel;
  const methodHex = raw?.methodIdHex ?? (numberOrNull(raw?.methodId) !== null ? `0x${Number(raw.methodId).toString(16).toUpperCase()}` : "");
  if (methodName) return String(methodName);
  if (serviceName && methodHex) return `${serviceName}.${methodHex}`;
  if (serviceName) return String(serviceName);
  return `${entry.category ?? "unknown"}.${entry.action ?? "unknown"}`;
}

function scanPayloadForTargets(payloadHex, targetValues) {
  const buffer = hexToBuffer(payloadHex);
  if (!buffer || targetValues.size === 0) return [];
  const matches = new Map();
  const push = (value, encoding, offset) => {
    if (!targetValues.has(value)) return;
    const key = `${value}|${encoding}`;
    const row = matches.get(key) ?? { value, encoding, count: 0, offsets: [] };
    row.count += 1;
    if (row.offsets.length < 8) row.offsets.push(offset);
    matches.set(key, row);
  };

  for (let offset = 0; offset < buffer.length; offset += 1) {
    const varint = readVarint(buffer, offset);
    if (varint && varint.width <= 5) push(varint.value, "varint", offset);
    const u16 = readU16(buffer, offset);
    if (u16 !== null) push(u16, "u16-le", offset);
    const u32 = readU32(buffer, offset);
    if (u32 !== null) push(u32, "u32-le", offset);
  }

  return [...matches.values()].sort(
    (left, right) => right.count - left.count || left.value - right.value || left.encoding.localeCompare(right.encoding),
  );
}

function decodedAttrRows(raw) {
  const deltas = Array.isArray(raw?.deltas) ? raw.deltas : [];
  const rows = [];
  for (const delta of deltas) {
    for (const attr of Array.isArray(delta?.attrs) ? delta.attrs : []) {
      const id = numberOrNull(attr?.id);
      if (id === null) continue;
      rows.push({
        deltaUuid: numberOrNull(delta?.deltaUuid),
        attrCollectionUuid: numberOrNull(delta?.attrCollectionUuid),
        id,
        idHex: attr?.idHex ?? `0x${id.toString(16).toUpperCase()}`,
        attrType: attr?.attrType ?? "",
        kind: attr?.kind ?? "",
        rawLen: numberOrNull(attr?.rawLen) ?? 0,
        varint: numberOrNull(attr?.varint),
        u16Le: numberOrNull(attr?.u16Le),
        i32Le: numberOrNull(attr?.i32Le),
        varints: Array.isArray(attr?.varints) ? attr.varints.map(numberOrNull).filter((value) => value !== null) : [],
        packedVarints: Array.isArray(attr?.packedVarints)
          ? attr.packedVarints.map(numberOrNull).filter((value) => value !== null)
          : [],
        rawHex: attr?.rawHex ?? "",
      });
    }
  }
  return rows;
}

function decodedAttrCandidateValues(attr) {
  const values = [];
  for (const value of attr.packedVarints) {
    values.push({ kind: "packed", value });
  }
  if (attr.varint !== null) values.push({ kind: "varint", value: attr.varint });
  if (attr.i32Le !== null) values.push({ kind: "i32Le", value: attr.i32Le });
  if (attr.u16Le !== null) values.push({ kind: "u16Le", value: attr.u16Le });
  for (const value of attr.varints.slice(0, 6)) {
    values.push({ kind: "varints", value });
  }

  const seen = new Set();
  return values.filter((row) => {
    if (!Number.isFinite(row.value)) return false;
    const key = `${row.kind}:${row.value}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function decodeFightResourceTupleCandidate(attr) {
  if (attr.id !== 50002 || attr.packedVarints.length < 10) return null;
  const values = attr.packedVarints;
  const resourceIds = [values[1], values[3], values[5]].filter((value) => Number.isFinite(value) && value > 0);
  if (resourceIds.length !== 3 || new Set(resourceIds).size !== 1) return null;
  return {
    resourceId: resourceIds[0],
    leadingFlags: [values[0], values[2], values[4]],
    value: values[6],
    maxValue: values[7],
    tailValues: values.slice(8),
    sequence: values,
  };
}

function normalizeTupleProbeRow(raw) {
  const candidateRow = raw?.candidateRow;
  const candidate = candidateRow?.candidate;
  const resourceId = numberOrNull(candidate?.resourceId);
  const currentValue = numberOrNull(candidate?.currentValue);
  const maxValue = numberOrNull(candidate?.maxValue);
  if (resourceId === null || currentValue === null || maxValue === null) return null;
  return {
    source: raw?.source ?? "",
    deltaUuid: numberOrNull(candidateRow?.deltaUuid),
    attrCollectionUuid: numberOrNull(candidateRow?.attrCollectionUuid),
    attrId: numberOrNull(candidateRow?.id),
    attrIdHex: candidateRow?.idHex ?? "",
    attrType: candidateRow?.attrType ?? "",
    attrKind: candidateRow?.kind ?? "",
    resourceId,
    currentValue,
    maxValue,
    tailValues: Array.isArray(candidate?.tailValues)
      ? candidate.tailValues.map(numberOrNull).filter((value) => value !== null)
      : [],
    leadingFlags: Array.isArray(candidate?.leadingFlags)
      ? candidate.leadingFlags.map(numberOrNull).filter((value) => value !== null)
      : [],
    sequence: Array.isArray(candidate?.sequence)
      ? candidate.sequence.map(numberOrNull).filter((value) => value !== null)
      : [],
    rawHex: candidateRow?.rawHex ?? "",
  };
}

const inputs = argValues("--input");
const roots = inputs.length ? inputs : defaultInputRoots();
const outJson = argValue("--out-json", "output/probing-reports/FactorEnergyRawServiceAudit.json");
const outMd = argValue("--out-md", "output/probing-reports/FactorEnergyRawServiceAudit.md");
const maxFiles = Number(argValue("--max-files", "20"));
const nearMs = Number(argValue("--near-ms", "250"));
const pairWindowMs = Number(argValue("--pair-window-ms", "2000"));

const files = [];
for (const root of roots) collectJsonFiles(root, files);
const scannedFiles = latestFiles(files, Number.isFinite(maxFiles) && maxFiles > 0 ? maxFiles : 20);

const rawRows = [];
const counterRows = [];
const decodedDeltaRows = [];
const tupleProbeRows = [];
const fileSummaries = [];
const methodStats = new Map();
const actionCounts = new Map();

for (const { file } of scannedFiles) {
  const session = readSessionFile(file);
  if (!session) continue;
  const fileActionCounts = new Map();
  const fileSummary = {
    file: compactPath(file),
    entries: session.entries.length,
    rawServiceRows: 0,
    counterRows: 0,
    decodedDeltaRows: 0,
    actions: fileActionCounts,
  };

  for (const entry of session.entries) {
    const actionKey = `${entry.category ?? ""}|${entry.action ?? ""}`;
    increment(actionCounts, actionKey);
    increment(fileActionCounts, actionKey);
    const raw = parseRaw(entry);
    const tsMs = numberOrNull(entry.tsMs ?? entry.ts_ms);
    if (tsMs === null) continue;

    if (entry.category === "factor_energy_probe" && entry.action === "factor_counter_update") {
      const slots = normalizeCounterRows(raw);
      if (slots.length > 0) {
        fileSummary.counterRows += 1;
        counterRows.push({
          tsMs,
          file,
          sourceItemIds: Array.isArray(raw?.sourceItemIds) ? raw.sourceItemIds : [],
          slotItemIds: Array.isArray(raw?.slotItemIds) ? raw.slotItemIds : [],
          slots,
        });
      }
    }

    if (entry.category === "factor_energy_probe" && entry.action === "fight_resource_tuple_candidate") {
      const tupleRow = normalizeTupleProbeRow(raw);
      if (tupleRow) {
        tupleProbeRows.push({
          tsMs,
          file,
          fileCompact: compactPath(file),
          summary: entry.summary ?? "",
          value: numberOrNull(entry.value) ?? tupleRow.currentValue,
          ...tupleRow,
        });
      }
    }

    if (
      entry.category === "factor_energy_probe" &&
      (entry.action === "sync_to_me_delta_attrs" || entry.action === "sync_near_delta_attrs")
    ) {
      const deltas = Array.isArray(raw?.deltas) ? raw.deltas : [];
      const attrIds = [];
      const interestingAttrIds = [];
      const packedCandidateAttrIds = [];
      const attrs = decodedAttrRows(raw);
      for (const delta of deltas) {
        for (const id of Array.isArray(delta?.interestingAttrIds) ? delta.interestingAttrIds : []) {
          const numeric = numberOrNull(id);
          if (numeric !== null) interestingAttrIds.push(numeric);
        }
        for (const id of Array.isArray(delta?.packedCandidateAttrIds) ? delta.packedCandidateAttrIds : []) {
          const numeric = numberOrNull(id);
          if (numeric !== null) packedCandidateAttrIds.push(numeric);
        }
      }
      for (const attr of attrs) attrIds.push(attr.id);
      fileSummary.decodedDeltaRows += 1;
      decodedDeltaRows.push({
        tsMs,
        file,
        action: entry.action,
        source: raw?.source ?? entry.sourceLabel ?? "",
        deltaCount: deltas.length,
        totalAttrs: numberOrNull(raw?.totalAttrs) ?? attrIds.length,
        totalInterestingAttrs: numberOrNull(raw?.totalInterestingAttrs) ?? interestingAttrIds.length,
        attrIds,
        interestingAttrIds,
        packedCandidateAttrIds,
        attrs,
        summary: entry.summary ?? "",
        fileCompact: compactPath(file),
      });
    }

    const hasPayload = typeof raw?.payloadHex === "string" && raw.payloadHex.length > 0;
    const isRawService =
      hasPayload &&
      (entry.category === "raw_service_probe" ||
        entry.category === "service_probe" ||
        raw?.shadowDispatch ||
        raw?.serviceName ||
        raw?.methodName);
    if (!isRawService) continue;

    const label = methodLabel(raw, entry);
    const payloadLength = numberOrNull(raw?.payloadLength) ?? Math.floor(raw.payloadHex.length / 2);
    const row = {
      tsMs,
      file,
      category: entry.category ?? "",
      action: entry.action ?? "",
      method: label,
      serviceName: raw?.serviceName ?? raw?.shadowDispatch?.serviceName ?? "",
      methodName: raw?.methodName ?? raw?.shadowDispatch?.methodName ?? "",
      serviceId: numberOrNull(raw?.serviceId),
      serviceIdHex: raw?.serviceIdHex ?? "",
      methodId: numberOrNull(raw?.methodId),
      methodIdHex: raw?.methodIdHex ?? "",
      payloadLength,
      payloadHex: raw.payloadHex,
      payloadHexTruncated: Boolean(raw?.payloadHexTruncated),
      seasonalCandidateCount: numberOrNull(raw?.seasonalCandidateCount) ?? 0,
      seasonalRawProtoCandidateCount: numberOrNull(raw?.seasonalRawProtoCandidateCount) ?? 0,
      summary: entry.summary ?? "",
      fileCompact: compactPath(file),
    };
    fileSummary.rawServiceRows += 1;
    rawRows.push(row);

    const methodBucket = methodStats.get(label) ?? {
      method: label,
      rows: 0,
      nearCounterRows: 0,
      payloadMin: null,
      payloadMax: null,
      seasonalCandidateRows: 0,
      seasonalRawProtoRows: 0,
      sampleActions: new Set(),
      sampleFiles: new Set(),
    };
    methodBucket.rows += 1;
    methodBucket.payloadMin = methodBucket.payloadMin === null ? payloadLength : Math.min(methodBucket.payloadMin, payloadLength);
    methodBucket.payloadMax = methodBucket.payloadMax === null ? payloadLength : Math.max(methodBucket.payloadMax, payloadLength);
    if (row.seasonalCandidateCount > 0) methodBucket.seasonalCandidateRows += 1;
    if (row.seasonalRawProtoCandidateCount > 0) methodBucket.seasonalRawProtoRows += 1;
    if (methodBucket.sampleActions.size < 4) methodBucket.sampleActions.add(`${row.category}|${row.action}`);
    if (methodBucket.sampleFiles.size < 3) methodBucket.sampleFiles.add(row.fileCompact);
    methodStats.set(label, methodBucket);
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

rawRows.sort((left, right) => left.tsMs - right.tsMs);
counterRows.sort((left, right) => left.tsMs - right.tsMs);
decodedDeltaRows.sort((left, right) => left.tsMs - right.tsMs);
tupleProbeRows.sort((left, right) => left.tsMs - right.tsMs);

const targetCounterValues = new Set();
for (const row of counterRows) {
  for (const slot of row.slots) {
    if (slot.currentCount > 0) targetCounterValues.add(slot.currentCount);
  }
}

const rawRowsNearCounters = [];
const numericMatchStats = new Map();
for (const rawRow of rawRows) {
  const nearCounters = rowsNear(counterRows, rawRow.tsMs, pairWindowMs);
  if (nearCounters.length === 0) continue;
  const tightCounters = nearCounters.filter((row) => row.absDeltaMs <= nearMs);
  const matches = scanPayloadForTargets(rawRow.payloadHex, targetCounterValues)
    .filter((match) => match.value > 0)
    .slice(0, 20);

  const methodBucket = methodStats.get(rawRow.method);
  if (methodBucket) methodBucket.nearCounterRows += 1;

  for (const match of matches) {
    const key = `${rawRow.method}|${match.value}|${match.encoding}`;
    const bucket = numericMatchStats.get(key) ?? {
      method: rawRow.method,
      value: match.value,
      encoding: match.encoding,
      rows: 0,
      totalMatches: 0,
      firstTsMs: rawRow.tsMs,
      lastTsMs: rawRow.tsMs,
      sampleOffsets: [],
    };
    bucket.rows += 1;
    bucket.totalMatches += match.count;
    bucket.lastTsMs = rawRow.tsMs;
    for (const offset of match.offsets) {
      if (bucket.sampleOffsets.length < 10) bucket.sampleOffsets.push(offset);
    }
    numericMatchStats.set(key, bucket);
  }

  rawRowsNearCounters.push({
    tsMs: rawRow.tsMs,
    method: rawRow.method,
    category: rawRow.category,
    action: rawRow.action,
    payloadLength: rawRow.payloadLength,
    payloadHexTruncated: rawRow.payloadHexTruncated,
    seasonalCandidateCount: rawRow.seasonalCandidateCount,
    seasonalRawProtoCandidateCount: rawRow.seasonalRawProtoCandidateCount,
    nearestCounterDeltaMs: nearCounters[0]?.deltaMs ?? null,
    tightCounterRows: tightCounters.length,
    nearbyCounters: nearCounters.slice(0, 3).map((row) => ({
      deltaMs: row.deltaMs,
      slots: row.slots,
      file: compactPath(row.file),
    })),
    numericMatches: matches,
    summary: rawRow.summary,
    file: rawRow.fileCompact,
  });
}

const decodedRowsNearCounters = decodedDeltaRows
  .map((decodedRow) => {
    const nearCounters = rowsNear(counterRows, decodedRow.tsMs, pairWindowMs);
    return {
      ...decodedRow,
      nearestCounterDeltaMs: nearCounters[0]?.deltaMs ?? null,
      tightCounterRows: nearCounters.filter((row) => row.absDeltaMs <= nearMs).length,
      nearbyCounters: nearCounters.slice(0, 3).map((row) => ({
        deltaMs: row.deltaMs,
        slots: row.slots,
        file: compactPath(row.file),
      })),
    };
  })
  .filter((row) => row.nearestCounterDeltaMs !== null)
  .sort((left, right) => Math.abs(left.nearestCounterDeltaMs) - Math.abs(right.nearestCounterDeltaMs));

const tupleProbeRowsNearCounters = tupleProbeRows
  .map((tupleRow) => {
    const nearCounters = rowsNear(counterRows, tupleRow.tsMs, pairWindowMs);
    return {
      ...tupleRow,
      nearestCounterDeltaMs: nearCounters[0]?.deltaMs ?? null,
      tightCounterRows: nearCounters.filter((row) => row.absDeltaMs <= nearMs).length,
      nearbyCounters: nearCounters.slice(0, 3).map((row) => ({
        deltaMs: row.deltaMs,
        slots: row.slots,
        file: compactPath(row.file),
      })),
    };
  })
  .filter((row) => row.nearestCounterDeltaMs !== null)
  .sort((left, right) => Math.abs(left.nearestCounterDeltaMs) - Math.abs(right.nearestCounterDeltaMs));

const decodedAttrValueStats = new Map();
const decodedAttrSequenceStats = new Map();
const fightResourceTupleStats = new Map();
for (const row of decodedRowsNearCounters) {
  const counterSlots = row.nearbyCounters.flatMap((counter) => counter.slots);
  const counterValues = new Set(counterSlots.map((slot) => slot.currentCount));
  const tight = row.tightCounterRows > 0;
  for (const attr of row.attrs) {
    const tupleCandidate = decodeFightResourceTupleCandidate(attr);
    if (tupleCandidate) {
      const tupleKey = `${row.source}|${attr.id}|${tupleCandidate.resourceId}|${tupleCandidate.maxValue}|${tupleCandidate.tailValues.join(",")}`;
      const tupleBucket = fightResourceTupleStats.get(tupleKey) ?? {
        source: row.source,
        attrId: attr.id,
        attrIdHex: attr.idHex,
        attrType: attr.attrType,
        attrKind: attr.kind,
        resourceId: tupleCandidate.resourceId,
        maxValue: tupleCandidate.maxValue,
        tailValues: tupleCandidate.tailValues,
        rows: 0,
        tightRows: 0,
        valueCounts: new Map(),
        exactValueMatchRows: 0,
        exactValueMatches: 0,
        samplePairs: [],
        sampleRawHex: [],
      };
      tupleBucket.rows += 1;
      if (tight) tupleBucket.tightRows += 1;
      increment(tupleBucket.valueCounts, String(tupleCandidate.value));
      const matchingSlots = counterSlots.filter((slot) => slot.currentCount === tupleCandidate.value);
      if (matchingSlots.length > 0) {
        tupleBucket.exactValueMatchRows += 1;
        tupleBucket.exactValueMatches += matchingSlots.length;
      }
      if (tupleBucket.samplePairs.length < 10) {
        tupleBucket.samplePairs.push({
          value: tupleCandidate.value,
          sequence: tupleCandidate.sequence,
          leadingFlags: tupleCandidate.leadingFlags,
          nearestCounterDeltaMs: row.nearestCounterDeltaMs,
          counters: counterSlots.slice(0, 8).map((slot) => `${slot.key}=${slot.currentCount}`),
          matches: matchingSlots.slice(0, 8).map((slot) => `${slot.key}=${slot.currentCount}`),
          file: row.fileCompact,
        });
      }
      if (attr.rawHex && tupleBucket.sampleRawHex.length < 4 && !tupleBucket.sampleRawHex.includes(attr.rawHex)) {
        tupleBucket.sampleRawHex.push(attr.rawHex);
      }
      fightResourceTupleStats.set(tupleKey, tupleBucket);
    }

    const sequences = [];
    if (attr.packedVarints.length > 0) {
      sequences.push({ kind: "packed", values: attr.packedVarints });
    }
    if (attr.varints.length > 1) {
      sequences.push({ kind: "varints", values: attr.varints });
    }
    for (const sequence of sequences) {
      const sequenceText = sequence.values.join(",");
      const sequenceKey = `${row.source}|${attr.id}|${sequence.kind}|${sequenceText}`;
      const sequenceBucket = decodedAttrSequenceStats.get(sequenceKey) ?? {
        source: row.source,
        attrId: attr.id,
        attrIdHex: attr.idHex,
        attrType: attr.attrType,
        attrKind: attr.kind,
        sequenceKind: sequence.kind,
        sequence: sequence.values,
        rows: 0,
        tightRows: 0,
        exactValueMatchRows: 0,
        exactValueMatches: 0,
        sampleCounters: [],
        sampleRawHex: [],
      };
      sequenceBucket.rows += 1;
      if (tight) sequenceBucket.tightRows += 1;
      const matchingSlots = counterSlots.filter((slot) => sequence.values.includes(slot.currentCount));
      if (matchingSlots.length > 0) {
        sequenceBucket.exactValueMatchRows += 1;
        sequenceBucket.exactValueMatches += matchingSlots.length;
      }
      if (sequenceBucket.sampleCounters.length < 6) {
        sequenceBucket.sampleCounters.push({
          nearestCounterDeltaMs: row.nearestCounterDeltaMs,
          counters: counterSlots.slice(0, 8).map((slot) => `${slot.key}=${slot.currentCount}`),
          matches: matchingSlots.slice(0, 8).map((slot) => `${slot.key}=${slot.currentCount}`),
          file: row.fileCompact,
        });
      }
      if (attr.rawHex && sequenceBucket.sampleRawHex.length < 4 && !sequenceBucket.sampleRawHex.includes(attr.rawHex)) {
        sequenceBucket.sampleRawHex.push(attr.rawHex);
      }
      decodedAttrSequenceStats.set(sequenceKey, sequenceBucket);
    }

    for (const candidate of decodedAttrCandidateValues(attr)) {
      const key = `${row.source}|${attr.id}|${candidate.kind}`;
      const bucket = decodedAttrValueStats.get(key) ?? {
        source: row.source,
        attrId: attr.id,
        attrIdHex: attr.idHex,
        attrType: attr.attrType,
        attrKind: attr.kind,
        valueKind: candidate.kind,
        rows: 0,
        tightRows: 0,
        valueCounts: new Map(),
        exactValueMatchRows: 0,
        exactValueMatches: 0,
        samplePairs: [],
        sampleRawHex: [],
      };
      bucket.rows += 1;
      if (tight) bucket.tightRows += 1;
      increment(bucket.valueCounts, String(candidate.value));
      const matchingSlots = counterSlots.filter((slot) => slot.currentCount === candidate.value);
      if (matchingSlots.length > 0) {
        bucket.exactValueMatchRows += 1;
        bucket.exactValueMatches += matchingSlots.length;
      }
      if (bucket.samplePairs.length < 8) {
        bucket.samplePairs.push({
          value: candidate.value,
          nearestCounterDeltaMs: row.nearestCounterDeltaMs,
          counters: counterSlots.slice(0, 8).map((slot) => `${slot.key}=${slot.currentCount}`),
          matches: matchingSlots.slice(0, 8).map((slot) => `${slot.key}=${slot.currentCount}`),
          file: row.fileCompact,
        });
      }
      if (attr.rawHex && bucket.sampleRawHex.length < 4 && !bucket.sampleRawHex.includes(attr.rawHex)) {
        bucket.sampleRawHex.push(attr.rawHex);
      }
      decodedAttrValueStats.set(key, bucket);
    }
  }
}

const report = {
  generatedBy: "FactorEnergyRawServiceAudit.mjs",
  inputs: {
    roots,
    scannedFiles: scannedFiles.map((item) => compactPath(item.file)),
    maxFiles,
    nearMs,
    pairWindowMs,
  },
  summary: {
    scannedFileCount: scannedFiles.length,
    filesWithEntries: fileSummaries.length,
    rawServiceRows: rawRows.length,
    counterRows: counterRows.length,
    decodedDeltaRows: decodedDeltaRows.length,
    counterSlotsSeen: new Set(counterRows.flatMap((row) => row.slots.map((slot) => slot.key))).size,
    counterValuesSeen: targetCounterValues.size,
    rawRowsNearCounters: rawRowsNearCounters.length,
    rawRowsTightNearCounters: rawRowsNearCounters.filter((row) => row.tightCounterRows > 0).length,
    decodedRowsNearCounters: decodedRowsNearCounters.length,
    decodedRowsTightNearCounters: decodedRowsNearCounters.filter((row) => row.tightCounterRows > 0).length,
    directTupleProbeRows: tupleProbeRows.length,
    directTupleProbeRowsNearCounters: tupleProbeRowsNearCounters.length,
    directTupleProbeRowsTightNearCounters: tupleProbeRowsNearCounters.filter((row) => row.tightCounterRows > 0).length,
    decodedAttrValueCandidateGroups: decodedAttrValueStats.size,
    decodedAttrSequenceGroups: decodedAttrSequenceStats.size,
    fightResourceTupleCandidateGroups: fightResourceTupleStats.size,
    numericMatchGroups: numericMatchStats.size,
    methodCount: methodStats.size,
  },
  actionCounts: [...actionCounts.entries()]
    .map(([action, count]) => ({ action, count }))
    .sort((left, right) => right.count - left.count || left.action.localeCompare(right.action)),
  fileSummaries: fileSummaries.slice(0, 80),
  methods: [...methodStats.values()]
    .map((row) => ({
      ...row,
      sampleActions: [...row.sampleActions],
      sampleFiles: [...row.sampleFiles],
    }))
    .sort((left, right) => right.nearCounterRows - left.nearCounterRows || right.rows - left.rows || left.method.localeCompare(right.method)),
  rawRowsNearCounters: rawRowsNearCounters
    .sort((left, right) => Math.abs(left.nearestCounterDeltaMs ?? Infinity) - Math.abs(right.nearestCounterDeltaMs ?? Infinity))
    .slice(0, 120),
  decodedRowsNearCounters: decodedRowsNearCounters.slice(0, 120).map((row) => ({
    tsMs: row.tsMs,
    action: row.action,
    source: row.source,
    deltaCount: row.deltaCount,
    totalAttrs: row.totalAttrs,
    totalInterestingAttrs: row.totalInterestingAttrs,
    attrIds: [...new Set(row.attrIds)].slice(0, 40),
    interestingAttrIds: [...new Set(row.interestingAttrIds)].slice(0, 40),
    packedCandidateAttrIds: [...new Set(row.packedCandidateAttrIds)].slice(0, 40),
    nearestCounterDeltaMs: row.nearestCounterDeltaMs,
    tightCounterRows: row.tightCounterRows,
    nearbyCounters: row.nearbyCounters,
    summary: row.summary,
    file: row.fileCompact,
  })),
  directFightResourceTupleRows: tupleProbeRowsNearCounters.slice(0, 160).map((row) => ({
    tsMs: row.tsMs,
    source: row.source,
    deltaUuid: row.deltaUuid,
    attrCollectionUuid: row.attrCollectionUuid,
    attrId: row.attrId,
    attrIdHex: row.attrIdHex,
    attrType: row.attrType,
    attrKind: row.attrKind,
    resourceId: row.resourceId,
    currentValue: row.currentValue,
    maxValue: row.maxValue,
    tailValues: row.tailValues,
    leadingFlags: row.leadingFlags,
    sequence: row.sequence,
    nearestCounterDeltaMs: row.nearestCounterDeltaMs,
    tightCounterRows: row.tightCounterRows,
    nearbyCounters: row.nearbyCounters,
    summary: row.summary,
    rawHex: row.rawHex,
    file: row.fileCompact,
  })),
  decodedAttrValueCandidates: [...decodedAttrValueStats.values()]
    .map((row) => ({
      source: row.source,
      attrId: row.attrId,
      attrIdHex: row.attrIdHex,
      attrType: row.attrType,
      attrKind: row.attrKind,
      valueKind: row.valueKind,
      rows: row.rows,
      tightRows: row.tightRows,
      uniqueValues: row.valueCounts.size,
      topValues: [...row.valueCounts.entries()]
        .map(([value, count]) => ({ value: Number(value), count }))
        .sort((left, right) => right.count - left.count || left.value - right.value)
        .slice(0, 40),
      exactValueMatchRows: row.exactValueMatchRows,
      exactValueMatches: row.exactValueMatches,
      samplePairs: row.samplePairs,
      sampleRawHex: row.sampleRawHex,
    }))
    .sort(
      (left, right) =>
        right.exactValueMatchRows - left.exactValueMatchRows ||
        right.tightRows - left.tightRows ||
        right.rows - left.rows ||
        left.source.localeCompare(right.source) ||
        left.attrId - right.attrId ||
        left.valueKind.localeCompare(right.valueKind),
    ),
  decodedAttrSequences: [...decodedAttrSequenceStats.values()]
    .map((row) => ({
      source: row.source,
      attrId: row.attrId,
      attrIdHex: row.attrIdHex,
      attrType: row.attrType,
      attrKind: row.attrKind,
      sequenceKind: row.sequenceKind,
      sequence: row.sequence,
      rows: row.rows,
      tightRows: row.tightRows,
      exactValueMatchRows: row.exactValueMatchRows,
      exactValueMatches: row.exactValueMatches,
      sampleCounters: row.sampleCounters,
      sampleRawHex: row.sampleRawHex,
    }))
    .sort(
      (left, right) =>
        right.rows - left.rows ||
        right.tightRows - left.tightRows ||
        right.exactValueMatchRows - left.exactValueMatchRows ||
        left.source.localeCompare(right.source) ||
        left.attrId - right.attrId ||
        left.sequenceKind.localeCompare(right.sequenceKind) ||
        left.sequence.join(",").localeCompare(right.sequence.join(",")),
    ),
  fightResourceTupleCandidates: [...fightResourceTupleStats.values()]
    .map((row) => ({
      source: row.source,
      attrId: row.attrId,
      attrIdHex: row.attrIdHex,
      attrType: row.attrType,
      attrKind: row.attrKind,
      resourceId: row.resourceId,
      maxValue: row.maxValue,
      tailValues: row.tailValues,
      rows: row.rows,
      tightRows: row.tightRows,
      uniqueValues: row.valueCounts.size,
      topValues: [...row.valueCounts.entries()]
        .map(([value, count]) => ({ value: Number(value), count }))
        .sort((left, right) => right.count - left.count || left.value - right.value)
        .slice(0, 40),
      exactValueMatchRows: row.exactValueMatchRows,
      exactValueMatches: row.exactValueMatches,
      samplePairs: row.samplePairs,
      sampleRawHex: row.sampleRawHex,
    }))
    .sort(
      (left, right) =>
        right.tightRows - left.tightRows ||
        right.rows - left.rows ||
        right.exactValueMatchRows - left.exactValueMatchRows ||
        left.source.localeCompare(right.source) ||
        left.resourceId - right.resourceId ||
        left.maxValue - right.maxValue ||
        left.tailValues.join(",").localeCompare(right.tailValues.join(",")),
    ),
  numericMatches: [...numericMatchStats.values()].sort(
    (left, right) => right.rows - left.rows || right.totalMatches - left.totalMatches || left.value - right.value,
  ),
  recentCounterRows: counterRows.slice(-30).map((row) => ({
    tsMs: row.tsMs,
    sourceItemIds: row.sourceItemIds,
    slotItemIds: row.slotItemIds,
    slots: row.slots,
    file: compactPath(row.file),
  })),
};

fs.mkdirSync(path.dirname(outJson), { recursive: true });
fs.writeFileSync(outJson, `${JSON.stringify(report, null, 2)}\n`);
fs.mkdirSync(path.dirname(outMd), { recursive: true });

const lines = [
  "# Factor Energy Raw Service Audit",
  "",
  `- scanned files: ${report.summary.scannedFileCount}`,
  `- files with entries: ${report.summary.filesWithEntries}`,
  `- raw service rows: ${report.summary.rawServiceRows}`,
  `- factor counter rows: ${report.summary.counterRows}`,
  `- decoded delta attr rows: ${report.summary.decodedDeltaRows}`,
  `- counter slots seen: ${report.summary.counterSlotsSeen}`,
  `- non-zero counter values seen: ${report.summary.counterValuesSeen}`,
  `- raw rows near counters (${pairWindowMs}ms): ${report.summary.rawRowsNearCounters}`,
  `- raw rows tight-near counters (${nearMs}ms): ${report.summary.rawRowsTightNearCounters}`,
  `- decoded attr rows near counters (${pairWindowMs}ms): ${report.summary.decodedRowsNearCounters}`,
  `- decoded attr rows tight-near counters (${nearMs}ms): ${report.summary.decodedRowsTightNearCounters}`,
  `- direct tuple probe rows: ${report.summary.directTupleProbeRows}`,
  `- direct tuple probe rows near counters (${pairWindowMs}ms): ${report.summary.directTupleProbeRowsNearCounters}`,
  `- direct tuple probe rows tight-near counters (${nearMs}ms): ${report.summary.directTupleProbeRowsTightNearCounters}`,
  `- decoded attr value candidate groups: ${report.summary.decodedAttrValueCandidateGroups}`,
  `- decoded attr sequence groups: ${report.summary.decodedAttrSequenceGroups}`,
  `- fight resource tuple candidate groups: ${report.summary.fightResourceTupleCandidateGroups}`,
  `- numeric match groups: ${report.summary.numericMatchGroups}`,
  "",
  "## Recent Files",
  "",
  "| file | entries | raw service rows | counter rows | decoded delta rows | top actions |",
  "| --- | ---: | ---: | ---: | ---: | --- |",
];

for (const row of report.fileSummaries.slice(0, 30)) {
  const topActions = row.actions
    .slice(0, 5)
    .map((action) => `${action.action}=${action.count}`)
    .join(", ");
  lines.push(
    `| ${tableCell(row.file)} | ${row.entries} | ${row.rawServiceRows} | ${row.counterRows} | ${row.decodedDeltaRows} | ${tableCell(topActions)} |`,
  );
}
if (report.fileSummaries.length === 0) lines.push("| _none_ | 0 | 0 | 0 | 0 |  |");

lines.push(
  "",
  "## Raw Service Methods",
  "",
  "| method | rows | near counter rows | payload min | payload max | seasonal rows | seasonal proto rows | actions | sample files |",
  "| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |",
);
for (const row of report.methods.slice(0, 80)) {
  lines.push(
    `| ${tableCell(row.method)} | ${row.rows} | ${row.nearCounterRows} | ${row.payloadMin ?? ""} | ${row.payloadMax ?? ""} | ${row.seasonalCandidateRows} | ${row.seasonalRawProtoRows} | ${tableCell(row.sampleActions.join(", "))} | ${tableCell(row.sampleFiles.join("; "))} |`,
  );
}
if (report.methods.length === 0) lines.push("| _none_ | 0 | 0 |  |  |  |  |  |  |");

lines.push(
  "",
  "## Raw Rows Near Factor Counters",
  "",
  "| ts ms | delta ms | tight counter rows | method | payload | seasonal | numeric matches | nearby counters | source file |",
  "| ---: | ---: | ---: | --- | ---: | --- | --- | --- | --- |",
);
for (const row of report.rawRowsNearCounters.slice(0, 80)) {
  const matchText = row.numericMatches
    .slice(0, 8)
    .map((match) => `${match.value} ${match.encoding}x${match.count}@${match.offsets.slice(0, 3).join("/")}`)
    .join(", ");
  lines.push(
    `| ${row.tsMs} | ${row.nearestCounterDeltaMs ?? ""} | ${row.tightCounterRows} | ${tableCell(row.method)} | ${row.payloadLength}${row.payloadHexTruncated ? " truncated" : ""} | ${row.seasonalCandidateCount}/${row.seasonalRawProtoCandidateCount} | ${tableCell(matchText)} | ${tableCell(formatCounters(row.nearbyCounters))} | ${tableCell(row.file)} |`,
  );
}
if (report.rawRowsNearCounters.length === 0) lines.push("| _none_ |  |  |  |  |  |  |  |  |");

lines.push(
  "",
  "## Decoded Delta Attr Rows Near Factor Counters",
  "",
  "These rows come from dev-only decoded SyncToMeDeltaInfo/SyncNearDeltaInfo probes. Attr IDs here are stronger leads than raw numeric byte matches.",
  "",
  "| ts ms | delta ms | tight counter rows | source | deltas | attrs | interesting ids | packed candidate ids | attr ids | nearby counters | source file |",
  "| ---: | ---: | ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |",
);
for (const row of report.decodedRowsNearCounters.slice(0, 80)) {
  lines.push(
    `| ${row.tsMs} | ${row.nearestCounterDeltaMs ?? ""} | ${row.tightCounterRows} | ${tableCell(row.source || row.action)} | ${row.deltaCount} | ${row.totalAttrs} | ${tableCell(formatValues(row.interestingAttrIds))} | ${tableCell(formatValues(row.packedCandidateAttrIds))} | ${tableCell(formatValues(row.attrIds))} | ${tableCell(formatCounters(row.nearbyCounters))} | ${tableCell(row.file)} |`,
  );
}
if (report.decodedRowsNearCounters.length === 0) lines.push("| _none_ |  |  |  |  |  |  |  |  |  |  |");

lines.push(
  "",
  "## Direct Fight Resource Tuple Probe Rows",
  "",
  "These rows come from app-side dev probe action fight_resource_tuple_candidate. They are easier to inspect in Event Logger than the full decoded attr rows, but remain candidates until controlled gain/spend testing proves the current-value position.",
  "",
  "| ts ms | delta ms | tight counter rows | source | resource | current/max | tail | sequence | nearby counters | source file |",
  "| ---: | ---: | ---: | --- | ---: | --- | --- | --- | --- | --- |",
);
for (const row of report.directFightResourceTupleRows.slice(0, 120)) {
  const sequenceText = row.sequence.slice(0, 12).join(", ");
  const renderedSequence = row.sequence.length > 12 ? `${sequenceText}, ...` : sequenceText;
  lines.push(
    `| ${row.tsMs} | ${row.nearestCounterDeltaMs ?? ""} | ${row.tightCounterRows} | ${tableCell(row.source)} | ${row.resourceId} | ${row.currentValue}/${row.maxValue} | ${tableCell(row.tailValues.join(", "))} | ${tableCell(renderedSequence)} | ${tableCell(formatCounters(row.nearbyCounters))} | ${tableCell(row.file)} |`,
  );
}
if (report.directFightResourceTupleRows.length === 0) lines.push("| _none_ |  |  |  |  |  |  |  |  |  |");

lines.push(
  "",
  "## Decoded Attr Value Candidates Near Factor Counters",
  "",
  "These rows decode attr payloads from SyncToMeDeltaInfo/SyncNearDeltaInfo. Exact value matches are still leads, not proof, because inferred factor counters are only a comparison side-channel.",
  "",
  "| source | attr id | attr type | value kind | rows | tight rows | unique values | top values | exact value match rows | exact matches | sample pairs |",
  "| --- | ---: | --- | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |",
);
for (const row of report.decodedAttrValueCandidates.slice(0, 120)) {
  const topValues = formatTopValueCounts(new Map(row.topValues.map((item) => [String(item.value), item.count])));
  const samplePairs = row.samplePairs
    .slice(0, 3)
    .map((pair) => {
      const matches = pair.matches.length ? ` matches ${pair.matches.join("/")}` : "";
      return `${pair.value} @${pair.nearestCounterDeltaMs}ms -> ${pair.counters.slice(0, 4).join(", ")}${matches}`;
    })
    .join("; ");
  lines.push(
    `| ${tableCell(row.source)} | ${row.attrId} | ${tableCell(row.attrType || row.attrKind || row.attrIdHex)} | ${tableCell(row.valueKind)} | ${row.rows} | ${row.tightRows} | ${row.uniqueValues} | ${tableCell(topValues)} | ${row.exactValueMatchRows} | ${row.exactValueMatches} | ${tableCell(samplePairs)} |`,
  );
}
if (report.decodedAttrValueCandidates.length === 0) lines.push("| _none_ |  |  |  | 0 | 0 | 0 |  | 0 | 0 |  |");

lines.push(
  "",
  "## Decoded Attr Packed Sequences Near Factor Counters",
  "",
  "Whole packed/varint sequences are useful for attrs such as 50002, where the payload appears tuple-like and individual numbers can be misleading.",
  "",
  "| source | attr id | attr type | sequence kind | rows | tight rows | sequence | exact value match rows | sample counters |",
  "| --- | ---: | --- | --- | ---: | ---: | --- | ---: | --- |",
);
for (const row of report.decodedAttrSequences.slice(0, 120)) {
  const sequenceText = row.sequence.slice(0, 20).join(", ");
  const renderedSequence = row.sequence.length > 20 ? `${sequenceText}, ...` : sequenceText;
  const sampleCounters = row.sampleCounters
    .slice(0, 3)
    .map((sample) => {
      const matches = sample.matches.length ? ` matches ${sample.matches.join("/")}` : "";
      return `@${sample.nearestCounterDeltaMs}ms -> ${sample.counters.slice(0, 4).join(", ")}${matches}`;
    })
    .join("; ");
  lines.push(
    `| ${tableCell(row.source)} | ${row.attrId} | ${tableCell(row.attrType || row.attrKind || row.attrIdHex)} | ${tableCell(row.sequenceKind)} | ${row.rows} | ${row.tightRows} | ${tableCell(renderedSequence)} | ${row.exactValueMatchRows} | ${tableCell(sampleCounters)} |`,
  );
}
if (report.decodedAttrSequences.length === 0) lines.push("| _none_ |  |  |  | 0 | 0 |  | 0 |  |");

lines.push(
  "",
  "## Fight Resource Tuple Candidates",
  "",
  "These are decoded ATTR_FIGHT_RESOURCES (50002) packed sequences that look like repeated resource IDs plus a current/max/tail tuple. Treat them as packet candidates until a controlled gain/spend capture confirms the value position.",
  "",
  "| source | attr id | resource id | max | tail | rows | tight rows | unique current values | top current values | exact counter match rows | sample pairs |",
  "| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | --- |",
);
for (const row of report.fightResourceTupleCandidates.slice(0, 80)) {
  const topValues = formatTopValueCounts(new Map(row.topValues.map((item) => [String(item.value), item.count])));
  const samplePairs = row.samplePairs
    .slice(0, 4)
    .map((pair) => {
      const sequence = pair.sequence.slice(0, 12).join(",");
      const renderedSequence = pair.sequence.length > 12 ? `${sequence},...` : sequence;
      const matches = pair.matches.length ? ` matches ${pair.matches.join("/")}` : "";
      return `${pair.value} [${renderedSequence}] @${pair.nearestCounterDeltaMs}ms -> ${pair.counters.slice(0, 4).join(", ")}${matches}`;
    })
    .join("; ");
  lines.push(
    `| ${tableCell(row.source)} | ${row.attrId} | ${row.resourceId} | ${row.maxValue} | ${tableCell(row.tailValues.join(", "))} | ${row.rows} | ${row.tightRows} | ${row.uniqueValues} | ${tableCell(topValues)} | ${row.exactValueMatchRows} | ${tableCell(samplePairs)} |`,
  );
}
if (report.fightResourceTupleCandidates.length === 0) lines.push("| _none_ |  |  |  |  | 0 | 0 | 0 |  | 0 |  |");

lines.push(
  "",
  "## Numeric Counter-Value Matches",
  "",
  "These are generic value matches in raw payload previews. They are leads only; small integers often collide by chance.",
  "",
  "| method | value | encoding | rows | total matches | sample offsets |",
  "| --- | ---: | --- | ---: | ---: | --- |",
);
for (const row of report.numericMatches.slice(0, 80)) {
  lines.push(
    `| ${tableCell(row.method)} | ${row.value} | ${row.encoding} | ${row.rows} | ${row.totalMatches} | ${tableCell(row.sampleOffsets.join(", "))} |`,
  );
}
if (report.numericMatches.length === 0) lines.push("| _none_ |  |  | 0 | 0 |  |");

lines.push(
  "",
  "## Recent Factor Counter Rows",
  "",
  "| ts ms | source items | slot items | counters | source file |",
  "| ---: | --- | --- | --- | --- |",
);
for (const row of report.recentCounterRows) {
  lines.push(
    `| ${row.tsMs} | ${tableCell(row.sourceItemIds.join(", "))} | ${tableCell(row.slotItemIds.join(", "))} | ${tableCell(formatCounters([row]))} | ${tableCell(row.file)} |`,
  );
}
if (report.recentCounterRows.length === 0) lines.push("| _none_ |  |  |  |  |");

lines.push(
  "",
  "## Notes",
  "",
  "- Raw rows near counters are selected by timestamp only.",
  "- Numeric matches are generic payload-preview matches against non-zero inferred counter values.",
  "- This report should narrow the next decoder target, not define runtime behavior.",
);

fs.writeFileSync(outMd, `${lines.join("\n")}\n`);
console.log(`Wrote ${outJson}`);
console.log(`Wrote ${outMd}`);

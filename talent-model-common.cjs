"use strict";

const TALENT_PASSIVE_TABLE_HASH = 3345237628;
const BUFF_DESCRIPTION_REFERENCE_TABLE_HASH = 4192598123;
const STRING_POOL = 6;
const INT_POOL = 1;

const CLASS_BUCKETS = Object.freeze({
  1: { className: "Stormblade", specIds: [130, 157], specNames: { 130: "Iaido", 157: "Moonstrike" } },
  2: { className: "Frost Mage", specIds: [212, 233], specNames: { 212: "Frostbeam", 233: "Icicle" } },
  3: { className: "Flame Berserker", specIds: [312, 342], specNames: { 312: "Formless", 342: "Crimson Expertise" } },
  4: { className: "Wind Knight", specIds: [432, 433], specNames: { 432: "Skyward", 433: "Vanguard" } },
  5: { className: "Verdant Oracle", specIds: [510, 531], specNames: { 510: "Smite", 531: "Lifebind" } },
  9: { className: "Heavy Guardian", specIds: [930, 931], specNames: { 930: "Block", 931: "Earthfort" } },
  11: { className: "Marksman", specIds: [1126, 1129], specNames: { 1126: "Wildpack", 1129: "Falconry" } },
  12: { className: "Shield Knight", specIds: [1208, 1218], specNames: { 1208: "Recovery", 1218: "Shield" } },
  13: { className: "Beat Performer", specIds: [1308, 1317], specNames: { 1308: "Dissonance", 1317: "Concerto" } },
});

function collectLocalizedTextEntries(textId, localizationTables) {
  const id = Number(textId);
  if (!Number.isInteger(id) || !id) {
    return [];
  }
  const entries = [];
  for (const table of localizationTables || []) {
    const stringIndex = table.index?.get(id);
    if (stringIndex === undefined || stringIndex < 0 || stringIndex >= table.strings.length) {
      continue;
    }
    const text = String(table.strings[stringIndex] || "").replace(/\s+/g, " ").trim();
    if (text) {
      entries.push({ language: table.language, stringIndex, text });
    }
  }
  return entries;
}

function collectEffectRecordsFromField(table, rowOffset, fieldOffset, helpers) {
  const { buffIds, readU32, skillIds } = helpers;
  const intPool = table?.pools?.get(INT_POOL);
  if (!intPool) {
    return [];
  }
  const topOffset = readU32(table.data, rowOffset + fieldOffset);
  const topValues = readIntArrayFromPool(intPool, topOffset);
  if (!topValues.length) {
    return [];
  }
  const records = [];
  for (const recordOffset of topValues) {
    const rawValues = readIntArrayFromPool(intPool, recordOffset);
    if (!rawValues.length) {
      records.push({
        kind: "unknown-record-offset",
        fieldOffset,
        recordOffset,
      });
      continue;
    }
    const opcode = rawValues[0];
    if (opcode === 3) {
      const buffId = Number(rawValues[1]);
      records.push(stripEmpty({
        kind: "opcode-3-buff-record",
        opcode,
        fieldOffset,
        recordOffset,
        rawValues,
        buffId,
        value: rawValues[2],
        buffIdStatus: buffIds instanceof Set && buffIds.has(buffId) ? "known-buff-id" : "unresolved-buff-id",
      }));
      continue;
    }
    if (opcode === 6) {
      const firstSkillTableId = Number(rawValues[1]);
      const secondSkillTableId = Number(rawValues[2]);
      records.push(stripEmpty({
        kind: "opcode-6-skill-pair",
        opcode,
        fieldOffset,
        recordOffset,
        rawValues,
        firstSkillTableId,
        firstSkillTableIdStatus: skillIds instanceof Set && skillIds.has(firstSkillTableId) ? "known-skill-table-id" : "unresolved-skill-table-id",
        secondSkillTableId,
        secondSkillTableIdStatus: skillIds instanceof Set && skillIds.has(secondSkillTableId) ? "known-skill-table-id" : "unresolved-skill-table-id",
      }));
      continue;
    }
    records.push({
      kind: "unknown-opcode-record",
      opcode,
      fieldOffset,
      recordOffset,
      rawValues,
    });
  }
  return records;
}

function readIntArrayFromPool(pool, index) {
  if (!pool || index + 2 > pool.length) {
    return [];
  }
  const length = pool.readInt16LE(index);
  if (length <= 0 || length > 128 || index + 2 + length * 4 > pool.length) {
    return [];
  }
  const out = [];
  for (let i = 0; i < length; i += 1) {
    out.push(pool.readInt32LE(index + 2 + i * 4));
  }
  return out;
}

function preferredName(row) {
  return String(row?.Names?.en || row?.Name || row?.NameDesign || row?.name || "").trim();
}

function objectValues(value) {
  return Array.isArray(value) ? value : Object.values(value || {});
}

function compareByNameThenId(left, right) {
  return String(left.name || "").localeCompare(String(right.name || "")) || Number(left.id || left.Id) - Number(right.id || right.Id);
}

function uniqueNumbers(values) {
  return [...new Set((values || []).map(Number).filter((value) => Number.isFinite(value)))]
    .sort((left, right) => left - right);
}

function uniqueStrings(values) {
  return [...new Set((values || []).map((value) => String(value || "").trim()).filter(Boolean))]
    .sort((left, right) => left.localeCompare(right));
}

function stripEmpty(value) {
  if (Array.isArray(value)) {
    return value.map(stripEmpty).filter((entry) => entry !== undefined);
  }
  if (!value || typeof value !== "object") {
    return value;
  }
  const out = {};
  for (const [key, entry] of Object.entries(value)) {
    const cleaned = stripEmpty(entry);
    if (cleaned === undefined || cleaned === null || cleaned === "") {
      continue;
    }
    if (Array.isArray(cleaned) && !cleaned.length) {
      continue;
    }
    if (typeof cleaned === "object" && !Array.isArray(cleaned) && !Object.keys(cleaned).length) {
      continue;
    }
    out[key] = cleaned;
  }
  return out;
}

module.exports = {
  BUFF_DESCRIPTION_REFERENCE_TABLE_HASH,
  CLASS_BUCKETS,
  INT_POOL,
  STRING_POOL,
  TALENT_PASSIVE_TABLE_HASH,
  collectEffectRecordsFromField,
  collectLocalizedTextEntries,
  compareByNameThenId,
  objectValues,
  preferredName,
  readIntArrayFromPool,
  stripEmpty,
  uniqueNumbers,
  uniqueStrings,
};

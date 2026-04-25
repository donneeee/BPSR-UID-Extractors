import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const staticDir = path.join(__dirname, "public");
const outputDir = path.join(rootDir, "output");
const maxLogBytes = 4 * 1024 * 1024;

const scripts = [
  {
    id: "generate-all",
    fileName: "GenerateAll.gen",
    label: "Generate All",
    description: "Runs all generator scripts in dependency order.",
    outputFile: null,
  },
  {
    id: "itemnames",
    fileName: "ItemNames.gen",
    label: "Item Names",
    description: "Builds item id, localized name, and icon metadata.",
    outputFile: "itemnames.json",
  },
  {
    id: "buffnames",
    fileName: "BuffNames.gen",
    label: "Buff Names",
    description: "Builds buff ids, localized names, secondary bridges, and icons.",
    outputFile: "BuffName.json",
  },
  {
    id: "damage-attr",
    fileName: "DamageAttrIdName.gen",
    label: "Damage Attributes",
    description: "Builds damage attribute labels, linked rows, and icon bridges.",
    outputFile: "DamageAttrIdName.json",
  },
  {
    id: "recount-table",
    fileName: "RecountTable.gen",
    label: "Recount Table",
    description: "Builds recount group labels and packed damage id lists.",
    outputFile: "RecountTable.json",
  },
  {
    id: "skill-breakdown",
    fileName: "SkillBreakdownDetails.gen",
    label: "Skill Breakdown Details",
    description: "Classifies runtime damage rows from generated game bridges.",
    outputFile: "SkillBreakdownDetails.json",
  },
  {
    id: "aoyi-icons",
    fileName: "SkillAoyiIcons.gen",
    label: "Imagine Icons",
    description: "Builds summon skill icon bridges from Aoyi game tables.",
    outputFile: "skill_aoyi_icons.json",
  },
  {
    id: "monster-names",
    fileName: "MonsterNames.gen",
    label: "Monster Names",
    description: "Builds monster id names from game tables and localization bytes.",
    outputFile: "monsternames.json",
  },
  {
    id: "scene-names",
    fileName: "SceneNames.gen",
    label: "Scene Names",
    description: "Builds scene id names from game tables and localization bytes.",
    outputFile: "scenenames.json",
  },
  {
    id: "skill-names",
    fileName: "SkillNames.gen",
    label: "Skill Names",
    description: "Builds skill ids from direct skill, effect, fight-level, and TempAttr bridges.",
    outputFile: "skillnames.json",
  },
  {
    id: "extract-icons",
    fileName: "ExtractIcons.gen",
    label: "Extract Icon Manifests",
    description: "Resolves icon references to game texture and sprite-atlas assets.",
    outputFile: "icons/IconManifest.json",
  },
  {
    id: "export-icon-pngs",
    fileName: "ExportIconPngs.gen",
    label: "Export Icon PNGs",
    description: "Exports resolved icon assets to PNG files under output/icons.",
    outputFile: "icons/IconManifest.json",
  },
  {
    id: "probe-sources",
    fileName: "ProbeSources.gen",
    label: "Probe Sources",
    description: "Audits optional external samples without using them as generated data.",
    outputFile: "probing-reports/ProbeSourcesReport.json",
  },
];

const outputFiles = [
  "BuffName.json",
  "DamageAttrIdName.json",
  "itemnames.json",
  "monsternames.json",
  "RecountTable.json",
  "scenenames.json",
  "skill_aoyi_icons.json",
  "SkillBreakdownDetails.json",
  "skillnames.json",
  "icons/IconManifest.json",
  "probing-reports/ProbeSourcesReport.json",
];

const scriptById = new Map(scripts.map((script) => [script.id, script]));

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body),
  });
  res.end(body);
}

function sendText(res, status, text) {
  res.writeHead(status, { "content-type": "text/plain; charset=utf-8" });
  res.end(text);
}

async function readJsonFile(filePath) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch {
    return null;
  }
}

async function readRequestJson(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function countEntries(value) {
  if (Array.isArray(value)) {
    return value.length;
  }

  if (value && typeof value === "object") {
    if (Array.isArray(value.entries)) {
      return value.entries.length;
    }

    if (Array.isArray(value.icons)) {
      return value.icons.length;
    }

    if (value.files && typeof value.files === "object") {
      return Object.keys(value.files).length;
    }

    return Object.keys(value).length;
  }

  return null;
}

async function fileInfo(filePath) {
  try {
    const info = await stat(filePath);
    return {
      exists: true,
      sizeBytes: info.size,
      modifiedMs: info.mtimeMs,
    };
  } catch {
    return {
      exists: false,
      sizeBytes: null,
      modifiedMs: null,
    };
  }
}

async function scriptInfo(script) {
  const info = await fileInfo(path.join(rootDir, script.fileName));
  return {
    ...script,
    ...info,
  };
}

async function outputInfo(fileName) {
  const filePath = path.join(outputDir, fileName);
  const info = await fileInfo(filePath);
  const parsed = info.exists ? await readJsonFile(filePath) : null;
  return {
    fileName,
    ...info,
    entryCount: parsed === null ? null : countEntries(parsed),
  };
}

async function gamePathStatus() {
  const publicConfig = await readJsonFile(path.join(rootDir, "gamepath.json"));
  const localConfig = await readJsonFile(path.join(rootDir, "gamepath.local.json"));
  return {
    configured: localConfig?.gamePath ?? publicConfig?.gamePath ?? null,
    publicConfigExists: publicConfig !== null,
    localConfigExists: localConfig !== null,
    source: localConfig ? "gamepath.local.json" : publicConfig ? "gamepath.json" : null,
  };
}

async function iconFolderCount() {
  try {
    const entries = await readdir(path.join(outputDir, "icons"), { withFileTypes: true });
    return entries.filter((entry) => entry.isDirectory()).length;
  } catch {
    return 0;
  }
}

async function dashboard() {
  const scriptInfos = await Promise.all(scripts.map(scriptInfo));
  const outputInfos = await Promise.all(outputFiles.map(outputInfo));
  return {
    rootDir,
    outputDir,
    readmePath: path.join(rootDir, "README.md"),
    gamePath: await gamePathStatus(),
    iconGroups: await iconFolderCount(),
    scripts: scriptInfos,
    outputs: outputInfos,
  };
}

function runScript(script, dryRun) {
  return new Promise((resolve) => {
    const started = Date.now();
    const args = [path.join(rootDir, script.fileName)];
    if (dryRun) {
      args.push("--dry-run");
    }

    const child = spawn(process.execPath, args, {
      cwd: rootDir,
      windowsHide: true,
      shell: false,
    });

    let stdout = "";
    let stderr = "";
    let trimmed = false;

    function appendLog(kind, chunk) {
      const text = chunk.toString("utf8");
      if (kind === "stdout") {
        stdout += text;
        if (stdout.length > maxLogBytes) {
          stdout = stdout.slice(stdout.length - maxLogBytes);
          trimmed = true;
        }
      } else {
        stderr += text;
        if (stderr.length > maxLogBytes) {
          stderr = stderr.slice(stderr.length - maxLogBytes);
          trimmed = true;
        }
      }
    }

    child.stdout.on("data", (chunk) => appendLog("stdout", chunk));
    child.stderr.on("data", (chunk) => appendLog("stderr", chunk));

    child.on("error", (error) => {
      resolve({
        scriptId: script.id,
        fileName: script.fileName,
        dryRun,
        success: false,
        exitCode: null,
        stdout,
        stderr: `${stderr}${stderr ? "\n" : ""}${error.message}`,
        durationMs: Date.now() - started,
        trimmed,
      });
    });

    child.on("close", (code) => {
      resolve({
        scriptId: script.id,
        fileName: script.fileName,
        dryRun,
        success: code === 0,
        exitCode: code,
        stdout,
        stderr,
        durationMs: Date.now() - started,
        trimmed,
      });
    });
  });
}

async function serveStatic(req, res) {
  const requestUrl = new URL(req.url ?? "/", "http://localhost");
  const routePath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = path.resolve(staticDir, routePath.slice(1));
  const relativePath = path.relative(staticDir, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType =
      ext === ".html"
        ? "text/html; charset=utf-8"
        : ext === ".css"
          ? "text/css; charset=utf-8"
          : ext === ".js"
            ? "text/javascript; charset=utf-8"
            : "application/octet-stream";

    res.writeHead(200, { "content-type": contentType });
    res.end(content);
  } catch {
    sendText(res, 404, "Not found");
  }
}

async function handleApi(req, res) {
  const requestUrl = new URL(req.url ?? "/", "http://localhost");

  try {
    if (req.method === "GET" && requestUrl.pathname === "/api/dashboard") {
      sendJson(res, 200, await dashboard());
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/run") {
      const body = await readRequestJson(req);
      const script = scriptById.get(String(body.scriptId ?? ""));
      if (!script) {
        sendJson(res, 400, { error: "Unknown script id" });
        return;
      }

      const info = await fileInfo(path.join(rootDir, script.fileName));
      if (!info.exists) {
        sendJson(res, 404, { error: `${script.fileName} does not exist` });
        return;
      }

      sendJson(res, 200, await runScript(script, Boolean(body.dryRun)));
      return;
    }

    sendJson(res, 404, { error: "Unknown API route" });
  } catch (error) {
    sendJson(res, 500, { error: error instanceof Error ? error.message : String(error) });
  }
}

const server = createServer((req, res) => {
  const requestUrl = new URL(req.url ?? "/", "http://localhost");
  if (requestUrl.pathname.startsWith("/api/")) {
    void handleApi(req, res);
    return;
  }

  void serveStatic(req, res);
});

const port = Number(process.env.PORT || 8735);
server.listen(port, "127.0.0.1", () => {
  console.log(`BPSR UID Extractors UI: http://127.0.0.1:${port}/`);
});

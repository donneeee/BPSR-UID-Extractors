const state = {
  dashboard: null,
  runningScriptId: null,
};

const elements = {
  gamePath: document.querySelector("#game-path"),
  gamePathSource: document.querySelector("#game-path-source"),
  outputCount: document.querySelector("#output-count"),
  iconGroups: document.querySelector("#icon-groups"),
  refresh: document.querySelector("#refresh"),
  dryRunAll: document.querySelector("#dry-run-all"),
  runAll: document.querySelector("#run-all"),
  scriptList: document.querySelector("#script-list"),
  outputList: document.querySelector("#output-list"),
  runStatus: document.querySelector("#run-status"),
  runLog: document.querySelector("#run-log"),
  clearLog: document.querySelector("#clear-log"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatBytes(value) {
  if (typeof value !== "number") {
    return "Missing";
  }

  if (value < 1024) {
    return `${value} B`;
  }

  const units = ["KB", "MB", "GB"];
  let size = value / 1024;
  let unit = units[0];

  for (let index = 1; index < units.length && size >= 1024; index += 1) {
    size /= 1024;
    unit = units[index];
  }

  return `${size.toFixed(size >= 10 ? 1 : 2)} ${unit}`;
}

function formatDate(ms) {
  if (typeof ms !== "number") {
    return "Not generated";
  }

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(ms));
}

function formatCount(value) {
  if (typeof value !== "number") {
    return "Unknown";
  }

  return value.toLocaleString();
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "content-type": "application/json" },
    ...options,
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error || `Request failed: ${response.status}`);
  }

  return payload;
}

async function loadDashboard() {
  state.dashboard = await api("/api/dashboard");
  render();
}

function setControlsEnabled(enabled) {
  for (const button of document.querySelectorAll("button")) {
    button.disabled = !enabled;
  }
}

function writeLog(result) {
  const title = `${result.fileName} ${result.dryRun ? "(dry run)" : ""}`;
  const status = result.success ? "completed" : "failed";
  const duration = `${(result.durationMs / 1000).toFixed(2)}s`;
  const lines = [`${title} ${status} in ${duration}`];

  if (result.trimmed) {
    lines.push("Log was trimmed to the most recent output.");
  }

  if (result.stdout) {
    lines.push("", "[stdout]", result.stdout.trimEnd());
  }

  if (result.stderr) {
    lines.push("", "[stderr]", result.stderr.trimEnd());
  }

  elements.runLog.textContent = lines.join("\n");
  elements.runStatus.textContent = status === "completed" ? `Last run completed: ${title}` : `Last run failed: ${title}`;
}

async function runScript(scriptId, dryRun) {
  state.runningScriptId = scriptId;
  elements.runStatus.textContent = dryRun ? "Running dry run" : "Running generator";
  render();
  setControlsEnabled(false);

  try {
    const result = await api("/api/run", {
      method: "POST",
      body: JSON.stringify({ scriptId, dryRun }),
    });
    writeLog(result);
    await loadDashboard();
  } catch (error) {
    elements.runStatus.textContent = "Run failed";
    elements.runLog.textContent = error instanceof Error ? error.message : String(error);
  } finally {
    state.runningScriptId = null;
    setControlsEnabled(true);
    render();
  }
}

function renderSummary() {
  const dashboard = state.dashboard;
  if (!dashboard) {
    return;
  }

  elements.gamePath.textContent = dashboard.gamePath.configured || "Not configured";
  elements.gamePathSource.textContent = dashboard.gamePath.source
    ? `from ${dashboard.gamePath.source}`
    : "gamepath.json not found";

  const existingOutputs = dashboard.outputs.filter((output) => output.exists).length;
  elements.outputCount.textContent = `${existingOutputs}/${dashboard.outputs.length}`;
  elements.iconGroups.textContent = String(dashboard.iconGroups);
}

function renderScripts() {
  const dashboard = state.dashboard;
  if (!dashboard) {
    elements.scriptList.innerHTML = `<p class="empty-state">Loading generators</p>`;
    return;
  }

  elements.scriptList.innerHTML = dashboard.scripts
    .map((script) => {
      const output = script.outputFile
        ? dashboard.outputs.find((entry) => entry.fileName === script.outputFile)
        : null;
      const isRunning = state.runningScriptId === script.id;
      const statusClass = script.exists ? "status-ok" : "status-missing";
      const statusText = script.exists ? "Ready" : "Missing";
      const outputText = output
        ? `${formatCount(output.entryCount)} entries, ${formatBytes(output.sizeBytes)}`
        : "Multiple outputs";

      return `
        <article class="script-row">
          <div class="script-main">
            <div class="script-title-line">
              <h3>${escapeHtml(script.label)}</h3>
              <span class="status ${statusClass}">${statusText}</span>
            </div>
            <p>${escapeHtml(script.description)}</p>
            <div class="script-meta">
              <span>${escapeHtml(script.fileName)}</span>
              <span>${escapeHtml(outputText)}</span>
            </div>
          </div>
          <div class="script-actions">
            <button class="button compact secondary" type="button" data-run="${escapeHtml(script.id)}" data-dry-run="true" ${script.exists && !isRunning ? "" : "disabled"}>
              Dry Run
            </button>
            <button class="button compact primary" type="button" data-run="${escapeHtml(script.id)}" data-dry-run="false" ${script.exists && !isRunning ? "" : "disabled"}>
              Run
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  for (const button of elements.scriptList.querySelectorAll("[data-run]")) {
    button.addEventListener("click", () => {
      void runScript(button.dataset.run, button.dataset.dryRun === "true");
    });
  }
}

function renderOutputs() {
  const dashboard = state.dashboard;
  if (!dashboard) {
    elements.outputList.innerHTML = `<p class="empty-state">Loading outputs</p>`;
    return;
  }

  elements.outputList.innerHTML = dashboard.outputs
    .map((output) => {
      const statusClass = output.exists ? "status-ok" : "status-missing";
      const statusText = output.exists ? "Generated" : "Missing";
      return `
        <article class="output-row">
          <div>
            <h3>${escapeHtml(output.fileName)}</h3>
            <p>${formatCount(output.entryCount)} entries</p>
          </div>
          <div class="output-meta">
            <span class="status ${statusClass}">${statusText}</span>
            <span>${formatBytes(output.sizeBytes)}</span>
            <span>${formatDate(output.modifiedMs)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  renderSummary();
  renderScripts();
  renderOutputs();
}

elements.refresh.addEventListener("click", () => {
  void loadDashboard();
});

elements.dryRunAll.addEventListener("click", () => {
  void runScript("generate-all", true);
});

elements.runAll.addEventListener("click", () => {
  void runScript("generate-all", false);
});

elements.clearLog.addEventListener("click", () => {
  elements.runLog.textContent = "";
  elements.runStatus.textContent = "Idle";
});

void loadDashboard().catch((error) => {
  elements.runStatus.textContent = "Failed to load dashboard";
  elements.runLog.textContent = error instanceof Error ? error.message : String(error);
});

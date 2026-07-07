const DATA_SHEET_NAME = "CMA_Data";
const BACKUP_SHEET_NAME = "CMA_Backups";
const CHUNK_SIZE = 45000;
const MAX_BACKUPS = 10;

function doGet(e) {
  const action = e.parameter.action || "";
  const callback = e.parameter.callback || "callback";

  if (action === "load") {
    try {
      const sheet = dataSheet_();
      const raw = readPayload_(sheet);
      const data = raw ? JSON.parse(raw) : null;
      return jsonp_(callback, { ok: true, data });
    } catch (error) {
      return jsonp_(callback, { ok: false, error: String(error) });
    }
  }

  return jsonp_(callback, { ok: true, message: "CMA Planner cloud sync is ready." });
}

function doPost(e) {
  try {
    const payload = e.parameter.payload || "";
    if (!payload) throw new Error("No planner data received.");

    JSON.parse(payload);
    const sheet = dataSheet_();
    backupCurrentPayload_(sheet);
    writePayload_(sheet, payload);
    sheet.getRange("A2").setValue(new Date());
    sheet.getRange("B2").setValue("Last saved");
    sheet.getRange("B3").setValue(payload.length);
    sheet.getRange("A3").setValue("Payload characters");

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function backupSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(BACKUP_SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(BACKUP_SHEET_NAME);
    sheet.getRange(1, 1, 1, 4).setValues([["Backup timestamp", "Chunk number", "Chunk text", "Payload characters"]]);
    sheet.getRange("A1:D1").setFontWeight("bold");
  }
  return sheet;
}

function backupCurrentPayload_(dataSheet) {
  const previousPayload = readPayload_(dataSheet);
  if (!previousPayload) return;
  const backupSheet = backupSheet_();
  const stamp = new Date();
  const rows = [];
  for (let index = 0; index < previousPayload.length; index += CHUNK_SIZE) {
    rows.push([stamp, rows.length + 1, previousPayload.slice(index, index + CHUNK_SIZE), previousPayload.length]);
  }
  if (rows.length) {
    backupSheet.getRange(backupSheet.getLastRow() + 1, 1, rows.length, 4).setValues(rows);
  }
  pruneBackups_(backupSheet);
}

function pruneBackups_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return;
  const values = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
  const stamps = [];
  values.forEach((value) => {
    const stamp = value instanceof Date ? value.getTime() : new Date(value).getTime();
    if (stamp && !stamps.includes(stamp)) stamps.push(stamp);
  });
  stamps.sort((a, b) => b - a);
  const keep = new Set(stamps.slice(0, MAX_BACKUPS));
  for (let row = lastRow; row >= 2; row -= 1) {
    const value = sheet.getRange(row, 1).getValue();
    const stamp = value instanceof Date ? value.getTime() : new Date(value).getTime();
    if (!keep.has(stamp)) sheet.deleteRow(row);
  }
}

function dataSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(DATA_SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(DATA_SHEET_NAME);
    sheet.getRange("A1").setNote("CMA Planner full software data. Do not edit manually.");
    sheet.getRange("A2").setValue("");
    sheet.getRange("B2").setValue("Last saved");
  }
  return sheet;
}

function writePayload_(sheet, payload) {
  const chunks = [];
  for (let index = 0; index < payload.length; index += CHUNK_SIZE) {
    chunks.push([payload.slice(index, index + CHUNK_SIZE)]);
  }
  sheet.getRange("A1").setValue("");
  sheet.getRange("D:E").clearContent();
  if (chunks.length) {
    sheet.getRange(1, 4, chunks.length, 1).setValues(chunks);
  }
  sheet.getRange("E1").setValue("Chunked planner data - do not edit");
  sheet.getRange("E2").setValue(chunks.length);
  sheet.getRange("E3").setValue("Chunks");
}

function readPayload_(sheet) {
  const chunkCount = Number(sheet.getRange("E2").getValue() || 0);
  if (chunkCount > 0) {
    return sheet.getRange(1, 4, chunkCount, 1).getValues().map((row) => row[0] || "").join("");
  }
  return sheet.getRange("A1").getValue();
}

function jsonp_(callback, value) {
  const safeCallback = String(callback).replace(/[^\w.$]/g, "");
  return ContentService
    .createTextOutput(`${safeCallback}(${JSON.stringify(value)});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

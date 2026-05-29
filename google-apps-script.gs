const DATA_SHEET_NAME = "CMA_Data";
const CHUNK_SIZE = 45000;

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

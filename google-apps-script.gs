const DATA_SHEET_NAME = "CMA_Data";

function doGet(e) {
  const action = e.parameter.action || "";
  const callback = e.parameter.callback || "callback";

  if (action === "load") {
    try {
      const sheet = dataSheet_();
      const raw = sheet.getRange("A1").getValue();
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
    sheet.getRange("A1").setValue(payload);
    sheet.getRange("A2").setValue(new Date());
    sheet.getRange("B2").setValue("Last saved");

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

function jsonp_(callback, value) {
  const safeCallback = String(callback).replace(/[^\w.$]/g, "");
  return ContentService
    .createTextOutput(`${safeCallback}(${JSON.stringify(value)});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function doPost(e) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheets()[0];
  var data = JSON.parse(e.postData.contents);

  if (!data.name || !data.email || !data.message) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: 'Missing required fields' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date', 'Name', 'Email', 'Message']);
  }

  sheet.appendRow([new Date(), data.name, data.email, data.message]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "First Name",
      "Last Name",
      "Email",
      "Country Code",
      "Phone",
      "Want To",
      "Investment",
      "Timeframe",
      "Project Details",
    ]);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date().toLocaleString(),
    data.firstName,
    data.lastName,
    data.email,
    data.countryCode,
    data.phone,
    data.wantTo,
    data.investment,
    data.timeframe,
    data.projectDetails,
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ result: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}

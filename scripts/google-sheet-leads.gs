/**
 * OPTIONAL: log every website lead as a row in a Google Sheet (free).
 *
 * Setup (about 5 minutes):
 *  1. Create a Google Sheet, e.g. "ContexQ website leads".
 *  2. Extensions > Apps Script. Delete the sample code and paste this whole file.
 *  3. Change SECRET below to a long random text, and put the same text in
 *     LEADS_SHEET_SECRET (.env.local and Netlify).
 *  4. Deploy > New deployment > type "Web app":
 *       Execute as: Me    Who has access: Anyone
 *     Authorise, then copy the Web app URL into LEADS_SHEET_WEBHOOK_URL.
 *
 * The site's server (src/lib/leads/deliver.ts) posts { secret, record } here.
 * New columns are added automatically when a lead has a field the sheet has not seen.
 */
const SECRET = 'CHANGE_ME_TO_A_LONG_RANDOM_TEXT';

function doPost(e) {
  const body = JSON.parse(e.postData.contents || '{}');
  if (body.secret !== SECRET) {
    return ContentService.createTextOutput('forbidden');
  }
  const record = body.record || {};
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  let headers = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
  Object.keys(record).forEach(function (key) {
    if (headers.indexOf(key) === -1) {
      headers.push(key);
      sheet.getRange(1, headers.length).setValue(key).setFontWeight('bold');
    }
  });

  sheet.appendRow(headers.map(function (h) { return record[h] || ''; }));
  return ContentService.createTextOutput('ok');
}

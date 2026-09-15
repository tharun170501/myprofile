# Contact form storage

1. Create a Google Sheet for contact submissions.
2. Open `Extensions > Apps Script` in that sheet.
3. Paste the contents of `google-apps-script.gs` and save the project.
4. Select `Deploy > New deployment`, choose `Web app`, and set `Execute as` to yourself and `Who has access` to anyone.
5. Deploy, copy the web app URL, and replace `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` in `script.js` with that URL.
6. Submit the contact form once. The script creates the headers and appends each submission to the first sheet.
const asyncHandler = require('express-async-handler')
const { google } = require("googleapis");

async function authSheets() {
    //Function for authentication object
    const auth = new google.auth.GoogleAuth({
      keyFile: "dependable-glow-393407-e85e00432d91.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  
    //Create client instance for auth
    const authClient = await auth.getClient();
  
    //Instance of the Sheets API
    const sheets = google.sheets({ version: "v4", auth: authClient });
  
    return {
      auth,
      authClient,
      sheets,
    };
  }

const storeData = asyncHandler(async(req, res) => {

    console.log(req.body)
    const { sheets } = await authSheets();
    await sheets.spreadsheets.values.append({
        spreadsheetId: "1ugH15d_nKV4NmXPN7wS9K9MNF3E9AFktGPGCMbBCabE",
        range: "Sheet1",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[req.body.name, req.body.phone]],
        },
      });
    res.status(200).send({"name": "john"})
})

module.exports = { storeData }
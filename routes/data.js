const express = require('express')
const router = express.Router()
const { google } = require("googleapis");
const { storeData } = require('../controllers/storeData')

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

router.route('/').post(storeData)

module.exports = router
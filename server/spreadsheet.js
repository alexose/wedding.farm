var GoogleSpreadsheets = require('google-spreadsheets');
var google = require('googleapis');
var fs = require('fs');

var path = './access.json';

var config = require('./config.js');
var oauth2Client = new google.auth.OAuth2(config.client_id, config.client_secret, config.redirect_url);

var data;
var index = {};

// Try to read tokens from disk
var tokens;
try {
  tokens = fs.readFileSync(path);
  json = JSON.parse(tokens);
  proceed(null, json);
} catch(e){

  // No tokens yet! Time to auth.
  getAccessToken(oauth2Client, function(){
    proceed(oauth2Client); 
  });
}

function getAccessToken(oauth2Client, callback){

  var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // will return a refresh token
    scope: 'https://www.googleapis.com/auth/drive' // can be a space-delimited string or an array of scopes
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function(code){

    // request access token
    oauth2Client.getToken(code, proceed); 
  });
}

// save access token to disk
function saveAccessTokens(tokens){
  fs.writeFileSync(path, JSON.stringify(tokens));
}

function proceed(err, tokens){
    
  console.log('Fetching spreadsheet...');

  saveAccessTokens(tokens);

  // set tokens to the client
  oauth2Client.setCredentials(tokens);

  // read some sheets
  // TODO: if this fails, re-authenticate?
  GoogleSpreadsheets({ key: config.key, auth: oauth2Client }, parse);

  function parse(err, spreadsheet){
    spreadsheet.worksheets[0].rows({}, function(err, rows){

      // via https://github.com/samcday/node-google-spreadsheets/issues/29
      rows.forEach(function(row) {
        delete row.id;
        delete row.content;
        for(var k in row) {
          if( typeof row[k] === 'object') {
            row[k] = '';
          }
        }
      });

      console.log('Got spreadsheet! Indexing by code.');
      rows.forEach(function(d){
        index[d.code] = d;
      });
      data = rows; 
    });
  }
}

module.exports = {
  get: function(id){ return index[id]; } 
};

var Spreadsheet = require('edit-google-spreadsheet');
var google = require('googleapis');
var fs = require('fs');

var path = './access.json';

var config = require('./config.js');
var oauth2Client = new google.auth.OAuth2(config.client_id, config.client_secret, config.redirect_url);

var data;
var index = {};
var resultsSheet;

// Try to read tokens from disk
var tokens;

function start(){
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
}

start();

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

  loadSource(tokens);
  loadSink(tokens);
}

function loadSource(tokens){

  Spreadsheet.load({
    debug:         true,
    spreadsheetId: config.key,
    worksheetName: 'Invite List',
    oauth2: {
      client_id:     config.client_id,
      client_secret: config.client_secret,
      refresh_token: tokens.refresh_token
    }
  }, function sheetReady(err, spreadsheet){

    spreadsheet.receive({ getValues : true }, function(err, rows, info) {
      if(err){
        throw err;
      }

      var columns = rows['1'];
 
      // Index by ID 
      for (var row in rows){

        var data = rows[row],
            obj = {};

        // Map names
        for (var i in columns){
          var name = columns[i];
          obj[name] = data[i];
        }

        var key = obj.Code;

        if (key){
          index[key] = obj;
        }
      } 
    }); 
  });
}

function loadSink(tokens){

  Spreadsheet.load({
    debug:         true,
    spreadsheetId: config.key,
    worksheetName: 'Results',
    oauth2: {
      client_id:     config.client_id,
      client_secret: config.client_secret,
      refresh_token: tokens.refresh_token
    }
  }, function sheetReady(err, spreadsheet){
    resultsSheet = spreadsheet;
  });
}

// via http://stackoverflow.com/questions/5416920/timestamp-to-human-readable-format
function getFormattedDate() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec;

    return str;
}

var map = {
  name:     '1',
  email:    '2',
  or:       '3',
  hi:       '4',
  diet:     '5',
  question: '6',
  answer:   '7',
  fancy:    '8',
  code:     '9'
};

module.exports = {
  refresh: function(){
    start();
  },
  get: function(id){
    if (id){
      return index[id];
    } else {
      return index;
    }
  },
  save: function(id, json, cb){

    // First, read the number of rows
    resultsSheet.receive(function(err, rows, info){

      // Save em
      json.people.forEach(function(d,i){

        var obj = {};

        for (var prop in d){
          var num = map[prop];
          obj[num] = d[prop]; 
        }

        obj['9'] = id;
        obj['10'] = getFormattedDate(); 

        var wrap = {};
        wrap[info.nextRow + i] = obj;
        resultsSheet.add(wrap);
      });


      resultsSheet.send(function(err){
        console.log(err); 
      });

      cb();
    });
  }
};

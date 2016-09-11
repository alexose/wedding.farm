var express = require('express');
var app = express();
var config = require('./config.js');
var spreadsheet = require('./spreadsheet.js');

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var client = nodemailer.createTransport(sgTransport(config.transport));

var prettyjson = require('prettyjson');
var compression = require('compression');

app.use(compression());
app.use(express.static('../client'));
app.use('/attire', express.static('../client'));
app.use('/activities', express.static('../client'));
app.use('/accomodations', express.static('../client'));
app.use('/registry', express.static('../client'));
app.use('/rsvp', express.static('../client'));
app.use('/rsvp/:id', express.static('../client'));

app.get('/api/invitation/:id', function (req, res){
  var id = req.params.id;
  var row = spreadsheet.get(id);
  res.send(row);
});

app.delete('/api/invitation/:id', function (req, res){
  var id = req.params.id;
  var row = spreadsheet.remove(id, function(result){
    res.send(result);
  });
});

app.post('/api/invitation/:id', function (req, res){
  var id = req.params.id;
  var str = '';
  req.on("data",function(chunk){
    str += chunk.toString();
  });
  req.on("end",function(){

    var json;
    try {
      json = JSON.parse(str);
      spreadsheet.save(id, json, function(){
        res.send('All done');
        notify(json);
      });
    } catch(e){
      res.send('Something didn\'t work.');
      console.log(e);
    }
  });
});

app.get('/api/search/:id', function (req, res){
  var id = request.params.id;
  res.send('Hello World!');
});

app.get('/api/registry/', function (req, res){
  var registry = JSON.stringify(spreadsheet.getRegistry());
  res.send(registry);
});

app.listen(3301, function(){});

function notify(json){

  var names = json.people.map(function(d){
    return d.name;
  });

  var text = prettyjson.render(json, { noColor : true });

  var settings = {
    from:    'Wedding.farm',
    to:      'wedding@alexose.com',
    subject: 'RSVP from ' + names.join(', '),
    text:    text 
  };

  client.sendMail(settings, function(error, response){
    if (error){
      console.log('Could not send alert: ' + error.toString());
    } else {
      console.log('Alert sent: ' + response.message);
    }
  });
}

var express = require('express');
var app = express();
var config = require('./config.js');
var spreadsheet = require('./spreadsheet.js');

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var client = nodemailer.createTransport(sgTransport(config.transport));

app.use(express.static('../client'));
app.use('/attire', express.static('../client'));
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
      console.log(str);
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

app.listen(3301, function(){
});

function notify(json){

  var names = json.people.map(function(d){
    return d.name;
  });

  var settings = {
    from:    'Wedding.farm',
    to:      'wedding@alexose.com',
    subject: 'RSVP from ' + names.join(', '),
    text:    JSON.stringify(json, null, 2)
  };

  client.sendMail(settings, function(error, response){
    if (error){
      console.log('Could not send alert: ' + error.toString());
    } else {
      console.log('Alert sent: ' + response.message);
    }
  });
}

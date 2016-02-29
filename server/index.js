var express = require('express');
var app = express();
var config = require('./config.js');
var spreadsheet = require('./spreadsheet.js');

app.use(express.static('../client'));
app.use('/clothes', express.static('../client'));
app.use('/rsvp', express.static('../client'));
app.use('/rsvp/:id', express.static('../client'));

app.get('/api/invitation/:id', function (req, res){
  var id = req.params.id;
  var row = spreadsheet.get(id);
  res.send(row);
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

app.listen(3000, function(){
});

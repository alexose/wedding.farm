var express = require('express');
var app = express();
var config = require('./config.js');
var spreadsheet = require('./spreadsheet.js');

app.use(express.static('../client'));
app.use('/clothes', express.static('../client'));
app.use('/rsvp', express.static('../client'));
app.use('/rsvp/:id', express.static('../client'));

app.get('/api/fetch/:id', function (req, res){
  var id = req.params.id;
  var row = spreadsheet.get(id);
  res.send(row);
});

app.get('/api/search/:id', function (req, res){
  var id = request.params.id;
  res.send('Hello World!');
});

app.listen(3000, function(){
});

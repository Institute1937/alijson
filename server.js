var express = require('express'),
path = require('path'),
app = express(),
port = process.env.PORT || 1337;

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '/dist/index.html'));
});
app.get('/assets/stuff.json', function(req, res) {
  res.sendFile(path.join( __dirname, '/assets/', 'stuff.json'));
});
app.listen(port);

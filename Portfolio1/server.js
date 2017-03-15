var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config')
var port = config.port;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}));

app.listen(port, function() {
  console.log('Connected on port', port)
});

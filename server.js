var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, './bower_components')));
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js'); // lines
routes_setter(app) // invokes the exported routes

app.listen(8000, function() {
  console.log("listening on port 8000");
})
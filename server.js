//Modules
var express = require('express');
//var bodyParser = require('body-parser');
//var multer  = require('multer');
//var fs = require("fs");

var app = express();

var options = {
  index: "index.htm"
};

app.use('/', express.static('../AngularJS', options));

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('my app is listening at http://%s:%s', host, port);
});

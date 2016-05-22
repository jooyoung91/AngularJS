//Modules
var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var fs = require("fs");
var connect = require('connect');

var app = connect();
app.use(serveStatic("../AngularJS"));
app.listen(8080);

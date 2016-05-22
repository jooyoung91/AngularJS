//Modules
var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var fs = require("fs");
var connect = require('connect');

//var app = express();

connect.creteServer(connect.static("../angularjs")).listen(5000);

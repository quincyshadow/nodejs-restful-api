require('dotenv').config(); //process.env.KEY is now accessible

var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;

var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var index = require('./index');
app.use('/', index);
app.use('/users', UserController);

module.exports = app;
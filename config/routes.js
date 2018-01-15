var express = require("express");
var controllers = require('../controllers/controllers.js');
var app = express();

app.get('/', pageRender); 
app.get('/privacy', privacyRender); 

module.exports = app;
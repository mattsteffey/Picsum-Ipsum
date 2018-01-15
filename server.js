'use strict'
var express = require('express');
var app     = express();
var bodyparser = require('body-parser');
var mongo = require('mongodb');
var http = require ('http');         
var mongoose = require ("mongoose"); 
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/HelloMongoose';
    var theport = process.env.PORT || 5000;

//controller
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

function pageRender(req, res){
	res.sendFile(__dirname + '/views/index.html'); //Renders the viewable ((index.html))
}

function privacyRender(req, res){
	res.sendFile(__dirname + '/views/privacypolicy.htm'); //Renders the viewable ((privacypolicy.htm))
}

//route
app.get('/', pageRender); 
app.get('/privacy', privacyRender); 

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});




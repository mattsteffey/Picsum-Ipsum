var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

function pageRender(req, res){
	res.sendFile(__dirname + '/views/index.html'); //Renders the viewable ((index.html))
}

function privacyRender(req, res){
	res.sendFile(__dirname + '/views/privacypolicy.htm'); //Renders the viewable ((privacypolicy.htm))
}

//route
app.get('/', pageRender); 
app.get('/privacy', privacyRender); 

module.exports = router;
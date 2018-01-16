
'use strict'
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var bodyparser = require('body-parser');
var mongo = require('mongodb');

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

function googleRender(req, res){
	res.sendFile(__dirname + '/views/google481d0b70bbb509c5.html'); //GOOGLE AUTH
	//403699942499-shndkteujoaf66ikpkc51to9vojs90jn.apps.googleusercontent.com
}




//route
app.get('/', pageRender); 
app.get('/privacy', privacyRender); 
app.get('/google481d0b70bbb509c5.html', googleRender);

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});
  //
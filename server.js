'use strict'
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var bodyparser = require('body-parser');

//controller
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public')); //Sends the public folder ((style.css + app.js))

function pageRender(req, res){
	res.sendFile(__dirname + '/views/index.html'); //Renders the viewable ((index.html))
}

function privacyRender(req, res){
	res.sendFile(__dirname + '/views/privacypolicy.htm'); //Renders the viewable ((privacypolicy.htm))
}

// function saveRender(req, res){
// 	console.log(req.body); 
// }

//route
app.get('/', pageRender); 
app.get('/privacy', privacyRender); 
// app.post('/api/save', saveRender);

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});




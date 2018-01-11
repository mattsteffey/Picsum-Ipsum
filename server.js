'use strict'
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;


//controller

function pageRender(req, res){
	app.use(express.static(__dirname + '/views')); //Sends the ((style.css + index.html))
	res.sendFile(__dirname + '/views/index.html'); //Renders the viewable ((index.html))
	app.use(express.static(__dirname + 'app.js')); //Sends the ((style.css + index.html))
}

//route
app.get('/', pageRender); 


// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});



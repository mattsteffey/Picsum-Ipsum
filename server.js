'use strict'
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;


//controller

function htmlViewer(req, res){
	app.use(express.static(__dirname + '/views'));
	res.sendFile(__dirname + '/views/index.html');
}

//route
app.get('/', htmlViewer); 


// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});



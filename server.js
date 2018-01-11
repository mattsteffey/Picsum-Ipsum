'use strict'
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;


//controller
function pageViewer(req, res){
	res.sendFile(__dirname + '/views/index.html');
}

//route
app.get('/', pageViewer); 





















// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});



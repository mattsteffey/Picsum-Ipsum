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



// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});




// EXPRESS
var express = require('express');
var app = express();
//BODYPARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//DB
var db = require('./models');
//MONGOOSE
var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
app.listen(process.env.PORT || 3000);




//ROUTES
app.get('/', function(req, res){
	res.send('Hello Worldo!');
});

//SERVER

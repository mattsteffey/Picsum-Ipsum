var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//Heroku Connection







app.get('/', function(req, res){
	res.send('Hello World!');
});







mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
app.listen(process.env.PORT || 3000);















app.listen(3000);
console.log('running on port 3000...');
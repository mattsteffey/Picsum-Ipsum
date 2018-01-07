var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/infinity', { useMongoClient: true });
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Hello World!');
});






















app.listen(3000);
console.log('running on port 3000...');
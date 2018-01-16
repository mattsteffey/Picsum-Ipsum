var express = require("express");
var router = express.Router();
var userControllers = require('../controllers/controllers.js');
var app = express();

app.route('/')
 .get(userControllers.pageRender)
	
app.route('/privacy')
 .get(userControllers.privacyRender)

app.route('/api/savedfavorites')
 .post(userControllers.saveFavorite)

module.exports = app;
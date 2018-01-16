var express = require("express");
var route = express.Router();
var userControllers = require('../controllers/controllers.js');
var app = express();

app.route('/', pageRender)
 .get(userControllers.pageRender)
	
app.route('/privacy')
 .get(userControllers.privacyRender)

app.route('/api/savedfavorites')
 .post(userControllers.saveFavorite)

module.exports = app;
var express = require('express');
var db = require('../models');

function pageRender(req, res){
	res.sendFile('/views/index.html'); //Renders the viewable ((index.html))
}

function privacyRender(req, res){
	res.sendFile(__dirname + '/views/privacypolicy.htm'); //Renders the viewable ((privacypolicy.htm))
}

//define controller ex. saveFavorite
function saveFavorite(req, res) {
  db.Favorite.create(req.body,function(err, favorite){
    if(err){return console.log('there has been an error', err);}
    res.json(favorite);
  });
}


module.exports = {
	pageRender:pageRender, 
	privacyRender:privacyRender,
	saveFavorite:saveFavorite,
};


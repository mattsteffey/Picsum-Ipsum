var express = require('express');
var db = require('../models');


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




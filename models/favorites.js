var mongoose = require('mongoose');

var FavoritesSchema = new mongoose.Schema({
  	word: String,
 	ipsum: String, 
});

mongoose.model('Favorite', FavoritesSchema); 

module.exports = Favorite;
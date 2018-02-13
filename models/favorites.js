var mongoose = require('mongoose');

var FavoritesSchema = new mongoose.Schema({
	token: String,  
	word: String,
});

module.exports = mongoose.model('Favorite', FavoritesSchema); 
module.exports = Favorites;
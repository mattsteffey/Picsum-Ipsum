var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  	user: String,
});

mongoose.model('User', UsersSchema); 

module.exports = User;
var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  	token: String,
});

mongoose.model('User', UsersSchema); 

module.exports = User;
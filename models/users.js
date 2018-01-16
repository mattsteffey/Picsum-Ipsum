var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
  	token: String,
});
 

module.exports = mongoose.model('User', UsersSchema); 
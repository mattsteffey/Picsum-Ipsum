const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testMongoose');

var userSchema = new mongoose.Schema({
	token: {type:String, required:true},
	word: String,
	ipsum: String
});

//makes the model + collection
var user = mongoose.model("User", userSchema);
user.create({ 	token: "4578345934593", 
				
});

module.exports = user;




//word: "dog",
// ipsum: "kennel puppy leash collar"

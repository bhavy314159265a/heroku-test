const mongoose = require("./connection");

var Schema = mongoose.Schema;



var userSchema = new Schema({
    question: String,
    answer: String,
    username: String
});


var User = mongoose.model("questions", userSchema);
// var adminLogin = mongoose.model("User");

//     adminLogin.find({}, function(err, data){
//         console.log(">>>> " + data );
//     });



module.exports = User;
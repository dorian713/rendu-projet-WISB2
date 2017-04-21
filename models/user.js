var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    email: String,
    firstname: String,
    lastname: String,
    password: String
});
var User = mongoose.model('User', userSchema);
module.exports = User;

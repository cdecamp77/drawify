var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String,
    }, 
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String
    }
});

module.exports = mongoose.model('User', userSchema);
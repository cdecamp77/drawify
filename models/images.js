var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema ({
    id: Number,
    attachment: String
}, {
    timestamps: true
});

var userSchema = new Schema ({
    id: Number,
    email: String,
    password: String,
    passwordDigest: String,
    image: String
});

module.exports = mongoose.model('Images', imageSchema);
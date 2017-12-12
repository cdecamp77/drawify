var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema ({
    id: Number,
    attachment: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Images', imageSchema);
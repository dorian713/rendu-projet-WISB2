var mongoose = require('mongoose');
var fileSchema = mongoose.Schema({
    name: String,
    url: String,
    type: String
});
var file = mongoose.model('File', fileSchema);
module.exports = file;

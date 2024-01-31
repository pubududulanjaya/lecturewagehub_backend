var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    DegreeName: {
        type: String,
        required: true
    },
    BatchNo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('batch', userSchema);

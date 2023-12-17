var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    LecturerName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    TotalPayments: {
        type: String,
        required: true
    },
   
   
});

module.exports = mongoose.model('payment', userSchema);
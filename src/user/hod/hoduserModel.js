var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    HodName: {
        type: String,
        required: true
    },
    Faculty: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    UserType: {
        type: String,
        required: 'HOD'
    },
   
});

module.exports = mongoose.model('hoduser', userSchema);
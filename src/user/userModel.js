var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    Co_Name: {
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
        required: 'coordinator'
    },
   
});

module.exports = mongoose.model('user', userSchema);
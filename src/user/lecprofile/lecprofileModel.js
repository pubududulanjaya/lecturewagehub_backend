var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    LecturerName: {
        type: String,
        required: true
    },
    MonthlyPayment: {
        type: String,
        required: true
    },
    RatePerHour: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    TotalHours: {
        type: String,
        required: true
    },
    totalNetAmountPaid: {
        type: String,
        required: true
    },
    selectedMonth: {
        type: String,
        required: true
    },
    selectedYear: {
        type: String,
        required: true
    },
   
});

module.exports = mongoose.model('lecprofile', userSchema);
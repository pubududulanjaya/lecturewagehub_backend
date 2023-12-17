var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    lecturerId:{
        type: String,
        required: true  
    },

    LecturerName: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    MobileNumber: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },

    AddressLine1: {
        type: String,
        required: true
    },
    AddressLine2: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    SalaryType: {
        type: String,
        required: true
    },
    MonthlyPayment: {
        type: String,
        required: function () {
            return this.SalaryType === 'monthly';
        }
    },
   
    RatePerHour: {
        type: String,
        required: function () {
            return this.SalaryType === 'hourly';
        }
    },
    AccountName
     : {
        type: String,
        required: true
    },
   
    AccountNumber
     : {
        type: String,
        required: true
    },
   
    BankName
     : {
        type: String,
        required: true
    },
   
    bankCode
     : {
        type: String,
        required: true
    },
    BranchName
    : {
       type: String,
       required: true
   },
   BranchCode
   : {
      type: String,
      required: true
  },

});

// Define a virtual property to determine whether MonthlyPayment or RatePerHour should be null
userSchema.virtual('isHourlySalary').get(function () {
    return this.SalaryType === 'hourly';
});

userSchema.virtual('isMonthlySalary').get(function () {
    return this.SalaryType === 'monthly';
});

// Ensure virtuals are included in JSON output
userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('lectureDetails', userSchema);
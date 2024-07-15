const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    timeInterval: {
        type: String,
        required: true
    },
    LecturerName: {
        type: String,
        required: true
    },
    module: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    RatePerHour:{
        type:String,
        required:true
    
    },

    pay_status:{
        type:String,
        required:true
    
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;

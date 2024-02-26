var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
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
    timeInterval:{
        type:String,
        required:true
    },
    lecturer: {
        type: String,
        required: true
    },
    module: {
        type: String,
        required: true
    },
    Department:{
        type: String,
          required: true
      }
    
});

module.exports = mongoose.model('Timetable', userSchema);
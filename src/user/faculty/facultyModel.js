const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
  FacultyName: {
    type: String,
    required: true
  },
  DepartmentName: [{ type: String }] // Change to an array of strings for multiple departments
});

module.exports = mongoose.model('Faculty', facultySchema);

const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    ModuleName: { type: String, required: true },
    ModuleCode: { type: String, required: true },
    LecturerName: { type: String, required: true },
    Hours: { type: Number, required: true },
    Department: {
        type: String,
        required: true
    }
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;

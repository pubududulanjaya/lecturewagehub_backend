const timetableModel = require('./timetableModel');

exports.createTimetableForLecturer = async (timetableDetails) => {
    try {
        const timetableModelData = new timetableModel(timetableDetails);
        await timetableModelData.save();
        return true;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

exports.getTimetableDataByLecturerName = async (lecturerName) => {
    try {
        return await timetableModel.find({ LecturerName: lecturerName }).exec();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

exports.getDataFromDBService = async () => {
    try {
        return await timetableModel.find({}).exec();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

exports.updateUserDBService = async (id, timetableDetails) => {
    try {
        return await timetableModel.findByIdAndUpdate(id, timetableDetails, { new: true });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

exports.removeUserDBService = async (id) => {
    try {
        return await timetableModel.findByIdAndDelete(id);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

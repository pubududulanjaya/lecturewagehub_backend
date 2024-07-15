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
exports.updateTimetableService = async (_id, timetableDetails) => {
    try {
        const updatedTimetable = await timetableModel.findByIdAndUpdate(_id, timetableDetails, { new: true }).exec();
        return updatedTimetable;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

exports.deleteTimetableService = async (_id) => {
    try {
        const deletedTimetable = await timetableModel.findByIdAndDelete(_id).exec();
        return deletedTimetable;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

exports.calculateSalaryAndHours = (timetables) => {
    let totalSalary = 0;
    let totalHours = 0;

    timetables.forEach(timetable => {
        const startTime = new Date(timetable.start_time);
        const endTime = new Date(timetable.end_time);
        const hoursWorked = (endTime - startTime) / (1000 * 60 * 60);

        const salary = hoursWorked * parseInt(timetable.RatePerHour);

        totalSalary += salary;
        totalHours += hoursWorked;

        timetable.salary = salary;
        timetable.hoursWorked = hoursWorked;
    });

    return { totalSalary, totalHours };
};

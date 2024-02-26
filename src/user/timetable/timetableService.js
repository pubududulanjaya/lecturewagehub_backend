var timetableModel = require('./timetableModel');

module.exports.getDataFromDBService = () => {
    return timetableModel.find({}).exec();
}

module.exports.createUserDBService = (timetableDetails) => {
    return new Promise((resolve, reject) => {
        var timetableModelData = new timetableModel(timetableDetails);

        timetableModelData.save()
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.updateUserDBService = (id, timetableDetails) => {
    return new Promise((resolve, reject) => {
        timetableModel.findByIdAndUpdate(id, timetableDetails, { new: true })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.removeUserDBService = (id) => {
    return new Promise((resolve, reject) => {
        timetableModel.findByIdAndDelete(id)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
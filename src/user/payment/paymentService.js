var userModel = require('./paymentModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
}
module.exports.getPaymentsByLecturerNameService = (LecturerName) => {
    return userModel.find({ LecturerName }).exec();
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();

        userModelData.LecturerName = userDetails.LecturerName;
        userModelData.Description = userDetails.Description;
        userModelData.TotalPayments = userDetails.TotalPayments;

        userModelData.save()
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();

        userModelData.LecturerName = userDetails.LecturerName;
        userModelData.Description = userDetails.Description;
        userModelData.TotalPayments = userDetails.TotalPayments;

        userModelData.save()
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails, { new: true }) // { new: true } returns the updated document
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

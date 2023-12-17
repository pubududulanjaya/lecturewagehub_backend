var userModel = require('./batchModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();

        userModelData.DegreeName = userDetails.DegreeName;
        userModelData.BatchNo = userDetails.BatchNo;

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

        userModelData.DegreeName = userDetails.DegreeName;
        userModelData.BatchNo = userDetails.BatchNo;

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

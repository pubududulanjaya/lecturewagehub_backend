const ModuleModel = require('./moduleModel');

module.exports.getDataFromDBService = () => {
    return ModuleModel.find({}).exec();
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise((resolve, reject) => {
        const moduleData = new ModuleModel(userDetails);

        moduleData.save()
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.updateUserDBService = (id, userDetails) => {
    return new Promise((resolve, reject) => {
        ModuleModel.findByIdAndUpdate(id, userDetails, { new: true })
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
        ModuleModel.findByIdAndDelete(id)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

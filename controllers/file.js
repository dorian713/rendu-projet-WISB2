var fs = require('fs');
var multer = require('multer');
var file = require('../models/file.js');
var fileController = {
    findAll: function (callback) {
        file.find({}, function (error, file) {
            callback(200, file);
        });
    },

    findByName: function (request, callback) {
        var fileName = request.params.name;
        file.find({
            name: Name
        }, function (error, file) {
            callback(200, file);
        });
    },
    create: function (request, callback) {
        console.log(request.file);
        var fileData = {
            url: request.file.path,
            name: request.file.originalname,
            type: request.file.mimetype
        };
        file.create(fileData, function (error, fileDoc) {
            callback(200, fileDoc);
        });
    },

    delete: function (request, callback) {
        var fileData = request.params.id;
        file.findById(fileData, function (error, fileFound) {
            const fs = require('fs');
            var rootFolder = __dirname.split('controllers')[0];
            fs.unlink(rootFolder + "/" + fileFound.url, function (error) {
                //58fa0ad41cb8b73e1e29b9db
                if (error) {
                    throw error;
                } else {
                    console.log('successfully deleted /tmp/hello');
                    file.remove({
                        _id: fileData
                    }, function (error, fileDeleted) {
                        console.log(error);
                        if (error) {
                            callback(403, error)
                        } else {
                            callback(200, fileDeleted)
                        }
                    });
                }
            });

        });
    },


    /*delete: function (request, callback) {
        var fileUrl = request.params.url;
        file.remove({
            url: fileUrl
        }, function (error, file) {
            callback(200, file);
        });
    },
    
    //*/
    update: function (request, callback) {
        var fileUpdate = request.body;
        file.findByIdAndUpdate(fileUpdate._id, fileUpdate, function (error, fileUpdated) {
            callback(200, fileUpdated);
        });
    }
}
module.exports = fileController;

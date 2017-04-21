var User = require('../models/user.js');
var UserController = {
    findAll: function (callback) {
        User.find({}, function (error, users) {
            callback(200, users);
        });
    },

    findByUsername: function (request, callback) {
        var userName = request.params.username;
        User.find({
            username: userName
        }, function (error, users) {
            callback(200, users);
        });
    },
    create: function (request, callback) {
        var user = request.body;
        User.create(user, function (error, user) {
            callback(200, user);
        });
    },
    delete: function (request, callback) {
        var userId = request.params.id;
        User.remove({
            _id: userId
        }, function (error, user) {
            callback(200, user);
        });
    },
    update: function (request, callback) {
        var userUpdate = request.body;
        User.findByIdAndUpdate(userUpdate._id, userUpdate, function (error, userUpdated) {
            callback(200, userUpdated);
        });
    }

}
module.exports = UserController;

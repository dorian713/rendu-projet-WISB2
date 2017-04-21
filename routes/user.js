var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
})
var userController = require('../controllers/user.js');

/* GET users listing. */
router.get('/', function (request, response) {
    userController.findAll(function (status, json) {
        response.status(status).json(json);
    })
});
router.get('/:username', function (request, response) {
    userController.findByUsername(request, function (status, json) {
        response.status(status).json(json);
    });
});
router.post('/', function (request, response) {
    userController.create(request, function (status, json) {
        response.status(status).json(json);
    });
});
router.delete('/:id', function (request, response) {
    userController.delete(request, function (status, json) {
        response.status(status).json(json);
    });
});
router.put('/', function (request, response) {
    userController.update(request, function (status, json) {
        response.status(status).json(json);
    });
});

module.exports = router;

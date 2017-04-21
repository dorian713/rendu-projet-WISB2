var express = require('express');
var router = express.Router();
var multer = require('multer');
var uploads = multer({
    dest: 'uploads/'
})
var fileController = require('../controllers/file.js');


/* GET users listing. */
router.get('/', function (request, response) {
    fileController.findAll(function (status, json) {
        response.status(status).json(json);
    })
});
router.get('/:username', function (request, response) {
    fileController.findByUsername(request, function (status, json) {
        response.status(status).json(json);
    });
});
router.post('/', uploads.single('image'), function (request, response) {
    console.log(request.file)
    fileController.create(request, function (status, json) {
        response.status(status).json(json);
    });
});
router.delete('/:id', function (request, response) {
    fileController.delete(request, function (status, json) {
        response.status(status).json(json);
    });
});
router.put('/', function (request, response) {
    fileController.update(request, function (status, json) {
        response.status(status).json(json);
    });
});
module.exports = router;

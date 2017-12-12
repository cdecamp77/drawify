var Image = require('../models/images');

function create(req, res) {
    Image.create(req.body)
    .then(image => {
        res.json(image);
    })
    .catch(err => {
        res.json({error: err});
    });
}

function createdImages(req, res) {
    Image.find({})
    .then(images => {
        res.json(images);
    });
}

module.exports = {
    create,
    createdImages
}
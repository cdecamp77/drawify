var express = require('express');
var router = express.Router();
var galleryCtrl = require('../controllers/images');

router.post('/gallery', galleryCtrl.create);

router.get('/gallery', galleryCtrl.createdImages);
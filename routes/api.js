var express = require('express');
var router = express.Router();
var galleryCtrl = require('../controllers/gallery');

router.post('/images', galleryCtrl.create);

router.get('/gallery', galleryCtrl.gallery);
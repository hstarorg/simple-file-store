const express = require('express');
const router = new express.Router();
const routeBiz = require('./../bizs/routeBiz');

router.get('/', (req, res, next) => {
  res.send('Simple file store');
});

router.post('/upload/:filename?', routeBiz.preUpload, routeBiz.upload, routeBiz.postUpload);

router.get('/:store/:filepath', routeBiz.getFileName, routeBiz.ensureFileExists, routeBiz.processImage, routeBiz.sendFile);

router.get('/:aliasName', routeBiz.getFileName, routeBiz.ensureFileExists, routeBiz.processImage, routeBiz.sendFile);

module.exports = router;
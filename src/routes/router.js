const express = require('express');
const router = new express.Router();
const routeBiz = require('./../bizs/routeBiz');

router.get('/', (req, res, next) => {
  res.send('Simple file store');
});

router.post('/upload', routeBiz.doUpload);

router.get('/:store/:filepath', routeBiz.getFile);

module.exports = router;
const express = require('express');
const router = express.Router();
const ctrlFiles = require('../controllers/files');

/* GET домашнюю страницу */

router.get('/', ctrlFiles.index);

module.exports = router;

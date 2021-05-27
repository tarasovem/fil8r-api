const express = require('express');
const router = express.Router();
const ctrlFiles = require('../controllers/files');

/* GET домашнюю страницу */
router.get('/', ctrlFiles.index);

/* POST отправить файл из формы */
router.post('/uploadfile', ctrlFiles.uploadFormFile, ctrlFiles.fileCreate);

module.exports = router;

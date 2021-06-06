const express = require('express');
const router = express.Router();
const ctrlFiles = require('../controllers/files');
const multer = require('multer');
const upload = multer({dest: 'uploads'});

router.post('/file', upload.single('foo'), ctrlFiles.createFile);
router.get('/file', ctrlFiles.getFilesList);


module.exports = router;

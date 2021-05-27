const express = require('express');
const multer = require('multer');
const rootDir = require('path').resolve('./');


const index = (req, res) => {
  res.sendFile(rootDir + '/index.html');
}

const storage = multer.diskStorage({
  destination: (req, res, cd) => {
    cd(null, 'uploads')
  },
  filename: (req, file, cd) => {
    cd(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({storage: storage});

const uploadFormFile = upload.single('uploadedFile');

const fileCreate = (req, res, next) => {
  const file = req.file;

  if(!file) {
    const error = new Error('Пожалуйста, выберите файл!')
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send(file);
}

module.exports = {
  index,
  uploadFormFile,
  fileCreate
};

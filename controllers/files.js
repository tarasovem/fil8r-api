const mongodb = require('../models/db');
const db = mongodb.getDB();

// Создать запись о файле и сохранить в файловом хранилище
const createFile = (req, res) => {

  const file = req.file;

  if(!file) {
    const error = new Error('Пожалуйста, выберите файл!')
    error.httpStatusCode = 400;
    return next(error);
  }

  const newFile = {
    name: file.originalname,
    size: file.size,
    creationDate: new Date
  }

  db.collection('files').insertOne(newFile);

  res.send(newFile);
};

module.exports = {
  createFile
};

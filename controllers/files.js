const mongodb = require('../models/db');
const db = mongodb.getDB();

// Создать новую запись о файле
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

// Получить записи о файле
const getFilesList = async (req, res) => {

  const files = db.collection('files');
  const searchCursor = await files.find({isDeleted: {$ne: true}});
  const result = await searchCursor.toArray();

  res.send(result);
};

module.exports = {
  createFile,
  getFilesList
};

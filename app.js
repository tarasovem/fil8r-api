const express = require('express');
const bodyParser  = require('body-parser');
const multer = require('multer');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

/* Инициализируем БД */

const MongoClient = require('mongodb').MongoClient;
ObjectId = require('mongodb').ObjectId;

const myurl = 'mongodb://localhost:27017';

/* Создаем хранилище */

const storage = multer.diskStorage({
  destination: (req, res, cd) => {
    cd(null, 'uploads')
  },
  filename: (req, file, cd) => {
    cd(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({storage: storage});

MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err);

  const db = client.db('files');
  app.listen(3000, () => {
    console.log('Слушаем 3000 порт');
  });

});

/* Маршруты */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/uploadfile', upload.single('uploadedFile'), (req, res, next) => {
  const file = req.file;

  if(!file) {
    const error = new Error('Пожалуйста, выберите файл!')
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send(file);
});

app.listen('3300', () => {
  console.log('Сервер запущен на порту 3300...')
});

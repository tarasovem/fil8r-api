const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const fileRouter = require('./routes/index');

/* Инициализируем БД */
const MongoClient = require('mongodb').MongoClient;
ObjectId = require('mongodb').ObjectId;

const myurl = 'mongodb://localhost:27017';

MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err);

  const db = client.db('files');
  app.listen(3000, () => {
    console.log('Слушаем 3000 порт');
  });

});

/* Маршруты */
app.use('/', fileRouter);

/* Слушаем порт */
app.listen('3300', () => {
  console.log('Сервер запущен на порту 3300...')
});

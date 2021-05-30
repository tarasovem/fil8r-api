require('dotenv').config();
const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const fileRouter = require('./routes/index');


/* Маршруты */
app.use('/api', fileRouter);

/* Слушаем порт */
app.listen(process.env.PORT, () => {
  console.log(`Сервер запущен на порту ${process.env.PORT}...`);
  console.log(`http://localhost:${process.env.PORT}`);
});

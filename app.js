require('dotenv').config();
const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const mongodb = require('./models/db');

mongodb.connectToServer(function ( err ) {
  const apiRouter = require('./routes/index');

  app.use('/api', apiRouter);

  app.use(function(req, res, next) {
    next(createError(404));
  });

  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });
})

/* Маршруты */

/* Слушаем порт */
app.listen(process.env.PORT, () => {
  console.log(`Сервер запущен на порту ${process.env.PORT}...`);
  console.log(`http://localhost:${process.env.PORT}`);
});

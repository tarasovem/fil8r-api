const multer = require('multer');
const rootDir = require('path').resolve('./');

/* Отдаем домашняя страницу */
const index = (req, res) => {
  res.sendFile(rootDir + '/index.html');
}

/* Создаем хранилище */
const storage = multer.diskStorage({
  destination: (req, res, cd) => {
    cd(null, 'uploads')
  },
  filename: (req, file, cd) => {
    cd(null, file.fieldname + '-' + Date.now())
  }
});

/* Указываем Multer на хранилище  */
const upload = multer({storage: storage});

/* Загружаем один файл из формы */
const uploadFormFile = upload.single('uploadedFile');

/* Отвечаем клиенту какой файл получен */
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

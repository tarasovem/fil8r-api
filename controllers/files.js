// Создать запись о файле и сохранить в файловом хранилище
const fileCreate = (req, res) => {

  const file = req.file;

  if(!file) {
    const error = new Error('Пожалуйста, выберите файл!')
    error.httpStatusCode = 400;
    return next(error);
  }

  res.send(file);
};

module.exports = {
  fileCreate
};

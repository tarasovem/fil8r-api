const rootDir = require('path').resolve('./');

const index = (req, res) => {
  res.sendFile(rootDir + '/index.html');
}

module.exports = {
  index
};

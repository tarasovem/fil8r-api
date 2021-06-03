const { MongoClient } = require('mongodb');
const uri = process.env.DB_URI;
let _db;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, function (err, client) {
      _db = client.db('fil8r');
      return callback(err);
    });
  },
  getDB: function () {
    return _db;
  }
}

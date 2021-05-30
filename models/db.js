const { MongoClient } = require('mongodb');

const dbUri = 'mongodb://127.0.0.1:27017/fil8r';

const client = new MongoClient(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db('fil8r');
    global.fileCollection = database.collection('files');

    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://sagorranait:sagorranait@cluster0.pfvpn.mongodb.net/node-project?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let _db;

const mongoConnect = (callback) => {
  client.connect(error => {
    _db = client.db('node-project');
    callback();
    // 5console.error(error);
    // client.close();
  });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

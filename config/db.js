const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;

let db;

const connectDB = async () => {
  if (db) return db;
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();
  db = client.db();
  console.log("MongoDB (native driver) connected!");
  return db;
};

module.exports = connectDB;

const { MongoClient } = require("mongodb");

const uri = process.env.DB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true });
const usersDataCollection = client.db("users_data_db").collection("users_data");

async function run() {
  try {
    await client.connect();
    console.log("DataBase Connection Successful !!");
  } catch (err) {
    console.log("DataBase Connection Fail !!");
    throw err;
  }
}

run();

module.exports = { client, usersDataCollection };

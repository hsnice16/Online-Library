const { usersDataCollection } = require("./connect");

function getUserData(userId) {
  return usersDataCollection.findOne({ userId });
}

module.exports = getUserData;

const { usersDataCollection } = require("./connect");

function updateUserData(userId, note) {
  return usersDataCollection.updateOne(
    { userId },
    {
      $push: {
        notes: note,
      },
    }
  );
}

module.exports = updateUserData;

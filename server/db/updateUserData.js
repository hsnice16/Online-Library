const { usersDataCollection } = require("./connect");

function updateUserData(userId, book_detail) {
  return usersDataCollection.updateOne(
    { userId },
    {
      $push: {
        book_details: book_detail,
      },
    }
  );
}

module.exports = updateUserData;

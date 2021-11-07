const { usersDataCollection } = require("./connect");

function updateUserData(userId, book_detail) {
  return usersDataCollection.updateOne(
    { userId },
    {
      $push: {
        books_details: book_detail,
      },
    }
  );
}

module.exports = updateUserData;

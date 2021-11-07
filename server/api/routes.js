const router = require("express").Router();
const { usersDataCollection } = require("../db/connect");
const getUserData = require("../db/getUserData");
const updateUserData = require("../db/updateUserData");

router.get("/:id", async (req, res) => {
  try {
    let userData = await getUserData(req.params.id);

    if (userData === null) {
      return res.status(404).json({
        msg: `user with id ${req.params.id} has nothing in list`,
      });
    } else {
      return res.status(200).json(userData.book_details);
    }
  } catch (err) {
    return res.status(500).json({
      msg: "getUserData error",
      err,
    });
  }
});

router.post("/:id", async (req, res) => {
  if (req.body.title) {
    const book_detail = {
      title: req.body.title,
      date: Date(),
    };

    try {
      let userData = await getUserData(req.params.id);
      if (userData === null) {
        usersDataCollection.insertOne({
          userId: req.params.id,
          book_details: [book_detail],
        });
      } else {
        let exist = userData.book_details.some(
          (madeNote) => madeNote.title === book_detail.title
        );

        if (!exist) {
          try {
            await updateUserData(req.params.id, book_detail);
          } catch (err) {
            return res.status(500).json({
              msg: "updateUserData error",
              err,
            });
          }
        } else {
          return res.status(403).json({ msg: "already in list" });
        }
      }

      return res.status(200).json({ msg: "successfully added" });
    } catch (err) {
      return res.status(500).json({
        msg: "getUserData error",
        err,
      });
    }
  } else {
    return res.status(400).json({
      msg: "request body is not in correct format",
    });
  }
});

module.exports = router;

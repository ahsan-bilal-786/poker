var express = require("express");
var router = express.Router();
var { saveSession, getSession } = require("../controllers/poker");

/** Save Poker Session */
router.route("/").post(saveSession);

/** Fetch Poker Session with Polling */
/* GET users listing. */
router.route("/:id").get(getSession);

/** Poll To Poker Session */
router.post("/poll", function (req, res, next) {
  res.json({ content: "Poll To Poker Session." });
});

/** GET users listing. */
router.get("/poll", function (req, res, next) {
  res.json({ content: "GET users listing." });
});

module.exports = router;

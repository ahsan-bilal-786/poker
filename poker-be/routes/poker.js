var express = require("express");
var router = express.Router();
var {
  saveSession,
  getSession,
  savePoll,
  getPolls,
  getSessionTypes,
} = require("../controllers/poker");

/** Save Poker Session */
router.route("/").post(saveSession);

/** Save Poker Session */
router.route("/sessionTypes").get(getSessionTypes);

/** Fetch Poker Session with Polling */
/* GET users listing. */
router.route("/:id").get(getSession);

router.route("/:sessionId/poll").post(savePoll).get(getPolls);

module.exports = router;

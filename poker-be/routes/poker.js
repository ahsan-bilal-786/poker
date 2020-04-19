var express = require("express");
var router = express.Router();
var { saveSession, getSession, savePoll } = require("../controllers/poker");

/** Save Poker Session */
router.route("/").post(saveSession);

/** Fetch Poker Session with Polling */
/* GET users listing. */
router.route("/:id").get(getSession);

router.route("/:sessionId/poll").post(savePoll);

module.exports = router;

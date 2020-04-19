var express = require("express");
var router = express.Router();
var { saveSession, getSession } = require("../controllers/poker");

/** Save Poker Session */
router.route("/").post(saveSession);

/** Fetch Poker Session with Polling */
/* GET users listing. */
router.route("/:id").get(getSession);

module.exports = router;

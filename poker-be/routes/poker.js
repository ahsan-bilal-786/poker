var express = require("express");
var router = express.Router();
var { saveSession } = require("../controllers/poker");

/** Save Poker Session */
router.post("/", saveSession);

module.exports = router;

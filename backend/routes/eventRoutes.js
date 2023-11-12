const express = require("express");
const { addEvent } = require("../controllers/eventController");

const router = express.Router();

router.post("/create/:userId", addEvent);

module.exports = router;

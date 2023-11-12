const express = require("express");
const { addEvent, deleteEvent } = require("../controllers/eventController");

const router = express.Router();

router.post("/create", addEvent);
router.post("/delete", deleteEvent);

module.exports = router;

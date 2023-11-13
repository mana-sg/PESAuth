const express = require("express");
const {
  addEvent,
  deleteEvent,
  fetchEvents,
} = require("../controllers/eventController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/create").post(protect, addEvent);
router.route("/delete").post(protect, deleteEvent);
router.route("/fetch").get(protect, fetchEvents);

module.exports = router;

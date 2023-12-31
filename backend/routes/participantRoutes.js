const express = require("express");
const { addParticipant } = require("../controllers/participantcontroller");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", protect, addParticipant);

module.exports = router;

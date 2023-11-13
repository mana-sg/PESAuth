const express = require("express");
const {
  addParticipant,
  deleteParticipant,
} = require("../controllers/participantcontroller");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create/:participantId", addParticipant);
router.post("/delete", deleteParticipant);

module.exports = router;

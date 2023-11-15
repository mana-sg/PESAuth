const express = require("express");
const { addTeam, fetchTop5 } = require("../controllers/teamController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/add").post(protect, addTeam);
router.route("/fetch").post(protect, fetchTop5);

module.exports = router;

const express = require("express");
const { addScore } = require("../controllers/scoreController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/add").post(protect, addScore);

module.exports = router;

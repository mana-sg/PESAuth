const express = require("express");
const { addParticipant } = require("../controllers/participantcontroller");
const { protect } = require("../middlewares/authMiddleware");
const { addCoupons } = require("../controllers/couponsController");

const router = express.Router();

router.post("/addCoupon", protect, addCoupons);

module.exports = router;

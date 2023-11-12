const express = require("express");
const { addTeam, deleteTeam } = require("../controllers/teamController");

const router = express.Router();

router.post("/add", addTeam);
router.post("/remove", deleteTeam);

module.exports = router;

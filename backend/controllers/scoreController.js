const asyncHandler = require("express-async-handler");
const Team = require("../models/TeamModel");
const Scoring = require("../models/ScoringModel");

const isNumeric = (value) => {
  return /^\d+$/.test(value);
};

const addScore = asyncHandler(async (req, res) => {
  const { teamId, score, comment } = req.body;
  if (!teamId || !score || !comment) {
    res.status(400);
    throw new Error("Please fill all the details");
  }
  const teamExists = await Team.findById(teamId);
  if (!teamExists) {
    res.status(400);
    throw new Error("Please enter a valid team name");
  }
  if (!isNumeric(score)) {
    res.status(400);
    throw new Error("Please enter a number for score");
  }
  teamExists.score = `${parseInt(teamExists.score, 10) + parseInt(score, 10)}`;
  teamExists.save();
  const scoring = await Scoring.create({ teamId, score, comment });
  if (scoring) {
    res.status(201).json({
      teamId: scoring.teamId,
      score: scoring.score,
      comment: scoring.comment,
    });
  }
});

module.exports = { addScore };

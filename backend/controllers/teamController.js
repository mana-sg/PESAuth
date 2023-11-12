const asyncHandler = require("express-async-handler");
const Event = require("../models/EventModel");
const Team = require("../models/TeamModel");

const addTeam = asyncHandler(async (req, res) => {
  const { teamName, eventId } = req.body;
  if (!teamName || !eventId) {
    res.status(400);
    throw new Error("Please give the details required");
  }
  const teamExists = await Team.findOne({ teamName: teamName });
  if (teamExists && teamExists.eventId !== eventId) {
    res.status(400);
    throw new Error("Team name already used");
  }
  const event = await Event.findById(eventId);
  if (!event) {
    res.status(404);
    throw new Error("Event does not exist, please give valid event id");
  }
  const team = await Team.create({
    teamName: teamName,
    score: "0",
    eventId: eventId,
  });
  if (team) {
    res.status(201).json({
      _id: team._id,
      teamName: team.teamName,
      eventId: team.eventId,
    });
  }
});
const deleteTeam = asyncHandler(async (req, res) => {});

module.exports = { addTeam, deleteTeam };

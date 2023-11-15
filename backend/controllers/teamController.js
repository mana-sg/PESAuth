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
  if (teamExists && teamExists.eventId == eventId) {
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

const fetchTop5 = asyncHandler(async (req, res) => {
  const { eventId } = req.body;
  const event = await Event.findById(eventId);
  if (!event) {
    res.status(401);
    throw new Error("Event does not exist");
  }
  try {
    const teams = await Team.find({ eventId: eventId }).lean();
    const sortedTeams = teams
      .sort((a, b) => {
        return parseInt(b.score) - parseInt(a.score);
      })
      .slice(0, 5);
    res.status(201).json({ teams: sortedTeams });
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { addTeam, fetchTop5 };

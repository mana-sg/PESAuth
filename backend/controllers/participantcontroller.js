const asyncHandler = require("express-async-handler");
const Event = require("../models/EventModel");
const Team = require("../models/TeamModel");
const Participant = require("../models/ParticpantModel");

const addParticipant = asyncHandler(async (req, res) => {
  const { participant1, participant2, participant3, teamId, eventId } =
    req.body;

  if (!participant1 || !participant2 || !participant3 || !teamId || !eventId) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }
  const event = await Event.findById(eventId);
  const team = await Team.findById(teamId);
  const data = [
    {
      PRN: participant1,
      lunch: "false",
      goodies: "false",
      snacks: "false",
      teamId: teamId,
      eventId: eventId,
    },
    {
      PRN: participant2,
      lunch: "false",
      goodies: "false",
      snacks: "false",
      teamId: teamId,
      eventId: eventId,
    },
    {
      PRN: participant3,
      lunch: "false",
      goodies: "false",
      snacks: "false",
      teamId: teamId,
      eventId: eventId,
    },
  ];
  console.log(data);
  if (!event || !team) {
    res.status(401);
    throw new Error("Event or team does not exist");
  }

  const participants = await Participant.insertMany(data);
  res.status(201).json({ results: participants });
});

module.exports = { addParticipant };

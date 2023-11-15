const asyncHandler = require("express-async-handler");
const Event = require("../models/EventModel");
const Team = require("../models/TeamModel");
const Participant = require("../models/ParticpantModel");

const addCoupons = asyncHandler(async (req, res) => {
  const { teamName, selection, eventId } = req.body;
  if (!teamName || !selection) {
    res.status(401);
    throw new Error("Please enter all the fields!");
  }
  const event = await Event.findById(eventId);
  if (!event) {
    res.status(401);
    throw new Error("Event does not exist");
  }
  const team = await Team.findOne({ teamName: teamName, eventId: eventId });
  if (!team) {
    res.status(401);
    throw new Error("Please enter a valid team name");
  }
  const teamId = team._id;
  const particpants = await Participant.find({
    teamId: teamId,
    eventId: eventId,
  });
  if (!particpants) {
    res.status(500);
    throw new Error("Internal server error");
  }
  console.log(particpants);
  if (selection === "lunch") {
    if (particpants[0].lunch === "true") {
      res.status(401);
      throw new Error("Coupon already redeemed by the team");
    }
    particpants[0].lunch = "true";
    particpants[0].save();
    particpants[1].lunch = "true";
    particpants[1].save();
    particpants[2].lunch = "true";
    particpants[2].save();
  } else if (selection === "goodies") {
    if (particpants[0].goodies === "true") {
      res.status(401);
      throw new Error("Coupon already redeemed by the team");
    }
    particpants[0].goodies = "true";
    particpants[0].save();
    particpants[1].goodies = "true";
    particpants[1].save();
    particpants[2].goodies = "true";
    particpants[2].save();
  } else if (selection === "snacks") {
    if (particpants[0].snacks === "true") {
      res.status(401);
      throw new Error("Coupon already redeemed by the team");
    }
    particpants[0].snacks = "true";
    particpants[0].save();
    particpants[1].snacks = "true";
    particpants[1].save();
    particpants[2].snacks = "true";
    particpants[2].save();
  }
  res.status(201).json({ results: "success" });
});

module.exports = { addCoupons };

const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../config/generateToken");
const Event = require("../models/EventModel");

const addEvent = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { name, date } = req.body;
  if (!name || !date) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }
  const user = await User.findById(userId);
  if (!user) {
    res.status(404);
    throw new Error("User does not exist");
  }

  const event = await Event.create({ name, date, host: userId });
  if (event) {
    res.status(201).json({
      _id: event._id,
      name: event.name,
      date: event.date,
      host: event.host,
      token: generateToken(event._id),
    });
  } else {
    res.status(500);
    throw new Error("Failed to create event");
  }
});

module.exports = { addEvent };

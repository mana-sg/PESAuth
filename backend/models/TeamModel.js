const mongoose = require("mongoose");

const teamModel = mongoose.Schema(
  {
    teamName: { type: String, trim: true, required: true, unique: false },
    score: { type: String, trim: true, required: true, unique: false },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", teamModel);
module.exports = Team;

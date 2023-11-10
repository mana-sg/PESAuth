const mongoose = require("mongoose");

const teamModel = mongoose.Schema(
  {
    teamName: { type: String, trim: true, required: true },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Participant",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", teamModel);
module.exports = Team;

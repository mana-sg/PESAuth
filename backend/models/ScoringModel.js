const mongoose = require("mongoose");

const scoringSchema = mongoose.Schema(
  {
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      unique: false,
    },
    score: { type: String, required: true, unique: false },
    comment: { type: String, required: true, unique: false },
  },
  {
    timestamps: true,
  }
);
const Scoring = mongoose.model("Scoring", scoringSchema);
module.exports = Scoring;

const mongoose = require("mongoose");

const scoringSchema = mongoose.Schema(
  {
    teamName: { type: String, required: true },
    reviewMessage: { type: String, required: true },
    reviewScore: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Scoring = mongoose.model("User", scoringSchema);
module.exports = Scoring;

const mongoose = require("mongoose");

const participantSchema = mongoose.Schema(
  {
    PRN: { type: String, required: true, unique: false },
    lunch: { type: String, required: true, unique: false },
    goodies: { type: String, required: true, unique: false },
    snacks: { type: String, required: true, unique: false },
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
      unique: false,
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;

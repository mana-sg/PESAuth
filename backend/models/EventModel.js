const mongoose = require("mongoose");

const eventModel = mongoose.Schema(
  {
    eventName: { type: String, trim: true, required: true },
    date: { type: String },
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

const Event = mongoose.model("Event", eventModel);
module.exports = Event;

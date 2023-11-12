const mongoose = require("mongoose");

const eventModel = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true, unique: false },
    date: { type: String, trim: true, required: true, unique: false },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventModel);
module.exports = Event;

const mongoose = require("mongoose");

const eventModel = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true, unique: true },
    date: { type: String },
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventModel);
module.exports = Event;

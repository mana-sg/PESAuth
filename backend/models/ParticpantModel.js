const participantSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: false },
    SRN: { type: String, required: true, unique: true },
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

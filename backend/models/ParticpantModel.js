const participantSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    teamName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    SRN: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;

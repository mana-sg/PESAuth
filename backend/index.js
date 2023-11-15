const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const eventRoutes = require("./routes/eventRoutes");
const teamRoutes = require("./routes/teamRoutes");
const participantRoutes = require("./routes/participantRoutes");
const scoringRoutes = require("./routes/scoringRoutes");
const couponRoutes = require("./routes/couponRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/participant", participantRoutes);
app.use("/api/score", scoringRoutes);
app.use("/api/coupons", couponRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server has started on PORT ${PORT}`.yellow.bold));

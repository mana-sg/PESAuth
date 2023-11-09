const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server has started on PORT ${PORT}`.yellow.bold));

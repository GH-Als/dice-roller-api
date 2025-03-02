const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// CORS Configuration - TEMPORARILY allow all origins until frontend is deployed
const corsOptions = {
  origin: "*", // Temporary setting - update later with frontend URL
  methods: "GET",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Dice rolling API
app.get("/roll-dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.json({ diceRoll });
});

// API to test CORS failure (intentionally blocked)
app.get("/cors-failure", (req, res) => {
  res.header("Access-Control-Allow-Origin", "null"); // This will cause a CORS error
  res.status(403).json({ error: "CORS not allowed" });
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Dice Roller API! Use /roll-dice to roll.");
});

// Start server
app.listen(PORT, () => {
  console.log(`🎲 Dice Roller API1 is running on port ${PORT}`);
});
//

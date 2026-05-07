const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  ip: String,
  attempts: Number,
  timeGap: Number,
  failures: Number,
  riskScore: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Log", logSchema);
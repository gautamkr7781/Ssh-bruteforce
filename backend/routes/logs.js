const express = require("express");
const router = express.Router();
const Log = require("../models/log");
const { calculateRisk, classify } = require("../utils/riskEngine");

module.exports = (io) => {

  router.post("/generate", async (req, res) => {
    const { ip, attempts, timeGap, failures } = req.body;

    const risk = calculateRisk(attempts, timeGap, failures);
    const status = classify(risk);

    const log = await Log.create({
      ip,
      attempts,
      timeGap,
      failures,
      riskScore: risk,
      status
    });

    io.emit("newLog", log);

    res.json(log);
  });

  router.get("/", async (req, res) => {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.json(logs);
  });

  return router;
};
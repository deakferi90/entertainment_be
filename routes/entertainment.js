const express = require("express");
const router = express.Router();
const Entertainment = require("../models/Entertainment");

router.get("/", async (req, res) => {
  try {
    const items = await Entertainment.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;

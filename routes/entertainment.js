import express from "express";
const router = express.Router();
import Entertainment from "../models/Entertainment.js";

router.get("/", async (req, res) => {
  try {
    const items = await Entertainment.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;

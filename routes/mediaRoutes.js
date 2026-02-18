import { Router } from "express";
import Media from "../models/Media.js";

const router = Router();

// GET all media
router.get("/", async (req, res) => {
  const data = await Media.find();
  res.json(data);
});

// GET trending
router.get("/trending", async (req, res) => {
  const data = await Media.find({ isTrending: true });
  res.json(data);
});

// GET bookmarked
router.get("/bookmarked", async (req, res) => {
  const data = await Media.find({ isBookmarked: true });
  res.json(data);
});

// TOGGLE bookmark
router.patch("/:id/bookmark", async (req, res) => {
  const item = await Media.findById(req.params.id);
  item.isBookmarked = !item.isBookmarked;
  await item.save();
  res.json(item);
});

// CREATE media
router.post("/", async (req, res) => {
  const item = await Media.create(req.body);
  res.json(item);
});

export default router;

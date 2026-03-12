import express from "express";
import * as entertainmentController from "../controllers/entertainmentController.js";

const router = express.Router();

router.get("/", entertainmentController.getAll);
router.get("/trending", entertainmentController.getTrending);
router.get("/movies", entertainmentController.getMovies);
router.get("/tv", entertainmentController.getTVSeries);
router.get("/bookmarks", entertainmentController.getBookmarks);
router.get("/search", entertainmentController.search);

export default router;

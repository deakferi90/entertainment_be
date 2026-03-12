import Entertainment from "../models/Entertainment.js";

export const getAll = async (req, res) => {
  try {
    const data = await Entertainment.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTrending = async (req, res) => {
  try {
    const data = await Entertainment.find({ isTrending: true });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const data = await Entertainment.find({ category: "Movie" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTVSeries = async (req, res) => {
  try {
    const data = await Entertainment.find({ category: "TV Series" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookmarks = async (req, res) => {
  try {
    const data = await Entertainment.find({ isBookmarked: true });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const search = async (req, res) => {
  try {
    const { query } = req.query;
    const results = await Entertainment.find({
      title: { $regex: query, $options: "i" },
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

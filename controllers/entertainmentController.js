const Entertainment = require("../models/Entertainment");

// GET ALL
const getAll = async (req, res) => {
  try {
    const data = await Entertainment.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE ITEM
const createItem = async (req, res) => {
  try {
    const item = await Entertainment.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET TRENDING
const getTrending = async (req, res) => {
  try {
    const data = await Entertainment.find({ isTrending: true });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH
const search = async (req, res) => {
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

module.exports = {
  getAll,
  createItem,
  getTrending,
  search,
};

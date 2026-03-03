const mongoose = require("mongoose");

const thumbnailSchema = new mongoose.Schema(
  {
    trending: { small: String, large: String },
    regular: { small: String, medium: String, large: String },
  },
  { _id: false },
);

const entertainmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    thumbnail: thumbnailSchema,
    year: Number,
    category: { type: String, enum: ["Movie", "TV Series"] },
    rating: String,
    isBookmarked: Boolean,
    isTrending: Boolean,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Entertainment", entertainmentSchema);

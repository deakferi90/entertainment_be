import mongoose from "mongoose";

const thumbnailSchema = new mongoose.Schema(
  {
    trending: {
      small: String,
      large: String,
    },
    regular: {
      small: String,
      medium: String,
      large: String,
    },
  },
  { _id: false },
);

const entertainmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: thumbnailSchema,
  year: { type: Number, required: true },
  category: { type: String, enum: ["Movie", "TV Series"], required: true },
  rating: String,
  isBookmarked: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
});

const Entertainment = mongoose.model("Entertainment", entertainmentSchema);

export default Entertainment;

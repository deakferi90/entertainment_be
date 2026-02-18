import mongoose from "mongoose";

const thumbnailSchema = new mongoose.Schema(
  {
    trending: { small: String, large: String },
    regular: { small: String, medium: String, large: String },
  },
  { _id: false },
);

const mediaSchema = new mongoose.Schema({
  title: String,
  thumbnail: thumbnailSchema,
  year: Number,
  category: String,
  rating: String,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

// ✅ Prevent OverwriteModelError
const Media = mongoose.models.Media || mongoose.model("Media", mediaSchema);

export default Media;

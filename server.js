import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import mediaRoutes from "./routes/mediaRoutes.js";

const app = express();
const PORT = 9000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/entertainment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("MongoDB connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB error:", err));

// Routes
app.use("/api/media", mediaRoutes);

// Root
app.get("/", (req, res) => res.send("API running"));

// Favicon
app.get("/favicon.ico", (req, res) => res.status(204).send());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

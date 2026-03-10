import User from "../models/User.js";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

const users = [];

const SECRET = "mysecretkey";

router.post("/signup", async (req, res) => {
  try {
    const email = req.body?.email?.trim().toLowerCase();
    const password = req.body?.password;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "username, email, and password are required" });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (err) {
    if (err?.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

export default router;

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const scrapeLeetCodeSubmissions = require("../scraper/leetcodeScraper");

// ✅ REGISTER ROUTE
// POST /api/register
router.post("/register", async (req, res) => {
  try {
    const { username, email } = req.body;

    // Simple validation
    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ username, email });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Registration failed:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /api/scraper/:userId
router.get("/scraper/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const submissions = await scrapeLeetCodeSubmissions(user.username);

    if (!submissions.length) {
      return res.status(200).json({ message: "No submissions returned (maybe user doesn't exist?)" });
    }

    res.status(200).json(submissions);
  } catch (err) {
    console.error("Scraping failed:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

const express = require("express");
const Setting = require("../models/Setting");
const { protect, adminOnly } = require("../middleware/auth");

const router = express.Router();

// GET /api/settings — Public: get all settings
router.get("/", async (req, res) => {
  try {
    const settings = await Setting.find();
    // Convert to key-value object
    const obj = {};
    settings.forEach((s) => {
      obj[s.key] = s.value;
    });
    res.json(obj);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// PUT /api/settings — Admin: update settings (bulk)
router.put("/", protect, adminOnly, async (req, res) => {
  try {
    const updates = req.body; // { key: value, key: value, ... }

    const operations = Object.entries(updates).map(([key, value]) => ({
      updateOne: {
        filter: { key },
        update: { key, value },
        upsert: true,
      },
    }));

    await Setting.bulkWrite(operations);

    const settings = await Setting.find();
    const obj = {};
    settings.forEach((s) => {
      obj[s.key] = s.value;
    });

    res.json(obj);
  } catch (error) {
    res.status(400).json({ message: "Failed to update", error: error.message });
  }
});

module.exports = router;

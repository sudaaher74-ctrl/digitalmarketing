const express = require("express");
const Portfolio = require("../models/Portfolio");
const { protect, adminOnly } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

// GET /api/portfolio — Public: get all portfolio items
router.get("/", async (req, res) => {
  try {
    const { featured } = req.query;
    const filter = {};
    if (featured === "true") filter.featured = true;

    const items = await Portfolio.find(filter).sort({ order: 1, createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET /api/portfolio/:id — Public: get single item
router.get("/:id", async (req, res) => {
  try {
    const item = await Portfolio.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Portfolio item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST /api/portfolio — Admin: create
router.post("/", protect, adminOnly, upload.array("images", 5), async (req, res) => {
  try {
    const data = { ...req.body };

    if (typeof data.services === "string") {
      data.services = data.services.split(",").map((s) => s.trim());
    }

    if (req.files && req.files.length > 0) {
      data.images = req.files.map((f) => `/uploads/${f.filename}`);
      data.coverImage = data.images[0];
    }

    const item = await Portfolio.create(data);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: "Failed to create", error: error.message });
  }
});

// PUT /api/portfolio/:id — Admin: update
router.put("/:id", protect, adminOnly, upload.array("images", 5), async (req, res) => {
  try {
    const data = { ...req.body };

    if (typeof data.services === "string") {
      data.services = data.services.split(",").map((s) => s.trim());
    }

    if (req.files && req.files.length > 0) {
      data.images = req.files.map((f) => `/uploads/${f.filename}`);
      if (!data.coverImage) data.coverImage = data.images[0];
    }

    const item = await Portfolio.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: "Failed to update", error: error.message });
  }
});

// DELETE /api/portfolio/:id — Admin: delete
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const item = await Portfolio.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

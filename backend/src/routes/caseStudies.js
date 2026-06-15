const express = require("express");
const CaseStudy = require("../models/CaseStudy");
const { protect, adminOnly } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

// GET /api/case-studies — Public
router.get("/", async (req, res) => {
  try {
    const items = await CaseStudy.find().sort({ order: 1, createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET /api/case-studies/:slug — Public
router.get("/:slug", async (req, res) => {
  try {
    const item = await CaseStudy.findOne({ slug: req.params.slug });
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST /api/case-studies — Admin
router.post("/", protect, adminOnly, upload.array("images", 5), async (req, res) => {
  try {
    const data = { ...req.body };

    if (typeof data.services === "string") {
      data.services = data.services.split(",").map((s) => s.trim());
    }

    if (typeof data.metrics === "string") {
      data.metrics = JSON.parse(data.metrics);
    }

    if (req.files && req.files.length > 0) {
      data.images = req.files.map((f) => `/uploads/${f.filename}`);
    }

    const item = await CaseStudy.create(data);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: "Failed to create", error: error.message });
  }
});

// PUT /api/case-studies/:id — Admin
router.put("/:id", protect, adminOnly, upload.array("images", 5), async (req, res) => {
  try {
    const data = { ...req.body };

    if (typeof data.services === "string") {
      data.services = data.services.split(",").map((s) => s.trim());
    }

    if (typeof data.metrics === "string") {
      data.metrics = JSON.parse(data.metrics);
    }

    if (req.files && req.files.length > 0) {
      data.images = req.files.map((f) => `/uploads/${f.filename}`);
    }

    const item = await CaseStudy.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: "Failed to update", error: error.message });
  }
});

// DELETE /api/case-studies/:id — Admin
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const item = await CaseStudy.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

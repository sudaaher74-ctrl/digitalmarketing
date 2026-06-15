const express = require("express");
const Testimonial = require("../models/Testimonial");
const { protect, adminOnly } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

// GET /api/testimonials — Public
router.get("/", async (req, res) => {
  try {
    const { featured } = req.query;
    const filter = {};
    if (featured === "true") filter.featured = true;

    const testimonials = await Testimonial.find(filter).sort({ order: 1, createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST /api/testimonials — Admin
router.post("/", protect, adminOnly, upload.single("photo"), async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.photo = `/uploads/${req.file.filename}`;

    const testimonial = await Testimonial.create(data);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: "Failed to create", error: error.message });
  }
});

// PUT /api/testimonials/:id — Admin
router.put("/:id", protect, adminOnly, upload.single("photo"), async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.photo = `/uploads/${req.file.filename}`;

    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!testimonial) return res.status(404).json({ message: "Not found" });
    res.json(testimonial);
  } catch (error) {
    res.status(400).json({ message: "Failed to update", error: error.message });
  }
});

// DELETE /api/testimonials/:id — Admin
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

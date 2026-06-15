const express = require("express");
const BlogPost = require("../models/BlogPost");
const { protect, adminOnly } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

// GET /api/blog — Public: get published posts
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10, tag, all } = req.query;
    const filter = {};

    // Only show published posts to public, all posts for admin
    if (all !== "true") {
      filter.published = true;
    }

    if (tag) filter.tags = tag;

    const posts = await BlogPost.find(filter)
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit))
      .select("-content");

    const total = await BlogPost.countDocuments(filter);

    res.json({
      posts,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET /api/blog/:slug — Public: get single post by slug
router.get("/:slug", async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: "Post not found" });

    // Increment views
    post.views += 1;
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST /api/blog — Admin: create
router.post("/", protect, adminOnly, upload.single("coverImage"), async (req, res) => {
  try {
    const data = { ...req.body };

    if (typeof data.tags === "string") {
      data.tags = data.tags.split(",").map((t) => t.trim());
    }

    if (req.file) {
      data.coverImage = `/uploads/${req.file.filename}`;
    }

    const post = await BlogPost.create(data);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: "Failed to create", error: error.message });
  }
});

// PUT /api/blog/:id — Admin: update
router.put("/:id", protect, adminOnly, upload.single("coverImage"), async (req, res) => {
  try {
    const data = { ...req.body };

    if (typeof data.tags === "string") {
      data.tags = data.tags.split(",").map((t) => t.trim());
    }

    if (req.file) {
      data.coverImage = `/uploads/${req.file.filename}`;
    }

    const post = await BlogPost.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!post) return res.status(404).json({ message: "Not found" });
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: "Failed to update", error: error.message });
  }
});

// DELETE /api/blog/:id — Admin: delete
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

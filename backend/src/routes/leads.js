const express = require("express");
const Lead = require("../models/Lead");
const { protect, adminOnly } = require("../middleware/auth");

const router = express.Router();

// POST /api/leads — Public: submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, service } = req.body;

    if (!name || !email || !service) {
      return res.status(400).json({ message: "Name, email, and service are required" });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const lead = await Lead.create(req.body);
    res.status(201).json({ message: "Thank you! We'll get back to you within 24 hours.", id: lead._id });
  } catch (error) {
    res.status(400).json({ message: "Failed to submit", error: error.message });
  }
});

// GET /api/leads — Admin: get all leads
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Lead.countDocuments(filter);

    // Stats
    const stats = {
      total: await Lead.countDocuments(),
      new: await Lead.countDocuments({ status: "new" }),
      contacted: await Lead.countDocuments({ status: "contacted" }),
      qualified: await Lead.countDocuments({ status: "qualified" }),
      converted: await Lead.countDocuments({ status: "converted" }),
    };

    res.json({
      leads,
      total,
      stats,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// PUT /api/leads/:id — Admin: update lead status/notes
router.put("/:id", protect, adminOnly, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!lead) return res.status(404).json({ message: "Not found" });
    res.json(lead);
  } catch (error) {
    res.status(400).json({ message: "Failed to update", error: error.message });
  }
});

// DELETE /api/leads/:id — Admin: delete
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET /api/leads/export — Admin: export CSV
router.get("/export", protect, adminOnly, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();

    const csv = [
      "Name,Company,Email,Phone,Service,Message,Status,Date",
      ...leads.map(
        (l) =>
          `"${l.name}","${l.company || ""}","${l.email}","${l.phone || ""}","${l.service}","${(l.message || "").replace(/"/g, '""')}","${l.status}","${l.createdAt.toISOString()}"`
      ),
    ].join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=leads.csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

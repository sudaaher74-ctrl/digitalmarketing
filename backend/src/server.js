require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");
const connectDB = require("./config/db");
const User = require("./models/User");

// Route imports
const authRoutes = require("./routes/auth");
const portfolioRoutes = require("./routes/portfolio");
const blogRoutes = require("./routes/blog");
const testimonialRoutes = require("./routes/testimonials");
const caseStudyRoutes = require("./routes/caseStudies");
const leadRoutes = require("./routes/leads");
const settingRoutes = require("./routes/settings");

const app = express();
const PORT = process.env.PORT || 5001;

// ===== MIDDLEWARE =====

// Security headers
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

// CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: { message: "Too many requests, please try again later." },
});
app.use("/api/", limiter);

// Stricter rate limit for auth
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Too many login attempts, please try again later." },
});

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Static files (uploads)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// ===== ROUTES =====
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/case-studies", caseStudyRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/settings", settingRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// Dashboard stats (admin)
app.get("/api/dashboard/stats", async (req, res) => {
  try {
    const Lead = require("./models/Lead");
    const BlogPost = require("./models/BlogPost");
    const Portfolio = require("./models/Portfolio");
    const Testimonial = require("./models/Testimonial");
    const CaseStudy = require("./models/CaseStudy");

    const [leads, posts, portfolio, testimonials, caseStudies] = await Promise.all([
      Lead.countDocuments(),
      BlogPost.countDocuments(),
      Portfolio.countDocuments(),
      Testimonial.countDocuments(),
      CaseStudy.countDocuments(),
    ]);

    const newLeads = await Lead.countDocuments({ status: "new" });
    const recentLeads = await Lead.find().sort({ createdAt: -1 }).limit(5).lean();

    res.json({
      leads: { total: leads, new: newLeads },
      posts,
      portfolio,
      testimonials,
      caseStudies,
      recentLeads,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: "Validation Error", errors: messages });
  }

  if (err.code === 11000) {
    return res.status(400).json({ message: "Duplicate entry found" });
  }

  if (err.message && err.message.includes("Only image files")) {
    return res.status(400).json({ message: err.message });
  }

  res.status(500).json({ message: "Internal Server Error" });
});

// ===== START SERVER =====
const startServer = async () => {
  await connectDB();

  // Seed admin user if none exists
  const adminCount = await User.countDocuments();
  if (adminCount === 0) {
    await User.create({
      email: process.env.ADMIN_EMAIL || "admin@youragencyname.com",
      password: process.env.ADMIN_PASSWORD || "admin123456",
      name: "Admin",
      role: "admin",
    });
    console.log("✓ Admin user seeded");
  }

  app.listen(PORT, () => {
    console.log(`\n✓ Server running on http://localhost:${PORT}`);
    console.log(`  Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`  API Health: http://localhost:${PORT}/api/health\n`);
  });
};

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

const mongoose = require("mongoose");

const caseStudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    client: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
    },
    challenge: {
      type: String,
      required: [true, "Challenge is required"],
    },
    solution: {
      type: String,
      required: [true, "Solution is required"],
    },
    result: {
      type: String,
      required: [true, "Result is required"],
    },
    services: [
      {
        type: String,
        trim: true,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    metrics: {
      type: Map,
      of: String,
      default: {},
    },
    color: {
      type: String,
      default: "#00E5FF",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

caseStudySchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

module.exports = mongoose.model("CaseStudy", caseStudySchema);

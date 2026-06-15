const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    client: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
    },
    industry: {
      type: String,
      required: [true, "Industry is required"],
      trim: true,
    },
    services: [
      {
        type: String,
        trim: true,
      },
    ],
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    images: [
      {
        type: String, // file paths
      },
    ],
    coverImage: {
      type: String,
    },
    url: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "#00E5FF",
    },
  },
  { timestamps: true }
);

portfolioSchema.index({ featured: 1, order: 1 });

module.exports = mongoose.model("Portfolio", portfolioSchema);

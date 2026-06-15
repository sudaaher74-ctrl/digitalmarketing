"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "gradient-text"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <div className="mt-5 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />
    </motion.div>
  );
}

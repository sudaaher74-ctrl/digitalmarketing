"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ number, title, subtitle, lede, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 ${center ? "text-center max-w-2xl mx-auto" : ""} ${
        lede ? "grid md:grid-cols-2 gap-10 items-end" : ""
      }`}
    >
      <div>
        <span className="label block">
          {number ? `${number} — ` : ""}
          {subtitle}
        </span>
        <h2
          className="mt-4 text-white"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(32px, 4.4vw, 52px)",
          }}
        >
          {title}
        </h2>
      </div>
      {lede && (
        <p className="text-[var(--muted)] text-lg max-w-md md:justify-self-end">
          {lede}
        </p>
      )}
    </motion.div>
  );
}

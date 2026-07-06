"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const glyphMap = {
  code: "</>",
  search: "⌕",
  ads: "◉",
  social: "◈",
  design: "✳",
  content: "¶",
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          number="01"
          subtitle="What we do"
          title="Services built to move the needle"
          lede="A full-stack marketing team — from the site your customers land on to the campaigns that get them there."
        />

        <div className="hair-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="cell group px-9 py-10 min-h-[220px] transition-colors duration-300 hover:!bg-[var(--card)]"
            >
              <span
                className="block mb-12"
                style={{ fontFamily: "var(--font-heading)", color: "var(--lime)", fontSize: 26 }}
              >
                {glyphMap[service.icon]}
              </span>
              <h3 className="text-white mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: 22 }}>
                {service.title}
              </h3>
              <p className="text-[var(--muted)] text-[15px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

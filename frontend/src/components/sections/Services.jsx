"use client";

import { motion } from "framer-motion";
import {
  HiCodeBracket,
  HiMagnifyingGlass,
  HiCursorArrowRays,
  HiChatBubbleLeftRight,
  HiPaintBrush,
  HiDocumentText,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  code: HiCodeBracket,
  search: HiMagnifyingGlass,
  ads: HiCursorArrowRays,
  social: HiChatBubbleLeftRight,
  design: HiPaintBrush,
  content: HiDocumentText,
};

const colors = [
  { from: "#00E5FF", to: "#6C63FF" },
  { from: "#6C63FF", to: "#00FFB2" },
  { from: "#00FFB2", to: "#00E5FF" },
  { from: "#00E5FF", to: "#FF6B6B" },
  { from: "#6C63FF", to: "#00E5FF" },
  { from: "#00FFB2", to: "#6C63FF" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading
          subtitle="What We Do"
          title="Our Services"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const color = colors[i];
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="glass-card group p-7 rounded-2xl relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${color.from}08, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${color.from}15, ${color.to}10)`,
                  }}
                >
                  <Icon
                    size={26}
                    style={{ color: color.from }}
                  />
                </div>

                <h3
                  className="relative text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="relative text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom gradient line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${color.from}, ${color.to})`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

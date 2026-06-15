"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import { CASE_STUDIES } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading
          subtitle="Case Studies"
          title="Real Results for Real Businesses"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              className="glass-card group rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div
                className="p-6 pb-4 relative"
                style={{
                  background: `linear-gradient(135deg, ${study.color}10, transparent)`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {study.title}
                  </h3>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{
                      background: `${study.color}20`,
                      color: study.color,
                    }}
                  >
                    {study.title[0]}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{
                        color: study.color,
                        background: `${study.color}15`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 pt-4 space-y-4">
                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                      Challenge
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                      Solution
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Result */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                      Result
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {study.result}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center py-2.5 rounded-lg bg-white/3"
                    >
                      <div
                        className="text-sm font-bold"
                        style={{ color: study.color }}
                      >
                        {value}
                      </div>
                      <div className="text-[10px] text-[var(--color-text-muted)] capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button className="w-full py-2.5 text-sm font-medium rounded-xl border border-white/5 text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5 hover:border-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                  View Full Case Study
                  <HiArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

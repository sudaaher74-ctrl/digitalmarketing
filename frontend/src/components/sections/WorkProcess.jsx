"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

export default function WorkProcess() {
  return (
    <section id="process" className="section section-dark">
      <div className="container">
        <SectionHeading
          number="04"
          subtitle="How we work"
          title="Six steps to launch & beyond"
        />

        <div className="hair-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => {
            const isFinal = i === PROCESS_STEPS.length - 1;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="cell px-9 py-10 min-h-[210px]"
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 64,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: isFinal ? "var(--lime)" : "#1c1c21",
                  }}
                >
                  {String(step.step).padStart(2, "0")}
                </div>
                <h3 className="text-white mt-4.5 mb-2.5" style={{ fontFamily: "var(--font-heading)", fontSize: 21, marginTop: 18 }}>
                  {step.title}
                </h3>
                <p className="text-[var(--muted)] text-[15px]">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

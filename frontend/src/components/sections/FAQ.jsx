"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ_DATA } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="section section-dark">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading
          subtitle="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_DATA.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                aria-expanded={openIndex === i}
                id={`faq-toggle-${i}`}
              >
                <span
                  className={`text-sm sm:text-base font-semibold pr-4 transition-colors ${
                    openIndex === i ? "text-[var(--color-primary)]" : "text-white"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)] rotate-0"
                      : "bg-white/5 text-[var(--color-text-muted)] rotate-0"
                  }`}
                >
                  {openIndex === i ? <HiMinus size={16} /> : <HiPlus size={16} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <div className="h-px bg-white/5 mb-4" />
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

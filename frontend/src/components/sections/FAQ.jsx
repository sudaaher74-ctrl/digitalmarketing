"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ_DATA } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section">
      <div className="container max-w-[860px]">
        <SectionHeading
          number="06"
          subtitle="FAQ"
          title="Questions, answered"
          center
        />

        <div style={{ borderTop: "1px solid var(--hair)" }}>
          {FAQ_DATA.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--hair)" }}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 20, letterSpacing: "-0.02em" }}>
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 transition-transform duration-300"
                    style={{ color: "var(--lime)", fontSize: 26, transform: open ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[var(--muted)] text-base pb-6 max-w-[640px]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

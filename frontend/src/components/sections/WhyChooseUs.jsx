"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-dark">
      <div className="container">
        <SectionHeading
          number="02"
          subtitle="Why us"
          title="The difference is in how we work"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
          {WHY_CHOOSE_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--lime)", fontSize: 15 }} className="mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-white mb-2.5" style={{ fontFamily: "var(--font-heading)", fontSize: 20 }}>
                {item.title}
              </h3>
              <p className="text-[var(--muted)] text-[15px]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

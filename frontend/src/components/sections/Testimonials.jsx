"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

const AVATAR_BG = ["var(--lime)", "var(--violet)", "var(--lime)"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading
          number="05"
          subtitle="Testimonials"
          title="Don't take our word for it"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => {
            const initials = t.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col p-8"
                style={{ background: "var(--card)", border: "1px solid var(--hair)" }}
              >
                <div className="mb-5" style={{ color: "var(--lime)", letterSpacing: "3px", fontSize: 15 }}>★★★★★</div>
                <p className="text-[#d6d6da] text-base mb-7 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3.5 pt-5" style={{ borderTop: "1px solid var(--hair)" }}>
                  <span
                    className="w-[46px] h-[46px] grid place-items-center text-[#0B0B0D]"
                    style={{ background: AVATAR_BG[i % 3], fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15 }}
                  >
                    {initials}
                  </span>
                  <div>
                    <div className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                    <div className="text-[var(--muted)] text-[13px]">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

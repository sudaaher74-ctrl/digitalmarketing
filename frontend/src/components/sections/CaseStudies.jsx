"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container">
        <SectionHeading
          number="03"
          subtitle="Case Studies"
          title="Real brands. Real results."
        />

        <div style={{ border: "1px solid var(--hair)" }}>
          {CASE_STUDIES.map((study, i) => {
            return (
              <Link href={`/projects/${study.slug}`} key={study.slug} passHref legacyBehavior>
                <motion.a
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group grid lg:grid-cols-[0.9fr_1.1fr_0.8fr] gap-6 lg:gap-10 items-center px-6 lg:px-10 py-11 transition-colors duration-300 hover:bg-[var(--card)] cursor-pointer"
                  style={{ borderBottom: i < CASE_STUDIES.length - 1 ? "1px solid var(--hair)" : "none", display: "grid" }}
                >
                  <div>
                    <div className="uppercase" style={{ fontFamily: "var(--font-heading)", letterSpacing: "1.5px", fontSize: 11, color: "var(--violet)", fontWeight: 600 }}>
                      {study.category}
                    </div>
                    <h3 className="text-white my-3.5 flex items-center gap-3" style={{ fontFamily: "var(--font-heading)", fontSize: 34 }}>
                      {study.title}
                      <span className="text-[var(--lime)] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((s) => (
                        <span key={s} className="px-3 py-1 text-xs text-[var(--muted)]" style={{ border: "1px solid var(--hair)", fontFamily: "var(--font-heading)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-[var(--muted)] text-[15px]">{study.solution}</p>

                  <div className="flex gap-8">
                    {study.metrics.map((m) => (
                      <div key={m.l}>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--lime)", fontSize: 34, letterSpacing: "-0.03em" }}>{m.v}</div>
                        <div className="text-[var(--muted)] text-[13px]">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </motion.a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

const bars = [34, 48, 42, 64, 56, 88, 100];
const progs = [
  { label: "Leads", w: 72 },
  { label: "Convert", w: 90 },
  { label: "Traffic", w: 84 },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="container pt-[110px] pb-[70px]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 border border-[var(--hair)] rounded-full px-4 py-2 mb-5 uppercase text-[var(--muted)]"
              style={{ fontFamily: "var(--font-heading)", fontSize: 12, letterSpacing: "1.5px", fontWeight: 600 }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--lime)" }} />
              Digital Marketing Agency
            </span>

            <h1 className="text-white mb-5" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(44px, 6.4vw, 84px)" }}>
              Growth for brands that refuse to{" "}
              <span style={{ color: "var(--lime)" }}>blend in.</span>
            </h1>

            <p className="text-[var(--muted)] text-lg max-w-[480px] mb-7">
              We build high converting websites and run marketing that generates leads,
              drives sales, and makes your brand impossible to ignore.
            </p>

            <div className="flex flex-wrap gap-3.5">
              <a href="#contact" className="btn-lime">Get Free Consultation →</a>
              <a href="#case-studies" className="btn-outline">View Our Work</a>
            </div>
          </motion.div>

          {/* Right: analytics card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="p-7" style={{ background: "var(--card)", border: "1px solid var(--hair)" }}>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--lime)" }} />
                <span className="uppercase text-[var(--muted)]" style={{ fontFamily: "var(--font-heading)", letterSpacing: "1.5px", fontSize: 11 }}>
                  Live Campaign — last 30 days
                </span>
              </div>

              <div className="flex items-baseline gap-3 mt-5 mb-1">
                <span className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 52, letterSpacing: "-0.03em" }}>+67%</span>
                <span style={{ color: "var(--lime)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15 }}>▲ revenue growth</span>
              </div>
              <div className="text-[var(--muted-2)] text-[13px]">vs. previous period</div>

              {/* Bars */}
              <div className="flex items-end gap-2.5 h-[140px] my-6">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1"
                    style={{ background: h >= 80 ? "var(--lime)" : "#1f1f24" }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                ))}
              </div>

              {/* Mini progress */}
              <div className="grid grid-cols-3 gap-3.5 pt-5" style={{ borderTop: "1px solid var(--hair)" }}>
                {progs.map((p, i) => (
                  <div key={p.label}>
                    <div className="uppercase text-[var(--muted-2)] mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: 10, letterSpacing: "1px" }}>{p.label}</div>
                    <div className="h-1" style={{ background: "#1f1f24" }}>
                      <motion.div
                        className="h-full"
                        style={{ background: "var(--lime)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.w}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.6 + i * 0.15 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-6 -right-5 float-1 hidden sm:flex items-center gap-3 p-3" style={{ background: "var(--panel)", border: "1px solid var(--hair)" }}>
              <span className="w-[30px] h-[30px] grid place-items-center text-sm" style={{ border: "1px solid var(--hair)", color: "var(--lime)" }}>↗</span>
              <div>
                <div className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, lineHeight: 1 }}>+180%</div>
                <div className="text-[var(--muted)] text-[11px]">Engagement</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-5 float-2 hidden sm:flex items-center gap-3 p-3" style={{ background: "var(--panel)", border: "1px solid var(--hair)" }}>
              <span className="w-[30px] h-[30px] grid place-items-center text-sm" style={{ border: "1px solid var(--hair)", color: "var(--violet)" }}>◎</span>
              <div>
                <div className="text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, lineHeight: 1 }}>98.5%</div>
                <div className="text-[var(--muted)] text-[11px]">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat row */}
        <div
          className="mt-[70px] grid grid-cols-2 md:grid-cols-4"
          style={{ background: "var(--hair)", gap: 1, border: "1px solid var(--hair)" }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="px-7 py-9" style={{ background: "var(--canvas)" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 44, color: "var(--lime)", letterSpacing: "-0.03em" }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[var(--muted)] text-sm mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

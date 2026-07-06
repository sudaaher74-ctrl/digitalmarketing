"use client";

import { CLIENTS } from "@/lib/constants";

const names = [
  ...CLIENTS.map((c) => c.name),
  "Frozen Exports",
  "Dairy Co.",
  "Design Studio",
];

export default function TrustedBy() {
  const items = [...names, ...names];
  return (
    <section id="portfolio" className="py-8" style={{ borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)" }}>
      <div
        className="text-center uppercase text-[var(--muted-2)] mb-6"
        style={{ fontFamily: "var(--font-heading)", letterSpacing: "2px", fontSize: 12 }}
      >
        Trusted by growing brands
      </div>
      <div className="marquee">
        <div className="mq-track">
          {items.map((name, i) => (
            <span key={i} className="flex items-center gap-[42px]">
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 30, color: "#4a4a52", letterSpacing: "-0.02em" }}>
                {name}
              </span>
              <span style={{ color: "var(--lime)", fontSize: 18 }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

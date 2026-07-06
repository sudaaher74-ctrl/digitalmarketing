"use client";

import { CLIENTS } from "@/lib/constants";

// Map clients to their link, and keep some placeholder non-link items if desired,
// though now we have 5 clients, they alone are good. We'll add the placeholders just in case.
const clientItems = CLIENTS.map((c) => ({ name: c.name, link: c.link }));
const placeholderItems = [
  { name: "Frozen Exports", link: null },
  { name: "Dairy Co.", link: null },
  { name: "Design Studio", link: null },
];

export default function TrustedBy() {
  const items = [...clientItems, ...placeholderItems, ...clientItems, ...placeholderItems];
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
          {items.map((item, i) => {
            const content = (
              <span className="flex items-center gap-[42px]">
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 30, color: "#4a4a52", letterSpacing: "-0.02em" }}>
                  {item.name}
                </span>
                <span style={{ color: "var(--lime)", fontSize: 18 }}>✦</span>
              </span>
            );

            return item.link ? (
              <a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                {content}
              </a>
            ) : (
              <span key={i}>{content}</span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

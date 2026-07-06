"use client";

import { SITE_CONFIG } from "@/lib/constants";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Process", href: "#process" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "SEO", href: "#services" },
      { label: "Google Ads", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: SITE_CONFIG.social.instagram },
      { label: "LinkedIn", href: SITE_CONFIG.social.linkedin },
      { label: "Facebook", href: SITE_CONFIG.social.facebook },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--hair)" }} className="pt-[70px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-14">
          <div>
            <div className="flex items-center gap-3 mb-4.5" style={{ marginBottom: 18 }}>
              <span className="w-[38px] h-[38px] grid place-items-center text-[#0B0B0D] font-bold text-base" style={{ background: "var(--lime)", fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}>YA</span>
              <span className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>Your Agency</span>
            </div>
            <p className="text-[var(--muted)] text-[15px] max-w-[260px]">
              Digital marketing &amp; web solutions for brands that refuse to blend in.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="uppercase text-[var(--muted-2)] mb-4.5" style={{ fontFamily: "var(--font-heading)", fontSize: 11, letterSpacing: "1.5px", fontWeight: 600, marginBottom: 18 }}>
                {col.title}
              </h4>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="block text-[var(--muted)] text-[15px] py-1.5 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 py-6" style={{ borderTop: "1px solid var(--hair)" }}>
          <span className="text-[var(--muted-2)] text-[13px]">© {new Date().getFullYear()} Your Agency. All rights reserved.</span>
          <span className="text-[var(--muted-2)] text-[13px]">Mumbai · Maharashtra · India</span>
        </div>
      </div>
    </footer>
  );
}

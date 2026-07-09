"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  const info = [
    { icon: "✉", label: "Email", value: SITE_CONFIG.email },
    { icon: "☎", label: "Phone", value: SITE_CONFIG.phone },
    { icon: "⌖", label: "Location", value: SITE_CONFIG.address },
  ];

  return (
    <section id="contact" className="section section-dark">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label block">07 — Contact</span>
          <h2 className="text-white mt-4 mb-5" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(34px, 4.6vw, 54px)" }}>
            Let&apos;s build something that converts.
          </h2>
          <p className="text-[var(--muted)] text-lg mb-10 max-w-[400px]">
            Book a free consultation. Tell us where you want to grow and we&apos;ll show you exactly how to get there.
          </p>

          <div className="flex flex-col gap-5.5" style={{ gap: 22 }}>
            {info.map((it) => (
              <div key={it.label} className="flex items-center gap-4">
                <span className="w-11 h-11 grid place-items-center shrink-0 text-base" style={{ border: "1px solid var(--hair)", color: "var(--lime)" }}>
                  {it.icon}
                </span>
                <div>
                  <div className="uppercase text-[var(--muted-2)]" style={{ fontFamily: "var(--font-heading)", fontSize: 11, letterSpacing: "1.5px" }}>{it.label}</div>
                  <div className="text-white text-base">{it.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-center"
        >
          <div className="p-10 rounded-3xl relative overflow-hidden" style={{ background: "var(--card)", border: "1px solid var(--hair)" }}>
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-[80px] rounded-full" style={{ background: "var(--lime)", transform: "translate(30%, -30%)" }} />
            
            <h3 className="text-2xl text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Skip the forms. Let&apos;s talk directly.
            </h3>
            <p className="text-[var(--muted)] mb-8">
              We value your time. No dashboards, no waiting. Reach out to us right now and get a response within minutes.
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl group transition-all duration-300"
                style={{ background: "rgba(100, 255, 100, 0.05)", border: "1px solid rgba(100, 255, 100, 0.2)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full grid place-items-center" style={{ background: "rgba(100,255,100,0.1)", color: "#4ade80" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Chat on WhatsApp</div>
                    <div className="text-[var(--muted)] text-sm">Instant replies, real conversations.</div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#4ade80] group-hover:text-black transition-all">
                  <span className="text-xl leading-none">↗</span>
                </div>
              </a>

              <a 
                href={`mailto:${SITE_CONFIG.email}`} 
                className="flex items-center justify-between p-5 rounded-2xl group transition-all duration-300"
                style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--hair)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full grid place-items-center" style={{ background: "rgba(255,255,255,0.05)", color: "var(--muted)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Send an Email</div>
                    <div className="text-[var(--muted)] text-sm">Prefer email? We&apos;re on it.</div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <span className="text-xl leading-none">↗</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

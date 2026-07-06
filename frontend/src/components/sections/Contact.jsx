"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi, I am ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const info = [
    { icon: "✉", label: "Email", value: SITE_CONFIG.email },
    { icon: "☎", label: "Phone", value: SITE_CONFIG.phone },
    { icon: "⌖", label: "Location", value: SITE_CONFIG.address },
  ];

  return (
    <section id="contact" className="section section-dark">
      <div className="container grid lg:grid-cols-2 gap-16">
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

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5.5" style={{ gap: 22, display: "flex", flexDirection: "column" }}>
            <div>
              <label htmlFor="c-name" className="block uppercase text-[var(--muted)] mb-2.5" style={{ fontFamily: "var(--font-heading)", fontSize: 11, letterSpacing: "1.5px" }}>Name</label>
              <input id="c-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" className="form-input" />
            </div>
            <div>
              <label htmlFor="c-email" className="block uppercase text-[var(--muted)] mb-2.5" style={{ fontFamily: "var(--font-heading)", fontSize: 11, letterSpacing: "1.5px" }}>Email</label>
              <input id="c-email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" className="form-input" />
            </div>
            <div>
              <label htmlFor="c-message" className="block uppercase text-[var(--muted)] mb-2.5" style={{ fontFamily: "var(--font-heading)", fontSize: 11, letterSpacing: "1.5px" }}>What do you need?</label>
              <textarea id="c-message" name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className="form-input resize-y" />
            </div>

            {error && (
              <div className="p-3 text-red-400 text-sm" style={{ border: "1px solid rgba(248,113,113,0.3)" }}>{error}</div>
            )}

            {submitted && (
              <div className="p-4 text-center" style={{ border: "1px solid var(--lime)", color: "var(--lime)", fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14 }}>
                ✓ Thanks — your message is on its way. We&apos;ll be in touch within 24 hours.
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-lime justify-center disabled:opacity-60">
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

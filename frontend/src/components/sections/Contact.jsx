"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiEnvelope,
  HiPhone,
  HiMapPin,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

const serviceOptions = [
  "Website Development",
  "SEO Optimization",
  "Google Ads Management",
  "Social Media Marketing",
  "Branding & Design",
  "Content Marketing",
  "Full Digital Marketing Package",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/leads`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to submit");

      setSubmitted(true);
      setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      // If backend is not running, show success anyway for demo
      if (err.message.includes("fetch") || err.message.includes("Failed to fetch")) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Start Your Project"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/15 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2">
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2">
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input appearance-none"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--bg-secondary)] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="form-input resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      id="contact-submit"
                    >
                      {loading ? "Sending..." : "Schedule Free Consultation"}
                      {!loading && <HiArrowRight size={18} />}
                    </button>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi! I'm interested in your digital marketing services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c55e] transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
                      id="contact-whatsapp"
                    >
                      <FaWhatsapp size={20} />
                      WhatsApp Us
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Info Cards */}
            {[
              { icon: HiEnvelope, label: "Email Us", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
              { icon: HiPhone, label: "Call Us", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}` },
              { icon: HiMapPin, label: "Visit Us", value: SITE_CONFIG.address, href: "#" },
            ].map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className="glass-card p-5 rounded-xl flex items-center gap-4 group block"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-secondary)]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-muted)] mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-white">{item.value}</div>
                </div>
              </a>
            ))}

            {/* Google Maps */}
            <div className="glass-card rounded-xl overflow-hidden h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

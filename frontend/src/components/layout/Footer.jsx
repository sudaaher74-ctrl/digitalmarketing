"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#hero" },
      { label: "Our Process", href: "#process" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "#services" },
      { label: "SEO Optimization", href: "#services" },
      { label: "Google Ads", href: "#services" },
      { label: "Social Media", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socialLinks = [
  { icon: FaInstagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
  { icon: FaFacebookF, href: SITE_CONFIG.social.facebook, label: "Facebook" },
  { icon: FaLinkedinIn, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-white/5">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />

      <div className="container mx-auto max-w-[1280px] px-6 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-black font-bold text-sm">
                YA
              </div>
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {SITE_CONFIG.name}
              </span>
            </a>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 max-w-sm">
              We help businesses grow through powerful digital marketing strategies,
              high-converting websites, and data-driven campaigns that deliver real results.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1 text-sm py-2.5"
                id="footer-newsletter-email"
              />
              <button className="btn-primary py-2.5 px-5 text-sm" id="footer-newsletter-submit">
                <HiArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className="text-white font-semibold text-sm mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 transition-all"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

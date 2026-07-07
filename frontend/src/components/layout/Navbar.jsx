"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { SITE_CONFIG, CASE_STUDIES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", isDropdown: true, href: "/projects" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

const Logo = () => (
  <div className="flex items-center gap-3">
    <span
      className="w-[38px] h-[38px] grid place-items-center text-[#0B0B0D] font-bold text-base"
      style={{ background: "var(--lime)", fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}
    >
      YA
    </span>
    <span className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
      Your Agency
    </span>
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                background: "rgba(11,11,13,0.82)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderBottom: "1px solid var(--hair)",
              }
            : { borderBottom: "1px solid transparent" }
        }
      >
        <div className="container flex items-center justify-between h-[74px]">
          <Link href="/"><Logo /></Link>

          <div className="hidden min-[900px]:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              link.isDropdown ? (
                <div key={link.label} className="relative group">
                  <Link href={link.href} className="text-sm font-medium text-[var(--muted)] group-hover:text-white transition-colors py-6 flex items-center gap-1.5 cursor-pointer">
                    {link.label} <span className="text-[9px] opacity-60">▼</span>
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-[60px] left-[-20px] min-w-[220px] bg-[var(--panel)] border border-[var(--hair)] rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col translate-y-2 group-hover:translate-y-0 shadow-2xl">
                    {CASE_STUDIES.map(study => (
                      <Link key={study.slug} href={`/projects/${study.slug}`} className="px-5 py-3.5 hover:bg-[#202025] text-[var(--muted)] hover:text-[var(--lime)] border-b border-[var(--hair)] transition-colors text-[13px] font-medium flex items-center justify-between">
                        {study.title}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                      </Link>
                    ))}
                    <Link href="/projects" className="px-5 py-3.5 hover:bg-[#202025] text-[var(--muted)] hover:text-white transition-colors text-[13px] font-medium flex items-center justify-between">
                      View All Projects
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] hover:text-white transition-colors py-4"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link href="/#contact" className="btn-lime !py-2.5 !px-5 !text-sm">
              Get Free Consultation →
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="min-[900px]:hidden p-2 text-white"
            aria-label="Open menu"
          >
            <HiOutlineBars3 size={26} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-black/50 min-[900px]:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-[78%] max-w-[340px] min-[900px]:hidden px-8 pt-24 pb-8 flex flex-col gap-1.5 overflow-y-auto"
              style={{ background: "var(--panel)", borderLeft: "1px solid var(--hair)" }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 text-white"
                aria-label="Close menu"
              >
                <HiXMark size={28} />
              </button>
              {NAV_LINKS.map((link) => (
                link.isDropdown ? (
                  <div key={link.label} className="border-b border-[var(--hair)] flex flex-col py-3">
                    <Link href={link.href} onClick={() => setMobileOpen(false)} className="text-xl font-medium text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>{link.label}</Link>
                    <div className="flex flex-col pl-4 gap-3">
                      {CASE_STUDIES.map(study => (
                        <Link key={study.slug} href={`/projects/${study.slug}`} onClick={() => setMobileOpen(false)} className="text-[var(--muted)] hover:text-[var(--lime)] text-[15px] flex items-center justify-between pr-4">
                          {study.title} <span>↗</span>
                        </Link>
                      ))}
                      <Link href="/projects" onClick={() => setMobileOpen(false)} className="text-[var(--muted)] hover:text-white text-[15px] flex items-center justify-between pr-4 mt-2">
                        View All Projects <span>→</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3.5 text-xl font-medium text-white border-b border-[var(--hair)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-lime w-full justify-center mt-5"
              >
                Get Free Consultation →
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiEye } from "react-icons/hi2";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-[var(--color-secondary)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1280px] px-6 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6"
            >
              <span className="glow-dot" />
              <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                Digital Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Helping Businesses Grow Through{" "}
              <span className="gradient-text-hero">Digital Marketing</span> &{" "}
              <span className="gradient-text">High-Converting Websites</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-xl"
            >
              We create powerful digital experiences that generate leads, increase
              sales, and build strong brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary" id="hero-cta-consultation">
                Get Free Consultation
                <HiArrowRight size={18} />
              </a>
              <a href="#portfolio" className="btn-secondary" id="hero-cta-work">
                <HiEye size={18} />
                View Our Work
              </a>
            </motion.div>
          </div>

          {/* Right: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="glass-card p-6 rounded-2xl">
              {/* Mini toolbar */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-[var(--color-text-muted)]">Marketing Dashboard</span>
              </div>

              {/* Chart Area */}
              <div className="mb-4">
                <div className="flex items-end justify-between mb-2">
                  <span className="text-xs text-[var(--color-text-muted)]">Revenue Growth</span>
                  <span className="text-xs text-[var(--color-accent)] font-semibold">+67%</span>
                </div>
                <svg viewBox="0 0 400 100" className="w-full h-24">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0 80 Q50 70 80 60 T160 40 T240 50 T320 20 T400 10"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                  <path
                    d="M0 80 Q50 70 80 60 T160 40 T240 50 T320 20 T400 10 V100 H0 Z"
                    fill="url(#chartGrad)"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Mini Stat Bars */}
              <div className="grid grid-cols-3 gap-3">
                {["Leads", "Conversions", "Traffic"].map((label, i) => (
                  <div key={label} className="bg-white/3 rounded-lg p-3">
                    <div className="text-[10px] text-[var(--color-text-muted)] mb-1">{label}</div>
                    <motion.div
                      className="h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${60 + i * 15}%` }}
                      transition={{ duration: 1, delay: 1.2 + i * 0.2 }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card p-3 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center">
                  <span className="text-[var(--color-accent)] text-sm">📈</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">+180%</div>
                  <div className="text-[10px] text-[var(--color-text-muted)]">Growth Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)]/20 flex items-center justify-center">
                  <span className="text-[var(--color-secondary)] text-sm">🎯</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">98.5%</div>
                  <div className="text-[10px] text-[var(--color-text-muted)]">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card text-center py-6 px-4 rounded-xl"
            >
              <div
                className="text-3xl sm:text-4xl font-bold gradient-text mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

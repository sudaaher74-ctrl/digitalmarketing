"use client";

import { motion } from "framer-motion";
import {
  HiPhone,
  HiMagnifyingGlass,
  HiLightBulb,
  HiCodeBracket,
  HiRocketLaunch,
  HiArrowTrendingUp,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

const icons = [
  HiPhone,
  HiMagnifyingGlass,
  HiLightBulb,
  HiCodeBracket,
  HiRocketLaunch,
  HiArrowTrendingUp,
];

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function WorkProcess() {
  return (
    <section id="process" className="section section-dark overflow-hidden">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading
          subtitle="How We Work"
          title="Our Process"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full origin-top"
              style={{
                background: "linear-gradient(180deg, var(--color-primary), var(--color-secondary), var(--color-accent))",
              }}
            />
          </div>

          {/* Mobile Line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]" />

          <div className="space-y-8 lg:space-y-12">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = icons[i];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={stepVariants}
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Mobile dot */}
                  <div className="lg:hidden shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-black font-bold text-sm z-10">
                    {step.step}
                  </div>

                  {/* Content side */}
                  <div
                    className={`flex-1 lg:w-[calc(50%-40px)] ${
                      isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <div className={`glass-card p-6 rounded-xl inline-block ${isEven ? "lg:ml-auto" : ""}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-secondary)]/10 flex items-center justify-center">
                          <Icon size={20} className="text-[var(--color-primary)]" />
                        </div>
                        <h3
                          className="text-base font-bold text-white"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] items-center justify-center text-black font-bold text-sm z-10 shadow-lg shadow-[var(--color-primary)]/20">
                    {step.step}
                  </div>

                  {/* Empty side (desktop) */}
                  <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

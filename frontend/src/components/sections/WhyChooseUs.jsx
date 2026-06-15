"use client";

import { motion } from "framer-motion";
import {
  HiChartBar,
  HiAdjustmentsHorizontal,
  HiDevicePhoneMobile,
  HiGlobeAlt,
  HiBolt,
  HiLifebuoy,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap = {
  target: HiChartBar,
  strategy: HiAdjustmentsHorizontal,
  mobile: HiDevicePhoneMobile,
  seo: HiGlobeAlt,
  speed: HiBolt,
  support: HiLifebuoy,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-dark">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading
          subtitle="Why Us"
          title="Why Choose Us"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="glass-card group p-7 rounded-2xl relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-secondary)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-[var(--color-primary)]" />
                  </div>

                  <div>
                    {/* Checkmark + Title */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[var(--color-accent)] text-lg">✓</span>
                      <h3
                        className="text-base font-bold text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Corner glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/5 rounded-full blur-2xl transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

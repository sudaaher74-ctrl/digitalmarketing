"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const glyphMap = {
  code: "</>",
  search: "⌕",
  ads: "◉",
  social: "◈",
  design: "✳",
  content: "¶",
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          number="01"
          subtitle="What we do"
          title="Services built to move the needle"
          lede="A full-stack marketing team — from the site your customers land on to the campaigns that get them there."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[280px]">
          {SERVICES.map((service, i) => {
            // Bento Box layout spanning logic
            const isLarge = i === 0 || i === 3; // First and fourth cards are larger
            const spanClass = isLarge ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1";
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-card group flex flex-col justify-between p-8 rounded-3xl ${spanClass}`}
              >
                <div className="flex justify-between items-start">
                  <span
                    className="block"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--lime)", fontSize: 26 }}
                  >
                    {glyphMap[service.icon]}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl">↗</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: isLarge ? 28 : 22 }}>
                    {service.title}
                  </h3>
                  <p className="text-[var(--muted)] text-[15px] leading-relaxed max-w-sm">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

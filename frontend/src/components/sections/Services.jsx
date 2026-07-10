"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

// Using Lucide-react or similar SVG icons would be best, but we'll use unicode/text 
// for now that matches the feel, or simple SVG shapes if possible.
const glyphMap = {
  code: "⍋",
  search: "⌕",
  ads: "◎",
  social: "⎔",
  design: "∆",
  content: "¶",
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[#F9F8F6] py-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="uppercase tracking-[0.3em] text-[#888888] text-xs font-semibold">
            O u r &nbsp; s e r v i c e s
          </span>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#EAE9E4]">
          {SERVICES.map((service, i) => {
            // Shift every even column down on large screens
            const isEven = i % 2 !== 0;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex flex-col p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#EAE9E4] ${
                  (i + 1) % 4 === 0 ? "lg:border-r-0" : ""
                } ${
                  isEven ? "lg:pt-32" : "lg:pb-32"
                } hover:bg-black/[0.01] transition-colors duration-500 group`}
              >
                {/* Icon (Red) */}
                <div className="mb-8">
                  <span
                    className="flex items-center text-[#9B2C3C]"
                    style={{ fontSize: 28, lineHeight: 1 }}
                  >
                    {glyphMap[service.icon] || "⍋"}
                  </span>
                </div>
                
                {/* Title */}
                <h3 
                  className="text-[#1A1A1A] text-[22px] mb-8 leading-tight font-medium" 
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                
                {/* Image Placeholder - Recommended Size: 800x600px (4:3 ratio) */}
                <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-8 bg-[#EAE9E4]">
                  <img
                    src={`https://placehold.co/800x600/EAE9E4/9B2C3C?text=${service.title.split(" ").join("+")}`}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Description */}
                <p className="text-[#666666] text-[14px] leading-relaxed mb-12 flex-grow">
                  {service.description}
                </p>
                
                {/* Arrow Button */}
                <div className="mt-auto">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D5D4D0] text-[#888888] group-hover:text-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

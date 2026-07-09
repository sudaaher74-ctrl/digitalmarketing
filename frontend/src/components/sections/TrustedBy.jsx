"use client";

import { motion } from "framer-motion";

const BRANDS = [
  { name: "BrandKettle", color: "#FF3366" },
  { name: "OS Interior", color: "#00FFB2" },
  { name: "MilquuFresh", color: "#6C63FF", image: "/milquufresh.png" },
  { name: "Drona Archery", color: "#FF9900" },
];

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="py-24 lg:py-32 relative z-10">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 
          className="text-white mb-16 text-center md:text-left"
          style={{ 
            fontFamily: "var(--font-heading)", 
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}
        >
          Trusted by marketing teams at
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.5) }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl md:rounded-[24px] aspect-square flex items-center justify-center p-6 cursor-pointer hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              {brand.image ? (
                <img src={brand.image} alt={brand.name} className="w-full h-full object-contain p-2" />
              ) : (
                <div 
                  className="text-center font-bold tracking-tighter"
                  style={{ 
                    color: brand.color, 
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(18px, 1.8vw, 22px)",
                    lineHeight: 1.1
                  }}
                >
                  {brand.name}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import GalaxyBackground from "@/components/ui/GalaxyBackground";


export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <GalaxyBackground />
      <div className="container pt-[110px] pb-[70px] relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >

            <h1 
              className="text-white mb-5 font-black" 
              style={{ 
                fontFamily: "var(--font-heading)", 
                fontSize: "clamp(44px, 6.4vw, 84px)",
                textShadow: "0 8px 35px rgba(0,0,0,0.45)"
              }}
            >
              Growth for brands that refuse to{" "}
              <span style={{ color: "var(--lime)" }}>blend in.</span>
            </h1>

            <p 
              className="text-lg md:text-xl mb-10 mx-auto"
              style={{ color: "rgba(255,255,255,0.78)", maxWidth: "750px" }}
            >
              We build high converting websites and run marketing that generates leads,
              drives sales, and makes your brand impossible to ignore.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-glass">Get Free Consultation →</a>
              <a href="#case-studies" className="btn-glass-outline">View Our Work</a>
            </div>
            
            <style jsx>{`
              .btn-glass {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 15px 28px;
                font-family: var(--font-heading);
                font-weight: 600;
                font-size: 15px;
                color: #fff;
                text-decoration: none;
                background: rgba(100, 70, 255, 0.12);
                border: 1px solid rgba(150, 130, 255, 0.35);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                box-shadow: 0 0 35px rgba(122, 88, 255, 0.45);
                transition: all 0.35s ease;
              }
              .btn-glass:hover {
                transform: translateY(-3px);
                box-shadow: 0 0 45px rgba(122, 88, 255, 0.65);
                background: rgba(100, 70, 255, 0.2);
              }
              .btn-glass-outline {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 15px 28px;
                font-family: var(--font-heading);
                font-weight: 600;
                font-size: 15px;
                color: #fff;
                text-decoration: none;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                transition: all 0.35s ease;
              }
              .btn-glass-outline:hover {
                transform: translateY(-3px);
                background: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.3);
              }
            `}</style>
          </motion.div>


        </div>


      </div>
    </section>
  );
}

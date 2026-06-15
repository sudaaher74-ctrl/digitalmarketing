"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import StarRating from "@/components/ui/StarRating";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
        />

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="glass-card p-8 sm:p-10 rounded-2xl relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-4 right-6 text-7xl font-serif gradient-text opacity-10 select-none">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Rating */}
                <div className="mb-5">
                  <StarRating rating={testimonial.rating} size={20} />
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-black font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "w-8 h-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                  id="testimonial-prev"
                >
                  <HiChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                  id="testimonial-next"
                >
                  <HiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

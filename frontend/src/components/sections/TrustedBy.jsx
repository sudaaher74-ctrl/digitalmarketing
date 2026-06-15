"use client";

import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import { CLIENTS } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function TrustedBy() {
  return (
    <section id="portfolio" className="section section-dark">
      <div className="container mx-auto max-w-[1280px] px-6">
        <SectionHeading
          subtitle="Our Clients"
          title="Brands We've Worked With"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS.map((client, i) => (
            <motion.div
              key={client.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="glass-card group overflow-hidden rounded-2xl"
            >
              {/* Preview Image Area */}
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${client.color}15, ${client.color}05)`,
                }}
              >
                {/* Mock browser window */}
                <div className="absolute inset-4 rounded-lg bg-[var(--bg-primary)]/80 border border-white/5 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-white/3 border-b border-white/5">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    <div className="ml-2 flex-1 h-4 bg-white/5 rounded-sm" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-3 rounded" style={{ width: "70%", background: `${client.color}30` }} />
                    <div className="h-2 bg-white/5 rounded" style={{ width: "90%" }} />
                    <div className="h-2 bg-white/5 rounded" style={{ width: "60%" }} />
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="h-10 rounded" style={{ background: `${client.color}15` }} />
                      <div className="h-10 rounded" style={{ background: `${client.color}10` }} />
                      <div className="h-10 rounded" style={{ background: `${client.color}15` }} />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-white bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
                    View Project <HiArrowTopRightOnSquare size={12} />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {client.name}
                  </h3>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      color: client.color,
                      background: `${client.color}15`,
                    }}
                  >
                    {client.industry}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                  {client.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {client.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs text-[var(--color-text-muted)] bg-white/5 px-2.5 py-1 rounded-md"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SHOW_UNVERIFIED, STUDIO_INFO } from "@/data/projects";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15% 0px" });

  const manifestoLines = [
    "We believe architecture is not the imposition of a form upon the earth,",
    "but an unhurried listening to what the land and its ancient stone already say.",
    "Rooted in the tectonic heritage of Maharashtra, Studio Kalaa Vant crafts spaces",
    "where raw basalt, hand-poured concrete, and filtered tropical breezes",
    "create sanctuary, stillness, and enduring poetry for generations."
  ];

  const pillars = [
    {
      index: "01",
      title: "Contextual Materiality",
      marathi: "भूमी संवेदनशीलता",
      desc: "Local black basalt, laterite stone, reclaimed teak, and rammed earth excavated directly from site contours.",
    },
    {
      index: "02",
      title: "Poetry of Shaded Light",
      marathi: "प्रकाश आणि छाया",
      desc: "Deep verandahs, perforated terracotta jali screens, and high clerestories that modulate tropical heat into serene shadow.",
    },
    {
      index: "03",
      title: "Silence as Space",
      marathi: "मौन आणि अवकाश",
      desc: "Stripping away transient decorative noise to reveal proportion, honest textures, and acoustic peace.",
    },
    {
      index: "04",
      title: "Passive Climate Resilience",
      marathi: "नैसर्गिक संतुलन",
      desc: "Water courts, thermal siphon vents, and subterranean reservoirs enabling homes to naturally breathe without excess energy.",
    },
  ];

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative w-full py-28 md:py-40 bg-ivory text-charcoal px-6 md:px-12 lg:px-20 border-b border-charcoal/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-charcoal/15 mb-16 md:mb-24">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8C7D70]">
            01 / PHILOSOPHY & MANIFESTO
          </span>
          <span className="text-[11px] font-serif tracking-widest text-[#A08975]">
            कलावांत विचारसरणी
          </span>
        </div>

        {/* Big Editorial Quote with Line-by-Line Reveal */}
        <div className="max-w-5xl mx-auto mb-24 md:mb-36">
          <span className="block text-xs font-mono uppercase tracking-[0.3em] text-bronze-deep mb-8">
            // THE ATELIER ETHOS
          </span>

          <div className="space-y-3">
            {manifestoLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.15 + idx * 0.12,
                    ease: [0.77, 0, 0.175, 1],
                  }}
                  className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-[1.3] tracking-wide"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-charcoal/10"
          >
            <p className="text-sm font-sans text-[#666360] max-w-lg leading-relaxed">
              Every project begins with stone, earth, and sun studies. We do not design for the moment of photographic completion; we design for how the moss will grow on the basalt walls thirty monsoons from now.
            </p>
            <div className="text-right">
              <span className="font-serif text-lg text-charcoal block">Studio Kalaa Vant</span>
              <span className="text-xs font-mono text-[#8C7D70]">Principal Atelier • Maharashtra</span>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars of Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-charcoal/10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
              className="group p-6 bg-ivory-deep/40 hover:bg-ivory-deep transition-colors border-l-2 border-charcoal/20 hover:border-charcoal"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-xs tracking-widest text-[#A08975]">
                  {pillar.index}
                </span>
                <span className="text-[11px] font-serif text-[#8C7D70]">
                  {pillar.marathi}
                </span>
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-3 group-hover:text-[#A08975] transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-xs text-[#666360] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Numerical Studio Accomplishments */}
        {SHOW_UNVERIFIED && (
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-8 bg-charcoal text-ivory">
          {STUDIO_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-gold font-light">
                {stat.number}
              </span>
              <span className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C4BFB6]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STUDIO_INFO } from "@/data/projects";
import { ArrowUpRight, Check } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full py-28 md:py-40 bg-[#F5F3EF] text-[#141414] px-6 md:px-12 lg:px-20 border-b border-[#141414]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#141414]/15 mb-20">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#8C7D70] mb-3">
              <span>04 / DISCIPLINES & APPROACH</span>
              <span>•</span>
              <span className="text-[#A08975]">सेवा आणि कार्यपद्धती</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#141414] tracking-tight">
              Architectural Services
            </h2>
          </div>

          <p className="max-w-md text-xs font-sans text-[#666360] leading-relaxed">
            From geological site studies to bespoke bronze fittings, we oversee the full arc of architectural creation with rigorous precision and poetic continuity.
          </p>
        </div>

        {/* Sticky-Scroll Numbered Cards Stack */}
        <div className="relative space-y-12 md:space-y-16">
          {STUDIO_INFO.services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 * index,
                ease: [0.77, 0, 0.175, 1],
              }}
              style={{
                top: `${100 + index * 30}px`,
              }}
              className="sticky p-8 sm:p-12 md:p-16 bg-[#EBE7DF] border border-[#141414]/15 shadow-xl transition-all duration-300 rounded-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Left Number & Tag */}
                <div className="lg:col-span-3">
                  <span className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#A08975] block leading-none">
                    {service.number}
                  </span>
                  <span className="mt-4 inline-block px-3 py-1 bg-[#141414] text-[#F5F3EF] text-[10px] font-mono tracking-widest uppercase">
                    {service.tag}
                  </span>
                </div>

                {/* Middle Title & Description */}
                <div className="lg:col-span-5">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#141414] mb-4">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#595856] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right Deliverables List */}
                <div className="lg:col-span-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#141414]/10 lg:pl-10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C7D70] block mb-3">
                    Scope & Deliverables:
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-xs font-sans text-[#141414]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#A08975] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

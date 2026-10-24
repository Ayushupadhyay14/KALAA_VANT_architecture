"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/projects";
import { ArrowUpRight, Compass } from "lucide-react";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Works" },
    { id: "photography", label: "Visual Stories & Photography (@kalaa_vant)" },
    { id: "residential", label: "Residential Architecture" },
    { id: "heritage", label: "Heritage & Wada Revival" },
    { id: "sustainable", label: "Earth & Sustainable" },
    { id: "interiors", label: "Interiors & Penthouse" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full py-28 md:py-40 bg-[#F5F3EF] text-[#141414] px-6 md:px-12 lg:px-20 border-b border-[#141414]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#141414]/15 mb-14">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#8C7D70] mb-3">
              <span>02 / SELECTED PORTFOLIO</span>
              <span>•</span>
              <span className="text-[#A08975]">वास्तुकला संग्रह</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#141414] tracking-tight">
              Featured Architecture
            </h2>
          </div>

          <p className="max-w-md text-xs font-sans text-[#666360] leading-relaxed">
            Each commission is a site-specific dialogue between geology, natural light, and ancestral craftsmanship. Explore our built sanctuaries across the Western Ghats and coastal belt.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-sans tracking-[0.18em] uppercase transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#141414] text-[#F5F3EF]"
                  : "bg-transparent text-[#666360] hover:text-[#141414] border border-[#141414]/15 hover:border-[#141414]"
              }`}
              data-cursor="link"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid: Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Asymmetric layout logic for high-end editorial feel
              const isLarge = index % 3 === 0;
              const colSpan = isLarge ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4";
              const imageHeight = isLarge ? "h-[450px] sm:h-[580px] lg:h-[640px]" : "h-[400px] sm:h-[480px]";

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
                  className={`group flex flex-col ${colSpan}`}
                >
                  {/* Image Container with Custom Cursor Trigger & Hover Zoom */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative w-full overflow-hidden block bg-[#E8E4DC]"
                    data-cursor="project"
                    data-cursor-text="VIEW"
                  >
                    <div className={`relative w-full ${imageHeight} overflow-hidden`}>
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} - ${project.location}`}
                        fill
                        className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                      />
                      {/* Gentle shadow overlay on hover */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500" />

                      {/* Year badge pill */}
                      <div className="absolute top-5 left-5 px-3 py-1 bg-[#141414]/80 backdrop-blur-md text-[#F5F3EF] text-[10px] font-mono tracking-widest uppercase">
                        {project.year}
                      </div>

                      {/* Typology pill */}
                      <div className="absolute bottom-5 left-5 px-3 py-1 bg-[#F5F3EF]/90 backdrop-blur-md text-[#141414] text-[10px] font-sans tracking-widest uppercase">
                        {project.typology}
                      </div>

                      {/* Arrow indicator */}
                      <div className="absolute bottom-5 right-5 w-10 h-10 bg-[#141414] text-[#F5F3EF] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>

                  {/* Metadata Row */}
                  <div className="pt-5 flex flex-col gap-2">
                    <div className="flex items-baseline justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group-hover:text-[#A08975] transition-colors"
                        data-cursor="link"
                      >
                        <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#141414] tracking-tight">
                          {project.title}
                        </h3>
                      </Link>
                      <span className="font-serif text-sm text-[#A08975] hidden sm:inline">
                        {project.marathiTitle}
                      </span>
                    </div>

                    <p className="text-xs font-sans text-[#666360] line-clamp-2">
                      {project.shortDescription}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-[#141414]/10 text-[11px] font-mono text-[#8C7D70]">
                      <span className="flex items-center gap-1.5 truncate">
                        <Compass className="w-3 h-3 text-[#A08975] shrink-0" />
                        {project.location}
                      </span>
                      <span className="shrink-0">{project.area}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All / Archive Banner */}
        <div className="mt-20 p-8 md:p-12 bg-[#EBE7DF] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#141414]/10">
          <div>
            <h4 className="font-serif text-2xl md:text-3xl text-[#141414]">
              Interested in commissioning a bespoke residence or atelier?
            </h4>
            <p className="text-xs font-sans text-[#666360] mt-1">
              We take on a limited number of contextual projects each year to guarantee uncompromising craftsmanship.
            </p>
          </div>
          <Link
            href="/#contact"
            className="px-8 py-4 bg-[#141414] text-[#F5F3EF] text-xs font-sans tracking-[0.2em] uppercase hover:bg-[#A08975] transition-colors whitespace-nowrap"
            data-cursor="link"
          >
            Start Architectural Dialogue
          </Link>
        </div>
      </div>
    </section>
  );
}

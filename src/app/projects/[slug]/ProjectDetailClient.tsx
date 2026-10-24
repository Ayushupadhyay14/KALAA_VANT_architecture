"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project, PROJECTS } from "@/data/projects";
import Lightbox, { LightboxItem } from "@/components/Lightbox";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Calendar,
  Maximize2,
  Layers,
  Leaf,
  ZoomIn,
} from "lucide-react";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Next Project Lookup
  const nextProject =
    PROJECTS.find((p) => p.slug === project.nextSlug) || PROJECTS[0];

  // Convert drawings and gallery items for Lightbox
  const lightboxItems: LightboxItem[] = [
    ...project.drawings.map((d) => ({
      url: d.image,
      title: d.title,
      type: d.type,
      description: d.description,
    })),
    ...project.gallery.map((g) => ({
      url: g.url,
      title: project.title,
      type: "Photograph",
      description: g.caption,
    })),
  ];

  const openLightboxWithIndex = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <article className="min-h-screen bg-[#F5F3EF] text-[#141414] select-text">
      {/* Back to Portfolio Floating Bar */}
      <div className="fixed top-24 left-6 md:left-12 z-30">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F3EF]/90 backdrop-blur-md border border-[#141414]/15 text-[#141414] text-xs font-mono uppercase tracking-widest hover:bg-[#141414] hover:text-[#F5F3EF] transition-all shadow-md"
          data-cursor="link"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Works</span>
        </Link>
      </div>

      {/* Full-Bleed Parallax Hero Image */}
      <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden bg-[#141414]">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            quality={92}
            className="object-cover object-center brightness-[0.8] contrast-[1.05]"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-black/40" />

        {/* Hero Overlay Content */}
        <div className="absolute bottom-10 left-6 md:left-16 right-6 md:right-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 text-[#F5F3EF]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#B8A99A] uppercase mb-3">
              <span>{project.typology}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#F5F3EF]">
              {project.title}
            </h1>
            <p className="font-serif text-lg md:text-2xl text-[#C4BFB6] mt-2 italic">
              {project.marathiTitle}
            </p>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B8A99A] block">
              Site Coordinates
            </span>
            <span className="text-sm font-sans text-[#E0DCD3]">{project.location}</span>
          </div>
        </div>
      </section>

      {/* Project Metadata Matrix */}
      <section className="w-full border-b border-[#141414]/15 bg-[#EBE7DF] py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-xs">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7D70] block mb-1">
              Location
            </span>
            <p className="font-sans font-medium text-[#141414]">{project.location}</p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7D70] block mb-1">
              Built Area
            </span>
            <p className="font-sans font-medium text-[#141414]">{project.area}</p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7D70] block mb-1">
              Year of Completion
            </span>
            <p className="font-sans font-medium text-[#141414]">{project.year}</p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7D70] block mb-1">
              Client Typology
            </span>
            <p className="font-sans font-medium text-[#141414]">{project.client}</p>
          </div>

          <div className="col-span-2 md:col-span-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C7D70] block mb-1">
              Studio Scope
            </span>
            <p className="font-sans font-medium text-[#141414]">{project.role}</p>
          </div>
        </div>
      </section>

      {/* Editorial Concept & Architectural Narrative */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A08975] block mb-3">
              // CONCEPT & GENESIS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#141414] leading-tight">
              {project.tagline}
            </h2>
            <div className="mt-8 p-6 bg-[#EBE7DF]/60 border-l-2 border-[#141414] italic font-serif text-lg text-[#141414] leading-relaxed">
              &quot;{project.quote.text}&quot;
              <span className="block not-italic font-sans text-xs text-[#8C7D70] mt-3 font-normal">
                — {project.quote.author}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm md:text-base font-sans text-[#595856] leading-relaxed">
            <p className="text-lg md:text-xl font-serif text-[#141414] font-normal leading-relaxed">
              {project.shortDescription}
            </p>
            <p>{project.concept}</p>

            {/* Materiality & Sustainable Features Badges */}
            <div className="pt-8 border-t border-[#141414]/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#141414] mb-3">
                  <Layers className="w-4 h-4 text-[#A08975]" />
                  <span>Tactile Materiality</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#666360]">
                  {project.materiality.map((mat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A08975]" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#141414] mb-3">
                  <Leaf className="w-4 h-4 text-[#A08975]" />
                  <span>Climate Systems</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#666360]">
                  {project.sustainabilityFeatures.map((sus, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8A99A]" />
                      <span>{sus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Plans, Sections & Drawings Showcase */}
      {project.drawings && project.drawings.length > 0 && (
        <section className="w-full bg-[#141414] text-[#F5F3EF] py-20 px-6 md:px-16 border-y border-[#2B2A28]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between pb-6 border-b border-[#2B2A28] mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A08975] block mb-2">
                  // TECHNICAL CARTOGRAPHY
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-[#F5F3EF]">
                  Architectural Drawings & Tectonic Sections
                </h3>
              </div>
              <span className="text-xs font-mono text-[#8C7D70] hidden sm:inline">
                Click any drawing for expanded inspection
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.drawings.map((drawing, dIdx) => (
                <div
                  key={dIdx}
                  onClick={() => openLightboxWithIndex(dIdx)}
                  className="group cursor-pointer bg-[#1C1B19] p-6 border border-[#2B2A28] hover:border-[#A08975] transition-all"
                  data-cursor="explore"
                >
                  <div className="relative w-full h-[320px] overflow-hidden bg-[#111111] mb-4">
                    <Image
                      src={drawing.image}
                      alt={drawing.title}
                      fill
                      className="object-cover invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 backdrop-blur-md text-[#B8A99A] text-[9px] font-mono tracking-widest uppercase">
                      {drawing.type}
                    </div>
                    <div className="absolute bottom-3 right-3 p-2 bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-[#B8A99A]" />
                    </div>
                  </div>
                  <h4 className="font-serif text-xl text-[#F5F3EF] group-hover:text-[#A08975] transition-colors">
                    {drawing.title}
                  </h4>
                  <p className="text-xs font-sans text-[#A69E94] mt-1.5">
                    {drawing.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curated Photographic Gallery: Offset & Full-Width Layout */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-16">
        <div className="pb-8 border-b border-[#141414]/15 mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8C7D70] block mb-2">
            // VISUAL CHRONICLE
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#141414]">
            Spatial Gallery & Tactile Studies
          </h3>
        </div>

        <div className="space-y-16">
          {project.gallery.map((item, gIdx) => {
            const isWide = item.aspect === "wide";
            const lightboxOffset = project.drawings.length + gIdx;

            return (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className={`group cursor-pointer ${
                  isWide ? "w-full" : gIdx % 2 === 0 ? "max-w-4xl" : "max-w-4xl ml-auto"
                }`}
                onClick={() => openLightboxWithIndex(lightboxOffset)}
                data-cursor="project"
                data-cursor-text="VIEW"
              >
                <div
                  className={`relative w-full ${
                    isWide ? "h-[500px] md:h-[680px]" : "h-[450px] md:h-[580px]"
                  } overflow-hidden bg-[#E8E4DC]`}
                >
                  <Image
                    src={item.url}
                    alt={item.caption}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#8C7D70]">
                  <p className="font-sans text-xs text-[#595856] italic">
                    {item.caption}
                  </p>
                  <span>PLATE 0{gIdx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* "Next Project" Slide-In Footer */}
      <section className="w-full bg-[#141414] text-[#F5F3EF] border-t border-[#2B2A28] overflow-hidden">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block relative py-24 sm:py-32 px-6 md:px-16"
          data-cursor="project"
          data-cursor-text="NEXT"
        >
          {/* Subtle Background Hover Preview */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 ease-out">
            <Image
              src={nextProject.heroImage}
              alt={nextProject.title}
              fill
              className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A08975] block mb-3">
                NEXT COMMISSION // 0{PROJECTS.findIndex((p) => p.slug === nextProject.slug) + 1}
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#F5F3EF] group-hover:text-[#B8A99A] transition-colors">
                {nextProject.title}
              </h2>
              <p className="text-xs font-mono text-[#A69E94] mt-2">
                {nextProject.location} • {nextProject.year}
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm font-sans tracking-widest uppercase text-[#B8A99A] group-hover:text-[#F5F3EF] transition-colors">
              <span>Explore Project</span>
              <div className="w-12 h-12 rounded-full border border-[#B8A99A] flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % lightboxItems.length)
        }
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length
          )
        }
      />
    </article>
  );
}

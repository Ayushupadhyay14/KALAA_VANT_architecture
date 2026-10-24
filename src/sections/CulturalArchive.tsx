"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CULTURAL_STORIES, STUDIO_INFO } from "@/data/projects";
import { InstagramIcon } from "@/components/SocialIcons";
import { ArrowUpRight, Camera, Sparkles } from "lucide-react";

export default function CulturalArchive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="archive"
      ref={containerRef}
      className="relative w-full py-28 md:py-36 bg-[#1A1A1A] text-[#F5F3EF] px-6 md:px-12 lg:px-20 border-b border-[#2E2D2B]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#2E2D2B] mb-16">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#A08975] mb-3">
              <span>03 / VISUAL CHRONICLES & HERITAGE ARCHIVE</span>
              <span>•</span>
              <span className="text-[#B8A99A]">अभिलेख आणि सांस्कृतिक दस्तावेजीकरण</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F3EF] tracking-tight">
              Stories in Stone & Spirit
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={STUDIO_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#262523] hover:bg-[#B8A99A] text-[#F5F3EF] hover:text-[#141414] text-xs font-mono tracking-widest uppercase transition-all duration-300 border border-[#383734]"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#A08975]" />
              <span>Explore @kalaa_vant on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Introduction Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7">
            <p className="font-serif text-2xl sm:text-3xl font-light text-[#E0DCD3] leading-relaxed">
              At Studio Kalaa Vant, our architecture is inseparable from the living traditions, sacred geometry, and stone temple heritage of Maharashtra.
            </p>
          </div>
          <div className="lg:col-span-5 text-xs font-sans text-[#A69E94] leading-relaxed space-y-3">
            <p>
              Under the creative vision of founder <strong className="text-[#F5F3EF]">Akash Kapare</strong> (documented on <a href={STUDIO_INFO.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-[#B8A99A] underline hover:text-white">@kalaa_vant</a>), we conduct visual field research on ancient Hemadpanthi basalt temples, Wada timber crafts, the historic Wari pilgrimage, and festival scenography.
            </p>
            <p>
              These documentary studies directly inform the materiality, light modulation, and passive cooling of our modern residential and pavilion architecture.
            </p>
          </div>
        </div>

        {/* Cultural Stories Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CULTURAL_STORIES.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 + index * 0.15,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="group flex flex-col bg-[#141414] border border-[#2B2A28] overflow-hidden hover:border-[#A08975] transition-all duration-500"
            >
              {/* Image Frame with Hover Zoom */}
              <div className="relative w-full h-[320px] overflow-hidden bg-[#1E1D1B]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 backdrop-blur-md text-[#B8A99A] text-[9px] font-mono tracking-widest uppercase">
                  {story.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#C4BFB6]">
                  <span>{story.location}</span>
                  <span>{story.year}</span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-serif text-[#A08975] block mb-1">
                    {story.marathiTitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F3EF] group-hover:text-[#B8A99A] transition-colors mb-4">
                    {story.title}
                  </h3>
                  <p className="text-xs font-sans text-[#A69E94] leading-relaxed mb-6">
                    {story.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-[#262523] space-y-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#8C7D70] block">
                    Key Architectural Takeaways:
                  </span>
                  <ul className="space-y-1.5">
                    {story.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-[11px] font-sans text-[#C4BFB6] flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#A08975]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Feed Integration Strip */}
        <div className="mt-16 p-8 bg-[#21201E] border border-[#2B2A28] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#141414] border border-[#383734] flex items-center justify-center text-[#B8A99A]">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl text-[#F5F3EF]">
                  Kalaaवंत | कलाकार
                </span>
                <span className="text-xs font-mono text-[#A08975]">
                  ({STUDIO_INFO.contact.instagramHandle})
                </span>
              </div>
              <p className="text-xs font-sans text-[#A69E94] mt-0.5">
                Visual storytelling, architectural photography, and Maharashtra traditions on Instagram
              </p>
            </div>
          </div>

          <a
            href={STUDIO_INFO.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#F5F3EF] text-[#141414] hover:bg-[#B8A99A] transition-all font-mono text-xs tracking-widest uppercase flex items-center gap-2 whitespace-nowrap"
          >
            <span>Follow @kalaa_vant</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { STUDIO_INFO } from "@/data/projects";
import { Award, CheckCircle2, MapPin } from "lucide-react";

export default function AboutStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="studio"
      ref={containerRef}
      className="relative w-full py-28 md:py-40 bg-[#141414] text-[#F5F3EF] px-6 md:px-12 lg:px-20 border-b border-[#2B2A28]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#2B2A28] mb-16">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#A08975]">
            03 / THE ATELIER & LINEAGE
          </span>
          <span className="text-[11px] font-serif tracking-widest text-[#B8A99A]">
            कला आणि वंत संकल्पना
          </span>
        </div>

        {/* Studio Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-28">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A08975] block mb-4">
              // ATELIER ORIGINS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F3EF] leading-tight">
              An atelier rooted in the ancient etymology of mastery.
            </h2>
            <div className="mt-8 space-y-4 text-xs font-sans text-[#A69E94] leading-relaxed">
              <p>
                In the Sanskrit and Marathi lexicons, <strong className="text-[#F5F3EF]">Kalaa (कला)</strong> signifies art, divine proportion, and the 64 classical disciplines of creative expression. <strong className="text-[#F5F3EF]">Vant (वंत)</strong> denotes the one who embodies and masters that essence.
              </p>
              <p>
                Studio Kalaa Vant was established to rescue contemporary Indian architecture from homogeneous glass facades and disconnected international trends. We ground each structure in its indigenous climate, working side by side with traditional stonemasons, carpenters, and hydrologists.
              </p>
            </div>

            {/* Studio Locations */}
            <div className="mt-10 pt-8 border-t border-[#262523] space-y-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C7D70]">
                Active Atelier Offices:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {STUDIO_INFO.studios.map((s, idx) => (
                  <div key={idx} className="p-3 bg-[#1C1B19] border border-[#2B2A28]">
                    <div className="flex items-center gap-1.5 text-xs font-serif text-[#F5F3EF]">
                      <MapPin className="w-3 h-3 text-[#A08975]" />
                      <span>{s.city}</span>
                    </div>
                    <p className="text-[10px] font-mono text-[#8C7D70] mt-1">{s.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden border border-[#2B2A28]">
              <Image
                src="/images/kalaavant/artists-sculpting-circles.jpg"
                alt="Studio Kalaa Vant Architectural Atelier Workspace"
                fill
                className="object-cover object-center grayscale contrast-125"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141414]/90 backdrop-blur-md border border-[#2B2A28]">
                <p className="font-serif text-lg text-[#F5F3EF]">
                  &quot;Architecture is stone transformed into silent music.&quot;
                </p>
                <span className="text-[10px] font-mono tracking-widest text-[#A08975] uppercase mt-1 block">
                  Material Laboratory • Pune, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Principals Grid */}
        <div className="mb-32">
          <div className="flex items-end justify-between pb-6 border-b border-[#2B2A28] mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A08975] block mb-2">
                // ATELIER LEADERSHIP
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#F5F3EF]">
                The Principals
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8C7D70] hidden sm:inline">
              Pune • Mumbai Studios
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_INFO.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="group flex flex-col"
              >
                <div className="relative w-full h-[360px] overflow-hidden bg-[#1E1D1B] mb-5 border border-[#2B2A28]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h4 className="font-serif text-2xl text-[#F5F3EF] group-hover:text-[#A08975] transition-colors">
                  {member.name}
                </h4>
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#A08975] mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-xs font-sans text-[#A69E94] leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Milestones & Awards Timeline (Draws in as you scroll) */}
        <div>
          <div className="flex items-end justify-between pb-6 border-b border-[#2B2A28] mb-14">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A08975] block mb-2">
                // CHRONICLE OF EVOLUTION
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#F5F3EF]">
                Milestones & Recognitions
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#B8A99A]">
              <Award className="w-4 h-4" />
              <span>National & Asian Citations</span>
            </div>
          </div>

          <div className="relative pl-6 md:pl-10 border-l border-[#2B2A28] space-y-12">
            {STUDIO_INFO.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.12 }}
                className="relative group"
              >
                {/* Node marker */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#141414] border-2 border-[#A08975] group-hover:bg-[#A08975] transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                  <span className="font-mono text-sm tracking-widest text-[#A08975] font-semibold">
                    {item.year}
                  </span>
                  <h4 className="font-serif text-2xl text-[#F5F3EF] group-hover:text-[#B8A99A] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="max-w-2xl text-xs font-sans text-[#A69E94] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

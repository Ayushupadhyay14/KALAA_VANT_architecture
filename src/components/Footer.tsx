"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";
import { STUDIO_INFO } from "@/data/projects";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0D0D0D] text-[#F5F3EF] border-t border-[#242321] pt-20 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#242321]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A08975] block mb-2">
              STUDIO KALAA VANT • कलावंत
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-[#F5F3EF]">
              Silence In Stone.
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#B8A99A] hover:text-[#F5F3EF] transition-colors self-start md:self-end"
            data-cursor="link"
          >
            <span>Back To Top</span>
            <div className="w-8 h-8 rounded-full border border-[#B8A99A]/30 flex items-center justify-center group-hover:border-[#F5F3EF] transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-[#242321] text-xs font-sans text-[#A69E94]">
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#F5F3EF] mb-4">
              Atelier Index
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#projects" className="hover:text-[#F5F3EF] transition-colors">
                  Featured Works
                </Link>
              </li>
              <li>
                <Link href="/#archive" className="hover:text-[#F5F3EF] transition-colors">
                  Cultural Archive (@kalaa_vant)
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="hover:text-[#F5F3EF] transition-colors">
                  Studio Ethos
                </Link>
              </li>
              <li>
                <Link href="/#studio" className="hover:text-[#F5F3EF] transition-colors">
                  Principals & Team
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#F5F3EF] transition-colors">
                  Architectural Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#F5F3EF] transition-colors">
                  Direct Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#F5F3EF] mb-4">
              Locations
            </h4>
            <ul className="space-y-2.5 text-[#8C7D70]">
              <li>
                <span className="text-[#F5F3EF] block">Pune Atelier</span>
                Koregaon Park North Main Rd
              </li>
              <li>
                <span className="text-[#F5F3EF] block">Mumbai Studio</span>
                The Mill Compound, Lower Parel
              </li>
              <li>
                <span className="text-[#F5F3EF] block">Goa & Alibaug</span>
                Porvorim & Awas Coastal Labs
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#F5F3EF] mb-4">
              Media & Press
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={STUDIO_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#F5F3EF] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#A08975]" />
                  <span>Instagram {STUDIO_INFO.contact.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#F5F3EF] transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#A08975]" />
                  <span>LinkedIn Atelier</span>
                </a>
              </li>
              <li>
                <span className="text-[#736B63] block">Architectural Digest India (Feature 2024)</span>
              </li>
              <li>
                <span className="text-[#736B63] block">El Croquis South Asia (Monograph)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#F5F3EF] mb-4">
              Direct Contact
            </h4>
            <p className="text-[#A69E94] mb-2">{STUDIO_INFO.contact.email}</p>
            <p className="text-[#A69E94]">{STUDIO_INFO.contact.phone}</p>
            <div className="mt-6 p-3 bg-[#171614] border border-[#2B2A28]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#A08975] block">
                Commissions 2025/2026
              </span>
              <span className="text-[11px] text-[#C4BFB6]">Selective scheduling open for residential works.</span>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-widest text-[#6E665C]">
          <span>© 2026 STUDIO KALAA VANT. ALL RIGHTS RESERVED.</span>
          <span className="mt-2 sm:mt-0">CRAFTED FOR MINIMALIST TIMELESS ARCHITECTURE</span>
        </div>
      </div>
    </footer>
  );
}

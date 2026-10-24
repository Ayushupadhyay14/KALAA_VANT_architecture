"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

/**
 * Curated client artwork photos extracted from @kalaa_vant Instagram screenshots.
 * Used for the automatic scrolling photo strip and vivid background.
 */
export const CLIENT_ARTWORKS = [
  {
    id: 1,
    title: "Gilded Temple Arch Niche",
    category: "Sacred Pichwai",
    src: "/images/kalaavant/temple-arch-lakshmi.jpg",
  },
  {
    id: 2,
    title: "Royal Palace Palms & Lotuses",
    category: "Heritage Fresco",
    src: "/images/kalaavant/royal-palace-palms.jpg",
  },
  {
    id: 3,
    title: "Pichwai Tree of Life",
    category: "Hand-Painted Mural",
    src: "/images/kalaavant/tree-of-life-pichwai.jpg",
  },
  {
    id: 4,
    title: "Backlit Radha Krishna Alcove",
    category: "Illuminated Art",
    src: "/images/kalaavant/radha-krishna-illuminated.jpg",
  },
  {
    id: 5,
    title: "Tropical Birds of Paradise",
    category: "Botanical Mural",
    src: "/images/kalaavant/tropical-paradise-birds.jpg",
  },
  {
    id: 6,
    title: "3D Concentric Plaster Relief",
    category: "Sculptural Wall",
    src: "/images/kalaavant/artists-sculpting-circles.jpg",
  },
  {
    id: 7,
    title: "Zen Buddha Line Art Mural",
    category: "Contemporary Wall Art",
    src: "/images/kalaavant/buddha-line-mural.jpg",
  },
  {
    id: 8,
    title: "Pichwai Sacred Cows",
    category: "Gold Leaf Canvas",
    src: "/images/kalaavant/pichwai-cows-gold.jpg",
  },
  {
    id: 9,
    title: "Tropical Banana Foliage",
    category: "Living Wall Art",
    src: "/images/kalaavant/tropical-banana-mural.jpg",
  },
  {
    id: 10,
    title: "Sculpted Textured Plaster Panels",
    category: "Architectural Relief",
    src: "/images/kalaavant/textured-plaster-sculpture.jpg",
  },
  {
    id: 11,
    title: "Master Hand-Ink Detailing",
    category: "Atelier Craft",
    src: "/images/kalaavant/ink-drawing-hand-craft.jpg",
  },
  {
    id: 12,
    title: "Sacred Lotus Mandala Ceiling",
    category: "Ceiling & Dome Art",
    src: "/images/kalaavant/mandala-ceiling-art.jpg",
  },
];

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState<string>("/images/slideshow-1.jpg");

  // Duplicate list once to ensure 100% seamless infinite continuous scrolling
  const infiniteArtworks = [...CLIENT_ARTWORKS, ...CLIENT_ARTWORKS];

  return (
    <section
      aria-label="Kalaa Vant Hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#101012] text-[#F5F3EF] pt-20 sm:pt-24 pb-6 select-none"
    >
      {/* 
        1. Full-Screen Background Photo (Vivid, Bright & Auto-Panning Animation)
        - Clean and bright: no heavy black veil
        - Slow subtle pan animation for dynamic life
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full animate-photo-pan">
          <Image
            src={activePhoto}
            alt="Kalaa Vant Client Murals & Artworks"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center w-full h-full brightness-[0.88] contrast-[1.04] transition-all duration-1000"
          />
        </div>

        {/* Soft, minimal gradients: preserves photo clarity while keeping header/footer readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* 
        2. Clean, Minimal Header Title (No Clutter, No Paragraphs Blocking the Art)
      */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center px-6 pt-10 sm:pt-14 pointer-events-none">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] font-light text-[#F5F3EF] uppercase drop-shadow-md">
          KALAA VANT
        </h1>
        <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-sans tracking-[0.25em] uppercase text-[#E0DCD3] drop-shadow-sm font-light">
          Bespoke Murals • Sacred Indian Art • 3D Architectural Reliefs
        </p>
      </div>

      {/* 
        3. Automatic Scrolling Photos with Smooth Infinite Animation
        - Continuously and smoothly scrolls the client's actual artwork photos
        - Glides from right to left automatically with plain CSS
        - Pauses smoothly on hover so user can inspect any artwork
      */}
      <div className="relative z-20 w-full my-auto py-3 overflow-hidden">
        {/* Subtle hover instruction hint */}
        <div className="text-center mb-2.5">
          <span className="text-[9px] uppercase tracking-[0.28em] font-mono text-[#C4BFB6]/85 bg-black/45 px-3 py-0.5 rounded-full backdrop-blur-xs border border-white/10">
            • Auto-Scrolling Client Works • Hover to Pause •
          </span>
        </div>

        {/* Infinite Auto-Scrolling Track */}
        <div className="auto-scroll-track gap-3.5 sm:gap-5 px-4 cursor-pointer">
          {infiniteArtworks.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setActivePhoto(item.src)}
              className="group relative flex-shrink-0 w-40 sm:w-52 md:w-60 h-56 sm:h-68 md:h-76 rounded-sm overflow-hidden border border-[#B8A99A]/40 bg-[#141414] shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white hover:z-30"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 210px, 260px"
                className="object-cover object-center w-full h-full brightness-[0.95] group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
              />

              {/* Minimal caption reveal on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-mono text-[#B8A99A]">
                  {item.category}
                </span>
                <span className="text-xs sm:text-sm font-serif text-[#F5F3EF] truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 
        4. Clean Bottom Cue
      */}
      <div className="relative z-10 w-full flex items-center justify-between px-6 md:px-12 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C4BFB6]">
        <Link
          href="/#projects"
          className="hover:text-[#B8A99A] transition-colors flex items-center gap-1.5"
        >
          <span>Explore Selected Works</span>
          <ArrowDown className="w-3 h-3" />
        </Link>
        <span className="hidden sm:inline text-[#8F877C]">
          Mumbai • Pune • Goa
        </span>
        <a
          href="https://www.instagram.com/kalaa_vant"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#B8A99A] transition-colors"
        >
          @kalaa_vant ↗
        </a>
      </div>
    </section>
  );
}

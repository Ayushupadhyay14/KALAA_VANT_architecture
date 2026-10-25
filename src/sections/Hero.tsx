"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

/**
 * Curated client artwork photos extracted from @kalaa_vant Instagram screenshots.
 * Used for the automatic scrolling photo strip.
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
  // Duplicate list once to ensure 100% seamless infinite continuous scrolling
  const infiniteArtworks = [...CLIENT_ARTWORKS, ...CLIENT_ARTWORKS];

  return (
    <section
      aria-label="Kalaa Vant Hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-charcoal text-ivory pt-20 sm:pt-24 pb-6 select-none"
    >
      {/* 
        1. Clean, Minimal Title on a plain dark background so the artwork strip leads
      */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center px-6 pt-10 sm:pt-14 pointer-events-none">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] font-light text-ivory uppercase drop-shadow-md">
          KALAA VANT
        </h1>
        <p className="mt-2 text-[10px] sm:text-xs md:text-sm font-sans tracking-[0.25em] uppercase text-[#E0DCD3] drop-shadow-sm font-light">
          Bespoke Murals • Sacred Indian Art • 3D Architectural Reliefs
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
          <Link
            href="/#projects"
            className="px-5 py-2.5 bg-ivory text-charcoal hover:bg-gold transition-colors text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase"
          >
            View Work
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2.5 border border-white/40 text-ivory hover:bg-white hover:text-charcoal transition-colors text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase"
          >
            Commission a Piece
          </Link>
        </div>
      </div>

      {/* 
        2. Automatic Scrolling Photos with Smooth Infinite Animation
        - Continuously and smoothly scrolls the client's actual artwork photos
        - Pauses on hover, tap or keyboard focus; static and swipeable with reduced motion
      */}
      <div className="relative z-20 w-full my-auto py-3 overflow-hidden motion-reduce:overflow-x-auto">
        {/* Infinite Auto-Scrolling Track */}
        <div className="auto-scroll-track gap-3.5 sm:gap-5 px-4">
          {infiniteArtworks.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative flex-shrink-0 w-40 sm:w-52 md:w-60 h-56 sm:h-68 md:h-76 rounded-sm overflow-hidden border border-gold/40 bg-charcoal shadow-2xl transition-all duration-500 hover:scale-105 hover:border-white hover:z-30"
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
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-mono text-gold">
                  {item.category}
                </span>
                <span className="text-xs sm:text-sm font-serif text-ivory truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 
        3. Clean Bottom Cue
      */}
      <div className="relative z-10 w-full flex items-center justify-between px-6 md:px-12 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#C4BFB6]">
        <Link
          href="/#projects"
          className="hover:text-gold transition-colors flex items-center gap-1.5"
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
          className="hover:text-gold transition-colors"
        >
          @kalaa_vant ↗
        </a>
      </div>
    </section>
  );
}

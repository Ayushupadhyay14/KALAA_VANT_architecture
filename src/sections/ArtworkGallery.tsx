"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { STUDIO_INFO } from "@/data/projects";

type Discipline = "Murals" | "Paintings" | "Reliefs & Sculpture" | "Process";

/**
 * Real KALAVANT artwork photos only. Titles are plain descriptions of what each photo
 * shows; the owner has not yet confirmed formal titles, sizes, places or years, so none
 * are stated. Source files are ~456 px wide, so they are rendered at or below that width.
 */
const ARTWORKS: {
  src: string;
  title: string;
  discipline: Discipline;
  w: number;
  h: number;
}[] = [
  { src: "buddha-line-mural", title: "Buddha line-art mural", discipline: "Murals", w: 456, h: 609 },
  { src: "temple-arch-lakshmi", title: "Lakshmi in a painted arch niche", discipline: "Paintings", w: 456, h: 582 },
  { src: "tropical-banana-mural", title: "Tropical banana-leaf mural", discipline: "Murals", w: 456, h: 609 },
  { src: "concentric-circles-wall", title: "Concentric-circle relief wall", discipline: "Reliefs & Sculpture", w: 456, h: 606 },
  { src: "radha-krishna-illuminated", title: "Radha Krishna in a lit alcove", discipline: "Paintings", w: 456, h: 609 },
  { src: "kids-dreamy-balloon-mural", title: "Children's balloon-sky mural", discipline: "Murals", w: 456, h: 609 },
  { src: "tree-of-life-pichwai", title: "Tree of life mural", discipline: "Murals", w: 456, h: 582 },
  { src: "textured-plaster-sculpture", title: "Textured plaster relief panels", discipline: "Reliefs & Sculpture", w: 456, h: 609 },
  { src: "pichwai-cows-gold", title: "Pichwai circular paintings", discipline: "Paintings", w: 456, h: 582 },
  { src: "tropical-paradise-birds", title: "Tropical birds mural", discipline: "Murals", w: 456, h: 609 },
  { src: "artists-sculpting-circles", title: "Relief taking shape on site", discipline: "Process", w: 456, h: 609 },
  { src: "modern-portrait-shades", title: "Graphic portrait mural", discipline: "Murals", w: 456, h: 546 },
  { src: "pichwai-sacred-forest", title: "Forest canvas painting", discipline: "Paintings", w: 456, h: 609 },
  { src: "royal-palace-palms", title: "Palace arches and palms mural", discipline: "Murals", w: 456, h: 609 },
  { src: "ink-drawing-hand-craft", title: "Hand-inked detailing", discipline: "Process", w: 456, h: 438 },
  { src: "colorblock-landscape", title: "Colour-block landscape canvas", discipline: "Paintings", w: 456, h: 609 },
  { src: "mandala-ceiling-art", title: "Lotus mandala ceiling art", discipline: "Murals", w: 456, h: 609 },
  { src: "temple-monolith-craft", title: "Temple monolith installation", discipline: "Reliefs & Sculpture", w: 456, h: 612 },
  { src: "peacock-under-tree", title: "Framed peacock artwork", discipline: "Paintings", w: 456, h: 606 },
  { src: "sweet-therapy-mural", title: "Botanical line-art mural with lettering", discipline: "Murals", w: 456, h: 609 },
  { src: "minimalist-line-art", title: "Minimal line-art wall", discipline: "Murals", w: 456, h: 546 },
  { src: "play-area-dinosaur-art", title: "Play-area dinosaur mural", discipline: "Murals", w: 456, h: 609 },
  { src: "arch-shapes-earthy", title: "Arches and banana-leaf wall art", discipline: "Murals", w: 456, h: 546 },
];

const FILTERS: ("All" | Discipline)[] = ["All", "Murals", "Paintings", "Reliefs & Sculpture", "Process"];

export default function ArtworkGallery() {
  const [active, setActive] = useState<"All" | Discipline>("All");
  const shown = active === "All" ? ARTWORKS : ARTWORKS.filter((a) => a.discipline === active);

  return (
    <section
      id="projects"
      className="relative w-full py-28 md:py-40 bg-ivory text-charcoal px-6 md:px-12 lg:px-20 border-b border-charcoal/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-gold/60 mb-10">
          <div className="lg:col-span-8">
            <span className="block text-[11px] font-mono tracking-[0.3em] uppercase text-bronze-deep mb-4">
              02 / Selected Works
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.02]">
              Murals, paintings
              <br />
              <span className="italic text-bronze-deep">and sculpted walls.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end gap-5">
            <p className="text-sm font-sans text-charcoal-muted leading-relaxed">
              Work made by hand for homes, play spaces and commercial interiors. Every image here is
              from KALAVANT&apos;s own practice.
            </p>
            <Link
              href="/#contact"
              className="self-start inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase border-b border-charcoal pb-1 hover:text-bronze-deep hover:border-bronze-deep transition-colors"
            >
              Commission a piece <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Discipline filter */}
        <div role="group" aria-label="Filter artworks" className="flex gap-2 sm:gap-3 overflow-x-auto pb-5 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`px-4 sm:px-5 py-2.5 text-[11px] sm:text-xs font-sans tracking-[0.18em] uppercase whitespace-nowrap transition-colors border ${
                active === f
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "border-charcoal/20 text-charcoal-muted hover:text-charcoal hover:border-charcoal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry: natural aspect ratios, no cropping, never upscaled past ~460 px */}
        <ul key={active} className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 [&>li]:mb-4 sm:[&>li]:mb-6">
          {shown.map((a) => (
            <li key={a.src} className="break-inside-avoid group">
              <figure>
                <div className="overflow-hidden bg-ivory-deep">
                  <Image
                    src={`/images/kalaavant/${a.src}.jpg`}
                    alt={a.title}
                    width={a.w}
                    height={a.h}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-baseline justify-between gap-3">
                  <span className="font-serif text-base sm:text-lg leading-snug">{a.title}</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-bronze-deep shrink-0 hidden sm:inline">
                    {a.discipline}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-16 pt-8 border-t border-charcoal/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs font-sans text-charcoal-muted">
            More recent work is shared on Instagram.
          </p>
          <a
            href={STUDIO_INFO.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase hover:text-bronze-deep transition-colors"
          >
            @kalaa_vant <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

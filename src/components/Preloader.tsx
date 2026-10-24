"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Only run once per session if preferred, or allow smooth entry
    const hasLoaded = sessionStorage.getItem("kalaavant_loaded");
    if (hasLoaded) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem("kalaavant_loaded", "true");
            onComplete?.();
          }, 350);
          return 100;
        }
        // Easing counter
        const diff = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.1,
              ease: [0.77, 0, 0.175, 1], // user specified cubic-bezier
            },
          }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#141414] text-[#F5F3EF] px-8 py-10 md:px-16 md:py-14 select-none"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-[#A69C8E]">
            <span>Studio Kalaa Vant</span>
            <span>MUMBAI • PUNE • GOA</span>
            <span className="hidden sm:inline">18.9986° N, 72.8277° E</span>
          </div>

          {/* Center Architectural Monogram & Stroke Draw */}
          <div className="flex flex-col items-center justify-center my-auto">
            {/* Architectural SVG Monogram with stroke animation */}
            <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full stroke-[#F5F3EF]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer delicate circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  strokeWidth="0.8"
                  strokeDasharray="300"
                  initial={{ strokeDashoffset: 300 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />

                {/* Architectural square axis / Golden ratio */}
                <motion.rect
                  x="22"
                  y="22"
                  width="56"
                  height="56"
                  stroke="#B8A99A"
                  strokeWidth="0.6"
                  strokeDasharray="240"
                  initial={{ strokeDashoffset: 240 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
                />

                {/* Stylized K / V geometric lines */}
                <motion.path
                  d="M32 28V72M32 50L68 28M32 50L68 72"
                  strokeWidth="1.2"
                  strokeDasharray="200"
                  initial={{ strokeDashoffset: 200 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                />
              </svg>

              {/* Marathi Glyph Subtle Overlay */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute font-serif text-lg text-[#B8A99A] tracking-wider"
              >
                क
              </motion.span>
            </div>

            {/* Studio Name Staggered Reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
                className="font-serif text-3xl md:text-5xl tracking-[0.2em] font-light text-center text-[#F5F3EF]"
              >
                KALAA VANT
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-sans text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#B8A99A] text-center"
            >
              Atelier of Contextual Architecture
            </motion.p>
          </div>

          {/* Bottom Loading Progress Bar & Percentage */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#8F877C]">
              <span>INITIALIZING ATELIER SPACES</span>
              <span>{progress}%</span>
            </div>
            {/* Thin architectural hairline rule */}
            <div className="w-full h-[1px] bg-[#2E2D2B] overflow-hidden">
              <motion.div
                className="h-full bg-[#B8A99A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

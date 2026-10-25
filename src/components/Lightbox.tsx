"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export interface LightboxItem {
  url: string;
  title: string;
  type?: string;
  description?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[1000] bg-black/95 text-ivory flex flex-col justify-between p-4 sm:p-8 backdrop-blur-xl select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Architectural drawing and plan lightbox"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold">
              ARCHITECTURAL ARCHIVE
            </span>
            <span className="text-xs font-mono text-[#8C7D70]">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-ivory hover:text-gold transition-colors focus:outline-hidden"
            aria-label="Close Lightbox"
            data-cursor="close"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Center Display with Previous / Next Buttons */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          {/* Previous Arrow */}
          {items.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-6 z-20 p-3 bg-white/10 hover:bg-white/20 text-ivory backdrop-blur-md rounded-full transition-all focus:outline-hidden"
              aria-label="Previous drawing"
              data-cursor="link"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh]"
          >
            <Image
              src={currentItem.url}
              alt={currentItem.title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>

          {/* Next Arrow */}
          {items.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-2 sm:right-6 z-20 p-3 bg-white/10 hover:bg-white/20 text-ivory backdrop-blur-md rounded-full transition-all focus:outline-hidden"
              aria-label="Next drawing"
              data-cursor="link"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Footer Metadata */}
        <div className="max-w-4xl mx-auto w-full text-center z-10 pt-2 border-t border-white/10">
          <div className="flex items-center justify-center gap-3">
            {currentItem.type && (
              <span className="px-2 py-0.5 bg-gold text-black text-[9px] font-mono tracking-widest uppercase">
                {currentItem.type}
              </span>
            )}
            <h3 className="font-serif text-lg sm:text-xl text-ivory">
              {currentItem.title}
            </h3>
          </div>
          {currentItem.description && (
            <p className="mt-1 text-xs font-sans text-[#A69E94] max-w-xl mx-auto">
              {currentItem.description}
            </p>
          )}
          <span className="text-[10px] font-mono text-[#666] tracking-widest mt-2 block">
            Use Left/Right arrows to navigate • Esc to exit
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

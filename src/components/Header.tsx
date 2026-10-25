"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { STUDIO_INFO, PROJECTS } from "@/data/projects";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Monitor Scroll for Header shrink and contrast
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Archive", href: "/#archive" },
    { name: "Philosophy", href: "/#philosophy" },
    { name: "The Studio", href: "/#studio" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b text-ivory ${
          isScrolled
            ? "py-2.5 sm:py-3 bg-charcoal/95 backdrop-blur-md border-gold/20"
            : "py-3 sm:py-3.5 bg-charcoal/60 backdrop-blur-xs border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo & Identity - Smaller & Refined */}
          <Link
            href="/"
            onClick={(e) => {
              // Already on the home page: Next.js won't scroll, so go to the top ourselves.
              if (pathname === "/") {
                e.preventDefault();
                window.history.replaceState(null, "", "/");
                window.scrollTo({ top: 0 });
              }
            }}
            className="group flex flex-col focus:outline-hidden"
            data-cursor="link"
          >
            <div className="flex items-baseline gap-1.5">
              <span
                className={`font-serif text-lg sm:text-xl tracking-[0.18em] font-light transition-colors text-ivory`}
              >
                KALAA VANT
              </span>
              <span
                className={`text-[9px] tracking-wider font-serif uppercase hidden sm:inline text-gold`}
              >
                / {STUDIO_INFO.nativeName}
              </span>
            </div>
            <span
              className={`text-[8px] tracking-[0.24em] uppercase font-sans -mt-0.5 transition-colors text-[#A69C8E]`}
            >
              Art & Murals Atelier
            </span>
          </Link>

          {/* Desktop Navigation - Compact & Elegant */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] tracking-[0.18em] uppercase font-sans transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 text-[#E8E5DF] hover:text-gold after:bg-gold`}
                data-cursor="link"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Section: Inquiry Button / Menu Trigger */}
          <div className="flex items-center gap-4 sm:gap-5">
            <Link
              href="/#contact"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-sans tracking-[0.18em] uppercase transition-all duration-300 rounded-none border border-white/30 text-ivory hover:bg-white hover:text-charcoal backdrop-blur-xs`}
              data-cursor="link"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            {/* Menu Toggle Trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex items-center gap-1.5 p-1.5 hover:opacity-75 transition-colors focus:outline-hidden text-ivory`}
              aria-label="Toggle Navigation Menu"
              data-cursor="link"
            >
              <span className="text-[10px] uppercase tracking-[0.18em] font-sans hidden sm:inline">
                {menuOpen ? "Close" : "Index"}
              </span>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-charcoal text-ivory flex flex-col justify-between pt-32 pb-12 px-8 md:px-16 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto">
              {/* Primary Links */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="text-[10px] tracking-[0.3em] font-mono uppercase text-[#A08975] mb-2">
                  // NAVIGATION INDEX
                </span>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.08,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 font-serif text-4xl sm:text-5xl md:text-6xl text-ivory hover:text-gold transition-colors"
                      data-cursor="link"
                    >
                      <span className="text-xs font-mono tracking-widest text-[#8F877C] group-hover:text-gold">
                        0{index + 1}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Secondary Column: Featured Works & Studio Details */}
              <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#2B2A28] pt-8 lg:pt-0 lg:pl-12">
                <div>
                  <span className="text-[10px] tracking-[0.3em] font-mono uppercase text-[#A08975] block mb-4">
                    // SELECTED COMMISSIONS
                  </span>
                  <div className="flex flex-col gap-3">
                    {PROJECTS.slice(0, 4).map((p) => (
                      <Link
                        key={p.id}
                        href={`/projects/${p.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-2 border-b border-[#242321] text-sm text-[#D6D2CA] hover:text-ivory transition-colors"
                        data-cursor="project"
                        data-cursor-text="VIEW"
                      >
                        <span className="font-serif text-lg tracking-wide group-hover:translate-x-1 transition-transform">
                          {p.title}
                        </span>
                        <span className="text-xs font-mono text-[#8F877C]">{p.year}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 text-xs font-sans text-[#A69E94]">
                  <div>
                    <p className="font-medium text-ivory">Atelier Inquiries</p>
                    <a
                      href={`mailto:${STUDIO_INFO.contact.email}`}
                      className="hover:text-gold transition-colors"
                    >
                      {STUDIO_INFO.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-6 pt-2">
                    <a
                      href={STUDIO_INFO.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ivory tracking-widest uppercase transition-colors"
                    >
                      Instagram ({STUDIO_INFO.contact.instagramHandle})
                    </a>
                    <a
                      href={STUDIO_INFO.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ivory tracking-widest uppercase transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="max-w-7xl mx-auto w-full pt-8 border-t border-[#2B2A28] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-widest text-[#7C756B]">
              <span>© 2026 STUDIO KALAA VANT. ALL RIGHTS RESERVED.</span>
              <span className="mt-2 sm:mt-0">MUMBAI • PUNE • GOA • ALIBAUG</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

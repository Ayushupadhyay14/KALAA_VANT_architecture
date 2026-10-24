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
  const [mumbaiTime, setMumbaiTime] = useState("");
  const pathname = usePathname();

  // Update IST Live Clock
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setMumbaiTime(new Intl.DateTimeFormat("en-GB", options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 sm:py-3 bg-[#F5F3EF]/95 backdrop-blur-md border-b border-[#141414]/10 shadow-xs text-[#141414]"
            : "py-3 sm:py-3.5 bg-black/35 backdrop-blur-xs border-b border-white/10 text-[#F5F3EF]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo & Identity - Smaller & Refined */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-hidden"
            data-cursor="link"
          >
            <div className="flex items-baseline gap-1.5">
              <span
                className={`font-serif text-lg sm:text-xl tracking-[0.18em] font-light transition-colors ${
                  isScrolled ? "text-[#141414]" : "text-[#F5F3EF]"
                }`}
              >
                KALAA VANT
              </span>
              <span
                className={`text-[9px] tracking-wider font-serif uppercase hidden sm:inline ${
                  isScrolled ? "text-[#A08975]" : "text-[#B8A99A]"
                }`}
              >
                / {STUDIO_INFO.nativeName}
              </span>
            </div>
            <span
              className={`text-[8px] tracking-[0.24em] uppercase font-sans -mt-0.5 transition-colors ${
                isScrolled ? "text-[#666360]" : "text-[#A69C8E]"
              }`}
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
                className={`text-[11px] tracking-[0.18em] uppercase font-sans transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled
                    ? "text-[#141414] hover:text-[#A08975] after:bg-[#141414]"
                    : "text-[#E8E5DF] hover:text-[#B8A99A] after:bg-[#B8A99A]"
                }`}
                data-cursor="link"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Section: Time & Inquiry Button / Menu Trigger */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="hidden xl:flex flex-col text-right">
              <span
                className={`text-[9px] font-mono tracking-widest ${
                  isScrolled ? "text-[#8C7D70]" : "text-[#A69C8E]"
                }`}
              >
                MUMBAI (IST)
              </span>
              <span
                className={`text-[11px] font-mono tracking-wider ${
                  isScrolled ? "text-[#141414]" : "text-[#F5F3EF]"
                }`}
              >
                {mumbaiTime || "18:30:00"}
              </span>
            </div>

            <Link
              href="/#contact"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-sans tracking-[0.18em] uppercase transition-all duration-300 rounded-none border ${
                isScrolled
                  ? "border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#F5F3EF]"
                  : "border-white/30 text-[#F5F3EF] hover:bg-white hover:text-[#141414] backdrop-blur-xs"
              }`}
              data-cursor="link"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            {/* Menu Toggle Trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex items-center gap-1.5 p-1.5 hover:opacity-75 transition-colors focus:outline-hidden ${
                isScrolled ? "text-[#141414]" : "text-[#F5F3EF]"
              }`}
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
            className="fixed inset-0 z-40 bg-[#141414] text-[#F5F3EF] flex flex-col justify-between pt-32 pb-12 px-8 md:px-16 overflow-y-auto"
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
                      className="group flex items-baseline gap-4 font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F3EF] hover:text-[#B8A99A] transition-colors"
                      data-cursor="link"
                    >
                      <span className="text-xs font-mono tracking-widest text-[#8F877C] group-hover:text-[#B8A99A]">
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
                        className="group flex items-center justify-between py-2 border-b border-[#242321] text-sm text-[#D6D2CA] hover:text-[#F5F3EF] transition-colors"
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
                    <p className="font-medium text-[#F5F3EF]">Atelier Inquiries</p>
                    <a
                      href={`mailto:${STUDIO_INFO.contact.email}`}
                      className="hover:text-[#B8A99A] transition-colors"
                    >
                      {STUDIO_INFO.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-6 pt-2">
                    <a
                      href={STUDIO_INFO.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F5F3EF] tracking-widest uppercase transition-colors"
                    >
                      Instagram ({STUDIO_INFO.contact.instagramHandle})
                    </a>
                    <a
                      href={STUDIO_INFO.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F5F3EF] tracking-widest uppercase transition-colors"
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

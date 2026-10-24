"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { STUDIO_INFO } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential Villa",
    location: "",
    budget: "₹5 Cr - ₹15 Cr ($600K - $1.8M)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-40 bg-[#141414] text-[#F5F3EF] px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#2B2A28] mb-16">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#A08975]">
            05 / INQUIRY & CORRESPONDENCE
          </span>
          <span className="text-[11px] font-serif tracking-widest text-[#B8A99A]">
            संपर्क आणि प्रकल्प संवाद
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Direct Coordinates & Studio Locations */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A08975] block mb-3">
                // COMMISSION A WORK
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F5F3EF] leading-tight mb-6">
                Let us begin an architectural conversation.
              </h2>
              <p className="text-xs font-sans text-[#A69E94] leading-relaxed mb-10">
                Whether you envision a mountain sanctuary embedded in basalt or an urban penthouse overlooking the sea, our atelier is ready to listen.
              </p>

              {/* Contact Directs */}
              <div className="space-y-6 pt-4 border-t border-[#2B2A28]">
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-[#A08975] mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] block">
                      General & Press Inquiries
                    </span>
                    <a
                      href={`mailto:${STUDIO_INFO.contact.email}`}
                      className="text-sm font-sans text-[#F5F3EF] hover:text-[#B8A99A] transition-colors"
                    >
                      {STUDIO_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-[#A08975] mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] block">
                      Direct Studio Telephone
                    </span>
                    <a
                      href={`tel:${STUDIO_INFO.contact.phone}`}
                      className="text-sm font-sans text-[#F5F3EF] hover:text-[#B8A99A] transition-colors"
                    >
                      {STUDIO_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Studios */}
              <div className="mt-10 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] block">
                  Studio Locations
                </span>
                {STUDIO_INFO.studios.map((st, i) => (
                  <div key={i} className="p-3 bg-[#1C1B19] border border-[#2B2A28] flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#A08975] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-serif text-[#F5F3EF]">{st.city} — {st.role}</p>
                      <p className="text-[11px] font-sans text-[#A69E94]">{st.address}</p>
                      <span className="text-[9px] font-mono text-[#8C7D70]">{st.coordinates}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10 border-t border-[#2B2A28] mt-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] block mb-4">
                Follow The Atelier
              </span>
              <div className="flex items-center gap-6">
                <a
                  href={STUDIO_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#F5F3EF] hover:text-[#B8A99A] transition-colors"
                  data-cursor="link"
                >
                  <InstagramIcon className="w-4 h-4 text-[#A08975]" />
                  <span>Instagram ({STUDIO_INFO.contact.instagramHandle})</span>
                </a>
                <a
                  href={STUDIO_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#F5F3EF] hover:text-[#B8A99A] transition-colors"
                  data-cursor="link"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#A08975]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Editorial Inquiry Form */}
          <div className="lg:col-span-7 bg-[#1C1B19] p-8 sm:p-12 border border-[#2B2A28]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#B8A99A]/20 flex items-center justify-center text-[#B8A99A]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#F5F3EF]">
                  Inquiry Received
                </h3>
                <p className="text-xs font-sans text-[#A69E94] max-w-md leading-relaxed">
                  Thank you for reaching out to Studio Kalaa Vant. A partner architect will review your project parameters and respond within two business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-[#2B2A28] text-xs font-mono uppercase tracking-widest text-[#B8A99A] hover:bg-[#2B2A28] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#A08975] block mb-2">
                  // PROJECT PARAMETERS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Ananya Deshmukh"
                      className="w-full bg-[#141414] border border-[#2B2A28] px-4 py-3 text-xs text-[#F5F3EF] focus:border-[#B8A99A] focus:outline-hidden transition-colors rounded-none placeholder:text-[#524F4B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full bg-[#141414] border border-[#2B2A28] px-4 py-3 text-xs text-[#F5F3EF] focus:border-[#B8A99A] focus:outline-hidden transition-colors rounded-none placeholder:text-[#524F4B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] mb-2">
                      Project Typology
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full bg-[#141414] border border-[#2B2A28] px-4 py-3 text-xs text-[#F5F3EF] focus:border-[#B8A99A] focus:outline-hidden transition-colors rounded-none"
                    >
                      <option value="Residential Villa">Bespoke Residential Villa</option>
                      <option value="Coastal Estate">Coastal / Beach Retreat (Alibaug/Goa)</option>
                      <option value="Minimalist Penthouse">Urban Penthouse & Interiors</option>
                      <option value="Sustainable Earth Compound">Earth / Off-grid Sustainable Compound</option>
                      <option value="Cultural Atelier / Commercial">Atelier / Commercial Pavilion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] mb-2">
                      Site Location / City
                    </label>
                    <input
                      type="text"
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      placeholder="e.g. Alibaug / Lonavala / Pune / Mumbai"
                      className="w-full bg-[#141414] border border-[#2B2A28] px-4 py-3 text-xs text-[#F5F3EF] focus:border-[#B8A99A] focus:outline-hidden transition-colors rounded-none placeholder:text-[#524F4B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] mb-2">
                    Estimated Construction Budget
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full bg-[#141414] border border-[#2B2A28] px-4 py-3 text-xs text-[#F5F3EF] focus:border-[#B8A99A] focus:outline-hidden transition-colors rounded-none"
                  >
                    <option value="₹3 Cr - ₹7 Cr">₹3 Cr – ₹7 Cr (~$350K – $850K)</option>
                    <option value="₹7 Cr - ₹15 Cr">₹7 Cr – ₹15 Cr (~$850K – $1.8M)</option>
                    <option value="₹15 Cr+">₹15 Cr+ (~$1.8M+)</option>
                    <option value="Undetermined">To Be Discussed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] mb-2">
                    Project Vision & Spatial Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about the site topography, your lifestyle aspirations, family requirements, and preferred timeline..."
                    className="w-full bg-[#141414] border border-[#2B2A28] px-4 py-3 text-xs text-[#F5F3EF] focus:border-[#B8A99A] focus:outline-hidden transition-colors rounded-none placeholder:text-[#524F4B]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#F5F3EF] text-[#141414] hover:bg-[#B8A99A] transition-all duration-300 font-sans text-xs tracking-[0.25em] uppercase font-medium flex items-center justify-center gap-2 rounded-none disabled:opacity-50"
                  data-cursor="link"
                >
                  {loading ? (
                    <span>Transmitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Architectural Inquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

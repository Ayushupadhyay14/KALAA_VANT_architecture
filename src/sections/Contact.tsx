"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SHOW_UNVERIFIED, STUDIO_INFO } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";

// Recipient is configuration, not code. Set NEXT_PUBLIC_INQUIRY_EMAIL (e.g. in .env.local)
// to the studio's confirmed inbox. When unset, nothing is sent and visitors are told so.
const INQUIRY_EMAIL = process.env.NEXT_PUBLIC_INQUIRY_EMAIL?.trim() ?? "";

const PROJECT_TYPES = [
  "Painting",
  "Mural",
  "Sculpture",
  "Mixed media",
  "Commercial art commission",
  "Not sure yet",
];

const FIELD_CLASS =
  "w-full bg-charcoal border border-[#2B2A28] px-4 py-3 text-xs text-ivory focus:border-gold focus:outline-hidden transition-colors rounded-none placeholder:text-[#524F4B]";
const LABEL_CLASS = "block text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] mb-2";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    location: "",
    dimensions: "",
    timeline: "",
    budget: "",
    referenceLink: "",
    message: "",
  });

  // null = form showing; "mail" = email app opened; "manual" = no recipient configured
  const [outcome, setOutcome] = useState<null | "mail" | "manual">(null);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);

  const buildBrief = () =>
    [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Project type: ${formState.projectType}`,
      `Location: ${formState.location || "-"}`,
      `Approximate dimensions: ${formState.dimensions || "-"}`,
      `Timeline: ${formState.timeline || "-"}`,
      `Budget: ${formState.budget || "-"}`,
      `Reference link: ${formState.referenceLink || "-"}`,
      "",
      formState.message,
    ].join("\n");

  // No backend exists: with a configured recipient, open the visitor's email app with the
  // brief prefilled; without one, show the brief to copy. Never claim it was delivered.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildBrief();
    setBrief(text);
    setCopied(false);
    if (INQUIRY_EMAIL) {
      const subject = `Inquiry from ${formState.name}`;
      window.location.href = `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      setOutcome("mail");
    } else {
      setOutcome("manual");
    }
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-40 bg-charcoal text-ivory px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#2B2A28] mb-16">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#A08975]">
            05 / INQUIRY & CORRESPONDENCE
          </span>
          <span className="text-[11px] font-serif tracking-widest text-gold">
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
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-ivory leading-tight mb-6">
                Let us begin a conversation about your space.
              </h2>
              <p className="text-xs font-sans text-[#A69E94] leading-relaxed mb-10">
                Tell us about the wall, room or idea you have in mind. Use the form, or message us on Instagram.
              </p>

              {/* Contact Directs */}
              {SHOW_UNVERIFIED && (
<div className="space-y-6 pt-4 border-t border-[#2B2A28]">
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-[#A08975] mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] block">
                      General & Press Inquiries
                    </span>
                    <a
                      href={`mailto:${STUDIO_INFO.contact.email}`}
                      className="text-sm font-sans text-ivory hover:text-gold transition-colors"
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
                      className="text-sm font-sans text-ivory hover:text-gold transition-colors"
                    >
                      {STUDIO_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
)}

              {/* Studios */}
              {SHOW_UNVERIFIED && (
<div className="mt-10 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7D70] block">
                  Studio Locations
                </span>
                {STUDIO_INFO.studios.map((st, i) => (
                  <div key={i} className="p-3 bg-[#1C1B19] border border-[#2B2A28] flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#A08975] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-serif text-ivory">{st.city} — {st.role}</p>
                      <p className="text-[11px] font-sans text-[#A69E94]">{st.address}</p>
                      <span className="text-[9px] font-mono text-[#8C7D70]">{st.coordinates}</span>
                    </div>
                  </div>
                ))}
              </div>
)}
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
                  className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-ivory hover:text-gold transition-colors"
                  data-cursor="link"
                >
                  <InstagramIcon className="w-4 h-4 text-[#A08975]" />
                  <span>Instagram ({STUDIO_INFO.contact.instagramHandle})</span>
                </a>
                {SHOW_UNVERIFIED && (
<a
                  href={STUDIO_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-ivory hover:text-gold transition-colors"
                  data-cursor="link"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#A08975]" />
                  <span>LinkedIn</span>
                </a>
)}
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Editorial Inquiry Form */}
          <div className="lg:col-span-7 bg-[#1C1B19] p-8 sm:p-12 border border-[#2B2A28]">
            {outcome ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-ivory">
                  {outcome === "mail" ? "Almost There" : "Not Sent Yet"}
                </h3>
                {outcome === "mail" ? (
                  <p className="text-xs font-sans text-[#A69E94] max-w-md leading-relaxed">
                    Your email app should now open with your inquiry ready to send. Please press send there. Nothing is delivered until you do.
                  </p>
                ) : (
                  <>
                    <p className="text-xs font-sans text-[#A69E94] max-w-md leading-relaxed">
                      Online sending is not set up yet, so your inquiry has not been delivered. Copy your brief below and send it to us by direct message on Instagram.
                    </p>
                    <textarea
                      readOnly
                      value={brief}
                      rows={8}
                      className={`${FIELD_CLASS} max-w-md text-left`}
                      aria-label="Your inquiry brief"
                    />
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={copyBrief}
                        className="px-5 py-2.5 bg-ivory text-charcoal hover:bg-gold transition-colors text-xs font-mono uppercase tracking-widest"
                      >
                        {copied ? "Copied" : "Copy Brief"}
                      </button>
                      <a
                        href={STUDIO_INFO.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 border border-[#2B2A28] text-gold hover:bg-[#2B2A28] transition-colors text-xs font-mono uppercase tracking-widest"
                      >
                        Open Instagram
                      </a>
                    </div>
                  </>
                )}
                <button
                  onClick={() => setOutcome(null)}
                  className="mt-6 px-6 py-2.5 border border-[#2B2A28] text-xs font-mono uppercase tracking-widest text-gold hover:bg-[#2B2A28] transition-colors"
                >
                  Back to Form
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
                      className="w-full bg-charcoal border border-[#2B2A28] px-4 py-3 text-xs text-ivory focus:border-gold focus:outline-hidden transition-colors rounded-none placeholder:text-[#524F4B]"
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
                      className="w-full bg-charcoal border border-[#2B2A28] px-4 py-3 text-xs text-ivory focus:border-gold focus:outline-hidden transition-colors rounded-none placeholder:text-[#524F4B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="inq-type" className={LABEL_CLASS}>
                      Project Type
                    </label>
                    <select
                      id="inq-type"
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className={FIELD_CLASS}
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inq-location" className={LABEL_CLASS}>
                      Location / City (optional)
                    </label>
                    <input
                      id="inq-location"
                      type="text"
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      placeholder="Where will the work be placed?"
                      className={FIELD_CLASS}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="inq-dimensions" className={LABEL_CLASS}>
                      Approximate Dimensions (optional)
                    </label>
                    <input
                      id="inq-dimensions"
                      type="text"
                      value={formState.dimensions}
                      onChange={(e) => setFormState({ ...formState, dimensions: e.target.value })}
                      placeholder="e.g. wall 10 ft × 8 ft"
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div>
                    <label htmlFor="inq-timeline" className={LABEL_CLASS}>
                      Timeline (optional)
                    </label>
                    <input
                      id="inq-timeline"
                      type="text"
                      value={formState.timeline}
                      onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      placeholder="e.g. within 2 months"
                      className={FIELD_CLASS}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="inq-budget" className={LABEL_CLASS}>
                      Budget (optional)
                    </label>
                    <input
                      id="inq-budget"
                      type="text"
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      placeholder="Leave blank to discuss"
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div>
                    <label htmlFor="inq-reference" className={LABEL_CLASS}>
                      Reference Link (optional)
                    </label>
                    <input
                      id="inq-reference"
                      type="url"
                      value={formState.referenceLink}
                      onChange={(e) => setFormState({ ...formState, referenceLink: e.target.value })}
                      placeholder="Link to inspiration images"
                      className={FIELD_CLASS}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inq-message" className={LABEL_CLASS}>
                    About Your Project *
                  </label>
                  <textarea
                    id="inq-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe what you have in mind: the space, style, colours or themes you like."
                    className={FIELD_CLASS}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-ivory text-charcoal hover:bg-gold transition-all duration-300 font-sans text-xs tracking-[0.25em] uppercase font-medium flex items-center justify-center gap-2 rounded-none"
                  data-cursor="link"
                >
                  <span>Send Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

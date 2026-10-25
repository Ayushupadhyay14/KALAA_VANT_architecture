# Studio Kalaa Vant (कलावंत) — Architectural Portfolio

> **"Architecture born from the land, sculpted by light, enduring in silence."**

A premium, fully animated editorial portfolio website crafted for **Studio Kalaa Vant** (`@kalaa_vant`), an avant-garde architectural and spatial design atelier based in **Mumbai, Pune, and Goa**. The studio specializes in bespoke residential villas, contextual basalt & laterite architecture, minimalist sanctuaries, and sustainable earth-responsive dwellings.

---

## 🏛️ Design System & Philosophy

- **Tone & Aesthetic**: Minimal, refined, editorial, with generous whitespace, monumental typography, and slow, deliberate motion.
- **Palette**:
  - Background: Warm Off-White Stone (`#F5F3EF`)
  - Deep Charcoal: (`#141414`)
  - Warm Stone Accent: (`#B8A99A`)
  - Bronze & Mineral Highlights: (`#A08975`, `#8C7D70`)
- **Typography**:
  - Headings: **Cormorant Garamond** (refined classical serif)
  - Body & Metadata: **Plus Jakarta Sans** (clean, modernist sans-serif)
  - Code & Coordinates: Monospace tracking
- **Custom Motion & Micro-interactions**:
  - **Lenis**: Momentum smooth scrolling synchronized with GSAP ScrollTrigger
  - **GSAP & ScrollTrigger**: Scroll-linked parallax, sticky-stack cards, line-by-line reveals
  - **Standard Browser Cursor**: Clean, responsive native browser cursor with instant pointer cues over interactive elements for optimal accessibility.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **Library**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Animation Engines**: [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Minimal SVG icon set & Lucide React
- **Optimization**: `next/image` with WebP/AVIF formats and responsive sizes

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.17+` or `v20+` / `v22+`
- npm (or pnpm / yarn / bun)

### Installation

```bash
# 1. Clone or navigate to the repository
cd KALAA_VANT_architecture

# 2. Install all dependencies
npm install

# 3. Launch local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the animated portfolio.

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

---

## 📂 Project Architecture

```
KALAA_VANT_architecture/
├── public/
│   └── images/                     # High-definition architectural photographs
│       ├── hero-facade.jpg
│       ├── sahyadri-cliff.jpg
│       └── alibaug-courtyard.jpg
├── src/
│   ├── app/
│   │   ├── globals.css             # Theme tokens, font variables, and Lenis CSS
│   │   ├── layout.tsx              # Root layout, Google fonts, JSON-LD Schema
│   │   ├── page.tsx                # Homepage assembling all animated sections
│   │   ├── robots.ts               # Search engine robots.txt
│   │   ├── sitemap.ts              # Automatic XML sitemap generation
│   │   └── projects/
│   │       └── [slug]/
│   │           ├── page.tsx        # Dynamic Server Component with SEO metadata
│   │           └── ProjectDetailClient.tsx # Parallax hero, lightbox, next footer
│   ├── components/
│   │   ├── Footer.tsx              # Editorial colophon and coordinates
│   │   ├── Header.tsx              # Fixed blur header and full-screen overlay menu
│   │   ├── Lightbox.tsx            # Fullscreen modal for architectural drawings
│   │   ├── Preloader.tsx           # 1.5-2s stroke-draw monogram & curtain wipe
│   │   ├── SmoothScroll.tsx        # Lenis smooth scrolling provider
│   │   └── SocialIcons.tsx         # SVG icons (Instagram, LinkedIn, Behance)
│   ├── data/
│   │   └── projects.ts             # ⭐ SINGLE SOURCE OF TRUTH FOR ALL DATA
│   └── sections/
│       ├── AboutStudio.tsx         # Atelier lineage, team bios, milestone timeline
│       ├── Contact.tsx             # Inquiry form, studio offices, Instagram link
│       ├── FeaturedProjects.tsx    # Asymmetric editorial grid with category filter
│       ├── Hero.tsx                # Ken Burns zoom, letter-by-letter reveal
│       ├── Philosophy.tsx          # Line-by-line reveal of the studio manifesto
│       └── Services.tsx            # Numbered sticky-scroll stacked cards
└── package.json
```

---

## 🛠️ How to Add a New Project

Adding a new architectural project requires editing **only one file**: `src/data/projects.ts`. The website will automatically generate the project detail page, routing, gallery, metadata, and filter tabs!

1. Open `src/data/projects.ts`.
2. Append a new object to the `PROJECTS` array:

```typescript
{
  id: "coastal-villa-goa",
  slug: "coastal-laterite-villa",
  title: "The Laterite House",
  marathiTitle: "जांभा दगड निवास",
  tagline: "Carved into the Coastal Red Earth",
  typology: "Private Coastal Residence",
  category: "residential", // "residential" | "commercial" | "interiors" | "sustainable"
  location: "Assagao, North Goa",
  year: "2025",
  area: "8,500 sq.ft",
  client: "Private Collector",
  role: "Architecture, Interior Architecture & Landscape",
  heroImage: "/images/alibaug-courtyard.jpg",
  thumbnail: "/images/alibaug-courtyard.jpg",
  featured: true,
  shortDescription: "A sequence of red laterite courtyards wrapped around ancient mango trees...",
  concept: "Detailed narrative regarding the micro-climate, thermal mass, and spatial experience...",
  materiality: [
    "Indigenous Red Laterite",
    "Hand-Cast Brass Fittings",
    "Teak Wood Louvers"
  ],
  sustainabilityFeatures: [
    "100% natural passive breeze capture",
    "Rainwater storage reservoir 80,000L"
  ],
  gallery: [
    {
      url: "/images/hero-facade.jpg",
      caption: "Main pavilion reflecting in the water channel.",
      aspect: "wide"
    }
  ],
  drawings: [
    {
      title: "Ground Floor Architectural Plan",
      type: "Plan",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      description: "Axial arrangement connecting the living pavilion to the garden."
    }
  ],
  quote: {
    text: "Architecture that feels as if it has always existed here.",
    author: "Resident"
  },
  nextSlug: "sahyadri-cliff-sanctuary"
}
```

3. Save the file. The page is immediately accessible at `/projects/coastal-laterite-villa` with dynamic SEO metadata, Open Graph cards, and image galleries.

---

## 🎨 Where to Customize Styles, Copy & Configuration

| Requirement | File Location | Description |
| :--- | :--- | :--- |
| **Studio Details & Copy** | `src/data/projects.ts` | Edit `STUDIO_INFO` (name, address, telephone, email, Instagram handle `@kalaa_vant`, team bios, timeline). |
| **Colors & Theme Tokens** | `src/app/globals.css` | Edit `--color-stone-bg`, `--color-charcoal`, `--color-accent-stone`. |
| **Fonts** | `src/app/layout.tsx` | Switch or adjust Google Fonts (`Cormorant_Garamond`, `Plus_Jakarta_Sans`). |
| **Hero Zoom & Title** | `src/sections/Hero.tsx` | Modify speed of Ken Burns animation or letter stagger delay. |
| **Manifesto & Philosophy** | `src/sections/Philosophy.tsx` | Update manifesto lines and core principles. |
| **Contact Email & Form** | `src/sections/Contact.tsx` | Connect form submission endpoint (e.g. Formspree, Resend, or API route). |

---

## 📷 Client Reference

- **Client**: Studio Kalaa Vant
- **Instagram**: [https://www.instagram.com/kalaa_vant](https://www.instagram.com/kalaa_vant) (`@kalaa_vant`)
- **Native Glyphs**: कलावंत (Master of Art / Architecture)
- **Practice Centers**: Mumbai • Pune • Goa • Alibaug

---

## 📜 License & Copyright

© 2026 Studio Kalaa Vant. All rights reserved.
Crafted for minimal, refined architectural storytelling.
#   k a l a _ v a n t - p r o t o t y p e  
 
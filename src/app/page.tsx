import Preloader from "@/components/Preloader";
import Hero from "@/sections/Hero";
import Philosophy from "@/sections/Philosophy";
import FeaturedProjects from "@/sections/FeaturedProjects";
import CulturalArchive from "@/sections/CulturalArchive";
import AboutStudio from "@/sections/AboutStudio";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Editorial Stroke-Draw Preloader with Curtain Wipe */}
      <Preloader />

      <main className="relative flex flex-col w-full min-h-screen">
        {/* 1. Hero with Ken Burns & Letter Stagger */}
        <Hero />

        {/* 2. Philosophy & Manifesto with Line Reveal */}
        <Philosophy />

        {/* 3. Featured Architecture Commissions */}
        <FeaturedProjects />

        {/* 4. Visual Chronicles & Cultural Archive from @kalaa_vant */}
        <CulturalArchive />

        {/* 5. The Studio, Lineage, Team & Milestone Timeline */}
        <AboutStudio />

        {/* 5. Services & Numbered Sticky-Scroll Cards */}
        <Services />

        {/* 6. Contact & Direct Coordinates */}
        <Contact />
      </main>
    </>
  );
}

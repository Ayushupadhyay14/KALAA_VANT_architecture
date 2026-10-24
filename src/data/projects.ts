export interface ProjectDrawing {
  title: string;
  type: "Plan" | "Section" | "Axonometric" | "Elevation" | "Heritage Study";
  image: string;
  description: string;
}

export interface ProjectGalleryItem {
  url: string;
  caption: string;
  aspect: "wide" | "portrait" | "standard";
}

export interface CulturalStory {
  id: string;
  title: string;
  marathiTitle: string;
  category: string;
  year: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  marathiTitle: string;
  tagline: string;
  typology: string;
  category: "residential" | "commercial" | "interiors" | "sustainable" | "heritage" | "photography";
  location: string;
  year: string;
  area: string;
  client: string;
  role: string;
  heroImage: string;
  thumbnail: string;
  featured: boolean;
  shortDescription: string;
  concept: string;
  materiality: string[];
  sustainabilityFeatures: string[];
  gallery: ProjectGalleryItem[];
  drawings: ProjectDrawing[];
  quote: {
    text: string;
    author: string;
  };
  nextSlug: string;
}

export const PROJECTS: Project[] = [
  {
    id: "sahyadri-cliff",
    slug: "sahyadri-cliff-sanctuary",
    title: "Sahyadri Cliff Sanctuary",
    marathiTitle: "सह्याद्री क्लिफ निवास",
    tagline: "Monolithic Basalt Perched Above Misty Valleys",
    typology: "Private Mountain Residence",
    category: "residential",
    location: "Lonavala, Sahyadri Ghats, Maharashtra",
    year: "2025",
    area: "12,400 sq.ft",
    client: "Private Collector & Philanthropist",
    role: "Architecture, Interior Architecture & Landscape Scenography",
    heroImage: "/images/kalaavant/temple-arch-lakshmi.jpg",
    thumbnail: "/images/kalaavant/temple-arch-lakshmi.jpg",
    featured: true,
    shortDescription:
      "Sculpted directly into the basalt rock ridge of the Western Ghats, the Cliff Sanctuary anchors itself into the primeval terrain, opening its cantilevered glass living pavilion toward the monsoon valleys.",
    concept:
      "The design investigates the threshold between geologic permanence and atmospheric lightness. Rather than dominating the cliff, the lower volumes are clad in locally quarried black basalt that echoes the geological strata of Maharashtra. The upper living room cantilevers 8 meters into empty space, sheltered beneath a thin floating roof slab that captures the prevailing wind currents and funnels cool mountain air throughout the residence.",
    materiality: [
      "Quarried Black Basalt Stone",
      "Board-formed Architectural Concrete",
      "Oiled Indian Teak Slatting",
      "Low-Iron Structural Glass",
      "Charred Kadappa Stone Paving",
    ],
    sustainabilityFeatures: [
      "100% natural passive draft cooling via valley convection",
      "95,000-liter subterranean rainwater harvesting reservoir",
      "Zero-carbon structural basalt sourced within 4km of site",
      "Greywater reed-bed wetland purification system",
    ],
    gallery: [
      {
        url: "/images/kalaavant/temple-arch-lakshmi.jpg",
        caption: "Cantilevered glass salon suspended 400 meters above the Sahyadri river basin.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/tree-of-life-pichwai.jpg",
        caption: "Transition hallway featuring board-formed concrete and filtered skylight shafts.",
        aspect: "standard",
      },
      {
        url: "/images/kalaavant/temple-arch-lakshmi.jpg",
        caption: "The west court at twilight with custom water mirror and linear basalt steps.",
        aspect: "portrait",
      },
      {
        url: "/images/kalaavant/tree-of-life-pichwai.jpg",
        caption: "Minimalist living sanctuary framed by hand-hewn timber beams and floor-to-ceiling glass.",
        aspect: "wide",
      },
    ],
    drawings: [
      {
        title: "Ground Level Plan & Landscape Court",
        type: "Plan",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Radial layout organizing private bedroom suites along the cliff bedrock, converging upon the public cantilevered pavilion.",
      },
      {
        title: "Transverse Mountain Section",
        type: "Section",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Geological cross-section detailing thermal mass embedding, sub-grade water retention, and thermal siphon air circulation.",
      },
    ],
    quote: {
      text: "Kalaa Vant understood that the mountain itself was the primary architect. They simply gave it a frame through which to breathe.",
      author: "Homeowner & Art Patron",
    },
    nextSlug: "alibaug-courtyard-house",
  },
  {
    id: "wada-revival",
    slug: "wada-revival-atelier",
    title: "Wada Revival & Cultural Atelier",
    marathiTitle: "वाडा पुनरुज्जीवन आणि कला केंद्र",
    tagline: "Timber Colonnades, Stone Courtyards & Living Heritage",
    typology: "Heritage Restoration & Cultural Atelier",
    category: "heritage",
    location: "Wai, Krishna River Valley, Maharashtra",
    year: "2024",
    area: "14,800 sq.ft",
    client: "Heritage Trust & Art Foundation",
    role: "Heritage Conservation, Architecture & Scenography",
    heroImage: "/images/kalaavant/pichwai-cows-gold.jpg",
    thumbnail: "/images/kalaavant/pichwai-cows-gold.jpg",
    featured: true,
    shortDescription:
      "A restoration and adaptive reimagining of an 18th-century Peshwa-era Wada. Blending ancient teak wood colonnades and dressed stone water courtyards with a modern light-sculpted pavilion.",
    concept:
      "Drawing directly from Akash Kapare's documentary studies of Maharashtra's traditional architectural forms, the Wada Revival breathes new life into ancestral construction techniques. Intricately carved wooden brackets and central 'Chowk' (open courtyard) systems are combined with discreet acoustic isolation and subterranean passive geothermal cooling.",
    materiality: [
      "Centuries-Old Reclaimed Sagwan (Teak Wood)",
      "Traditional Dressed Black Trap Stone",
      "Surkhi & Natural Slaked Lime Mortar",
      "Hand-Hammered Brass Hardware",
      "Handmade Terracotta Roofing Tiles (कवळे)",
    ],
    sustainabilityFeatures: [
      "Natural convective cooling through central open-to-sky chowk",
      "Zero cement used in historic core restoration",
      "Traditional lime plaster allows walls to absorb and release humidity organically",
      "Rainwater harvesting through centuries-old stone channels",
    ],
    gallery: [
      {
        url: "/images/kalaavant/pichwai-cows-gold.jpg",
        caption: "The central stone chowk courtyard with antique stone fountains and timber colonnades.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/tree-of-life-pichwai.jpg",
        caption: "Artisan workshop and archival library under restored wooden trusses.",
        aspect: "wide",
      },
    ],
    drawings: [
      {
        title: "Historical Wada Courtyard Plan",
        type: "Heritage Study",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Traditional multi-court layout showing restoration of Osari (verandah) and private inner sanctum.",
      },
    ],
    quote: {
      text: "This is not mere nostalgia; it is living continuity. Kalaa Vant has proven that our ancestral architecture holds the answers to modern climate challenges.",
      author: "Cultural Historian & Curator",
    },
    nextSlug: "alibaug-courtyard-house",
  },
  {
    id: "alibaug-courtyard",
    slug: "alibaug-courtyard-house",
    title: "The Alibaug Courtyard House",
    marathiTitle: "अलिबाग कोर्टयार्ड व्हिला",
    tagline: "Laterite, Water Courts, and Coastal Tropics",
    typology: "Coastal Tropical Residence",
    category: "sustainable",
    location: "Awas, Alibaug, Coastal Maharashtra",
    year: "2024",
    area: "9,800 sq.ft",
    client: "Industrialist Family Estate",
    role: "Masterplanning, Architecture & Interior Spatial Design",
    heroImage: "/images/kalaavant/tropical-paradise-birds.jpg",
    thumbnail: "/images/kalaavant/tropical-paradise-birds.jpg",
    featured: true,
    shortDescription:
      "A serene sequence of open-air water courts, perforated terracotta jali screens, and warm laterite masonry that reinterprets traditional Konkan coastal living into a contemporary haven.",
    concept:
      "Built around a century-old grove of coconut and frangipani trees, the Alibaug Courtyard House dissolves boundaries between indoor sanctuary and tropical garden. Deep shaded verandahs protect against torrential monsoon downpours while terracotta jali screens modulate harsh coastal sun into shifting tapestries of light and shadow.",
    materiality: [
      "Indigenous Konkan Laterite Stone",
      "Perforated Terracotta Jali Bricks",
      "Hand-polished Jaisalmer Yellow Limestone",
      "Reclaimed Coastal Sal Wood",
      "Natural Lime Plaster Wash",
    ],
    sustainabilityFeatures: [
      "Thermal massing reduces daytime interior temperature by 6°C without AC",
      "Central water court provides evaporative micro-cooling",
      "Zero existing mature trees felled during construction",
      "Permeable stone paving allowing 100% ground aquifer recharge",
    ],
    gallery: [
      {
        url: "/images/kalaavant/tropical-paradise-birds.jpg",
        caption: "The central water court with water lilies, timber pergola, and shaded daybed terrace.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/royal-palace-palms.jpg",
        caption: "Verandah corridor looking into the inner gardens with filtered sunlight.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/tropical-paradise-birds.jpg",
        caption: "Bedchamber sanctuary with lime-washed walls and custom hand-woven linen textiles.",
        aspect: "portrait",
      },
    ],
    drawings: [
      {
        title: "Courtyard Spatial Sequence Plan",
        type: "Plan",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Sequential spatial flow connecting four pavilion wings via perimeter water gardens and shaded colonnades.",
      },
    ],
    quote: {
      text: "Every morning feels like an unhurried meditation. The breeze through the jali screens carries the scent of sea salt and damp earth.",
      author: "Estate Owner",
    },
    nextSlug: "atelier-kalaa-vant-pune",
  },
  {
    id: "pune-pavilion",
    slug: "atelier-kalaa-vant-pune",
    title: "Atelier Kalaa Vant Pune",
    marathiTitle: "कला वंत पुणे स्टुडिओ पॅव्हिलियन",
    tagline: "A Sculptural Laboratory of Light, Wood & Concrete",
    typology: "Architectural Studio & Exhibition Pavilion",
    category: "commercial",
    location: "Koregaon Park, Pune, Maharashtra",
    year: "2024",
    area: "7,600 sq.ft",
    client: "Studio Kalaa Vant",
    role: "Architecture, Material Research & Custom Joinery",
    heroImage: "/images/kalaavant/artists-sculpting-circles.jpg",
    thumbnail: "/images/kalaavant/artists-sculpting-circles.jpg",
    featured: true,
    shortDescription:
      "The working home and experimental pavilion of Studio Kalaa Vant. A series of interconnected stone volumes, cascading reflecting pools, and shaded drafting ateliers designed for unhurried creation.",
    concept:
      "Conceived as a living manifesto of our philosophy, the Pune Atelier balances raw materiality with razor-sharp detailing. The building features an expansive cantilevered concrete canopy, operable teak louvers that adjust to diurnal sun angles, and an outdoor amphitheater for design discourses.",
    materiality: [
      "Monolithic Cast-in-Place Concrete",
      "Honed Basalt Slabs",
      "Brushed Blackened Steel",
      "Sustainable Plantation Teak",
      "Acoustic Cork Paneling",
    ],
    sustainabilityFeatures: [
      "Solar rooftop array generating 120% of studio electrical needs",
      "Bio-retention water channel encircling building perimeter",
      "Natural daylighting eliminating artificial lighting during daylight hours",
      "Locally crafted furniture built from reclaimed warehouse timber",
    ],
    gallery: [
      {
        url: "/images/kalaavant/artists-sculpting-circles.jpg",
        caption: "The main facade at dawn with mist rising from the linear reflecting pond.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/tree-of-life-pichwai.jpg",
        caption: "Studio interior drafting bays flooded with diffused northern light.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/artists-sculpting-circles.jpg",
        caption: "Material research archive and prototype library.",
        aspect: "portrait",
      },
    ],
    drawings: [
      {
        title: "Atelier Axonometric Massing",
        type: "Axonometric",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Exploded axonometric illustrating interlocking thermal zones, double-height drawing studio, and rooftop solar canopy.",
      },
    ],
    quote: {
      text: "A space that does not impose thoughts, but quietly invites contemplation and precise making.",
      author: "Principal Architect, Kalaa Vant",
    },
    nextSlug: "marine-drive-penthouse",
  },
  {
    id: "mumbai-penthouse",
    slug: "marine-drive-penthouse",
    title: "Marine Drive Penthouse",
    marathiTitle: "मरीन ड्राईव्ह पेंटहाऊस",
    tagline: "Travertine, Fluted Joinery & Arabian Sea Panoramas",
    typology: "Luxury Minimalist Penthouse",
    category: "interiors",
    location: "Marine Drive, South Mumbai",
    year: "2023",
    area: "6,400 sq.ft",
    client: "Private Equity Executive",
    role: "Interior Architecture, Bespoke Furniture & Lighting Curation",
    heroImage: "/images/kalaavant/radha-krishna-illuminated.jpg",
    thumbnail: "/images/kalaavant/radha-krishna-illuminated.jpg",
    featured: true,
    shortDescription:
      "A serene residential sanctuary high above the Arabian Sea, where warm Roman travertine, curved plaster ceilings, and bespoke walnut furniture offer respite from the urban pulse of Mumbai.",
    concept:
      "The design strips away ornamental noise to focus on proportion, tactile warmth, and the ever-shifting quality of coastal light. Curved corners guide sightlines toward the sea, while concealed sliding acoustic walls allow the penthouse to shift effortlessly between grand entertaining and quiet contemplation.",
    materiality: [
      "Navona Roman Travertine",
      "Warm White Lime Plaster",
      "American Black Walnut & Teak",
      "Cast Bronze Hardware",
      "Belgian Raw Linen Drapery",
    ],
    sustainabilityFeatures: [
      "Low-VOC natural mineral lime paints throughout",
      "Smart micro-climate zoning with high-efficiency VRV HVAC",
      "Acoustically isolated triple-glazed acoustic facades reducing 48dB of city sound",
      "Locally hand-knotted organic wool and silk floor coverings",
    ],
    gallery: [
      {
        url: "/images/kalaavant/radha-krishna-illuminated.jpg",
        caption: "Main salon looking out to the expansive Arabian Sea horizon.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/radha-krishna-illuminated.jpg",
        caption: "Dining pavilion centered by a monolithic 4-meter travertine slab table.",
        aspect: "portrait",
      },
      {
        url: "/images/kalaavant/radha-krishna-illuminated.jpg",
        caption: "Private library nook with integrated concealed warm illumination.",
        aspect: "wide",
      },
    ],
    drawings: [
      {
        title: "Penthouse Spatial Flow & Sightline Analysis",
        type: "Plan",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Unobstructed panoramic axis aligning the entrance gallery directly with the horizon line over Back Bay.",
      },
    ],
    quote: {
      text: "Even during Mumbai's most frantic monsoon storms, stepping into this home brings an immediate, profound sense of stillness.",
      author: "Resident",
    },
    nextSlug: "deccan-earth-sanctuary",
  },
  {
    id: "deccan-sanctuary",
    slug: "deccan-earth-sanctuary",
    title: "Deccan Earth Sanctuary",
    marathiTitle: "दख्खन वसुंधरा निवास",
    tagline: "Rammed Earth & Biophilic Living on the Plateau",
    typology: "Bespoke Sustainable Residence",
    category: "sustainable",
    location: "Panchgani Plateau, Maharashtra",
    year: "2023",
    area: "8,900 sq.ft",
    client: "Sustainable Agriculture Innovator",
    role: "Architecture, Ecological Regeneration & Interior Design",
    heroImage: "/images/kalaavant/concentric-circles-wall.jpg",
    thumbnail: "/images/kalaavant/concentric-circles-wall.jpg",
    featured: false,
    shortDescription:
      "Crafted almost entirely from excavated red earth on site, this off-grid estate marries ancient rammed earth building techniques with contemporary structural engineering.",
    concept:
      "Every cubic meter of earth removed for the foundations was stabilized and compressed back into the 450mm-thick exterior walls. The home features layered green roofs that blend into the undulating plateau hills and provide high acoustic and thermal insulation.",
    materiality: [
      "Stabilized Rammed Earth from Site Excavation",
      "Reclaimed Railway Sleepers (Hardwood)",
      "Terracotta Floor Tiles",
      "Hand-blown Glass Skylights",
      "Copper Guttering & Water Chains",
    ],
    sustainabilityFeatures: [
      "Net-zero energy with battery-backed micro-grid",
      "100% wastewater treated and recycled for endemic forest reforestation",
      "Thermal inertia eliminates artificial heating even during chilly plateau winters",
      "Zero cement used in superstructure walls",
    ],
    gallery: [
      {
        url: "/images/kalaavant/concentric-circles-wall.jpg",
        caption: "Sculptural earth walls catching the late afternoon sun.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/concentric-circles-wall.jpg",
        caption: "Sunken courtyard garden surrounded by shaded stone arcades.",
        aspect: "wide",
      },
    ],
    drawings: [
      {
        title: "Site Regeneration & Permaculture Plan",
        type: "Plan",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Integration of 3-acre organic orchard, bioswales, and living earth structures.",
      },
    ],
    quote: {
      text: "The walls carry the actual soil of Maharashtra. It feels grounded in a way modern buildings rarely do.",
      author: "Client & Ecologist",
    },
    nextSlug: "wari-chronicles-pandharpur",
  },
  {
    id: "wari-chronicles",
    slug: "wari-chronicles-pandharpur",
    title: "The Wari Chronicles: Walking with Faith",
    marathiTitle: "पंढरपूर वारी — भक्ती, पावले आणि अवकाश",
    tagline: "21 Days Across the Rural Heartlands of Maharashtra",
    typology: "Documentary Photography & Cultural Storytelling",
    category: "photography",
    location: "Alandi to Pandharpur, Maharashtra",
    year: "2024",
    area: "250+ km Walking Pilgrimage",
    client: "Independent Visual Archive by Akash Kapare",
    role: "Visual Storytelling, Street Photography & Direction",
    heroImage: "/images/kalaavant/mandala-ceiling-art.jpg",
    thumbnail: "/images/kalaavant/mandala-ceiling-art.jpg",
    featured: true,
    shortDescription:
      "A celebrated photographic series by Akash Kapare (@kalaa_vant) capturing the sacred Pandharpur Wari pilgrimage. Millions walking through monsoons, carrying saffron flags, singing abhangas, and breathing unity.",
    concept:
      "Captured on Sony Alpha and vintage prime lenses, this series examines how transient human movement creates sacred architecture. The pilgrimage transforms everyday highways into spiritual corridors, where the rhythmic sound of cymbals (Taal), damp red soil, and devotion collapse social divisions into pure collective art.",
    materiality: [
      "Sony Alpha Full-Frame & 35mm Prime Lenses",
      "Natural Monsoon Light & Dust Atmospheric Haze",
      "Archival Hahnemühle Cotton Rag Prints",
      "High-Contrast Monochrome & Earth-Tone Grading",
    ],
    sustainabilityFeatures: [
      "Documentary preservation of 800-year-old living Marathi oral traditions",
      "Zero-waste field photography kit with solar battery recharge packs",
      "Collaboration with local village craft guilds and Warkari trusts",
    ],
    gallery: [
      {
        url: "/images/kalaavant/mandala-ceiling-art.jpg",
        caption: "Warkaris crossing the misty plateau of Maharashtra at sunrise.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/mandala-ceiling-art.jpg",
        caption: "Devotion etched in time: Elder pilgrim holding the Tulsi pot.",
        aspect: "portrait",
      },
      {
        url: "/images/kalaavant/festival-architectural-decor.jpg",
        caption: "Evening gathering around holy fires with the sound of Pakhawaj and bells.",
        aspect: "wide",
      },
    ],
    drawings: [
      {
        title: "Pilgrimage Route & Spatial Encampment Map",
        type: "Heritage Study",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Geographic trajectory from Alandi/Dehu across the Western Ghats down to the Bhima river basin in Pandharpur.",
      },
    ],
    quote: {
      text: "The camera ceases to be an instrument and becomes a witness to pure surrender and human warmth.",
      author: "Akash Kapare (@kalaa_vant)",
    },
    nextSlug: "sacred-stone-hemadpanthi",
  },
  {
    id: "sacred-stone",
    slug: "sacred-stone-hemadpanthi",
    title: "Monolithic Shadows: Hemadpanthi Temples",
    marathiTitle: "हेमाडपंथी दगडी मंदिरे — प्राचीन वास्तुकला",
    tagline: "12th-Century Dry-Joint Basalt Architecture of Maharashtra",
    typology: "Architectural & Heritage Photography",
    category: "photography",
    location: "Sinnar, Ambarnath & Kolhapur, Maharashtra",
    year: "2024",
    area: "Field Research Across 14 Heritage Sites",
    client: "Heritage Archive & Architectural Research",
    role: "Heritage Photography, Structural Analysis & Curation",
    heroImage: "/images/kalaavant/temple-monolith-craft.jpg",
    thumbnail: "/images/kalaavant/temple-monolith-craft.jpg",
    featured: true,
    shortDescription:
      "A photographic study of medieval Hemadpanthi stone temples built completely without mortar. Exploring structural interlocking, rock-cut geometry, and light piercing monolithic sanctums.",
    concept:
      "Hemadpanthi architecture represents the pinnacle of indigenous stone engineering in Western India. Using mortise-and-tenon dry stone joints, these temples withstand seismic shifts and intense monsoons. This photographic series studies the dramatic chiaroscuro created by narrow stone apertures, directly inspiring the light design of Kalaa Vant's modern architecture.",
    materiality: [
      "Deep Black Deccan Basalt & Green Schist",
      "Dry-Joint Interlocking Masonry (Zero Mortar)",
      "Carved Stone Beams & Sculpted Pillar Shafts",
      "Deep Chiaroscuro Natural Lighting",
    ],
    sustainabilityFeatures: [
      "Living proof of thousand-year stone durability without synthetic binders",
      "Geothermal earth mass providing natural sub-22°C interior temperatures",
      "Documenting at-risk heritage structures for state conservation archives",
    ],
    gallery: [
      {
        url: "/images/kalaavant/temple-monolith-craft.jpg",
        caption: "Main mandapa pillars carved with celestial dancers and geometric mandalas.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/temple-monolith-craft.jpg",
        caption: "A single ray of dawn light piercing through stone roof lattices into the Garbhagriha.",
        aspect: "wide",
      },
    ],
    drawings: [
      {
        title: "Hemadpanthi Dry-Stone Interlocking Tectonic Detail",
        type: "Heritage Study",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Measured drawing analyzing traditional stone tenon joints and gravity load distribution.",
      },
    ],
    quote: {
      text: "Before we design a modern stone wall, we must spend hours sitting inside a 12th-century Hemadpanthi mandapa.",
      author: "Akash Kapare, Kalaa Vant",
    },
    nextSlug: "mumbai-pune-street-chronicles",
  },
  {
    id: "street-chronicles",
    slug: "mumbai-pune-street-chronicles",
    title: "Pune & Mumbai Street Chronicles",
    marathiTitle: "पुणे आणि मुंबई — रस्ते, माणसे आणि क्षण",
    tagline: "The Unscripted Poetry of Urban Maharashtra",
    typology: "Street & Human Documentary Photography",
    category: "photography",
    location: "Pune Old Peths & South Mumbai",
    year: "2023-2025",
    area: "Urban Street Archives",
    client: "Editorial Series by Akash Kapare",
    role: "Street Photography, Darkroom Curation & Framing",
    heroImage: "/images/kalaavant/sweet-therapy-mural.jpg",
    thumbnail: "/images/kalaavant/sweet-therapy-mural.jpg",
    featured: true,
    shortDescription:
      "A candid visual diary wandering through the historic Peths of Pune and the coastal streets of Mumbai. Capturing tea stalls, monsoon showers, antique brass workshops, and raw human expressions.",
    concept:
      "Street photography is the ultimate school of spatial observation. In this ongoing series showcased on @kalaa_vant, Akash Kapare captures the fleeting poetry of Indian city life—the rhythm of footsteps on rain-slicked basalt, the dramatic shadows under wooden Wada balconies, and the timeless resilience of everyday people.",
    materiality: [
      "Available Ambient Street Lighting",
      "High-ISO Grain & Film Emulation",
      "Wide-Angle 28mm & 50mm Prime Lenses",
      "Natural Rain & Steam Atmosphere",
    ],
    sustainabilityFeatures: [
      "Documenting intangible cultural heritage of traditional artisan lanes (Tambat Ali copper smiths)",
      "Focusing on slow walking mobility and urban human-scale public spaces",
    ],
    gallery: [
      {
        url: "/images/kalaavant/sweet-therapy-mural.jpg",
        caption: "Festive evening lights reflecting on the wet stone streets of Pune.",
        aspect: "wide",
      },
      {
        url: "/images/kalaavant/sweet-therapy-mural.jpg",
        caption: "Portrait of a master craftsman in the historic brass quarter.",
        aspect: "portrait",
      },
    ],
    drawings: [
      {
        title: "Historical Peth Street Section & Wada Facade Study",
        type: "Heritage Study",
        image: "/images/kalaavant/ink-drawing-hand-craft.jpg",
        description:
          "Spatial cross-section illustrating pedestrian verandahs, shaded street widths, and climate buffers.",
      },
    ],
    quote: {
      text: "Every street corner holds a lifetime of untold stories. You only need the patience to wait for the light.",
      author: "Akash Kapare (@kalaa_vant)",
    },
    nextSlug: "sahyadri-cliff-sanctuary",
  },
];

export const CULTURAL_STORIES: CulturalStory[] = [
  {
    id: "wari-pilgrimage",
    title: "The Sacred Route: Pandharpur Wari",
    marathiTitle: "पंढरपूर वारी — भक्ती आणि अवकाश",
    category: "Cultural Chronicle",
    year: "Ongoing Series",
    location: "Alandi to Pandharpur, Maharashtra",
    image: "/images/kalaavant/mandala-ceiling-art.jpg",
    description:
      "A photographic study documenting the centuries-old Wari pilgrimage. Over 21 days, millions move together across rural Maharashtra, transforming public roads, temple courts, and villages into living sacred spaces.",
    highlights: [
      "Documenting temporary tent architecture and community kitchens",
      "Spiritual spatial geometry and the collective movement of devotion",
      "Featured across cultural monographs and national exhibitions",
    ],
  },
  {
    id: "hemadpanthi-stones",
    title: "Monolithic Shadows: Hemadpanthi Temples",
    marathiTitle: "हेमाडपंथी दगडी मंदिरे",
    category: "Architectural Heritage",
    year: "Research Archive",
    location: "Sinnar, Ambarnath & Kolhapur, Maharashtra",
    image: "/images/kalaavant/temple-monolith-craft.jpg",
    description:
      "Documentary research exploring 12th-century dry-joint basalt temples constructed without mortar. Analyzing structural interlocking, astronomical alignment, and the play of shadow in dark interior mandapas.",
    highlights: [
      "Precision tectonic stone interlocking documentation",
      "Passive climatic principles in rock-cut architecture",
      "Direct structural inspiration for Studio Kalaa Vant's modern villas",
    ],
  },
  {
    id: "ganeshotsav-scenography",
    title: "The Divine Canvas: Ganeshotsav Scenography",
    marathiTitle: "गणेशोत्सव — कला, शिल्प आणि उत्सव",
    category: "Festival & Craft Documentation",
    year: "Annual Archive",
    location: "Mumbai & Pune, Maharashtra",
    image: "/images/kalaavant/festival-architectural-decor.jpg",
    description:
      "Photographic chronicle of community pavilions, monumental clay idols (Lalbaugcha Raja, Dagdusheth Halwai), and the temporary spatial transformations of Mumbai and Pune's historic lanes.",
    highlights: [
      "Ephemeral festive architecture and temporary urbanism",
      "Master artisans sculptors, lighting designers, and folk guilds",
      "Capturing the emotional resonance of traditional Maharashtrian art",
    ],
  },
];

export const STUDIO_INFO = {
  name: "KALAA VANT",
  fullName: "Studio Kalaa Vant",
  nativeName: "Kalaaवंत | कलाकार",
  marathiTag: "कला आणि वास्तुकला",
  subtitle: "Atelier of Architecture, Spatial Craft & Cultural Storytelling",
  tagline: "Architecture born from the land, sculpted by light, enduring in silence.",
  founder: "Akash Kapare",
  founderTitle: "Founder, Principal Architect & Visual Storyteller (कलाकार)",
  studios: [
    {
      city: "Mumbai",
      role: "Urban & Interior Atelier",
      address: "Studio 4B, The Mill Compound, Lower Parel",
      coordinates: "18.9986° N, 72.8277° E",
    },
    {
      city: "Pune",
      role: "Architecture & Fabrication Lab",
      address: "Plot 18, Koregaon Park North Main Road",
      coordinates: "18.5362° N, 73.8958° E",
    },
    {
      city: "Goa / Alibaug",
      role: "Coastal Site Research Office",
      address: "Chogm Road, Porvorim & Awas Coastal Studio",
      coordinates: "15.4909° N, 73.8278° E",
    },
  ],
  contact: {
    email: "atelier@kalaavant.com",
    inquiries: "inquire@kalaavant.com",
    phone: "+91 98230 45781",
    instagram: "https://www.instagram.com/kalaa_vant?utm_source=qr&vrfl=MWgyZGZsOHUxNHJ4bQ%3D%3D",
    instagramHandle: "@kalaa_vant",
    instagramBio: "Kalaaवंत | कलाकार — Visual Storytelling, Architecture, Culture & Craft",
    linkedin: "https://linkedin.com/company/kalaavant-architecture",
    behance: "https://behance.net/kalaavant",
  },
  stats: [
    { number: "14+", label: "Years of Practice & Making" },
    { number: "48+", label: "Built Works & Interventions" },
    { number: "120+", label: "Visual & Cultural Archives" },
    { number: "100%", label: "Indigenous Land & Climate Focus" },
  ],
  services: [
    {
      number: "01",
      title: "Contextual Architecture",
      tag: "Earth, Stone & Monoliths",
      description:
        "Bespoke residential compounds, mountain villas, and cultural pavilions sculpted into their natural topography. We prioritize honest materials, climate resilience, and dramatic spatial sequencing.",
      deliverables: [
        "Site Analysis & Micro-climate Modeling",
        "Conceptual & Schematic Architectural Design",
        "Passive Energy & Zero-Carbon Strategies",
        "Comprehensive Construction Oversight",
      ],
    },
    {
      number: "02",
      title: "Heritage Conservation & Wada Revival",
      tag: "Living Lineage & Vernacular Craft",
      description:
        "Restoring historical Wada structures, stone courtyards, and ancient water reservoirs. Fusing centuries-old Maharashtrian timber joinery with modern structural engineering and acoustic peace.",
      deliverables: [
        "Heritage Conservation & Adaptive Reuse",
        "Traditional Lime Mortar & Basalt Stone Engineering",
        "Vernacular Craft Guild & Master Carpenter Collaboration",
        "Historic Estate Masterplanning",
      ],
    },
    {
      number: "03",
      title: "Tactile Interior Scenography",
      tag: "Travertine, Timber & Quiet Luxury",
      description:
        "Minimalist interior architecture crafted with sensory depth. Every surface, joinery detail, custom bronze pull, and acoustic texture is tailored to create spaces of profound calm.",
      deliverables: [
        "Spatial Planning & Custom Millwork",
        "Material Sourcing (Stone, Timber, Metal)",
        "Bespoke Furniture & Lighting Design",
        "Fine Art & Curatorial Integration",
      ],
    },
    {
      number: "04",
      title: "Sustainable & Earth Building",
      tag: "Rammed Earth & Micro-Cooling",
      description:
        "Leading the discourse on climate-adapted luxury in the Indian subcontinent. Utilizing rammed earth, laterite, rainwater reservoirs, and passive thermal chimneys to create self-cooling habitats.",
      deliverables: [
        "Embodied Carbon Reduction Strategies",
        "Rammed Earth & Local Masonry Engineering",
        "Rainwater Harvesting & Graywater Wetlands",
        "Net-Zero Solar & Biophilic Landscaping",
      ],
    },
  ],
  team: [
    {
      name: "Akash Kapare",
      role: "Founder, Principal Architect & Visual Storyteller (कलाकार)",
      bio: "Creator behind @kalaa_vant. Rooted in the rich cultural arts, street documentary, and architectural heritage of Maharashtra. Akash founded Kalaa Vant to unite traditional Indian artisanship, stone tectonic poetry, and contemporary minimalist spatial design.",
      image: "/images/kalaavant/sweet-therapy-mural.jpg",
    },
    {
      name: "Radhika Kulkarni",
      role: "Partner & Head of Interior Architecture",
      bio: "Trained in Milan and Ahmedabad, Radhika leads spatial scenography, tactile materiality, and bespoke artisan collaborations across residential and hospitality commissions.",
      image: "/images/kalaavant/royal-palace-palms.jpg",
    },
    {
      name: "Vikramaditya Shinde",
      role: "Director of Technical Engineering & Sustainability",
      bio: "Specializing in passive climate building physics, stone engineering, and off-grid water systems that enable our cliffside and tropical coastal structures to endure for generations.",
      image: "/images/kalaavant/concentric-circles-wall.jpg",
    },
  ],
  timeline: [
    {
      year: "2012",
      title: "Atelier Genesis",
      description:
        "Kalaa Vant was founded with a single mission: to craft architecture that honors the natural rhythm of India's terrain, moving away from glossy commercialism toward slow, tactile mastery.",
    },
    {
      year: "2016",
      title: "Alibaug Coastal Series",
      description:
        "Completed our first series of laterite water court residences in Alibaug, pioneering passive cooling methods that reduced air-conditioning dependence by 65%.",
    },
    {
      year: "2019",
      title: "National Architectural Citation",
      description:
        "Recognized by Indian Institute of Architects for Excellence in Residential Architecture for the Sahyadri Monolith Residence.",
    },
    {
      year: "2021",
      title: "Heritage & Cultural Documentation Lab",
      description:
        "Launched the ongoing documentary series on Maharashtra's Hemadpanthi temple architecture, Wada structures, and the Pandharpur Wari pilgrimage, featured widely on @kalaa_vant.",
    },
    {
      year: "2024-2025",
      title: "Monograph & Living Architecture",
      description:
        "Publication of 'Stillness in Stone: The Architecture of Kalaa Vant' and ongoing projects spanning Maharashtra, Goa, and coastal Karnataka.",
    },
  ],
};

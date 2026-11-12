// Configurable studio details & structured content for Kreovate Design Agency
// Edit contact numbers, handles, and social URLs here without touching UI components.

export const STUDIO_CONFIG = {
  name: 'Kreovate Design Agency',
  shortName: 'Kreovate',
  tagline: 'A design agency for brands that dare to be different.',
  contact: {
    whatsappNumber: '917020181599', // Configurable international format without '+' for wa.me links
    phonedisplay: '+91 7020181599',
    email: 'hello@kreovatedesign.com',
    location: 'Maharashtra, India',
    workingHours: 'Mon – Sat · 10:00 AM – 7:30 PM',
  },
  socials: [
    { name: 'Instagram', handle: '@kreovatedesign', url: 'https://instagram.com' },
    { name: 'Behance', handle: 'behance.net/kreovate', url: 'https://behance.net' },
    { name: 'Dribbble', handle: 'dribbble.com/kreovate', url: 'https://dribbble.com' },
    { name: 'LinkedIn', handle: 'Kreovate Design Agency', url: 'https://linkedin.com/company/kreovate' },
  ],
};

export const BRAND_PALETTE = {
  skyBlue: '#A0D2EB',
  softOffWhite: '#E5EAF5',
  lightLavender: '#D0BDF4',
  primaryPurple: '#8458B3',
  deepCharcoal: '#494D5F',
};

export const SERVICES_DATA = [
  {
    id: 'flex-banner',
    number: '01',
    title: 'Flex Banner Designing & Printing',
    category: 'Print & Packaging',
    featured: true,
    accent: '#A0D2EB',
    summary:
      'High-impact large-format visual displays engineered for crisp color fidelity, outdoor durability, and instant street-level visibility.',
    items: [
      'Shop Flex Boards',
      'Event Banners',
      'Political Banners',
      'Birthday & Wedding Flex',
      'Promotional & Advertising Banners',
    ],
  },
  {
    id: 'office-stationery',
    number: '02',
    title: 'Office & Business Stationery',
    category: 'Brand & Identity',
    featured: false,
    accent: '#D0BDF4',
    summary:
      'Tactile corporate print collateral crafted on premium stocks with precision finishing that reinforces credibility in every exchange.',
    items: [
      'Bill Books',
      'Letterheads',
      'Business Cards (Matte / Glossy / Premium Finish)',
      'Custom Printed Envelopes',
    ],
  },
  {
    id: 'marketing-materials',
    number: '03',
    title: 'Marketing Materials',
    category: 'Marketing & Events',
    featured: false,
    accent: '#8458B3',
    summary:
      'Persuasive editorial layouts and structured sales collateral designed to captivate customers and drive measurable action.',
    items: [
      'Brochures (Bi-fold / Tri-fold / Multi-page)',
      'Pamphlets & Flyers',
      'Menu Cards (Hotels, Cafes, Restaurants)',
      'Product Catalogs',
    ],
  },
  {
    id: 'invitation-cards',
    number: '04',
    title: 'Invitation Cards',
    category: 'Marketing & Events',
    featured: false,
    accent: '#D0BDF4',
    summary:
      'Bespoke celebration suites and formal event stationery blending artistic typography, fine papers, and memorable unboxing moments.',
    items: [
      'Wedding Invitations',
      'Engagement Cards',
      'Birthday Invitations',
      'Corporate Event Invitations',
      'Customized Designer Cards',
    ],
  },
  {
    id: 'packaging-solutions',
    number: '05',
    title: 'Packaging Solutions',
    category: 'Print & Packaging',
    featured: true,
    accent: '#8458B3',
    summary:
      'Structural dielines, shelf-commanding box art, and tactile label systems that elevate unboxing into a signature brand ritual.',
    items: [
      'Product Box Design',
      'Label & Sticker Printing',
      'Custom Packaging Design',
      'Brand Packaging Concepts',
    ],
  },
  {
    id: 'logo-design',
    number: '06',
    title: 'Logo Design',
    category: 'Brand & Identity',
    featured: false,
    accent: '#A0D2EB',
    summary:
      'Distinctive, scalable brand marks rooted in strategic thinking—built to stay iconic across print, signage, and digital screens.',
    items: [
      'Unique and memorable logo concepts',
      'Creative visual identities',
      'Brand recognition and consistency',
    ],
  },
  {
    id: 'complete-branding',
    number: '07',
    title: 'Complete Branding Identity',
    category: 'Brand & Identity',
    featured: true,
    accent: '#D0BDF4',
    summary:
      'End-to-end visual architecture uniting typography, color systems, stationery, and brand guidelines into one cohesive voice.',
    items: [
      'Logo Design',
      'Visiting Card Design',
      'Letterhead Design',
      'Brand Color Palette',
      'Typography',
      'Brand Guidelines',
    ],
  },
  {
    id: 'social-media',
    number: '08',
    title: 'Social Media Designing',
    category: 'Digital & Social',
    featured: false,
    accent: '#A0D2EB',
    summary:
      'Scroll-stopping visual campaigns, festival creatives, and cohesive grid systems engineered for high engagement and recall.',
    items: [
      'Instagram & Facebook Posts',
      'Festival & Offer Posters',
      'Business Promotions',
      'Creative Advertisements',
      'Reel & Story Posters',
    ],
  },
  {
    id: 'web-app-ui',
    number: '09',
    title: 'Website & App UI Design',
    category: 'Digital & Social',
    featured: true,
    accent: '#8458B3',
    summary:
      'Human-centered digital interfaces combining modern editorial aesthetics, fluid user flows, and responsive design systems.',
    items: [
      'Professional Website UI',
      'E-commerce Website Design',
      'Mobile App UI Design',
      'Landing Page Design',
      'Modern & Responsive Layouts',
    ],
  },
  {
    id: 'brochure-profile',
    number: '10',
    title: 'Brochure & Company Profile Design',
    category: 'Marketing & Events',
    featured: false,
    accent: '#D0BDF4',
    summary:
      'Executive company profiles and narrative-led corporate brochures crafted to win stakeholder trust and accelerate business growth.',
    items: [
      'Professional company profiles',
      'Creative business brochures',
      'Marketing-focused layouts designed to attract customers and grow businesses',
    ],
  },
];

export const PORTFOLIO_WORKS = [
  {
    id: 'aurum-botanicals-identity',
    title: 'Vespera Atelier — Complete Brand System',
    category: 'Branding',
    year: '2025',
    client: 'Vespera Luxury Goods',
    image: '/images/portfolio-branding.png',
    aspect: 'tall',
    accent: '#D0BDF4',
    summary:
      'A tactile visual identity built around architectural monograms, blind-debossed cotton stationery, and a serene lavender-slate color system.',
    challenge:
      'Create an unmistakable luxury brand presence that translates effortlessly from physical embossed stationery to flagship digital touchpoints.',
    solution:
      'We crafted a geometric crest paired with custom typography, tactile matte stock specifications, and a comprehensive brand guideline manual.',
    deliverables: ['Monogram Logo', 'Cotton Visiting Cards', 'Letterhead & Envelopes', 'Brand Guidelines'],
  },
  {
    id: 'solis-packaging-collection',
    title: 'Solis Botanica — Packaging & Label Suite',
    category: 'Packaging',
    year: '2025',
    client: 'Solis Skincare',
    image: '/images/portfolio-packaging.png',
    aspect: 'wide',
    accent: '#A0D2EB',
    summary:
      'Sculptural rigid boxes and waterproof textured labels uniting pastel sky blue and deep purple Swiss typographic grids.',
    challenge:
      'Stand out in a crowded boutique retail space while communicating clean formulation standards and sustainable craftsmanship.',
    solution:
      'We engineered custom structural dielines with soft-touch lamination, spot UV highlights, and color-coded SKU bands.',
    deliverables: ['Structural Box Design', 'Custom Die-Cut Labels', 'Foil Finishes', 'Retail display Concepts'],
  },
  {
    id: 'nova-commerce-experience',
    title: 'Kinetix Studio — Web & Mobile UI Experience',
    category: 'Digital Experiences',
    year: '2025',
    client: 'Kinetix Digital',
    image: '/images/portfolio-digital.png',
    aspect: 'wide',
    accent: '#8458B3',
    summary:
      'An interactive web flagship and companion mobile app featuring glassmorphic UI cards, fluid micro-interactions, and high-converting product storytelling.',
    challenge:
      'Transform a complex service offering into an intuitive, editorial digital flagship that feels effortless on both desktop and mobile.',
    solution:
      'Designed a modular responsive component system with bold display typography, clear conversion pathways, and interactive previews.',
    deliverables: ['Website UI Design', 'Mobile App UI', 'Interactive Prototype', 'Design System'],
  },
  {
    id: 'monolith-editorial-lookbook',
    title: 'Arcline Architecture — Annual Profile & Brochure',
    category: 'Print Design',
    year: '2024',
    client: 'Arcline Spaces',
    image: '/images/portfolio-print.png',
    aspect: 'tall',
    accent: '#D0BDF4',
    summary:
      'A 48-page Swiss-grid corporate profile and tri-fold exhibition brochure printed on heavyweight archival matte paper.',
    challenge:
      'Present ten years of architectural milestones in a publication that feels like a collectible art book rather than a standard brochure.',
    solution:
      'Balanced generous whitespace, asymmetric photographic spreads, and crisp purple-lavender section dividers with Smythe-sewn binding.',
    deliverables: ['Company Profile', 'Tri-Fold Brochure', 'Print Production', 'Exhibition Signage'],
  },
  {
    id: 'celeste-invitation-posters',
    title: 'Celeste Gala — Designer Invitations & Event Graphics',
    category: 'Graphic Design',
    year: '2025',
    client: 'Celeste Cultural Foundation',
    image: '/images/portfolio-social-event.png',
    aspect: 'square',
    accent: '#A0D2EB',
    summary:
      'Bespoke foil-stamped invitation suites paired with large-format event posters and cohesive stage branding.',
    challenge:
      'Deliver an unforgettable first impression for VIP guests while maintaining visual continuity across outdoor flex banners and digital invites.',
    solution:
      'Combined custom botanical line illustrations with translucent lavender acrylic inserts and bold typographic event posters.',
    deliverables: ['Designer Invitation Cards', 'Event Flex Banners', 'Poster Series', 'VIP Badges'],
  },
  {
    id: 'lumina-social-campaign',
    title: 'Lumina Fest — Social Media & Campaign Visuals',
    category: 'Social Media',
    year: '2025',
    client: 'Lumina Lifestyle',
    image: '/images/about-studio.png',
    aspect: 'square',
    accent: '#8458B3',
    summary:
      'A 30-day high-impact social media visual campaign spanning Instagram carousels, animated reel covers, and promotional offer posters.',
    challenge:
      'Boost campaign engagement and brand recall during peak festive season without relying on repetitive template graphics.',
    solution:
      'Built a cohesive visual toolkit of kinetic typography frames, custom 3D color swatches, and modular story templates.',
    deliverables: ['Instagram & FB Posts', 'Festival Offer Posters', 'Story & Reel Covers', 'Ad Creatives'],
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'High-Quality Printing',
    description:
      'Color-calibrated press precision, archival paper stocks, and tactile matte, glossy, and foil finishes that make every print piece unforgettable.',
    accent: '#A0D2EB',
  },
  {
    number: '02',
    title: 'Modern & Creative Designs',
    description:
      'Contemporary editorial aesthetics and original visual storytelling tailored to position your brand ahead of display competitors.',
    accent: '#D0BDF4',
  },
  {
    number: '03',
    title: 'Affordable Pricing',
    description:
      'Transparent, scalable studio packages crafted for ambitious startups, growing businesses, and bespoke personal celebrations alike.',
    accent: '#8458B3',
  },
  {
    number: '04',
    title: 'Fast Delivery',
    description:
      'Streamlined design-to-print workflows ensuring rapid turnarounds without ever compromising on typographic detail or print quality.',
    accent: '#A0D2EB',
  },
  {
    number: '05',
    title: 'Customized Solutions',
    description:
      'Zero cookie-cutter templates. Every logo, brochure, flex banner, and digital interface is built from scratch around your exact goals.',
    accent: '#D0BDF4',
  },
  {
    number: '06',
    title: 'Trusted Creative Partner',
    description:
      'From initial brand discovery to final press delivery and digital launch, we collaborate closely as your dedicated creative team.',
    accent: '#8458B3',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Strategy & Alignment',
    description: "Understand the client's business, goals, and requirements.",
    detail:
      'We immerse ourselves in your brand story, audience, print specifications, and competitive landscape to establish a rock-solid creative brief.',
    accent: '#A0D2EB',
  },
  {
    step: '02',
    title: 'Conceptualize',
    subtitle: 'Art Direction & Ideation',
    description: 'Develop creative ideas and visual directions.',
    detail:
      'We explore typographic territories, color moods, structural dielines, and digital wireframes—translating strategy into bold visual concepts.',
    accent: '#D0BDF4',
  },
  {
    step: '03',
    title: 'Create',
    subtitle: 'Craft & Refinement',
    description: 'Transform concepts into professional designs and deliverables.',
    detail:
      'Every vector curve, print bleed, packaging fold, and UI interaction is meticulously crafted and refined through collaborative feedback.',
    accent: '#8458B3',
  },
  {
    step: '04',
    title: 'Deliver',
    subtitle: 'Production & Launch',
    description: 'Provide polished final designs and high-quality printing solutions.',
    detail:
      'Receive press-ready source files, precision-printed collateral, or launch-ready digital assets delivered on schedule and ready to make an impact.',
    accent: '#A0D2EB',
  },
];

// ============================================================
//  RIFATH'S PORTFOLIO — CONTENT CONFIG
//  Edit this file to update everything on the website.
//  No coding knowledge needed — just change the text/links.
// ============================================================

const SITE = {

  // ── YOUR NAME & TAGLINE ──────────────────────────────────
  name: "Md Rifath Ahamed",
  tagline: "Ecologist · Visual Storyteller · Content Strategist",
  location: "Helsinki, Finland",
  heroHeading: "Science meets\nstorytelling.",
  heroParagraph: "I'm a master's student in Ecology & Evolutionary Biology at the University of Helsinki — and a photographer, videographer, and content strategist with nine years of practice. I turn complex ideas into images, videos, and stories that actually land.",

  // ── YOUR PHOTO ───────────────────────────────────────────
  profilePhoto: "images/hero-rifath.jpg", 

  // ── CONTACT & SOCIAL ─────────────────────────────────────
  email: "rifath.ahamed@helsinki.fi",
  phone: "(+358) 468 813 957",
  linkedin: "https://www.linkedin.com/in/md-rifath-ahamed-842795387/",
  facebookProfile: "https://www.facebook.com/YOUR_PERSONAL_PROFILE", 
  facebookPage: "https://www.facebook.com/YOUR_CONTENT_PAGE",       
  cvPdfLink: "",   
  googleDrivePortfolio: "", 

  // ── STATS (hero numbers) ──────────────────────────────────
  stats: [
    { num: "9+", label: "Years in photography" },
    { num: "3",  label: "Canadian clients served" },
    { num: "2",  label: "Active research projects" },
    { num: "MSc", label: "Ecology & Evo Biology" },
  ],

  // ── ABOUT TEXT ───────────────────────────────────────────
  about: [
    "My path hasn't been a straight line. I transitioned from a traditional fisheries background in Bangladesh to computational evolutionary biology at the University of Helsinki. I didn't just move countries; I shifted disciplines. Today, my research at the Finnish Museum of Natural History involves coding R packages to visualize phylogenomic uncertainty and analyzing cichlid genetics.",
    
    "But I am not just an ecologist confined to a lab. For over nine years, I have worked as a photographer, videographer, and content strategist. I currently manage end-to-end digital production for international clients. I know how to handle complex academic data, but more importantly, I know how to translate it into visual stories that people actually care about.",
    
    "I believe in execution and community. When I arrived in Finland in 2025, I knew that surviving the first winter required more than just warm coats—it required connection. I began organizing potlucks and events to pull international students out of isolation. Whether I am coordinating a national photography exhibition, building DIY filtration systems for planted aquariums, or pushing myself to summit Mardi Himal at 14,450 feet, I tackle challenges directly, pragmatically, and without sugar-coating the effort it takes to succeed."
  ],

  // ── SKILLS ───────────────────────────────────────────────
  skills: [
    {
      group: "Visual & Creative",
      tags: ["Photography", "Videography", "Video Editing", "DaVinci Resolve",
             "Adobe Creative Cloud", "Content Strategy", "Social Media", "Storytelling"],
    },
    {
      group: "Science & Data",
      tags: ["R / RStudio", "Phylogenomics", "GIS / ArcGIS", "QGIS",
             "Tableau", "SPSS", "Bioinformatics", "Google Earth Engine"],
    },
    {
      group: "Languages",
      tags: ["Bengali (Native)", "English (C2)"],
    },
  ],

  // ── PORTFOLIO ITEMS ───────────────────────────────────────
  portfolio: [
    {
      type: "photo",
      title: "Content Strategy & Visuals",
      category: "photography",
      src: "images/hero-rifath.jpg",
    },
    {
      type: "placeholder",
      title: "National Photography Exhibition 2022",
      category: "photography",
      hint: "Add src:\"images/photo2.jpg\" here",
    },
    {
      type: "placeholder",
      title: "Video Editing Reel — Canadian Clients",
      category: "video",
      hint: "Add videoUrl:\"https://youtube.com/...\" here",
    },
    {
      type: "placeholder",
      title: "Social Media Content Strategy",
      category: "social",
      hint: "Add driveLink:\"https://drive.google.com/...\" here",
    },
    {
      type: "placeholder",
      title: "SBMUN 2022 — Director of Photography",
      category: "photography",
      hint: "Add src:\"images/sbmun.jpg\" here",
    },
    {
      type: "placeholder",
      title: "Science Communication & Posters",
      category: "science",
      hint: "Add src:\"images/poster.jpg\" here",
    },
  ],

  // ── RESEARCH ──────────────────────────────────────────────
  research: [
    {
      type: "Master's Thesis · Ongoing",
      title: "PhyloRug — R Package for Phylogenetic Visualisation",
      org: "University of Helsinki · Tarasov Lab, LUOMUS · 2025–present",
      desc: "Developing an R package that formalises a 'rug plot' method for comparing node support values across multiple phylogenetic analyses simultaneously. Based on dung beetle (Scarabaeinae + Aphodiinae) phylogenomic data. Targeting CRAN publication and Methods in Ecology & Evolution.",
    },
    {
      type: "Research Project · Ongoing",
      title: "Cichlid Pigmentation Genetics — pax7 & the Blotched Phenotype",
      org: "University of Helsinki · Tarasov Lab · 2025–present",
      desc: "Investigating whether the transcription factor pax7 drives the blotched pigmentation phenotype in Haplochromis chilotes cichlids from Ruti Island, Lake Victoria. Combines melanophore biology, genetics, and evolutionary theory.",
    },
    {
      type: "Research Assistant · 2023–present",
      title: "Ocean Country Partnership Programme (OCPP)",
      org: "UK Blue Planet Fund · Multinational Collaboration",
      desc: "Contributed to a UK-funded multinational project. Conducted lab research, field-based spatial data collection, and applied GIS and remote sensing using ArcGIS and R.",
    },
    {
      type: "Research Assistant · 2025–present",
      title: "Integrated Coastal Resilience Hub",
      org: "GSTU Science Club · Sverige · ICCCAD · Collaborative",
      desc: "GIS-based spatial analysis for coastal pollution. Collected soil, water, and fish samples for microplastic quantification. Contributed to designing a citizen science community hub.",
    },
  ],

  // ── AWARDS ────────────────────────────────────────────────
  awards: [
    {
      year: "2023",
      title: "Special Mention Award — Global Affair Council, GSTU",
      detail: "Model UN · International Cricket Council Committee · Represented New Zealand",
    },
    {
      year: "2023",
      title: "Literature Review Writing Competition Winner",
      detail: "GSTU Research and Higher Studies Society",
    },
  ],

  // ── EXPERIENCE ────────────────────────────────────────────
  experience: [
    {
      track: "Creative",
      items: [
        {
          date: "Current",
          role: "Video Editor & Content Strategist",
          org: "3 Canadian Companies — Remote",
          desc: "End-to-end social media content strategy and video production for three international clients. Scripting, shooting, editing, and performance analysis.",
        },
        {
          date: "2019 – 2024",
          role: "Organising Secretary",
          org: "GSTU Photographic Society",
          desc: "Organised the National Photography Exhibition 2022. Led photography workshops and photo walks. Managed event logistics and community outreach.",
        },
        {
          date: "2022",
          role: "Director of Photography",
          org: "South Bangla Model United Nations (SBMUN)",
          desc: "Led the photography team across the full event. Received formal commendation for exceptional coverage quality.",
        },
      ],
    },
    {
      track: "Research & Academic",
      items: [
        {
          date: "2025 – Present",
          role: "MSc Student & Research Assistant",
          org: "University of Helsinki · Tarasov Lab, LUOMUS",
          desc: "Phylogenomics, R package development, and cichlid genetics research under Dr. Sergei Tarasov at the Finnish Museum of Natural History.",
        },
        {
          date: "2023 – Present",
          role: "Research Assistant",
          org: "Ocean Country Partnership Programme (OCPP)",
          desc: "GIS, remote sensing, lab work, and scientific communication for a UK Blue Planet Fund-backed multinational project.",
        },
        {
          date: "2022 – 2023",
          role: "Research Intern",
          org: "Fish Nutrition Lab · Bangladesh Agricultural University",
          desc: "Training in aquaculture: Kjeldahl, Soxhlet, Spirulina culture, aquaponics, and induced breeding.",
        },
      ],
    },
  ],

};

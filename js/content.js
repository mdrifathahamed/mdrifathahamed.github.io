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
  // Option A: paste a direct image URL (Google Drive, Imgur, etc.)
  // Option B: put a photo file called "profile.jpg" inside the /images/ folder
  //           and set this to: "images/profile.jpg"
  profilePhoto: "images/hero-rifath.jpg", // leave empty to show initials placeholder

  // ── CONTACT & SOCIAL ─────────────────────────────────────
  email: "rifath.ahamed@helsinki.fi",
  phone: "(+358) 468 813 957",
  linkedin: "https://www.linkedin.com/in/md-rifath-ahamed-842795387/",
  facebookProfile: "https://www.facebook.com/YOUR_PERSONAL_PROFILE", // update this
  facebookPage: "https://www.facebook.com/YOUR_CONTENT_PAGE",       // update this
  cvPdfLink: "",   // paste a Google Drive PDF share link, or "files/rifath_cv.pdf"
  googleDrivePortfolio: "", // your main portfolio Drive folder link

  // ── STATS (hero numbers) ──────────────────────────────────
  stats: [
    { num: "9+", label: "Years in photography" },
    { num: "3",  label: "Canadian clients served" },
    { num: "2",  label: "Active research projects" },
    { num: "MSc", label: "Ecology & Evo Biology" },
  ],

  // ── ABOUT TEXT ───────────────────────────────────────────
  about: [
    "I'm a master's student in <strong>Ecology & Evolutionary Biology</strong> at the University of Helsinki, working on phylogenomics and cichlid pigmentation genetics under Dr. Sergei Tarasov at LUOMUS (Finnish Museum of Natural History).",
    "Alongside science, I've built nine years of practice in <strong>photography, videography, and content creation</strong> — from organising a national photography exhibition to currently managing social media strategy and video production for three Canadian companies.",
    "I arrived in Helsinki from Bangladesh in 2025. That experience — navigating a new country and a new scientific community — shapes how I communicate: with precision, with empathy, and with a genuine eye for what matters to an audience.",
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
  // To add a photo:  { type:"photo", title:"...", category:"photography", src:"images/mywork.jpg" }
  // To add a video:  { type:"video", title:"...", category:"video", src:"images/thumb.jpg", videoUrl:"https://youtube.com/..." }
  // To add a Drive:  { type:"drive", title:"...", category:"social", driveLink:"https://drive.google.com/..." }
  // Categories: "photography" | "video" | "social" | "science"
  portfolio: [
    {
      type: "placeholder",
      title: "Street & Travel Photography",
      category: "photography",
      hint: "Add src:\"images/photo1.jpg\" here",
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
      desc: "Developing an R package that formalises a "rug plot" method for comparing node support values across multiple phylogenetic analyses simultaneously. Based on dung beetle (Scarabaeinae + Aphodiinae) phylogenomic data. Targeting CRAN publication and <em>Methods in Ecology & Evolution</em>.",
    },
    {
      type: "Research Project · Ongoing",
      title: "Cichlid Pigmentation Genetics — <em>pax7</em> & the Blotched Phenotype",
      org: "University of Helsinki · Tarasov Lab · 2025–present",
      desc: "Investigating whether the transcription factor <em>pax7</em> drives the blotched pigmentation phenotype in <em>Haplochromis chilotes</em> cichlids from Ruti Island, Lake Victoria. Combines melanophore biology, genetics, and evolutionary theory.",
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

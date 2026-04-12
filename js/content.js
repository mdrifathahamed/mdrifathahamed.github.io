// ╔══════════════════════════════════════════════════════════════════╗
// ║          RIFATH'S PORTFOLIO — THE ONLY FILE YOU EVER EDIT        ║
// ║                                                                  ║
// ║  HOW THIS WORKS:                                                 ║
// ║  1. Put your image/video files in the  images/  folder           ║
// ║  2. Rename them exactly as listed at the bottom of this file     ║
// ║  3. That's it. The website picks them up automatically.          ║
// ║                                                                  ║
// ║  You NEVER need to touch index.html or js/app.js                 ║
// ╚══════════════════════════════════════════════════════════════════╝

const SITE = {


  // ════════════════════════════════════════════════════════════════
  //  SECTION 1 — YOUR BASIC INFO
  //  Just change the text between the quotes.
  // ════════════════════════════════════════════════════════════════

  name:     "Md Rifath Ahamed",
  tagline:  "Photographer · Video Editor · Content Strategist · Ecologist",
  location: "Helsinki, Finland",

  // The big heading on the home page.
  // \n means "new line". The last word gets the amber colour automatically.
  heroHeading: "Md Rifath\nAhamed.",

  // The paragraph under your name on the home page.
  heroParagraph: "Photographer. Video editor. Content strategist. MSc student in Ecology & Evolutionary Biology at the University of Helsinki. Nine years behind the lens — and a genuine love for turning complex ideas into stories that connect.",


  // ════════════════════════════════════════════════════════════════
  //  SECTION 2 — YOUR PROFILE PHOTO
  //
  //  STEP 1: Put your photo in the images/ folder.
  //  STEP 2: Name it exactly:  profile.jpg
  //  STEP 3: Change  ""  to  "images/profile.jpg"  on the line below.
  //
  //  If you leave it as ""  →  your initials show as a placeholder.
  // ════════════════════════════════════════════════════════════════

  profilePhoto:"images/profile.jpg",
  //             ^ change to "images/profile.jpg" once you add the file


  // ════════════════════════════════════════════════════════════════
  //  SECTION 3 — YOUR LINKS & CONTACT
  //  Replace the placeholder text with your real links.
  //  Leave as "" if you don't have that link yet.
  // ════════════════════════════════════════════════════════════════

  email:   "rifath.ahamed@helsinki.fi",
  phone:   "(+358) 468 813 957",
  linkedin: "https://www.linkedin.com/in/md-rifath-ahamed-842795387/",
  Instragram:"https://www.instagram.com/rifath_ahamed_/",

  // Your Facebook content/portfolio PAGE (the public page, not personal profile).
  // Leave as "" to hide it.
  facebookPage:"https://www.facebook.com/profile.php?id=100089186311123",
  // facebookPage: "https://www.facebook.com/YOUR_PAGE_NAME",

  // Your Google Drive portfolio folder.
  // How: right-click folder in Drive → Share → Anyone with link → Copy link
  googleDrivePortfolio: "",
  // googleDrivePortfolio: "https://drive.google.com/drive/folders/XXXXXX",

  // Your CV as a PDF.
  // Option A: put rifath-cv.pdf in the images/ folder → "images/rifath-cv.pdf"
  // Option B: share CV on Google Drive and paste the link here
  cvPdfLink: "",
  // cvPdfLink: "images/rifath-cv.pdf",

  // Your live website URL (fill this in once you publish on GitHub Pages)
  portfolioUrl: "",
  // portfolioUrl: "https://rifathahamed.github.io",


  // ════════════════════════════════════════════════════════════════
  //  SECTION 4 — THE STAT CARDS ON YOUR PHOTO
  //  Change num and label to whatever you want to show.
  // ════════════════════════════════════════════════════════════════

  stats: [
    { num: "9+",  label: "Years in photography"  },
    { num: "3",   label: "International clients"  },
    { num: "2",   label: "Research projects"      },
    { num: "MSc", label: "Ecology & Evo Biology"  },
  ],


  // ════════════════════════════════════════════════════════════════
  //  SECTION 5 — ABOUT PARAGRAPHS
  //  Each item in the list = one paragraph on the page.
  //  You can use <strong>bold text</strong> inside the quotes.
  //  Add or remove paragraphs — just keep the comma after each one.
  // ════════════════════════════════════════════════════════════════

  about: [
    "I've spent nine years as a photographer and videographer including street, event, travel, documentary. Right now I work remotely as a <strong>video editor and content strategist</strong> for a for a Canadian Business consultation Company, SYZ International, managing their social media accounts end to end strategy, production, editing, and results review.",
    "Alongside that, I'm doing a master's in <strong>Ecology & Evolutionary Biology</strong> at the University of Helsinki, working on phylogenomics under Dr. Sergei Tarasov at LUOMUS. I moved here from Bangladesh in 2025 .So I know first-hand what it feels like to navigate a new university, a new culture, and a new community.",
    "That experience shapes how I communicate: with patience, with warmth, and with an eye for what actually matters to a new audience.",
  ],


  // ════════════════════════════════════════════════════════════════
  //  SECTION 6 — SKILLS
  //  Add or remove tags in any group.
  //  Keep each tag as "Text In Quotes", followed by a comma.
  // ════════════════════════════════════════════════════════════════

  skills: [
    {
      group: "Content & Creative",
      tags: [
        "Photography", "Videography", "Video Editing", "DaVinci Resolve",
        "Adobe Creative Cloud", "Content Strategy", "Social Media Management",
        "Storytelling", "Event Organisation", "Student Communications",
      ],
    },
    {
      group: "Science & Data",
      tags: [
        "R / RStudio", "Phylogenomics", "GIS / ArcGIS", "QGIS",
        "Tableau", "SPSS", "Bioinformatics", "Google Earth Engine",
      ],
    },
    {
      group: "Languages",
      tags: ["Bengali (Native)", "English (C2 — Proficient)"],
    },
  ],


  // ════════════════════════════════════════════════════════════════
  //  SECTION 7 — PORTFOLIO GRID
  //
  //  Each item below = one card in the portfolio grid.
  //
  //  TO ADD A PHOTO:
  //    1. Put your jpg in the images/ folder with the right filename
  //    2. The card below already points to that filename
  //    3. Done — it shows automatically
  //
  //  TO ADD A VIDEO:
  //    1. Upload to YouTube (can be unlisted)
  //    2. Put a thumbnail jpg in images/ with the right filename
  //    3. Paste the YouTube URL into videoUrl below
  //
  //  CATEGORIES (controls which filter tab shows it):
  //    "photography"  "video"  "social"  "science"
  //
  //  See the full filename list at the very bottom of this file.
  // ════════════════════════════════════════════════════════════════

  portfolio: [

    // ─── PHOTOGRAPHY ──────────────────────────────────────────────
    // Rename your best street photo to  photo-street-01.jpg
    {
      type:     "photo",
      title:    "Street & Urban Photography",
      category: "photography",
      src:"images/photo-street-01.jpg",
    },

    // Rename your second street photo to  photo-street-02.jpg
    {
      type:     "photo",
      title:    "Street Life — Dhaka",
      category: "photography",
      src:"images/photo-street-02.jpg",
    },

    // Rename an exhibition/event photo to  photo-event-01.jpg
    {
      type:     "photo",
      title:    "National Photography Exhibition 2022",
      category: "photography",
      src:"images/photo-event-01.jpeg",
    },

    // Rename an SBMUN photo to  photo-event-02.jpg
    {
      type:     "photo",
      title:    "Mardi Himal Base Camp,Hymalayas",
      category: "photography",
      src:"images/photo-event-02.jpg",
    },

    // Rename a travel photo to  photo-travel-01.jpg
    {
      type:     "photo",
      title:    "Travel Photography",
      category: "photography",
      src:"images/photo-travel-01.jpg",
    },

    // Rename a Helsinki/Finland photo to  photo-travel-02.jpg
    {
      type:     "photo",
      title:    "Helsinki — Winter Light",
      category: "photography",
      src:"images/photo-travel-02.jpg",
    },

    // Rename a nature/field photo to  photo-nature-01.jpg
    {
      type:     "photo",
      title:    "Nature & Field Photography",
      category: "photography",
      src:"images/photo-nature-01.jpg",
    },

    // Rename a portrait to  photo-portrait-01.jpg
    {
      type:     "photo",
      title:    "Abstract Photography",
      category: "photography",
      src:"images/photo-portrait-01.jpg",
    },


    // ─── VIDEO ────────────────────────────────────────────────────
    // For each video:
    //   1. Put a thumbnail JPG in images/ with the filename shown
    //   2. Paste your YouTube URL into videoUrl (replacing PASTE_YOUR_ID)
    //   Get YouTube ID from URL: youtube.com/watch?v=THIS_PART

    {
      type:     "video",
      title:    "Video Editing Reel for Steelhorse Automotives",
      category: "video",
      src:      "images/video-reel-thumb.png",      // ← thumbnail screenshot
      videoUrl: "https://drive.google.com/file/d/1JrOItPjTV8xZJtn-59BuNiqRvV0ooleA/view?usp=drive_link",
    },

    {
      type:     "video",
      title:    "Social Media Video for CKC Automotives",
      category: "video",
      src:      "images/video-social-thumb.jpg",
      videoUrl: "https://drive.google.com/file/d/1fOLfCg8TJ_9vv8Q8rtYLnnBkxrzBzeNc/view?usp=drive_link",
    },

    {
      type:     "video",
      title:    "Field Trip to Evo ",
      category: "video",
      src:      "images/video-documentary-thumb.jpg",
      videoUrl: "https://drive.google.com/file/d/1qiERHg4Ngvrm7OR3d3KKVnoRf_CL3Jbh/view?usp=drive_link",
    },


    // ─── SOCIAL MEDIA SCREENSHOTS ─────────────────────────────────
    // Take screenshots of your best Instagram/social posts.
    // Save them as the filenames below and drop them in images/.

    {
      type:     "video",
      title:    "A  day of a Ecology and Evolutionary  Biology Student",
      category: "video",
      src:      "images/video-documentary-thumb1.jpg",
      videoUrl: "https://drive.google.com/file/d/1Ovo_4wsfe3qlz6hCWshy6oGp3YeaiSbB/view?usp=drive_link",
    },
    {
      type:     "photo",
      title:    "Instagram Campaign — Client 1",
      category: "social",
      src:"images/social-instagram-01.jpg",
    },

    {
      type:     "video",
      title:    "An content made for an scholarship Application",
      category: "video",
      src:"images/imagesvideo-application-thumb.png", 
      videoUrl: "https://drive.google.com/file/d/1xYtfWvBFXLK82Vf59GzKUPY4MwuWea_2/view?usp=sharing",
    },

    // If you'd rather link to a Google Drive folder of social work,
    // uncomment and use this instead of (or alongside) the above:
    // {
    //   type:      "drive",
    //   title:     "Full Social Media Archive",
    //   category:  "social",
    //   driveLink: "https://drive.google.com/drive/folders/XXXXXX",
    // },


    // ─── SCIENCE COMMUNICATION ────────────────────────────────────
    // Photos of posters, fieldwork, lab work, presentations, etc.

    {
      type:     "photo",
      title:    "Research Poster — PhyloRug Package",
      category: "science",
      src: "images/science-poster-01.png",
    },

    {
      type:     "photo",
      title:    "Field Research",
      category: "science",
      src:      "images/science-fieldwork-01.jpg",
    },

    {
      type:     "photo",
      title:    "Laboratory Work, Fish Nutrition  Lab BAU",
      category: "science",
      src:      "images/science-lab-01.jpg",
    },

  ],


  // ════════════════════════════════════════════════════════════════
  //  SECTION 8 — RESEARCH PROJECTS
  //  Use <em>text</em> for italic (for scientific names etc).
  //  Add more objects inside the [ ] if you have more projects.
  // ════════════════════════════════════════════════════════════════

  research: [
    {
      type:  "Master's Thesis · Ongoing",
      title: "PhyloRug — R Package for Phylogenetic Visualisation",
      org:   "University of Helsinki · Tarasov Lab, LUOMUS · 2025–present",
      desc:  "Developing an R package that formalises a \"rug plot\" method for comparing node support values across multiple phylogenetic analyses simultaneously. Based on dung beetle (Scarabaeinae + Aphodiinae) phylogenomic data. Targeting CRAN publication and <em>Methods in Ecology & Evolution</em>.",
    },
    {
      type:  "Research Assistant · 2023–present",
      title: "Ocean Country Partnership Programme (OCPP)",
      org:   "UK Blue Planet Fund · Multinational Collaboration",
      desc:  "Contributed to a UK-funded multinational project. Conducted lab research, field-based spatial data collection, and applied GIS and remote sensing using ArcGIS and R.",
    },
    {
      type:  "Research Assistant · 2025–present",
      title: "Integrated Coastal Resilience Hub — Citizen Science",
      org:   "GSTU Science Club · Sverige · ICCCAD · Collaborative",
      desc:  "GIS-based spatial analysis for coastal pollution. Collected soil, water, and fish samples for microplastic quantification. Contributed to designing a citizen science community hub for environmental monitoring.",
    },
  ],


  // ════════════════════════════════════════════════════════════════
  //  SECTION 9 — AWARDS
  //  Add or remove entries. Keep the same format with commas.
  // ════════════════════════════════════════════════════════════════

  awards: [
    {
      year:   "2023",
      title:  "Special Mention Award — Global Affair Council, GSTU",
      detail: "Model UN · International Cricket Council Committee · Represented New Zealand",
    },
    {
      year:   "2023",
      title:  "Literature Review Writing Competition Winner",
      detail: "GSTU Research and Higher Studies Society",
    },
  ],


  // ════════════════════════════════════════════════════════════════
  //  SECTION 10 — EXPERIENCE TIMELINE
  //  Two columns: track "Creative" and track "Research & Academic"
  //  Add more items inside each track's items: [ ] list.
  // ════════════════════════════════════════════════════════════════

  experience: [
    {
      track: "Creative",
      items: [
        {
          date: "2025 – Current",
          role: "Video Editor & Content Strategist",
          org:  "3 Canadian Companies — Remote",
          desc: "End-to-end social media content strategy and video production for three international clients. Scripting, shooting, editing, and performance analysis.",
        },
        {
          date: "2019 – 2024",
          role: "Organising Secretary",
          org:  "GSTU Photographic Society",
          desc: "Organised the National Photography Exhibition 2022. Led photography workshops and photo walks. Managed event logistics and community outreach.",
        },
        {
          date: "2022",
          role: "Director of Photography",
          org:  "South Bangla Model United Nations (SBMUN)",
          desc: "Led the photography team across the full event. Received formal commendation for exceptional coverage quality.",
        },
        {
          date: "2023 – 2024",
          role: "Executive Member",
          org:  "Global Affair Council, GSTU",
          desc: "Contributed to event planning, communications, and student engagement activities.",
        },
      ],
    },
    {
      track: "Research & Academic",
      items: [
        {
          date: "2025 – Present",
          role: "MSc Student & Research Assistant",
          org:  "University of Helsinki · Tarasov Lab, LUOMUS",
          desc: "Phylogenomics, R package development, and phylogenomic method development research under Dr. Sergei Tarasov at the Finnish Museum of Natural History.",
        },
        {
          date: "2023 – Present",
          role: "Research Assistant",
          org:  "Ocean Country Partnership Programme (OCPP)",
          desc: "GIS, remote sensing, lab work, and scientific communication for a UK Blue Planet Fund-backed multinational project.",
        },
        {
          date: "2025 – Present",
          role: "Research Assistant",
          org:  "Integrated Coastal Resilience Hub",
          desc: "GIS-based spatial analysis, microplastic sampling, citizen science hub design. Collaborative project between GSTU, Sverige, and ICCCAD.",
        },
        {
          date: "Dec 2022 – Jan 2023",
          role: "Research Intern",
          org:  "Fish Nutrition Lab · Bangladesh Agricultural University",
          desc: "Training in Kjeldahl, Soxhlet, Spirulina culture, aquaponics, and induced breeding.",
        },
      ],
    },
  ],

};


// ════════════════════════════════════════════════════════════════════════
//
//  📁  COMPLETE FILE NAMING GUIDE — YOUR CHEAT SHEET
//
//  Put ALL files in:  rifath-portfolio/images/
//  Rename them to match the filenames below EXACTLY (case sensitive).
//  Files that are missing just won't show — no error, no crash.
//
//  ╔══════════════════════════════════════╦══════════════════════════════╗
//  ║ RENAME YOUR FILE TO...               ║ WHAT IT IS                   ║
//  ╠══════════════════════════════════════╬══════════════════════════════╣
//  ║ PROFILE                              ║                              ║
//  ║  profile.jpg                         ║ Your headshot / profile pic  ║
//  ╠══════════════════════════════════════╬══════════════════════════════╣
//  ║ PHOTOGRAPHY                          ║                              ║
//  ║  photo-street-01.jpg                 ║ Best street photo            ║
//  ║  photo-street-02.jpg                 ║ Second street photo          ║
//  ║  photo-event-01.jpg                  ║ Exhibition photo             ║
//  ║  photo-event-02.jpg                  ║ SBMUN / event photo          ║
//  ║  photo-travel-01.jpg                 ║ Best travel shot             ║
//  ║  photo-travel-02.jpg                 ║ Helsinki / Finland photo     ║
//  ║  photo-nature-01.jpg                 ║ Nature / wildlife photo      ║
//  ║  photo-portrait-01.jpg               ║ Portrait photo               ║
//  ╠══════════════════════════════════════╬══════════════════════════════╣
//  ║ VIDEO THUMBNAILS (jpeg screenshots!) ║                              ║
//  ║  video-reel-thumb.jpg                ║ Thumbnail for editing reel   ║
//  ║  video-social-thumb.jpg              ║ Thumbnail for social video   ║
//  ║  video-documentary-thumb.jpg         ║ Thumbnail for documentary    ║
//  ╠══════════════════════════════════════╬══════════════════════════════╣
//  ║ SOCIAL MEDIA (screenshots)           ║                              ║
//  ║  social-instagram-01.jpg             ║ Instagram post screenshot    ║
//  ║  social-instagram-02.jpg             ║ Instagram post screenshot    ║
//  ║  social-carousel-01.jpg              ║ Carousel / branded content   ║
//  ╠══════════════════════════════════════╬══════════════════════════════╣
//  ║ SCIENCE                              ║                              ║
//  ║  science-poster-01.jpg               ║ Research poster photo        ║
//  ║  science-fieldwork-01.jpg            ║ Field research photo         ║
//  ║  science-lab-01.jpg                  ║ Lab work / LUOMUS photo      ║
//  ╠══════════════════════════════════════╬══════════════════════════════╣
//  ║ OPTIONAL                             ║                              ║
//  ║  rifath-cv.pdf                       ║ Your CV (if not using Drive) ║
//  ╚══════════════════════════════════════╩══════════════════════════════╝
//
//  ⚡ QUICK IMAGE TIPS:
//     • Resize photos to max 1400px wide before saving
//     • Keep each file under 300KB for fast loading
//     • Compress for free at: https://squoosh.app (JPG, quality 80%)
//     • For screenshots: crop to 4:3 ratio for consistent grid look
//
//  🎬 VIDEO TIPS:
//     • Don't put .mp4 files in images/ — they're too big for GitHub
//     • Upload to YouTube instead (can be Unlisted so only you share it)
//     • The "thumb" file is just a screenshot/still from your video
//     • Get your YouTube video ID from the URL after "watch?v="
//       e.g. youtube.com/watch?v=dQw4w9WgXcQ → ID is dQw4w9WgXcQ
//
// ════════════════════════════════════════════════════════════════════════

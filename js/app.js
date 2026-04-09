// ============================================================
//  RIFATH PORTFOLIO — PAGE BUILDER
//  Reads SITE config from content.js and renders everything.
//  You don't need to edit this file.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV scroll shadow
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });

  // ── RENDER NAV LOGO
  document.querySelector('.nav-logo').textContent = SITE.name;

  // ── RENDER HERO
  const heroH1 = document.getElementById('hero-h1');
  const lines = SITE.heroHeading.split('\n');
  heroH1.innerHTML = lines.map((l, i) => i === lines.length - 1
    ? `<span class="accent">${l}</span>` : l + '<br>').join('');

  document.getElementById('hero-tagline').textContent = SITE.tagline;
  document.getElementById('hero-desc').textContent = SITE.heroParagraph;

  // photo
  const photoWrap = document.getElementById('photo-content');
  if (SITE.profilePhoto) {
    photoWrap.innerHTML = `<img src="${SITE.profilePhoto}" alt="${SITE.name}">`;
  } else {
    const initials = SITE.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    photoWrap.innerHTML = `
      <div class="photo-initials">
        <div class="initials">${initials}</div>
        <div class="hint">Add your photo in<br><strong>js/content.js</strong><br>→ profilePhoto</div>
      </div>`;
  }

  // stat badges
  const s = SITE.stats;
  if (s.length >= 2) {
    document.getElementById('badge1-num').textContent   = s[0].num;
    document.getElementById('badge1-label').textContent = s[0].label;
    document.getElementById('badge2-num').textContent   = s[1].num;
    document.getElementById('badge2-label').textContent = s[1].label;
  }

  // drive button
  const driveBtn = document.getElementById('hero-drive-btn');
  if (SITE.googleDrivePortfolio) {
    driveBtn.href = SITE.googleDrivePortfolio;
    driveBtn.style.display = 'inline-flex';
  }

  // ── RENDER ABOUT
  const aboutEl = document.getElementById('about-paragraphs');
  aboutEl.innerHTML = SITE.about.map(p => `<p>${p}</p>`).join('');

  const skillsEl = document.getElementById('skills-wrap');
  skillsEl.innerHTML = SITE.skills.map(sg => `
    <div class="skill-group">
      <div class="skill-group-label">${sg.group}</div>
      <div class="skill-tags">${sg.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`).join('');

  // ── RENDER PORTFOLIO
  buildPortfolio('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildPortfolio(btn.dataset.cat);
    });
  });

  function buildPortfolio(cat) {
    const grid = document.getElementById('portfolio-grid');
    const items = cat === 'all' ? SITE.portfolio : SITE.portfolio.filter(p => p.category === cat);
    grid.innerHTML = '';

    if (items.length === 0) {
      grid.innerHTML = `<p style="color:var(--text-light); font-style:italic; font-size:0.9rem; grid-column:1/-1;">No items in this category yet. Add some in <strong>js/content.js</strong>.</p>`;
      return;
    }

    items.forEach((item, i) => {
      if (item.type === 'placeholder') {
        const a = document.createElement('a');
        a.className = 'p-placeholder reveal';
        a.href = SITE.googleDrivePortfolio || '#';
        if (SITE.googleDrivePortfolio) a.target = '_blank';
        a.innerHTML = `
          <div class="ph-num">0${i + 1}</div>
          <div class="ph-title">${item.title}</div>
          <div class="ph-hint">${item.hint}</div>
          <div class="ph-add">Open Drive ↗</div>`;
        grid.appendChild(a);
      } else if (item.type === 'photo') {
        const div = document.createElement('div');
        div.className = 'p-card reveal';
        div.innerHTML = `
          <img src="${item.src}" alt="${item.title}" loading="lazy">
          <div class="p-card-overlay">
            <div class="p-card-title">${item.title}</div>
            <div class="p-card-cat">${item.category}</div>
          </div>`;
        div.addEventListener('click', () => openLightbox('image', item.src));
        grid.appendChild(div);
      } else if (item.type === 'video') {
        const div = document.createElement('div');
        div.className = 'p-card reveal';
        const thumb = item.src || '';
        div.innerHTML = `
          ${thumb ? `<img src="${thumb}" alt="${item.title}" loading="lazy">` : `<div style="width:100%;height:100%;background:var(--sand-3);"></div>`}
          <div class="play-btn">▶</div>
          <div class="p-card-overlay">
            <div class="p-card-title">${item.title}</div>
            <div class="p-card-cat">Video</div>
          </div>`;
        div.addEventListener('click', () => {
          if (item.videoUrl) window.open(item.videoUrl, '_blank');
        });
        grid.appendChild(div);
      } else if (item.type === 'drive') {
        const a = document.createElement('a');
        a.className = 'p-placeholder reveal';
        a.href = item.driveLink;
        a.target = '_blank';
        a.innerHTML = `
          <div class="ph-num">↗</div>
          <div class="ph-title">${item.title}</div>
          <div class="ph-add">View on Google Drive</div>`;
        grid.appendChild(a);
      }
    });

    // drive footer
    const driveCta = document.getElementById('drive-cta');
    if (SITE.googleDrivePortfolio) {
      driveCta.querySelector('a').href = SITE.googleDrivePortfolio;
      driveCta.style.display = 'flex';
    }

    observeReveal();
  }

  // ── RENDER RESEARCH
  const researchGrid = document.getElementById('research-grid');
  researchGrid.innerHTML = SITE.research.map(r => `
    <div class="r-card reveal">
      <div class="r-type">${r.type}</div>
      <div class="r-title">${r.title}</div>
      <div class="r-org">${r.org}</div>
      <div class="r-desc">${r.desc}</div>
    </div>`).join('');

  const awardsEl = document.getElementById('awards-rows');
  awardsEl.innerHTML = SITE.awards.map(a => `
    <div class="award-item reveal">
      <div class="award-year">${a.year}</div>
      <div>
        <div class="award-title">${a.title}</div>
        <div class="award-detail">${a.detail}</div>
      </div>
    </div>`).join('');

  // ── RENDER EXPERIENCE
  const expGrid = document.getElementById('exp-grid');
  expGrid.innerHTML = SITE.experience.map(track => `
    <div>
      <div class="exp-track-label">${track.track}</div>
      <div class="timeline">
        ${track.items.map(item => `
          <div class="t-item reveal">
            <div class="t-date">${item.date}</div>
            <div class="t-role">${item.role}</div>
            <div class="t-org">${item.org}</div>
            <div class="t-desc">${item.desc}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  // ── RENDER CONTACT
  const email    = SITE.email;
  const phone    = SITE.phone;
  const linkedin = SITE.linkedin;

  document.getElementById('contact-links').innerHTML = `
    <a href="mailto:${email}" class="c-link">
      <div class="c-link-icon">✉</div>
      <div><div class="c-link-label">Email</div><div class="c-link-val">${email}</div></div>
    </a>
    <a href="tel:${phone.replace(/\s/g,'')}" class="c-link">
      <div class="c-link-icon">📞</div>
      <div><div class="c-link-label">Phone</div><div class="c-link-val">${phone}</div></div>
    </a>
    <a href="${linkedin}" target="_blank" class="c-link">
      <div class="c-link-icon">in</div>
      <div><div class="c-link-label">LinkedIn</div><div class="c-link-val">md-rifath-ahamed</div></div>
    </a>
    ${SITE.facebookPage ? `<a href="${SITE.facebookPage}" target="_blank" class="c-link">
      <div class="c-link-icon">f</div>
      <div><div class="c-link-label">Facebook Page</div><div class="c-link-val">Content Portfolio Page</div></div>
    </a>` : ''}
    ${SITE.googleDrivePortfolio ? `<a href="${SITE.googleDrivePortfolio}" target="_blank" class="c-link">
      <div class="c-link-icon">▶</div>
      <div><div class="c-link-label">Portfolio Drive</div><div class="c-link-val">Full content archive ↗</div></div>
    </a>` : ''}
  `;

  // cv card
  const cvCard = document.getElementById('cv-card');
  if (SITE.cvPdfLink) {
    cvCard.querySelector('a').href = SITE.cvPdfLink;
    cvCard.querySelector('a').style.display = 'inline-flex';
  }

  // footer
  document.getElementById('footer-name').textContent = SITE.name;

  // ── LIGHTBOX
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbVideo = document.getElementById('lb-video');
  document.getElementById('lb-close').addEventListener('click', () => {
    lb.classList.remove('open');
    lbVideo.pause();
  });
  lb.addEventListener('click', e => {
    if (e.target === lb) { lb.classList.remove('open'); lbVideo.pause(); }
  });

  function openLightbox(type, src) {
    if (type === 'image') {
      lbImg.src = src; lbImg.style.display = 'block';
      lbVideo.style.display = 'none';
    } else {
      lbVideo.src = src; lbVideo.style.display = 'block';
      lbImg.style.display = 'none';
    }
    lb.classList.add('open');
  }

  // ── SCROLL REVEAL
  function observeReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), idx * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  observeReveal();
});

// ════════════════════════════════════════════════════════════
// 911.Today — Main Script
// ════════════════════════════════════════════════════════════

const BRANDS = [
  {
    id: 'crownstrike',
    name: 'Crownstrike',
    icon: '👑',
    tagline: 'The Crown Never Stops Moving',
    description: 'A next-generation platform built for the modern sovereign. Crownstrike delivers premium tools and resources for those on the path to mastery — where ambition meets execution.',
    founderMsg: 'Every tool in Crownstrike was built because I needed it. Now you have it too.',
    url: 'https://app.crownstrikeofficial.com',
    urlLabel: 'Enter Platform'
  },
  {
    id: 'winthehour',
    name: 'Win The Hour!™',
    icon: '⏱',
    tagline: 'Own Every 60 Minutes',
    description: 'The hourly productivity and accountability app. Win The Hour!™ turns your day into a series of battles you can actually win — one hour at a time. Track. Rate. Win.',
    founderMsg: 'Time is the only resource that doesn\'t replenish. Win The Hour is how you stop leaking it.',
    url: 'https://winthehour.app',
    urlLabel: 'Learn More'
  },
  {
    id: 'trpsh',
    name: 'TRPSH',
    icon: '🧭',
    tagline: 'The Right Path Starts Here',
    description: 'An education platform giving young people the financial and life knowledge they needed before college. The guidance system, courses, and banking resources no one handed them.',
    founderMsg: 'I built TRPSH for the student version of me — who had no idea what was coming.',
    url: 'https://trpsh-site.vercel.app',
    urlLabel: 'Explore TRPSH'
  },
  {
    id: 'nooworld',
    name: 'Noo World',
    icon: '🌐',
    tagline: 'Welcome to the Noo World',
    description: 'A unified ecosystem of platforms and brands operating under the Noo World identity framework. One login. One signal. An entire world of ventures to discover.',
    founderMsg: 'The Noo World is not a place. It\'s a state of arrival.',
    url: 'https://www.thenooworld.com',
    urlLabel: 'Enter the Noo World'
  },
  {
    id: 'forbidden-gnosis',
    name: 'Forbidden Gnosis',
    icon: '🔮',
    tagline: 'Knowledge They Didn\'t Want You to Have',
    description: 'A platform dedicated to esoteric knowledge, hidden history, and the ancient wisdom traditions that shaped civilization from the shadows. The truth has always existed. Now find it.',
    founderMsg: 'The most dangerous thing a human can do is know the truth.',
    url: 'https://forbiddengnosis.com',
    urlLabel: 'Access the Gnosis'
  },
  {
    id: 'support-groups',
    name: 'Support Groups Online',
    icon: '🤝',
    tagline: 'You Don\'t Have to Go Through It Alone',
    description: 'A digital sanctuary for peer support and community healing. Connect with others who truly understand your journey. Real community. Real connection. Real healing.',
    founderMsg: 'The strongest thing you can do is ask for support.',
    url: 'https://supportgroups.online',
    urlLabel: 'Find Your Group'
  },
  {
    id: '911today',
    name: '911.Today',
    icon: '📡',
    tagline: 'Emergency Spiritual Wisdom — Daily at 9:11',
    description: 'The broadcast you\'re watching right now. 9 minutes, 11 seconds of spiritual clarity — every evening at 8:11 PM Central. A House of Terravian signal to the world.',
    founderMsg: 'I made this for anyone who ever felt like they were in a spiritual emergency. We meet at 9:11.',
    url: '#home',
    urlLabel: 'You Are Here'
  }
];

// ════════════════════════════════════════════════════════════
// Brand Scroll
// ════════════════════════════════════════════════════════════
function buildBrandScroll() {
  const track = document.getElementById('brands-track');
  if (!track) return;

  // Duplicate brands for seamless infinite scroll
  const allBrands = [...BRANDS, ...BRANDS];

  allBrands.forEach(brand => {
    const tile = document.createElement('div');
    tile.className = 'brand-tile';
    tile.setAttribute('role', 'button');
    tile.setAttribute('tabindex', '0');
    tile.setAttribute('aria-label', `Learn about ${brand.name}`);
    tile.innerHTML = `
      <div class="brand-icon-ring">${brand.icon}</div>
      <div class="brand-tile-name">${brand.name}</div>
    `;
    tile.addEventListener('click', () => openBrandModal(brand));
    tile.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openBrandModal(brand);
    });
    track.appendChild(tile);
  });
}

// ════════════════════════════════════════════════════════════
// Brand Modal
// ════════════════════════════════════════════════════════════
function openBrandModal(brand) {
  const overlay = document.getElementById('brand-modal');
  overlay.querySelector('.modal-icon').textContent = brand.icon;
  overlay.querySelector('.modal-name').textContent = brand.name;
  overlay.querySelector('.modal-tagline').textContent = brand.tagline;
  overlay.querySelector('.modal-desc').textContent = brand.description;
  overlay.querySelector('.modal-founder').textContent = `"${brand.founderMsg}"`;

  const link = overlay.querySelector('.modal-visit-link');
  link.textContent = brand.urlLabel;
  link.href = brand.url;
  if (!brand.url.startsWith('#')) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  } else {
    link.removeAttribute('target');
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.modal-close').focus();
}

function closeBrandModal() {
  document.getElementById('brand-modal').classList.remove('active');
  document.body.style.overflow = '';
}

// ════════════════════════════════════════════════════════════
// Countdown Timer — targets 8:11 PM CST daily
// ════════════════════════════════════════════════════════════
function getMsUntilNextBroadcast() {
  const now = new Date();
  const cstNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));

  const target = new Date(cstNow);
  target.setHours(20, 11, 0, 0);

  let diff = target - cstNow;
  if (diff <= 0) diff += 24 * 60 * 60 * 1000;
  return diff;
}

function tickCountdown() {
  const ms = getMsUntilNextBroadcast();
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = n => String(n).padStart(2, '0');

  const elH = document.getElementById('cd-hours');
  const elM = document.getElementById('cd-minutes');
  const elS = document.getElementById('cd-seconds');
  const lbl = document.getElementById('cd-label');

  if (elH) elH.textContent = pad(h);
  if (elM) elM.textContent = pad(m);
  if (elS) elS.textContent = pad(s);

  // Within the 9m11s broadcast window — show live indicator
  if (h === 0 && m < 10) {
    if (lbl) lbl.textContent = '🔴 Broadcast is Live — Tune In Now';
  } else {
    if (lbl) lbl.textContent = 'Next Broadcast Begins In';
  }
}

// ════════════════════════════════════════════════════════════
// Contact Form
// ════════════════════════════════════════════════════════════
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Signal Sent ✦';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
}

// ════════════════════════════════════════════════════════════
// Nav scroll
// ════════════════════════════════════════════════════════════
function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(0,0,0,0.98)'
      : 'rgba(0,0,0,0.9)';
  }, { passive: true });
}

// ════════════════════════════════════════════════════════════
// Init
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildBrandScroll();
  initNavScroll();
  initContactForm();
  tickCountdown();
  setInterval(tickCountdown, 1000);

  // Modal events
  const overlay = document.getElementById('brand-modal');
  document.getElementById('modal-close-btn').addEventListener('click', closeBrandModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeBrandModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBrandModal(); });
});

// ════════════════════════════════════════════════════════════
// 911at911.Today — Main Script
// ════════════════════════════════════════════════════════════

// ── VIDEO CONFIG ─────────────────────────────────────────────
// Paste a YouTube video ID below to display it on the main screen.
// Set to null or '' to show the default placeholder.
// Examples:
//   'dQw4w9WgXcQ'          — a standard YouTube video
//   'abc123XYZ'             — a YouTube Live stream ID
const YOUTUBE_VIDEO_ID = '';
// ─────────────────────────────────────────────────────────────

const BRANDS = [
  {
    id: 'crownstrike',
    name: 'Crownstrike™',
    icon: '👑',
    tagline: 'The Crown Never Stops Moving',
    description: 'A next-generation platform built for the modern sovereign. Crownstrike™ delivers premium tools and resources for those on the path to mastery — where ambition meets execution.',
    founderMsg: 'Every tool in Crownstrike was built because I needed it. Now you have it too.',
    url: 'https://app.crownstrikeofficial.com',
    urlLabel: 'Enter Platform'
  },
  {
    id: 'winthehour-app',
    name: 'Win The Hour!™',
    icon: '⏱',
    tagline: 'Own Every 60 Minutes',
    description: 'The hourly productivity and accountability app. Win The Hour!™ turns your day into a series of battles you can actually win — one hour at a time. Track. Rate. Win.',
    founderMsg: 'Time is the only resource that doesn\'t replenish. Win The Hour is how you stop leaking it.',
    url: 'https://winthehour.app',
    urlLabel: 'Get the App'
  },
  {
    id: 'winthehour-site',
    name: 'WinTheHour Site™',
    icon: '✔️',
    tagline: 'The Hour Doesn\'t Wait',
    description: 'The official Win The Hour!™ landing experience. Explore features, membership tiers, the manifesto, and the philosophy behind the movement.',
    founderMsg: 'The site is the signal before the signal. It\'s where the decision is made.',
    url: 'https://winthehour-site.vercel.app',
    urlLabel: 'Visit Site'
  },
  {
    id: 'ownthehour',
    name: 'Own The Hour™',
    icon: '⏰',
    tagline: 'Claim Every 60 Minutes',
    description: 'Own The Hour™ is the next evolution in hourly mastery — a platform and philosophy for those who don\'t just want to win the hour, they want to own it completely.',
    founderMsg: 'Winning is one thing. Ownership is another. This is for the owners.',
    url: 'https://ownthehour.app',
    urlLabel: 'Enter OwnTheHour'
  },
  {
    id: 'thebossminute',
    name: 'The Boss Minute™',
    icon: '💼',
    tagline: 'One Minute to Think Like a Boss',
    description: 'Daily micro-wisdom for builders, entrepreneurs, and leaders. Every Boss Minute™ delivers one sharp insight — the kind of thinking that separates the ones who make it from the ones who don\'t.',
    founderMsg: 'A minute of the right thinking is worth more than an hour of the wrong action.',
    url: 'https://thebossminute.com',
    urlLabel: 'Get the Minute'
  },
  {
    id: 'paperworkvault',
    name: 'Paperwork Vault™',
    icon: '🗄️',
    tagline: 'Your Documents, Secured and Organized',
    description: 'A digital vault for life\'s most important paperwork. Store, organize, and retrieve critical documents the moment you need them — without the chaos.',
    founderMsg: 'The most expensive document is the one you can\'t find when you need it.',
    url: 'https://paperworkvault.io',
    urlLabel: 'Open the Vault'
  },
  {
    id: 'dreamgpt',
    name: 'DreamGPT Ventures™',
    icon: '🤖',
    tagline: 'Where Dreams Meet Intelligence',
    description: 'An AI-powered ventures platform at the intersection of imagination and execution. DreamGPT Ventures™ exists to turn bold ideas into living, breathing projects.',
    founderMsg: 'The future belongs to whoever can dream it and then build it. AI just closed the gap.',
    url: 'https://dreamgpt.ventures',
    urlLabel: 'Explore Ventures'
  },
  {
    id: 'grounled',
    name: 'Grounled™',
    icon: '🌱',
    tagline: 'Rooted. Self-Led.',
    description: 'A brand and platform built on the principle of being grounded in who you are while leading yourself forward — without waiting for permission, validation, or direction from anyone else.',
    founderMsg: 'Grounled is the word I made up for the feeling of being both rooted and free.',
    url: '#',
    urlLabel: 'Coming Soon'
  },
  {
    id: 'houseoftheinnersun',
    name: 'House of the Inner Sun™',
    icon: '☀️',
    tagline: 'The Light Within Is Real',
    description: 'A spiritual wellness platform dedicated to awakening the light that already lives inside you. Practices, guidance, and community for those walking the path inward.',
    founderMsg: 'There\'s a sun inside every human being. This house was built to help you find yours.',
    url: 'https://houseoftheinnersun.netlify.app',
    urlLabel: 'Enter the House'
  },
  {
    id: 'sagaofpolarity',
    name: 'Saga of Polarity™',
    icon: '☯️',
    tagline: 'The Moment Contains Love',
    description: 'A 24/7 online forum and support community for Law of One seekers navigating their catalysts. A sacred space for the spiritual work that doesn\'t come with a manual.',
    founderMsg: 'You don\'t have to go through it alone. The Moment contains Love.',
    url: 'https://sagaofpolarity.forum',
    urlLabel: 'Join the Forum'
  },
  {
    id: 'nooworld',
    name: 'Noo World™',
    icon: '🌐',
    tagline: 'Welcome to the Noo World',
    description: 'A unified ecosystem of platforms and brands operating under the Noo World™ identity framework. One login. One signal. An entire world of ventures to discover.',
    founderMsg: 'The Noo World is not a place. It\'s a state of arrival.',
    url: 'https://www.thenooworld.com',
    urlLabel: 'Enter the Noo World'
  },
  {
    id: 'forbidden-gnosis',
    name: 'Forbidden Gnosis™',
    icon: '🔮',
    tagline: 'Knowledge They Didn\'t Want You to Have',
    description: 'A platform dedicated to esoteric knowledge, hidden history, and the ancient wisdom traditions that shaped civilization from the shadows. The truth has always existed. Now find it.',
    founderMsg: 'The most dangerous thing a human can do is know the truth.',
    url: 'https://forbiddengnosis.com',
    urlLabel: 'Access the Gnosis'
  },
  {
    id: 'support-groups',
    name: 'Support Groups Online™',
    icon: '🤝',
    tagline: 'You Don\'t Have to Go Through It Alone',
    description: 'A digital sanctuary for peer support and community healing. Connect with others who truly understand your journey. Real community. Real connection. Real healing.',
    founderMsg: 'The strongest thing you can do is ask for support.',
    url: 'https://supportgroups.online',
    urlLabel: 'Find Your Group'
  },
  {
    id: 'sport-crownstrike',
    name: 'Sport Crownstrike™',
    icon: '🏅',
    tagline: 'The Crown in Competition',
    description: 'The sports division of Crownstrike™ — built for athletes, competitors, and those who bring sovereign energy to every game, match, and season.',
    founderMsg: 'The crown doesn\'t take a day off. Neither do real competitors.',
    url: 'https://sportcrownstrike.com',
    urlLabel: 'Enter the Arena'
  },
  {
    id: 'stepleague',
    name: 'Step League™',
    icon: '🏆',
    tagline: 'Every Step Counts',
    description: 'A competitive step-tracking community where your daily movement earns you real standing. Step League™ turns walking into sport and consistency into a leaderboard.',
    founderMsg: 'I built Step League because motion is the most underrated metric in life.',
    url: 'https://stepleague.online',
    urlLabel: 'Join the League'
  },
  {
    id: 'mmhw',
    name: 'MMHW™',
    icon: '🧠',
    tagline: 'Remember.',
    description: 'A platform built around clarity, mental frameworks, and the kind of thinking that cuts through noise. For the minds that need more signal and less static.',
    founderMsg: 'Sometimes the whole problem is that nobody made it make sense. MMHW fixes that.',
    url: '#',
    urlLabel: 'Coming Soon'
  },
  {
    id: '121212black',
    name: '121212.Black™',
    icon: '◼️',
    tagline: 'The Signal Beneath the Surface',
    description: 'A premium multi-section digital experience operating in the dark. 121212.Black™ is a statement brand built for those who move deliberately, quietly, and with intention.',
    founderMsg: '12:12:12. The number that keeps showing up. Now it has a home.',
    url: 'https://121212.black',
    urlLabel: 'Enter'
  },
  {
    id: 'happyholidaycouples',
    name: 'Happy Holiday Couples™',
    icon: '🌴',
    tagline: 'Adventures Built for Two',
    description: 'Travel and vacation experiences designed specifically for couples. From planning to memories — Happy Holiday Couples™ exists to make your time together extraordinary.',
    founderMsg: 'Two people. One adventure. That\'s the whole blueprint.',
    url: 'https://happyholidaycouples.vacations',
    urlLabel: 'Plan Your Trip'
  },
  {
    id: 'crystallizedlovers',
    name: 'Crystallized Lovers™',
    icon: '💎',
    tagline: 'Love in Its Purest Form',
    description: 'A brand at the intersection of romance, beauty, and permanence. Crystallized Lovers™ captures the moments and connections that deserve to last forever.',
    founderMsg: 'Some love is too rare not to crystallize.',
    url: 'https://crystallizedlovers.com',
    urlLabel: 'Discover'
  },
  {
    id: 'mcm-enterprises',
    name: 'MCM Enterprises™',
    icon: '🏢',
    tagline: 'The Enterprise Behind the Vision',
    description: 'The holding and enterprise entity behind multiple Terravian ventures. MCM Enterprises™ operates at the intersection of strategy, creativity, and long-term brand building.',
    founderMsg: 'Every empire needs an enterprise structure. MCM is where the foundation lives.',
    url: '#',
    urlLabel: 'Coming Soon'
  },
  {
    id: 'green-ray-creations',
    name: 'Green Ray Creations™',
    icon: '💚',
    tagline: 'Technologies of Love',
    description: 'Rooted in the understanding that planets evolve to generate technologies native to the ray they inhabit, Green Ray Creations™ channels the green ray — the vibration of love — into tangible technologies, products, and works. Every creation here is love-based intelligence made physical.',
    founderMsg: 'Every planet eventually learns to build on the ray it lives on. We live on the green ray. We build with love.',
    url: '#',
    urlLabel: 'Coming Soon'
  },
  {
    id: 'foods-from-the-future',
    name: 'Foods From the Future™',
    icon: '🚀',
    tagline: 'Eat Tomorrow, Today',
    description: 'A food concept brand exploring what nutrition, flavor, and the dining experience look like when we stop building for the past. The future of food — arriving now.',
    founderMsg: 'What if the food you ate was actually designed for where we\'re going, not where we\'ve been?',
    url: '#',
    urlLabel: 'Coming Soon'
  },
  {
    id: 'tostadas-from-the-future',
    name: 'Tostadas From the Future™',
    icon: '🌮',
    tagline: 'The Future Is Delicious',
    description: 'The boldest concept in the Foods From the Future™ universe. Tostadas reimagined — built with future-forward ingredients, flavor profiles, and a very specific kind of audacity.',
    founderMsg: 'Why not tostadas? Why not the future? Why not both?',
    url: '#',
    urlLabel: 'Coming Soon'
  },
  {
    id: 'l3g1t',
    name: 'L3G1T™',
    icon: '✅',
    tagline: 'Only the L3g1t',
    description: 'A streetwear clothing brand built on one singular ethos: legitimacy. Every piece, every drop, every design is about being authentic in a world full of imitation.',
    founderMsg: 'L3g1t isn\'t just a word. It\'s the standard. Either you are or you aren\'t.',
    url: 'https://l3g1t.store',
    urlLabel: 'Shop L3G1T'
  },
  {
    id: 'kindaclothing',
    name: 'Kinda Clothing™',
    icon: '👕',
    tagline: 'Kinda Everything. Totally You.',
    description: 'Fashion that refuses to be boxed in. Kinda Clothing™ is for the person who doesn\'t fit one aesthetic, one mood, or one definition — and wears that freely.',
    founderMsg: 'Kinda this. Kinda that. Fully yourself.',
    url: 'https://kindaclothing.store',
    urlLabel: 'Shop Kinda'
  },
  {
    id: 'thebigretale',
    name: 'The Big Retale™',
    icon: '🛍️',
    tagline: 'Retale It Your Way',
    description: 'A retail and resale platform built for the new generation of buyers and sellers. The Big Retale™ reimagines what a store can be — curated, community-driven, and yours.',
    founderMsg: 'The old retail model is over. The Big Retale is what comes next.',
    url: 'https://thebigretale.store',
    urlLabel: 'Enter the Store'
  },
  {
    id: 'shathreads',
    name: 'Sha Threads™',
    icon: '🕊️',
    tagline: '"Wear Peace"',
    description: 'A clothing brand with a single purpose — to put peace on your body. Sha Threads™ designs pieces that feel like calm, look like intention, and carry a message without saying a word.',
    founderMsg: '"Wear Peace." That\'s it. That\'s the whole message.',
    url: 'https://shathreads.store',
    urlLabel: 'Shop Sha Threads'
  },
  {
    id: 'sexymanhands',
    name: 'Sexy Man Hands™',
    icon: '🤌',
    tagline: 'Strong Hands. Irresistible Presence.',
    description: 'A men\'s strength and grooming brand built on the belief that powerful, well-kept hands are one of the most attractive things a man can have. Train the grip. Refine the look. Own the room.',
    founderMsg: 'Your hands are always in frame — in the handshake, the gesture, the hold. Make them worth noticing.',
    url: '#',
    urlLabel: 'Coming Soon'
  },
  {
    id: '911today',
    name: '911at911.Today™',
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
// Video Loader
// ════════════════════════════════════════════════════════════
function initVideo() {
  const container = document.getElementById('video-container');
  if (!container || !YOUTUBE_VIDEO_ID) return;

  container.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1"
      allow="autoplay; encrypted-media"
      allowfullscreen
      title="911at911.Today Live Broadcast"
    ></iframe>
  `;
}

// ════════════════════════════════════════════════════════════
// Init
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildBrandScroll();
  initVideo();
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

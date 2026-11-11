import './style.css';

const jpgAssets = new Set(['vRV0SewxhVXANq9cpM5NmXPfMw', '1BsatJIb1Ivwhy7t1MO2GCK8fU', 'n9JVaN8wvTBRqoH40RycXvJSvRk', '6kXIlbPlvRIEf1KpAg5jqY0yC8o']);
const A = (name) => `/assets/${name}${jpgAssets.has(name) ? '.jpg.png' : '.png.png'}`;
const heroImage = '/assets/aagAQW4I6LzfnzIXSpVuhlRbDWw.jpg.png';

const bestSellers = [
  ['VisionMax 65" 4K OLED', 'Nk7j04TyuwZCKOQ4pmtcrpjmy2E', 'tVUfEhL2zsjwPINWqdjSmThvjc', 'visionmax-65-4k-oled'],
  ['SonicWave Pro X1', 'fM0M8AElFObabg4uUoHWVZtdE', 'hOWFvnnznYVCJgum9F3CXntzcQk', 'urbanbeats-street-style'],
  ['SmartView 43" LED', 'JWfWfrsHFROUL87ZZe1mprm6HwQ', 'QqWV6ADi1AXbfxedp3mfVsdRTTU', 'smartview-43-led'],
  ['SlimBar 2.1', 'd7v2wJOhK6jLrIZyHTzIfiXoo5E', 'YfhnQlJGIfywhuD2n02EJEM3m4M', 'slimbar-2-1'],
  ['ProAudio XLR Cable Set', 'vHWU9VbXj2974v6OcbDn9u2z4', 'bVfGbtheZHHKOqhQZliipoFMs', 'proaudio-xlr-cable-set'],
  ['HomeSound Bar Pro', '1IgJIMcdBnJjzHCsefo1mjjnZjM', 'VXOUZiKn8Z3U6BIHS4ZT10iwWs', 'partymax-speaker'],
  ['DALI CONNECT Stand M-601', 'McOVQ6BgmR085U865ppkcComJos', 'zkcWHcVaEJgLUlPwSnlqG3FJQI', 'dali-connect-stand-m-601'],
  ['BeatRunner Sport', 'M6eLWg07ufGoE9HVlS3Sh8y6wBQ', 'J0eatWj6Tl28zB2caQem2Et5s', 'beatrunner-sport'],
];

const newArrivals = [
  ['ThunderBass 360', 'olaagQi7gLmFzUf73zmPdCdDVE', 'FnhAIDI7A7Wuaauc01TzXYqk', 'sonicboom-floorstanding-towers'],
  ['StudioAmp Compact', 'ukZwX8TsC7cXYuf9FfpTLzuXCiU', 'WBCHE2gplhdd0ZxBjCQ9lef8k', 'studioamp-compact'],
  ['SlimBar 2.1', 'd7v2wJOhK6jLrIZyHTzIfiXoo5E', 'YfhnQlJGIfywhuD2n02EJEM3m4M', 'slimbar-2-1'],
  ['PowerStage Pro 500', 'rFto3Hj1eSiT7uVr6rPge7NLocw', 'Qap4SARwdlWnpDJJawVU49hmTM', 'powerstage-pro-500'],
  ['PortaBlast Mini', 't0P7G55MehpHyW73Xl3oE5hGeyk', 'fDRWhvooWvsVIH2AqlHdHoVblD4', 'clearwave-bookshelf-masters'],
  ['Essentials WB Sonos Era 100', 'ml52CEBDJTt0fdbfTsVctDBrs', '9NZ5kAhJ0XS9vm5HNlnk51GHptg', 'essentials-wb-sonos-era-100'],
  ['EssentialConnect Audio Bundle', 'r8IgzXH7s24kaomRjWFL1u5tH0', 'zDaCHa4KXN7sCHBu5CPGFEMRZU', 'essentialconnect-audio-bundle'],
  ['CinemaView 55" QLED', 'utquBj3oLpvjmHGKqLdBa9aMT64', 'Eng91eYz32grQkFqO0TFYJ2PC4Q', 'cinemaview-55-qled'],
];

const categories = [
  ['Speaker', 'eQSJQUYrLKKmcIhCbTlKpKLswM', 'speakers', 'speaker'],
  ['Headphones', 'YwRRChPPK9QUOGpKiFwuwF1clg', 'headphones', 'headphone'],
  ['Amplifier', 'K1Kx2Gjl94J2oxYwEXJvuH6fac', 'amplifier', 'amplifier'],
  ['TV', '6hgRFYKyAFrl2JQORl8FC5wtIck', 'tv', 'tv'],
  ['Soundbar', 'aRndvpfrsoJHPvDEjVJvqLAJTCA', 'soundbar', 'sound bar'],
  ['Cable', 'Vb40cD36eWol35Z85OBSdTK6A', 'cable', 'cable'],
  ['Accessories', 'x4hVvrHNugxJuLgrJLWCa0t6O60', 'accessories', 'sound accesory'],
];

const articles = [
  ['Technology', 'Jan 21, 2025', 'The Science Behind Noise-Canceling Headphones', 'ZqoTlnzFKtQkvLOSDHHoB8Ss7EY', 'the-science-behind-noise-canceling-headphones'],
  ['Audio Setup', 'May 30, 2025', 'Creating the Perfect Home Audio Setup on Any Budget', 'n9JVaN8wvTBRqoH40RycXvJSvRk', 'creating-the-perfect-home-audio-setup-on-any-budget'],
  ['Audio Education', 'Jul 11, 2025', 'Common Audio Myths That Need to Stop', '6kXIlbPlvRIEf1KpAg5jqY0yC8o', 'dali-danish-excellence-in-hi-fi'],
  ['Audio Culture', 'Nov 21, 2025', 'Vinyl vs Digital: Why Both Have a Place in Modern Audio', 'H86t4ebHd6hoERfpLnIsYPeB4fc', 'vinyl-vs-digital-why-both-have-a-place-in-modern-audio'],
];

const icons = {
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.9c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.8Z"></path></svg>',
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8Z"></path><path d="M8 8a4 4 0 0 1 8 0"></path></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.7"></circle><path d="M4.5 21a7.5 7.5 0 0 1 15 0"></path></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 9 6-9 6V6Z"></path></svg>',
  headset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2"></path><path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z"></path></svg>',
  truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3z"></path><path d="M14 10h4l3 3v3h-7z"></path><circle cx="7" cy="18" r="1.7"></circle><circle cx="18" cy="18" r="1.7"></circle></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z"></path><path d="m8.5 12 2.3 2.3 4.8-5"></path></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.5 7.5L21 12l-7.5 1.5L12 21l-1.5-7.5L3 12l7.5-2.5L12 2Z"></path></svg>',
};

const nav = [
  ['Shop', '/all'], ['About', '/about-us'], ['Blog', '/blog'], ['Contact us', '/contact-us'],
];

function routeLink(href, label, className = '') {
  return `<a class="${className}" href="${href}" data-route>${label}</a>`;
}

function logo() {
  return `<a class="logo" href="/" data-route><img src="/assets/BO3LiXEb9QwaAASBvLd23IYmNaY.png.png" alt="" /><span>HiFiShop</span></a>`;
}

function iconButton(kind, label, extra = '') {
  return `<button class="icon-button ${extra}" type="button" aria-label="${label}" data-action="${kind}">${icons[kind]}</button>`;
}

function mobileHeader() {
  return `<header class="mobile-header">
    <button class="menu-button" type="button" aria-label="Open menu" data-action="menu"><span></span><span></span></button>
    ${logo()}
    <div class="mobile-actions">${iconButton('search', 'Search')}${iconButton('bag', 'Shopping bag')}</div>
    <nav class="menu-panel">${nav.map(([label, href]) => routeLink(href, label, 'menu-link')).join('')}</nav>
  </header>`;
}

function desktopHotspots() {
  return `<div class="hero-hotspots" aria-label="Main navigation">
    <div class="hotspot-nav">${nav.map(([label, href]) => routeLink(href, label, 'hotspot-link')).join('')}</div>
    <a class="hotspot-logo" href="/" data-route aria-label="HiFiShop home"></a>
    <div class="hotspot-actions">
      ${iconButton('search', 'Search')}${iconButton('heart', 'Favourite')}${iconButton('bag', 'Shopping bag')}${iconButton('user', 'Profile')}
    </div>
    <a class="hotspot-buy" href="/products/bassmaster-gaming-elite" data-route aria-label="Buy BassMaster Gaming Elite"></a>
  </div>`;
}

function hero() {
  return `<section class="hero-section" aria-label="BassMaster Gaming Elite">
    <div class="hero-art"><img src="${heroImage}" alt="BassMaster Gaming Elite gaming headphones" />${desktopHotspots()}</div>
    ${mobileHeader()}
  </section>`;
}

function productCard([name, image, hover, slug]) {
  return `<article class="product-card">
    <a href="/products/${slug}" data-route class="product-image-wrap" aria-label="View ${name}">
      <img class="product-image primary" src="${A(image)}" alt="${name}" />
      <img class="product-image secondary" src="${A(hover)}" alt="" aria-hidden="true" />
      <span class="product-arrow">${icons.arrow}</span>
    </a>
    <a href="/products/${slug}" data-route class="product-name">${name}</a>
  </article>`;
}

function productRail(title, products, className = '') {
  return `<section class="section product-section ${className}">
    <div class="section-heading-row"><h2>${title}</h2><div class="rail-controls">${iconButton('prev', 'Previous')} ${iconButton('next', 'Next')}</div></div>
    <div class="product-rail">${products.map(productCard).join('')}</div>
  </section>`;
}

function benefits() {
  const items = [
    ['headset', 'Here to help', 'Get help whenever you need.'],
    ['shield', '10-Days Return Policy', 'Full refund if not satisfied.'],
    ['truck', 'Free Shipping', 'No hidden fees, free delivery.'],
    ['shield', 'Secure Payment', 'Your finances stay secure.'],
  ];
  return `<section class="benefits section">${items.map(([kind,title,copy]) => `<div class="benefit"><div class="benefit-icon">${icons[kind]}</div><div><h3>${title}</h3><p>${copy}</p></div></div>`).join('')}</section>`;
}

function featureStrip() {
  const items = [
    ['Hear every detail in your favorite game like never before', 'headset'],
    ['Every detail looks incredibly sharp and vivid', 'spark'],
    ['Simple setup and controls, no complicated instructions needed', 'play'],
    ['Wireless streaming from any device easily', 'bag'],
  ];
  return `<section class="feature-strip section">${items.map(([copy, kind]) => `<div class="feature-item"><div class="feature-icon">${icons[kind]}</div><p>${copy}</p></div>`).join('')}</section>`;
}

function categoriesSection() {
  return `<section class="section categories-section"><div class="section-heading-row"><h2>SHOP BY CATEGORIES</h2><div class="rail-controls">${iconButton('prev', 'Previous')} ${iconButton('next', 'Next')}</div></div><div class="category-rail">${categories.map(([label,image,slug,alt]) => `<a class="category-card" href="/${slug}" data-route><span class="category-image"><img src="${A(image)}" alt="Image of a ${alt}" /></span><span>${label}</span></a>`).join('')}</div></section>`;
}

function promo() {
  return `<section class="promo section">
    <div class="promo-copy"><p class="eyebrow">Weekend Offer</p><h2>20% OFF</h2><p class="promo-text">Get a Premium sound that stays with you through every run and workout</p><a class="light-button" href="/all" data-route>Shop Sale <span>${icons.arrow}</span></a></div>
    <div class="promo-art"><div class="promo-circle"></div><img src="${A('M6eLWg07ufGoE9HVlS3Sh8y6wBQ')}" alt="Colorful wireless headphones" /></div>
  </section>`;
}

function reviews() {
  const people = [
    ['Mark Johnson', 'Ordered headphones on Monday, arrived Wednesday. Quality products, fair prices, and excellent customer service throughout.', 'vRV0SewxhVXANq9cpM5NmXPfMw'],
    ['Emily Davis', 'Easy website, secure checkout, and my TV arrived perfectly packaged. Will definitely shop here again!', '1BsatJIb1Ivwhy7t1MO2GCK8fU'],
  ];
  return `<section class="section reviews"><div class="section-heading-row"><h2>CUSTOMERS REVIEWS</h2><div class="rail-controls">${iconButton('prev', 'Previous')} ${iconButton('next', 'Next')}</div></div><div class="review-grid">${people.map(([name,copy,image]) => `<article class="review-card"><img src="${A(image)}" alt="${name}" /><div class="review-copy"><div class="stars">★★★★★</div><h3>${name}</h3><p>${copy}</p></div></article>`).join('')}</div></section>`;
}

function news() {
  return `<section class="section news"><div class="section-heading-row"><h2>ARTICLES &amp; NEWS</h2><a class="view-all" href="/blog" data-route>View all Articles <span>${icons.arrow}</span></a></div><div class="news-grid">${articles.map(([tag,date,title,image,slug]) => `<a class="news-card" href="/blog/${slug}" data-route><img src="${A(image)}" alt="${title}" /><div class="news-meta"><span>${tag}</span><span>${date}</span></div><h3>${title}</h3><span class="news-arrow">${icons.arrow}</span></a>`).join('')}</div></section>`;
}

function footer() {
  return `<footer class="footer"><div class="footer-top"><div class="newsletter"><h2>Stay in the loop, with exclusive offers and product previews.</h2><form data-newsletter><input type="email" aria-label="Email address" placeholder="Email address" required /><button type="submit">Subscribe ${icons.arrow}</button></form><p class="form-message" aria-live="polite"></p></div><div class="footer-mark">${logo()}<p>Premium sound. Remarkable picture. Everyday listening, made better.</p></div></div><div class="footer-links"><div><p class="footer-label">Pages</p>${routeLink('/blog','Blog')} ${routeLink('/all','Shop')} ${routeLink('/about-us','About')}</div><div><p class="footer-label">Information</p>${routeLink('/search','Search')} ${routeLink('/all/favourites','Favourite')} ${routeLink('/contact-us','Contact us')}</div><div><p class="footer-label">Legal</p>${routeLink('/legal/privacy-policy','Privacy Policy')} ${routeLink('/legal/terms','Terms of use')}</div></div><div class="footer-bottom"><span>© 2026 HiFiShop</span><span>Made for people who listen closely.</span></div></footer>`;
}

function page() {
  return `<div class="site-shell">${hero()}<main>${productRail('BEST SELLERS', bestSellers)}${benefits()}${featureStrip()}${categoriesSection()}${productRail('NEW ARRIVALS', newArrivals, 'new-arrivals')}${promo()}${reviews()}${news()}</main>${footer()}<div class="toast" role="status" aria-live="polite"></div></div>`;
}

function setupInteractions() {
  document.addEventListener('click', (event) => {
    const route = event.target.closest('[data-route]');
    if (route) {
      const href = route.getAttribute('href');
      if (href && href.startsWith('/')) {
        event.preventDefault();
        history.pushState({}, '', href);
        const toast = document.querySelector('.toast');
        if (href !== '/') {
          toast.textContent = 'This local route is ready for the mirrored storefront.';
          toast.classList.add('is-visible');
          clearTimeout(window.__toastTimer);
          window.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
        } else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (!action) return;
    if (action === 'next' || action === 'prev') {
      const scope = event.target.closest('.section');
      const rail = scope?.querySelector('.product-rail, .category-rail');
      if (rail) rail.scrollBy({ left: action === 'next' ? rail.clientWidth * .82 : -rail.clientWidth * .82, behavior: 'smooth' });
    }
    if (action === 'menu') document.querySelector('.mobile-header')?.classList.toggle('menu-open');
    if (action === 'search') {
      const toast = document.querySelector('.toast');
      toast.textContent = 'Search is available from the local storefront route.';
      toast.classList.add('is-visible');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
    }
  });
  document.querySelector('[data-newsletter]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = form.parentElement.querySelector('.form-message');
    message.textContent = 'Thank you — you are on the list.';
    form.reset();
  });
}

document.querySelector('#app').innerHTML = page();
setupInteractions();
window.addEventListener('popstate', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

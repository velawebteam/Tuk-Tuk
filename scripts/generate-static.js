import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://taviraroots.com';
const DEFAULT_OG_IMAGE = 'https://lh3.googleusercontent.com/d/1nBgIFM_5E5vclRhVItfSWT8rdG_Xt_Ml';
const DEFAULT_KEYWORDS =
  'Tavira Tours, Tours Tavira, TukTuk Tavira, Jeep Tavira, Jipe Tavira, Algarve Tours, Tours Algarve, Private Tours Tavira, Things to do in Tavira, Tavira Roots';

const distPath = path.resolve('dist');
const publicPath = path.resolve('public');

if (!fs.existsSync(distPath)) {
  console.error('Dist directory not found. Run build first.');
  process.exit(1);
}

const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// Load default (English) and Portuguese translations
const enTranslationsPath = path.resolve('src/i18n/locales/en/translation.json');
const en = JSON.parse(fs.readFileSync(enTranslationsPath, 'utf-8'));

const t = (key, fallback = '') => {
  const parts = String(key).split('.');
  let cur = en;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) {
      cur = cur[p];
    } else {
      return fallback || key;
    }
  }
  return typeof cur === 'string' ? cur : fallback || key;
};

// Extract tours from src/data/tours.ts
const toursFilePath = path.resolve('src/data/tours.ts');
const parsedTours = [];
const tourPages = [];

if (fs.existsSync(toursFilePath)) {
  const toursContent = fs.readFileSync(toursFilePath, 'utf-8');
  const tourBlockRegex = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?(?=\n  \}|\n\];)/g;
  let match;
  while ((match = tourBlockRegex.exec(toursContent)) !== null) {
    const block = match[0];
    const id = match[1];
    const typeMatch = block.match(/type:\s*['"]([^'"]+)['"]/);
    const nameKeyMatch = block.match(/nameKey:\s*['"]([^'"]+)['"]/);
    const descKeyMatch = block.match(/descriptionKey:\s*['"]([^'"]+)['"]/);
    const durationMatch = block.match(/duration:\s*['"]([^'"]+)['"]/);
    const priceMatch = block.match(/price:\s*['"]([^'"]+)['"]/);
    const paxMatch = block.match(/pax:\s*['"]([^'"]+)['"]/);

    const type = typeMatch ? typeMatch[1] : 'tuk-tuk';
    const name = nameKeyMatch ? t(nameKeyMatch[1], id) : id;
    const desc = descKeyMatch ? t(descKeyMatch[1], '') : '';
    const duration = durationMatch ? durationMatch[1] : '';
    const price = priceMatch ? priceMatch[1] : '';
    const pax = paxMatch ? paxMatch[1] : '';

    const typeLabel =
      type === 'tuk-tuk'
        ? t('seo.tour_type_tuk')
        : type === 'walking'
        ? t('seo.tour_type_walking')
        : t('seo.tour_type_jeep');
    const typeKeyword =
      type === 'tuk-tuk'
        ? t('seo.tour_keywords_type_tuk')
        : type === 'walking'
        ? t('seo.tour_keywords_type_walking')
        : t('seo.tour_keywords_type_jeep');

    const title = `${name} | ${typeLabel} | Tavira Roots`;
    const description = `${desc} ${t('seo.tour_desc_suffix')} ${duration}.`.trim();
    const keywords = `${t('seo.tour_keywords_prefix')}, ${name}, ${typeKeyword}, ${t('seo.tour_keywords_suffix')}`;

    const tourObj = {
      id,
      type,
      name,
      desc,
      duration,
      price,
      pax,
      typeLabel,
    };
    parsedTours.push(tourObj);

    const tripSchema = {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name,
      description: desc,
      url: `${SITE_URL}/tour/${id}`,
      image: DEFAULT_OG_IMAGE,
      touristType:
        type === 'tuk-tuk'
          ? 'TukTuk Tavira Private Sightseeing'
          : type === 'walking'
          ? 'Tavira Walking Tour'
          : 'Jeep & Jipe Tavira 4x4 Safari',
      provider: {
        '@type': 'TravelAgency',
        name: 'Tavira Roots',
        url: `${SITE_URL}/`,
      },
    };

    const numericPrice = price.replace('€', '').replace(',', '.').trim();
    if (/^\d+(\.\d+)?$/.test(numericPrice)) {
      tripSchema.offers = {
        '@type': 'Offer',
        price: numericPrice,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      };
    }

    tourPages.push({
      route: `tour/${id}`,
      title,
      description,
      keywords,
      changefreq: 'weekly',
      priority: '0.9',
      h1: name,
      intro: desc,
      extraHtml: `
        <section>
          <p><strong>${escapeHtml(typeLabel)}</strong> | Duration: ${escapeHtml(duration)} | Capacity: ${escapeHtml(pax)} pax</p>
          <p>Private Tavira Tours &amp; Algarve Tours departing from Tavira historic center. <a href="${type === 'tuk-tuk' ? '/tuk-tuk' : type === 'walking' ? '/walking-tours' : '/jipe'}">Back to ${escapeHtml(typeLabel)}</a>.</p>
        </section>`,
      schemaData: tripSchema,
    });
  }
}

const tukTukList = parsedTours.filter((x) => x.type === 'tuk-tuk');
const jeepList = parsedTours.filter((x) => x.type === 'jeep');
const walkingList = parsedTours.filter((x) => x.type === 'walking');

const renderTourListHtml = (list, heading) => {
  if (!list.length) return '';
  return `
    <section>
      <h2>${escapeHtml(heading)}</h2>
      <ul>
        ${list
          .map(
            (item) => `<li>
          <a href="/tour/${escapeHtml(item.id)}">${escapeHtml(item.name)}</a>
          <span> (${escapeHtml(item.duration)})</span>
          <p>${escapeHtml(item.desc)}</p>
        </li>`
          )
          .join('\n        ')}
      </ul>
    </section>`;
};

const buildItemListSchema = (listName, list) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: listName,
  itemListElement: list.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    url: `${SITE_URL}/tour/${item.id}`,
    item: {
      '@type': 'TouristTrip',
      name: item.name,
      description: item.desc,
      url: `${SITE_URL}/tour/${item.id}`,
    },
  })),
});

const faqEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => ({
  question: t(`faqs_page.q${num}`),
  answer: t(`faqs_page.a${num}`),
}));

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqEntries.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

// Static page routes and their SEO metadata + static fallback body content
const staticPages = [
  {
    route: 'tuk-tuk',
    title: t('seo.tuk_tuk_title'),
    description: t('seo.tuk_tuk_desc'),
    keywords: t('seo.tuk_tuk_keywords'),
    changefreq: 'weekly',
    priority: '0.9',
    h1: t('tuk_tuk_page.title'),
    intro: `${t('tuk_tuk_page.subtitle_top')} — ${t('tuk_tuk_page.description')}`,
    extraHtml: renderTourListHtml(tukTukList, 'TukTuk Tavira - Private Tours'),
    schemaData: buildItemListSchema('TukTuk Tavira - Private Tuk Tuk Tours', tukTukList),
  },
  {
    route: 'jipe',
    title: t('seo.jeep_title'),
    description: t('seo.jeep_desc'),
    keywords: t('seo.jeep_keywords'),
    changefreq: 'weekly',
    priority: '0.9',
    h1: t('jeep_page.title'),
    intro: `${t('jeep_page.subtitle_top')} — ${t('jeep_page.description')}`,
    extraHtml: renderTourListHtml(jeepList, 'Jeep & Jipe Tavira - 4x4 Algarve Tours'),
    schemaData: buildItemListSchema('Jeep & Jipe Tavira - 4x4 Algarve Tours', jeepList),
  },
  {
    route: 'walking-tours',
    title: t('seo.walking_title'),
    description: t('seo.walking_desc'),
    keywords: t('seo.walking_keywords'),
    changefreq: 'weekly',
    priority: '0.8',
    h1: 'Tavira Walking Tour',
    intro: t('walking_page.description'),
    extraHtml: renderTourListHtml(walkingList, 'Tavira Walking Tours'),
    schemaData: buildItemListSchema('Tavira Walking Tours', walkingList),
  },
  {
    route: 'before-booking',
    title: t('seo.before_booking_title'),
    description: t('seo.before_booking_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'monthly',
    priority: '0.6',
    h1: t('before_booking_page.title'),
    intro: t('before_booking_page.subtitle'),
    extraHtml: '',
  },
  {
    route: 'faqs',
    title: t('seo.faqs_title'),
    description: t('seo.faqs_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'monthly',
    priority: '0.6',
    h1: t('faqs_page.title'),
    intro: t('faqs_page.subtitle'),
    extraHtml: `<section><ul>${faqEntries
      .map((f) => `<li><h2>${escapeHtml(f.question)}</h2><p>${escapeHtml(f.answer)}</p></li>`)
      .join('')}</ul></section>`,
    schemaData: faqSchema,
  },
  {
    route: 'sobre-nos',
    title: t('seo.about_title'),
    description: t('seo.about_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'monthly',
    priority: '0.6',
    h1: t('about_page.title'),
    intro: `${t('about_page.story_p1')} ${t('about_page.story_p2')}`,
    extraHtml: '',
  },
  {
    route: 'contactos',
    title: t('seo.contact_title'),
    description: t('seo.contact_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'monthly',
    priority: '0.7',
    h1: t('contact_page.title'),
    intro: t('contact_page.subtitle'),
    extraHtml: '',
  },
  {
    route: 'privacidade',
    title: t('seo.privacy_title'),
    description: t('seo.privacy_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'yearly',
    priority: '0.3',
    h1: t('legal.privacy_title'),
    intro: t('legal.privacy_intro'),
    extraHtml: '',
  },
  {
    route: 'termos',
    title: t('seo.terms_title'),
    description: t('seo.terms_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'yearly',
    priority: '0.3',
    h1: t('legal.terms_title'),
    intro: t('legal.terms_intro'),
    extraHtml: '',
  },
];

const globalTravelAgencySchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Tavira Roots',
  alternateName: ["Tavira Roots by Maria's Tuk Tuk", 'Tavira Tours', 'TukTuk Tavira', 'Jeep & Jipe Tavira'],
  description: t('seo.home_desc'),
  keywords: 'Tours Tavira, Tavira Tours, TukTuk Tavira, Jeep Tavira, Jipe Tavira, Tours Algarve, Algarve Tours, Private Tours Tavira',
  knowsAbout: [
    'Tavira Tours',
    'Tours Tavira',
    'TukTuk Tavira',
    'Jeep Tavira',
    'Jipe Tavira',
    'Algarve Tours',
    'Tours Algarve',
    'Ria Formosa Natural Park',
    'Private Guided Tours in Eastern Algarve',
  ],
  image: DEFAULT_OG_IMAGE,
  '@id': `${SITE_URL}/#travelagency`,
  url: `${SITE_URL}/`,
  telephone: '+351968995275',
  email: 'info@mariastuktuk.com',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Gonçalo Velho 7',
    addressLocality: 'Tavira',
    postalCode: '8800-349',
    addressRegion: 'Algarve',
    addressCountry: 'PT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.1268,
    longitude: -7.6499,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '203',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tavira Tours & Algarve Tours',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'TukTuk Tavira - Private Tuk Tuk Tours',
          url: `${SITE_URL}/tuk-tuk`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Jeep & Jipe Tavira - 4x4 Algarve Tours',
          url: `${SITE_URL}/jipe`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tavira Walking Tours',
          url: `${SITE_URL}/walking-tours`,
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/mariastuktuk',
    'https://www.instagram.com/mariastuktuk',
    'https://www.tripadvisor.pt/Attraction_Review-g189121-d25089311-Reviews-Tavira_Roots-Tavira_Faro_District_Algarve.html',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Tavira Roots',
  alternateName: ['Tavira Tours', 'Tours Tavira', 'TukTuk Tavira', 'Jeep & Jipe Tavira', 'Algarve Tours'],
  url: `${SITE_URL}/`,
  inLanguage: ['en', 'pt', 'fr'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/faqs?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const baseHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

const buildRouteHtml = ({ title, description, keywords, canonicalUrl, schemaData }) => {
  let html = baseHtml;

  const fullTitle = title.includes('Tavira Roots') ? title : `${title} | Tavira Roots`;
  const safeTitle = escapeHtml(fullTitle);
  const safeDesc = escapeHtml(description);
  const safeKeywords = escapeHtml(keywords);
  const safeUrl = escapeHtml(canonicalUrl);
  const safeImg = escapeHtml(DEFAULT_OG_IMAGE);

  // Strip existing route-specific SEO tags from baseHtml so there are never duplicates
  html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title data-static-seo="true">${safeTitle}</title>`);
  html = html.replace(/<meta[^>]+name="description"[^>]*>\s*/gi, '');
  html = html.replace(/<meta[^>]+name="keywords"[^>]*>\s*/gi, '');
  html = html.replace(/<link[^>]+rel="canonical"[^>]*>\s*/gi, '');
  html = html.replace(/<meta[^>]+property="og:[^"]*"[^>]*>\s*/gi, '');
  html = html.replace(/<meta[^>]+name="twitter:[^"]*"[^>]*>\s*/gi, '');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('nav.home'),
        item: `${SITE_URL}/`,
      },
    ],
  };

  if (canonicalUrl !== `${SITE_URL}/`) {
    breadcrumbSchema.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: fullTitle,
      item: canonicalUrl,
    });
  }

  const ldScripts = [
    globalTravelAgencySchema,
    websiteSchema,
    breadcrumbSchema,
    ...(schemaData ? [schemaData] : []),
  ]
    .map(
      (obj) =>
        `    <script data-static-seo="true" type="application/ld+json">${JSON.stringify(obj)}</script>`
    )
    .join('\n');

  const seoHeadTags = `
    <meta data-static-seo="true" name="description" content="${safeDesc}" />
    <meta data-static-seo="true" name="keywords" content="${safeKeywords}" />
    <link data-static-seo="true" rel="canonical" href="${safeUrl}" />
    <meta data-static-seo="true" property="og:type" content="website" />
    <meta data-static-seo="true" property="og:locale" content="en_US" />
    <meta data-static-seo="true" property="og:locale:alternate" content="pt_PT" />
    <meta data-static-seo="true" property="og:locale:alternate" content="fr_FR" />
    <meta data-static-seo="true" property="og:title" content="${safeTitle}" />
    <meta data-static-seo="true" property="og:description" content="${safeDesc}" />
    <meta data-static-seo="true" property="og:image" content="${safeImg}" />
    <meta data-static-seo="true" property="og:url" content="${safeUrl}" />
    <meta data-static-seo="true" property="og:site_name" content="Tavira Roots" />
    <meta data-static-seo="true" name="twitter:card" content="summary_large_image" />
    <meta data-static-seo="true" name="twitter:title" content="${safeTitle}" />
    <meta data-static-seo="true" name="twitter:description" content="${safeDesc}" />
    <meta data-static-seo="true" name="twitter:image" content="${safeImg}" />
    <meta data-static-seo="true" name="geo.region" content="PT-08" />
    <meta data-static-seo="true" name="geo.placename" content="Tavira, Algarve, Portugal" />
    <meta data-static-seo="true" name="geo.position" content="37.1268;-7.6499" />
    <meta data-static-seo="true" name="ICBM" content="37.1268, -7.6499" />
${ldScripts}
  </head>`;

  html = html.replace(/<\/head>/i, seoHeadTags);
  return html;
};

// Remove legacy directory-based static routes (e.g. dist/tuk-tuk/) so Apache/Hostinger never issues 301 trailing-slash redirects
for (const page of staticPages) {
  const legacyDir = path.join(distPath, page.route);
  if (fs.existsSync(legacyDir) && fs.statSync(legacyDir).isDirectory()) {
    fs.rmSync(legacyDir, { recursive: true, force: true });
  }
}

// Build root dist/index.html with full SEO + featured tours + city/Sotavento copy + FAQ snippet
const homeExtraHtml = `
  ${renderTourListHtml(tukTukList.slice(0, 4), 'TukTuk Tavira - Private City & Gastronomy Tours')}
  ${renderTourListHtml(jeepList.slice(0, 4), 'Jeep & Jipe Tavira - 4x4 Algarve Tours')}
  <section>
    <h2>${escapeHtml(t('home.city_tavira.title'))}</h2>
    <p>${escapeHtml(t('home.city_tavira.description'))}</p>
    <h2>${escapeHtml(t('home.sotavento.title'))}</h2>
    <p>${escapeHtml(t('home.sotavento.description'))}</p>
  </section>
  <section>
    <h2>${escapeHtml(t('home.faq_section_title'))}</h2>
    <ul>
      <li><h3>${escapeHtml(t('faqs_page.q7'))}</h3><p>${escapeHtml(t('faqs_page.a7'))}</p></li>
      <li><h3>${escapeHtml(t('faqs_page.q1'))}</h3><p>${escapeHtml(t('faqs_page.a1'))}</p></li>
      <li><h3>${escapeHtml(t('faqs_page.q8'))}</h3><p>${escapeHtml(t('faqs_page.a8'))}</p></li>
      <li><h3>${escapeHtml(t('faqs_page.q11'))}</h3><p>${escapeHtml(t('faqs_page.a11'))}</p></li>
    </ul>
  </section>
`;

const homeHtml = buildRouteHtml({
  title: t('seo.home_title'),
  description: t('seo.home_desc'),
  keywords: t('seo.home_keywords'),
  canonicalUrl: `${SITE_URL}/`,
  h1: `${t('hero.title_part1')}${t('hero.title_highlight')}${t('hero.title_part2')}`,
  intro: t('hero.subtitle'),
  extraHtml: homeExtraHtml,
  schemaData: {
    '@context': 'https://schema.org',
    '@graph': [
      buildItemListSchema('Tavira Tours & Algarve Tours', [...tukTukList.slice(0, 2), ...jeepList.slice(0, 1)]),
      {
        '@type': 'FAQPage',
        mainEntity: [7, 1, 8, 11].map((n) => ({
          '@type': 'Question',
          name: t(`faqs_page.q${n}`),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t(`faqs_page.a${n}`),
          },
        })),
      },
    ],
  },
});
fs.writeFileSync(path.join(distPath, 'index.html'), homeHtml, 'utf-8');

// Create flat .html files for all routes (e.g., dist/tuk-tuk.html, dist/jipe.html, dist/tour/tavira-city.html)
const allPages = [...staticPages, ...tourPages];

for (const page of allPages) {
  const canonicalUrl = `${SITE_URL}/${page.route}`;
  const html = buildRouteHtml({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonicalUrl,
    h1: page.h1,
    intro: page.intro,
    extraHtml: page.extraHtml,
    schemaData: page.schemaData,
  });

  const targetFile = path.join(distPath, `${page.route}.html`);
  const parentDir = path.dirname(targetFile);
  if (!fs.existsSync(parentDir)) {
    fs.mkdirSync(parentDir, { recursive: true });
  }
  fs.writeFileSync(targetFile, html, 'utf-8');
  console.log(`Generated static HTML for /${page.route} -> ${page.route}.html`);
}

// Create 404.html for SPA fallback
fs.writeFileSync(path.join(distPath, '404.html'), homeHtml, 'utf-8');
console.log('Generated 404.html for SPA fallback');

// Generate up-to-date sitemap.xml matching exact canonical URLs (no trailing slashes on subpages)
const today = new Date().toISOString().split('T')[0];
const sitemapEntries = [
  {
    loc: `${SITE_URL}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0',
  },
  ...allPages.map((p) => ({
    loc: `${SITE_URL}/${p.route}`,
    lastmod: today,
    changefreq: p.changefreq,
    priority: p.priority,
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapXml, 'utf-8');
if (fs.existsSync(publicPath)) {
  fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemapXml, 'utf-8');
}
console.log(`Generated sitemap.xml with ${sitemapEntries.length} URLs.`);

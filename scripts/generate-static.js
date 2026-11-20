import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://taviraroots.com';
const DEFAULT_OG_IMAGE = 'https://lh3.googleusercontent.com/d/1nBgIFM_5E5vclRhVItfSWT8rdG_Xt_Ml';
const DEFAULT_KEYWORDS =
  'Tavira Tours, Tuktuk Tavira, Algarve Tours, Tours Tavira, Private Tours Tavira, Jeep Tours Tavira, Tuktuk Tours Tavira, Things to do in Tavira, Tavira Roots';

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

// Load default (English) translations so static HTML matches initial SSR/crawler state
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

// Static page routes and their SEO metadata
const staticPages = [
  {
    route: 'tuk-tuk',
    title: t('seo.tuk_tuk_title'),
    description: t('seo.tuk_tuk_desc'),
    keywords: t('seo.tuk_tuk_keywords'),
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    route: 'jipe',
    title: t('seo.jeep_title'),
    description: t('seo.jeep_desc'),
    keywords: t('seo.jeep_keywords'),
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    route: 'walking-tours',
    title: t('seo.walking_title'),
    description: t('seo.walking_desc'),
    keywords: t('seo.walking_keywords'),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    route: 'before-booking',
    title: t('seo.before_booking_title'),
    description: t('seo.before_booking_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    route: 'faqs',
    title: t('seo.faqs_title'),
    description: t('seo.faqs_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    route: 'sobre-nos',
    title: t('seo.about_title'),
    description: t('seo.about_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    route: 'contactos',
    title: t('seo.contact_title'),
    description: t('seo.contact_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    route: 'privacidade',
    title: t('seo.privacy_title'),
    description: t('seo.privacy_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    route: 'termos',
    title: t('seo.terms_title'),
    description: t('seo.terms_desc'),
    keywords: DEFAULT_KEYWORDS,
    changefreq: 'yearly',
    priority: '0.3'
  }
];

// Extract tours from src/data/tours.ts
const toursFilePath = path.resolve('src/data/tours.ts');
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

    const type = typeMatch ? typeMatch[1] : 'tuk-tuk';
    const name = nameKeyMatch ? t(nameKeyMatch[1], id) : id;
    const desc = descKeyMatch ? t(descKeyMatch[1], '') : '';
    const duration = durationMatch ? durationMatch[1] : '';

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

    tourPages.push({
      route: `tour/${id}`,
      title,
      description,
      keywords,
      changefreq: 'weekly',
      priority: '0.9'
    });
  }
}

const baseHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

const buildRouteHtml = ({ title, description, keywords, canonicalUrl }) => {
  let html = baseHtml;

  const fullTitle = title.includes('Tavira Roots') ? title : `${title} | Tavira Roots`;
  const safeTitle = escapeHtml(fullTitle);
  const safeDesc = escapeHtml(description);
  const safeKeywords = escapeHtml(keywords);
  const safeUrl = escapeHtml(canonicalUrl);
  const safeImg = escapeHtml(DEFAULT_OG_IMAGE);

  // Replace existing title, description, keywords in base index.html
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);
  html = html.replace(
    /<meta\s+name="description"[^>]*>/i,
    `<meta data-rh="true" name="description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+name="keywords"[^>]*>/i,
    `<meta data-rh="true" name="keywords" content="${safeKeywords}" />`
  );

  // Inject canonical and Open Graph / Twitter meta tags before </head>
  const seoHeadTags = `
    <link data-rh="true" rel="canonical" href="${safeUrl}" />
    <meta data-rh="true" property="og:type" content="website" />
    <meta data-rh="true" property="og:title" content="${safeTitle}" />
    <meta data-rh="true" property="og:description" content="${safeDesc}" />
    <meta data-rh="true" property="og:image" content="${safeImg}" />
    <meta data-rh="true" property="og:url" content="${safeUrl}" />
    <meta data-rh="true" property="og:site_name" content="Tavira Roots" />
    <meta data-rh="true" name="twitter:card" content="summary_large_image" />
    <meta data-rh="true" name="twitter:title" content="${safeTitle}" />
    <meta data-rh="true" name="twitter:description" content="${safeDesc}" />
    <meta data-rh="true" name="twitter:image" content="${safeImg}" />
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

// Inject canonical & OG tags into root dist/index.html
const homeHtml = buildRouteHtml({
  title: t('seo.home_title'),
  description: t('seo.home_desc'),
  keywords: t('seo.home_keywords'),
  canonicalUrl: `${SITE_URL}/`
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
    canonicalUrl
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
    priority: '1.0'
  },
  ...allPages.map((p) => ({
    loc: `${SITE_URL}/${p.route}`,
    lastmod: today,
    changefreq: p.changefreq,
    priority: p.priority
  }))
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

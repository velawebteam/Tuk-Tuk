import fs from 'fs';
import path from 'path';

// Static routes
const staticRoutes = [
  'tuk-tuk',
  'jipe',
  'before-booking',
  'faqs',
  'sobre-nos',
  'contactos',
  'privacidade',
  'termos',
  'tour'
];

const distPath = path.resolve('dist');

if (!fs.existsSync(distPath)) {
  console.error('Dist directory not found. Run build first.');
  process.exit(1);
}

// Extract tour IDs from src/data/tours.ts
const toursFilePath = path.resolve('src/data/tours.ts');
let tourRoutes = [];

if (fs.existsSync(toursFilePath)) {
  const toursContent = fs.readFileSync(toursFilePath, 'utf-8');
  // Match all `id: 'tour-id'` occurrences inside tours array
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = idRegex.exec(toursContent)) !== null) {
    tourRoutes.push(`tour/${match[1]}`);
  }
}

const allRoutes = [...staticRoutes, ...tourRoutes];

// Generate index.html for each route directory
allRoutes.forEach(route => {
  const routePath = path.join(distPath, route);
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  fs.copyFileSync(path.join(distPath, 'index.html'), path.join(routePath, 'index.html'));
  console.log(`Generated index.html for /${route}`);
});

// Also create 404.html for static servers that support custom 404 page fallback (e.g. GitHub Pages)
fs.copyFileSync(path.join(distPath, 'index.html'), path.join(distPath, '404.html'));
console.log('Generated 404.html for SPA fallback');

console.log(`All ${allRoutes.length} static routes generated successfully.`);


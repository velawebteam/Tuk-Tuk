import fs from 'fs';
import path from 'path';

const routes = [
  'tuk-tuk',
  'jipe',
  'before-booking',
  'faqs',
  'sobre-nos',
  'contactos',
  'privacidade',
  'termos'
];

const distPath = path.resolve('dist');

if (!fs.existsSync(distPath)) {
  console.error('Dist directory not found. Run build first.');
  process.exit(1);
}

routes.forEach(route => {
  const routePath = path.join(distPath, route);
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  fs.copyFileSync(path.join(distPath, 'index.html'), path.join(routePath, 'index.html'));
  console.log(`Generated index.html for /${route}`);
});

console.log('All static routes generated successfully.');

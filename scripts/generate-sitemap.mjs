import { writeFileSync } from 'fs';
import { globby } from 'globby';
const homeURL = 'https://brianhaan.me';

(async () => {
  try {
    const pages = await globby([
      'pages/**/*.tsx',
      '!pages/_*.tsx',
      '!pages/api',
      '!pages/404.tsx',
    ]);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages/', '/')
                  .replace('.tsx', '')
                  .replace('/index', '');
                const route = path === '/index' ? '' : path;
                const fullUrl = `${homeURL}${route}`;
                return `
    <url>
      <loc>${fullUrl}</loc>
    </url>`;
              })
              .join('')}
  </urlset>`;
    writeFileSync('public/sitemap.xml', sitemap);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();

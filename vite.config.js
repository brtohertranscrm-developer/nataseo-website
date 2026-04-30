import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const ROUTES = [
  { path: '/',                                                     priority: '1.0', changefreq: 'weekly'  },
  { path: '/artikel/jasa-seo-yogyakarta',                         priority: '0.9', changefreq: 'monthly' },
  { path: '/artikel/jasa-pembuatan-website-yogyakarta',           priority: '0.9', changefreq: 'monthly' },
  { path: '/artikel/jasa-software-development-yogyakarta',        priority: '0.9', changefreq: 'monthly' },
  { path: '/artikel/biaya-jasa-seo-indonesia',                    priority: '0.9', changefreq: 'monthly' },
  { path: '/artikel/strategi-content-marketing-bisnis-indonesia', priority: '0.8', changefreq: 'monthly' },
  { path: '/artikel/cara-daftar-google-business-profile',         priority: '0.8', changefreq: 'monthly' },
  { path: '/artikel/seo-vs-google-ads',                           priority: '0.8', changefreq: 'monthly' },
]

function sitemapPlugin() {
  return {
    name: 'generate-sitemap',
    closeBundle() {
      const today = new Date().toISOString().split('T')[0]
      const urls = ROUTES.map(({ path, priority, changefreq }) => `
  <url>
    <loc>https://nataseo.asia${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('')

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`

      fs.writeFileSync(path.resolve('dist/sitemap.xml'), xml)
      console.log('✓ sitemap.xml generated')
    },
  }
}

export default defineConfig({
  plugins: [react(), sitemapPlugin()],
})

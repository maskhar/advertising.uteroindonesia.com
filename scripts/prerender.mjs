import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { render } from '../dist-ssr/entry-server.js'
import { seoPages, siteUrl } from '../src/data/seoPages.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const template = await readFile(resolve(dist, 'index.html'), 'utf8')
await writeFile(resolve(dist, 'index.html'), template.replace(/<div id="root"><\/div>/, `<div id="root">${render('/')}</div>`))

function replaceMeta(html, selector, value) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return html.replace(
    new RegExp(`(<meta\\s+${escapedSelector}\\s+content=")[^"]*("\\s*/?>)`, 'i'),
    `$1${value}$2`,
  )
}

function pageSchema(page) {
  const url = `${siteUrl}${page.path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.service.title,
        description: page.description,
        url,
        image: `${siteUrl}${page.service.image}`,
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: ['Malang', 'Surabaya', 'Mojokerto', 'Madiun'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Layanan', item: `${siteUrl}/#layanan` },
          { '@type': 'ListItem', position: 3, name: page.service.title, item: url },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: 'id-ID',
        about: { '@id': `${url}#service` },
      },
    ],
  }
}

for (const page of seoPages) {
  const url = `${siteUrl}${page.path}`
  let html = template
    .replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${url}" />`)
    .replace(/<div id="root"><\/div>/, `<div id="root">${render(page.path)}</div>`)
    .replace(
      /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="structured-data" type="application/ld+json">${JSON.stringify(pageSchema(page))}</script>`,
    )

  html = replaceMeta(html, 'name="description"', page.description)
  html = replaceMeta(html, 'property="og:type"', 'website')
  html = replaceMeta(html, 'property="og:url"', url)
  html = replaceMeta(html, 'property="og:title"', page.title)
  html = replaceMeta(html, 'property="og:description"', page.description)
  html = replaceMeta(html, 'property="og:image"', `${siteUrl}${page.service.image}`)
  html = replaceMeta(html, 'property="og:image:alt"', page.service.imageAlt)
  html = replaceMeta(html, 'name="twitter:title"', page.title)
  html = replaceMeta(html, 'name="twitter:description"', page.description)
  html = replaceMeta(html, 'name="twitter:image"', `${siteUrl}${page.service.image}`)

  const output = resolve(dist, page.path.slice(1), 'index.html')
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, html)
}

const urls = [`${siteUrl}/`, ...seoPages.map((page) => `${siteUrl}${page.path}`)]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>
`
await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true })

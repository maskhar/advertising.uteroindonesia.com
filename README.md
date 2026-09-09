# Utero Advertising — Website Reklame

Website single-page untuk **Utero Advertising**, unit bisnis reklame dari Utero Indonesia. Dibangun ulang dari template HTML statis menjadi **React + Vite** yang lebih ringan, terstruktur, dan mudah dirawat.

- **Framework**: React 19 + Vite
- **Styling**: CSS Modules + design tokens (`variables.css`)
- **Fonts**: Anton (display) & Inter (body) via Google Fonts
- **Build output**: statis, siap di-deploy ke Nginx/hosting mana pun

## Fitur

- 12 section sesuai template asli: Hero, About, Services, Gallery, Process, Interior & Eksterior, Event, WhyUs, Clients (marquee), Legalitas, Company Profile, Contact
- Galeri masonry + **lightbox** (navigasi keyboard, prev/next, click-outside close)
- **Header sticky** dengan scroll-spy & nav aktif, **menu mobile** slide-in
- **Marquee klien** infinite-scroll (pause on hover)
- Tombol **WhatsApp mengambang** + CTA dengan pesan ter-pre-fill
- Responsive (desktop → tablet → mobile), SEO meta + JSON-LD LocalBusiness

## Struktur Folder

```
src/
├── assets/styles/     # variables, reset, typography, utilities (global CSS)
├── components/
│   ├── layout/        # Header, Footer
│   ├── sections/      # 12 section komponen (Hero, Services, ...)
│   ├── features/      # Lightbox, Marquee, MobileMenu, WAFloat
│   └── ui/            # Button, Eyebrow, Bracket
├── data/              # services, process, clients, sectors, whyUs, gallery, legal
├── hooks/             # useScrollSpy, useLightbox
└── utils/             # constants (kontak, WhatsApp helper)
public/                # favicon.svg, robots.txt, sitemap.xml
```

## Konten & Data

Semua konten (teks, nomor, daftar) diambil persis dari template HTML asli dan disimpan di `src/data/`. Kontak & cabang ada di `src/utils/constants.js`:

- WhatsApp: `6281999900900`
- Email: `marketingutero@gmail.com`
- Cabang: Malang, Mojokerto, Madiun, Surabaya

Gambar saat ini memakai placeholder `placehold.co`. Untuk mengganti dengan foto asli, cukup perbarui URL di `src/data/gallery.js` dan masing-masing komponen section.

## Development

```bash
npm install       # install dependencies
npm run dev       # dev server (http://localhost:5173)
npm run build     # production build ke dist/
npm run preview   # preview hasil build
npm run lint      # oxlint
```

## Struktur Data Galeri

Setiap item galeri: `{ id, title, image, thumb }`. `image` dipakai di lightbox, `thumb` untuk grid masonry (saat ini keduanya placeholder).

## Catatan

- Docker/tempat-deploy dikerjakan terpisah (belum termasuk di repo ini).
- Dokumen desain & penjadwalan: `docs/SDD.md` dan `docs/TODO.md`.
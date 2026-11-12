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

## Deployment Docker

Website production berjalan melalui Nginx pada port host `8090`.

Untuk mengaktifkan Google Analytics 4 (GA4), isi Measurement ID milik properti Anda di file `.env` pada folder proyek:

```dotenv
GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

Ganti `G-XXXXXXXXXX` dengan ID asli dari Google Analytics > Admin > Data streams > Web > Measurement ID. Tanpa ID asli, tracking GA4 tidak aktif. ID digunakan saat build image, sehingga sesudah mengisi/mengubah `.env` wajib build ulang:

```bash
docker compose up -d --build
docker compose ps
docker compose logs -f
```

Buka `http://localhost:8090`. Untuk menghentikan layanan:

```bash
docker compose down
```

## SEO & Indexing

- Beranda dan enam halaman layanan di `/layanan/.../` diprerender sebagai HTML lengkap, masing-masing dengan title, description, canonical, Open Graph, Twitter Card, H1, dan structured data.
- `robots.txt` mengizinkan crawling; `sitemap.xml` berisi tujuh URL. Fragment section `/#galeri` bukan halaman indeks tersendiri; halaman layanan memiliki URL unik dan tautan internal.
- Daftarkan `https://advertising.uteroindonesia.com/` sebagai properti di Google Search Console, kirim `https://advertising.uteroindonesia.com/sitemap.xml`, lalu gunakan URL Inspection untuk URL prioritas. Proses indeks/ranking tetap diputuskan Google dan tidak dapat dijamin cepat.
- Periksa status DNS, respons HTTPS, dan metadata dari internet setelah deploy. Host yang digunakan saat pengembangan tidak bisa resolve domain publik, jadi audit Search Console/hasil pencarian belum bisa diverifikasi dari host ini.

## Struktur Data Galeri

Setiap item galeri: `{ id, title, image, thumb }`. `image` dipakai di lightbox, `thumb` untuk grid masonry (saat ini keduanya placeholder).

## Catatan

- Dokumen desain & penjadwalan: `docs/SDD.md` dan `docs/TODO.md`.

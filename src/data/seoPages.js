import { services } from './services.js'

export const siteUrl = 'https://advertising.uteroindonesia.com'

const details = [
  {
    slug: 'desain-identitas-visual',
    title: 'Jasa Desain & Identitas Visual untuk Brand | Utero Advertising',
    description: 'Jasa desain identitas visual, logo, key visual campaign dan materi promosi untuk brand di Malang, Surabaya, Mojokerto, dan Madiun.',
    intro: 'Identitas visual membantu pelanggan mengenali brand Anda di berbagai media, dari papan nama toko hingga kampanye luar ruang. Tim Utero Advertising menyiapkan konsep dan materi desain sebelum produksi agar pesan tetap konsisten.',
    detail: 'Layanan mencakup brand identity dan logo, key visual campaign, serta desain materi promosi. Hasil desain dapat diterapkan pada reklame, media cetak, dan kebutuhan aktivasi brand dalam satu alur kerja.',
  },
  {
    slug: 'reklame-outdoor-indoor',
    title: 'Jasa Reklame Outdoor & Indoor, Billboard, Videotron | Utero Advertising',
    description: 'Produksi dan pemasangan billboard, videotron, neon box, papan nama, baliho, dan reklame outdoor maupun indoor di Malang dan sekitarnya.',
    intro: 'Reklame yang efektif perlu terlihat jelas dan sesuai dengan lokasi pemasangannya. Utero Advertising membantu memilih media luar dan dalam ruang yang cocok untuk kebutuhan promosi usaha Anda.',
    detail: 'Pilihan media meliputi billboard, videotron, neon box, huruf timbul, pylon sign, papan nama, baliho, spanduk, dan umbul-umbul. Tim kami menangani desain, produksi, serta pemasangan agar identitas brand tampil konsisten.',
  },
  {
    slug: 'perizinan-pajak-reklame',
    title: 'Jasa Perizinan & Pajak Reklame | Utero Advertising',
    description: 'Bantuan perizinan reklame, pajak reklame, media placement, dan perhitungan konstruksi untuk pemasangan reklame usaha.',
    intro: 'Pemasangan reklame memerlukan perhatian pada izin, kewajiban pajak, dan keamanan konstruksi. Utero Advertising mendampingi proses tersebut bersama persiapan media promosi Anda.',
    detail: 'Tim kami membantu pengurusan perizinan dan pajak reklame ke instansi terkait, perhitungan konstruksi, serta kebutuhan media placement. Persyaratan dan biaya mengikuti aturan daerah dan lokasi pemasangan.',
  },
  {
    slug: 'percetakan-digital-produksi',
    title: 'Digital Printing, Offset & Produksi Reklame | Utero Advertising',
    description: 'Percetakan digital indoor dan outdoor, offset, sablon, large format, CNC cutting, serta fabrikasi custom untuk kebutuhan promosi.',
    intro: 'Materi promosi perlu dicetak sesuai ukuran, media, dan kondisi penggunaannya. Fasilitas produksi Utero Advertising melayani kebutuhan cetak dari materi kampanye hingga media reklame skala besar.',
    detail: 'Layanan produksi mencakup digital printing indoor dan outdoor, large format, offset, sablon, fabrikasi custom, dan CNC cutting. Tim desain dan produksi bekerja dalam satu alur untuk menjaga kesesuaian hasil dengan konsep.',
  },
  {
    slug: 'interior-eksterior-booth',
    title: 'Desain Interior, Eksterior & Booth Usaha | Utero Advertising',
    description: 'Desain dan build interior retail, eksterior toko, signage, display produk, dan booth pameran untuk kebutuhan branding usaha.',
    intro: 'Tampilan ruang usaha menjadi bagian dari pengalaman pelanggan. Utero Advertising merancang elemen interior, eksterior, dan signage agar karakter brand terasa sejak pengunjung melihat bangunan.',
    detail: 'Layanan meliputi desain dan build interior retail atau kantor, eksterior toko, booth pameran, display produk, dan branding environment. Solusi dapat disesuaikan untuk pembukaan usaha baru maupun pembaruan ruang.',
  },
  {
    slug: 'promosi-event-booth',
    title: 'Booth, Backdrop & Promosi Event | Utero Advertising',
    description: 'Dukungan promosi event, desain booth pameran, stage, backdrop, dan event branding untuk expo, festival, serta peluncuran produk.',
    intro: 'Ruang event memberi peluang bagi brand untuk bertemu langsung dengan pengunjung. Utero Advertising membantu menyiapkan kebutuhan visual dan produksi agar pengalaman di lokasi sejalan dengan pesan kampanye.',
    detail: 'Kami menangani konsep booth, event branding, stage, backdrop, dan dukungan promosi dalam maupun luar ruang. Kebutuhan dapat disesuaikan dengan jenis acara, lokasi, dan anggaran.',
  },
]

export const seoPages = details.map((detail, index) => ({
  ...detail,
  service: services[index],
  path: `/layanan/${detail.slug}/`,
}))

export function getSeoPage(pathname) {
  return seoPages.find((page) => page.path === pathname) || null
}

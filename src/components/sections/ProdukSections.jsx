import { useState } from 'react'
import Eyebrow from '../ui/Eyebrow'
import Lightbox from '../features/Lightbox'
import ZoomGallery from '../features/ZoomGallery'
import { useLightbox } from '../../hooks/useLightbox'
import styles from './Interior.module.css'

const SECTIONS = [
  {
    id: 1,
    anchor: 'produk-desain',
    eyebrow: 'Desain & Kreatif',
    title: 'Identitas Visual yang Kuat Sebelum Turun ke Produksi',
    description:
      'Membangun identitas visual yang kuat & strategis supaya reklame Anda konsisten dengan brand di semua media.',
    tags: ['Brand Identity & Logo', 'Key Visual Campaign', 'Desain Materi Promosi'],
    miniImages: [
      '/photos/desain-brand-identity.webp',
      '/photos/desain-key-visual-campaign.webp',
      '/photos/desain-materi-promosi.webp',
    ],
    image: '/desain.webp',
    imageAlt: 'Desain dan identitas visual Utero Advertising',
    reverse: false,
  },
  {
    id: 2,
    anchor: 'produk-reklame',
    eyebrow: 'Media Luar Ruang',
    title: 'Reklame Dalam & Luar Ruang di Titik Strategis',
    description:
      'Dominasi ruang publik di titik strategis: billboard, videotron, neon box, papan nama, huruf timbul, pylon sign, baliho, spanduk, hingga umbul-umbul.',
    tags: ['Billboard', 'Videotron', 'Neon Box'],
    miniImages: [
      '/photos/galeri-07-billboard.webp',
      '/photos/galeri-03-videotron-bangunan.webp',
      '/photos/galeri-04-neon-box.webp',
    ],
    image: '/Reklame_Luar.webp',
    imageAlt: 'Reklame dalam & luar ruang Utero Advertising',
    reverse: true,
  },
  {
    id: 3,
    anchor: 'produk-perizinan',
    eyebrow: 'Kepatuhan & Regulasi',
    title: 'Perizinan & Pajak Reklame, Kami yang Urus',
    description:
      'Kami urus perizinan reklame dan pajak reklame ke instansi terkait, plus perhitungan konstruksi supaya reklame Anda aman & sesuai regulasi.',
    tags: ['Perizinan Reklame', 'Pajak Reklame', 'Perhitungan Konstruksi'],
    miniImages: [
      '/photos/galeri-14-signage-kantor.webp',
      '/photos/regulasi-pajak.webp',
      '/photos/galeri-08-cnc-cutting.webp',
    ],
    image: '/perijinan.webp',
    imageAlt: 'Layanan perizinan dan pajak reklame',
    reverse: false,
  },
  {
    id: 4,
    anchor: 'produk-percetakan',
    eyebrow: 'Produksi In-House',
    title: 'Percetakan & Produksi In-House, Mutu Terjaga',
    description:
      'Fasilitas produksi in-house: digital printing indoor & outdoor, large format, offset, sablon, hingga fabrikasi custom & CNC cutting.',
    tags: ['Digital Printing', 'Offset Printing', 'Sablon'],
    miniImages: [
      '/photos/galeri-09-digital-printing.webp',
      '/photos/produksi-offset.webp',
      '/photos/galeri-12-vehicle-branding.webp',
    ],
    image: '/percetakan.webp',
    imageAlt: 'Fasilitas percetakan dan produksi Utero Advertising',
    reverse: true,
  },
]

function ProdukSection({ data }) {
  const items = [
    { image: data.image, title: data.imageAlt },
    ...(data.miniImages
      ? data.miniImages.map((src, i) => ({ image: src, title: data.tags[i] }))
      : data.tags.map((tag) => ({
          image: `https://placehold.co/400x300/17130F/E31E24?text=${encodeURIComponent(tag)}`,
          title: tag,
        }))),
  ]
  const lightbox = useLightbox(items)
  const [view, setView] = useState(0)

  const zoom = (
    <div className={styles.zoom}>
      <ZoomGallery items={items} view={view} onViewChange={setView} onOpen={lightbox.open} />
    </div>
  )

  const cp = (
    <div className={styles.cp}>
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className={styles.miniRow}>
        {data.tags.map((tag, index) => (
          <button
            key={tag}
            type="button"
            className={styles.miniBtn}
            onClick={() => setView(index + 1)}
            aria-label={`Lihat gambar ${tag}`}
          >
            <img src={items[index + 1].image} alt={tag} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <section id={data.anchor} style={{ padding: 0 }}>
      <div className={styles.split}>{data.reverse ? <>{zoom}{cp}</> : <>{cp}{zoom}</>}</div>

      <Lightbox
        isOpen={lightbox.isOpen}
        item={lightbox.item}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrev={lightbox.prev}
      />
    </section>
  )
}

function ProdukSections() {
  return SECTIONS.map((data) => <ProdukSection key={data.id} data={data} />)
}

export default ProdukSections
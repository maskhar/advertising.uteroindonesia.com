import { useState } from 'react'
import Eyebrow from '../ui/Eyebrow'
import Lightbox from '../features/Lightbox'
import ZoomGallery from '../features/ZoomGallery'
import { useLightbox } from '../../hooks/useLightbox'
import styles from './Interior.module.css'

const MINI = [
  '/photos/event-01-booth.webp',
  '/photos/event-02-stage.webp',
  '/photos/event-03-backdrop.webp',
]

const ITEMS = [
  { image: '/Dukungan dan Promosi Event.webp', title: 'Dukungan event dan aktivasi brand Utero Advertising' },
  ...MINI.map((image, index) => ({
    image,
    title: ['Booth Event', 'Stage & Backdrop', 'Backdrop Produk'][index],
  })),
]

function Event() {
  const lightbox = useLightbox(ITEMS)
  const [view, setView] = useState(0)

  return (
    <section id="event" style={{ padding: 0 }}>
      <div className={styles.split}>
        <div className={styles.zoom}>
          <ZoomGallery items={ITEMS} view={view} onViewChange={setView} onOpen={lightbox.open} />
        </div>
        <div className={styles.cp}>
          <Eyebrow>Produk</Eyebrow>
          <h2>Dukungan Promosi &amp; Publikasi Dalam &amp; Luar Ruang Untuk Event</h2>
          <p>
            Dari panggung festival, booth pameran, sampai backdrop launching produk &mdash; kami
            bangun ruang brand yang mencuri perhatian dan sesuai budget.
          </p>
          <div className={styles.miniRow}>
            {MINI.map((src, index) => (
              <button
                key={src}
                type="button"
                className={styles.miniBtn}
                onClick={() => setView(index + 1)}
                aria-label={`Lihat gambar ${ITEMS[index + 1].title}`}
              >
                <img src={src} alt={ITEMS[index + 1].title} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>

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

export default Event
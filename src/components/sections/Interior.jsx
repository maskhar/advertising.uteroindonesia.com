import { useState } from 'react'
import Eyebrow from '../ui/Eyebrow'
import Lightbox from '../features/Lightbox'
import ZoomGallery from '../features/ZoomGallery'
import { useLightbox } from '../../hooks/useLightbox'
import styles from './Interior.module.css'

const MINI = [
  '/photos/galeri-13-interior-led.webp',
  '/photos/galeri-06-signage-tower.webp',
  '/photos/galeri-10-papan-nama.webp',
]

const ITEMS = [
  { image: '/Interior,Eksterior&Booth.webp', title: 'Desain interior bangunan usaha Utero Advertising' },
  ...MINI.map((image, index) => ({
    image,
    title: ['Desain Interior', 'Desain Eksterior', 'Signage'][index],
  })),
]

function Interior() {
  const lightbox = useLightbox(ITEMS)
  const [view, setView] = useState(0)

  return (
    <section id="interior" style={{ padding: 0 }}>
      <div className={styles.split}>
        <div className={styles.cp}>
          <Eyebrow>Pendukung Pembukaan Usaha</Eyebrow>
          <h2>Interior &amp; Eksterior Bangunan Usaha, Siap Grand Opening</h2>
          <p>
            Selain reklame, kami juga membantu tampilan fisik usaha Anda dari luar &amp; dalam &mdash;
            desain &amp; build interior retail/kantor, eksterior toko, sampai signage yang menyatu
            dengan konsep ruang.
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
        <div className={styles.zoom}>
          <ZoomGallery items={ITEMS} view={view} onViewChange={setView} onOpen={lightbox.open} />
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

export default Interior
import Eyebrow from '../ui/Eyebrow'
import { gallery } from '../../data/gallery'
import styles from './Gallery.module.css'

function Gallery({ onOpen }) {
  return (
    <section id="galeri" className="section">
      <div className="wrap">
        <div className="section-head">
          <Eyebrow>Dari Lapangan, Bukan Katalog</Eyebrow>
          <h2>Galeri Pemasangan &amp; Proses Produksi</h2>
          <p>
            Billboard, videotron, neon box, papan nama, hingga baliho &amp; spanduk yang benar-benar
            sudah berdiri di jalan &mdash; lengkap dengan proses desain, produksi, dan pemasangannya.
          </p>
        </div>
        <div className={styles.masonry}>
          {gallery.map((item, index) => (
            <figure key={item.id} className={styles.figure} onClick={() => onOpen(index)}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption className={styles.figcaption}>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
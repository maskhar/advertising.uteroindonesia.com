import Eyebrow from '../ui/Eyebrow'
import styles from './Interior.module.css'

const MINI = [
  'https://placehold.co/400x300/17130F/E31E24?text=Booth',
  'https://placehold.co/400x300/17130F/E31E24?text=Stage',
  'https://placehold.co/400x300/17130F/E31E24?text=Backdrop',
]

function Event() {
  return (
    <section id="event" style={{ padding: 0 }}>
      <div className={styles.split}>
        <div className={styles.ph}>
          <img
            src="https://placehold.co/800x600/17130F/E31E24?text=Event+Aktivasi"
            alt="Dukungan event dan aktivasi brand Utero Advertising"
            loading="lazy"
          />
        </div>
        <div className={styles.cp}>
          <Eyebrow>Aktivasi Brand</Eyebrow>
          <h2>Dukungan Promosi &amp; Publikasi Dalam &amp; Luar Ruang Untuk Event</h2>
          <p>
            Dari panggung festival, booth pameran, sampai backdrop launching produk &mdash; kami
            bangun ruang brand yang mencuri perhatian dan sesuai budget.
          </p>
          <div className={styles.miniRow}>
            {MINI.map((src) => (
              <img key={src} src={src} alt="Dukungan event dan aktivasi brand" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Event
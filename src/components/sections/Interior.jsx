import Eyebrow from '../ui/Eyebrow'
import styles from './Interior.module.css'

const MINI = [
  'https://placehold.co/400x300/17130F/E31E24?text=Interior',
  'https://placehold.co/400x300/17130F/E31E24?text=Eksterior',
  'https://placehold.co/400x300/17130F/E31E24?text=Signage',
]

function Interior() {
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
            {MINI.map((src) => (
              <img key={src} src={src} alt="Interior dan eksterior bangunan usaha" loading="lazy" />
            ))}
          </div>
        </div>
        <div className={styles.ph}>
          <img
            src="https://placehold.co/800x600/17130F/E31E24?text=Interior+Eksterior"
            alt="Desain interior bangunan usaha Utero Advertising"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Interior
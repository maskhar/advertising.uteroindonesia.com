import Eyebrow from '../ui/Eyebrow'
import Bracket from '../ui/Bracket'
import styles from './About.module.css'

const PILLS = ['Desain', 'Perizinan Reklame', 'Produksi', 'Pemasangan', 'Perawatan']

function About() {
  return (
    <section id="tentang" className="section">
      <div className={`wrap ${styles.grid}`}>
        <Bracket className={styles.figure}>
          <figure>
            <img
              src="https://placehold.co/800x600/17130F/E31E24?text=Kantor+Utero"
              alt="Kantor pusat Utero Advertising di Malang"
            />
            <figcaption className={styles.figcaption}>Kantor Pusat &mdash; Malang</figcaption>
          </figure>
        </Bracket>
        <div className={styles.copy}>
          <Eyebrow>Lebih Dari Sekadar Vendor</Eyebrow>
          <h2 className={styles.title}>
            Kami Mitra Strategis Reklame Anda, Bukan Cuma Tukang Pasang
          </h2>
          <p>
            Utero Advertising adalah unit bisnis reklame dari <strong>Utero Indonesia</strong>,
            brand consultant &amp; creative agency yang sudah berdiri sejak 1998. Kami menggabungkan
            kreativitas desain, teknologi produksi, dan strategi pemasaran supaya reklame Anda
            benar-benar dilihat &mdash; bukan sekadar terpasang.
          </p>
          <p>
            Pendekatan kami &ldquo;End-to-End Service&rdquo;: mulai dari konsep kreatif, desain,
            perizinan &amp; pajak reklame, produksi, sampai eksekusi lapangan. Melayani Retail,
            Korporasi, Pemerintah &amp; BUMN, Developer, Event Organizer, hingga UMKM.
          </p>
          <div className={styles.pillRow}>
            {PILLS.map((pill) => (
              <span key={pill} className={styles.pill}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
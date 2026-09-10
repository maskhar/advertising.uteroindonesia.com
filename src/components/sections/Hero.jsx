import Button from '../ui/Button'
import { getWhatsAppLink } from '../../utils/constants'
import styles from './Hero.module.css'

const STATS = [
  { num: '25+', label: 'Tahun pengalaman industri kreatif' },
  { num: '5', label: 'Kota jaringan kantor & cabang' },
  { num: '100+', label: 'Klien lintas sektor & industri' },
]

function Hero() {
  return (
    <section className={styles.hero} style={{ padding: 0 }}>
      <img
        className={styles.bg}
        src="https://placehold.co/1600x900/0f0d0b/0f0d0b"
        alt=""
      />
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.tag}>
          Bagian dari Utero Indonesia &mdash; Idea &amp; Concept Factory sejak 1998
        </div>
        <h1 className={styles.title}>
          REKLAME YANG BENAR&#8209;BENAR <em>TERPASANG</em> DI JALAN
        </h1>
        <p className={styles.sub}>
          Utero Advertising menangani reklame luar &amp; dalam ruang dari nol sampai berdiri:
          desain, produksi, perizinan, pajak reklame, hingga pemasangan di titik strategis.
          Billboard, videotron, neon box, papan nama, baliho, spanduk, umbul-umbul &mdash; satu
          pintu, satu tanggung jawab.
        </p>
        <div className={styles.ctas}>
          <Button
            as="a"
            href={getWhatsAppLink('Halo Utero Advertising, saya ingin konsultasi reklame')}
            target="_blank"
            rel="noopener"
          >
            Konsultasi via WhatsApp
          </Button>
          <Button as="a" href="#galeri" variant="outlineLight">
            Lihat Hasil Pemasangan
          </Button>
        </div>
        <div className={styles.statStrip}>
          {STATS.map((stat) => (
            <div key={stat.num}>
              <span className={styles.statNum}>{stat.num}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
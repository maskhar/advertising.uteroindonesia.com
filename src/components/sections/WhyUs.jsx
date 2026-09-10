import Eyebrow from '../ui/Eyebrow'
import { whyUs } from '../../data/whyUs'
import { sectors } from '../../data/sectors'
import styles from './WhyUs.module.css'

function WhyUs() {
  return (
    <section id="kenapa" className={`section ${styles.section}`}>
      <div className="wrap">
        <div className="section-head">
          <Eyebrow>Mengapa Memilih Utero Advertising</Eyebrow>
          <h2>Enam Alasan Klien Bertahan Bersama Kami</h2>
        </div>

        <div className={styles.whyGrid}>
          {whyUs.map((item) => (
            <div key={item.id} className={styles.card}>
              <span className={styles.n}>{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.sectorStrip}>
          {sectors.map((sector) => (
            <div key={sector.id} className={styles.sector}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true">
                {sector.paths.map((path, i) => (
                  <path key={i} d={path} />
                ))}
              </svg>
              {sector.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
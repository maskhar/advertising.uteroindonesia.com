import Eyebrow from '../ui/Eyebrow'
import { services } from '../../data/services'
import styles from './Services.module.css'

function Services() {
  return (
    <section id="layanan" className={`section ${styles.section}`}>
      <div className="wrap">
        <div className="section-head">
          <Eyebrow>Layanan Kami</Eyebrow>
          <h2>Solusi End-to-End Untuk Setiap Fase Pertumbuhan Brand</h2>
          <p>
            Integrasi layanan reklame outdoor &amp; indoor dalam satu atap &mdash; dari kertas
            konsep sampai berdiri di pinggir jalan.
          </p>
        </div>

        <div className={styles.list}>
          {services.map((service) => (
            <div key={service.id} className={styles.row}>
              <div className={styles.num}>{service.num}</div>
              <div className={styles.txt}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.tagList}>
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.imgWrap}>
                <img src={service.image} alt={service.imageAlt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
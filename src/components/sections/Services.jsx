import Eyebrow from '../ui/Eyebrow'
import Lightbox from '../features/Lightbox'
import { services } from '../../data/services'
import { useLightbox } from '../../hooks/useLightbox'
import styles from './Services.module.css'

function Services() {
  const lightbox = useLightbox(services)

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
          {services.map((service, index) => (
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
                <button
                  type="button"
                  onClick={() => lightbox.open(index)}
                  aria-label={`Lihat gambar ${service.title}`}
                >
                  <img src={service.image} alt={service.imageAlt} loading="lazy" />
                </button>
              </div>
            </div>
          ))}

      <Lightbox
        isOpen={lightbox.isOpen}
        item={lightbox.item}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrev={lightbox.prev}
      />
        </div>
      </div>
    </section>
  )
}

export default Services
import { seoPages } from '../../data/seoPages'
import { getWhatsAppLink } from '../../utils/constants'
import Button from '../ui/Button'
import styles from './ServicePage.module.css'

function ServicePage({ page }) {
  return (
    <main className={styles.page}>
      <div className="wrap">
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <a href="/">Beranda</a> / <a href="/#layanan">Layanan</a> / {page.service.title}
        </nav>
        <article>
          <p className={styles.eyebrow}>Layanan Utero Advertising</p>
          <h1>{page.service.title}</h1>
          <p className={styles.lead}>{page.intro}</p>
          <img className={styles.image} src={page.service.image} alt={page.service.imageAlt} />
          <h2>Apa yang kami kerjakan?</h2>
          <p>{page.detail}</p>
          <ul>
            {page.service.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <h2>Konsultasikan kebutuhan Anda</h2>
          <p>
            Diskusikan kebutuhan proyek bersama tim kami. Utero Advertising melayani klien
            di Malang, Surabaya, Mojokerto, dan Madiun.
          </p>
          <Button as="a" href={getWhatsAppLink(`Halo Utero Advertising, saya ingin konsultasi ${page.service.title}`)} target="_blank" rel="noopener noreferrer">
            Konsultasi via WhatsApp
          </Button>
        </article>
        <aside className={styles.related} aria-label="Layanan lainnya">
          <h2>Layanan lainnya</h2>
          <ul>
            {seoPages.filter((item) => item.path !== page.path).map((item) => (
              <li key={item.path}><a href={item.path}>{item.service.title}</a></li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  )
}

export default ServicePage

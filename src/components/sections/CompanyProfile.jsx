import Bracket from '../ui/Bracket'
import Eyebrow from '../ui/Eyebrow'
import styles from './CompanyProfile.module.css'

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  )
}

function CompanyProfile() {
  return (
    <section style={{ paddingTop: 0 }} className="section">
      <div className="wrap">
        <Bracket block>
          <div className={styles.cta}>
            <div>
              <Eyebrow light>Lampiran</Eyebrow>
              <h2>Unduh Company Profile Lengkap Kami</h2>
              <p>
                Termasuk profil Utero Indonesia, daftar layanan, galeri karya, daftar event, dan daftar
                klien &mdash; untuk keperluan presentasi, tender, atau arsip internal Anda.
              </p>
            </div>
            <div className={styles.links}>
              <a
                className={styles.link}
                href="Company-Profile-Utero-Indonesia.pdf"
                target="_blank"
                rel="noopener"
              >
                <PdfIcon />
                Company Profile &ndash; Utero Indonesia (PDF)
              </a>
              <a
                className={styles.link}
                href="Utero-Advertising-Capability-Deck.pdf"
                target="_blank"
                rel="noopener"
              >
                <PdfIcon />
                Capability Deck &ndash; Utero Advertising (PDF)
              </a>
            </div>
          </div>
        </Bracket>
      </div>
    </section>
  )
}

export default CompanyProfile
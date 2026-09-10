import Button from '../ui/Button'
import { WHATSAPP_LINK } from '../../utils/constants'
import styles from './Header.module.css'

const NAV = [
  { href: '#layanan', id: 'layanan', label: 'Layanan' },
  { href: '#galeri', id: 'galeri', label: 'Galeri' },
  { href: '#proses', id: 'proses', label: 'Proses Kerja' },
  { href: '#interior', id: 'interior', label: 'Interior & Eksterior' },
  { href: '#event', id: 'event', label: 'Event' },
  { href: '#kenapa', id: 'kenapa', label: 'Kenapa Kami' },
  { href: '#kontak', id: 'kontak', label: 'Kontak' },
]

function Header({ activeSection, onOpenMenu }) {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <a href="#top" className={styles.logo}>
          UTERO
          <br />
          ADVERTISING
          <span>PART OF UTERO INDONESIA</span>
        </a>

        <nav className={styles.links} aria-label="Navigasi utama">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.cta}>
          <span className={styles.ctaButton}>
            <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener">
              Konsultasi Gratis
            </Button>
          </span>
          <button className={styles.burger} onClick={onOpenMenu} aria-label="Buka menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

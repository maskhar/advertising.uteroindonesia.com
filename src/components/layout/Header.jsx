import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import { services } from '../../data/services'
import { WHATSAPP_LINK } from '../../utils/constants'
import styles from './Header.module.css'

const NAV = [
  { href: '#layanan', id: 'layanan', label: 'Layanan' },
  { href: '#galeri', id: 'galeri', label: 'Galeri' },
  { href: '#proses', id: 'proses', label: 'Proses Kerja' },
  { href: '#interior', id: 'interior', label: 'Produk' },
  { href: '#event', id: 'event', label: 'Event' },
  { href: '#kenapa', id: 'kenapa', label: 'Kenapa Kami' },
  { href: '#kontak', id: 'kontak', label: 'Kontak' },
  { href: null, id: 'artikel', label: 'Artikel' },
]

function Header({ activeSection, onOpenMenu }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

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
          {NAV.map((link) =>
            link.id === 'interior' ? (
              <div
                key={link.href}
                className={styles.dropdownWrap}
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className={`${styles.link} ${styles.parentLink} ${
                    activeSection === link.id ? styles.active : ''
                  }`}
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  {link.label}
                  <span className={`${styles.caret} ${dropdownOpen ? styles.caretOpen : ''}`} />
                </a>
                <div className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownOpen : ''}`}>
                  {services.map((service) => (
                    <a
                      key={service.id}
                      href={`#layanan-${service.id}`}
                      className={styles.dropdownLink}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : link.href ? (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${activeSection === link.id ? styles.active : ''}`}
              >
                {link.label}
              </a>
            ) : (
              <span key={link.id} className={styles.link}>
                {link.label}
              </span>
            ),
          )}
        </nav>

        <div className={styles.cta}>
          <span className={styles.ctaButton}>
            <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener">
              Konsultasi
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
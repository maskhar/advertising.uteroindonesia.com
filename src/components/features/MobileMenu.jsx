import { useState } from 'react'
import { services } from '../../data/services'
import styles from './MobileMenu.module.css'

function MobileMenu({ open, onClose, activeSection }) {
  const [produkOpen, setProdukOpen] = useState(false)

  if (!open) return null

  const links = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#proses', label: 'Proses Kerja' },
    { href: '#event', label: 'Event' },
    { href: '#kenapa', label: 'Kenapa Kami' },
    { href: '#kontak', label: 'Kontak' },
  ]

  const closeAll = () => {
    setProdukOpen(false)
    onClose()
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <div className={styles.panel}>
        <div className={styles.head}>
          <span className={styles.title}>Menu</span>
          <button className={styles.close} onClick={onClose} aria-label="Tutup menu">
            &times;
          </button>
        </div>
        <nav className={styles.links} aria-label="Navigasi mobile">
          <button
            type="button"
            className={`${styles.produkBtn} ${
              activeSection === 'interior' ? styles.active : ''
            }`}
            onClick={() => setProdukOpen((open) => !open)}
            aria-expanded={produkOpen}
          >
            <span>Produk</span>
            <span className={`${styles.caret} ${produkOpen ? styles.caretOpen : ''}`} />
          </button>
          {produkOpen && (
            <div className={styles.submenu}>
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#layanan-${service.id}`}
                  className={styles.subLink}
                  onClick={closeAll}
                >
                  {service.title}
                </a>
              ))}
            </div>
          )}
          {links.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
                onClick={onClose}
              >
                {link.label}
              </a>
            )
          })}
          <span className={styles.link}>Artikel</span>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
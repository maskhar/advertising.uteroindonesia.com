import styles from './MobileMenu.module.css'

function MobileMenu({ open, onClose, activeSection }) {
  if (!open) return null

  const links = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#proses', label: 'Proses Kerja' },
    { href: '#interior', label: 'Interior & Eksterior' },
    { href: '#event', label: 'Event' },
    { href: '#kenapa', label: 'Kenapa Kami' },
    { href: '#kontak', label: 'Kontak' },
  ]

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
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu

import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.row}`}>
        <span>
          &copy; {year} PT Utero Kreatif Indonesia &mdash; Utero Advertising. &ldquo;Ide Tanpa
          Realisasi Sama Dengan Sampah.&rdquo;
        </span>
        <span>Malang &middot; Surabaya &middot; Mojokerto &middot; Madiun</span>
      </div>
    </footer>
  )
}

export default Footer

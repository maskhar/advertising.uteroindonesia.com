import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.row}`}>
        <span>
          &copy; {year} Utero Indonesia &mdash; Utero Advertising. &ldquo;More Than Advertising.&rdquo;
        </span>
        <span>Malang &middot; Surabaya &middot; Mojokerto &middot; Madiun</span>
      </div>
    </footer>
  )
}

export default Footer

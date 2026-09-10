import styles from './Lightbox.module.css'

function Lightbox({ isOpen, item, onClose, onNext, onPrev }) {
  if (!isOpen || !item) return null

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button className={styles.close} onClick={onClose} aria-label="Tutup">
        &times;
      </button>

      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <button className={styles.nav} onClick={() => onPrev()} aria-label="Gambar sebelumnya">
          &#8249;
        </button>
        <img className={styles.img} src={item.image} alt={item.title} />
        <button className={styles.nav} onClick={() => onNext()} aria-label="Gambar berikutnya">
          &#8250;
        </button>
      </div>

      <div className={styles.cap}>{item.title}</div>
    </div>
  )
}

export default Lightbox

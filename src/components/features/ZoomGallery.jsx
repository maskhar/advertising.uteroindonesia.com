import styles from './ZoomGallery.module.css'

function ZoomGallery({ items, view, onViewChange, onOpen }) {
  const item = items[view]

  const prev = () => onViewChange((view - 1 + items.length) % items.length)
  const next = () => onViewChange((view + 1) % items.length)

  return (
    <>
      <button
        type="button"
        className={styles.imgBtn}
        onClick={() => onOpen(view)}
        aria-label={`Lihat gambar ${item.title}`}
      >
        <img src={item.image} alt={item.title} loading="lazy" />
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={prev}
            aria-label="Gambar sebelumnya"
          >
            &#8249;
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={next}
            aria-label="Gambar berikutnya"
          >
            &#8250;
          </button>
          <span className={styles.counter} aria-live="polite">
            {view + 1} / {items.length}
          </span>
        </>
      )}
    </>
  )
}

export default ZoomGallery
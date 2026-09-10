import styles from './Marquee.module.css'

function Marquee({ items }) {
  const doubled = [...items, ...items]

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marquee}>
        {doubled.map((item, index) => (
          <span key={index} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee

import styles from './Eyebrow.module.css'

function Eyebrow({ children, light = false, className = '' }) {
  const cls = `${styles.eyebrow} ${light ? styles.light : ''} ${className}`
  return <span className={cls}>{children}</span>
}

export default Eyebrow
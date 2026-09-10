import styles from './Bracket.module.css'

function Bracket({ children, block = false, className = '' }) {
  const cls = `${styles.bracket} ${block ? styles.block : ''} ${className}`
  return <div className={cls}>{children}</div>
}

export default Bracket
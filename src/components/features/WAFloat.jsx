import { getWhatsAppLink } from '../../utils/constants'
import styles from './WAFloat.module.css'

function WAFloat() {
  return (
    <a
      className={styles.float}
      href={getWhatsAppLink('Halo Utero Advertising, saya ingin konsultasi reklame')}
      target="_blank"
      rel="noopener"
      aria-label="Chat WhatsApp Utero Advertising"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 2C8.27 2 2 8.27 2 16c0 2.46.7 4.86 2.03 6.95L2 30l7.2-1.98A13.9 13.9 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm0 2.4c6.39 0 11.6 5.21 11.6 11.6S22.39 27.6 16 27.6c-1.72 0-3.38-.38-4.87-1.1l-.42-.22-4.27 1.17 1.17-4.15-.28-.44A11.5 11.5 0 0 1 4.4 16C4.4 9.61 9.61 4.4 16 4.4zm-4.6 4.15c-.22-.02-.46-.02-.66.1-.2.12-.53.52-.61 1.08-.2 1.08.14 2.5 1.15 3.76 1.24 1.56 3.21 3.13 5.42 3.98.75.3 1.36.47 1.86.63.62.19 1.18.16 1.61.06.47-.11 1.44-.6 1.64-1.18.2-.57.2-1.06.14-1.17-.06-.11-.21-.17-.44-.29l-1.64-.81c-.22-.1-.39-.16-.55.06l-.65.88c-.14.19-.29.21-.53.1-.24-.12-1.12-.4-2.14-1.29-.8-.7-1.34-1.56-1.5-1.82-.15-.26-.02-.4.11-.53l.44-.53c.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.93-2.19-.2-.49-.45-.48-.66-.49z" />
      </svg>
    </a>
  )
}

export default WAFloat
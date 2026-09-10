import Eyebrow from '../ui/Eyebrow'
import {
  ADDRESS,
  BRANCHES,
  EMAIL,
  PHONE,
  PHONE_MOBILE,
  WEBSITE,
  WHATSAPP_GENERAL,
} from '../../utils/constants'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="kontak" className={`section ${styles.contact}`}>
      <div className="wrap">
        <div className="section-head">
          <Eyebrow light>Hubungi Kami</Eyebrow>
          <h2 className={styles.title}>Mari Bicarakan Reklame Anda</h2>
          <p>
            Konsultasi gratis &mdash; tim kami membalas WhatsApp dalam jam kerja. Jelaskan
            kebutuhan, nanti kami bantu pilihkan solusi &amp; anggarannya.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.list}>
            <div className={styles.rowBox}>
              <h3>Kantor Pusat</h3>
              <span>{ADDRESS}</span>
              <a href={WHATSAPP_GENERAL} target="_blank" rel="noopener">
                {PHONE_MOBILE}
              </a>
            </div>
            <div className={styles.rowBox}>
              <h3>Telepon &amp; WhatsApp</h3>
              <a href={`tel:${PHONE}`}>{PHONE}</a>
              <a href={WHATSAPP_GENERAL} target="_blank" rel="noopener">
                {PHONE_MOBILE}
              </a>
            </div>
            <div className={styles.rowBox}>
              <h3>Email</h3>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className={styles.rowBox}>
              <h3>Website</h3>
              <a href={`https://${WEBSITE}`} target="_blank" rel="noopener">
                {WEBSITE}
              </a>
            </div>
          </div>

          <div className={styles.branches}>
            <h3>Jaringan Kantor Kami</h3>
            <p>Empat kota, satu standar kecepatan &amp; kualitas eksekusi.</p>
            <div className={styles.branchList}>
              {BRANCHES.map((branch) => (
                <div key={branch.name} className={styles.branch}>
                  <h4>{branch.name}</h4>
                  <p>{branch.address}</p>
                  <a href={WHATSAPP_GENERAL} target="_blank" rel="noopener">
                    {branch.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
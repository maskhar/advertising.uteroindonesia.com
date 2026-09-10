import Eyebrow from '../ui/Eyebrow'
import { process } from '../../data/process'
import styles from './Process.module.css'

function Process() {
  return (
    <section id="proses" className={`section dark ${styles.processSection}`}>
      <div className="wrap">
        <div className="section-head">
          <Eyebrow light>Cara Kami Kerja</Eyebrow>
          <h2 className={styles.title}>Enam Langkah, Satu Penanggung Jawab</h2>
          <p>
            Anda tidak perlu bolak-balik ke vendor desain, percetakan, biro jasa perizinan, dan tukang
            pasang yang berbeda-beda.
          </p>
        </div>
        <div className={styles.process}>
          {process.map((step) => (
            <div key={step.id} className={styles.step}>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
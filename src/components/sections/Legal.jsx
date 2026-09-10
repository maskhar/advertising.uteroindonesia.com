import { Fragment } from 'react'
import Eyebrow from '../ui/Eyebrow'
import Bracket from '../ui/Bracket'
import { legalColumns } from '../../data/legal'
import styles from './Legal.module.css'

function Legal() {
  return (
    <section id="legalitas" className="section">
      <div className="wrap">
        <div className="section-head">
          <Eyebrow>Legalitas Perusahaan</Eyebrow>
          <h2>Badan Usaha Resmi &amp; Berizin</h2>
          <p>
            Utero Advertising bernaung di bawah badan hukum resmi &mdash; supaya kerja sama Anda
            aman secara administrasi &amp; perpajakan.
          </p>
        </div>
        <Bracket block>
          <div className={styles.box}>
            {legalColumns.map((column, colIndex) => (
              <dl key={colIndex} className={styles.dl}>
                {column.map((row) => (
                  <Fragment key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </Fragment>
                ))}
              </dl>
            ))}
          </div>
        </Bracket>
      </div>
    </section>
  )
}

export default Legal
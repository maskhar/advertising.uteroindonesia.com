import Eyebrow from '../ui/Eyebrow'
import Marquee from '../features/Marquee'
import { clients } from '../../data/clients'

function Clients() {
  return (
    <section style={{ padding: '56px 0' }}>
      <div className="wrap" style={{ marginBottom: 24 }}>
        <Eyebrow>Dipercaya Lintas Sektor</Eyebrow>
        <h2 style={{ fontSize: '1.5rem' }}>Sebagian Klien Yang Pernah Bekerja Sama</h2>
      </div>
      <Marquee items={clients} />
    </section>
  )
}

export default Clients
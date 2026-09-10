import { useState } from 'react'

import { useScrollSpy } from './hooks/useScrollSpy'
import { useLightbox } from './hooks/useLightbox'
import { gallery } from './data/gallery'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MobileMenu from './components/features/MobileMenu'
import Lightbox from './components/features/Lightbox'
import WAFloat from './components/features/WAFloat'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Process from './components/sections/Process'
import Interior from './components/sections/Interior'
import Event from './components/sections/Event'
import WhyUs from './components/sections/WhyUs'
import Clients from './components/sections/Clients'
import Legal from './components/sections/Legal'
import CompanyProfile from './components/sections/CompanyProfile'
import Contact from './components/sections/Contact'

const SECTION_IDS = [
  'layanan',
  'galeri',
  'proses',
  'interior',
  'event',
  'kenapa',
  'kontak',
]

function App() {
  const activeSection = useScrollSpy(SECTION_IDS)
  const lightbox = useLightbox(gallery)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header activeSection={activeSection} onOpenMenu={() => setMenuOpen(true)} />
      <main>
        <div id="top">
          <img
            src="/adv amril.png"
            alt="Adv Amril"
            style={{ display: 'block', width: '100%', height: '700px', objectFit: 'cover' }}
          />
          <Hero />
        </div>
        <About />
        <Services />
        <Gallery onOpen={lightbox.open} />
        <Process />
        <Interior />
        <Event />
        <WhyUs />
        <Clients />
        <Legal />
        <CompanyProfile />
        <Contact />
      </main>
      <Footer />

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
      <Lightbox
        isOpen={lightbox.isOpen}
        item={lightbox.item}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrev={lightbox.prev}
      />
      <WAFloat />
    </>
  )
}

export default App
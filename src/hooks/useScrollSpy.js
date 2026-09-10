import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const offset = 120
        let current = ''

        for (const id of sectionIds) {
          const el = document.getElementById(id)
          if (!el) continue
          const rect = el.getBoundingClientRect()
          if (rect.top <= offset && rect.bottom > offset) {
            current = id
          }
        }

        // Fallback: pas di paling bawah, ambil section terakhir
        if (!current && sectionIds.length) {
          const lastId = sectionIds[sectionIds.length - 1]
          const lastEl = document.getElementById(lastId)
          if (lastEl && window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
            current = lastId
          }
        }

        setActiveSection(current)
        ticking = false
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeSection
}

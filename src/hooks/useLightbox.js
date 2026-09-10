import { useState, useEffect, useCallback } from 'react'

export function useLightbox(items) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const open = useCallback((index) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % items.length)
  }, [items.length])

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, next, prev])

  const item = items[currentIndex] || null

  return { isOpen, open, close, next, prev, item }
}

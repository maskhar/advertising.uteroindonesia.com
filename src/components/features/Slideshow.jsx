import { useEffect, useState } from 'react'

import styles from './Slideshow.module.css'

const SLIDES = ['/adv amril.webp', '/adv amril 2.webp', '/adv amril 3.webp', '/adv amril 4.webp']

function Slideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.slider}>
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Adv Amril ${i + 1}`}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
        />
      ))}
    </div>
  )
}

export default Slideshow
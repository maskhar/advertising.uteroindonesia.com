import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/main.css'
import './analytics.js'
import App from './App.jsx'

function enableIframeWheelScroll() {
  if (window.self === window.top) return

  window.addEventListener(
    'wheel',
    (event) => {
      if (event.ctrlKey || event.shiftKey) return

      event.preventDefault()

      const unit =
        event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1

      window.scrollBy({
        top: event.deltaY * unit,
        left: event.deltaX * unit,
        behavior: 'instant',
      })
    },
    { passive: false },
  )
}

enableIframeWheelScroll()

const root = document.getElementById('root')
const app = <StrictMode><App /></StrictMode>


if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

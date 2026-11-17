import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// The page ships with prerendered HTML for crawlers (see scripts/prerender.mjs),
// hidden from JS-enabled visitors until React has replaced it. Reveal once mounted.
requestAnimationFrame(() => {
  document.documentElement.classList.remove('prerender-boot')
})

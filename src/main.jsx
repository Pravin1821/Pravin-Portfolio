import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import skLogo from './assets/sk.png'

// Ensure the favicon/logo uses src/assets/sk.png at runtime
const ensureFavicon = () => {
  const link = document.querySelector("link[rel='icon']") || document.createElement('link')
  link.setAttribute('rel', 'icon')
  link.setAttribute('href', skLogo)
  if (!link.parentNode) {
    document.head.appendChild(link)
  }
}
ensureFavicon()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

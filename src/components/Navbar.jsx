import React from 'react'
import { translations } from '../translations'

export default function Navbar({ lang, toggleLang, setView }) {
  const t = translations[lang].nav

  const handleLinkClick = (e, anchor) => {
    e.preventDefault()
    setView({ name: 'home', params: {} })
    setTimeout(() => {
      const el = document.querySelector(anchor)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  return (
    <nav>
      <a className="logo" href="#" onClick={(e) => handleLinkClick(e, '#page')}>
        {t.logo}
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setView({ name: 'orientation', params: {} }); window.scrollTo({ top: 0, behavior: 'instant' }); }}>
              {t.orientation}
            </a>
          </li>
          <li>
            <a href="#institutions" onClick={(e) => handleLinkClick(e, '#institutions')}>
              {t.universities}
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')}>
              {t.life}
            </a>
          </li>
          <li>
            <a href="#expertise" onClick={(e) => handleLinkClick(e, '#expertise')}>
              {t.expertise}
            </a>
          </li>
        </ul>
        <button className="lang-toggle" onClick={toggleLang}>
          عربي / EN
        </button>
        <a href="https://wa.me/213658950047" target="_blank" rel="noopener noreferrer" className="cta-nav">
          {t.cta}
        </a>
      </div>
    </nav>
  )
}

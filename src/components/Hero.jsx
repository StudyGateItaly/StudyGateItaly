import React from 'react'
import { translations } from '../translations'

export default function Hero({ lang, setView }) {
  const t = translations[lang].hero

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          {t.title}
          <span>{t.titleSpan}</span>
        </h1>
        <p>{t.desc}</p>
        <div className="hero-btns">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setView({ name: 'orientation', params: {} }); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="btn-primary"
          >
            {t.cta1}
          </a>
          <a href="#institutions" className="btn-secondary">
            {t.cta2}
          </a>
        </div>
      </div>
    </div>
  )
}

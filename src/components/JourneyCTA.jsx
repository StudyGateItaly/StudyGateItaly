import React from 'react'
import { translations } from '../translations'

export default function JourneyCTA({ lang }) {
  const t = translations[lang].journey
  const contactUrl = 'https://wa.me/213658950047'

  return (
    <div className="journey-section">
      <div className="journey-inner">
        <h2>{t.title}</h2>
        <p>{t.desc}</p>
        <div className="journey-btns">
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy"
          >
            {t.cta1}
          </a>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terracotta"
          >
            {t.cta2}
          </a>
        </div>
      </div>
    </div>
  )
}

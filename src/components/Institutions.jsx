import React from 'react'
import { translations } from '../translations'

export default function Institutions({ lang, setView }) {
  const t = translations[lang].institutions

  const handleCardClick = (e, slug) => {
    e.preventDefault()
    setView({ name: 'university', params: { slug } })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="section" id="institutions">
      <p className="eyebrow">{t.eyebrow}</p>
      <h2 className="section-title">{t.title}</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3.5rem', maxWidth: '650px', marginTop: '-2.5rem' }}>
        {t.desc}
      </p>
      <div className="institutions-grid">
        {t.cards.map((card, idx) => (
          <div
            className="institution-card"
            key={idx}
            onClick={(e) => handleCardClick(e, card.id)}
          >
            <img className="institution-img" src={card.img} alt={card.title} />
            <div className="institution-info">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <a
                href="#"
                onClick={(e) => handleCardClick(e, card.id)}
                className="institution-link"
              >
                {card.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

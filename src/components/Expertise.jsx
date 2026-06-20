import React from 'react'
import { translations } from '../translations'

export default function Expertise({ lang, setView }) {
  const t = translations[lang].expertise

  // Image assets for the three detailed cards
  const images = {
    visa: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    scholarship: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    housing: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80'
  }

  const handleNavigate = (e, slug) => {
    e.preventDefault()
    setView({ name: 'service', params: { slug } })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="section expertise-section" id="expertise">
      <p className="eyebrow" style={{ textAlign: 'center' }}>{t.eyebrow}</p>
      <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 1.5rem' }}>{t.title}</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '650px', margin: '0 auto 4rem' }}>
        {t.desc}
      </p>

      <div className="expertise-stack">
        {/* VISA CARD */}
        <div className="expertise-card" id="visa">
          <div className="expertise-card-content">
            <h3>{t.visa.title}</h3>
            <p>{t.visa.desc}</p>
            <ul className="expertise-card-bullets">
              {t.visa.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            <a
              href="#"
              onClick={(e) => handleNavigate(e, 'visa')}
              className="btn-terracotta"
            >
              {t.visa.btn}
            </a>
          </div>
          <div className="expertise-card-img">
            <img src={images.visa} alt="Visa Support process" />
          </div>
        </div>

        {/* SCHOLARSHIP CARD */}
        <div className="expertise-card" id="scholarship">
          <div className="expertise-card-content">
            <h3>{t.scholarship.title}</h3>
            <p>{t.scholarship.desc}</p>
            <ul className="expertise-card-bullets">
              {t.scholarship.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            <a
              href="#"
              onClick={(e) => handleNavigate(e, 'scholarship')}
              className="btn-terracotta"
            >
              {t.scholarship.btn}
            </a>
          </div>
          <div className="expertise-card-img">
            <img src={images.scholarship} alt="Scholarship Guidance" />
          </div>
        </div>

        {/* HOUSING CARD */}
        <div className="expertise-card" id="housing">
          <div className="expertise-card-content">
            <h3>{t.housing.title}</h3>
            <p>{t.housing.desc}</p>
            <ul className="expertise-card-bullets">
              {t.housing.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            <a
              href="#"
              onClick={(e) => handleNavigate(e, 'housing')}
              className="btn-terracotta"
            >
              {t.housing.btn}
            </a>
          </div>
          <div className="expertise-card-img">
            <img src={images.housing} alt="Housing Assistance in Italy" />
          </div>
        </div>
      </div>
    </div>
  )
}

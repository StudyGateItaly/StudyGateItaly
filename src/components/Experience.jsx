import React from 'react'
import { translations } from '../translations'

export default function Experience({ lang }) {
  const t = translations[lang].experience

  return (
    <div className="section" id="experience">
      <p className="eyebrow" style={{ textAlign: 'center' }}>
        {t.eyebrow}
      </p>
      <div className="experience-quote">
        {t.quote}
      </div>
      <div className="experience-grid">
        <div className="experience-gallery">
          <img src={t.img1} alt="Italian Culture and Museum Art" />
          <img src={t.img2} alt="Students sitting at Italian Cafe" />
        </div>
        <div className="experience-text">
          <h2>{t.title}</h2>
          <p>{t.desc}</p>
          <ul className="experience-list-items">
            {t.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

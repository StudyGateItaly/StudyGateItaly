import React from 'react'
import { translations } from '../translations'

export default function SubNavbar({ lang, setView }) {
  const t = translations[lang].expertise

  const handleNavigate = (e, slug) => {
    e.preventDefault()
    setView({ name: 'service', params: { slug } })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="sub-navbar">
      <ul className="sub-navbar-links">
        <li>
          <a href="#" onClick={(e) => handleNavigate(e, 'visa')}>{t.visa.title}</a>
          <ul className="sub-navbar-dropdown">
            {t.visa.bullets.map((bullet, idx) => (
              <li key={idx}>
                <a href="#" onClick={(e) => handleNavigate(e, 'visa')}>{bullet}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="#" onClick={(e) => handleNavigate(e, 'scholarship')}>{t.scholarship.title}</a>
          <ul className="sub-navbar-dropdown">
            {t.scholarship.bullets.map((bullet, idx) => (
              <li key={idx}>
                <a href="#" onClick={(e) => handleNavigate(e, 'scholarship')}>{bullet}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="#" onClick={(e) => handleNavigate(e, 'housing')}>{t.housing.title}</a>
          <ul className="sub-navbar-dropdown">
            {t.housing.bullets.map((bullet, idx) => (
              <li key={idx}>
                <a href="#" onClick={(e) => handleNavigate(e, 'housing')}>{bullet}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}

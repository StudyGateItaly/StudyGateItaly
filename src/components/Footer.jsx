import React from 'react'
import { translations } from '../translations'

export default function Footer({ lang }) {
  const t = translations[lang].footer

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h3>{translations[lang].nav.logo}</h3>
          <p>{t.desc}</p>
        </div>
        <div className="footer-col">
          <h4>{t.resourcesTitle}</h4>
          <ul>
            {t.resources.map((link, idx) => (
              <li key={idx}>
                <a href="#institutions">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.companyTitle}</h4>
          <ul>
            {t.company.map((link, idx) => (
              <li key={idx}>
                <a href="#expertise">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.legalTitle}</h4>
          <ul>
            {t.legal.map((link, idx) => (
              <li key={idx}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>{t.copyright}</div>
        <div>
          <a href="mailto:mohamedgadda2@gmail.com">mohamedgadda2@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}

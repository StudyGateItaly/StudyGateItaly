import React from 'react'
import { translations } from '../translations'
import AdBanner from '../components/AdBanner'
import ContactForm from '../components/ContactForm'

export default function ServiceDetail({ slug, lang, onBack }) {
  const t = translations[lang].serviceDetail[slug]
  const navT = translations[lang].nav
  const contactUrl = 'https://wa.me/213658950047'

  if (!t) return <div>Service guide not found.</div>

  // Localized headers for templates
  const templateLabel = {
    en: "Italian Message Template to Landlords (Copy & Paste)",
    ar: "نموذج رسالة للمؤجر باللغة الإيطالية (نسخ ولصق)"
  }

  return (
    <div className="subpage-container">
      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--terracotta)',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {navT.backHome}
        </button>
      </div>

      <header className="subpage-header">
        <h1>{t.title}</h1>
      </header>

      <AdBanner slot="horizontal" />

      <div className="subpage-body">
        <div className="subpage-section">
          <p className="subpage-intro">{t.intro}</p>
        </div>

        <div className="subpage-section">
          <h2>{t.section1Title}</h2>
          <ul className="guide-checklist">
            {t.checklist.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Render Landlord Template for Housing specifically */}
        {slug === 'housing' && t.template && (
          <div className="subpage-section">
            <h2>{templateLabel[lang]}</h2>
            <div className="guide-template-block">
              {t.template}
            </div>
          </div>
        )}

        <div className="subpage-section">
          <h2>{t.section2Title || (lang === 'ar' ? 'خطوات التقديم والبحث' : 'Application Steps')}</h2>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {t.steps.map((step, idx) => (
              <li key={idx} style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terracotta"
            style={{ display: 'inline-block' }}
          >
            {t.ctaText}
          </a>
        </div>

        <ContactForm lang={lang} />

        <div style={{ marginTop: '3rem' }}>
          <AdBanner slot="horizontal" />
        </div>
      </div>
    </div>
  )
}

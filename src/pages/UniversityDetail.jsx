import React from 'react'
import { translations } from '../translations'

export default function UniversityDetail({ slug, lang, onBack }) {
  const t = translations[lang].universityDetail[slug]
  const navT = translations[lang].nav
  const contactUrl = 'https://wa.me/213658950047'

  if (!t) return <div>University not found.</div>

  // Localized headers for metadata
  const metaLabels = {
    en: {
      tuition: "Annual Tuition",
      requirements: "General Requirements",
      living: "Average Cost of Living"
    },
    ar: {
      tuition: "الرسوم الدراسية السنوية",
      requirements: "شروط القبول العامة",
      living: "متوسط تكلفة المعيشة"
    }
  }

  // Localized table headers
  const tableHeaders = {
    en: { name: "Course Name", level: "Academic Level", notes: "Admission Notes" },
    ar: { name: "اسم البرنامج", level: "المستوى الأكاديمي", notes: "ملاحظات القبول" }
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
        <p className="tagline">{t.tagline}</p>
      </header>

      <div className="subpage-body">
        <div className="subpage-section">
          <p className="subpage-intro">{t.history}</p>
        </div>

        <div className="uni-meta-grid">
          <div className="uni-meta-item">
            <h4>{metaLabels[lang].tuition}</h4>
            <p>{t.tuition}</p>
          </div>
          <div className="uni-meta-item">
            <h4>{metaLabels[lang].requirements}</h4>
            <p>{t.requirements}</p>
          </div>
          <div className="uni-meta-item">
            <h4>{metaLabels[lang].living}</h4>
            <p>{t.livingCost}</p>
          </div>
        </div>

        <div className="subpage-section">
          <h2>{t.coursesTitle}</h2>
          <div className="courses-table-container">
            <table className="courses-table">
              <thead>
                <tr>
                  <th>{tableHeaders[lang].name}</th>
                  <th>{tableHeaders[lang].level}</th>
                  <th>{tableHeaders[lang].notes}</th>
                </tr>
              </thead>
              <tbody>
                {t.courses.map((course, idx) => (
                  <tr key={idx}>
                    <td><strong>{course.name}</strong></td>
                    <td>{course.level}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{course.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
      </div>
    </div>
  )
}

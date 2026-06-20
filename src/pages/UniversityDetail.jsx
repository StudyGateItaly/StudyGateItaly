import React from 'react'
import { universitiesData } from '../data/universities'
import { translations } from '../translations'
import AdBanner from '../components/AdBanner'

export default function UniversityDetail({ slug, lang, onBack }) {
  const uni = universitiesData.find((u) => u.id === slug)
  const navT = translations[lang].nav

  if (!uni) return <div style={{ padding: '4rem', textAlign: 'center' }}>University profile not found.</div>

  const t = uni[lang]

  // Localized headers for metadata
  const metaLabels = {
    en: {
      tuition: "Annual Tuition",
      requirements: "General Requirements",
      living: "Average Cost of Living",
      deadline: "Application Deadline"
    },
    ar: {
      tuition: "الرسوم الدراسية السنوية",
      requirements: "شروط القبول العامة",
      living: "متوسط تكلفة المعيشة",
      deadline: "آخر موعد للتقديم"
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

        <div className="uni-meta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="uni-meta-item" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h4 style={{ color: 'var(--terracotta)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '700' }}>{metaLabels[lang].tuition}</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--navy)' }}>{t.tuition}</p>
          </div>
          <div className="uni-meta-item" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h4 style={{ color: 'var(--terracotta)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '700' }}>{metaLabels[lang].requirements}</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--navy)' }}>{t.requirements}</p>
          </div>
          <div className="uni-meta-item" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h4 style={{ color: 'var(--terracotta)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '700' }}>{metaLabels[lang].living}</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--navy)' }}>{t.livingCost}</p>
          </div>
          <div className="uni-meta-item" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h4 style={{ color: 'var(--terracotta)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '700' }}>{metaLabels[lang].deadline}</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--navy)', fontWeight: '600' }}>{t.deadline}</p>
          </div>
        </div>

        <AdBanner slot="horizontal" />

        <div className="subpage-section" style={{ marginTop: '3rem' }}>
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

        <div style={{ marginTop: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <a
            href={uni.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terracotta"
            style={{ display: 'inline-block', padding: '1rem 2.5rem', fontSize: '1rem' }}
          >
            {t.ctaText}
          </a>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {lang === 'ar' ? 'سيفتح هذا الرابط الموقع الرسمي للجامعة مباشرة' : 'This link opens the official university application portal directly.'}
          </span>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <AdBanner slot="horizontal" />
        </div>
      </div>
    </div>
  )
}

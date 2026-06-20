import React, { useState } from 'react'
import { translations } from '../translations'
import { universitiesData } from '../data/universities'

export default function Institutions({ lang, setView }) {
  const t = translations[lang].institutions
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all') // 'all', 'uni', 'poly'
  const [expandedUniId, setExpandedUniId] = useState(null)

  const handleCardClick = (e, id) => {
    e.preventDefault()
    const alreadyExpanded = expandedUniId === id
    setExpandedUniId(alreadyExpanded ? null : id)

    // Smooth scroll the card to the top of the viewport
    if (!alreadyExpanded) {
      setTimeout(() => {
        const cardElement = document.getElementById(`uni-card-${id}`)
        if (cardElement) {
          cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  // Localized headers for metadata inside expanded view
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

  // Filter logic
  const filteredUniversities = universitiesData.filter((uni) => {
    const uniInfo = uni[lang]
    const matchesSearch =
      uniInfo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uniInfo.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uniInfo.history.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uniInfo.courses.some(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const isPoly = uni.id === 'polimi' || uni.id === 'polito'
    const matchesType =
      filterType === 'all' ||
      (filterType === 'poly' && isPoly) ||
      (filterType === 'uni' && !isPoly)

    return matchesSearch && matchesType
  })

  return (
    <div className="section" id="institutions">
      <p className="eyebrow" style={{ textAlign: 'center' }}>{t.eyebrow}</p>
      <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 1rem' }}>{t.title}</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 3rem', textAlign: 'center' }}>
        {t.desc}
      </p>

      {/* Search & Filter Controls */}
      <div className="search-filter-container">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="search-clear-btn">
              ✕
            </button>
          )}
        </div>

        <div className="filter-tabs">
          <button
            onClick={() => setFilterType('all')}
            className={`filter-tab ${filterType === 'all' ? 'active' : ''}`}
          >
            {t.searchFilterAll}
          </button>
          <button
            onClick={() => setFilterType('uni')}
            className={`filter-tab ${filterType === 'uni' ? 'active' : ''}`}
          >
            {t.searchFilterUni}
          </button>
          <button
            onClick={() => setFilterType('poly')}
            className={`filter-tab ${filterType === 'poly' ? 'active' : ''}`}
          >
            {t.searchFilterPoly}
          </button>
        </div>
      </div>

      {/* Grid of Results */}
      {filteredUniversities.length > 0 ? (
        <div className="institutions-grid">
          {filteredUniversities.map((uni) => {
            const uniInfo = uni[lang]
            const isExpanded = expandedUniId === uni.id
            return (
              <div
                className={`institution-card ${isExpanded ? 'expanded' : ''}`}
                key={uni.id}
                id={`uni-card-${uni.id}`}
                onClick={(e) => handleCardClick(e, uni.id)}
              >
                <img className="institution-img" src={uni.img} alt={uniInfo.title} />
                <div className="institution-info">
                  <h3>{uniInfo.title}</h3>
                  <p className="institution-tagline" style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
                    {uniInfo.tagline}
                  </p>
                  
                  {/* Keep short history description */}
                  <p>{uniInfo.history.substring(0, 115)}...</p>
                  
                  {!isExpanded && (
                    <div className="uni-card-meta" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                      <div>📅 <strong>Deadline:</strong> {uniInfo.deadline}</div>
                      <div>💰 <strong>Tuition:</strong> {uniInfo.tuition.split('(')[0]}</div>
                    </div>
                  )}

                  {!isExpanded && (
                    <a
                      href="#"
                      onClick={(e) => handleCardClick(e, uni.id)}
                      className="institution-link"
                    >
                      {t.cardCta}
                    </a>
                  )}

                  {/* Expanded detail section inside the card */}
                  {isExpanded && (
                    <div
                      className="institution-expanded-content"
                      onClick={(e) => e.stopPropagation()} // Prevent card collapse when clicking inside details
                      style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}
                    >
                      {/* Full History */}
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        {uniInfo.history}
                      </p>

                      {/* 2x2 Metadata Grid */}
                      <div className="uni-meta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div className="uni-meta-item" style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                          <h4 style={{ color: 'var(--terracotta)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: '700' }}>{metaLabels[lang].tuition}</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--navy)', margin: 0, lineHeight: '1.5' }}>{uniInfo.tuition}</p>
                        </div>
                        <div className="uni-meta-item" style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                          <h4 style={{ color: 'var(--terracotta)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: '700' }}>{metaLabels[lang].requirements}</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--navy)', margin: 0, lineHeight: '1.5' }}>{uniInfo.requirements}</p>
                        </div>
                        <div className="uni-meta-item" style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                          <h4 style={{ color: 'var(--terracotta)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: '700' }}>{metaLabels[lang].living}</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--navy)', margin: 0, lineHeight: '1.5' }}>{uniInfo.livingCost}</p>
                        </div>
                        <div className="uni-meta-item" style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                          <h4 style={{ color: 'var(--terracotta)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: '700' }}>{metaLabels[lang].deadline}</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--navy)', margin: 0, fontWeight: '600', lineHeight: '1.5' }}>{uniInfo.deadline}</p>
                        </div>
                      </div>

                      {/* Course Listing */}
                      <div className="uni-courses-section" style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '1rem' }}>{uniInfo.coursesTitle}</h4>
                        <div className="courses-table-container">
                          <table className="courses-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                                <th style={{ textAlign: lang === 'ar' ? 'right' : 'left', padding: '0.5rem', fontSize: '0.85rem' }}>{tableHeaders[lang].name}</th>
                                <th style={{ textAlign: lang === 'ar' ? 'right' : 'left', padding: '0.5rem', fontSize: '0.85rem' }}>{tableHeaders[lang].level}</th>
                                <th style={{ textAlign: lang === 'ar' ? 'right' : 'left', padding: '0.5rem', fontSize: '0.85rem' }}>{tableHeaders[lang].notes}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {uniInfo.courses.map((course, cIdx) => (
                                <tr key={cIdx} style={{ borderBottom: '1px solid var(--border)' }}>
                                  <td style={{ padding: '0.6rem 0.5rem', fontSize: '0.85rem' }}><strong>{course.name}</strong></td>
                                  <td style={{ padding: '0.6rem 0.5rem', fontSize: '0.85rem' }}>{course.level}</td>
                                  <td style={{ padding: '0.6rem 0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{course.notes}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Expanded CTAs */}
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <a
                          href={uni.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-terracotta"
                          style={{ display: 'inline-block', padding: '0.6rem 1.75rem', fontSize: '0.85rem' }}
                        >
                          {uniInfo.ctaText}
                        </a>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedUniId(null)
                            setTimeout(() => {
                              const cardEl = document.getElementById(`uni-card-${uni.id}`)
                              if (cardEl) cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }, 50)
                          }}
                          className="btn-secondary"
                          style={{ padding: '0.6rem 1.75rem', fontSize: '0.85rem', border: '1px solid var(--border)', background: '#FFFFFF', cursor: 'pointer', borderRadius: '4px', fontFamily: 'inherit' }}
                        >
                          {lang === 'ar' ? 'إغلاق التفاصيل ▲' : 'Close Details ▲'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="no-results" style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px dashed var(--border)', borderRadius: '8px', color: 'var(--text-muted)' }}>
          <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>🔎</span>
          <h3>{lang === 'ar' ? 'لم يتم العثور على نتائج' : 'No universities found'}</h3>
          <p>{lang === 'ar' ? 'حاول تغيير كلمات البحث أو المرشحات المستخدمة' : 'Try adjusting your search keywords or filters.'}</p>
        </div>
      )}
    </div>
  )
}

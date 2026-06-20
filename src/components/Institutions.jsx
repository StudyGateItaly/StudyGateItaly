import React, { useState } from 'react'
import { translations } from '../translations'
import { universitiesData } from '../data/universities'

export default function Institutions({ lang, setView }) {
  const t = translations[lang].institutions
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all') // 'all', 'uni', 'poly'

  const handleCardClick = (e, slug) => {
    e.preventDefault()
    setView({ name: 'university', params: { slug } })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  // Filter logic
  const filteredUniversities = universitiesData.filter((uni) => {
    const uniInfo = uni[lang]
    const matchesSearch =
      uniInfo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uniInfo.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uniInfo.history.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uniInfo.courses.some(course => course.name.toLowerCase().includes(searchQuery.toLowerCase()))

    // Type classification
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

      {/* Interactive Search & Filter Controls */}
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
          {filteredUniversities.map((uni, idx) => {
            const uniInfo = uni[lang]
            return (
              <div
                className="institution-card"
                key={uni.id}
                onClick={(e) => handleCardClick(e, uni.id)}
              >
                <img className="institution-img" src={uni.img} alt={uniInfo.title} />
                <div className="institution-info">
                  <h3>{uniInfo.title}</h3>
                  <p className="institution-tagline" style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--terracotta)', marginBottom: '0.5rem' }}>
                    {uniInfo.tagline}
                  </p>
                  <p>{uniInfo.history.substring(0, 110)}...</p>
                  
                  <div className="uni-card-meta" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <div>📅 <strong>Deadline:</strong> {uniInfo.deadline}</div>
                    <div>💰 <strong>Tuition:</strong> {uniInfo.tuition.split('(')[0]}</div>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => handleCardClick(e, uni.id)}
                    className="institution-link"
                  >
                    {t.cardCta}
                  </a>
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

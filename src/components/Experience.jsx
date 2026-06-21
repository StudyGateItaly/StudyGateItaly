import React from 'react'
import { translations } from '../translations'

export default function Experience({ lang }) {
  const t = translations[lang].experience
  const baseUrl = import.meta.env.BASE_URL || '/'

  return (
    <div className="section" id="experience">
      <p className="eyebrow" style={{ textAlign: 'center' }}>
        {t.eyebrow}
      </p>
      <div className="experience-quote">
        {t.quote}
      </div>

      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--navy)' }}>
          {t.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
          {t.desc}
        </p>
      </div>

      <div className="stories-grid">
        {t.stories && t.stories.map((story, idx) => (
          <div className="story-card" key={idx}>
            <div className="story-img-wrapper">
              <span className="story-tag">{story.tag}</span>
              <img 
                src={`${baseUrl}${story.img}`} 
                alt={story.author} 
                className="story-img" 
              />
            </div>
            <div className="story-content">
              <p className="story-quote">"{story.quote}"</p>
              <span className="story-author">— {story.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


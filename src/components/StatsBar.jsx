import React from 'react'
import { translations } from '../translations'

export default function StatsBar({ lang }) {
  const stats = translations[lang].stats

  return (
    <div className="stats-bar">
      {stats.map((stat, idx) => (
        <div className="stat" key={idx}>
          <div className="n">{stat.num}</div>
          <div className="l">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

import React from 'react'

export default function AdBanner({ slot = 'horizontal' }) {
  return (
    <div className={`ad-container ad-${slot}`}>
      <div className="ad-label">Advertisement</div>
      <div className="ad-content-placeholder">
        <span className="ad-icon">📢</span>
        <span className="ad-text">Google AdSense Placeholder ({slot})</span>
      </div>
    </div>
  )
}

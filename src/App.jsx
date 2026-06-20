import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SubNavbar from './components/SubNavbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Institutions from './components/Institutions'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import JourneyCTA from './components/JourneyCTA'
import Footer from './components/Footer'

// Sub-pages
import UniversityDetail from './pages/UniversityDetail'
import ServiceDetail from './pages/ServiceDetail'

export default function App() {
  const [lang, setLang] = useState('en')
  const [view, setView] = useState({ name: 'home', params: {} })

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'))
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <div id="page" lang={lang} style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <Navbar lang={lang} toggleLang={toggleLang} setView={setView} />
      
      {view.name === 'home' && (
        <>
          <SubNavbar lang={lang} setView={setView} />
          <Hero lang={lang} />
          <StatsBar lang={lang} />
          <Institutions lang={lang} setView={setView} />
          <Expertise lang={lang} setView={setView} />
          <Experience lang={lang} />
          <JourneyCTA lang={lang} />
        </>
      )}

      {view.name === 'university' && (
        <UniversityDetail
          slug={view.params.slug}
          lang={lang}
          onBack={() => {
            setView({ name: 'home', params: {} })
            window.scrollTo({ top: 0, behavior: 'instant' })
          }}
        />
      )}

      {view.name === 'service' && (
        <ServiceDetail
          slug={view.params.slug}
          lang={lang}
          onBack={() => {
            setView({ name: 'home', params: {} })
            window.scrollTo({ top: 0, behavior: 'instant' })
          }}
        />
      )}

      <Footer lang={lang} />
    </div>
  )
}

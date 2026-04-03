import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const languages = [
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'zh-TW', label: '繁體', flag: '🇹🇼' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'pt', label: 'PT', flag: '🇵🇹' },
]

const industryRoutes = [
  { key: 'legal', path: '/industries/legal', icon: '⚖️' },
  { key: 'manufacturing', path: '/industries/manufacturing', icon: '🏭' },
  { key: 'realEstate', path: '/industries/real-estate', icon: '🏠' },
  { key: 'content', path: '/industries/content', icon: '✍️' },
  { key: 'software', path: '/industries/software', icon: '💻' },
  { key: 'accounting', path: '/industries/accounting', icon: '📊' },
]

function LanguagePicker() {
  const { i18n } = useTranslation()
  const current = languages.find(l => l.code === i18n.language) || languages[0]

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    const url = new URL(window.location)
    url.searchParams.set('lang', code)
    window.history.replaceState({}, '', url)
  }

  return (
    <div className="lang-picker">
      <button className="lang-picker-btn">
        🌐 {current.flag} {current.label}
      </button>
      <div className="lang-dropdown">
        {languages.map(l => (
          <button
            key={l.code}
            className={`lang-option ${l.code === i18n.language ? 'active' : ''}`}
            onClick={() => changeLanguage(l.code)}
          >
            {l.flag} {l.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = useCallback((sectionId) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname, navigate])

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          people<span className="logo-accent">free</span>.work
        </Link>
        <div className="nav-links">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('team') }}>{t('nav.team')}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('perks') }}>{t('nav.whyUs')}</a>
          <div className="nav-dropdown">
            <button className="nav-dropdown-btn">{t('industries.navTitle', 'Industries')} ▾</button>
            <div className="nav-dropdown-menu">
              {industryRoutes.map(r => (
                <Link key={r.key} to={r.path} className="nav-dropdown-item">
                  <span className="nav-dropdown-icon">{r.icon}</span>
                  {t(`industries.${r.key}.heroTitle`)}
                </Link>
              ))}
            </div>
          </div>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pricing') }}>{t('nav.pricing')}</a>
        </div>
        <div className="nav-right">
          <LanguagePicker />
          <a href="mailto:hello@peoplefree.work" className="nav-cta">{t('nav.hireTalent')}</a>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('team') }}>{t('nav.team')}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('perks') }}>{t('nav.whyUs')}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pricing') }}>{t('nav.pricing')}</a>
          <div className="mobile-menu-section">
            <div className="mobile-menu-label">{t('industries.navTitle', 'Industries')}</div>
            {industryRoutes.map(r => (
              <Link key={r.key} to={r.path} className="mobile-menu-industry" onClick={() => setMobileMenuOpen(false)}>
                {r.icon} {t(`industries.${r.key}.heroTitle`)}
              </Link>
            ))}
          </div>
          <a href="mailto:hello@peoplefree.work" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center' }}>
            {t('nav.hireTalent')}
          </a>
        </div>
      )}
    </nav>
  )
}

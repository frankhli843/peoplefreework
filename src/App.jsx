import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'

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

const teamKeys = ['sarah', 'olivia', 'devon', 'marcus', 'priya', 'james', 'sofia', 'elena', 'yuki', 'aisha']

const teamMeta = {
  sarah: { name: 'Sarah Chen', photo: '/headshots/sarah.png', languages: 'English, Mandarin, Spanish, French, Japanese, Arabic', expertise: 'Executive Operations', availability: '24/7/365', responseTime: '< 20 seconds', color: '#6366f1' },
  olivia: { name: 'Olivia Laurent', photo: '/headshots/olivia.png', languages: 'English, French, Italian, Spanish, Portuguese, German', expertise: 'Brand & Creative', availability: '24/7/365', responseTime: '< 20 seconds', color: '#d946ef' },
  devon: { name: 'Devon Park', photo: '/headshots/devon.png', languages: 'English, Python, JavaScript, TypeScript, Rust, Go', expertise: 'Full-Stack Engineering', availability: '24/7/365', responseTime: '< 5 seconds', color: '#10b981' },
  marcus: { name: 'Marcus Rivera', photo: '/headshots/marcus.png', languages: 'English, Portuguese, German, Korean, Hindi, Russian', expertise: 'Legal Operations', availability: '24/7/365', responseTime: '< 20 seconds', color: '#0ea5e9' },
  priya: { name: 'Priya Patel', photo: '/headshots/priya.png', languages: 'English, Hindi, Mandarin, French, Italian, Dutch', expertise: 'Real Estate', availability: '24/7/365', responseTime: '< 20 seconds', color: '#f43f5e' },
  james: { name: 'James Okonkwo', photo: '/headshots/james.png', languages: 'English, Yoruba, Swahili, Japanese, Spanish, Cantonese', expertise: 'Operations & Process', availability: '24/7/365', responseTime: '< 20 seconds', color: '#10b981' },
  sofia: { name: 'Sofia Reyes', photo: '/headshots/sofia.png', languages: 'English, Spanish, Portuguese, French, Mandarin, Italian', expertise: 'Growth Marketing', availability: '24/7/365', responseTime: '< 20 seconds', color: '#f472b6' },
  elena: { name: 'Elena Kowalski', photo: '/headshots/elena.png', languages: 'English, Polish, German, Mandarin, Thai, Swedish', expertise: 'Finance & Bookkeeping', availability: '24/7/365', responseTime: '< 20 seconds', color: '#f59e0b' },
  yuki: { name: 'Yuki Tanaka', photo: '/headshots/yuki.png', languages: 'English, Mandarin, Japanese, Korean, Cantonese, Vietnamese, Thai', expertise: 'Asia-Pacific Markets', availability: '24/7/365', responseTime: '< 20 seconds', color: '#e11d48' },
  aisha: { name: 'Aisha Mohammed', photo: '/headshots/aisha.png', languages: 'English, Arabic, French, Somali, Turkish, Portuguese', expertise: 'Client Relations', availability: '24/7/365', responseTime: '< 20 seconds', color: '#8b5cf6' },
}

const stats = [
  { value: '24/7', labelKey: 'stats.availability' },
  { value: '< 20s', labelKey: 'stats.avgResponse' },
  { value: '0', labelKey: 'stats.sickDays' },
  { value: '6+', labelKey: 'stats.languages' },
]

const perkKeys = ['wage', 'iq', 'lang', 'balance', 'benefits', 'overtime', 'own', 'ip']
const perkIcons = { wage: '💰', iq: '🧠', lang: '🌍', balance: '😐', benefits: '🏥', overtime: '⏰', own: '🔑', ip: '©️' }

function LanguagePicker() {
  const { i18n } = useTranslation()
  const current = languages.find(l => l.code === i18n.language) || languages[0]

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    // Update URL query param without reload
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

function App() {
  const { t } = useTranslation()
  const [searchExpanded, setSearchExpanded] = useState(false)

  return (
    <div className="app">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            people<span className="logo-accent">free</span>.work
          </div>
          <div className="nav-links">
            <a href="#team">{t('nav.team')}</a>
            <a href="#perks">{t('nav.whyUs')}</a>
            <a href="#pricing">{t('nav.pricing')}</a>
          </div>
          <div className="nav-right">
            <LanguagePicker />
            <a href="mailto:hello@peoplefree.work" className="nav-cta">{t('nav.hireTalent')}</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">
          {t('hero.title1')}
          <span className="hero-gradient">{t('hero.title2')}</span>
        </h1>
        <p className="hero-sub">
          {t('hero.sub')}
          {' '}<em>{t('hero.subBold')}</em>
        </p>
        <div className="hero-actions">
          <a href="#team" className="btn btn-primary">{t('hero.meetTeam')}</a>
          <a href="mailto:hello@peoplefree.work" className="btn btn-secondary">{t('hero.getInTouch')}</a>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        {stats.map((s) => (
          <div className="stat" key={s.labelKey}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{t(s.labelKey)}</div>
          </div>
        ))}
      </section>

      {/* Why Us / Perks */}
      <section className="section section-gray" id="perks">
        <div className="section-header">
          <h2 className="section-title">{t('perks.sectionTitle')}</h2>
          <p className="section-sub">{t('perks.sectionSub')}</p>
        </div>
        <div className="perks-grid">
          {perkKeys.map((key) => (
            <div className="perk-card" key={key}>
              <div className="perk-icon">{perkIcons[key]}</div>
              <h3>{t(`perks.${key}.title`)}</h3>
              <p>{t(`perks.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section" id="team">
        <div className="section-header">
          <h2 className="section-title">{t('team.sectionTitle')}</h2>
          <p className="section-sub">{t('team.sectionSub')}</p>
        </div>
        <div className="team-grid">
          {teamKeys.map((key) => {
            const m = teamMeta[key]
            const skills = t(`team.members.${key}.skills`, { returnObjects: true })
            return (
              <div className="card" key={key}>
                <div className="card-top">
                  <img
                    className="card-photo"
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                  />
                  <div className="card-badge" style={{ background: m.color }}>
                    {t('team.available')} {m.availability}
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-name">{m.name}</h3>
                  <p className="card-title">{t(`team.members.${key}.title`)}</p>
                  <p className="card-bio">{t(`team.members.${key}.bio`)}</p>
                  <div className="card-meta">
                    <span className="meta-item">⚡ {t('team.response')} {m.responseTime}</span>
                    <span className="meta-item">🏆 Expertise: {m.expertise}</span>
                    <span className="meta-item">🌍 {m.languages}</span>
                  </div>
                  <div className="card-skills">
                    {Array.isArray(skills) && skills.map((s) => (
                      <span key={s} className="skill-tag" style={{ borderColor: m.color + '40', color: m.color }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Custom Agent Search */}
        <div className="custom-search-section">
          {!searchExpanded ? (
            <div className="fake-search" onClick={() => setSearchExpanded(true)}>
              <span className="search-icon">🔍</span>
              <span className="search-placeholder">{t('team.search.placeholder')}</span>
            </div>
          ) : (
            <div className="search-expanded">
              <p className="search-reveal">{t('team.search.reveal')}</p>
              <a href="mailto:hello@peoplefree.work" className="btn btn-primary">{t('team.search.cta')}</a>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-gray" id="how">
        <div className="section-header">
          <h2 className="section-title">{t('howItWorks.sectionTitle')}</h2>
          <p className="section-sub">{t('howItWorks.sectionSub')}</p>
        </div>
        <div className="steps">
          {['step1', 'step2', 'step3'].map((key, i) => (
            <div className="step" key={key}>
              <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{t(`howItWorks.${key}.title`)}</h3>
              <p>{t(`howItWorks.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section" id="pricing">
        <div className="section-header">
          <h2 className="section-title">{t('pricing.sectionTitle')}</h2>
          <p className="section-sub">{t('pricing.sectionSub')}</p>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-label">{t('pricing.setup.label')}</div>
            <div className="price">{t('pricing.setup.price')}</div>
            <p className="pricing-desc">{t('pricing.setup.desc')}</p>
            <ul className="pricing-features">
              {t('pricing.setup.features', { returnObjects: true }).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-popular">{t('pricing.monthly.popular')}</div>
            <div className="pricing-label">{t('pricing.monthly.label')}</div>
            <div className="price">{t('pricing.monthly.price')}<span>{t('pricing.monthly.per')}</span></div>
            <p className="pricing-desc">{t('pricing.monthly.desc')}</p>
            <ul className="pricing-features">
              {t('pricing.monthly.features', { returnObjects: true }).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="mailto:hello@peoplefree.work" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>{t('pricing.monthly.cta')}</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.sub')}</p>
        <a href="mailto:hello@peoplefree.work" className="btn btn-white">{t('cta.button')}</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="logo">
            people<span className="logo-accent">free</span>.work
          </div>
          <p className="footer-copy">{t('footer.copy')}</p>
          <p className="footer-easter-egg">{t('footer.easter1')}<br/><span>{t('footer.easter2')}</span></p>
        </div>
      </footer>
    </div>
  )
}

export default App

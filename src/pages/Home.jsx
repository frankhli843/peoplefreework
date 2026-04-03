import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

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

const professionalExamples = [
  { key: 'emailMgmt', icon: '📧' },
  { key: 'voiceBilling', icon: '🎙️' },
  { key: 'legalResearch', icon: '⚖️' },
  { key: 'dailyBriefings', icon: '📊' },
  { key: 'contentWriting', icon: '✍️' },
  { key: 'corpTax', icon: '🏦' },
  { key: 'codeReview', icon: '💻' },
  { key: 'hourTracking', icon: '⏱️' },
  { key: 'infraMonitor', icon: '🖥️' },
  { key: 'docProcessing', icon: '📄' },
]

const personalExamples = [
  { key: 'morningBriefings', icon: '🌅' },
  { key: 'familyHealth', icon: '❤️' },
  { key: 'financialMonitor', icon: '💰' },
  { key: 'smartShopping', icon: '🛒' },
  { key: 'familyCoord', icon: '👨‍👩‍👧‍👦' },
  { key: 'kidsEducation', icon: '📚' },
  { key: 'storybooks', icon: '📖' },
  { key: 'petCare', icon: '🐱' },
  { key: 'travelPlan', icon: '✈️' },
  { key: 'smartReminders', icon: '⏰' },
]

export default function Home() {
  const { t } = useTranslation()
  const [searchTopExpanded, setSearchTopExpanded] = useState(false)
  const [searchBottomExpanded, setSearchBottomExpanded] = useState(false)
  const [showAllTeam, setShowAllTeam] = useState(false)
  const [examplesTab, setExamplesTab] = useState('professional')

  const searchMailto = `mailto:hello@peoplefree.work?subject=${encodeURIComponent(t('team.search.emailSubject'))}&body=${encodeURIComponent(t('team.search.emailBody'))}`

  return (
    <>
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
          <button className="btn btn-primary" onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}>{t('hero.meetTeam')}</button>
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

      {/* Real Examples */}
      <section className="section examples-section" id="examples">
        <div className="section-header">
          <h2 className="section-title">{t('examples.sectionTitle')}</h2>
          <p className="section-sub">{t('examples.sectionSub')}</p>
        </div>
        <div className="examples-tabs">
          <button
            className={`examples-tab ${examplesTab === 'professional' ? 'active' : ''}`}
            onClick={() => setExamplesTab('professional')}
          >
            {t('examples.professional.title')}
          </button>
          <button
            className={`examples-tab ${examplesTab === 'personal' ? 'active' : ''}`}
            onClick={() => setExamplesTab('personal')}
          >
            {t('examples.personal.title')}
          </button>
        </div>
        <div className="examples-grid">
          {(examplesTab === 'professional' ? professionalExamples : personalExamples).map((item) => (
            <div className="example-card" key={item.key}>
              <div className="example-icon">{item.icon}</div>
              <h3 className="example-title">{t(`examples.items.${item.key}.title`)}</h3>
              <p className="example-desc">{t(`examples.items.${item.key}.desc`)}</p>
              <p className="example-real"><span>{t('examples.realLabel')}</span> {t(`examples.items.${item.key}.real`)}</p>
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
        {/* Search Bar - Top */}
        <div className="custom-search-section">
          {!searchTopExpanded ? (
            <div className="fake-search" onClick={() => setSearchTopExpanded(true)}>
              <span className="search-icon">🔍</span>
              <span className="search-placeholder">{t('team.search.placeholder')}</span>
            </div>
          ) : (
            <div className="search-expanded">
              <p className="search-reveal">{t('team.search.reveal')}</p>
              <a href={searchMailto} className="btn btn-primary">{t('team.search.cta')}</a>
            </div>
          )}
        </div>

        <div className="team-grid">
          {(showAllTeam ? teamKeys : teamKeys.slice(0, 4)).map((key) => {
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
        {!showAllTeam && (
          <div className="show-more-section">
            <button className="btn btn-secondary show-more-btn" onClick={() => setShowAllTeam(true)}>
              {t('team.showMore', { count: teamKeys.length - 4 })}
            </button>
          </div>
        )}

        {/* Search Bar - Bottom */}
        <div className="custom-search-section">
          {!searchBottomExpanded ? (
            <div className="fake-search" onClick={() => setSearchBottomExpanded(true)}>
              <span className="search-icon">🔍</span>
              <span className="search-placeholder">{t('team.search.placeholder')}</span>
            </div>
          ) : (
            <div className="search-expanded">
              <p className="search-reveal">{t('team.search.reveal')}</p>
              <a href={searchMailto} className="btn btn-primary">{t('team.search.cta')}</a>
            </div>
          )}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section" id="industries">
        <div className="section-header">
          <h2 className="section-title">{t('industriesShowcase.sectionTitle')}</h2>
          <p className="section-sub">{t('industriesShowcase.sectionSub')}</p>
        </div>
        <div className="industries-grid">
          {[
            { key: 'legal', icon: '⚖️', color: '#6366f1', route: '/industries/legal' },
            { key: 'manufacturing', icon: '🏭', color: '#f59e0b', route: '/industries/manufacturing' },
            { key: 'realEstate', icon: '🏠', color: '#10b981', route: '/industries/real-estate' },
            { key: 'content', icon: '✍️', color: '#ec4899', route: '/industries/content' },
            { key: 'software', icon: '💻', color: '#0ea5e9', route: '/industries/software' },
            { key: 'accounting', icon: '📊', color: '#f59e0b', route: '/industries/accounting' },
          ].map((ind) => (
            <Link to={ind.route} className="industry-showcase-card" key={ind.key} style={{ '--card-accent': ind.color }}>
              <div className="industry-showcase-icon">{ind.icon}</div>
              <h3 className="industry-showcase-title">{t(`industriesShowcase.${ind.key}.title`)}</h3>
              <p className="industry-showcase-desc">{t(`industriesShowcase.${ind.key}.desc`)}</p>
              <span className="industry-showcase-link">{t('industriesShowcase.learnMore')}</span>
            </Link>
          ))}
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
          <div className="pricing-card">
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
          <div className="pricing-card featured">
            <div className="pricing-popular">{t('pricing.yearly.popular')}</div>
            <div className="pricing-label">{t('pricing.yearly.label')}</div>
            <div className="price">{t('pricing.yearly.price')}<span>{t('pricing.yearly.per')}</span></div>
            <p className="pricing-desc">{t('pricing.yearly.desc')}</p>
            <p className="pricing-savings">{t('pricing.yearly.savings')}</p>
            <ul className="pricing-features">
              {t('pricing.yearly.features', { returnObjects: true }).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="mailto:hello@peoplefree.work" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>{t('pricing.yearly.cta')}</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.sub')}</p>
        <a href="mailto:hello@peoplefree.work" className="btn btn-white">{t('cta.button')}</a>
      </section>
    </>
  )
}

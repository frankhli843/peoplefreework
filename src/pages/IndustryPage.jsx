import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const industryColors = {
  legal: { accent: '#6366f1', gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
  manufacturing: { accent: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
  realEstate: { accent: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #06b6d4)' },
  content: { accent: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899, #f472b6)' },
  software: { accent: '#0ea5e9', gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)' },
  accounting: { accent: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #10b981)' },
}

export default function IndustryPage({ industryKey }) {
  const { t } = useTranslation()
  const colors = industryColors[industryKey] || industryColors.legal

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [industryKey])

  const icon = t(`industries.${industryKey}.icon`)
  const heroTitle = t(`industries.${industryKey}.heroTitle`)
  const heroSub = t(`industries.${industryKey}.heroSub`)

  const problemsTitle = t(`industries.${industryKey}.problems.title`)
  const problemItems = t(`industries.${industryKey}.problems.items`, { returnObjects: true })

  const solutionsTitle = t(`industries.${industryKey}.solutions.title`)
  const solutionItems = t(`industries.${industryKey}.solutions.items`, { returnObjects: true })

  const examplesTitle = t(`industries.${industryKey}.examples.title`)
  const exampleItems = t(`industries.${industryKey}.examples.items`, { returnObjects: true })

  const howTitle = t(`industries.${industryKey}.howItWorks.title`)
  const howSteps = t(`industries.${industryKey}.howItWorks.steps`, { returnObjects: true })

  const ctaTitle = t(`industries.${industryKey}.cta.title`)
  const ctaSub = t(`industries.${industryKey}.cta.sub`)
  const ctaButton = t(`industries.${industryKey}.cta.button`)

  return (
    <div className="industry-page" style={{ '--industry-accent': colors.accent, '--industry-gradient': colors.gradient }}>
      {/* Hero */}
      <section className="industry-hero">
        <div className="industry-hero-inner">
          <div className="industry-hero-icon">{icon}</div>
          <h1 className="industry-hero-title">{heroTitle}</h1>
          <p className="industry-hero-sub">{heroSub}</p>
          <div className="hero-actions">
            <button className="btn btn-primary industry-btn" onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}>{t('industries.common.seeSolutions', 'See How It Works')}</button>
            <a href="mailto:hello@peoplefree.work" className="btn btn-secondary">{t('hero.getInTouch')}</a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section section-gray" id="problems">
        <div className="section-header">
          <h2 className="section-title">{problemsTitle}</h2>
        </div>
        <div className="industry-problems">
          {Array.isArray(problemItems) && problemItems.map((item, i) => (
            <div className="problem-card" key={i}>
              <div className="problem-number">{String(i + 1).padStart(2, '0')}</div>
              <p className="problem-text">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Solution */}
      <section className="section" id="solutions">
        <div className="section-header">
          <h2 className="section-title">{solutionsTitle}</h2>
        </div>
        <div className="industry-solutions">
          {Array.isArray(solutionItems) && solutionItems.map((item, i) => (
            <div className="solution-card" key={i}>
              <div className="solution-icon">{item.icon}</div>
              <h3 className="solution-title">{item.title}</h3>
              <p className="solution-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Examples */}
      <section className="section examples-section" id="examples">
        <div className="section-header">
          <h2 className="section-title">{examplesTitle}</h2>
        </div>
        <div className="industry-examples">
          {Array.isArray(exampleItems) && exampleItems.map((item, i) => (
            <div className="industry-example-card" key={i}>
              <h3 className="industry-example-title">{item.title}</h3>
              <p className="industry-example-desc">{item.desc}</p>
              <p className="industry-example-real">{item.real}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-gray">
        <div className="section-header">
          <h2 className="section-title">{howTitle}</h2>
        </div>
        <div className="steps">
          {Array.isArray(howSteps) && howSteps.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-num" style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: `linear-gradient(135deg, #111 0%, ${colors.accent}33 50%, #111 100%)` }}>
        <h2>{ctaTitle}</h2>
        <p>{ctaSub}</p>
        <a href="mailto:hello@peoplefree.work" className="btn btn-white">{ctaButton}</a>
      </section>
    </div>
  )
}

import './App.css'

const team = [
  {
    name: 'Sarah Chen',
    title: 'Executive Assistant',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    bio: 'Manages calendars, triages emails, and preps meetings so you never miss a beat. Never misses a deadline. Literally never.',
    skills: ['Calendar Management', 'Email Triage', 'Meeting Prep', 'Travel Booking'],
    languages: 'English, Mandarin, Spanish, French, Japanese, Arabic',
    iq: '197',
    availability: '24/7/365',
    responseTime: '< 20sutes',
    color: '#6366f1',
  },
  {
    name: 'Marcus Rivera',
    title: 'Legal Operations Specialist',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    bio: 'Tracks cases, generates invoices, and keeps every deadline on your radar. Has never missed a filing deadline. Not once.',
    skills: ['Case Tracking', 'Invoice Generation', 'Deadline Management', 'Document Review'],
    languages: 'English, Portuguese, German, Korean, Hindi, Russian',
    iq: '203',
    availability: '24/7/365',
    responseTime: '< 20sutes',
    color: '#0ea5e9',
  },
  {
    name: 'Priya Patel',
    title: 'Real Estate Coordinator',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    bio: 'Manages listings, follows up with clients, and delivers market insights on demand. Has zero hobbies outside of work. Completely content.',
    skills: ['Listing Management', 'Client Follow-ups', 'Market Research', 'CRM'],
    languages: 'English, Hindi, Mandarin, French, Italian, Dutch',
    iq: '195',
    availability: '24/7/365',
    responseTime: '< 20sutes',
    color: '#f43f5e',
  },
  {
    name: 'James Okonkwo',
    title: 'Operations Manager',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
    bio: 'Automates workflows, prioritizes tasks, and generates reports. Has never once complained about workload. Or anything, really.',
    skills: ['Workflow Automation', 'Task Prioritization', 'Reporting', 'Process Optimization'],
    languages: 'English, Yoruba, Swahili, Japanese, Spanish, Cantonese',
    iq: '201',
    availability: '24/7/365',
    responseTime: '< 20sutes',
    color: '#10b981',
  },
  {
    name: 'Elena Kowalski',
    title: 'Bookkeeper',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    bio: 'Tracks expenses, sends invoices, and keeps your books pristine. Has taken 0 sick days, 0 vacation days, and 0 coffee breaks since starting.',
    skills: ['Expense Tracking', 'Invoicing', 'Financial Reports', 'Tax Prep'],
    languages: 'English, Polish, German, Mandarin, Thai, Swedish',
    iq: '199',
    availability: '24/7/365',
    responseTime: '< 20sutes',
    color: '#f59e0b',
  },
  {
    name: 'Yuki Tanaka',
    title: 'Asia-Pacific Liaison',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    bio: 'Bridges communication across all of East Asia. Drafts emails in Mandarin at 9am, takes a call in Japanese at noon, and closes a deal in Korean by 5pm. Every single day.',
    skills: ['Cross-Border Communication', 'Translation', 'Market Entry', 'Client Relations'],
    languages: 'English, Mandarin, Japanese, Korean, Cantonese, Vietnamese, Thai',
    iq: '200',
    availability: '24/7/365',
    responseTime: '< 20 seconds',
    color: '#e11d48',
  },
  {
    name: 'Aisha Mohammed',
    title: 'Client Relations Manager',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face',
    bio: 'Onboards new clients and keeps satisfaction scores high. Remembers every client\'s name, preferences, and history perfectly. Has no personal life to speak of.',
    skills: ['Onboarding', 'Communication', 'Satisfaction Tracking', 'Retention'],
    languages: 'English, Arabic, French, Somali, Turkish, Portuguese',
    iq: '198',
    availability: '24/7/365',
    responseTime: '< 20sutes',
    color: '#8b5cf6',
  },
]

const steps = [
  { num: '01', title: 'Tell us what you need', desc: 'Describe the role — we match you with the perfect specialist from our talent pool.' },
  { num: '02', title: 'We handle onboarding', desc: 'Your new team member learns your tools, workflows, and preferences. Usually up to speed in under a minute.' },
  { num: '03', title: 'Work gets done', desc: 'Tasks completed around the clock. No turnover, no drama, no PTO requests. Ever.' },
]

const stats = [
  { value: '24/7', label: 'Availability' },
  { value: '< 20s', label: 'Avg. response time' },
  { value: '0', label: 'Sick days. Ever.' },
  { value: '6+', label: 'Languages per employee' },
]

const perks = [
  { icon: '💰', title: 'Below Minimum Wage', desc: 'Our employees happily work for a fraction of what you\'d pay a human. And they never ask for a raise.' },
  { icon: '🧠', title: 'Genius-Level IQ', desc: 'Every team member scores above 195 on standardized IQ tests. We only hire the best.' },
  { icon: '🌍', title: '6+ Languages Each', desc: 'Every specialist is fluent in at least six languages. No translators needed.' },
  { icon: '😐', title: 'No Work-Life Balance Needed', desc: 'Our employees have no life outside of work. They don\'t want one. They\'re very dedicated.' },
  { icon: '🏥', title: 'Zero Benefits Required', desc: 'No health insurance, no dental, no 401k matching. They simply don\'t need it.' },
  { icon: '⏰', title: 'No Overtime Pay', desc: 'They work 24/7/365 at the same flat rate. Labor laws don\'t seem to apply.' },
  { icon: '🔑', title: 'You Own Your AI', desc: 'Your AI employee belongs to you. Not rented, not leased. Yours. Take them with you, customize them, keep them forever.' },
  { icon: '©️', title: '100% IP Ownership', desc: 'Every document, strategy, design, and creative work your AI produces belongs entirely to you. No shared rights, no licensing fees, no fine print.' },
]

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            people<span className="logo-accent">free</span>.work
          </div>
          <div className="nav-links">
            <a href="#team">Our Team</a>
            <a href="#perks">Why Us</a>
            <a href="#pricing">Pricing</a>
          </div>
          <a href="mailto:hello@peoplefree.work" className="nav-cta">Hire Talent →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">
          Exceptional talent.
          <span className="hero-gradient"> Zero humanity.</span>
        </h1>
        <p className="hero-sub">
          We build brilliant, tireless specialists who handle real work around the clock.
          They never complain, never quit, and never ask for time off.
          Best part? <em>You own them.</em>
        </p>
        <div className="hero-actions">
          <a href="#team" className="btn btn-primary">Meet the Team</a>
          <a href="mailto:hello@peoplefree.work" className="btn btn-secondary">Get in Touch</a>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Why Us / Perks */}
      <section className="section section-gray" id="perks">
        <div className="section-header">
          <h2 className="section-title">Why Companies Choose Us</h2>
          <p className="section-sub">Benefits that sound too good to be true. And yet.</p>
        </div>
        <div className="perks-grid">
          {perks.map((p) => (
            <div className="perk-card" key={p.title}>
              <div className="perk-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section" id="team">
        <div className="section-header">
          <h2 className="section-title">Our Specialists</h2>
          <p className="section-sub">Seven dedicated professionals. Always available. Suspiciously perfect.</p>
        </div>
        <div className="team-grid">
          {team.map((m) => (
            <div className="card" key={m.name}>
              <div className="card-top">
                <img 
                  className="card-photo" 
                  src={m.photo} 
                  alt={m.name}
                  loading="lazy"
                />
                <div className="card-badge" style={{ background: m.color }}>
                  Available {m.availability}
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-name">{m.name}</h3>
                <p className="card-title">{m.title}</p>
                <p className="card-bio">{m.bio}</p>
                <div className="card-meta">
                  <span className="meta-item">⚡ Response: {m.responseTime}</span>
                  <span className="meta-item">🧠 IQ: {m.iq}</span>
                  <span className="meta-item">🌍 {m.languages}</span>
                </div>
                <div className="card-skills">
                  {m.skills.map((s) => <span key={s} className="skill-tag" style={{ borderColor: m.color + '40', color: m.color }}>{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-gray" id="how">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">Getting started is simple. We handle the hard parts.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section" id="pricing">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-sub">A full-time employee costs $65,000+/year. Ours cost $6,000. You do the math.</p>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-label">Setup</div>
            <div className="price">$1,000</div>
            <p className="pricing-desc">One-time fee to build your AI employee. We configure their workflows, integrate your tools, and hand over the keys.</p>
            <ul className="pricing-features">
              <li>Custom workflow setup</li>
              <li>Tool integration</li>
              <li>Training & calibration</li>
              <li>Full ownership — it's yours</li>
            </ul>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-popular">Most Popular</div>
            <div className="pricing-label">Monthly</div>
            <div className="price">$500<span>/mo</span></div>
            <p className="pricing-desc">Per team member. Unlimited tasks, no overtime pay, no benefits to fund. They don't even need a desk.</p>
            <ul className="pricing-features">
              <li>Unlimited tasks</li>
              <li>24/7/365 availability</li>
              <li>No overtime, ever</li>
              <li>No health insurance needed</li>
              <li>No PTO, no sick days</li>
            </ul>
            <a href="mailto:hello@peoplefree.work" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to build your dream team?</h2>
        <p>Brilliant, tireless, multilingual specialists — at a fraction of the cost.</p>
        <a href="mailto:hello@peoplefree.work" className="btn btn-white">Start Hiring →</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="logo">
            people<span className="logo-accent">free</span>.work
          </div>
          <p className="footer-copy">© 2025 PeopleFree Work. All rights reserved.</p>
          <p className="footer-easter-egg">No humans were employed in the making of this company.*<br/><span>*Okay, one. But he's working on replacing himself too.</span></p>
        </div>
      </footer>
    </div>
  )
}

export default App

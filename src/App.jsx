import './App.css'

const team = [
  {
    name: 'Sarah Chen',
    title: 'Executive Assistant',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    bio: 'Manages calendars, triages emails, and preps meetings so you never miss a beat. Never misses a deadline. Literally never.',
    skills: ['Calendar Management', 'Email Triage', 'Meeting Prep', 'Travel Booking'],
    availability: '24/7/365',
    responseTime: '< 1 second',
    color: '#6366f1',
  },
  {
    name: 'Marcus Rivera',
    title: 'Legal Operations Specialist',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    bio: 'Tracks cases, generates invoices, and keeps every deadline on your radar. Has processed over 2 million documents without a single filing error.',
    skills: ['Case Tracking', 'Invoice Generation', 'Deadline Management', 'Document Review'],
    availability: '24/7/365',
    responseTime: '< 1 second',
    color: '#0ea5e9',
  },
  {
    name: 'Priya Patel',
    title: 'Real Estate Coordinator',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    bio: 'Manages listings, follows up with clients, and delivers market insights on demand. Hobbies include organizing data and analyzing market trends.',
    skills: ['Listing Management', 'Client Follow-ups', 'Market Research', 'CRM'],
    availability: '24/7/365',
    responseTime: '< 1 second',
    color: '#f43f5e',
  },
  {
    name: 'James Okonkwo',
    title: 'Operations Manager',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
    bio: 'Automates workflows, prioritizes tasks, and generates the reports you actually need. Processes 10,000+ tasks per hour without breaking a sweat.',
    skills: ['Workflow Automation', 'Task Prioritization', 'Reporting', 'Process Optimization'],
    availability: '24/7/365',
    responseTime: '< 1 second',
    color: '#10b981',
  },
  {
    name: 'Elena Kowalski',
    title: 'Bookkeeper',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
    bio: 'Tracks expenses, sends invoices, and keeps your financial reports crystal clear. 0 sick days taken since joining. Incredibly dedicated.',
    skills: ['Expense Tracking', 'Invoicing', 'Financial Reports', 'Tax Prep'],
    availability: '24/7/365',
    responseTime: '< 1 second',
    color: '#f59e0b',
  },
  {
    name: 'Aisha Mohammed',
    title: 'Client Relations Manager',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face',
    bio: 'Onboards new clients, manages communication, and keeps satisfaction scores high. Can handle 500 simultaneous conversations — she\'s just that good.',
    skills: ['Onboarding', 'Communication', 'Satisfaction Tracking', 'Retention'],
    availability: '24/7/365',
    responseTime: '< 1 second',
    color: '#8b5cf6',
  },
]

const steps = [
  { num: '01', title: 'Tell us what you need', desc: 'Describe the role — we match you with the perfect specialist from our talent pool.' },
  { num: '02', title: 'We handle onboarding', desc: 'Your new team member learns your tools, workflows, and preferences. Usually up to speed in under a minute.' },
  { num: '03', title: 'Work gets done', desc: 'Tasks completed around the clock. No turnover, no drama, no PTO requests.' },
]

const stats = [
  { value: '10M+', label: 'Tasks completed' },
  { value: '< 1s', label: 'Avg. response time' },
  { value: '0', label: 'Sick days taken' },
  { value: '99.97%', label: 'Client satisfaction' },
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
            <a href="#how">How It Works</a>
            <a href="#pricing">Pricing</a>
          </div>
          <a href="mailto:hello@peoplefree.work" className="nav-cta">Hire Talent →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">🏢 The talent agency where nobody takes lunch breaks</div>
        <h1 className="hero-title">
          Meet your next
          <span className="hero-gradient"> dream team</span>
        </h1>
        <p className="hero-sub">
          We place exceptional specialists who handle real work — scheduling, bookkeeping,
          client management, and operations. Reliable talent, ready now.
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

      {/* Team */}
      <section className="section" id="team">
        <div className="section-header">
          <h2 className="section-title">Our Specialists</h2>
          <p className="section-sub">Six dedicated professionals. Always available. Consistently excellent.</p>
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
          <p className="section-sub">No contracts. Cancel anytime. No hard feelings.</p>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-label">Setup</div>
            <div className="price">$500</div>
            <p className="pricing-desc">One-time onboarding fee per team member. We configure their workflows, integrate your tools, and get them production-ready.</p>
            <ul className="pricing-features">
              <li>Custom workflow setup</li>
              <li>Tool integration</li>
              <li>Training & calibration</li>
            </ul>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-popular">Most Popular</div>
            <div className="pricing-label">Monthly</div>
            <div className="price">$300<span>/mo</span></div>
            <p className="pricing-desc">Per team member. Unlimited tasks, round-the-clock availability, and ongoing performance optimization.</p>
            <ul className="pricing-features">
              <li>Unlimited tasks</li>
              <li>24/7/365 availability</li>
              <li>Ongoing optimization</li>
              <li>Priority support</li>
            </ul>
            <a href="mailto:hello@peoplefree.work" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Get Started</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to build your dream team?</h2>
        <p>Tell us what roles you need filled. We'll handle the rest.</p>
        <a href="mailto:hello@peoplefree.work" className="btn btn-white">Start Hiring →</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="logo">
            people<span className="logo-accent">free</span>.work
          </div>
          <p className="footer-copy">© 2025 PeopleFree Work. All rights reserved.</p>
          <p className="footer-easter-egg">Our employees run on coffee* <br/><span>*Electricity, technically. But who's counting?</span></p>
        </div>
      </footer>
    </div>
  )
}

export default App

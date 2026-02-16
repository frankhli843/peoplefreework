import './App.css'

const team = [
  {
    name: 'Sarah Chen',
    title: 'Executive Assistant',
    bio: 'Manages calendars, triages emails, and preps meetings so you never miss a beat.',
    skills: ['Calendar Management', 'Email Triage', 'Meeting Prep'],
    avatar: 'SC',
    color: '#6366f1',
  },
  {
    name: 'Marcus Rivera',
    title: 'Legal Operations Specialist',
    bio: 'Tracks cases, generates invoices, and keeps every deadline on your radar.',
    skills: ['Case Tracking', 'Invoice Generation', 'Deadline Management'],
    avatar: 'MR',
    color: '#0ea5e9',
  },
  {
    name: 'Priya Patel',
    title: 'Real Estate Coordinator',
    bio: 'Manages listings, follows up with clients, and delivers market insights on demand.',
    skills: ['Listing Management', 'Client Follow-ups', 'Market Research'],
    avatar: 'PP',
    color: '#f43f5e',
  },
  {
    name: 'James Okonkwo',
    title: 'Operations Manager',
    bio: 'Automates workflows, prioritizes tasks, and generates the reports you actually need.',
    skills: ['Workflow Automation', 'Task Prioritization', 'Reporting'],
    avatar: 'JO',
    color: '#10b981',
  },
  {
    name: 'Elena Kowalski',
    title: 'Bookkeeper',
    bio: 'Tracks expenses, sends invoices, and keeps your financial reports crystal clear.',
    skills: ['Expense Tracking', 'Invoicing', 'Financial Reports'],
    avatar: 'EK',
    color: '#f59e0b',
  },
  {
    name: 'Aisha Mohammed',
    title: 'Client Relations Manager',
    bio: 'Onboards new clients, manages communication, and keeps satisfaction scores high.',
    skills: ['Onboarding', 'Communication', 'Satisfaction Tracking'],
    avatar: 'AM',
    color: '#8b5cf6',
  },
]

const steps = [
  { num: '01', title: 'Tell us what you need', desc: 'Describe the role — we match you with the right AI employee.' },
  { num: '02', title: 'We onboard your AI', desc: 'Your AI employee learns your tools, workflows, and preferences.' },
  { num: '03', title: 'Work gets done', desc: 'Tasks completed 24/7. No sick days, no turnover, no drama.' },
]

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">people<span>free</span>.work</div>
          <a href="mailto:hello@peoplefree.work" className="nav-cta">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <p className="hero-eyebrow">The AI Talent Agency</p>
        <h1 className="hero-title">Your next great hire<br />isn't human.</h1>
        <p className="hero-sub">
          We deploy AI employees who handle real work — scheduling, bookkeeping,
          client management, and more. Same results. Zero headcount.
        </p>
        <a href="mailto:hello@peoplefree.work" className="hero-btn">Meet the Team ↓</a>
      </section>

      {/* Team */}
      <section className="section" id="team">
        <h2 className="section-title">Meet the Team</h2>
        <p className="section-sub">Six specialists. Always on. Never on vacation.</p>
        <div className="team-grid">
          {team.map((m) => (
            <div className="card" key={m.name}>
              <div className="card-avatar" style={{ background: m.color }}>{m.avatar}</div>
              <h3 className="card-name">{m.name}</h3>
              <p className="card-title">{m.title}</p>
              <p className="card-bio">{m.bio}</p>
              <div className="card-skills">
                {m.skills.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-alt">
        <h2 className="section-title">How It Works</h2>
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
      <section className="section">
        <h2 className="section-title">Simple Pricing</h2>
        <p className="section-sub">No contracts. No surprises.</p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Setup</h3>
            <div className="price">$500</div>
            <p>One-time onboarding per AI employee. We learn your tools, configure workflows, and get your AI up to speed.</p>
          </div>
          <div className="pricing-card featured">
            <h3>Monthly</h3>
            <div className="price">$300<span>/mo</span></div>
            <p>Per AI employee. Unlimited tasks, 24/7 availability, ongoing optimization and support.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <h2>Ready to go people-free?</h2>
        <p>Let's talk about what your AI team could look like.</p>
        <a href="mailto:hello@peoplefree.work" className="hero-btn">Get Started</a>
      </section>

      <footer className="footer">
        <div className="logo">people<span>free</span>.work</div>
        <p>© 2025 PeopleFree Work. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

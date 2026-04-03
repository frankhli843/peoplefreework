import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const industryRoutes = [
  { key: 'legal', path: '/industries/legal' },
  { key: 'manufacturing', path: '/industries/manufacturing' },
  { key: 'realEstate', path: '/industries/real-estate' },
  { key: 'content', path: '/industries/content' },
  { key: 'software', path: '/industries/software' },
  { key: 'accounting', path: '/industries/accounting' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            people<span className="logo-accent">free</span>.work
          </Link>
          <p className="footer-copy">{t('footer.copy')}</p>
        </div>
        <div className="footer-industries">
          <div className="footer-col-title">{t('industries.navTitle', 'Industries')}</div>
          {industryRoutes.map(r => (
            <Link key={r.key} to={r.path} className="footer-link">
              {t(`industries.${r.key}.heroTitle`)}
            </Link>
          ))}
        </div>
        <div className="footer-easter">
          <p className="footer-easter-egg">{t('footer.easter1')}<br /><span>{t('footer.easter2')}</span></p>
        </div>
      </div>
    </footer>
  )
}

import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__wordmark" aria-hidden="true">KSDIGITAL</p>
        <div className="footer__row">
          <div>
            <p className="footer__brand">{t.meta.brandName}</p>
            <p className="footer__meta">{t.meta.studioType}</p>
            <p className="footer__meta">{t.meta.location}</p>
          </div>
          <nav className="footer__nav" aria-label={t.ui.footerNavAria}>
            {t.nav.links.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <p className="footer__copy">© {t.meta.year} {t.meta.brandName} — {t.ui.rights}</p>
        </div>
      </div>
    </footer>
  );
}


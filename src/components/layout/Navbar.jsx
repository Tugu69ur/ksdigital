import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTime } from '../../hooks/useTime';
import { useMagnetic } from '../../hooks/useMagnetic';
import LanguageSwitch from '../ui/LanguageSwitch';
import './Navbar.css';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ulaanbaatarTime = useTime('Asia/Ulaanbaatar');

  const brandRef = useMagnetic(0.2);
  const ctaRef = useMagnetic(0.3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <div ref={brandRef} className="navbar__brand-wrapper">
            <a href="#hero" className="navbar__brand" aria-label={t.ui.homeAria}>
              <div className="navbar__logo-badge">
                <span className="navbar__logo-glyph">KS</span>
                <span className="navbar__logo-pip" />
              </div>
              <span className="navbar__brand-name">
                {t.meta.brandName}
                <span className="navbar__brand-dot">.</span>
              </span>
            </a>
          </div>

          <nav className="navbar__nav" aria-label={t.ui.navAria}>
            <ul className="navbar__links">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="navbar__link" data-interactive="true">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <div className="navbar__time-telemetry" aria-label={t.ui.studioTime}>
              <Globe size={13} className="navbar__time-icon" aria-hidden="true" />
              <span className="navbar__time-label">ULN</span>
              <span className="navbar__time-val">{ulaanbaatarTime || '19:00:00'}</span>
            </div>

            <LanguageSwitch />

            <div ref={ctaRef} className="navbar__cta-wrapper">
              <a href={t.nav.cta.href} className="navbar__cta-btn" data-interactive="true">
                <span>{t.nav.cta.label}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <button
              type="button"
              className="navbar__toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t.ui.closeMenu : t.ui.openMenu}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`navbar__mobile-overlay ${isMobileMenuOpen ? 'navbar__mobile-overlay--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="navbar__mobile-header-meta">
          <span className="navbar__mobile-meta-tag">{t.ui.navIndex}</span>
          <span className="navbar__mobile-meta-time">ULN {ulaanbaatarTime}</span>
        </div>

        <ul className="navbar__mobile-links">
          {t.nav.links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={closeMobileMenu}
              >
                <span>{link.label}</span>
                <span className="navbar__mobile-index">0{index + 1}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__mobile-footer">
          <div className="navbar__mobile-info">
            <p className="navbar__mobile-studio">{t.meta.brandName} {t.ui.studioSuffix}</p>
            <p className="navbar__mobile-city">{t.meta.location}</p>
            <p className="navbar__mobile-email">{t.meta.email}</p>
          </div>
          <LanguageSwitch />
          <a
            href={t.nav.cta.href}
            className="navbar__cta-btn navbar__cta-btn--mobile"
            onClick={closeMobileMenu}
          >
            <span>{t.nav.cta.label}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}

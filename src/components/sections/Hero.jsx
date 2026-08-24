import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Activity, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useMagnetic } from '../../hooks/useMagnetic';
import HeroCanvas from './HeroCanvas';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const sublineRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const footerRef = useRef(null);
  const canvasWrapperRef = useRef(null);

  const primaryBtnRef = useMagnetic(0.35);
  const secondaryBtnRef = useMagnetic(0.25);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    };

    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.45,
      })
      .from([line1Ref.current, line2Ref.current, line3Ref.current], {
        y: 90,
        opacity: 0,
        duration: 1.05,
        stagger: 0.1,
      }, '-=0.25')
      .from(sublineRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.8,
      }, '-=0.55')
      .from(ctaGroupRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
      }, '-=0.5')
      .from(canvasWrapperRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 1.3,
        ease: 'power2.out',
      }, '-=0.9')
      .from(footerRef.current, {
        y: 16,
        opacity: 0,
        duration: 0.7,
      }, '-=0.55');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero" aria-label={t.hero.ariaLabel}>
      <div className="hero__spotlight" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__frame hero__frame--tl" aria-hidden="true" />
      <div className="hero__frame hero__frame--tr" aria-hidden="true" />
      <div className="hero__frame hero__frame--bl" aria-hidden="true" />
      <div className="hero__frame hero__frame--br" aria-hidden="true" />

      <div className="hero__ambient-aura" aria-hidden="true" />

      <div className="container hero__main-layout">
        <div className="hero__content-col">
          <div ref={badgeRef} className="hero__badge-wrapper">
            <div className="hero__status-badge">
              <span className="hero__status-indicator">
                <span className="hero__status-dot" />
                <span className="hero__status-ping" />
              </span>
              <span className="hero__status-text">{t.hero.statusBadge}</span>
              <span className="hero__status-divider" />
              <span className="hero__status-capacity">
                <Activity size={12} className="hero__status-icon" />
                <span>{t.hero.slotsOpen}</span>
              </span>
            </div>
          </div>

          <h1 className="hero__headline">
            <span className="hero__headline-row">
              <span className="hero__headline-inner" ref={line1Ref}>
                {t.hero.headlineWords[0]}
              </span>
            </span>
            <span className="hero__headline-row">
              <span className="hero__headline-inner hero__headline-inner--serif" ref={line2Ref}>
                {t.hero.headlineWords[1]}
              </span>
            </span>
            <span className="hero__headline-row">
              <span className="hero__headline-inner hero__headline-inner--accent" ref={line3Ref}>
                {t.hero.headlineWords[2]}
              </span>
            </span>
          </h1>

          <p className="hero__subheadline" ref={sublineRef}>
            {t.hero.subheadline}
          </p>

          <div className="hero__cta-group" ref={ctaGroupRef}>
            <div ref={primaryBtnRef} className="hero__cta-wrap">
              <a
                href={t.hero.primaryCta.href}
                className="hero__btn-primary"
                data-interactive="true"
              >
                <span>{t.hero.primaryCta.label}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div ref={secondaryBtnRef} className="hero__cta-wrap">
              <a
                href={t.hero.secondaryCta.href}
                className="hero__btn-secondary"
                data-interactive="true"
              >
                <Sparkles size={15} className="hero__btn-icon" aria-hidden="true" />
                <span>{t.hero.secondaryCta.label}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual-col" ref={canvasWrapperRef}>
          <div className="hero__visual-frame">
            <div className="hero__orb hero__orb--a" aria-hidden="true" />
            <div className="hero__orb hero__orb--b" aria-hidden="true" />
            <HeroCanvas />
            <div className="hero__visual-tag">
              <span className="hero__visual-tag-dot" />
              <span className="hero__visual-tag-text">{t.hero.webglTag}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero__footer" ref={footerRef}>
        <div className="hero__telemetry-grid">
          {t.hero.telemetry.map((item, index) => (
            <div key={item.label} className="hero__telemetry-item">
              <span className="hero__telemetry-index">0{index + 1}</span>
              <div className="hero__telemetry-content">
                <span className="hero__telemetry-label">{item.label}</span>
                <span className="hero__telemetry-val">{item.value}</span>
              </div>
            </div>
          ))}

          <a href="#about" className="hero__scroll-cue" aria-label={t.hero.scrollCueAria}>
            <span className="hero__scroll-cue-text">{t.hero.scrollIndicator}</span>
            <div className="hero__scroll-cue-track">
              <div className="hero__scroll-cue-pip" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

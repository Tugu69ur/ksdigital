import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container about__grid">
        <div className="about__intro">
          <p className="section-label" data-reveal>{t.about.label}</p>
          <h2 className="section-heading about__heading" data-reveal>
            {t.about.heading}
          </h2>
        </div>
        <p className="about__body" data-reveal>
          {t.about.body}
        </p>
        <div className="about__stats">
          {t.about.stats.map((stat) => (
            <div className="about__stat" key={stat.label} data-reveal>
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

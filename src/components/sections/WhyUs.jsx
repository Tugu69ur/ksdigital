import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './WhyUs.css';

export default function WhyUs() {
  const { t } = useLanguage();
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="why" id="why" ref={ref}>
      <div className="container">
        <div className="why__head">
          <p className="section-label" data-reveal>{t.why.label}</p>
          <h2
            className="section-heading"
            data-reveal
            dangerouslySetInnerHTML={{ __html: t.why.heading }}
          />
        </div>

        <ol className="why__list">
          {t.why.points.map((point, i) => (
            <li key={point.title} className="why-row" data-reveal>
              <span className="why-row__index">0{i + 1}</span>
              <h3 className="why-row__title">{point.title}</h3>
              <p className="why-row__copy">{point.copy}</p>
              <span className="why-row__glow" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './Process.css';

export default function Process() {
  const { t } = useLanguage();
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="process" id="process" ref={ref}>
      <div className="container">
        <div className="process__head">
          <p className="section-label" data-reveal>{t.process.label}</p>
          <h2 className="section-heading" data-reveal>{t.process.heading}</h2>
        </div>
        <ol className="process__list">
          {t.process.steps.map((step) => (
            <li className="process__step" key={step.index} data-reveal>
              <span className="process__num">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


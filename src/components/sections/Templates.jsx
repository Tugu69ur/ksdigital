import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './Templates.css';

export default function Templates() {
  const { t } = useLanguage();
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="templates" id="templates" ref={ref}>
      <div className="container">
        <div className="templates__head">
          <p className="section-label" data-reveal>{t.templates.label}</p>
          <h2
            className="section-heading"
            data-reveal
            dangerouslySetInnerHTML={{ __html: t.templates.heading }}
          />
        </div>
        <div className="templates__grid">
          {t.templates.items.map((item, i) => (
            <article className="template-card" key={item.title} data-reveal data-interactive="true">
              <div className={`template-card__preview template-card__preview--${i + 1}`}>
                <span>{item.title}</span>
              </div>
              <div className="template-card__body">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.type}</p>
                </div>
                <div className="template-card__price">
                  <strong>{item.price}</strong>
                  <span>{item.note}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


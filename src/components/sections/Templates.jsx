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
          <p className="templates__intro" data-reveal>{t.templates.intro}</p>

          <div className="templates__categories" data-reveal>
            {t.templates.categories.map((category) => (
              <span key={category} className="templates__category">{category}</span>
            ))}
          </div>
        </div>

        <div className="templates__grid">
          {t.templates.items.map((item, i) => (
            <a
              href="#contact"
              className="template-card"
              key={item.title}
              data-reveal
              data-interactive="true"
            >
              <div className={`template-card__preview template-card__preview--${i + 1}`}>
                <span className="template-card__badge">{item.category}</span>
                <span>{item.title}</span>
              </div>
              <div className="template-card__body">
                <div>
                  <h3>{item.category}</h3>
                  <p>{item.note}</p>
                </div>
                <div className="template-card__price">
                  <strong>{item.price}</strong>
                  <span>{item.title} Template</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

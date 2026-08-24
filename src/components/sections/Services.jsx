import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './Services.css';

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services__head">
          <p className="section-label" data-reveal>{t.services.label}</p>
          <h2
            className="section-heading"
            data-reveal
            dangerouslySetInnerHTML={{ __html: t.services.heading }}
          />
          {t.services.intro && (
            <p className="services__intro" data-reveal>{t.services.intro}</p>
          )}
        </div>

        <div className="services__bento">
          {t.services.items.map((item) => (
            <article className="service-card" key={item.index} data-reveal data-interactive="true">
              <div className="service-card__top">
                <span className="service-card__index">{item.index}</span>
                <ArrowUpRight size={18} className="service-card__arrow" aria-hidden="true" />
              </div>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__copy">{item.copy}</p>
              <div className="service-card__tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


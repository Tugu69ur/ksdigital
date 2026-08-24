import { useRef } from 'react';
import { ArrowUpRight, Check, PenTool, LayoutTemplate } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './WaysToBuild.css';

const ICONS = {
  custom: PenTool,
  template: LayoutTemplate,
};

export default function WaysToBuild() {
  const { t } = useLanguage();
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="ways" id="ways" ref={ref}>
      <div className="container">
        <div className="ways__head">
          <p className="section-label" data-reveal>{t.ways.label}</p>
          <h2
            className="section-heading"
            data-reveal
            dangerouslySetInnerHTML={{ __html: t.ways.heading }}
          />
        </div>

        <div className="ways__grid">
          {t.ways.options.map((option) => {
            const Icon = ICONS[option.kind] || PenTool;

            return (
              <article
                key={option.index}
                className={`way-card way-card--${option.kind}`}
                data-reveal
                data-interactive="true"
              >
                <div className="way-card__top">
                  <span className="way-card__index">{option.index}</span>
                  <span className="way-card__subtitle">
                    <Icon size={13} aria-hidden="true" />
                    {option.subtitle}
                  </span>
                </div>

                <h3 className="way-card__title">{option.title}</h3>
                <p className="way-card__copy">{option.copy}</p>

                <ul className="way-card__points">
                  {option.points.map((point) => (
                    <li key={point}>
                      <span className="way-card__check">
                        <Check size={12} aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a href={option.cta.href} className="way-card__cta" data-interactive="true">
                  <span>{option.cta.label}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './Work.css';

export default function Work() {
  const { t } = useLanguage();
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="work" id="work" ref={ref}>
      <div className="container">
        <div className="work__head">
          <p className="section-label" data-reveal>{t.work.label}</p>
          <h2 className="section-heading" data-reveal>{t.work.heading}</h2>
        </div>

        <div className="work__list">
          {t.work.items.map((item) => (
            <a
              href="#contact"
              className={`work-row work-row--${item.tone}`}
              key={item.index}
              data-reveal
              data-interactive="true"
            >
              <span className="work-row__index">{item.index}</span>
              <div className="work-row__copy">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
              <div className="work-row__meta">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <span className="work-row__year">{item.year}</span>
              <span className="work-row__go" aria-hidden="true">
                <ArrowUpRight size={22} />
              </span>
              <div className="work-row__glow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


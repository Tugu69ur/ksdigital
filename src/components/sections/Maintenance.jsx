import { useRef } from 'react';
import {
  ArrowUpRight,
  FileText,
  Image as ImageIcon,
  Tag,
  Bug,
  LifeBuoy,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import './Maintenance.css';

const ICONS = {
  file: FileText,
  image: ImageIcon,
  tag: Tag,
  bug: Bug,
  support: LifeBuoy,
  wrench: Wrench,
};

export default function Maintenance() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const ctaRef = useMagnetic(0.3);
  useReveal(ref);

  return (
    <section className="maint" id="maintenance" ref={ref}>
      <div className="container maint__layout">
        <div className="maint__copy">
          <p className="section-label" data-reveal>{t.maintenance.label}</p>
          <h2
            className="section-heading maint__heading"
            data-reveal
            dangerouslySetInnerHTML={{ __html: t.maintenance.heading }}
          />
          <p className="maint__body" data-reveal>{t.maintenance.body}</p>
          <p className="maint__note" data-reveal>{t.maintenance.note}</p>
          <div ref={ctaRef} className="maint__cta-wrap" data-reveal>
            <a href={t.maintenance.cta.href} className="maint__cta" data-interactive="true">
              <span>{t.maintenance.cta.label}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <ul className="maint__list">
          {t.maintenance.items.map((item) => {
            const Icon = ICONS[item.icon] || Wrench;

            return (
              <li key={item.text} className="maint__item" data-reveal>
                <span className="maint__item-icon">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <span className="maint__item-text">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

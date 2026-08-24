import { useRef } from 'react';
import {
  ArrowUpRight,
  Coffee,
  UtensilsCrossed,
  Scissors,
  ShoppingBag,
  Shirt,
  Briefcase,
  BedDouble,
  Building2,
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './Audience.css';

const ICONS = {
  coffee: Coffee,
  restaurant: UtensilsCrossed,
  salon: Scissors,
  shop: ShoppingBag,
  fashion: Shirt,
  service: Briefcase,
  hotel: BedDouble,
  company: Building2,
};

export default function Audience() {
  const { t } = useLanguage();
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="aud" id="audiences" ref={ref}>
      <div className="container">
        <div className="aud__head">
          <p className="section-label" data-reveal>{t.audience.label}</p>
          <h2
            className="section-heading"
            data-reveal
            dangerouslySetInnerHTML={{ __html: t.audience.heading }}
          />
          <p className="aud__body" data-reveal>{t.audience.body}</p>
        </div>

        <div className="aud__grid">
          {t.audience.categories.map((category) => {
            const Icon = ICONS[category.icon] || Briefcase;

            return (
              <a
                key={category.label}
                href="#contact"
                className="aud-tile"
                data-reveal
                data-interactive="true"
              >
                <span className="aud-tile__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="aud-tile__label">{category.label}</span>
                <ArrowUpRight
                  size={15}
                  className="aud-tile__arrow"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

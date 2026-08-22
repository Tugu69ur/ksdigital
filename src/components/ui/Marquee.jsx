import { useLanguage } from '../../i18n/LanguageContext';
import './Marquee.css';

export default function Marquee() {
  const { t, locale } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" key={locale}>
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

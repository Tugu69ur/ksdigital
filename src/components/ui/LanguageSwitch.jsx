import { useLanguage } from '../../i18n/LanguageContext';
import './LanguageSwitch.css';

export default function LanguageSwitch({ compact = false }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`lang-switch ${compact ? 'lang-switch--compact' : ''}`}
      role="group"
      aria-label={t.ui.langAria}
    >
      <button
        type="button"
        className={`lang-switch__btn ${locale === 'en' ? 'is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        data-interactive="true"
      >
        {t.ui.langEn}
      </button>
      <button
        type="button"
        className={`lang-switch__btn ${locale === 'mn' ? 'is-active' : ''}`}
        onClick={() => setLocale('mn')}
        aria-pressed={locale === 'mn'}
        data-interactive="true"
      >
        {t.ui.langMn}
      </button>
    </div>
  );
}

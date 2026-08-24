import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { useMagnetic } from '../../hooks/useMagnetic';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const btnRef = useMagnetic(0.3);
  useReveal(ref);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container contact__layout">
        <div className="contact__copy">
          <p className="section-label" data-reveal>{t.contact.label}</p>
          <h2 className="section-heading contact__heading" data-reveal>
            {t.contact.heading}
          </h2>
          <p className="contact__body" data-reveal>{t.contact.body}</p>
          <a className="contact__email" href={`mailto:${t.contact.email}`} data-reveal data-interactive="true">
            {t.contact.email}
            <ArrowUpRight size={28} />
          </a>

          <div className="contact__cta-row" data-reveal>
            <div ref={btnRef} className="contact__cta-wrap">
              <a
                href={t.contact.primaryCta.href}
                className="contact__btn-primary"
                data-interactive="true"
              >
                <span>{t.contact.primaryCta.label}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <a
              href={t.contact.secondaryCta.href}
              className="contact__btn-secondary"
              data-reveal
              data-interactive="true"
            >
              {t.contact.secondaryCta.label}
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={onSubmit} data-reveal>
          <label>
            <span>{t.contact.form.name}</span>
            <input name="name" type="text" placeholder={t.contact.form.namePlaceholder} required />
          </label>
          <label>
            <span>{t.contact.form.email}</span>
            <input name="email" type="email" placeholder={t.contact.form.emailPlaceholder} required />
          </label>
          <label>
            <span>{t.contact.form.project}</span>
            <textarea name="message" rows="4" placeholder={t.contact.form.projectPlaceholder} required />
          </label>
          <div className="contact__submit-wrap">
            <button type="submit" className="contact__submit" data-interactive="true">
              {sent ? t.contact.form.sent : t.contact.form.submit}
              <ArrowUpRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


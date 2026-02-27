import { useTranslation } from 'react-i18next';
import { FaCalendarCheck } from 'react-icons/fa';


function Cta() {
    const { t } = useTranslation();
    return (
        <section className="cta" aria-label="Call to action">
            <div className="container cta-content">
                <p>
                    <strong>{t('cta.callToday')}</strong> {t('cta.text')}
                </p>
                <a href="tel:4012701681" className="btn primary" aria-label="Call us at 4 0 1, 2 7 0, 1 6 8 1">
                    <FaCalendarCheck aria-hidden="true" />
                    {t('cta.button')}
                </a>
            </div>
        </section>
    );
}

export default Cta;

import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaClipboardList, FaHandsHelping, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const features: { Icon: IconType; key: string; color: string }[] = [
    { Icon: FaShieldAlt, key: 'feature1', color: 'var(--blue)' },
    { Icon: FaClipboardList, key: 'feature2', color: 'var(--blue)' },
    { Icon: FaHandsHelping, key: 'feature3', color: 'var(--blue)' },
    { Icon: FaMapMarkerAlt, key: 'feature4', color: 'var(--blue)' },
];

function AboutFeatures() {
    const { t } = useTranslation();
    return (
        <section className="about-features-section" aria-label="Why families choose us">
            <div className="container">
                <h2 className="about-features-title">
                    {t('about.whyTitle')} <span>{t('about.whyHighlight')}</span>
                </h2>
                <div className="about-features-grid">
                    {features.map(({ Icon, key }) => (
                        <div key={key} className="about-feature-card">
                            <span className="about-feature-icon" aria-hidden="true">
                                <Icon size={38} color="var(--gold)" />
                            </span>
                            <h4>{t(`about.${key}`)}</h4>
                        </div>
                    ))}
                </div>
                <div className="about-cta-row">
                    <a href="tel:4012701681" className="btn primary" aria-label="Call us at 4 0 1, 2 7 0, 1 6 8 1">
                        <FaPhone aria-hidden="true" />
                        {t('about.ctaCall')}
                    </a>
                    <a href="/contact" className="btn secondary">{t('about.ctaConsult')}</a>
                </div>
            </div>
        </section>
    );
}

export default AboutFeatures;

import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaClipboardList, FaHandsHelping, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import AcreditationLogo from '../assets/CHAP.png';

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

                <div className="partner-card-block partner-card-block--stacked">
                    <h3 className="partner-card-inner-title" >
                        {t('evaluation.chap.name')} <span className="partner-tagline">— {t('evaluation.chap.tagline')}</span>
                    </h3>
                    <div className="partner-card-row">
                        <div className="partner-card-content">
                            <p>{t('evaluation.chap.desc1')}</p>
                            <p>{t('evaluation.chap.desc2')}</p>
                        </div>
                        <div className="partner-logo-box">
                            <a
                                href="https://www.credly.com/badges/12d55a30-6e23-4a8a-ac4f-e55a956655cb/whatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={AcreditationLogo} alt="Avangelina's Cleaning Services logo" />
                            </a>
                        </div>
                    </div>
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

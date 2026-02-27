import { useTranslation } from 'react-i18next';
import careersPhoto from '../assets/careers-photo.png';
import { useState, type FormEvent } from 'react';
import {
    FaMoneyBillWave, FaCalendarAlt, FaGraduationCap, FaHeart,
    FaPhone, FaCheck, FaPaperPlane
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

const benefits: { Icon: IconType; key: string }[] = [
    { Icon: FaMoneyBillWave, key: 'benefit1' },
    { Icon: FaCalendarAlt, key: 'benefit2' },
    { Icon: FaGraduationCap, key: 'benefit3' },
    { Icon: FaHeart, key: 'benefit4' },
];

const positions = ['cna', 'homemaker', 'rn'] as const;

function CareersPage() {
    const { t } = useTranslation();
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <>
            {/* SPLIT HERO */}
            <section className="careers-hero" aria-labelledby="careers-heading">
                <div className="careers-hero-text">
                    <h1 id="careers-heading">
                        {t('careers.heroTitle')} <br />
                        <span>{t('careers.heroHighlight')}</span>
                    </h1>
                    <p>{t('careers.heroSubtitle')}</p>
                </div>
                <div className="careers-hero-img">
                    <img src={careersPhoto} alt="Two Caring Path nurses smiling together in a healthcare facility" />
                </div>
            </section>

            {/* JOIN OUR TEAM */}
            <section className="careers-join" aria-label="Join our team — open positions and application form">
                <div className="container careers-join-layout">
                    <div className="careers-join-text">
                        <h2>{t('careers.joinTitle')}</h2>
                        <p>{t('careers.joinText')}</p>

                        <h3 className="careers-positions-title">{t('careers.openPositions')}</h3>
                        <ul className="careers-positions-list" aria-label="Available job positions">
                            {positions.map((pos) => (
                                <li key={pos}>
                                    <FaCheck aria-hidden="true" className="pos-check-icon" />
                                    {t(`careers.job_${pos}`)}
                                </li>
                            ))}
                        </ul>
                        <a href="tel:4012701681" className="btn primary" aria-label="Call us at 4 0 1, 2 7 0, 1 6 8 1">
                            <FaPhone aria-hidden="true" style={{ marginRight: 8, verticalAlign: 'middle' }} />
                            {t('careers.callCta')}
                        </a>
                    </div>

                    {/* APPLICATION FORM */}
                    <div className="careers-form-wrap">
                        <h3 id="careers-form-heading">{t('careers.formTitle')}</h3>
                        <div aria-live="polite" aria-atomic="true">
                            {sent ? (
                                <div className="form-success" role="status">
                                    <p>{t('careers.successMessage')}</p>
                                </div>
                            ) : (
                                <form
                                    className="contact-form"
                                    onSubmit={handleSubmit}
                                    aria-labelledby="careers-form-heading"
                                    noValidate
                                >
                                    <div className="form-group">
                                        <label htmlFor="careers-name">{t('careers.formName')}</label>
                                        <input id="careers-name" type="text" required autoComplete="name" aria-required="true" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="careers-email">{t('careers.formEmail')}</label>
                                        <input id="careers-email" type="email" required autoComplete="email" aria-required="true" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="careers-phone">{t('careers.formPhone')}</label>
                                        <input id="careers-phone" type="tel" autoComplete="tel" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="careers-message">{t('careers.formMessage')}</label>
                                        <textarea id="careers-message" rows={3} />
                                    </div>
                                    <button type="submit" className="btn primary">
                                        <FaPaperPlane aria-hidden="true" />
                                        {t('careers.formSubmit')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="careers-benefits" aria-label="Employee benefits">
                <div className="container">
                    <div className="benefits-grid">
                        {benefits.map(({ Icon, key }) => (
                            <div key={key} className="benefit-card">
                                <span className="benefit-icon" aria-hidden="true">
                                    <Icon size={36} color="var(--gold)" />
                                </span>
                                <p>{t(`careers.${key}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CareersPage;

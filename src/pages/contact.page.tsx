import { useTranslation } from 'react-i18next';
import contactPhoto from '../assets/contact-photo.png';
import { useState, type FormEvent } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaCheck, FaPaperPlane } from 'react-icons/fa';

function ContactPage() {
    const { t } = useTranslation();
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <>
            {/* SPLIT HERO */}
            <section className="contact-hero" aria-labelledby="contact-heading">
                <div className="contact-hero-text">
                    <h1 id="contact-heading">{t('contact.heroTitle')}</h1>
                    <p>{t('contact.heroSubtitle')}</p>
                </div>
                <div className="contact-hero-img">
                    <img src={contactPhoto} alt="A caring nurse holding hands with an elderly patient in their home" />
                </div>
            </section>

            {/* CALL US TODAY */}
            <section className="contact-call-section" aria-label="Contact information and message form">
                <div className="container contact-call-layout">
                    <div className="contact-call-info">
                        <h2>{t('contact.callTitle')}</h2>
                        <a href="tel:4012701681" className="contact-phone-link" aria-label="Call us at 4 0 1, 2 7 0, 1 6 8 1">
                            <FaPhone aria-hidden="true" style={{ marginRight: 10 }} />
                            (401) 270-1681
                        </a>
                        <ul className="contact-bullets" aria-label="Our service commitments">
                            <li><FaCheck aria-hidden="true" className="pos-check-icon" /> {t('contact.bullet1')}</li>
                            <li><FaCheck aria-hidden="true" className="pos-check-icon" /> {t('contact.bullet2')}</li>
                            <li><FaCheck aria-hidden="true" className="pos-check-icon" /> {t('contact.bullet3')}</li>
                        </ul>
                    </div>

                    <div className="careers-form-wrap">
                        <h3 id="contact-form-heading">{t('contact.formTitle')}</h3>
                        <div aria-live="polite" aria-atomic="true">
                            {sent ? (
                                <div className="form-success" role="status">
                                    <p>{t('contact.successMessage')}</p>
                                </div>
                            ) : (
                                <form
                                    className="contact-form contact-form--compact"
                                    onSubmit={handleSubmit}
                                    aria-labelledby="contact-form-heading"
                                    noValidate
                                >
                                    <div className="form-group">
                                        <label htmlFor="contact-name">{t('contact.formName')}</label>
                                        <input id="contact-name" type="text" required autoComplete="name" aria-required="true" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email">{t('contact.formEmail')}</label>
                                        <input id="contact-email" type="email" required autoComplete="email" aria-required="true" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-phone">{t('contact.formPhone')}</label>
                                        <input id="contact-phone" type="tel" autoComplete="tel" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-message">{t('contact.formMessage')}</label>
                                        <textarea id="contact-message" rows={3} />
                                    </div>
                                    <button type="submit" className="btn primary">
                                        <FaPaperPlane aria-hidden="true" />
                                        {t('contact.formSubmit')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT DETAILS ROW */}
            <section className="contact-details-row" aria-label="Contact details">
                <div className="container contact-details-grid">
                    <div className="contact-detail-item">
                        <FaPhone aria-hidden="true" className="contact-detail-icon" />
                        <a href="tel:4012701681" aria-label="Call (401) 270-1681">(401) 270-1681</a>
                    </div>
                    <div className="contact-detail-item">
                        <FaMapMarkerAlt aria-hidden="true" className="contact-detail-icon" />
                        <span>Providence, RI</span>
                    </div>
                    <div className="contact-detail-item">
                        <FaEnvelope aria-hidden="true" className="contact-detail-icon" />
                        <a href="mailto:caringpath-homehealth@gmail.com" aria-label="Email caringpath-homehealth at gmail dot com">
                            caringpath-homehealth@gmail.com
                        </a>
                    </div>
                    <div className="contact-detail-item">
                        <FaClock aria-hidden="true" className="contact-detail-icon" />
                        <span>{t('contact.hours')}</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactPage;

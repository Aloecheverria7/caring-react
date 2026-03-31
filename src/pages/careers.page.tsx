import { useTranslation } from 'react-i18next';
import careersPhoto from '../assets/careers-photo.png';
//import servicesBg from '../assets/services-bg.png';
import { useState, type FormEvent } from 'react';
import {
    FaMoneyBillWave, FaCalendarAlt, FaGraduationCap, FaHeart, FaCheck, FaPaperPlane
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
//import AboutFeatures from '../components/about-features.component';
import Carrer from '../components/upload-career.component';
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
            <div className="careers-extra">

  <h3 className="careers-extra-title">Join Us</h3>

  <div className="careers-extra-grid">

    {/* REQUIREMENTS */}
    <div className="extra-block">
      <h4>Requirements</h4>
      <ul>
        <li>License CNA</li>
        <li>Certificate for homemaker</li>
        <li>I.D.</li>
        <li>CPR Certificate</li>
        <li>Car Insurance</li>
      </ul>
    </div>

    {/* MEDICAL RECORDS */}
    <div className="extra-block">
      <h4>Medical Records</h4>
      <ul>
        <li>H.E.P B.</li>
        <li>M.M.R.</li>
        <li>Varicella</li>
        <li>P.P.D.</li>
        <li>T.D.A.P.</li>
      </ul>
    </div>

    {/* BENEFITS */}
    <div className="extra-block">
      <h4>Benefits</h4>
      <ul>
        <li>Competitive pay</li>
        <li>Sick Time</li>
        <li>Vacation Time</li>
        <li>And more</li>
      </ul>
    </div>

  </div>
</div>
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
                    id="careers-form"
                        className="contact-form"
                        onSubmit={handleSubmit}
                        aria-labelledby="careers-form-heading"
                        encType="multipart/form-data"
                        noValidate
                    >
                        <div className="form-group">
                            <label htmlFor="careers-name">{t('careers.formName')}</label>
                            <input id="careers-name" name="name" type="text" required autoComplete="name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="careers-email">{t('careers.formEmail')}</label>
                            <input id="careers-email" name="email" type="email" required autoComplete="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="careers-phone">{t('careers.formPhone')}</label>
                            <input id="careers-phone" name="phone" type="tel" autoComplete="tel" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="careers-message">{t('careers.formMessage')}</label>
                            <textarea id="careers-message" name="message" rows={3} />
                        </div>

                        {/* CV */}
                        <div className="form-group">
                            <label htmlFor="careers-cv">Upload Resume (CV)</label>
                            <input
                                id="careers-cv"
                                name="cv"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                required
                            />
                        </div>

                        {/* CERTIFICATIONS */}
                        <div className="form-group">
                            <label htmlFor="careers-certifications">Upload Certifications</label>
                            <input
                                id="careers-certifications"
                                name="certifications"
                                type="file"
                                accept=".pdf,.jpg,.png"
                                multiple
                            />
                        </div>

                        <small className="form-note">
                            Accepted formats: PDF, DOC, DOCX, JPG, PNG. Max size: 5MB.
                        </small>

                        <button type="submit" className="btn primary">
                            <FaPaperPlane aria-hidden="true" />
                            Submit Application
                        </button>
                    </form>
                )}
            </div>
        </div>
    </div>
</section>
    <Carrer />  
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

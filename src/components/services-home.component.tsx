import { useTranslation } from 'react-i18next';
import servicesBg from '../assets/services-bg.png';
import { FaPhone, FaStethoscope, FaHome, FaUserNurse } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type ServiceKey = 'cna' | 'homemaker' | 'rn';

const serviceKeys: { id: ServiceKey; Icon: IconType; label: string; ctaStyle: string }[] = [
    { id: 'cna', Icon: FaStethoscope, label: 'Stethoscope — CNA Services', ctaStyle: 'primary' },
    { id: 'homemaker', Icon: FaHome, label: 'House — Homemaker Services', ctaStyle: 'secondary' },
    { id: 'rn', Icon: FaUserNurse, label: 'Nurse — RN Supervision', ctaStyle: 'primary' },
];

function ServicesHome() {
    const { t } = useTranslation();

    return (
        <section className="services-home-section" id="services" aria-label="Our services">
            <div className="container">
                {/* Image fills the rounded container — cards sit on top of it */}
                <div className="services-bg-wrap">
                    <img src={servicesBg} alt="Providence Rhode Island skyline" className="services-bg-img" />
                    <div className="services-cards-home">
                        {serviceKeys.map(({ id, Icon, label, ctaStyle }) => (
                            <div key={id} className="service-card-home">
                                <div className="service-card-home-icon" aria-hidden="true">
                                    <Icon size={44} color="var(--gold)" />
                                </div>
                                <h3>{t(`services.${id}.title`)}</h3>
                                <p>{t(`services.${id}.description`)}</p>
                                <ul className="service-highlights" aria-label={`${label} highlights`}>
                                    <li>{t(`services.${id}.highlight1`)}</li>
                                    <li>{t(`services.${id}.highlight2`)}</li>
                                    <li>{t(`services.${id}.highlight3`)}</li>
                                </ul>
                                <a href="tel:4012701681" className={`btn ${ctaStyle} small`} aria-label={`${label} — call us`}>
                                    <FaPhone aria-hidden="true" />
                                    {t(`services.${id}.cta`)}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHome;

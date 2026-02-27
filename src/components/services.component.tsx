import { useTranslation } from 'react-i18next';
import servicesBg from '../assets/services-bg.png';
import { FaStethoscope, FaHome, FaUserNurse, FaPhone } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type ServiceKey = 'cna' | 'homemaker' | 'rn';

const serviceKeys: { id: ServiceKey; Icon: IconType; ctaStyle: string }[] = [
    { id: 'cna', Icon: FaStethoscope, ctaStyle: 'secondary' },
    { id: 'homemaker', Icon: FaHome, ctaStyle: 'primary' },
    { id: 'rn', Icon: FaUserNurse, ctaStyle: 'secondary' },
];

function Services() {
    const { t } = useTranslation();

    return (
        <section className="services" id="services" aria-label="Our services">
            <img src={servicesBg} alt="Providence Rhode Island skyline" className="services-bg" />
            <div className="container">
                <div className="services-cards">
                    {serviceKeys.map(({ id, Icon, ctaStyle }, index) => (
                        <div key={id} className="service-card">
                            {/* Title header — alternates gold (even) / blue (odd) */}
                            <div className={`card-header ${index % 2 === 0 ? 'card-header--blue' : 'card-header--gold'}`}>
                                <h3>{t(`services.${id}.title`)}</h3>
                            </div>
                            <div className="card-body">
                                <div className="service-icon-circle" aria-hidden="true">
                                    <Icon size={40} color="var(--gold)" />
                                </div>
                                <p>{t(`services.${id}.description`)}</p>
                                <ul className="service-highlights">
                                    <li>{t(`services.${id}.highlight1`)}</li>
                                    <li>{t(`services.${id}.highlight2`)}</li>
                                    <li>{t(`services.${id}.highlight3`)}</li>
                                </ul>
                                <a href="tel:4012701681" className={`btn ${ctaStyle} small`}>
                                    <FaPhone aria-hidden="true" />
                                    {t(`services.${id}.cta`)}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;

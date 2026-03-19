import { useTranslation } from 'react-i18next';
import servicesBg from '../assets/services-bg.png';
import { FaPhone, FaStethoscope, FaHome} from 'react-icons/fa';
import type { IconType } from 'react-icons';

type ServiceKey = 'carreerup' | 'carrerdoc' | 'rn';

const serviceKeys: { id: ServiceKey; Icon: IconType; label: string; ctaStyle: string }[] = [
    { id: 'carreerup', Icon: FaStethoscope, label: 'Stethoscope — CNA Services', ctaStyle: 'primary' },
    { id: 'carrerdoc', Icon: FaHome, label: 'House — Homemaker Services', ctaStyle: 'secondary' },
];

function Carrer() {
    const { t } = useTranslation();

    return (
        <section className="hero-intro" style={{ padding: '60px 0', background: '#fff', textAlign: 'center' }}>
            <div className="container">
                
                 <h2 style={{ fontSize: '32px', color: 'var(--blue)', marginBottom: '15px' }}>{t('introcareercard.heading')}</h2>
                         <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                    {t('introcareercard.headingHighlight')}
                </p>
                    
                {/* Image fills the rounded container — cards sit on top of it */}
                <div className="services-bg-wrap">
                    <img src={servicesBg} alt="Providence Rhode Island skyline" className="services-bg-img" />
                    <div className="services-cards-home">
                        {serviceKeys.map(({ id, Icon, label, ctaStyle }) => (
                            <div key={id} className="service-card-home">
                                <div className="service-card-home-icon" aria-hidden="true">
                                    <Icon size={44} color="var(--gold)" />
                                </div>
                                <h3>{t(`careercard.${id}.title`)}</h3>
                                <p>{t(`careercard.${id}.description`)}</p>
                                <ul className="service-highlights" aria-label={`${label} highlights`}>
                                   
                                    <li>{t(`careercard.${id}.description`)}</li>
                                  
                                </ul>
                                <a href="tel:4012701681" className={`btn ${ctaStyle} small`} aria-label={`${label} — call us`}>
                                    <FaPhone aria-hidden="true" />
                                    {t(`careercard.${id}.cta`)}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carrer;

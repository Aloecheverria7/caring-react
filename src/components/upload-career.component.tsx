import { useTranslation } from 'react-i18next';
import servicesBg from '../assets/services-bg.png';
import { FaStethoscope, FaHome } from 'react-icons/fa';
import type { IconType } from 'react-icons';

type ServiceKey = 'carreerup' | 'carrerdoc' | 'certifications' | 'rn' | 'download';

const serviceKeys: { id: ServiceKey; Icon: IconType; label: string; ctaStyle: string }[] = [
    { id: 'carreerup', Icon: FaStethoscope, label: 'Stethoscope — CNA Services', ctaStyle: 'primary' },
    { id: 'carrerdoc', Icon: FaHome, label: 'House — Homemaker Services', ctaStyle: 'secondary' },
    { id: 'download', Icon: FaHome, label: 'Download Application', ctaStyle: 'secondary' },
];

function Carrer() {
    const { t } = useTranslation();

    return (
        <section className="hero-intro" style={{ padding: '60px 0', background: '#fff', textAlign: 'center' }}>
            <div className="container">

                <h2 style={{ fontSize: '32px', color: 'var(--blue)', marginBottom: '15px' }}>
                    {t('introcareercard.heading')}
                </h2>

                <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                    {t('introcareercard.headingHighlight')}
                </p>

                {/* Image fills the rounded container — cards sit on top of it */}
                <div className="services-bg-wrap">
                    <img src={servicesBg} alt="Providence Rhode Island skyline" className="services-bg-img" />

                    <div className="services-cards-home">
                        {serviceKeys.map(({ id, Icon, ctaStyle }) => {

                            const isCert = id === "certifications";
                            const isDownload = id === "download";
                            return (
                                <div key={id} className="service-card-home">
                                    <div className="service-card-home-icon" aria-hidden="true">
                                        <Icon size={44} color="var(--gold)" />
                                    </div>

                                    <h3>{t(`careercard.${id}.title`)}</h3>
                                    <p>{t(`careercard.${id}.description`)}</p>

                                    {isDownload ? (
                                        <a
                                            href="/docs/application-form.docx"
                                            download
                                            className={`btn ${ctaStyle} small`}
                                        >
                                            {t(`careercard.${id}.cta`)}
                                        </a>
                                    ) : (
                                        <a
                                            href={isCert ? "#careers-certifications" : "#careers-form"}
                                            className={`btn ${ctaStyle} small`}
                                        >
                                            {t(`careercard.${id}.cta`)}
                                        </a>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carrer;

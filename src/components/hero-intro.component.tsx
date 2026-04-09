import { useTranslation } from 'react-i18next';
import katherinePhoto from '../assets/katherine-rosario.png';
import marchelisPhoto from '../assets/marchelis-figueroa.png';

const caregivers: {
    key: string;
    photo?: string;
    initials: string;
    color: string;
    paragraphs: number;
}[] = [
    {
        key: 'katherine',
        photo: katherinePhoto,
        initials: 'KR',
        color: 'var(--gold)',
        paragraphs: 4,
    },
    {
        key: 'marchelis',
        photo: marchelisPhoto,
        initials: 'MF',
        color: 'var(--blue)',
        paragraphs: 4,
    },
];

function HeroIntro() {
    const { t } = useTranslation();
    return (
        <section className="hero-intro">
            <div className="container">
                <h2 className="hero-intro-title">{t('hero.introTitle')}</h2>
                <p className="hero-intro-text">{t('hero.introText')}</p>

                <div className="caregivers-grid">
                    {caregivers.map(({ key, photo, initials, color, paragraphs }) => (
                        <div key={key} className="caregiver-card">
                            <div className="caregiver-photo-col">
                                {photo ? (
                                    <img
                                        src={photo}
                                        alt={t(`caregivers.${key}.name`)}
                                        className="caregiver-photo"
                                    />
                                ) : (
                                    <div className="caregiver-initials" style={{ background: color }}>
                                        {initials}
                                    </div>
                                )}
                            </div>
                            <div className="caregiver-content-col">
                                <h3 className="caregiver-name">{t(`caregivers.${key}.name`)}</h3>
                                <span className="caregiver-role" style={{ background: color }}>
                                    {t(`caregivers.${key}.role`)}
                                </span>
                                <div className="caregiver-bio">
                                    {Array.from({ length: paragraphs }, (_, i) => (
                                        <p key={i}>{t(`caregivers.${key}.bio${i + 1}`)}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroIntro;

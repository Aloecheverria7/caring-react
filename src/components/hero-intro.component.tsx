import { useTranslation } from 'react-i18next';

function HeroIntro() {
    const { t } = useTranslation();
    return (
        <section className="hero-intro" style={{ padding: '60px 0', background: '#fff', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '32px', color: 'var(--blue)', marginBottom: '15px' }}>{t('hero.introTitle', 'Meet Our Caregivers')}</h2>
                <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                    {t('hero.introText', 'We are waiting for the information about the caregiver image to complete this section. Caring Path ensures compassion and trust at every step of your home health journey in Rhode Island.')}
                </p>
            </div>
        </section>
    );
}

export default HeroIntro;

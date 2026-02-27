import { useTranslation } from 'react-i18next';

function HeroIntro() {
    const { t } = useTranslation();
    return (
        <section className="hero-intro" style={{ padding: '60px 0', background: '#fff', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '32px', color: 'var(--blue)', marginBottom: '15px' }}>{t('hero.introTitle')}</h2>
                <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                    {t('hero.introText')}
                </p>
            </div>
        </section>
    );
}

export default HeroIntro;

import { useTranslation } from 'react-i18next';
import aboutPhoto from '../assets/about-photo.png';
import AboutFeatures from '../components/about-features.component';

function AboutPage() {
    const { t } = useTranslation();
    return (
        <>
            {/* SPLIT HERO */}
            <section className="about-hero" aria-labelledby="about-heading">
                <div className="about-hero-text">
                    <h1 id="about-heading">
                        {t('about.heroTitle')} <br />
                        <span>{t('about.heroHighlight')}</span>
                    </h1>
                    <p>{t('about.heroSubtitle')}</p>
                </div>
                <div className="about-hero-img">
                    <img src={aboutPhoto} alt="A caring nurse sitting with an elderly patient in their home" />
                </div>
            </section>

            {/* MISSION & VALUES */}
            <section className="about-mission" aria-label="Our Mission and Values">
                <div className="container">
                    <h2>{t('about.missionTitle')} <span>& {t('about.valuesTitle')}</span></h2>
                    <p className="about-mission-text">{t('about.missionText')}</p>
                </div>
            </section>

            <AboutFeatures />
        </>
    );
}

export default AboutPage;

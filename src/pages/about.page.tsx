import { useTranslation } from 'react-i18next';
import aboutPhoto from '../assets/about-photo.png';
import AboutFeatures from '../components/about-features.component';
import { Heart, Eye, Star } from 'lucide-react';

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

            <section className="about-narrative" aria-label="About Caring Path">
                <div className="container">
                    <p className="about-tagline">{t('about.tagline')}</p>
                    <p>{t('about.para1')}</p>
                    <p className="about-break">{t('about.break1')}</p>
                    <p>{t('about.para2')}</p>
                    <p className="about-mission-stmt">{t('about.missionStatement')}</p>
                    <p className="about-closing">{t('about.closing')}</p>
                </div>
            </section>

            <section className="about-mvv-section" aria-label="Mission, Vision and Values">
                <div className="container">
                    <div className="about-mvv-grid">
                        <div className="about-mvv-card">
                            <Heart className="about-mvv-icon" aria-hidden="true" />
                            <h3>{t('about.missionTitle')}</h3>
                            <p>{t('about.missionText')}</p>
                        </div>
                        <div className="about-mvv-card">
                            <Eye className="about-mvv-icon" aria-hidden="true" />
                            <h3>{t('about.visionTitle')}</h3>
                            <p>{t('about.visionText')}</p>
                        </div>
                        <div className="about-mvv-card about-mvv-card--values">
                            <Star className="about-mvv-icon" aria-hidden="true" />
                            <h3>{t('about.valuesTitle')}</h3>
                            <ul>
                                <li>{t('about.value1')}</li>
                                <li>{t('about.value2')}</li>
                                <li>{t('about.value3')}</li>
                                <li>{t('about.value4')}</li>
                                <li>{t('about.value5')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <AboutFeatures showFeatures={false} showChap={false} />
        </>
    );
}

export default AboutPage;

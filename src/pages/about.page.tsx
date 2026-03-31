import { useTranslation } from 'react-i18next';
import aboutPhoto from '../assets/about-photo.png';
import AboutFeatures from '../components/about-features.component';
import { Heart, Eye, Users } from "lucide-react";

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
<section className="about-mission" aria-label="Mission, Vision and Values">
  <div className="container">

    <div className="about-block">
      <Heart className="about-icon" />
      <h2>{t('about.missionTitle')}</h2>
      <p>{t('about.missionText')}</p>
    </div>
   <div className="about-block">
      <Users className="about-icon" />
      <h2>{t('about.valuesTitle')}</h2>

      <ul>
        <li> {t('about.value1')}</li>
        <li> {t('about.value2')}</li>
        <li> {t('about.value3')}</li>
        <li> {t('about.value4')}</li>
        <li> {t('about.value5')}</li>
      </ul>
    </div>
    <div className="about-block">
      <Eye className="about-icon" />
      <h2>{t('about.visionTitle')}</h2>
      <p>{t('about.visionText')}</p>
    </div>

 

  </div>
</section>


            <AboutFeatures />
        </>
    );
}

export default AboutPage;

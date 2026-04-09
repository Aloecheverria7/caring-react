import { useTranslation } from 'react-i18next';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import heroBg from '../assets/hero-bg.png';

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <img src={heroBg} alt="Caring home health aide helping an elderly patient" className="hero-bg" />
            <div className="hero-overlay">
                <div className="container-fluid">
                    <div className="hero-text">
                        <h1>
                            {t('hero.title')} <br />
                            <span>{t('hero.titleHighlight')}</span> {t('hero.titleSuffix')}
                        </h1>
                        <p>{t('hero.subtitle')}</p>
                        <div className="hero-buttons">
                            <a href="tel:4012701681" className="btn primary">
                                <FaPhone aria-hidden="true" />
                                {t('hero.ctaGetStarted')}
                            </a>
                            <a href="#services" className="btn secondary">{t('hero.ctaServices')}</a>
                        </div>
                        <div className="hero-phones">
                            <a href="tel:4012701681" aria-label="Call line 1 at 401-270-1681">
                                <FaPhone aria-hidden="true" /> 401-270-1681
                            </a>
                            <a href="tel:4015377196" aria-label="Call line 2 at 401-537-7196">
                                <FaPhone aria-hidden="true" /> 401-537-7196
                            </a>
                            <a href="https://wa.me/14012557641" aria-label="WhatsApp 401-255-7641" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp aria-hidden="true" /> WhatsApp: 401-255-7641
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
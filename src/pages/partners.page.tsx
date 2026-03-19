import { useTranslation } from 'react-i18next';
import { MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import partnerLogo from '../assets/avangelinas.png';

function PartnersPage() {
    const { t } = useTranslation();
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>{t('partners.heroTitle')}</h1>
                    <p>{t('partners.heroSubtitle')}</p>
                </div>
            </section>

            <section className="page-content">
                <div className="container partners-content">

                    {/* Core Bridge Alliance */}

                    <div className="partner-card-block partner-card-block--stacked">
                        <h3 className="partner-card-inner-title">
                            {t('partners.p1.name')} <span className="partner-tagline">— {t('partners.p1.tagline')}</span>
                        </h3>
                        <div className='partner-card-row'>
                            <div className="partner-logo-box">
                                <span>CORE BRIDGE<br />ALLIANCE</span>
                            </div>
                            <div className="partner-card-content">
                                <p>{t('partners.p1.desc1')}</p>
                                <p>{t('partners.p1.desc2')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Avangelina's Cleaning Services */}
                    <div className="partner-card-block partner-card-block--stacked">
                        <h3 className="partner-card-inner-title">
                            {t('partners.p2.name')} <span className="partner-tagline">— {t('partners.p2.tagline')}</span>
                        </h3>
                        <div className="partner-card-row">
                            <div className="partner-card-content">
                                <p>{t('partners.p2.desc1')}</p>
                                <p>{t('partners.p2.desc2')}</p>
                            </div>
                            <div className="partner-logo-box">
                                  <img src={partnerLogo} alt="Avangelina's Cleaning Services logo" />
                            </div>
                        </div>
                    </div>

                    {/* Commitment */}
                    <p className="partner-commitment">
                        {t('partners.commitment')}
                    </p>

                    {/* CTAs */}
                    <div className="partner-cta-row">
                        <a href="tel:+14012701681" className="btn primary">
                            <MdPhone /> {t('partners.ctaCall')}
                        </a>
                        <Link to="/contact" className="btn secondary">
                            {t('partners.ctaConsult')}
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}

export default PartnersPage;

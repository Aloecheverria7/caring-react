import { useTranslation } from 'react-i18next';
import Services from '../components/services.component';

function ServicesPage() {
    const { t } = useTranslation();
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1>{t('servicesPage.heroTitle')}</h1>
                    <p>{t('servicesPage.heroSubtitle')}</p>
                </div>
            </section>
            <Services />
        </>
    );
}

export default ServicesPage;

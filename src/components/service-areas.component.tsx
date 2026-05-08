import { useTranslation } from 'react-i18next';

const LOCATIONS = [
    'Cranston',
    'Providence',
    'Warwick',
    'Johnston',
    'North Providence',
    'East Providence',
    'West Warwick',
];

function ServiceAreas() {
    const { t } = useTranslation();
    return (
        <section className="service-areas-banner" aria-label={t('serviceAreas.title')}>
            <div className="container">
                <h2 className="service-areas-title">{t('serviceAreas.title')}</h2>
                <p className="service-areas-locations">
                    {LOCATIONS.map((city, i) => (
                        <span key={city}>
                            {city}
                            {i < LOCATIONS.length - 1 && (
                                <span className="service-areas-sep" aria-hidden="true">|</span>
                            )}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}

export default ServiceAreas;

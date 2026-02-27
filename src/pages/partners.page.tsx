import { useTranslation } from 'react-i18next';
import { FaHeartbeat, FaHandsHelping } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Partner {
    id: number;
    icon: IconType;
    nameKey: string;
    descKey: string;
}

const partners: Partner[] = [
    { id: 1, icon: FaHeartbeat, nameKey: 'partners.p1.name', descKey: 'partners.p1.desc' },
    { id: 2, icon: FaHandsHelping, nameKey: 'partners.p2.name', descKey: 'partners.p2.desc' },
];

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
                <div className="container">
                    <div className="partners-grid">
                        {partners.map(({ id, icon: Icon, nameKey, descKey }) => (
                            <div key={id} className="partner-card">
                                <span className="partner-icon"><Icon /></span>
                                <h3>{t(nameKey)}</h3>
                                <p>{t(descKey)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PartnersPage;

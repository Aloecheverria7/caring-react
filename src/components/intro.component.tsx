import { useTranslation } from 'react-i18next';

function Intro() {
    const { t } = useTranslation();

    return (
        <section className="intro">
            <div className="container">
                <h2>
                    {t('intro.heading')} <span>{t('intro.headingHighlight')}</span>
                </h2>
                <p>{t('intro.description')}</p>
            </div>
        </section>
    );
}

export default Intro;

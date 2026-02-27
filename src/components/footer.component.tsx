import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.webp';
import { FaMapMarkerAlt, FaPhone, FaFax } from 'react-icons/fa';

function Footer() {
    const { t } = useTranslation();

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? 'footer-link footer-link-active' : 'footer-link';

    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer-content">
                <div className="footer-brand">
                    <img src={logo} alt="Caring Path Home Health Services logo" className="footer-logo" />
                    <p className="footer-about">{t('footer.aboutText')}</p>
                </div>

                <div className="footer-links-section">
                    <h3>{t('footer.quickLinks')}</h3>
                    <nav aria-label="Footer navigation">
                        <NavLink to="/" end className={linkClass}>{t('navbar.home')}</NavLink>
                        <NavLink to="/about" className={linkClass}>{t('navbar.aboutUs')}</NavLink>
                        <NavLink to="/services" className={linkClass}>{t('navbar.services')}</NavLink>
                        <NavLink to="/partners" className={linkClass}>{t('navbar.partners')}</NavLink>
                        <NavLink to="/careers" className={linkClass}>{t('navbar.careers')}</NavLink>
                        <NavLink to="/contact" className={linkClass}>{t('navbar.contact')}</NavLink>
                    </nav>
                </div>

                <div className="footer-contact-section">
                    <h3>{t('navbar.contact')}</h3>
                    <div className="footer-contact-item">
                        <FaMapMarkerAlt aria-hidden="true" className="footer-icon" />
                        <div>
                            <p>Caring Path Home Health LLC</p>
                            <p>135 Atwood Ave</p>
                            <p>Second Floor Suite 2</p>
                            <p>Cranston, RI 02920</p>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <FaPhone aria-hidden="true" className="footer-icon" />
                        <div>
                            <p><a href="tel:4012701681">Tel: 401-270-1681</a></p>
                            <p><a href="tel:4015377196">Tel: 401-537-7196</a></p>
                            <p><a href="tel:4013475924">Cell: 401-347-5924</a></p>
                        </div>
                    </div>

                    <div className="footer-contact-item">
                        <FaFax aria-hidden="true" className="footer-icon" />
                        <p>Fax: 401-270-1810</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Caring Path Home Health LLC. {t('footer.rightsReserved')}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

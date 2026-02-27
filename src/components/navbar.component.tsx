import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPhone } from 'react-icons/fa';
import logo from './../assets/logo.webp';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isSpanish = i18n.language.startsWith('es');
    const toggleLanguage = () => i18n.changeLanguage(isSpanish ? 'en' : 'es');

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? 'nav-active' : '';

    const close = () => setMenuOpen(false);

    return (
        <header className="header" role="banner">
            <div className="header-topbar" aria-hidden="true" />
            <div className="container header-content">
                <div className="logo">
                    <NavLink to="/" onClick={close} aria-label="Caring Path Home Health Services — go to homepage">
                        <img src={logo} alt="Caring Path Home Health Services logo" />
                    </NavLink>
                </div>

                {/* Hamburger — aria-expanded reflects open state */}
                <button
                    className={`nav-burger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="primary-nav"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>

                <nav
                    id="primary-nav"
                    className={`nav ${menuOpen ? 'nav--open' : ''}`}
                    aria-label="Primary navigation"
                >
                    <NavLink to="/" end className={linkClass} onClick={close}>{t('navbar.home')}</NavLink>
                    <NavLink to="/about" className={linkClass} onClick={close}>{t('navbar.aboutUs')}</NavLink>
                    <NavLink to="/services" className={linkClass} onClick={close}>{t('navbar.services')}</NavLink>
                    <NavLink to="/partners" className={linkClass} onClick={close}>{t('navbar.partners')}</NavLink>
                    <NavLink to="/careers" className={linkClass} onClick={close}>{t('navbar.careers')}</NavLink>
                    <NavLink to="/contact" className={linkClass} onClick={close}>{t('navbar.contact')}</NavLink>
                </nav>

                <div className="header-right">
                    <div className="header-cta">
                        <span className="cta-label-desktop">{t('navbar.callUs')}</span>
                        <a href="tel:4012701681" aria-label="Call us at 4 0 1, 2 7 0, 1 6 8 1">
                            <FaPhone className="cta-icon-mobile" />
                            <span className="cta-number-desktop">(401) 270-1681</span>
                        </a>
                    </div>
                    <button
                        className="lang-toggle"
                        onClick={toggleLanguage}
                        aria-label={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
                    >
                        {isSpanish ? 'ES' : 'EN'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
import { Outlet } from 'react-router-dom';
import Navbar from './navbar.component';
import Cta from './cta.component';
import Footer from './footer.component';

function Layout() {
    return (
        <>
            {/* Skip to main content — first focusable element for keyboard/screen reader users */}
            <a href="#main-content" className="skip-nav">
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
                <Outlet />
            </main>
            <Cta />
            <Footer />
        </>
    );
}

export default Layout;

import Hero from '../components/hero.component';
import Intro from '../components/intro.component';
import ServicesHome from '../components/services-home.component';
import AboutFeatures from '../components/about-features.component';
import HeroIntro from '../components/hero-intro.component';
import ServiceAreas from '../components/service-areas.component';

function HomePage() {
    return (
        <>
            <Hero />
            <Intro />
            <HeroIntro />
            <ServiceAreas />
            <ServicesHome />
            <AboutFeatures />
        </>
    );
}

export default HomePage;
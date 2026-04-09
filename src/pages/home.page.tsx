import Hero from '../components/hero.component';
import Intro from '../components/intro.component';
import ServicesHome from '../components/services-home.component';
import AboutFeatures from '../components/about-features.component';
import HeroIntro from '../components/hero-intro.component';

function HomePage() {
    return (
        <>
            <Hero />
            <Intro />
            <HeroIntro />
            <ServicesHome />
            <AboutFeatures />
        </>
    );
}

export default HomePage;
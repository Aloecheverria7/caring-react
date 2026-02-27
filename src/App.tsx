import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout.component';
import HomePage from './pages/home.page';
import AboutPage from './pages/about.page';
import ServicesPage from './pages/services.page';
import PartnersPage from './pages/partners.page';
import CareersPage from './pages/careers.page';
import ContactPage from './pages/contact.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

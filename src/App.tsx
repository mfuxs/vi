import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import InfluencerDetail from './pages/InfluencerDetail';
import UnitPage from './pages/UnitPage';
import NotFound from './pages/NotFound';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import { LanguageProvider } from './context/LanguageContext';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:id" element={<InfluencerDetail />} />
                    <Route path="/handwerk" element={<UnitPage unitKey="handwerk" categoryFilter="Handwerk & DIY" />} />
                    <Route path="/technik" element={<UnitPage unitKey="technik" categoryFilter="Tech" />} />
                    <Route path="/contact" element={<Contact />} />            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Cases from './pages/Cases';
import Contact from './pages/Contact';
import InfluencerDetail from './pages/InfluencerDetail';
import NotFound from './pages/NotFound';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const basename = process.env.GITHUB_ACTIONS === 'true' ? '/vi' : '';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<InfluencerDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const isActive = (path: string) => location.pathname === path ? 'text-black font-semibold' : 'text-gray-500 hover:text-black transition-colors';

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter uppercase">
            Vertical Influence <span className="text-zinc-400 font-normal normal-case text-sm ml-2">by inSocial</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
            <Link to="/" className={isActive('/')}>{t('nav_home')}</Link>
            <Link to="/portfolio" className={isActive('/portfolio')}>{t('nav_portfolio')}</Link>
            <Link to="/cases" className={isActive('/cases')}>{t('nav_cases')}</Link>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-zinc-200 pl-8 mr-2">
              <button 
                onClick={() => setLanguage('de')} 
                className={`transition-colors ${language === 'de' ? 'text-black font-bold' : 'text-zinc-400'}`}
              >DE</button>
              <span className="text-zinc-300">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`transition-colors ${language === 'en' ? 'text-black font-bold' : 'text-zinc-400'}`}
              >EN</button>
            </div>

            <Link to="/contact" className="bg-black text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-all">
              {t('nav_contact')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col space-y-6 text-center shadow-lg">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t('nav_home')}</Link>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t('nav_portfolio')}</Link>
            <Link to="/cases" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t('nav_cases')}</Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex justify-center space-x-4 py-2 border-y border-zinc-50">
              <button onClick={() => { setLanguage('de'); setIsMenuOpen(false); }} className={language === 'de' ? 'font-bold' : ''}>Deutsch</button>
              <button onClick={() => { setLanguage('en'); setIsMenuOpen(false); }} className={language === 'en' ? 'font-bold' : ''}>English</button>
            </div>

            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-black text-white px-6 py-3 rounded-full mx-auto w-max">
              {t('nav_get_in_touch')}
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Vertical Influence</h3>
              <p className="text-zinc-400 max-w-xs">
                {t('footer_description')}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-zinc-500">{t('footer_navigation')}</h3>
              <ul className="space-y-3">
                <li><Link to="/portfolio" className="hover:text-zinc-300 transition-colors">{t('nav_portfolio')}</Link></li>
                <li><Link to="/cases" className="hover:text-zinc-300 transition-colors">{t('nav_cases')}</Link></li>
                <li><Link to="/contact" className="hover:text-zinc-300 transition-colors">{t('nav_contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-zinc-500">{t('footer_legal')}</h3>
              <ul className="space-y-3">
                <li><Link to="/impressum" className="hover:text-zinc-300 transition-colors">{t('legal_impressum')}</Link></li>
                <li><Link to="/datenschutz" className="hover:text-zinc-300 transition-colors">{t('legal_datenschutz')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-zinc-500">{t('footer_connect')}</h3>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/vertical.influence/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors"><Instagram size={24} /></a>
                <a href="https://www.linkedin.com/showcase/vi-vertical-influence/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:hello@vertical-influence.de" className="hover:text-zinc-300 transition-colors"><Mail size={24} /></a>
              </div>
              <p className="mt-8 text-zinc-500 text-xs">
                © {new Date().getFullYear()} inSocial Media GmbH. {t('footer_rights')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

export default Layout;

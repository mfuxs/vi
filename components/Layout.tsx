import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
            <Link to="/cases" className={isActive('/cases')}>Cases</Link>
            <Link to="/contact" className="bg-black text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-all">
              Contact
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
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</Link>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Portfolio</Link>
            <Link to="/cases" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Cases</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-black text-white px-6 py-3 rounded-full mx-auto w-max">
              Get in Touch
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Vertical Influence</h3>
              <p className="text-zinc-400 max-w-xs">
                Premium Influencer Management für Marken, die den Unterschied machen wollen. 
                Data-driven. Authentic. Vertical.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-zinc-500">Navigation</h3>
              <ul className="space-y-3">
                <li><Link to="/portfolio" className="hover:text-zinc-300 transition-colors">Talents</Link></li>
                <li><Link to="/cases" className="hover:text-zinc-300 transition-colors">Success Stories</Link></li>
                <li><Link to="/contact" className="hover:text-zinc-300 transition-colors">Agentur</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 text-zinc-500">Connect</h3>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-zinc-300 transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-zinc-300 transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:hello@vertical-influence.de" className="hover:text-zinc-300 transition-colors"><Mail size={24} /></a>
              </div>
              <p className="mt-8 text-zinc-500 text-xs">
                © {new Date().getFullYear()} Vertical Influence by inSocial. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { influencers } from '../data';
import { Instagram, Youtube, Linkedin, Search } from 'lucide-react';
import { Influencer } from '../types';
import SEO from '../components/SEO';
import { getAssetPath } from '../utils/paths';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Derive categories dynamically
  const uniqueCategories = Array.from(new Set(influencers.map(i => i.category)));
  const categories = ['All', ...uniqueCategories];

  const filteredInfluencers = influencers.filter(i => {
    const matchesCategory = activeCategory === 'All' || i.category === activeCategory;
    const matchesSearch = i.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         i.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         i.niche.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <SEO
        title={t('seo_portfolio_title')}
        description={t('seo_portfolio_desc')}
      />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('portfolio_title')}</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-10">
            {t('portfolio_subtitle')}
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder={language === 'en' ? 'Search creators...' : 'Creator suchen...'}
              className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:scale-105'
                  }`}
              >
                {category === 'All' ? t('portfolio_filter_all') : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredInfluencers.map((influencer) => (
              <motion.div
                key={influencer.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <InfluencerCard data={influencer} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredInfluencers.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-zinc-400"
          >
            <p>{t('portfolio_empty_state')}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const InfluencerCard: React.FC<{ data: Influencer }> = ({ data }) => {
  const { t } = useLanguage();
  return (
    <Link
      to={`/portfolio/${data.id}`}
      className="group relative bg-white border border-zinc-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-[4/5] overflow-hidden bg-zinc-100 relative">
        <img
          src={getAssetPath(data.imageUrl)}
          alt={data.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black shadow-sm">
          {data.category}
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-zinc-100">
            {t('portfolio_view_profile')}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{data.name}</h3>
            <p className="text-zinc-500 text-sm font-medium">{data.handle}</p>
          </div>
        </div>

        <p className="text-zinc-500 text-sm line-clamp-2 mt-3 mb-6 flex-grow">
          {data.bio}
        </p>

        <div className="border-t border-zinc-100 pt-4 mt-auto">
          <div>
            <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">{t('portfolio_total_followers')}</p>
            <p className="font-bold text-lg">{data.followers}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-4 pt-2">
          {data.platforms.includes('Instagram') && <Instagram size={18} className="text-zinc-400 hover:text-black transition-colors" />}
          {data.platforms.includes('YouTube') && <Youtube size={18} className="text-zinc-400 hover:text-black transition-colors" />}
          {data.platforms.includes('TikTok') && (
            <svg className="w-[18px] h-[18px] fill-zinc-400 hover:fill-black transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
          )}
          {data.platforms.includes('Linkedin') && <Linkedin size={18} className="text-zinc-400 hover:text-black transition-colors" />}
        </div>
      </div>
    </Link>
  );
};

export default Portfolio;

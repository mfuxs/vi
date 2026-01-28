import React from 'react';
import { influencers } from '../data';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import { Influencer } from '../types';
import SEO from '../components/SEO';
import { getAssetPath } from '../utils/paths';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface UnitPageProps {
  unitKey: 'handwerk' | 'technik';
  categoryFilter: string;
}

const UnitPage: React.FC<UnitPageProps> = ({ unitKey, categoryFilter }) => {
  const { t } = useLanguage();
  
  // Filter creators for this specific unit
  const filteredInfluencers = influencers.filter(i => i.category === categoryFilter);

  return (
    <div className="w-full min-h-screen bg-white">
      <SEO
        title={t(`unit_${unitKey}_name`)}
        description={t(`unit_${unitKey}_desc`)}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Unit Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-widest uppercase mb-6 text-zinc-500">
            {t(`unit_${unitKey}_name`)}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            {t(`unit_${unitKey}_claim`)}
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed font-light">
            {t(`unit_${unitKey}_desc`)}
          </p>
        </motion.div>

        {/* Creator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInfluencers.map((influencer, idx) => (
            <motion.div
              key={influencer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <InfluencerCard data={influencer} />
            </motion.div>
          ))}
        </div>

        {filteredInfluencers.length === 0 && (
          <div className="text-center py-20 text-zinc-400">
            <p>{t('portfolio_empty_state')}</p>
          </div>
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
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {t('portfolio_view_profile')}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{data.name}</h3>
        <p className="text-zinc-500 text-sm font-medium">{data.handle}</p>
        <p className="text-zinc-500 text-sm mt-3 line-clamp-2">{data.bio}</p>
      </div>
    </Link>
  );
};

export default UnitPage;

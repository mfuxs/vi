import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, Star, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: t('about_value_1_title'), text: t('about_value_1_text') },
    { icon: Star, title: t('about_value_2_title'), text: t('about_value_2_text') },
    { icon: Zap, title: t('about_value_3_title'), text: t('about_value_3_text') },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <SEO
        title={t('nav_about')}
        description={t('about_hero_text')}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            {t('about_hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light">
            {t('about_hero_text')}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('about_values_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-black">
                  <val.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-zinc-600">
                  {val.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-3xl p-12 md:p-24 text-center overflow-hidden relative"
        >
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Team Background" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('about_team_title')}</h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
              {t('about_team_text')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

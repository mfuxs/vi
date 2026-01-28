import React from 'react';
import { Link } from 'react-router-dom';
import { influencers, caseStudies } from '../data'; // Added 'influencers' import
import { ArrowRight, TrendingUp, Users, Award, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { getAssetPath } from '../utils/paths';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const featuredInfluencers = influencers.slice(0, 3);
  const featuredCases = caseStudies.slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full">
      <SEO
        title={t('seo_home_title')}
        description={t('seo_home_desc')}
      />
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-zinc-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Abstract decorative background */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-widest uppercase mb-6 text-zinc-500">
            {t('hero_subtitle')}
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            {t('hero_title_1')}<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900">{t('hero_title_2')}</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10 font-light">
            {t('hero_description')}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/portfolio" className="group bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center shadow-lg hover:shadow-xl">
              {t('cta_discover')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: Users, val: "50+", label: t('section_stats_exclusive') },
            { icon: TrendingUp, val: "150M+", label: t('section_stats_reach') },
            { icon: Award, val: "200+", label: t('section_stats_campaigns') }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-zinc-900">
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.val}</h3>
              <p className="text-zinc-500 uppercase text-sm tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Short About */}
      <section className="py-24 bg-zinc-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">{t('section_about_title')}</h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            {t('section_about_text')}
          </p>
        </motion.div>
      </section>

      {/* Featured Talent */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('section_talents_title')}</h2>
              <p className="text-zinc-500 max-w-xl">{t('section_talents_subtitle')}</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center text-sm font-semibold hover:underline">
              {t('cta_discover_talent')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInfluencers.map((influencer, idx) => (
              <motion.div
                key={influencer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/portfolio/${influencer.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100 mb-4 shadow-sm">
                    <img src={getAssetPath(influencer.imageUrl)} alt={influencer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-zinc-600 transition-colors">{influencer.name}</h3>
                  <p className="text-sm text-zinc-500">{influencer.niche}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases 
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('section_recent_work_title')}</h2>
              <p className="text-zinc-500 max-w-xl">{t('section_recent_work_subtitle')}</p>
            </div>
            <Link to="/cases" className="hidden md:flex items-center text-sm font-semibold hover:underline">
              {t('cta_view_cases')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredCases.map(study => (
              <Link to="/cases" key={study.id} className="group block">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-200 mb-6 shadow-md">
                  <img src={getAssetPath(study.imageUrl)} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{study.client}</span>
                  <div className="h-px w-8 bg-zinc-200"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-600 transition-colors">{study.title}</h3>
                <p className="text-zinc-600 line-clamp-2">{study.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link to="/cases" className="flex items-center text-sm font-semibold hover:underline">
              {t('cta_view_cases')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* Contact CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('section_cta_reach_title')}</h2>
          <p className="text-xl text-zinc-600 mb-10">
            {t('section_cta_reach_text')}
          </p>
          <a
            href={`mailto:${t('contact_email')}`}
            className="inline-flex items-center justify-center space-x-3 text-2xl md:text-3xl font-bold hover:text-zinc-600 transition-colors border-b-2 border-black hover:border-zinc-600 pb-1"
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8" />
            <span>{t('contact_email')}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const email = t('contact_email');

  return (
    <div className="w-full min-h-[80vh] bg-zinc-50 flex items-center justify-center">
      <SEO
        title={t('seo_contact_title')}
        description={t('seo_contact_desc')}
      />
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          {t('contact_hero_title')}
        </h1>
        <p className="text-xl text-zinc-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          {t('contact_hero_text')}
        </p>

        <a 
          href={`mailto:${email}`} 
          className="inline-flex items-center justify-center text-3xl md:text-5xl font-bold text-black hover:text-zinc-600 transition-colors"
        >
          <Mail className="w-8 h-8 md:w-12 md:h-12 mr-4 md:mr-6" />
          {email}
        </a>
      </div>
    </div>
  );
};

export default Contact;

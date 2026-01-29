import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Datenschutz: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-white">
      <SEO title="Datenschutz" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-zinc max-w-none">
          <p className="whitespace-pre-line text-lg text-zinc-600">
            {t('legal_datenschutz_text') || 'Bitte Datenschutztext in Google Sheets (legal_datenschutz_text) hinterlegen.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
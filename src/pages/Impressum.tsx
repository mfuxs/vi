import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Impressum: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-white">
      <SEO title="Impressum" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        <div className="prose prose-zinc max-w-none">
          <p className="whitespace-pre-line text-lg text-zinc-600">
            {t('legal_impressum_text') || 'Bitte Impressumstext in Google Sheets (legal_impressum_text) hinterlegen.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
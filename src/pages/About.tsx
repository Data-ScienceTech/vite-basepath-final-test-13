
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('about.title')}</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              {t('about.intro')}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-700 mb-6">
              {t('about.mission.description')}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.values.title')}</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>{t('about.values.innovation')}</li>
              <li>{t('about.values.reliability')}</li>
              <li>{t('about.values.customer_success')}</li>
              <li>{t('about.values.transparency')}</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.why_choose.title')}</h2>
            <p className="text-gray-700">
              {t('about.why_choose.description')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

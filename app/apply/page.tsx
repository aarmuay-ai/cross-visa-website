'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';
import { useLanguage } from '@/context/LanguageContext';

export default function ApplyPage() {
  const { t } = useLanguage();
  const ap = t.applyPage;

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section
          className="pt-28 pb-16"
          style={{ background: 'linear-gradient(135deg, #1a56db 0%, #1e3a8a 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{ap.title}</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">{ap.subtitle}</p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  const sp = t.servicesPage;

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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{sp.title}</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">{sp.subtitle}</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sp.services.map((service, i) => (
                <ServiceCard
                  key={i}
                  flag={service.flag}
                  country={service.country}
                  type={service.type}
                  processing={service.processing}
                  price={service.price}
                  documents={service.documents}
                />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

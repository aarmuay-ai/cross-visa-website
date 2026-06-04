'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-20" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.servicesPreview.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t.servicesPreview.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {t.servicesPreview.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.country.split(' ')[0]}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {item.country.slice(item.country.indexOf(' ') + 1)}
              </h3>
              <p className="text-sm font-medium mb-4" style={{ color: '#1a56db' }}>
                {item.type}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: '#1a56db' }}
              >
                {t.servicesPreview.applyBtn}
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-colors"
            style={{ backgroundColor: '#1a56db' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e429f')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a56db')}
          >
            {t.servicesPreview.viewAll}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

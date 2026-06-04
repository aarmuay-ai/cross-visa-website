'use client';

import { Award, Zap, Users, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const icons = [Award, Zap, Users, Globe];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.whyUs.title}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t.whyUs.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whyUs.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#f0f4ff' }}
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: '#1a56db' }}
                >
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CTABanner() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a56db 0%, #1e3a8a 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {t.cta.title}
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-blue-900 bg-white hover:bg-blue-50 transition-colors shadow-xl text-lg"
        >
          {t.cta.btn}
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-screen flex items-center pt-16"
      style={{ background: 'linear-gradient(135deg, #1a56db 0%, #1e429f 50%, #1e3a8a 100%)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-8">
              <CheckCircle size={14} className="text-green-400" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t.hero.tagline}
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-lg">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-blue-900 bg-white hover:bg-blue-50 transition-colors shadow-lg"
              >
                {t.hero.applyBtn}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors"
              >
                {t.hero.servicesBtn}
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              {[
                { num: '10+', label: 'ปีประสบการณ์ / Years' },
                { num: '1,000+', label: 'ลูกค้า / Clients' },
                { num: '98%', label: 'สำเร็จ / Success Rate' },
              ].map((stat) => (
                <div key={stat.num}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.num}</div>
                  <div className="text-xs text-blue-200 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-white font-semibold text-lg mb-6">Popular Destinations</h3>
              <div className="space-y-4">
                {[
                  { flag: '🇯🇵', country: 'Japan', time: '7–14 days', status: 'Fast' },
                  { flag: '🇬🇧', country: 'UK', time: '15–21 days', status: 'Standard' },
                  { flag: '🇦🇺', country: 'Australia', time: '21–30 days', status: 'Standard' },
                  { flag: '🇸🇬', country: 'Singapore', time: '3–5 days', status: 'Express' },
                  { flag: '🇰🇷', country: 'South Korea', time: '5–7 days', status: 'Fast' },
                ].map((item) => (
                  <div
                    key={item.country}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.flag}</span>
                      <div>
                        <div className="text-white font-medium text-sm">{item.country}</div>
                        <div className="text-blue-200 text-xs">{item.time}</div>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        item.status === 'Express'
                          ? 'bg-green-400/20 text-green-300'
                          : item.status === 'Fast'
                          ? 'bg-yellow-400/20 text-yellow-300'
                          : 'bg-blue-400/20 text-blue-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1440 20 1080 0 720 0C360 0 0 20 0 20V60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

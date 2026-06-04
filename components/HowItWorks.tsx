'use client';

import { ClipboardList, FileCheck, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const stepIcons = [ClipboardList, FileCheck, Send, CheckCircle2];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t.howItWorks.subtitle}</p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-blue-100" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {t.howItWorks.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={i} className="relative text-center">
                  {/* Step number + icon */}
                  <div className="relative inline-block mb-5">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg"
                      style={{ backgroundColor: '#1a56db' }}
                    >
                      <Icon size={36} className="text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md" style={{ backgroundColor: '#f59e0b' }}>
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

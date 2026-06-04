'use client';

import Link from 'next/link';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  recommended,
}: PricingCardProps) {
  const { t } = useLanguage();
  const pp = t.pricingPage;

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
        recommended
          ? 'shadow-2xl scale-105 border-2'
          : 'border border-gray-100 shadow-sm hover:shadow-md'
      }`}
      style={
        recommended
          ? { backgroundColor: '#1a56db', borderColor: '#1a56db' }
          : { backgroundColor: '#ffffff' }
      }
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg" style={{ backgroundColor: '#f59e0b' }}>
            <Star size={12} className="fill-white" />
            {pp.recommended}
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3
          className={`text-xl font-bold mb-2 ${recommended ? 'text-white' : 'text-gray-900'}`}
        >
          {name}
        </h3>
        <p className={`text-sm mb-6 ${recommended ? 'text-blue-100' : 'text-gray-500'}`}>
          {description}
        </p>
        <div
          className={`text-4xl font-bold ${recommended ? 'text-white' : 'text-gray-900'}`}
        >
          {price}
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                recommended ? 'bg-white/20' : 'bg-blue-50'
              }`}
            >
              <Check
                size={12}
                className={recommended ? 'text-white' : ''}
                style={recommended ? {} : { color: '#1a56db' }}
              />
            </div>
            <span
              className={`text-sm ${recommended ? 'text-blue-100' : 'text-gray-600'}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/apply"
        className={`block text-center py-3.5 rounded-xl font-semibold transition-colors ${
          recommended
            ? 'bg-white text-blue-700 hover:bg-blue-50'
            : 'text-white hover:opacity-90'
        }`}
        style={recommended ? {} : { backgroundColor: '#1a56db' }}
      >
        {pp.selectBtn}
      </Link>
    </div>
  );
}

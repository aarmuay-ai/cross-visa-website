'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceCardProps {
  flag: string;
  country: string;
  type: string;
  processing: string;
  price: string;
  documents: string[];
}

export default function ServiceCard({
  flag,
  country,
  type,
  processing,
  price,
  documents,
}: ServiceCardProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const sp = t.servicesPage;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-4xl mb-3 block">{flag}</span>
            <h3 className="text-xl font-bold text-gray-900">{country}</h3>
            <p className="text-sm font-medium mt-1" style={{ color: '#1a56db' }}>
              {type}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex items-start gap-2 p-3 rounded-xl" style={{ backgroundColor: '#f0f4ff' }}>
            <Clock size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#1a56db' }} />
            <div>
              <div className="text-xs text-gray-500 mb-0.5">{sp.processingTime}</div>
              <div className="text-sm font-semibold text-gray-800">{processing}</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 rounded-xl" style={{ backgroundColor: '#f0f4ff' }}>
            <DollarSign size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#1a56db' }} />
            <div>
              <div className="text-xs text-gray-500 mb-0.5">{sp.startingPrice}</div>
              <div className="text-sm font-semibold text-gray-800">{price}</div>
            </div>
          </div>
        </div>

        {/* Collapsible documents */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          <span>{sp.documents}</span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {open && (
          <ul className="mt-2 space-y-1.5 pb-2">
            {documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#1a56db' }} />
                {doc}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="px-6 pb-6">
        <Link
          href="/apply"
          className="block w-full text-center py-3 rounded-xl font-semibold text-white text-sm transition-colors"
          style={{ backgroundColor: '#1a56db' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e429f')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a56db')}
        >
          {sp.applyBtn}
        </Link>
      </div>
    </div>
  );
}

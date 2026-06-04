'use client';

import Link from 'next/link';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/pricing', label: t.nav.pricing },
    { href: '/apply', label: t.nav.apply },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#1a56db' }}
              >
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <span className="font-bold text-white text-sm leading-tight block">Cross Visa</span>
                <span className="text-xs text-gray-400 leading-tight block">Consulting</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.contactInfo}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail size={15} className="text-blue-400 flex-shrink-0" />
                <span>crossvisa.info@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                <span>+66 90 799 5449</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                <span>+66 89 492 3959</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <MessageCircle size={15} className="text-blue-400 flex-shrink-0" />
                <span>Line: @crossvisa</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Clock size={15} className="text-blue-400 flex-shrink-0" />
                <span>{t.footer.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

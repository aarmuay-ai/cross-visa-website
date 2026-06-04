'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const cp = t.contactPage;
  const info = cp.info;

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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{cp.title}</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">{cp.subtitle}</p>
          </div>
        </section>

        {/* Two-column layout */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Form */}
              <ContactForm />

              {/* Right: Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">{info.title}</h2>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#f0f4ff' }}
                      >
                        <Mail size={18} style={{ color: '#1a56db' }} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Email</div>
                        <a
                          href={`mailto:${info.email}`}
                          className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                        >
                          {info.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#f0f4ff' }}
                      >
                        <Phone size={18} style={{ color: '#1a56db' }} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Phone</div>
                        <a
                          href={`tel:${info.phone1.replace(/\s/g, '')}`}
                          className="block text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                        >
                          {info.phone1}
                        </a>
                        <a
                          href={`tel:${info.phone2.replace(/\s/g, '')}`}
                          className="block text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                        >
                          {info.phone2}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#f0f4ff' }}
                      >
                        <MessageCircle size={18} style={{ color: '#1a56db' }} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Line</div>
                        <span className="text-sm font-medium text-gray-800">{info.line}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#f0f4ff' }}
                      >
                        <Clock size={18} style={{ color: '#1a56db' }} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Office Hours</div>
                        <span className="text-sm font-medium text-gray-800">{info.hours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#f0f4ff' }}
                      >
                        <MapPin size={18} style={{ color: '#1a56db' }} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">Address</div>
                        <span className="text-sm font-medium text-gray-800">{info.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5448788840456!2d100.5610!3d13.7450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzMyLjAiTiAxMDDCsDMzJzM5LjYiRQ!5e0!3m2!1sen!2sth!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

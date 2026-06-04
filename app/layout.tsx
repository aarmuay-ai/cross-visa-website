import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Cross Visa Consulting — Your Trusted Visa Partner',
  description:
    'Professional visa consulting services for Japan, UK, USA, Australia, and more. Fast approval, expert team, full service.',
  keywords: 'visa consulting, Thailand, Japan visa, UK visa, USA visa, Australia visa, วีซ่า',
  openGraph: {
    title: 'Cross Visa Consulting — Your Trusted Visa Partner',
    description: 'Professional visa consulting services. Fast approval, expert team, full service.',
    type: 'website',
    locale: 'th_TH',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased bg-white text-gray-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

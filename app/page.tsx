import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesPreview from '@/components/ServicesPreview';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Cross Visa Consulting — Your Trusted Visa Partner',
  description:
    'Professional bilingual visa consulting services. Japan, UK, USA, Australia and more. Fast approval, expert team.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ServicesPreview />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

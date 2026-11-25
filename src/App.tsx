import { AboutSection } from './components/AboutSection';
import { AudienceSection } from './components/AudienceSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-50 focus:rounded-lg focus:bg-[#1D4ED8] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        דלג לתוכן הראשי
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <AudienceSection />
        <HowItWorksSection />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

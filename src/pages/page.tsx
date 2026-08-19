import { useRef } from 'react';
import Hero from '@/components/ui/home/Hero';
import InvestmentCalculator from '@/components/ui/InvestmentCalculator';
import ProductJourney from '@/components/ui/home/ProductJourney';
import DownloadOurApp from '@/components/ui/home/DownloadOurApp';
import WhyRevridge from '@/components/ui/home/WhyRevridge';
import StayUpdated from '@/components/ui/home/StayUpdated';
import Footer from '@/components/ui/home/Footer';
import HowExecutionWorks from '@/components/ui/home/HowExecutionWorks';

export default function HomePage() {
  const stayUpdatedSectionRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main id="main-content" className="flex-1">
        <Hero />
        <InvestmentCalculator />
        <ProductJourney />
        <HowExecutionWorks />
        <DownloadOurApp />
        <WhyRevridge />
        <StayUpdated stayUpdatedSectionRef={stayUpdatedSectionRef} />
      </main>
      <Footer />
    </div>
  );
}

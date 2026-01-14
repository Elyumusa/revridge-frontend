import { useRef } from 'react';
import Hero from '../components/ui/home/Hero';
import InvestmentCalculator from '@/components/ui/InvestmentCalculator';
import DownloadOurApp from '@/components/ui/home/DownloadOurApp';
import StayUpdated from '@/components/ui/home/StayUpdated';
import FeaturesAndPerks from '@/components/ui/home/FeaturesAndPerks';
import WhatWeDo from '@/components/ui/home/WhatWeDo';
import Footer from '@/components/ui/home/Footer';

export default function HomePage() {
  const stayUpdatedSectionRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <Hero stayUpdatedSectionRef={stayUpdatedSectionRef} />
        <InvestmentCalculator />
        <WhatWeDo />
        <FeaturesAndPerks />
        <StayUpdated stayUpdatedSectionRef={stayUpdatedSectionRef} />
        <DownloadOurApp />
      </main>
      <Footer />
    </div>
  );
}
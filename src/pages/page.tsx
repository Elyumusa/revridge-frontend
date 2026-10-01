import { useRef } from 'react';
import Hero from '@/components/ui/home/Hero';
import GrowCalculator from '@/components/ui/GrowCalculator';
import TrustStrip from '@/components/ui/home/TrustStrip';
import LearnStory from '@/components/ui/home/LearnStory';
import InvestStory from '@/components/ui/home/InvestStory';
import GrowStory from '@/components/ui/home/GrowStory';
import DownloadOurApp from '@/components/ui/home/DownloadOurApp';
import WhyRevridge from '@/components/ui/home/WhyRevridge';
import StayUpdated from '@/components/ui/home/StayUpdated';
import Footer from '@/components/ui/home/Footer';

export default function HomePage() {
  const stayUpdatedSectionRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        <LearnStory />
        <GrowCalculator />
        <InvestStory />
        <GrowStory />
        <WhyRevridge />
        <DownloadOurApp />
        <StayUpdated stayUpdatedSectionRef={stayUpdatedSectionRef} />
      </main>
      <Footer />
    </div>
  );
}

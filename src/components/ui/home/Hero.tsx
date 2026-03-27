import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Heading, Text } from '@/components/design-system';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HeroProps {
    stayUpdatedSectionRef?: React.RefObject<HTMLElement>;
}

const Hero: React.FC<HeroProps> = ({ stayUpdatedSectionRef }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const scrollToStayUpdated = () => {
        stayUpdatedSectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-background pt-24">
            {/* Background Geometric Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
                            <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            {/* Hexagonal Shapes Decoration (Top Right) */}
            <div className="absolute top-0 right-0 z-0 opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/4">
                <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M41.7,-72.2C54.4,-64.8,65.3,-55.1,75.2,-44.5C85.1,-33.9,94,-22.3,95.6,-10.1C97.2,2.1,91.5,14.9,83.9,25.8C76.3,36.7,66.8,45.7,56.7,53.4C46.6,61.1,35.9,67.5,24.5,70.9C13.1,74.3,1,74.7,-10.4,72.9C-21.8,71.1,-32.5,67.1,-42.6,60.8C-52.7,54.5,-62.2,46,-70.1,36.1C-78,26.2,-84.3,14.9,-83.4,3.1C-82.5,-8.7,-74.4,-21,-65.6,-32.1C-56.8,-43.2,-47.3,-53.1,-36.5,-61.4C-25.7,-69.7,-13.6,-76.3,0,-76.3L0,0Z" transform="translate(100 100) scale(1.1)" />
                </svg>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col max-w-4xl space-y-8">

                    {/* Badge / Tagline */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                            Confidence Before Capital
                        </div>
                    </div>

                    {/* Main Headline */}
                    <div className="animate-fade-in-up space-y-4" style={{ animationDelay: '200ms' }}>
                        <Heading level="h1" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-bold text-primary">
                            Learn and practice investing <br />
                            <span className="text-muted-foreground">before risking real money.</span>
                        </Heading>

                        <Text size="xl" className="max-w-[700px] text-muted-foreground md:text-2xl pt-4">
                            Revridge helps beginners understand how investing works — step by step. Explore real Zambian and U.S. stock data, simulate trades with virtual money, and build the confidence to invest for real when you're ready.
                        </Text>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <NavLink to="/download">
                            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8" rightIcon={<ArrowRight size={20} />}>
                                Get Early Access
                            </Button>
                        </NavLink>

                        <NavLink to="/about">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8" rightIcon={<ChevronRight size={20} />}>
                                How It Works
                            </Button>
                        </NavLink>
                    </div>

                    {/* Stats / Social Proof */}
                    <div className="pt-12 flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <div className="flex items-center gap-8 text-muted-foreground">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-foreground">Two Markets</span>
                                <span className="text-sm">U.S. + Zambia (LuSE)</span>
                            </div>
                            <div className="w-px h-10 bg-border"></div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-foreground">Zero Risk</span>
                                <span className="text-sm">Simulated trading only</span>
                            </div>
                            <div className="w-px h-10 bg-border"></div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-foreground">100% Free</span>
                                <span className="text-sm">No real money required</span>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm max-w-fit">
                            <span className="font-semibold">ℹ️ Heads up:</span>
                            <span>Revridge does not currently support real-money trading.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

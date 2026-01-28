import { NavLink } from 'react-router-dom';
import { Button, Heading, Text } from '@/components/design-system';
import { Apple, Play, CheckCircle2 } from 'lucide-react';

const features = [
    "Real-time market data at your fingertips",
    "Secure biometric login",
    "Instant deposit and withdrawal",
    "Portfolio tracking and analysis"
];

const DownloadOurApp: React.FC = () => {
    return (
        <section className="w-full py-24 bg-background relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
                                Mobile App
                            </div>
                            <Heading level="h2" className="text-4xl md:text-5xl font-bold tracking-tight">
                                Invest on the go.
                            </Heading>
                            <Text size="lg" className="text-muted-foreground">
                                Get started with stock market investing today. Download our app and begin your financial growth journey from anywhere, anytime.
                            </Text>
                        </div>

                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <NavLink to="/download">
                                <Button size="lg" className="w-full sm:w-auto min-w-[160px] h-14" leftIcon={<Apple size={20} />}>
                                    App Store
                                </Button>
                            </NavLink>
                            <NavLink to="/download">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px] h-14" leftIcon={<Play size={20} />}>
                                    Google Play
                                </Button>
                            </NavLink>
                        </div>
                    </div>

                    {/* Right Column: Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        {/* Abstract decorative card behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[550px] bg-gradient-to-tr from-secondary to-primary/20 rounded-[40px] rotate-[-6deg] blur-sm z-0" />

                        {/* Phone Frame with Real Screenshot */}
                        <div className="relative z-10 w-[280px] h-[580px] bg-zinc-950 rounded-[40px] border-8 border-zinc-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
                            {/* Real App Screenshot */}
                            <img
                                src="/LUSE STOCKS.png"
                                alt="Revridge App - LUSE Stocks"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadOurApp;

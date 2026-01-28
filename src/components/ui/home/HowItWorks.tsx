import React from 'react';
import { Heading, Text, Button } from '@/components/design-system';
import { Download, Wallet, TrendingUp, Rocket, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const steps = [
    {
        number: "01",
        title: "Download & Create Account",
        description: "Get the app from Google Play or App Store. Sign up in under 2 minutes with just your email.",
        icon: Download,
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "02",
        title: "Practice with Virtual Cash",
        description: "Start with virtual money to practice. Learn to buy and sell stocks without any risk to real money.",
        icon: Wallet,
        color: "from-purple-500 to-pink-500",
    },
    {
        number: "03",
        title: "Explore & Learn",
        description: "Browse U.S. and Zambian stocks. Read company info, check prices, and learn what makes a good investment.",
        icon: TrendingUp,
        color: "from-orange-500 to-red-500",
    },
    {
        number: "04",
        title: "Trade for Real (Coming Soon)",
        description: "When you're ready and we launch real trading, deposit money and start building your real investment portfolio.",
        icon: Rocket,
        color: "from-green-500 to-emerald-500",
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section className="w-full py-16 md:py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />

            <div className="container px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                        <Rocket size={16} />
                        <span>Simple & Easy</span>
                    </div>
                    <Heading level="h2" className="text-4xl md:text-6xl font-bold tracking-tight">
                        How It Works
                    </Heading>
                    <Text size="lg" className="max-w-2xl text-muted-foreground">
                        Start investing in 4 simple steps. No complicated forms, no confusing jargon - just straightforward investing.
                    </Text>
                </div>

                {/* Steps Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Connector Line (hidden on mobile, shown on desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                            )}

                            {/* Card */}
                            <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <step.icon className="text-white" size={32} />
                                </div>

                                {/* Content */}
                                <Heading level="h3" className="text-xl font-bold mb-3">
                                    {step.title}
                                </Heading>
                                <Text className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>

                {/* App Preview Section */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left: Text */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                                Live Demo Available
                            </div>
                            <Heading level="h3" className="text-3xl md:text-4xl font-bold">
                                See It in Action
                            </Heading>
                            <Text size="lg" className="text-muted-foreground">
                                Download the app now and explore with virtual money. No credit card required, no risk - just pure learning.
                            </Text>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <NavLink to="/download">
                                    <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                                        Download App
                                    </Button>
                                </NavLink>
                                <NavLink to="/about">
                                    <Button variant="outline" size="lg">
                                        Learn More
                                    </Button>
                                </NavLink>
                            </div>
                        </div>

                        {/* Right: App Screenshot Placeholder */}
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="relative mx-auto w-full max-w-[300px] aspect-[9/19] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[3rem] p-3 shadow-2xl border-8 border-zinc-700">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-2xl" />

                                {/* Screen Content - Real Screenshot */}
                                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden">
                                    <img
                                        src="/stock_page.png"
                                        alt="Revridge app portfolio view"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                                +$2,450
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Demo Mode
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">
                    <Text className="text-muted-foreground">
                        💡 <strong>Pro Tip:</strong> Most users spend 2-3 weeks practicing before they feel ready for real trading. Take your time!
                    </Text>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

import React from 'react';
import { Heading, Text, Button } from '@/components/design-system';
import { Download, Wallet, Send, LineChart, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const steps = [
    {
        number: "01",
        title: "Download & Verify Your Account",
        description: "Get the app from Google Play or App Store. Sign up and complete identity verification (KYC) so we can route your orders to a licensed broker.",
        icon: Download,
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "02",
        title: "Place an Order on the LuSE",
        description: "Browse Lusaka Securities Exchange stocks, choose buy or sell, and enter your quantity. Your order intent is captured in Revridge.",
        icon: Wallet,
        color: "from-purple-500 to-pink-500",
    },
    {
        number: "03",
        title: "We Route It to a Licensed Broker",
        description: "Revridge sends your order to a licensed broker, who executes it on the LuSE. Track it live: Submitted → Sent to broker → Executed.",
        icon: Send,
        color: "from-orange-500 to-red-500",
    },
    {
        number: "04",
        title: "Watch Your Portfolio Grow",
        description: "Broker-confirmed fills update your holdings, performance, and history. Invest while you learn — no waiting to get started.",
        icon: LineChart,
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
                        <Send size={16} />
                        <span>Simple & Transparent</span>
                    </div>
                    <Heading level="h2" className="text-4xl md:text-6xl font-bold tracking-tight">
                        How It Works
                    </Heading>
                    <Text size="lg" className="max-w-2xl text-muted-foreground">
                        From signup to your first trade in 4 clear steps. No jargon, no black boxes — just a simple path from placing an order to watching it execute.
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
                                Early Beta Available
                            </div>
                            <Heading level="h3" className="text-3xl md:text-4xl font-bold">
                                See It in Action
                            </Heading>
                            <Text size="lg" className="text-muted-foreground">
                                Download the app to explore LuSE and U.S. markets, place orders, and track every stage of execution. Investing on the LuSE is launching soon — get early access today.
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
                        <div className="relative hidden md:block">
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
                                Executed
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                LuSE Orders
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">
                    <Text className="text-muted-foreground">
                        💡 <strong>Good to know:</strong> Revridge facilitates your orders and a licensed broker executes them on the LuSE — so you always know exactly where your investment stands.
                    </Text>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

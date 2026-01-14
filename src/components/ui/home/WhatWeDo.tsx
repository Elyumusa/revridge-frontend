import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Heading, Text, Icon } from '@/components/design-system';
import { TrendingUp, PieChart, BarChart3, Bot, BookOpen, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
    {
        title: "U.S. Stock Trading",
        description: "Trade U.S. stocks with real-time quotes and fractional shares. Commission-free during beta.",
        icon: TrendingUp,
        color: "text-blue-500",
    },
    {
        title: "Zambian Market Data",
        description: "Track Lusaka Securities Exchange (LuSE) stocks with real-time data and market insights. Full trading coming Q2 2026.",
        icon: BarChart3,
        color: "text-green-500",
    },
    {
        title: "Portfolio Management",
        description: "Real-time portfolio tracking with live price updates, performance analytics, and profit/loss calculations.",
        icon: PieChart,
        color: "text-purple-500",
    },
    {
        title: "Learn While You Invest",
        description: "Practice risk-free with demo mode, access educational resources, and build your investing knowledge before committing real money.",
        icon: BookOpen,
        color: "text-yellow-500",
    },
    {
        title: "Bank-Level Security",
        description: "Multi-factor authentication, biometric login, and enterprise-grade security to protect your account and data.",
        icon: ShieldCheck,
        color: "text-red-500",
    },
    {
        title: "Mobile-First Design",
        description: "Seamlessly invest from your smartphone with our mobile app, optimized for African mobile users.",
        icon: Bot,
        color: "text-orange-500",
    },
];

const WhatWeDo: React.FC = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 relative bg-background/50 backdrop-blur-sm">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                        Our Services
                    </div>
                    <Heading level="h2" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        What We Do
                    </Heading>
                    <Text className="max-w-[700px] text-muted-foreground md:text-xl">
                        Comprehensive financial solutions designed to help you invest with confidence.
                    </Text>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Card variant="glass" hoverEffect className="h-full border-secondary/20 bg-card/30">
                                <CardHeader>
                                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center bg-secondary mb-4", feature.color)}>
                                        <Icon icon={feature.icon} size={24} />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-muted-foreground/80">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;

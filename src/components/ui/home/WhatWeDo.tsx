import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Heading, Text, Icon } from '@/components/design-system';
import { TrendingUp, PieChart, BarChart3, BookOpen, ShieldCheck, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
    {
        title: "Invest on the LuSE",
        description: "Place buy and sell orders on the Lusaka Securities Exchange (LuSE). Your order goes to a licensed broker who executes it on your behalf.",
        icon: TrendingUp,
        color: "text-emerald-500",
    },
    {
        title: "Track Your Portfolio",
        description: "Holdings, performance, and history — updated from broker-confirmed executions, not estimates. Watch your investments grow over time.",
        icon: PieChart,
        color: "text-blue-500",
    },
    {
        title: "Order Transparency",
        description: "Always know where your money is: Submitted → Sent to broker → Executed. No black boxes, no guessing — full visibility at every stage.",
        icon: Eye,
        color: "text-purple-500",
    },
    {
        title: "Practice with U.S. Stocks",
        description: "Explore U.S. markets in a free virtual sandbox with live quotes and market data — no money at stake. Pure learning, anytime.",
        icon: BarChart3,
        color: "text-green-500",
    },
    {
        title: "Learn While You Invest",
        description: "Investing education that runs alongside investing, not before it. Plain-language lessons you can apply the moment you place an order.",
        icon: BookOpen,
        color: "text-yellow-500",
    },
    {
        title: "Bank-Level Security",
        description: "Multi-factor authentication, biometric login, and enterprise-grade security to protect your account, your data, and your orders.",
        icon: ShieldCheck,
        color: "text-red-500",
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
                        Investing, with you in control
                    </Heading>
                    <Text className="max-w-[700px] text-muted-foreground md:text-xl">
                        Place orders on the LuSE through licensed brokers, track every step, and build a portfolio — with a free U.S. stock sandbox to learn along the way.
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

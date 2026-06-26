import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, Heading, Text } from '@/components/design-system';
import { Coins, ShieldCheck, BarChart3, BookOpen, Users, Eye, CheckCircle2 } from "lucide-react";
import { cn } from '@/lib/utils';

const perks = [
    {
        title: "Start with an Amount You Choose",
        description: "There's no need for thousands to begin. Place an order with an amount you're comfortable with on the LuSE and grow your portfolio over time.",
        icon: Coins,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "Always in the Know",
        description: "Every order has a status you can see: Submitted → Sent to broker → Executed. You always know exactly where your investment stands — no black boxes.",
        icon: Eye,
        color: "bg-emerald-500/10 text-emerald-500",
    },
    {
        title: "Investing, Protected",
        description: "Your orders go to licensed brokers who execute and custody your securities. Your data is protected with bank-level security at every step.",
        icon: ShieldCheck,
        color: "bg-indigo-500/10 text-indigo-500",
    },
    {
        title: "Explore Companies You Know",
        description: "Browse companies like Zambeef, Lafarge, Apple, or Google. Learn what they do, how their stock moves, and why investors choose them.",
        icon: BarChart3,
        color: "bg-pink-500/10 text-pink-500",
    },
    {
        title: "Investing 101",
        description: "Our educational resources guide you through investing concepts in plain language — no finance degree needed. Learn as you invest.",
        icon: BookOpen,
        color: "bg-yellow-500/10 text-yellow-500",
    },
    {
        title: "Learn About Dividends",
        description: "Discover how dividend-paying stocks work. Understand how some companies distribute profits to shareholders — knowledge that applies directly to your own holdings.",
        icon: Users,
        color: "bg-purple-500/10 text-purple-500",
    },
];

const FeaturesAndPerks: React.FC = () => {
    return (
        <section className="w-full py-16 md:py-32 bg-secondary/30 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

            <div className="container px-4 md:px-6 relative z-10">

                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    <div className="flex-1 space-y-6 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm hover:bg-primary/10 transition-colors">
                            <CheckCircle2 size={16} />
                            <span>Why Choose Revridge</span>
                        </div>
                        <Heading level="h2" className="text-4xl md:text-6xl font-black tracking-tight">
                            Investing, <br /> built around you.
                        </Heading>
                        <Text size="lg" className="text-muted-foreground max-w-xl">
                            We give you everything you need to invest on the LuSE with confidence: licensed broker execution, full transparency, live market data, and beginner-friendly lessons that grow with you.
                        </Text>
                    </div>

                    <div className="flex-1 grid gap-4 grid-cols-1 sm:grid-cols-2">
                        {/* Visual statistics or abstract art could go here, but using grid for now */}
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {perks.map((perk, index) => (
                        <Card
                            key={index}
                            variant="glass"
                            hoverEffect
                            className={cn(
                                "border-secondary/20 bg-card/30 animate-fade-in-up",
                            )}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardHeader className="space-y-4">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", perk.color)}>
                                    <perk.icon size={28} />
                                </div>
                                <CardTitle className="text-xl">{perk.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Text muted className="leading-relaxed">
                                    {perk.description}
                                </Text>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesAndPerks;

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, Heading, Text } from '@/components/design-system';
import { TrendingUp, DollarSign, Lock, BarChart3, BookOpen, Users, CheckCircle2 } from "lucide-react";
import { cn } from '@/lib/utils';

const perks = [
    {
        title: "Watch Your Money Grow",
        description: "Buy stocks in different companies to spread your risk. As companies do well, your shares become more valuable over time.",
        icon: TrendingUp,
        color: "bg-emerald-500/10 text-emerald-500",
    },
    {
        title: "Start Small ",
        description: "You don't need to be rich to invest. Start with a small amount and buy your first stock today.",
        icon: DollarSign,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "Top level Security",
        description: "Protect your investments, financial and personal information with our bank-level security and enjoy peace of mind.",
        icon: Lock,
        color: "bg-indigo-500/10 text-indigo-500",
    },
    {
        title: "Own Shares in Your Favorite Brands",
        description: "Buy pieces of companies like Apple, Google, or Zambian businesses(Zambeef, Lafarge) you believe in. When they profit, you profit too.",
        icon: BarChart3,
        color: "bg-pink-500/10 text-pink-500",
    },
    {
        title: "Investing 101",
        description: "Our educational resources will guide you through the investment process and help you understand key concepts.",
        icon: BookOpen,
        color: "bg-yellow-500/10 text-yellow-500",
    },
    {
        title: "Earn Money While You Sleep",
        description: "Some stocks pay you dividends (cash payments) just for owning them. Your money works for you, even when you're not actively trading.",
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
                            More than just <br /> an investment platform.
                        </Heading>
                        <Text size="lg" className="text-muted-foreground max-w-xl">
                            We give you everything you need to start investing: easy-to-use tools, bank-level security, and free lessons to help you learn.
                            Join thousands learning to invest with Revridge.
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
                            variant="flat"
                            hoverEffect
                            className={cn(
                                "border-none bg-background/50 hover:bg-background transition-colors duration-300 animate-fade-in-up",
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

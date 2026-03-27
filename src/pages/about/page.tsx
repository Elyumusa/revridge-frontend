import { Card, CardContent, CardHeader, CardTitle, Heading, Text, Button } from "@/components/design-system";
import { BookOpen, Globe, ShieldCheck, Target, Rocket, TrendingUp, Zap, Heart, ArrowRight } from "lucide-react";
import Footer from '@/components/ui/home/Footer';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const values = [
    {
        title: "Easy to Use",
        description: "No confusing jargon. Simple app that anyone can understand, even if you've never invested before.",
        icon: Zap,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Learn as You Go",
        description: "Practice with virtual money first. We teach you how investing works before you risk real cash.",
        icon: BookOpen,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Start Small",
        description: "You don't need thousands to invest. Start with a small amount and grow your portfolio over time.",
        icon: TrendingUp,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Safe & Secure",
        description: "Bank-level security protects your money and personal information. Your data is encrypted and safe.",
        icon: ShieldCheck,
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        title: "Local + Global",
        description: "Explore both Zambian companies (like Zambeef) and U.S. giants (like Apple). Learn how each market works and what makes companies grow.",
        icon: Globe,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        title: "Built for You",
        description: "Made by Zambians, for Zambians. We understand your needs and build features that actually help you.",
        icon: Heart,
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1">

                {/* Header Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent" />
                    <div className="container relative z-10 px-4 md:px-6 text-center space-y-6 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                            <Heart size={16} className="fill-current" />
                            <span>About Revridge</span>
                        </div>
                        <Heading level="h1" className="text-4xl md:text-6xl font-black tracking-tight">
                            Practice First, <br /> Invest with Confidence
                        </Heading>
                        <div className="max-w-4xl mx-auto space-y-6">
                            <Text size="lg" className="text-muted-foreground md:text-xl leading-relaxed">
                                Revridge is a learning and simulation platform designed to make investing <strong className="text-foreground">simple and accessible</strong> for everyday people,
                                especially in Zambia and across Africa.
                            </Text>

                            <div className="space-y-4">
                                {/* Right Now Card */}
                                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">1</span>
                                        <Heading level="h3" className="text-lg font-bold text-foreground">Right Now</Heading>
                                    </div>
                                    <Text className="text-muted-foreground">
                                        Revridge includes a practice mode where users can simulate trading without using real money, so they can learn safely and build confidence.
                                    </Text>
                                </div>

                                {/* Coming Soon Card */}
                                <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold">2</span>
                                        <Heading level="h3" className="text-lg font-bold text-foreground">Coming Soon</Heading>
                                    </div>
                                    <Text className="text-muted-foreground">
                                        The platform will expand to support real investing and trading, giving more Africans the opportunity to grow their wealth through both local and international stock markets.
                                    </Text>
                                </div>
                            </div>
                            <Text className="text-muted-foreground italic">
                                View real stock prices, understand how the market works, and build investing knowledge in an easy, beginner-friendly way.
                            </Text>
                        </div>
                    </div>
                </section>

                {/* The Problem & Solution */}
                <section className="py-16 bg-background relative z-10">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                                    <Target size={24} />
                                </div>
                                <Heading level="h2" className="text-3xl md:text-4xl font-bold">The Problem We Saw</Heading>
                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                    <Text>
                                        Most Zambians want to invest and grow their money, but traditional investing feels:
                                    </Text>
                                    <ul className="space-y-2 pl-6">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span><strong>Too complicated</strong> - Full of confusing terms and jargon</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span><strong>Too expensive</strong> - Requires thousands to start</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span><strong>Too risky</strong> - No way to practice before using real money</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span><strong>Too limited</strong> - Hard to access international markets</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-900 to-orange-900 border border-border">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Target className="w-48 h-48 text-white/10" />
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                                        <Text className="text-white font-medium">"Investing shouldn't be this hard"</Text>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Solution */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-900 to-blue-900 border border-border order-2 md:order-1">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Rocket className="w-48 h-48 text-white/10" />
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                                        <Text className="text-white font-medium">Simple. Safe. Smart.</Text>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                    <Rocket size={24} />
                                </div>
                                <Heading level="h2" className="text-3xl md:text-4xl font-bold">Our Solution</Heading>
                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                    <Text>
                                        Revridge makes investing as easy as using social media:
                                    </Text>
                                    <ul className="space-y-2 pl-6">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">✓</span>
                                            <span><strong>Simple language</strong> - No jargon, just plain English</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">✓</span>
                                            <span><strong>Start small</strong> - Begin with any amount you're comfortable with</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">✓</span>
                                            <span><strong>Practice first</strong> - Learn with virtual money before risking real cash</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500 mt-1">✓</span>
                                            <span><strong>Explore global markets</strong> — Browse both Zambian and U.S. companies in one app</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes Us Different */}
                <section className="py-24 bg-secondary/30">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <Heading level="h2" className="text-3xl font-bold mb-4">What Makes Us Different</Heading>
                            <Text className="text-muted-foreground max-w-2xl mx-auto">
                                We're not just another investment app. Here's what sets us apart:
                            </Text>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {values.map((val, idx) => (
                                <Card key={idx} variant="glass" hoverEffect className="border-secondary/20 bg-card/30 h-full">
                                    <CardHeader>
                                        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110", val.bg, val.color)}>
                                            <val.icon size={24} />
                                        </div>
                                        <CardTitle>{val.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Text muted className="text-sm leading-relaxed">
                                            {val.description}
                                        </Text>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why We Built This (Story) */}
                <section className="py-24 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <Heading level="h2" className="text-3xl font-bold mb-4">Why We Built This</Heading>
                                <Text className="text-muted-foreground max-w-2xl mx-auto">
                                    A personal story from our founders
                                </Text>
                            </div>

                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
                                <div className="space-y-6 text-lg leading-relaxed">
                                    <Text>
                                        <strong className="text-primary">We started Revridge because we lived this problem.</strong>
                                    </Text>
                                    <Text className="text-muted-foreground">
                                        As young Zambians interested in growing our money, we found that traditional investing was either too complicated,
                                        too expensive, or simply not accessible to us. We wanted to buy shares in companies we believed in - both local
                                        businesses and global brands - but the barriers were too high.
                                    </Text>
                                    <Text className="text-muted-foreground">
                                        So we asked ourselves: <strong>"What if investing was as easy as ordering food on your phone?"</strong>
                                    </Text>
                                    <Text className="text-muted-foreground">
                                        That question led us to build Revridge - an app where anyone can learn to invest, practice safely with virtual money,
                                        and eventually build real wealth through smart investing. No finance degree needed. No huge capital required.
                                        Just you, your phone, and the desire to grow your money.
                                    </Text>
                                    <div className="pt-6 border-t border-primary/20">
                                        <Text className="text-muted-foreground italic">
                                            "We're building the investment platform we wish existed when we were starting out.
                                            If you've ever felt like investing wasn't for you - this is for you."
                                        </Text>
                                        <Text className="text-primary font-semibold mt-4">
                                            - Ely'umusa & Wongani, Co-Founders
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-8">
                            <Heading level="h2" className="text-3xl md:text-4xl font-bold">
                                Ready to Start Learning?
                            </Heading>
                            <Text size="lg" className="text-muted-foreground">
                                Join thousands of Zambians learning how investing works with Revridge. Get early access and start practicing today — completely free, no real money required.
                            </Text>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <NavLink to="/download">
                                    <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                                        Download App
                                    </Button>
                                </NavLink>
                                <NavLink to="/">
                                    <Button variant="outline" size="lg">
                                        Learn More
                                    </Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

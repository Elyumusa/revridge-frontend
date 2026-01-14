import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Heading, Text } from "@/components/design-system";
import { BookOpen, Globe, ShieldCheck, Users, Target, Rocket } from "lucide-react";
import Footer from '@/components/ui/home/Footer';
import Elyu from '@/assets/images/papa.jpg';
import Wo from '@/assets/images/Wongani.jpg';
import { cn } from '@/lib/utils';

const team = [
    { name: "Ely'umusa Njobvu", role: "CEO & Co-Founder", image: Elyu },
    { name: "Wongani Chilongo", role: "COO & Co-Founder", image: Wo },
];

const values = [
    {
        title: "Accessibility First",
        description: "Low minimum investments, simple intuitive interface, educational resources for all levels, and mobile-first design for widespread access.",
        icon: Users,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Transparency",
        description: "Clear fee structures (commission-free during beta), honest communication about risks, open about what we do and don't offer, with real-time data and no delays.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Education & Empowerment",
        description: "Investing should be learned, not feared. Demo mode for risk-free practice, built-in educational content, and community-driven learning.",
        icon: BookOpen,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Security & Trust",
        description: "Bank-level security measures, regulatory compliance, user data protection, and transparent operations you can rely on.",
        icon: Target,
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        title: "Local + Global",
        description: "Bridge between Zambian and international markets, support local economic growth, enable global diversification with culturally relevant solutions.",
        icon: Globe,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1">

                {/* Header Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-secondary/20 skew-y-3 origin-top-left scale-110" />
                    <div className="container relative z-10 px-4 md:px-6 text-center space-y-6 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                            <Rocket size={16} />
                            <span>Our Journey</span>
                        </div>
                        <Heading level="h1" className="text-4xl md:text-6xl font-black tracking-tight">
                            Empowering Africa's <br /> Financial Future
                        </Heading>
                        <Text size="lg" className="max-w-3xl mx-auto text-muted-foreground md:text-xl leading-relaxed">
                            Revridge is a pioneering fintech company with a mission to democratize access to global financial markets.
                            We build bridges for African investors to participate in the global economy.
                        </Text>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16 bg-background relative z-10">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Target size={24} />
                                </div>
                                <Heading level="h2" className="text-3xl md:text-4xl font-bold">Our Mission</Heading>
                                <Text className="text-lg text-muted-foreground leading-relaxed">
                                    To empower individuals in Zambia and across Africa to build wealth through accessible, transparent, and educational investment tools that bridge local and global markets. We believe everyone deserves the opportunity to invest in their favorite global brands and participate in wealth creation.
                                </Text>
                            </div>
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-border">
                                {/* Abstract Gradient Map or Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Globe className="w-48 h-48 text-primary/20" />
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                                        <Text className="text-white font-medium">Invest Globally, Africa Wins</Text>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 to-purple-900 border border-border order-2 md:order-1">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Rocket className="w-48 h-48 text-white/10" />
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                                        <Text className="text-white font-medium">Building Africa's Financial Future</Text>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <Rocket size={24} />
                                </div>
                                <Heading level="h2" className="text-3xl md:text-4xl font-bold">Our Vision</Heading>
                                <Text className="text-lg text-muted-foreground leading-relaxed">
                                    To become Africa's leading cross-border investment platform, enabling millions to participate in wealth creation through seamless access to both local and international financial markets.
                                </Text>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-secondary/30">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <Heading level="h2" className="text-3xl font-bold mb-4">Core Values</Heading>
                            <Text className="text-muted-foreground max-w-2xl mx-auto">
                                The principles that guide our innovation and service to you.
                            </Text>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {values.map((val, idx) => (
                                <Card key={idx} variant="glass" className="border-none shadow-sm hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110", val.bg, val.color)}>
                                            <val.icon size={24} />
                                        </div>
                                        <CardTitle>{val.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Text muted className="text-sm">
                                            {val.description}
                                        </Text>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <Heading level="h2" className="text-3xl font-bold mb-4">Executive Leadership</Heading>
                            <Text className="text-muted-foreground max-w-2xl mx-auto">
                                Meet the visionaries leading the charge.
                            </Text>
                        </div>

                        <div className="flex flex-wrap justify-center gap-16 max-w-4xl mx-auto">
                            {team.map((member) => (
                                <div key={member.name} className="flex flex-col items-center group">
                                    <div className="relative w-full aspect-[3/4] max-w-[280px] mb-6 rounded-2xl overflow-hidden shadow-md bg-secondary transition-transform duration-500 group-hover:-translate-y-2">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="text-center">
                                        <Heading level="h3" className="text-xl font-bold mb-1">{member.name}</Heading>
                                        <Text className="text-primary font-medium">{member.role}</Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

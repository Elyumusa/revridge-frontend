import React, { useState } from 'react';
import { Button, Input, Heading, Text, Card } from "@/components/design-system";
import { Apple, Play, CheckCircle2, X } from "lucide-react";
import Footer from '@/components/ui/home/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import axios from 'axios';
import { parseApiError, getEmailValidationError, getEmailSignupSuccessMessage } from '@/utils/errorHandler';

// Image Assets
const StockPage = '/stock_resized.png';
const InvestInWhatYouBelieveIn = '/invest.png';
const Google = '/google.svg';
const Nike = '/nike.svg';
const Microsoft = '/microsoft.svg';
const Netflix = '/netflix.svg';
const AppleLogo = '/Apple.svg';

const DownloadAppPage: React.FC = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState("");
    const [showConfetti, setShowConfetti] = useState(false);

    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => {
        setIsWaitlistOpen(false);
        setStatus('idle');
        setMessage("");
        setEmail("");
        setName("");
    };

    const submitEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email
        const validationError = getEmailValidationError(email);
        if (validationError) {
            setStatus('error');
            setMessage(validationError);
            return;
        }

        setStatus('loading');

        try {
            const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
            const response = await axios.post(`${mainURL}/email_list/`, {
                email,
                name,
                source: 'download_page'
            });

            if (response.status === 201) {
                setStatus('success');
                setMessage(`You're on the list! We'll notify ${email} when ready.`);
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 5000);
            }
        } catch (error: any) {
            const errorMessage = parseApiError(error);

            // If it's the "already on list" message, treat as success
            if (errorMessage.includes("already")) {
                setStatus('success');
                setMessage("Good news! You're already on the waitlist.");
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 5000);
            } else {
                setStatus('error');
                setMessage(errorMessage);
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1 overflow-x-hidden">

                {/* Hero Section */}
                <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 animate-fade-in-up sm:text-center lg:text-left">
                                <Heading level="h1" className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                                    Two Markets. <br /> <span className="text-primary">One App.</span>
                                </Heading>
                                <Text size="lg" className="text-muted-foreground text-xl md:max-w-xl mx-auto lg:mx-0">
                                    Trade U.S. stocks and track Zambian markets all in one place. Build your portfolio with fractional shares starting from just $1.
                                </Text>
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
                                    <Button size="lg" className="h-14 px-8 min-w-[200px]" onClick={openWaitlist} leftIcon={<Apple size={20} />}>
                                        Download on iOS
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-14 px-8 min-w-[200px]" onClick={openWaitlist} leftIcon={<Play size={20} />}>
                                        Get it on Android
                                    </Button>
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    <Text size="sm" className="text-blue-600 font-medium">Currently in Beta - Join Our Growing Community</Text>
                                </div>
                            </div>

                            {/* Phone Graphic */}
                            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                                <div className="relative w-[320px] h-[640px]">
                                    {/* Background Blob */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform scale-110" />

                                    {/* Phone Image */}
                                    <img
                                        src={StockPage}
                                        alt="Revridge App"
                                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Floating Badges */}
                                    <FloatingBadge src={Google} className="top-10 -left-6 animation-float" />
                                    <FloatingBadge src={Nike} className="bottom-20 -right-6 animation-float-delayed" />
                                    <FloatingBadge src={AppleLogo} className="top-1/2 -right-12 animation-float" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-secondary/30">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative order-2 md:order-1">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                    <img src={InvestInWhatYouBelieveIn} alt="Invest in what you believe in" className="w-full h-auto" />
                                </div>
                                <FloatingBadge src={Netflix} className="-top-8 -left-8 w-20 h-20" />
                                <FloatingBadge src={Microsoft} className="-bottom-8 -right-8 w-20 h-20" />
                            </div>

                            <div className="space-y-8 order-1 md:order-2">
                                <Heading level="h2" className="text-3xl md:text-5xl font-bold">Invest in what <br /> matters to you.</Heading>
                                <ul className="space-y-6">
                                    <FeatureItem title="U.S. Stock Trading">
                                        Trade U.S. stocks in sandbox mode with real-time quotes and fractional shares. Commission-free during beta.
                                    </FeatureItem>
                                    <FeatureItem title="Zambian Market Tracking">
                                        View and track Lusaka Securities Exchange (LuSE) stocks with real-time data. Full trading coming Q2 2026.
                                    </FeatureItem>
                                    <FeatureItem title="Demo Mode">
                                        Practice trading risk-free before using real money. Perfect for learning and building confidence.
                                    </FeatureItem>
                                </ul>
                                <Button size="lg" onClick={openWaitlist} className="mt-4">
                                    Start Investing Today
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-24 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="relative rounded-3xl overflow-hidden bg-zinc-900 text-white p-12 text-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950" />
                            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                                <Heading level="h2" className="text-3xl md:text-4xl font-bold text-white">
                                    Invest Globally, Africa Wins.
                                </Heading>
                                <Text className="text-zinc-400">
                                    Join thousands of users waiting to transform their financial future.
                                </Text>
                                <div className="flex justify-center gap-4 pt-4">
                                    <Button variant="secondary" onClick={openWaitlist}>Join Waitlist</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

            {/* Waitlist Modal */}
            <AnimatePresence>
                {isWaitlistOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={closeWaitlist}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-background rounded-2xl shadow-2xl w-full max-w-md p-8 border border-border z-10"
                        >
                            <button onClick={closeWaitlist} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                                <X size={20} />
                            </button>

                            <div className="text-center mb-6">
                                <Heading level="h3" className="text-2xl font-bold mb-2">Join Our Beta Community</Heading>
                                <Text muted>Get early access and help shape the future of investing in Africa.</Text>
                            </div>

                            {status === 'success' ? (
                                <div className="text-center py-8 space-y-4">
                                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <Text className="text-green-600 font-medium">{message}</Text>
                                    <Button onClick={closeWaitlist} variant="outline">Close</Button>
                                </div>
                            ) : (
                                <form onSubmit={submitEmail} className="space-y-4">
                                    <div className="space-y-2 text-left">
                                        <label className="text-sm font-medium">Name (optional)</label>
                                        <Input
                                            type="text"
                                            placeholder="Your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            disabled={status === 'loading'}
                                        />
                                    </div>
                                    <div className="space-y-2 text-left">
                                        <label className="text-sm font-medium">Email Address</label>
                                        <Input
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            disabled={status === 'loading'}
                                        />
                                    </div>
                                    {status === 'error' && <Text className="text-red-500 text-sm">{message}</Text>}
                                    <Button type="submit" className="w-full" disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {showConfetti && <ReactConfetti recycle={false} numberOfPieces={200} />}
        </div>
    );
};

// Helper Components
const FloatingBadge = ({ src, className }: { src: string, className?: string }) => (
    <div className={`absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${className}`}>
        <img src={src} className="w-8 h-8 object-contain" alt="Brand" />
    </div>
);

const FeatureItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="flex gap-4">
        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-primary" />
        </div>
        <div>
            <h4 className="font-bold text-lg">{title}</h4>
            <Text muted>{children}</Text>
        </div>
    </div>
);

export default DownloadAppPage;

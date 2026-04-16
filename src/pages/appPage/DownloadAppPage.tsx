import React, { useState } from 'react';
import { Button, Input, Heading, Text } from "@/components/design-system";
import { Apple, Play, CheckCircle2, X } from "lucide-react";
import Footer from '@/components/ui/home/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import axios from 'axios';
import { parseApiError, getEmailValidationError } from '@/utils/errorHandler';

// Image Assets
const HeroAppImage = '/portfolio_page.png';
const Google = '/google.svg';
const Nike = '/nike.svg';
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
                                    Two Markets. <br /> <span className="text-primary">Learn Both.</span>
                                </Heading>
                                <Text size="lg" className="text-muted-foreground text-xl md:max-w-xl mx-auto lg:mx-0">
                                    Explore U.S. and Zambian stock markets in one place. Practice trading with virtual money and build the confidence to invest for real — when you're truly ready.
                                </Text>
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
                                    <a href="https://play.google.com/apps/testing/com.revridge.app" target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" className="h-14 px-8 min-w-[200px]" leftIcon={<Play size={20} />}>
                                            Download Early Beta
                                        </Button>
                                    </a>
                                    <Button size="lg" variant="outline" className="h-14 px-8 min-w-[200px]" onClick={openWaitlist} leftIcon={<Apple size={20} />}>
                                        Waitlist (iOS)
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
                                        src={HeroAppImage}
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

                {/* App Preview Gallery */}
                <section className="py-24 bg-secondary/30">
                    <div className="container px-4 md:px-6">
                        {/* Section Header */}
                        <div className="text-center mb-16 space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                                <span>App Preview</span>
                            </div>
                            <Heading level="h2" className="text-3xl md:text-5xl font-bold">
                                See Revridge in Action
                            </Heading>
                            <Text size="lg" className="text-muted-foreground max-w-2xl mx-auto">
                                Explore the app's key features with real screenshots. Simple, intuitive, and built for you.
                            </Text>
                        </div>

                        {/* Screenshot Gallery Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Portfolio View */}
                            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                <div className="aspect-[9/16] relative overflow-hidden bg-zinc-900">
                                    <img
                                        src="/portfolio_page.png"
                                        alt="Portfolio view showing your simulated investments"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <Heading level="h3" className="text-lg font-bold">Your Simulated Portfolio</Heading>
                                    </div>
                                    <Text muted className="text-sm">
                                        Track all your practice investments in one place. See simulated values, gains, and performance — just like the real thing.
                                    </Text>
                                </div>
                            </div>

                            {/* Stock Details */}
                            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                <div className="aspect-[9/16] relative overflow-hidden bg-zinc-900">
                                    <img
                                        src="/stock_page.png"
                                        alt="Stock details with charts and information"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <Heading level="h3" className="text-lg font-bold">Stock Details</Heading>
                                    </div>
                                    <Text muted className="text-sm">
                                        View detailed stock information, price charts, and company data to make informed decisions.
                                    </Text>
                                </div>
                            </div>

                            {/* Search & Discover */}
                            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                <div className="aspect-[9/16] relative overflow-hidden bg-zinc-900">
                                    <img
                                        src="/search_page.png"
                                        alt="Search for stocks and companies"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                                        <Heading level="h3" className="text-lg font-bold">Search & Discover</Heading>
                                    </div>
                                    <Text muted className="text-sm">
                                        Find stocks from U.S. and Zambian markets. Search by company name or ticker symbol.
                                    </Text>
                                </div>
                            </div>

                            {/* Buy & Sell */}
                            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                <div className="aspect-[9/16] relative overflow-hidden bg-zinc-900">
                                    <img
                                        src="/buy_sell_page.png"
                                        alt="Buy and sell stocks interface"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        <Heading level="h3" className="text-lg font-bold">Practice Buying & Selling</Heading>
                                    </div>
                                    <Text muted className="text-sm">
                                        Simple simulation interface. Practice placing buy and sell orders with virtual money — no real funds involved, just pure learning.
                                    </Text>
                                </div>
                            </div>

                            {/* Watchlist */}
                            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                <div className="aspect-[9/16] relative overflow-hidden bg-zinc-900">
                                    <img
                                        src="/wishlist.png"
                                        alt="Watchlist of favorite stocks"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-pink-500" />
                                        <Heading level="h3" className="text-lg font-bold">Watchlist</Heading>
                                    </div>
                                    <Text muted className="text-sm">
                                        Save stocks you find interesting. Monitor price changes and understand what drives them — great preparation for when real investing launches.
                                    </Text>
                                </div>
                            </div>

                            {/* Zambian Market */}
                            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                <div className="aspect-[9/16] relative overflow-hidden bg-zinc-900">
                                    <img
                                        src="/Zambian market.png"
                                        alt="Zambian stock market (LUSE)"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <Heading level="h3" className="text-lg font-bold">Zambian Markets (LuSE)</Heading>
                                    </div>
                                    <Text muted className="text-sm">
                                        Browse Lusaka Securities Exchange (LuSE) stocks with real price data. Simulated LuSE trading is coming soon.
                                    </Text>
                                </div>
                            </div>
                        </div>

                        {/* CTA Below Gallery */}
                        <div className="text-center mt-16">
                            <Text className="text-muted-foreground mb-6">
                                Ready to start learning and practicing investing safely?
                            </Text>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="https://play.google.com/apps/testing/com.revridge.app" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="h-14 px-8 min-w-[200px]">
                                        Download App (Android)
                                    </Button>
                                </a>
                                <Button size="lg" variant="outline" onClick={openWaitlist} className="h-14 px-8 min-w-[200px]">
                                    Join Waitlist (iOS)
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
                                    Learn investing. Build confidence. Africa wins.
                                </Heading>
                                <Text className="text-zinc-400">
                                    Download the early beta on Android or join our iOS waitlist to start practicing investing safely — completely free, no real money involved.
                                </Text>
                                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                    <a href="https://play.google.com/apps/testing/com.revridge.app" target="_blank" rel="noopener noreferrer">
                                        <Button variant="secondary" className="min-w-[200px]">Download App (Android)</Button>
                                    </a>
                                    <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 min-w-[200px]" onClick={openWaitlist}>Join Waitlist (iOS)</Button>
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
                                <Heading level="h3" className="text-2xl font-bold mb-2">Join iOS Waitlist</Heading>
                                <Text muted>Get notified when Revridge is available on the App Store to start practicing.</Text>
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

export default DownloadAppPage;

import React, { useState } from 'react';
import { Button, Input, Heading, Text, Card, CardHeader, CardTitle, CardContent } from "@/components/design-system";
import { Mail, MessageCircle, Phone, Search, ChevronDown, CheckCircle2, Send, Loader2, AlertCircle } from "lucide-react";
import Footer from '@/components/ui/home/Footer';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { parseApiError } from '@/utils/errorHandler';

const faqs = [
    {
        question: "What is Revridge's current status?",
        answer: "Revridge is currently in beta testing. U.S. stock trading is conducted in a sandbox environment for testing purposes, and Zambian market access (LuSE) is view-only. We're actively gathering feedback and improving the platform before full launch."
    },
    {
        question: "Can I trade Zambian stocks right now?",
        answer: "Not yet. Currently, you can view and track Lusaka Securities Exchange (LuSE) stocks with real-time data. Full trading capabilities are coming in Q2 2026 pending regulatory approval."
    },
    {
        question: "Is my money safe with Revridge?",
        answer: "We use bank-level security measures. U.S. trades are processed through our SEC-registered broker-dealer and member FINRA/SIPC. However, all investments carry risk, and you could lose money. During beta, U.S. trading is in sandbox mode (test environment)."
    },
    {
        question: "What are the fees?",
        answer: "During beta, we offer commission-free trading on U.S. stocks. After full launch, standard commission fees will apply. There are no account minimums or monthly fees. We're committed to transparent and competitive pricing."
    },
    {
        question: "How do I get started?",
        answer: "Join our waitlist to get early beta access. You can sign up on our Download page. We'll notify you when your account is ready, and you can start exploring the platform with demo mode before trading with real money."
    },
    {
        question: "Is there a demo mode?",
        answer: "Yes! Practice trading risk-free in demo mode before using real money. This is perfect for learning how the platform works and building your investing confidence."
    },
    {
        question: "What support is available during beta?",
        answer: "We provide email support with responses within 24-48 hours. You can also use in-app help and bug reporting. As we grow, we plan to add live chat during market hours and phone support."
    },
    {
        question: "Can I invest from anywhere in Africa?",
        answer: "Currently, Revridge services are available to residents of Zambia. Expansion to other African countries is planned for the future as we complete regulatory requirements in each region."
    }
];

const SupportPage: React.FC = () => {
    const [faqOpen, setFaqOpen] = useState<number | null>(0);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'general',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const toggleFaq = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
            const response = await axios.post(`${mainURL}/support/`, formData);

            if (response.status === 201) {
                setStatus('success');
                setMessage(response.data.message || 'Thank you! We\'ll get back to you soon.');
                setFormData({ name: '', email: '', category: 'general', message: '' });
            }
        } catch (error: any) {
            setStatus('error');
            setMessage(parseApiError(error));
        }
    };

    // WhatsApp chat link
    const whatsappNumber = '+260571109236'; // Replace with actual number
    const whatsappMessage = 'Hi Revridge! I need help with...';
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1">

                {/* Hero Search Section */}
                <section className="relative py-24 bg-zinc-950 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 to-zinc-950" />
                    <div className="container relative z-10 px-4 md:px-6 text-center space-y-8 animate-fade-in-up">
                        <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/5 text-sm font-medium">
                            Support Center
                        </div>
                        <Heading level="h1" className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                            How can we help you?
                        </Heading>
                        <div className="max-w-2xl mx-auto relative group">
                            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity" />
                            <div className="relative flex items-center">
                                <Search className="absolute left-4 text-zinc-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search for answers..."
                                    className="w-full h-14 pl-12 pr-4 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all backdrop-blur-md"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Grid & Form */}
                <section className="py-20 bg-background relative -mt-10">
                    <div className="container px-4 md:px-6 relative z-10">
                        <div className="grid lg:grid-cols-3 gap-12">

                            {/* Contact Info Cards */}
                            <div className="space-y-6 lg:col-span-1">
                                <Heading level="h2" className="text-2xl font-bold mb-6">Get in touch</Heading>

                                <Card variant="glass" className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors cursor-pointer group">
                                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Call Us</h3>
                                        <p className="text-sm text-muted-foreground">+260 571 109 236</p>
                                    </div>
                                </Card>

                                {/* WhatsApp Chat Button */}
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Card variant="glass" className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors cursor-pointer group">
                                        <div className="h-12 w-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <MessageCircle size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">WhatsApp Chat</h3>
                                            <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                                        </div>
                                    </Card>
                                </a>

                                <Card variant="glass" className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors cursor-pointer group">
                                    <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email Support</h3>
                                        <p className="text-sm text-muted-foreground">support@revridge.xyz</p>
                                    </div>
                                </Card>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <Card className="p-8 h-full shadow-lg border-border/50">
                                    <div className="mb-8">
                                        <Heading level="h3" className="text-xl font-bold">Send us a message</Heading>
                                        <Text muted>We usually respond within 24 hours.</Text>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Name *</label>
                                                <Input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Email *</label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Category *</label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                                className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                required
                                            >
                                                <option value="general">General Inquiry</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="billing">Billing</option>
                                                <option value="feedback">Feedback</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Message *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full min-h-[150px] rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                placeholder="Tell us more about your inquiry..."
                                                required
                                            />
                                        </div>

                                        {/* Status Messages */}
                                        {status === 'success' && (
                                            <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                                                <CheckCircle2 size={20} />
                                                <p className="text-sm font-medium">{message}</p>
                                            </div>
                                        )}

                                        {status === 'error' && (
                                            <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400">
                                                <AlertCircle size={20} />
                                                <p className="text-sm font-medium">{message}</p>
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full sm:w-auto"
                                            rightIcon={status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </form>
                                </Card>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-secondary/30">
                    <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Heading level="h2" className="text-3xl font-bold mb-4">Frequently Asked Questions</Heading>
                            <Text muted>Quick answers to common questions about Revridge.</Text>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-background rounded-2xl border border-border/50 overflow-hidden cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="p-6 flex items-center justify-between text-left">
                                        <h3 className="font-semibold text-lg">{faq.question}</h3>
                                        <ChevronDown
                                            className={cn("text-muted-foreground transition-transform duration-300", faqOpen === index ? "rotate-180" : "")}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {faqOpen === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-6"
                                            >
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Link to Full FAQ Page */}
                        <div className="text-center mt-12">
                            <Text muted className="mb-4">Can't find what you're looking for?</Text>
                            <a
                                href="/faq"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                            >
                                View All FAQs
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default SupportPage;

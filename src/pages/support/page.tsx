import React, { useState } from 'react';
import { Button, Input, Heading, Text, Card } from "@/components/design-system";
import { Mail, MessageCircle, Phone, ChevronDown, CheckCircle2, Send, Loader2, AlertCircle } from "lucide-react";
import Footer from '@/components/ui/home/Footer';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { parseApiError } from '@/utils/errorHandler';

const faqs = [
    {
        question: "What is Revridge?",
        answer: "Revridge is a learning and simulation platform that helps beginners understand how investing works before risking real money. You can explore real stock market data, practice trades with virtual money, and build confidence at your own pace."
    },
    {
        question: "Can I invest real money on Revridge?",
        answer: "No — not yet. Revridge currently operates in simulation mode only. No real money is involved at any point. Real-money investing is a future capability we are working toward, and we'll be transparent when that changes."
    },
    {
        question: "What markets are available?",
        answer: "U.S. stocks (NYSE, NASDAQ) are available in simulation mode. Zambian stocks (Lusaka Securities Exchange / LuSE) are available as real data for browsing and analysis. Simulated LuSE trading is coming soon."
    },
    {
        question: "Is this safe to use?",
        answer: "Yes. Because no real money is involved, there is no financial risk to you. You can practice, make mistakes, and learn freely. Your account and personal data are protected with bank-level security."
    },
    {
        question: "What is Revridge's current status?",
        answer: "Revridge is currently in beta. The platform is a learning and simulation tool. U.S. stock simulation is live. LuSE data is available for browsing, and simulated LuSE trading is coming soon. We are actively building toward real-money investing in the future."
    },
    {
        question: "How do I get started?",
        answer: "You can download our early beta Android app today via our Download page. If you're on iOS, join our waitlist and we'll notify you when it's ready."
    },
    {
        question: "What support is available during beta?",
        answer: "We provide email support with responses within 24-48 hours. You can also contact us via WhatsApp or use in-app help. As we grow, we plan to add live chat and phone support."
    },
    {
        question: "Can I use Revridge from anywhere in Zambia?",
        answer: "Yes, Revridge is available to residents of Zambia. Expansion to other African countries is planned for the future as we complete regulatory requirements."
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

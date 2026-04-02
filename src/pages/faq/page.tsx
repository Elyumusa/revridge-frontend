import { Heading, Text, Card, CardContent } from "@/components/design-system";
import { ChevronDown } from "lucide-react";
import Footer from '@/components/ui/home/Footer';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    title: string;
    faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
    {
        title: "General",
        faqs: [
            {
                question: "What is Revridge?",
                answer: "Revridge is a learning and simulation platform that helps beginners understand how investing works. You can explore real stock market data, practice trades with virtual money, and build investing confidence — all without any real money involved."
            },
            {
                question: "Can I invest real money on Revridge?",
                answer: "No — not yet. Revridge currently operates in simulation mode only. No real money changes hands at any point. Real-money investing is a future capability we're actively building toward."
            },
            {
                question: "Is Revridge a bank?",
                answer: "No, Revridge is not a bank. It's a learning and simulation platform designed to help you understand investing before you commit real money."
            },
            {
                question: "Is this safe to use?",
                answer: "Yes. Because no real money is involved in simulation mode, there is zero financial risk. You're free to practice, make mistakes, and learn. Your account data is protected using bank-level security."
            },
            {
                question: "Who can use Revridge?",
                answer: "Revridge is currently available to residents of Zambia. Expansion to other African countries is planned for the future."
            }
        ]
    },
    {
        title: "Markets & Simulation",
        faqs: [
            {
                question: "Can I trade Zambian stocks?",
                answer: "Not yet. You can currently browse and explore Lusaka Securities Exchange (LuSE) stocks with real price data. Simulated LuSE trading is coming soon."
            },
            {
                question: "What U.S. stocks can I explore?",
                answer: "You can explore and simulate investing safely for most stocks listed on major U.S. exchanges (NYSE, NASDAQ). All U.S. investing features are in simulation mode — no real money is involved."
            },
            {
                question: "What is simulation mode?",
                answer: "Simulation mode lets you practice buying and selling stocks using virtual money. It's completely risk-free — there's no real money involved. It's designed to help you learn how markets work and build confidence before eventually investing for real."
            },
            {
                question: "What are the fees?",
                answer: "Revridge is currently free to use in simulation mode. No fees, no deposits, no financial risk. When real-money investing launches in the future, fee details will be shared clearly and in advance."
            },
            {
                question: "When will real-money investing be available?",
                answer: "We're actively working toward launching real-money investing in the future. We'll notify users on our waitlist when this becomes available. For now, we're focused on making the learning and simulation experience excellent."
            },
            {
                question: "What are fractional shares?",
                answer: "Fractional shares allow you to buy a portion of a stock rather than a whole share. For example, if a stock costs $1,000 per share, you could invest $10 and own 1% of a share. This makes expensive stocks more accessible — a concept you can explore in simulation today."
            }
        ]
    },
    {
        title: "Platform & Technology",
        faqs: [
            {
                question: "What platforms are supported?",
                answer: "Revridge is available as a mobile app for both iOS and Android devices."
            },
            {
                question: "Is there a demo mode?",
                answer: "Yes! Practice trading risk-free in demo mode before using real money. This is perfect for learning how the platform works and building your investing confidence."
            },
            {
                question: "How do I download the app?",
                answer: "Our Android app is currently available in early beta. iOS users can join our waitlist on the Download page to be notified when the app is ready."
            },
            {
                question: "What is the current status of the platform?",
                answer: "Revridge is currently in early beta. Core simulation features for U.S. stocks are available, and Zambian market access is view-only. We're actively gathering feedback and improving the learning platform."
            },
            {
                question: "Do I need internet to use the app?",
                answer: "The app has offline mode support with cached data, but you'll need an internet connection for real-time quotes and to execute trades."
            }
        ]
    },
    {
        title: "Security & Privacy",
        faqs: [
            {
                question: "How is my data protected?",
                answer: "We use bank-level encryption, secure authentication, and follow industry best practices for data protection to ensure your information is safe."
            },
            {
                question: "What authentication methods are available?",
                answer: "We offer multiple authentication options including email/password, Google Sign-In, biometric authentication (fingerprint/face ID), and PIN code protection for app access."
            },
            {
                question: "Is my money safe?",
                answer: "Since Revridge currently operates purely in simulation mode, there is zero financial risk on our platform. You cannot lose real money because no real money is deposited or invested. Your personal data and account details are protected using bank-level security."
            },
            {
                question: "What if I forget my PIN?",
                answer: "You can reset your PIN using your email or biometric authentication (if enabled on your device)."
            },
            {
                question: "Who has access to my personal information?",
                answer: "Your personal information is protected and only used for account management and regulatory compliance. We do not sell your data to third parties. See our Privacy Policy for full details."
            }
        ]
    },
    {
        title: "Support",
        faqs: [
            {
                question: "How do I get help?",
                answer: "You can use in-app support, email us through our Support page, or check this FAQ section. We aim to respond to all inquiries within 24-48 hours during beta."
            },
            {
                question: "What are support hours?",
                answer: "During beta, we provide email support with responses within 24-48 hours. As we grow, we plan to add live chat during market hours and phone support for complex issues."
            },
            {
                question: "How do I report a bug?",
                answer: "You can report bugs directly through the app's feedback feature or by emailing our support team. We appreciate all feedback as it helps us improve the platform."
            },
            {
                question: "Can I provide feedback or feature requests?",
                answer: "Absolutely! We encourage beta users to share feedback and feature requests. Your input helps shape the future of Revridge. Use the in-app feedback feature or contact our support team."
            }
        ]
    }
];

const FAQAccordion = ({ question, answer }: FAQItem) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors group"
            >
                <Text className="font-semibold text-lg pr-4 group-hover:text-primary">{question}</Text>
                <ChevronDown
                    size={20}
                    className={cn(
                        "shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180 text-primary"
                    )}
                />
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                )}
            >
                <Text className="text-muted-foreground leading-relaxed">{answer}</Text>
            </div>
        </div>
    );
};

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-secondary/20 skew-y-3 origin-top-left scale-110" />
                    <div className="container relative z-10 px-4 md:px-6 text-center space-y-6 animate-fade-in-up">
                        <Heading level="h1" className="text-4xl md:text-6xl font-black tracking-tight">
                            Frequently Asked Questions
                        </Heading>
                        <Text size="lg" className="max-w-3xl mx-auto text-muted-foreground md:text-xl leading-relaxed">
                            Everything you need to know about Revridge, investing, and our platform.
                        </Text>
                    </div>
                </section>

                {/* FAQ Categories */}
                <section className="py-16 bg-background">
                    <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                        <div className="space-y-12">
                            {faqCategories.map((category, idx) => (
                                <div key={idx} className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-1 w-12 bg-primary rounded-full" />
                                        <Heading level="h2" className="text-2xl font-bold">
                                            {category.title}
                                        </Heading>
                                    </div>
                                    <Card variant="glass" className="border-border/50">
                                        <CardContent className="p-0">
                                            {category.faqs.map((faq, faqIdx) => (
                                                <FAQAccordion key={faqIdx} {...faq} />
                                            ))}
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Still Have Questions CTA */}
                <section className="py-24 bg-secondary/30">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <Heading level="h2" className="text-3xl md:text-4xl font-bold">
                                Still Have Questions?
                            </Heading>
                            <Text className="text-muted-foreground text-lg">
                                Can't find the answer you're looking for? Our support team is here to help.
                            </Text>
                            <div className="pt-4">
                                <a
                                    href="/support"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

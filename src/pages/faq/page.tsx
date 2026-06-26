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
                answer: "Revridge is an investing platform and your digital front door to the Lusaka Securities Exchange (LuSE). You place real buy and sell orders on LuSE stocks, a licensed broker executes them on your behalf, and you track every stage from submitted to executed. U.S. stocks are available in a free practice sandbox."
            },
            {
                question: "Can I invest real money on Revridge?",
                answer: "Yes. You can place real buy and sell orders on LuSE stocks through Revridge; a licensed broker executes them on your behalf. Investing on the LuSE is launching soon — join the waitlist to be notified. U.S. stocks remain a free, simulated practice sandbox."
            },
            {
                question: "Is Revridge a bank or a broker?",
                answer: "No. Revridge is neither a bank nor a broker-dealer. It's an investing platform and order-routing service. Real trades on the LuSE are executed, settled, and custodied by licensed third-party brokers. U.S. stock features are simulated for education."
            },
            {
                question: "Is this safe to use?",
                answer: "Yes. Your real orders go to licensed brokers who handle execution, settlement, and custody of your securities. Your account data is protected with bank-level security, and you can see the status of every order at every stage."
            },
            {
                question: "Who can use Revridge?",
                answer: "Revridge is currently available to residents of Zambia. Expansion to other African countries is planned for the future."
            }
        ]
    },
    {
        title: "Markets & Investing",
        faqs: [
            {
                question: "Can I invest in Zambian stocks?",
                answer: "Yes. You can place real buy and sell orders on Lusaka Securities Exchange (LuSE) stocks through Revridge, routed to a licensed broker for execution. Investing on the LuSE is launching soon."
            },
            {
                question: "How does execution work?",
                answer: "When you place an order, Revridge captures your order intent and routes it to a licensed broker. The broker executes it on the LuSE and returns the fill — price, time, and any fees. You track the whole lifecycle live: Submitted → Sent to broker → Executed. Your portfolio updates from broker-confirmed executions, not estimates."
            },
            {
                question: "What U.S. stocks can I explore?",
                answer: "You can explore and practice investing in most stocks listed on major U.S. exchanges (NYSE, NASDAQ) in a free virtual sandbox. All U.S. features are simulated — no real money is involved."
            },
            {
                question: "What is simulation mode?",
                answer: "Simulation (sandbox) mode lets you practice buying and selling U.S. stocks using virtual money. It's completely risk-free — there's no real money involved — and it's designed to help you learn how markets work. It applies only to U.S. stocks; LuSE investing is real."
            },
            {
                question: "What are the fees?",
                answer: "U.S. stock simulation is free to use. For investing on the LuSE, broker execution fees and any applicable charges will be shown clearly before you place an order, and detailed fee information will be shared in advance of launch."
            },
            {
                question: "What are fractional shares?",
                answer: "Fractional shares allow you to buy a portion of a stock rather than a whole share. For example, if a stock costs ZMW 1,000 per share, you could invest a smaller amount and own a fraction of a share. This makes expensive stocks more accessible — a concept you can explore today in the U.S. sandbox."
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
                answer: "Yes! You can practice trading U.S. stocks risk-free in a virtual sandbox before (or alongside) placing real LuSE orders. It's perfect for learning how markets work and building your investing confidence."
            },
            {
                question: "How do I download the app?",
                answer: "Our Android app is currently available in early beta. iOS users can join our waitlist on the Download page to be notified when the app is ready."
            },
            {
                question: "What is the current status of the platform?",
                answer: "Revridge is in early beta. U.S. stock simulation is available today, and investing on the LuSE through licensed brokers is launching soon. We're actively gathering feedback and improving the platform."
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
                answer: "Your real LuSE orders are executed and held by licensed brokers, who are responsible for execution, settlement, and custody — Revridge does not hold client funds or securities. Your personal data and account details are protected with bank-level security, and you can track the status of every order in real time. U.S. stock features are simulated, so no real money is at risk there."
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

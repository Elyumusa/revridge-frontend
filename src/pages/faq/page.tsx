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
        title: "Getting Started",
        faqs: [
            {
                question: "What is Revridge?",
                answer: "Revridge is a wealth-building app. It helps you learn about investing, plan and track financial goals, follow your net worth, and invest when you are ready. Investing is available today on the Lusaka Securities Exchange (LuSE)."
            },
            {
                question: "Can I invest real money on Revridge?",
                answer: "Eligible users can submit LuSE investment orders through Revridge. Orders are routed to a licensed broker for review and execution. Availability depends on identity verification, broker approval, market hours, and applicable product requirements."
            },
            {
                question: "Is Revridge a bank or a broker?",
                answer: "No. Revridge is a technology platform. Licensed broker partners are responsible for executing, settling, and holding securities associated with LuSE orders. Revridge does not hold client securities."
            },
            {
                question: "Where should I begin?",
                answer: "Start in Learn to understand the basics, set a goal in Grow, and visit Invest when you are ready to explore LuSE-listed companies and complete the required onboarding."
            },
            {
                question: "Who can use Revridge?",
                answer: "The current product is focused on Zambia. Some investing features may have additional residency, age, identity, or broker-approval requirements."
            }
        ]
    },
    {
        title: "Investing",
        faqs: [
            {
                question: "Which market is available in Invest?",
                answer: "Investing through Revridge is currently available on shares listed on the Lusaka Securities Exchange (LuSE). Any other product or market you may have seen discussed is not available yet, and we will say so clearly in the app when that changes."
            },
            {
                question: "How does execution work?",
                answer: "Revridge records your order and routes it to a licensed broker. The broker reviews and, when accepted, executes it on the LuSE. Your order status and portfolio are updated from broker confirmations."
            },
            {
                question: "What are the fees?",
                answer: "Applicable broker, exchange, regulatory, and service charges should be shown before an order is confirmed. Review the order summary carefully because fees may vary by order and partner."
            },
            {
                question: "Does submitting an order guarantee execution?",
                answer: "No. An order can remain pending, be rejected, expire, or execute at a different available price. Market conditions and broker checks affect the outcome."
            }
        ]
    },
    {
        title: "Learn, Grow & Track",
        faqs: [
            {
                question: "What can I learn in the app?",
                answer: "Learn includes structured financial lessons, investing basics, risk and diversification topics, and a searchable jargon buster."
            },
            {
                question: "Does Revridge hold the money in my savings goals?",
                answer: "No. Savings goals are tracking tools. You keep money in your own bank or mobile-money account and record progress in Revridge."
            },
            {
                question: "Are calculator results guaranteed?",
                answer: "No. Calculators are educational planning estimates based on the inputs you provide. Actual returns, inflation, taxes, fees, and market conditions can differ."
            },
            {
                question: "What does the Home screen track?",
                answer: "Home brings together your next action, learning progress, LuSE portfolio snapshot, current goal, net worth, and recent activity where data is available."
            }
        ]
    },
    {
        title: "Security & Privacy",
        faqs: [
            {
                question: "How is my data protected?",
                answer: "Revridge uses encrypted network connections, authenticated access, and access controls appropriate to the service. See the Privacy Policy for the categories of data we collect and the service providers involved."
            },
            {
                question: "What authentication methods are available?",
                answer: "We offer multiple authentication options including email/password, Google Sign-In, biometric authentication (fingerprint/face ID), and PIN code protection for app access."
            },
            {
                question: "Is my money safe?",
                answer: "Revridge does not custody securities. A licensed broker partner is responsible for execution, settlement, and custody for accepted LuSE orders. Investing always carries risk, including possible loss of capital."
            },
            {
                question: "What if I forget my PIN?",
                answer: "You can reset your PIN using your email or biometric authentication (if enabled on your device)."
            },
            {
                question: "Who has access to my personal information?",
                answer: "Authorised Revridge personnel and service providers may access information where needed to operate the service. Broker partners receive information required for onboarding and orders. See the Privacy Policy for details."
            }
        ]
    },
    {
        title: "Support",
        faqs: [
            {
                question: "How do I get help?",
                answer: "You can use in-app support, email us through our Support page, or check this FAQ section. Response times can vary during beta."
            },
            {
                question: "What are support hours?",
                answer: "During beta, you can contact us through email, WhatsApp, and the in-app support options. Response times and channels may change as the service develops."
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
                className="group flex w-full items-center justify-between py-6 text-left hover:text-primary"
            >
                <span className="pr-4 text-lg font-[670] group-hover:text-primary">{question}</span>
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
                <p className="max-w-3xl leading-7 text-muted-foreground">{answer}</p>
            </div>
        </div>
    );
};

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main id="main-content" className="flex-1">
                <header className="page-hero border-b border-border">
                    <div className="site-container max-w-5xl">
                        <h1 className="font-[760] tracking-[-0.04em]">Clear answers before you move money.</h1>
                        <p className="section-copy mt-6">How Revridge works, what licensed brokers handle, and what to expect from investing on the LuSE.</p>
                    </div>
                </header>

                {/* FAQ Categories */}
                <section className="site-section bg-white">
                    <div className="site-container max-w-5xl">
                        <div className="space-y-16">
                            {faqCategories.map((category, idx) => (
                                <div key={idx} className="grid gap-6 md:grid-cols-[220px_1fr]">
                                    <h2 className="text-2xl font-[720]">{category.title}</h2>
                                    <div className="border-y border-border">
                                            {category.faqs.map((faq, faqIdx) => (
                                                <FAQAccordion key={faqIdx} {...faq} />
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Still Have Questions CTA */}
                <section className="site-section border-t border-border bg-[#F5F7F6]">
                    <div className="site-container">
                        <div className="max-w-3xl space-y-6">
                            <h2 className="section-title">Still have a question?</h2>
                            <p className="section-copy">Send it to the Revridge support team.</p>
                            <div>
                                <a
                                    href="/support"
                                    className="store-action store-action--filled"
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

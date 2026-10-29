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
            { question: "What is Revridge?", answer: "Revridge brings investing education, goals, savings tracking, and U.S. stock discovery together. You can connect an Alpaca account you own to view it and, with trading permission, use paper trading." },
            { question: "Can I invest real money on Revridge?", answer: "Not yet. Paper trading with virtual money is available. Live trading through Alpaca Connect awaits Alpaca approval and a separate release; we will clearly identify it when available." },
            { question: "Is Revridge a bank or broker?", answer: "No. Revridge provides the app and requests your permission through Alpaca Connect. Alpaca opens and administers your brokerage account and handles identity checks, funding, orders, settlement, and custody." },
            { question: "Where should I begin?", answer: "Explore Learn and Grow without an Alpaca account. In Invest, you can learn about U.S. securities and connect your own Alpaca paper account for practice." },
            { question: "Who can use Revridge?", answer: "You can use learning and planning features without connecting an Alpaca account. Alpaca determines eligibility for its accounts and services under its own requirements." }
        ]
    },
    {
        title: "Alpaca Connect & Investing",
        faqs: [
            { question: "Which investments are in Invest?", answer: "The current Invest experience focuses on supported U.S. securities through Alpaca. LuSE shares and unit trusts are not offered in this experience." },
            { question: "What permission does Revridge request?", answer: "Connect lets you authorize Revridge to view your Alpaca account. Trading permission is separate. Revridge cannot submit or cancel orders with a read-only connection. You can disconnect or reconnect in the app." },
            { question: "Who opens and funds my Alpaca account?", answer: "Alpaca handles account opening, identity checks, deposits, withdrawals, statements, and account administration on its own service. Revridge does not ask for your Alpaca password, bank credentials, or Trading API keys." },
            { question: "How does paper trading work?", answer: "Paper orders use virtual money and a paper Alpaca account. They are for practice and are never included in your real net worth. An order may be accepted without being filled." },
            { question: "What are the fees?", answer: "Review any applicable fees and order details in Alpaca's terms and the relevant order flow. Revridge does not quote a fixed fee here because live trading has not launched." },
            { question: "Does submitting an order guarantee a fill?", answer: "No. An order may remain pending, fill, be canceled, or be rejected. A submitted or accepted paper order is not proof that a real trade occurred." }
        ]
    },
    {
        title: "Learn, Grow & Track",
        faqs: [
            { question: "What can I learn in the app?", answer: "Learn includes financial lessons, investing basics, risk and diversification topics, and a searchable jargon buster." },
            { question: "Does Revridge hold money in my savings goals?", answer: "No. Savings goals are tracking tools. You keep money in your own account and record progress in Revridge." },
            { question: "Are calculator results guaranteed?", answer: "No. Calculators are educational estimates based on your inputs. Actual returns, inflation, taxes, fees, and market conditions can differ." },
            { question: "What does Home track?", answer: "Home brings together learning, goals, savings, and net worth. Paper trading balances are separate from real net worth." }
        ]
    },
    {
        title: "Security & Privacy",
        faqs: [
            { question: "How is my data protected?", answer: "Revridge uses encrypted connections, authenticated access, and access controls. See the Privacy Policy for the data categories and providers involved." },
            { question: "What if my Alpaca connection expires?", answer: "Account-dependent views and trading stop until you reconnect through Alpaca. You can also disconnect Revridge without closing your Alpaca account." },
            { question: "Who has access to my information?", answer: "Authorized Revridge personnel and service providers may access information needed to operate the app. Alpaca handles its account and verification data under its own privacy policy. See our Privacy Policy for details." }
        ]
    },
    {
        title: "Support",
        faqs: [
            { question: "How do I get help with Revridge?", answer: "Use in-app support or our Support page for app and connection questions. For account opening, identity checks, funding, withdrawals, and statements, contact Alpaca." },
            { question: "How do I report a bug?", answer: "Report a problem through the app's feedback feature or our Support page, including the screen and what happened." }
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
                    <h1>Clear answers before you connect.</h1>
                        <p className="section-copy mt-6">What Alpaca handles, what Revridge can access, and when trading is available.</p>
                    </div>
                </header>

                {/* FAQ Categories */}
                <section className="bg-[#F5F7F6] py-16 md:py-24">
                    <div className="site-container max-w-5xl">
                        <div className="space-y-6">
                            {faqCategories.map((category, idx) => (
                                <div key={idx} className="grid gap-6 rounded-[clamp(24px,3vw,36px)] bg-white p-7 md:grid-cols-[220px_1fr] md:p-10">
                                    <h2 className="text-2xl font-[680] tracking-[-.03em]">{category.title}</h2>
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
                <section className="bg-white py-16 md:py-24">
                    <div className="site-container">
                        <div className="hero-glow rounded-[clamp(28px,4vw,48px)] p-8 text-white sm:p-12 lg:p-16 space-y-6">
                            <h2 className="display-lg max-w-[12ch] text-white">Still have a question?</h2>
                            <p className="lead-copy max-w-[40ch] text-white/75">Send it to the Revridge support team.</p>
                            <div>
                                <a
                                    href="/support"
                                    className="pill-btn pill-btn--white"
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

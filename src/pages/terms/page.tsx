import React from 'react';
import { Heading, Text } from '@/components/design-system';
import { AlertTriangle, Shield, Users, Scale, Mail } from 'lucide-react';
import Footer from '@/components/ui/home/Footer';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main id="main-content" className="flex-1">
                {/* Hero Section */}
                <section className="page-hero border-b border-border">
                    <div className="site-container max-w-4xl">
                        <Heading level="h1" className="font-[760] tracking-[-0.04em] mb-5">
                            Terms of Service
                        </Heading>
                        <Text className="text-muted-foreground text-lg">
                            Last Updated: August 14, 2026
                        </Text>
                    </div>
                </section>

                {/* Content */}
                <section className="site-section bg-white">
                    <div className="site-container max-w-4xl">
                        <div className="legal-copy">

                            {/* Introduction */}
                            <div className="mb-12">
                                <Text className="text-lg leading-relaxed">
                                    Welcome to <strong>Revridge</strong>, an investing platform and order-routing service that lets you place investment orders on the Lusaka Securities Exchange (LuSE) through licensed brokers. By accessing or using our mobile application or website at{' '}
                                    <a href="https://revridge.xyz" className="text-primary hover:underline">revridge.xyz</a>,
                                    you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our app or website.
                                </Text>
                            </div>

                            {/* Important Notice */}
                            <div className="rounded-[12px] border border-[#F59E0B]/35 bg-[#F59E0B]/10 p-6 mb-12">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="h-6 w-6 text-[#765000] flex-shrink-0 mt-1" />
                                    <div>
                                        <Heading level="h2" className="text-2xl font-bold mb-3 text-[#5E4A16]">
                                            Important: How Revridge Works
                                        </Heading>
                                        <Text className="mb-4 font-semibold text-[#5E4A16]">
                                            Revridge is an investing platform, <strong>not</strong> a broker-dealer. We route orders; licensed brokers execute them.
                                        </Text>
                                        <ul className="list-disc pl-6 space-y-2 text-[#5E4A16]">
                                            <li>You can place <strong>real buy and sell orders</strong> on LuSE-listed stocks; a licensed broker executes, settles, and custodies them</li>
                                            <li>Revridge <strong>does not</strong> execute trades, settle transactions, or hold client funds or securities</li>
                                            <li>Learning and planning tools are educational and do not predict or guarantee investment outcomes</li>
                                            <li>You can track the status of every order: Submitted → Sent to broker → Executed</li>
                                            <li className="font-semibold">LuSE investing availability depends on release status, identity checks, broker approval, and applicable product requirements.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 1 */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">1. Acceptance of Terms</Heading>
                                </div>
                                <Text className="mb-4">By creating an account and using Revridge, you acknowledge that:
                                </Text>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>You are at least 18 years old or have parental/guardian consent</li>
                                    <li>You have read and understood these Terms of Service</li>
                                    <li>You agree to comply with all applicable laws and regulations</li>
                                    <li>You understand that Revridge is an investing platform and order-routing service, not a broker-dealer, and that LuSE orders are executed by licensed third-party brokers</li>
                                </ul>
                            </div>

                            {/* Section 2 */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">2. Account Registration</Heading>
                                </div>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">2.1 Account Creation</Heading>
                                <Text className="mb-6">
                                    You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">2.2 Identity Verification (KYC)</Heading>
                                <Text className="mb-6">
                                    To place orders on the LuSE, you must complete identity verification (Know Your Customer, or KYC). You agree to provide accurate, current identification and supporting documents, and to keep them up to date. We share the information necessary to onboard you with the licensed broker that executes your orders.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">2.3 The Broker Relationship</Heading>
                                <Text className="mb-6">
                                    Real orders on the LuSE are executed, settled, and custodied by a licensed third-party broker — not by Revridge. Your brokerage relationship, including account opening, execution, settlement, custody, and any fees, is governed by that broker's own terms and applicable regulations. Revridge facilitates order creation and tracking, and reflects broker-confirmed executions in your portfolio.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">2.4 Learning and Planning Tools</Heading>
                                <Text className="mb-6">
                                    Lessons, calculators, goals, and planning tools are provided for general education. Calculator results are estimates based on the information and historical data supplied; they are not forecasts, recommendations, or guarantees.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">2.5 Account Security</Heading>
                                <Text>
                                    You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized access.
                                </Text>
                            </div>

                            {/* Section 3 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">3. The Service: Learn, Grow, and LuSE Investing</Heading>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">3.1 Investing on the LuSE</Heading>
                                <Text className="mb-6">
                                    Where available, eligible users may submit buy and sell orders for supported Lusaka Securities Exchange (LuSE) shares through Revridge. We route eligible orders to a licensed broker for execution. Portfolio and history information reflects status and confirmations received from the broker and may be corrected or delayed.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">3.2 Learning and Wealth Tools</Heading>
                                <Text className="mb-6">
                                    Revridge may provide lessons, calculators, goals, savings tools, and progress tracking. This content is general education and is not personalized financial advice. You remain responsible for the information you enter and the decisions you make.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">3.3 Market Data</Heading>
                                <Text className="mb-6">
                                    We provide market information from third-party data sources for informational and order-entry purposes.
                                    While we strive for accuracy, data may occasionally be delayed. <strong>Always verify critical information before making investment decisions.</strong>
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">3.4 No Financial Advice</Heading>
                                <Text>
                                    Revridge does not provide financial, investment, or trading advice. All information is for educational purposes only.
                                    Consult a licensed financial advisor for personalized investment guidance.
                                </Text>
                            </div>

                            {/* Section 4 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">4. User Conduct</Heading>
                                <Text className="mb-4">You agree <strong>NOT</strong> to:</Text>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Use the app for any illegal purposes</li>
                                    <li>Attempt to hack, disrupt, or damage the app</li>
                                    <li>Share your account with others</li>
                                    <li>Provide false or misleading information, including during identity verification (KYC)</li>
                                    <li>Use automated bots or scripts</li>
                                    <li>Harass or abuse other users</li>
                                    <li>Present estimates, educational content, or historical examples as guaranteed investment outcomes</li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">5. Intellectual Property</Heading>
                                <Text>
                                    All content, features, and functionality of Revridge are owned by <strong>Revridge Finance</strong> and are protected by copyright, trademark, and other intellectual property laws.
                                    You may not copy, modify, distribute, or reverse engineer any part of the app.
                                </Text>
                            </div>

                            {/* Section 6 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">6. Disclaimers</Heading>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">6.1 No Warranty</Heading>
                                <Text className="mb-6">
                                    THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee the app will be error-free or uninterrupted.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">6.2 Investment Risk</Heading>
                                <div className="rounded-[10px] border border-[#B71C1C]/25 bg-[#B71C1C]/5 p-4 mb-6">
                                    <Text className="font-semibold text-[#7E1717]">
                                        ALL INVESTMENTS INVOLVE RISK, INCLUDING THE POSSIBLE LOSS OF THE PRINCIPAL AMOUNT INVESTED. PAST PERFORMANCE DOES NOT GUARANTEE FUTURE RESULTS.
                                    </Text>
                                    <Text className="text-[#7E1717] mt-2">
                                        Historical examples and calculator estimates are not indicative of future results. Consult a licensed financial advisor before making investment decisions.
                                    </Text>
                                </div>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">6.3 No Liability for Losses</Heading>
                                <Text>
                                    We are not liable for any losses, damages, or consequences resulting from your use of the app, including investment decisions, broker execution outcomes, or decisions based on educational content or calculator estimates. Execution, settlement, and custody of LuSE trades are the responsibility of the licensed broker.
                                </Text>
                            </div>

                            {/* Section 7 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">7. Limitation of Liability</Heading>
                                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                                    <Text className="uppercase text-sm">
                                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, REVRIDGE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                                        INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE APP.
                                    </Text>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">8. Data Collection and Privacy</Heading>
                                <Text>
                                    We collect and use your personal information as described in our{' '}
                                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                                    Please review our Privacy Policy for details on how we collect, use, share, retain, and protect personal information and the choices available to you. Where consent is required, it will be requested separately.
                                </Text>
                            </div>

                            {/* Section 9 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">9. Termination</Heading>
                                <Text className="mb-4">We reserve the right to suspend or terminate your account at any time for:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Violation of these Terms of Service</li>
                                    <li>Fraudulent or illegal activity</li>
                                    <li>Abuse of the platform</li>
                                    <li>Any other reason at our sole discretion</li>
                                </ul>
                                <Text>You may delete your account at any time through the app settings.</Text>
                            </div>

                            {/* Section 10 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">10. Changes to Terms</Heading>
                                <Text>
                                    We may update these Terms of Service from time to time. We will notify you of significant changes through the app or via email.
                                    Continued use of the app after changes constitutes acceptance of the new terms.
                                </Text>
                            </div>

                            {/* Section 11 */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <Scale className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">11. Governing Law</Heading>
                                </div>
                                <Text>
                                    These Terms of Service shall be governed by and construed in accordance with the laws of <strong>Zambia</strong>.
                                    Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Zambia.
                                </Text>
                            </div>

                            {/* Contact Section */}
                            <div className="mb-12 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">12. Contact Us</Heading>
                                </div>
                                <Text className="mb-4">If you have any questions about these Terms of Service, please contact us:</Text>
                                <div className="space-y-2">
                                    <Text><strong>Email:</strong> <a href="mailto:support@revridge.xyz" className="text-primary hover:underline">support@revridge.xyz</a></Text>
                                    <Text><strong>Website:</strong> <a href="https://revridge.xyz" className="text-primary hover:underline">revridge.xyz</a></Text>
                                    <Text className="mt-4">
                                        <strong>Revridge Finance</strong><br />
                                        Lusaka, Zambia
                                    </Text>
                                </div>
                            </div>

                            {/* Acceptance */}
                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-12">
                                <Heading level="h3" className="text-xl font-semibold mb-3">Acceptance</Heading>
                                <Text>
                                    By using Revridge, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                                </Text>
                            </div>

                            {/* Footer */}
                            <div className="text-center text-muted-foreground text-sm border-t pt-6">
                                <Text>© 2026 Revridge. All rights reserved.</Text>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfServicePage;

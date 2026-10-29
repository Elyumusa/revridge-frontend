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
                        <Heading level="h1" className="mb-5">
                            Terms of Service
                        </Heading>
                        <Text className="text-muted-foreground text-lg">
                            Last Updated: October 29, 2026
                        </Text>
                    </div>
                </section>

                {/* Content */}
                <section className="bg-[#F5F7F6] py-12 md:py-20">
                    <div className="site-container page-panel max-w-4xl">
                        <div className="legal-copy">

                            {/* Introduction */}
                            <div className="mb-12">
                                <Text className="text-lg leading-relaxed">
                                    Welcome to <strong>Revridge</strong>, a personal finance app with learning, planning, and U.S. investing features. Through Alpaca Connect, you can authorize Revridge to view an Alpaca account you own and, if you separately grant trading permission, submit orders for that account when the relevant trading environment is available. By accessing or using our mobile application or website at{' '}
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
                                            Revridge provides the app experience and is <strong>not</strong> a broker-dealer. Your Alpaca account is opened and administered by Alpaca.
                                        </Text>
                                        <ul className="list-disc pl-6 space-y-2 text-[#5E4A16]">
                                            <li>Paper trading uses virtual money. Live trading through Connect awaits Alpaca approval and release; paper activity is not a real investment.</li>
                                            <li>Alpaca handles account opening, identity checks, funding, withdrawals, execution, settlement, custody, and account administration. Revridge does not hold client funds or securities.</li>
                                            <li>Learning and planning tools are educational and do not predict or guarantee investment outcomes</li>
                                            <li>With the required permission, Revridge can show account information and let you review and submit an order; an order may be pending, filled, canceled, or rejected.</li>
                                            <li className="font-semibold">Account and trading eligibility depend on Alpaca requirements, granted permissions, and product availability.</li>
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
                                    <li>You are at least 18 years old</li>
                                    <li>You have read and understood these Terms of Service</li>
                                    <li>You agree to comply with all applicable laws and regulations</li>
                                    <li>You understand that Revridge is not a broker-dealer and that Alpaca provides the brokerage account and handles orders submitted through an authorized connection</li>
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
                                    Alpaca handles identity verification and any supporting documents needed to open and use your Alpaca account. You provide that information to Alpaca under its own process and terms. Revridge does not collect Alpaca onboarding documents through Connect.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">2.3 The Broker Relationship</Heading>
                                <Text className="mb-6">
                                    Your Alpaca account and brokerage relationship, including account opening, funding, withdrawals, execution, settlement, custody, and fees, are governed by Alpaca's own terms and applicable rules. Revridge requests your permission through Alpaca Connect to view account data and, if you choose, to trade. You can manage the connection in Revridge. Disconnecting Revridge does not close your Alpaca account.
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
                                <Heading level="h2" className="text-2xl font-bold mb-4">3. The Service: Learn, Grow, and U.S. Investing</Heading>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">3.1 Investing Through Alpaca Connect</Heading>
                                <Text className="mb-6">
                                    Revridge's Invest experience covers supported U.S. securities through an Alpaca account you own. Paper trading is available for practice with virtual money. Live trading is not currently available through Revridge and depends on Alpaca approval and a separate release. Account views require your authorization; order submission also requires trading permission. Account, portfolio, and order information comes from Alpaca and may be delayed or corrected.
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
                                    We are not liable for any losses, damages, or consequences resulting from your use of the app, including investment decisions, Alpaca execution outcomes, or decisions based on educational content or calculator estimates. Alpaca is responsible for brokerage account services, execution, settlement, and custody under its own terms.
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

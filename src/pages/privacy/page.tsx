import React from 'react';
import { Heading, Text } from '@/components/design-system';
import { Lock, Eye, Users, FileText, Mail, Smartphone, Camera, HardDrive, Fingerprint } from 'lucide-react';
import Footer from '@/components/ui/home/Footer';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main id="main-content" className="flex-1">
                {/* Hero Section */}
                <section className="page-hero border-b border-border">
                    <div className="site-container max-w-4xl">
                        <Heading level="h1" className="font-[760] tracking-[-0.04em] mb-5">
                            Privacy Policy
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
                                    <strong>Revridge Finance</strong> ("we," "our," or "us") operates the Revridge mobile application and website at{' '}
                                    <a href="https://revridge.xyz" className="text-primary hover:underline">revridge.xyz</a>.
                                    Revridge helps users learn about investing, plan and track wealth goals, and place investment orders on the Lusaka Securities Exchange (LuSE) through licensed brokers. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                                    Please read this policy carefully.
                                </Text>
                            </div>

                            {/* Section 1 */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <Eye className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">1. Information We Collect</Heading>
                                </div>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">1.1 Personal Information</Heading>
                                <Text className="mb-4">When you create an account, we collect:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Email address</li>
                                    <li>Authentication credentials managed by our authentication provider</li>
                                    <li>Name (if provided)</li>
                                    <li>Phone number (if provided)</li>
                                    <li>Profile picture (if uploaded)</li>
                                </ul>

                                <Text className="mb-4">To invest on the LuSE, you must complete identity verification (KYC). For this we additionally collect:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Government-issued identification details (e.g. National Registration Card, passport, or driver's license number)</li>
                                    <li>Images of your ID document and, where required, a selfie or liveness check</li>
                                    <li>Date of birth and residential address</li>
                                    <li>Any other information required by our licensed broker partners for onboarding and regulatory compliance</li>
                                </ul>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">1.2 Investment & Activity Data</Heading>
                                <Text className="mb-4">We collect information about how you use the investing, learning, and wealth-planning features:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>LuSE order history (buy/sell orders, status, and broker-confirmed executions)</li>
                                    <li>Portfolio holdings and performance (updated from broker confirmations)</li>
                                    <li>Learning progress and completed lessons</li>
                                    <li>Goals, savings, net-worth entries, and calculator inputs you choose to save</li>
                                    <li>Watchlist preferences</li>
                                    <li>Search queries</li>
                                </ul>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">1.3 Device Information</Heading>
                                <Text className="mb-4">We automatically collect:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Device type and model</li>
                                    <li>Operating system version</li>
                                    <li>Unique device identifiers</li>
                                    <li>IP address</li>
                                    <li>App version</li>
                                    <li>Mobile network information</li>
                                </ul>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">1.4 Usage Data</Heading>
                                <Text className="mb-4">We collect information about how you use the app:</Text>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Screen views and navigation patterns</li>
                                    <li>Features used</li>
                                    <li>Time spent in app</li>
                                    <li>Crash reports and error logs</li>
                                    <li>Performance metrics</li>
                                </ul>

                                {/* Section 1.5 */}
                                <div className="flex items-center gap-3 mt-8 mb-3">
                                    <Smartphone className="h-5 w-5 text-primary flex-shrink-0" />
                                    <Heading level="h3" className="text-xl font-semibold">1.5 Device Permissions and Access</Heading>
                                </div>
                                <Text className="mb-5">
                                    In order to provide core application functionality, the Revridge mobile application may request access to certain specialized features of your device. We only access these features with your explicit, on-device consent:
                                </Text>
                                <div className="space-y-4 mb-2">
                                    {/* Camera & Photos */}
                                    <div className="flex gap-4 p-4 rounded-lg border border-border bg-zinc-50 dark:bg-zinc-900">
                                        <div className="p-2 rounded-md bg-primary/10 h-fit flex-shrink-0">
                                            <Camera className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <Text className="font-semibold mb-1">Camera and Photos (Storage)</Text>
                                            <Text className="text-sm text-muted-foreground">
                                                We request access to your device's camera and photo library exclusively to allow you to capture and upload a profile picture or to facilitate identity verification. We do not access your camera or photos in the background, and we only collect the specific images you choose to upload.
                                            </Text>
                                        </div>
                                    </div>
                                    {/* Storage */}
                                    <div className="flex gap-4 p-4 rounded-lg border border-border bg-zinc-50 dark:bg-zinc-900">
                                        <div className="p-2 rounded-md bg-primary/10 h-fit flex-shrink-0">
                                            <HardDrive className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <Text className="font-semibold mb-1">Storage Access</Text>
                                            <Text className="text-sm text-muted-foreground">
                                                We request read and write access to your device's storage to save generated files, such as financial statements or transaction receipts, directly to your device for your personal records.
                                            </Text>
                                        </div>
                                    </div>
                                    {/* Biometrics */}
                                    <div className="flex gap-4 p-4 rounded-lg border border-border bg-zinc-50 dark:bg-zinc-900">
                                        <div className="p-2 rounded-md bg-primary/10 h-fit flex-shrink-0">
                                            <Fingerprint className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <Text className="font-semibold mb-1">Biometric Authentication</Text>
                                            <Text className="text-sm text-muted-foreground">
                                                Where enabled, the app uses your device's biometric authentication interface (such as Fingerprint or Face ID) to unlock the application. Revridge receives the authentication result, not your fingerprint or face template; the operating system manages the biometric verification.
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileText className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">2. How We Use Your Information</Heading>
                                </div>
                                <Text className="mb-4">We use your information to:</Text>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide and maintain the app</li>
                                    <li>Create and manage your account</li>
                                    <li>Verify your identity (KYC) and onboard you with the licensed broker that executes your orders</li>
                                    <li>Route your LuSE orders to the broker and reflect broker-confirmed executions in your portfolio</li>
                                    <li>Provide learning, goal, calculator, and wealth-tracking features</li>
                                    <li>Send you notifications about your portfolio and order status</li>
                                    <li>Improve app functionality and user experience</li>
                                    <li>Analyze usage patterns and trends</li>
                                    <li>Detect and prevent fraud or abuse</li>
                                    <li>Comply with legal and regulatory obligations</li>
                                    <li>Communicate with you about updates and features</li>
                                    <li>Provide customer support</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <Lock className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">3. Data Storage and Security</Heading>
                                </div>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">3.1 Where We Store Your Data</Heading>
                                <Text className="mb-4">Your data is stored using managed cloud infrastructure and service providers:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Managed cloud hosting and database services</li>
                                    <li>Infrastructure that may process data in multiple countries</li>
                                    <li>Provider-managed physical and operational safeguards</li>
                                </ul>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">3.2 Security Measures</Heading>
                                <Text className="mb-4">We and our providers use technical and organizational measures designed to protect personal information, including:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Encrypted network connections</li>
                                    <li>Authenticated account access</li>
                                    <li>Managed cloud-storage protections</li>
                                    <li>Service access controls and permissions</li>
                                </ul>
                                <Text className="mb-6">No internet transmission or storage system can guarantee absolute security.</Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">3.3 Data Retention</Heading>
                                <Text>
                                    We retain information for as long as needed to provide the service and meet legal, security, fraud-prevention, dispute, broker, and regulatory obligations. You may request deletion of information under our control; some records may need to be retained, and a broker may retain data under its own obligations.
                                </Text>
                            </div>

                            {/* Section 4 */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">4. Third-Party Services</Heading>
                                </div>
                                <Text className="mb-4">We partner with trusted third-party service providers to deliver our platform:</Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">4.1 Cloud Infrastructure</Heading>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Cloud hosting and database services</li>
                                    <li>Authentication and user management systems</li>
                                    <li>Analytics and performance monitoring</li>
                                    <li>Push notifications and messaging</li>
                                </ul>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">4.2 Licensed Brokers & Market Data</Heading>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Licensed Zambian brokers who execute, settle, and custody your LuSE trades</li>
                                    <li>Market-information and stock-data providers</li>
                                </ul>
                                <Text className="mb-6 text-sm">
                                    To place LuSE orders, we share the information necessary to onboard you and route your orders — including your KYC details — with the licensed broker that executes them. The broker is an independent controller of the personal data it receives and handles it under its own privacy policy and applicable regulations.
                                </Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">4.3 Analytics & Support</Heading>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Usage analytics and crash reporting</li>
                                    <li>Customer support and communication tools</li>
                                </ul>

                                <Text className="mb-4">We use service providers under applicable agreements and share information needed for the relevant service, legal obligation, or user request.</Text>
                            </div>

                            {/* Section 5 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">5. Data Sharing and Disclosure</Heading>
                                <div className="rounded-[10px] border border-primary/20 bg-primary/10 p-4 mb-6">
                                    <Text className="font-semibold">We do NOT sell your personal information to third parties.</Text>
                                </div>

                                <Text className="mb-4">We may share your information in the following circumstances:</Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">5.1 Service Providers & Brokers</Heading>
                                <Text className="mb-6">With trusted third-party service providers who help us operate the platform — including cloud infrastructure, market data providers, analytics services, and the licensed brokers who execute, settle, and custody your LuSE trades.</Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">5.2 Legal Requirements</Heading>
                                <Text className="mb-6">If required by law, court order, or government regulation.</Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">5.3 Business Transfers</Heading>
                                <Text className="mb-6">In connection with a merger, acquisition, or sale of assets.</Text>

                                <Heading level="h3" className="text-xl font-semibold mt-6 mb-3">5.4 With Your Consent</Heading>
                                <Text>When you explicitly consent to sharing your information.</Text>
                            </div>

                            {/* Section 6 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">6. Your Privacy Rights</Heading>
                                <Text className="mb-4">You have the right to:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Access your personal data</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Export your data</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                                <Text>
                                    To exercise these rights, contact us at{' '}
                                    <a href="mailto:support@revridge.xyz" className="text-primary hover:underline">support@revridge.xyz</a>{' '}
                                    or use the in-app settings.
                                </Text>
                            </div>

                            {/* Section 7 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</Heading>
                                <Text className="mb-4">We use cookies and similar tracking technologies to:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Maintain your session</li>
                                    <li>Remember your preferences</li>
                                    <li>Analyze app usage</li>
                                    <li>Improve performance</li>
                                </ul>
                                <Text>
                                    You can control cookies through your device settings, but some features may not work properly if disabled.
                                </Text>
                            </div>

                            {/* Section 8 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">8. Children's Privacy</Heading>
                                <Text>
                                    Revridge is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
                                    If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                                </Text>
                            </div>

                            {/* Section 9 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">9. International Users</Heading>
                                <Text>
                                    If you are accessing Revridge from outside Zambia, please be aware that your information may be transferred to, stored, and processed in countries where our servers are located.
                                    By using the app, you consent to the transfer of your information to these countries.
                                </Text>
                            </div>

                            {/* Section 10 */}
                            <div className="mb-12">
                                <Heading level="h2" className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</Heading>
                                <Text className="mb-4">We may update this Privacy Policy from time to time. We will notify you of significant changes by:</Text>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Posting the new policy in the app and on our website</li>
                                    <li>Sending you an email notification</li>
                                    <li>Displaying an in-app notification</li>
                                </ul>
                                <Text>
                                    The "Last Updated" date at the top of this policy indicates when it was last revised.
                                    Your continued use of the app after changes constitutes acceptance of the updated policy.
                                </Text>
                            </div>

                            {/* Contact Section */}
                            <div className="mb-12 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <Heading level="h2" className="text-2xl font-bold">11. Contact Us</Heading>
                                </div>
                                <Text className="mb-4">If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</Text>
                                <div className="space-y-2">
                                    <Text><strong>Email:</strong> <a href="mailto:support@revridge.xyz" className="text-primary hover:underline">support@revridge.xyz</a></Text>
                                    <Text><strong>Website:</strong> <a href="https://revridge.xyz" className="text-primary hover:underline">revridge.xyz</a></Text>
                                    <Text className="mt-4">
                                        <strong>Revridge Finance</strong><br />
                                        Lusaka, Zambia
                                    </Text>
                                </div>
                            </div>

                            {/* Final Note */}
                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-12">
                                <Heading level="h3" className="text-xl font-semibold mb-3">Your Privacy Matters</Heading>
                                <Text>
                                    We are committed to handling personal information transparently and applying safeguards appropriate to the service. We{' '}
                                    <strong>do not sell your personal information</strong>.
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

export default PrivacyPolicyPage;

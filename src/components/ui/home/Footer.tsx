import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Twitter, Mail, Info } from 'lucide-react';
import { Text } from '@/components/design-system';
import Logo from "@/assets/images/Revridge.png";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-zinc-950 text-zinc-400 border-t border-white/10 pt-16 pb-8">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5 mb-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <img src={Logo} alt="Revridge Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">Revridge</span>
                        </Link>
                        <Text className="max-w-xs text-zinc-500">
                            Empowering Africans to invest in global financial markets. Secure, accessible, and built for your future.
                        </Text>
                        <div className="flex gap-4">
                            <SocialLink href="https://facebook.com/revridge" icon={<Facebook size={20} />} label="Facebook" />
                            <SocialLink href="https://linkedin.com/company/revridge" icon={<Linkedin size={20} />} label="LinkedIn" />
                            <SocialLink href="https://instagram.com/revridge" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialLink href="https://twitter.com/revridge" icon={<Twitter size={20} />} label="Twitter" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">Platform</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink to="/">Home</FooterLink>

                            <FooterLink to="/download">Download App</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/support">Support</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Legal</h3>
                        <ul className="space-y-4 text-sm">
                            <FooterLink to="/terms">Terms of Service</FooterLink>
                            <FooterLink to="/privacy">Privacy Policy</FooterLink>
                            <FooterLink to="/compliance">Compliance</FooterLink>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 my-8" />

                {/* Legal Text */}
                <div className="space-y-6 text-xs text-zinc-600 leading-relaxed">
                    <p>
                        © {currentYear} Revridge Inc. All rights reserved.
                    </p>

                    {/* Beta Status Disclosure */}
                    <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-500/20">
                        <p className="font-medium text-blue-400 mb-2 flex items-center gap-2">
                            <Info size={14} /> Beta Status
                        </p>
                        <p className="text-zinc-400">
                            Revridge is currently in beta testing. While we strive for reliability, you may encounter bugs or service interruptions.
                            U.S. stock trading is conducted in a sandbox environment for testing purposes. We appreciate your patience and feedback as we build the future of investing in Africa.
                        </p>
                    </div>

                    {/* Regulatory Status */}
                    <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                        <p className="font-medium text-zinc-400 mb-2 flex items-center gap-2">
                            <Info size={14} /> Regulatory Status
                        </p>
                        <p className="text-zinc-500">
                            Revridge is working toward full regulatory licensing in Zambia. U.S. stock trading is facilitated through a SEC-registered broker-dealer and member FINRA/SIPC based in the U.S.
                            Zambian stock market access is currently view-only, with full trading capabilities coming soon pending regulatory approval.
                        </p>
                    </div>

                    {/* Risk Disclosure */}
                    <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
                        <p className="font-medium text-zinc-400 mb-2 flex items-center gap-2">
                            <Info size={14} /> Investment Risk Disclosure
                        </p>
                        <p className="text-zinc-500">
                            Investing involves risk, including the possible loss of principal. Past performance does not guarantee future results.
                            Revridge does not provide investment advice. All investment decisions are made by the user.
                            Please invest responsibly and only with money you can afford to lose.
                        </p>
                    </div>

                    {/* Geographic Limitations */}
                    <p className="text-zinc-600">
                        Revridge services are currently available to residents of Zambia. Expansion to other African countries is planned for the future.
                        U.S. stock trading is also something we are actively working towards.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Helper Components
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
        aria-label={label}
    >
        {icon}
    </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <li>
        <Link to={to} className="hover:text-white transition-colors duration-200 block">
            {children}
        </Link>
    </li>
);

export default Footer;

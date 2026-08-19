import { FileText, Lock, Scale, ShieldAlert, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/ui/home/Footer';

const responsibilities = [
  ['Revridge', 'Provides the technology experience, records order instructions, and communicates order status.'],
  ['Licensed broker', 'Reviews eligible orders and is responsible for execution, settlement, custody, and applicable regulatory obligations.'],
  ['You', 'Review the risks, fees, order details, and your circumstances before confirming a decision.'],
];

export default function CompliancePage() {
  return <div className="min-h-screen bg-background">
    <main id="main-content">
      <header className="page-hero border-b border-border"><div className="site-container max-w-5xl"><h1 className="font-[760] tracking-[-0.04em]">Clarity about who does what.</h1><p className="section-copy mt-6">Revridge connects investors to the LuSE through licensed broker partners. These responsibilities stay distinct.</p></div></header>

      <section className="site-section bg-white"><div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><h2 className="section-title">The operating model</h2><p className="section-copy mt-5">Revridge is the technology and order-routing layer—not the executing broker.</p></div><div className="divide-y divide-border border-y border-border">{responsibilities.map(([title, copy], index) => <div key={title} className="grid gap-3 py-7 sm:grid-cols-[55px_150px_1fr]"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="text-lg font-[720]">{title}</h3><p className="leading-7 text-muted-foreground">{copy}</p></div>)}</div></div></section>

      <section className="site-section border-y border-border bg-[#F5F7F6]"><div className="site-container grid gap-12 lg:grid-cols-2"><div><h2 className="text-3xl font-[730] tracking-[-0.03em]">Operational commitments</h2><div className="mt-7 divide-y divide-border border-y border-border">{[[ShieldCheck, 'Identity verification standards (KYC)'], [Scale, 'Anti-money-laundering practices (AML)'], [Lock, 'Data protection and privacy requirements'], [FileText, 'Applicable capital-market requirements']].map(([Icon, text]) => <div key={text} className="flex items-center gap-4 py-5"><Icon size={20} className="text-primary" /><span className="font-[620]">{text}</span></div>)}</div></div><div><h2 className="text-3xl font-[730] tracking-[-0.03em]">What investors should know</h2><ul className="mt-7 list-disc space-y-4 pl-5 leading-7 text-muted-foreground"><li>Investing availability is subject to broker onboarding and approval.</li><li>Submitting an order does not guarantee execution or a specific price.</li><li>Market information may be delayed or supplied by third parties.</li><li>Fees and final order details should be reviewed before confirmation.</li></ul><div id="risk-disclosure" className="mt-8 rounded-[12px] border border-[#F59E0B]/35 bg-[#F59E0B]/10 p-5"><div className="flex items-center gap-2 font-[720] text-[#765000]"><ShieldAlert size={20} />Risk disclosure</div><p className="mt-2 leading-7 text-[#5E4A16]">Investing involves risk, including possible loss of capital. Past performance does not guarantee future results.</p></div></div></div></section>

      <section className="site-section bg-white"><div className="site-container"><h2 className="section-title">Policies and documents</h2><div className="mt-8 grid max-w-4xl divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">{[["/privacy", 'Privacy policy'], ["/terms", 'Terms of service'], ['#risk-disclosure', 'Risk disclosure']].map(([href, label]) => href.startsWith('/') ? <Link key={label} className="flex items-center justify-between p-6 font-[680] hover:bg-[#F5F7F6] sm:flex-col sm:items-start sm:gap-8" to={href}><FileText className="text-primary" size={24} />{label}</Link> : <a key={label} className="flex items-center justify-between p-6 font-[680] hover:bg-[#F5F7F6] sm:flex-col sm:items-start sm:gap-8" href={href}><FileText className="text-primary" size={24} />{label}</a>)}</div></div></section>
    </main><Footer /></div>;
}

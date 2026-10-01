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
      <header className="page-hero border-b border-border"><div className="site-container max-w-5xl"><h1>Clarity about who does what.</h1><p className="section-copy mt-6">Revridge connects investors to the LuSE through licensed broker partners. These responsibilities stay distinct.</p></div></header>

      <section className="bg-white py-16 md:py-24"><div className="site-container"><div className="mx-auto max-w-3xl text-center"><h2 className="display-lg mx-auto max-w-[12ch]">The operating model</h2><p className="lead-copy mx-auto mt-5 max-w-[44ch] text-muted-foreground">Revridge is the technology and order-routing layer—not the executing broker.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{responsibilities.map(([title, copy], index) => <div key={title} className="rounded-[28px] bg-[#F5F7F6] p-8"><span className="lime-marker tabular grid h-12 w-12 place-items-center rounded-full text-sm font-[760]">0{index + 1}</span><h3 className="mt-8 text-xl font-[680] tracking-[-.025em]">{title}</h3><p className="mt-3 leading-7 text-[color:var(--meta-ink)]">{copy}</p></div>)}</div></div></section>

      <section className="bg-[#F5F7F6] py-16 md:py-24"><div className="site-container grid gap-4 lg:grid-cols-2"><div className="rounded-[clamp(24px,3vw,36px)] bg-white p-7 md:p-10"><h2 className="text-3xl font-[730] tracking-[-0.03em]">Operational commitments</h2><div className="mt-7 divide-y divide-border border-y border-border">{[[ShieldCheck, 'Identity verification standards (KYC)'], [Scale, 'Anti-money-laundering practices (AML)'], [Lock, 'Data protection and privacy requirements'], [FileText, 'Applicable capital-market requirements']].map(([Icon, text]) => <div key={text} className="flex items-center gap-4 py-5"><Icon size={20} className="text-primary" /><span className="font-[620]">{text}</span></div>)}</div></div><div className="rounded-[clamp(24px,3vw,36px)] bg-white p-7 md:p-10"><h2 className="text-3xl font-[730] tracking-[-0.03em]">What investors should know</h2><ul className="mt-7 list-disc space-y-4 pl-5 leading-7 text-muted-foreground"><li>Investing availability is subject to broker onboarding and approval.</li><li>Submitting an order does not guarantee execution or a specific price.</li><li>Market information may be delayed or supplied by third parties.</li><li>Fees and final order details should be reviewed before confirmation.</li></ul><div id="risk-disclosure" className="mt-8 rounded-[12px] border border-[#F59E0B]/35 bg-[#F59E0B]/10 p-5"><div className="flex items-center gap-2 font-[720] text-[#765000]"><ShieldAlert size={20} />Risk disclosure</div><p className="mt-2 leading-7 text-[#5E4A16]">Investing involves risk, including possible loss of capital. Past performance does not guarantee future results.</p></div></div></div></section>

      <section className="bg-white py-16 md:py-24"><div className="site-container"><h2 className="display-lg">Policies and documents</h2><div className="mt-10 grid gap-4 sm:grid-cols-3">{[["/privacy", 'Privacy policy'], ["/terms", 'Terms of service'], ['#risk-disclosure', 'Risk disclosure']].map(([href, label]) => href.startsWith('/') ? <Link key={label} className="flex items-center justify-between rounded-[28px] bg-[#F5F7F6] p-7 font-[680] transition-colors hover:bg-[#E9EFED] sm:flex-col sm:items-start sm:gap-10" to={href}><FileText className="text-primary" size={24} />{label}</Link> : <a key={label} className="flex items-center justify-between rounded-[28px] bg-[#F5F7F6] p-7 font-[680] transition-colors hover:bg-[#E9EFED] sm:flex-col sm:items-start sm:gap-10" href={href}><FileText className="text-primary" size={24} />{label}</a>)}</div></div></section>
    </main><Footer /></div>;
}

import { FormEvent, useState } from 'react';
import axios from 'axios';
import { AlertCircle, CheckCircle2, ChevronDown, Loader2, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import Footer from '@/components/ui/home/Footer';
import { parseApiError } from '@/utils/errorHandler';
import { cn } from '@/lib/utils';

const faqs = [
  { question: 'Can I invest on Revridge?', answer: 'Eligible users can submit LuSE orders through Revridge for review and execution by a licensed broker. Availability depends on identity verification and broker approval.' },
  { question: 'What investments are currently supported?', answer: 'Investing through Revridge is currently available on shares listed on the Lusaka Securities Exchange (LuSE). Learning, goals, planning tools, and net worth tracking are available to everyone.' },
  { question: 'Is investing risk-free?', answer: 'No. Licensed brokers handle execution, settlement, and custody, but investing always involves risk, including possible loss of capital.' },
  { question: 'Where can I use Revridge?', answer: 'Revridge currently focuses on Zambia. Investing eligibility can depend on location, identity checks, and broker approval.' },
];

export default function SupportPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', category: 'general', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
      const response = await axios.post(`${mainURL}/support/`, formData);
      if (response.status === 201) {
        setStatus('success');
        setMessage(response.data.message || "Thank you. We'll get back to you soon.");
        setFormData({ name: '', email: '', category: 'general', message: '' });
      }
    } catch (error) {
      setStatus('error');
      setMessage(parseApiError(error));
    }
  }

  const whatsappNumber = '+260571109236';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Revridge! I need help with...')}`;

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <header className="page-hero border-b border-border">
          <div className="site-container max-w-5xl">
            <h1 className="font-[760] tracking-[-0.04em] text-foreground">Help, without the runaround.</h1>
            <p className="section-copy mt-6">Ask about the app, LuSE investing, or your account. We’ll route your message to the right place.</p>
          </div>
        </header>

        <section className="site-section bg-white">
          <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <aside>
              <h2 className="text-2xl font-[720]">Contact Revridge</h2>
              <p className="mt-3 max-w-sm text-muted-foreground">Response times can vary while the product is in beta.</p>
              <div className="mt-8 divide-y divide-border border-y border-border">
                <a href="tel:+260571109236" className="flex items-center gap-4 py-5 text-foreground hover:text-primary"><Phone size={20} /><span><strong className="block">Call</strong><small className="text-muted-foreground">+260 571 109 236</small></span></a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 py-5 text-foreground hover:text-primary"><MessageCircle size={20} /><span><strong className="block">WhatsApp</strong><small className="text-muted-foreground">Start a conversation</small></span></a>
                <a href="mailto:support@revridge.xyz" className="flex items-center gap-4 py-5 text-foreground hover:text-primary"><Mail size={20} /><span><strong className="block">Email</strong><small className="text-muted-foreground">support@revridge.xyz</small></span></a>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="surface-panel p-6 md:p-9">
              <h2 className="text-2xl font-[720]">Send a message</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-[650]">Name<input className="mt-2 h-12 w-full rounded-[10px] border border-input bg-white px-4 font-normal outline-none focus:border-primary" name="name" value={formData.name} onChange={handleInputChange} autoComplete="name" required /></label>
                <label className="text-sm font-[650]">Email<input className="mt-2 h-12 w-full rounded-[10px] border border-input bg-white px-4 font-normal outline-none focus:border-primary" type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" required /></label>
              </div>
              <label className="mt-5 block text-sm font-[650]">Topic<select className="mt-2 h-12 w-full rounded-[10px] border border-input bg-white px-4 font-normal outline-none focus:border-primary" name="category" value={formData.category} onChange={handleInputChange}><option value="general">General question</option><option value="technical">Technical support</option><option value="billing">Account or fees</option><option value="feedback">Product feedback</option></select></label>
              <label className="mt-5 block text-sm font-[650]">Message<textarea className="mt-2 min-h-36 w-full rounded-[10px] border border-input bg-white p-4 font-normal outline-none focus:border-primary" name="message" value={formData.message} onChange={handleInputChange} required /></label>
              {message && <div role={status === 'error' ? 'alert' : 'status'} className={cn('mt-5 flex items-start gap-2 rounded-[10px] border p-4 text-sm', status === 'error' ? 'border-[#B71C1C]/20 bg-[#B71C1C]/5 text-[#B71C1C]' : 'border-[#2E7D32]/20 bg-[#2E7D32]/5 text-[#2E7D32]')}>{status === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}<span>{message}</span></div>}
              <button disabled={status === 'loading'} className="store-action store-action--filled mt-6 disabled:opacity-60" type="submit">{status === 'loading' ? <><Loader2 className="animate-spin" size={17} /> Sending…</> : <>Send message <Send size={17} /></>}</button>
            </form>
          </div>
        </section>

        <section className="site-section border-t border-border bg-[#F5F7F6]">
          <div className="site-container max-w-4xl">
            <h2 className="section-title">Common questions</h2>
            <div className="mt-8 border-y border-border">
              {faqs.map((faq, index) => <div key={faq.question} className="border-b border-border last:border-0"><button className="flex w-full items-center justify-between gap-4 py-6 text-left font-[680]" onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}>{faq.question}<ChevronDown size={19} className={cn('shrink-0 transition-transform', faqOpen === index && 'rotate-180')} /></button>{faqOpen === index && <p className="max-w-2xl pb-6 leading-7 text-muted-foreground">{faq.answer}</p>}</div>)}
            </div>
            <a className="mt-7 inline-block font-[680] text-primary hover:text-[#006B62]" href="/faq">Read all FAQs →</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

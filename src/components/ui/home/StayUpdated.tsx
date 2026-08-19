import { FormEvent, RefObject, useState } from 'react';
import axios from 'axios';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { getEmailSignupSuccessMessage, getEmailValidationError, parseApiError } from '@/utils/errorHandler';

interface Props { stayUpdatedSectionRef?: RefObject<HTMLElement>; }

export default function StayUpdated({ stayUpdatedSectionRef }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(e: FormEvent) {
    e.preventDefault();
    const validation = getEmailValidationError(email);
    if (validation) { setStatus('error'); setMessage(validation); return; }
    setStatus('loading'); setMessage('');
    try {
      const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
      await axios.post(`${mainURL}/email_list/`, { email, source: 'homepage' });
      setStatus('success'); setMessage(getEmailSignupSuccessMessage(email));
    } catch (error) {
      const parsed = parseApiError(error);
      const alreadySubscribed = parsed.toLowerCase().includes('already');
      setStatus(alreadySubscribed ? 'success' : 'error');
      setMessage(parsed);
    }
  }

  return (
    <section ref={stayUpdatedSectionRef} className="site-section bg-white" aria-labelledby="updates-title">
      <div className="site-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
        <div><h2 id="updates-title" className="section-title">Stay close to what ships next.</h2><p className="section-copy mt-5">Product updates, new learning content, and what becomes available to invest in—sent when there is something useful to share.</p></div>
        <form onSubmit={submit} noValidate className="surface-panel p-4 sm:p-5">
          <label htmlFor="updates-email" className="text-sm font-[700] text-[#17201E]">Email address</label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1"><Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#747D7A]" /><input id="updates-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className="h-[52px] w-full rounded-[10px] border border-input bg-white pl-11 pr-4 text-sm outline-none focus:border-primary" aria-describedby="updates-message" /></div>
            <button type="submit" disabled={status === 'loading'} className="store-action store-action--filled min-w-36 disabled:opacity-60">{status === 'loading' ? 'Joining…' : <>Join updates <ArrowRight size={17} /></>}</button>
          </div>
          {message && <p id="updates-message" role={status === 'error' ? 'alert' : 'status'} className={status === 'error' ? 'mt-3 text-sm text-[#B71C1C]' : 'mt-3 flex items-center gap-2 text-sm text-[#2E7D32]'}>{status === 'success' && <Check size={16} />}{message}</p>}
        </form>
      </div>
    </section>
  );
}

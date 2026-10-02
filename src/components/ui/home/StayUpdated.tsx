import { FormEvent, RefObject, useRef, useState } from 'react';
import axios from 'axios';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { Honeypot, Turnstile, TurnstileHandle } from '@/components/BotProtection';
import { TURNSTILE_ENABLED, TURNSTILE_PENDING_MESSAGE } from '@/lib/turnstile';
import { getEmailSignupSuccessMessage, getEmailValidationError, parseApiError } from '@/utils/errorHandler';

interface Props { stayUpdatedSectionRef?: RefObject<HTMLElement>; }

export default function StayUpdated({ stayUpdatedSectionRef }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const turnstileRef = useRef<TurnstileHandle>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    const validation = getEmailValidationError(email);
    if (validation) { setStatus('error'); setMessage(validation); return; }
    if (TURNSTILE_ENABLED && !turnstileToken) { setStatus('error'); setMessage(TURNSTILE_PENDING_MESSAGE); return; }
    setStatus('loading'); setMessage('');
    try {
      const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
      const response = await axios.post(`${mainURL}/email_list/`, { email, source: 'homepage', website: honeypot, turnstile_token: turnstileToken });
      setStatus('success'); setMessage(response.data?.message || getEmailSignupSuccessMessage(email));
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(parseApiError(error));
    } finally {
      turnstileRef.current?.reset();
    }
  }

  return (
    <section ref={stayUpdatedSectionRef} className="bg-white pb-20 md:pb-28" aria-labelledby="updates-title">
      <div className="site-container">
        <div className="grid gap-10 rounded-[clamp(24px,3vw,36px)] bg-[#F5F7F6] p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-14">
          <div><h2 id="updates-title" className="text-[clamp(2rem,4vw,3.4rem)] font-[660] leading-[1] tracking-[-.045em]">Stay close to what ships next.</h2><p className="mt-5 max-w-[46ch] leading-7 text-[color:var(--muted-ink)]">Product updates, new learning content, and what becomes available to invest in — sent when there is something useful to share.</p></div>
          <form onSubmit={submit} noValidate className="relative">
            <Honeypot value={honeypot} onChange={setHoneypot} />
            <label htmlFor="updates-email" className="text-sm font-[640] text-[#17201E]">Email address</label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1"><Mail size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#747D7A]" /><input id="updates-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className="h-[52px] w-full rounded-full border border-input bg-white pl-12 pr-5 text-sm outline-none focus:border-primary" aria-describedby="updates-message" /></div>
              <button type="submit" disabled={status === 'loading'} className="pill-btn pill-btn--teal min-w-36 disabled:opacity-60">{status === 'loading' ? 'Joining…' : <>Join updates <ArrowRight size={17} /></>}</button>
            </div>
            <Turnstile ref={turnstileRef} onToken={setTurnstileToken} className="mt-3" />
            {message && <p id="updates-message" role={status === 'error' ? 'alert' : 'status'} className={status === 'error' ? 'mt-3 text-sm text-[#B71C1C]' : 'mt-3 flex items-center gap-2 text-sm text-[#2E7D32]'}>{status === 'success' && <Check size={16} />}{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

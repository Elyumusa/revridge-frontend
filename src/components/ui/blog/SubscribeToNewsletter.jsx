import { useRef, useState } from 'react';
import axios from 'axios';
import { Mail } from 'lucide-react';
import { Honeypot, Turnstile } from '@/components/BotProtection';
import { TURNSTILE_ENABLED, TURNSTILE_PENDING_MESSAGE } from '@/lib/turnstile';
import { getEmailSignupSuccessMessage, parseApiError } from '@/utils/errorHandler';

export default function SubscribeToNewsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const turnstileRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus('error'); setMessage('Enter a valid email address.'); return; }
    if (TURNSTILE_ENABLED && !turnstileToken) { setStatus('error'); setMessage(TURNSTILE_PENDING_MESSAGE); return; }
    setStatus('loading'); setMessage('');
    try {
      const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
      const response = await axios.post(`${mainURL}/email_list/`, { email, name, source: 'blog', website: honeypot, turnstile_token: turnstileToken });
      setStatus('success'); setMessage(response.data?.message || getEmailSignupSuccessMessage(email));
      setEmail(''); setName('');
    } catch (error) {
      setStatus('error');
      setMessage(parseApiError(error));
    } finally {
      turnstileRef.current?.reset();
    }
  }

  return <section className="bg-white pt-10"><div className="site-container grid gap-6 rounded-[clamp(24px,3vw,36px)] bg-[#F5F7F6] p-7 md:grid-cols-[0.8fr_1.2fr] md:items-end md:p-10"><div><h2 className="text-2xl font-[720]">Useful updates, occasionally.</h2><p className="mt-2 text-muted-foreground">New articles and market learning from Revridge.</p></div><form onSubmit={handleSubmit} className="relative grid gap-2 sm:grid-cols-[0.7fr_1fr_auto]"><Honeypot value={honeypot} onChange={setHoneypot} /><input className="h-12 rounded-full border border-input bg-white px-5 text-sm outline-none focus:border-primary" placeholder="Name (optional)" value={name} onChange={(event) => setName(event.target.value)} /><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={17} /><input className="h-12 w-full rounded-full border border-input bg-white pl-12 pr-5 text-sm outline-none focus:border-primary" type="email" placeholder="Email address" value={email} onChange={(event) => setEmail(event.target.value)} required /></div><button className="pill-btn pill-btn--teal h-12" disabled={status === 'loading'}>{status === 'loading' ? 'Joining…' : 'Subscribe'}</button><Turnstile ref={turnstileRef} onToken={setTurnstileToken} className="sm:col-span-3" />{message && <p className={status === 'error' ? 'text-sm text-[#B71C1C] sm:col-span-3' : 'text-sm text-[#2E7D32] sm:col-span-3'}>{message}</p>}</form></div></section>;
}

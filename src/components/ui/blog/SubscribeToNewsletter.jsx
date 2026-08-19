import { useState } from 'react';
import axios from 'axios';
import { Mail } from 'lucide-react';
import { parseApiError } from '@/utils/errorHandler';

export default function SubscribeToNewsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus('error'); setMessage('Enter a valid email address.'); return; }
    setStatus('loading'); setMessage('');
    try {
      const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
      const response = await axios.post(`${mainURL}/email_list/`, { email, name, source: 'blog' });
      if (response.status === 201) { setStatus('success'); setMessage('You’re subscribed.'); }
    } catch (error) {
      const parsed = parseApiError(error);
      setStatus(parsed.toLowerCase().includes('already') ? 'success' : 'error');
      setMessage(parsed.toLowerCase().includes('already') ? 'You’re already subscribed.' : parsed);
    }
  }

  return <section className="border-y border-border bg-[#F5F7F6] py-10"><div className="site-container grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end"><div><h2 className="text-2xl font-[720]">Useful updates, occasionally.</h2><p className="mt-2 text-muted-foreground">New articles and market learning from Revridge.</p></div><form onSubmit={handleSubmit} className="grid gap-2 sm:grid-cols-[0.7fr_1fr_auto]"><input className="h-12 rounded-[10px] border border-input bg-white px-4 text-sm outline-none focus:border-primary" placeholder="Name (optional)" value={name} onChange={(event) => setName(event.target.value)} /><div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={17} /><input className="h-12 w-full rounded-[10px] border border-input bg-white pl-11 pr-4 text-sm outline-none focus:border-primary" type="email" placeholder="Email address" value={email} onChange={(event) => setEmail(event.target.value)} required /></div><button className="store-action store-action--filled h-12" disabled={status === 'loading'}>{status === 'loading' ? 'Joining…' : 'Subscribe'}</button>{message && <p className={status === 'error' ? 'text-sm text-[#B71C1C] sm:col-span-3' : 'text-sm text-[#2E7D32] sm:col-span-3'}>{message}</p>}</form></div></section>;
}

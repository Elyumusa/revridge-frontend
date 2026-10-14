import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '@/components/ui/home/Footer';
import { parseApiError } from '@/utils/errorHandler';

interface Copy {
  endpoint: string;
  pendingTitle: string;
  successTitle: string;
  errorTitle: string;
}

/**
 * Landing page for links in subscription emails. The token is POSTed from the
 * browser (not acted on by a plain GET), so mail scanners that prefetch links
 * can't confirm or unsubscribe anyone.
 */
function SubscriptionTokenPage({ endpoint, pendingTitle, successTitle, errorTitle }: Copy) {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(token ? 'loading' : 'error');
  const [message, setMessage] = useState(token ? '' : 'This link is missing its token. Please use the link from your email.');
  const sent = useRef(false);

  useEffect(() => {
    if (!token || sent.current) return;
    sent.current = true;
    const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
    axios.post(`${mainURL}${endpoint}`, { token })
      .then((response) => { setStatus('success'); setMessage(response.data?.message || ''); })
      .catch((error) => { setStatus('error'); setMessage(parseApiError(error)); });
  }, [endpoint, token]);

  const title = status === 'loading' ? pendingTitle : status === 'success' ? successTitle : errorTitle;

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="page-hero min-h-[62vh]">
        <div className="site-container route-frame" aria-live="polite">
          <h1>{title}</h1>
          {status === 'loading'
            ? <p className="section-copy mt-6 flex items-center gap-2"><Loader2 className="animate-spin" size={18} /> One moment…</p>
            : <p className="section-copy mt-6">{message}</p>}
          <Link className="store-action store-action--filled mt-8" to="/">
            <ArrowLeft size={18} />
            Back to Revridge
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function ConfirmSubscriptionPage() {
  return (
    <SubscriptionTokenPage
      endpoint="/email_list/confirm/"
      pendingTitle="Confirming your subscription."
      successTitle="You’re on the list."
      errorTitle="We couldn’t confirm that link."
    />
  );
}

export function UnsubscribePage() {
  return (
    <SubscriptionTokenPage
      endpoint="/email_list/unsubscribe/"
      pendingTitle="Unsubscribing you."
      successTitle="You’re unsubscribed."
      errorTitle="We couldn’t process that link."
    />
  );
}

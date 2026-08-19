import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';
import ArticleCard from '@/components/ui/ArticleCard';
import SubscribeToNewsletter from '@/components/ui/blog/SubscribeToNewsletter';
import Footer from '@/components/ui/home/Footer';

export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    let live = true;
    async function fetchBlogs() {
      try {
        const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
        const result = await axios.get(`${mainURL}/api/posts/`);
        if (live) setArticles(result.data.news || []);
      } catch {
        if (live) setError('Articles could not be loaded right now.');
      } finally { if (live) setLoading(false); }
    }
    fetchBlogs();
    return () => { live = false; };
  }, []);

  const filtered = useMemo(() => articles.filter((post) => `${post.headline || ''} ${post.author || ''} ${post.symbols || ''}`.toLowerCase().includes(query.toLowerCase())), [articles, query]);

  return <div className="min-h-screen bg-background"><main id="main-content"><header className="page-hero border-b border-border"><div className="site-container max-w-5xl"><h1 className="font-[760] tracking-[-0.04em]">Market context, made useful.</h1><p className="section-copy mt-6">Practical investing explainers and updates for people learning their way into the market.</p></div></header><SubscribeToNewsletter /><section className="site-section bg-white"><div className="site-container max-w-5xl"><div className="flex flex-col justify-between gap-5 border-b border-border pb-6 sm:flex-row sm:items-end"><h2 className="section-title">Latest articles</h2><label className="relative w-full sm:max-w-xs"><span className="sr-only">Search articles</span><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={17} /><input className="h-11 w-full rounded-[10px] border border-input bg-white pl-11 pr-4 text-sm outline-none focus:border-primary" placeholder="Search articles" value={query} onChange={(event) => setQuery(event.target.value)} /></label></div>{loading && <div role="status" aria-label="Loading articles">{[1,2,3].map((item) => <div key={item} className="border-t border-border py-7"><div className="h-3 w-40 animate-pulse rounded-[4px] bg-[#EDF1EF]" /><div className="mt-4 h-6 w-3/4 animate-pulse rounded-[6px] bg-[#E8ECEA]" /><div className="mt-4 h-3 w-28 animate-pulse rounded-[4px] bg-[#EDF1EF]" /></div>)}</div>}{!loading && error && <div className="py-12"><p className="text-[#B71C1C]">{error}</p></div>}{!loading && !error && filtered.length === 0 && <p className="py-12 text-muted-foreground">No articles match your search.</p>}{!loading && !error && <div>{filtered.map((post, index) => <ArticleCard key={post.id || index} post={post} />)}</div>}</div></section></main><Footer /></div>;
}

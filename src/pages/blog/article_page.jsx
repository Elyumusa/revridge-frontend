import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '@/components/ui/home/Footer';

export default function ArticlePage() {
  const blogPost = useLocation().state;
  const navigate = useNavigate();

  if (!blogPost) return <div className="min-h-screen bg-background"><main id="main-content" className="page-hero"><div className="site-container max-w-3xl"><h1 className="text-4xl font-[740] tracking-[-0.035em]">This article needs a fresh link.</h1><p className="section-copy mt-5">Open it again from the Revridge article list.</p><Link className="store-action store-action--filled mt-8" to="/blog">Back to articles</Link></div></main><Footer /></div>;

  const title = blogPost.headline || blogPost.title;
  const date = blogPost.created_at || blogPost.date;
  const symbols = Array.isArray(blogPost.symbols) ? blogPost.symbols.join(', ') : blogPost.symbols || blogPost.category;

  return <div className="min-h-screen bg-background"><main id="main-content"><article><header className="page-hero border-b border-border"><div className="site-container max-w-4xl"><button className="mb-10 inline-flex items-center gap-2 text-sm font-[650] text-primary hover:text-[#006B62]" onClick={() => navigate(-1)}><ArrowLeft size={17} />Back to articles</button><h1 className="font-[760] tracking-[-0.04em]">{title}</h1><div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">{date && <span className="flex items-center gap-2"><Calendar size={16} />{date}</span>}{blogPost.author && <span className="flex items-center gap-2"><User size={16} />{blogPost.author}</span>}{symbols && <span className="flex items-center gap-2"><Tag size={16} />{symbols}</span>}</div></div></header><div className="site-section bg-white"><div className="article-prose site-container max-w-3xl" dangerouslySetInnerHTML={{ __html: blogPost.content }} /></div></article></main><Footer /></div>;
}

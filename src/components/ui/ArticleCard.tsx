import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  id?: string | number;
  content?: string;
  url?: string;
  symbols?: string | string[];
  created_at?: string;
  date?: string;
  headline?: string;
  title?: string;
  author?: string;
}

export default function ArticleCard({ post }: { post: Article }) {
  const isExternal = !post.content;
  const symbols = Array.isArray(post.symbols) ? post.symbols.slice(0, 3).join(', ') : post.symbols;
  const content = <article className="group border-t border-border py-7"><div className="flex items-start justify-between gap-5"><div><p className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">{symbols || 'Revridge'} · {post.created_at || post.date}</p><h2 className="mt-3 max-w-2xl text-2xl font-[720] leading-tight tracking-[-0.025em] group-hover:text-primary">{post.headline || post.title}</h2><p className="mt-4 text-sm text-muted-foreground">{post.author ? `By ${post.author}` : 'Revridge'}</p></div><ArrowUpRight className="mt-1 shrink-0 text-primary" size={21} /></div></article>;
  return isExternal ? <a href={post.url} target="_blank" rel="noreferrer">{content}</a> : <Link to="/article" state={post}>{content}</Link>;
}

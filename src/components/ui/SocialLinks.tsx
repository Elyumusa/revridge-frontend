import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { XMark } from '@/components/ui/StoreMarks';
import { cn } from '@/lib/utils';

/**
 * Handles are the ones last committed to the site (see git history for
 * Footer.tsx before the redesign); the X account moved from twitter.com to
 * x.com but kept the same handle.
 */
const socialLinks = [
  { label: 'X', href: 'https://x.com/revridgeapp', Icon: XMark },
  { label: 'Instagram', href: 'https://instagram.com/revridgeapp', Icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com/revridgeapp', Icon: Facebook },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/revridge', Icon: Linkedin },
];

interface Props {
  /** 'dark' sits on the deep teal footer, 'light' on a pale page band. */
  tone?: 'dark' | 'light';
  className?: string;
}

export default function SocialLinks({ tone = 'dark', className }: Props) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {socialLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Revridge on ${label}`}
            className={cn(
              'grid h-11 w-11 place-items-center rounded-[10px] border transition-colors',
              tone === 'dark'
                ? 'border-white/20 text-white/75 hover:border-[#CAF300] hover:text-[#CAF300]'
                : 'border-border text-[color:var(--meta-ink)] hover:border-primary hover:text-primary',
            )}
          >
            <Icon size={19} />
          </a>
        </li>
      ))}
    </ul>
  );
}

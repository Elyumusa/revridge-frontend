import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/home/Reveal';

/**
 * The separate section about Alpaca that the Alpaca OAuth API License
 * Agreement (section 1.8) requires, with a link to alpaca.markets.
 *
 * The links carry no "nofollow", "ugc" or "sponsored": the agreement rules
 * those out for this attribution. Every fact here is one the app already
 * states in its own disclosure; keep the two in step.
 */
export default function AboutAlpaca() {
  return (
    <section id="alpaca" className="scroll-mt-20 bg-[#F5F7F6] py-16 md:py-20" aria-labelledby="alpaca-title">
      <div className="site-container">
        <Reveal className="mx-auto max-w-3xl">
          <h2 id="alpaca-title" className="text-[clamp(1.8rem,3vw,2.4rem)] font-[680] leading-[1.1] tracking-[-.03em]">
            About Alpaca
          </h2>
          <p className="mt-5 text-base leading-7 text-[color:var(--muted-ink)]">
            U.S. investing in Revridge runs on Alpaca Connect. Your brokerage
            account is opened and held with Alpaca Securities LLC, member
            FINRA/SIPC, which handles identity checks, funding, order execution,
            and custody.
          </p>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted-ink)]">
            Revridge is not a broker or an investment adviser and never holds
            your money or shares. It reaches your Alpaca account only with the
            permissions you grant, and you can disconnect it at any time.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="https://alpaca.markets"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center gap-1 font-[620] text-[#004B44] underline underline-offset-4"
            >
              Visit alpaca.markets
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href="https://alpaca.markets/disclosures"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center gap-1 font-[620] text-[#004B44] underline underline-offset-4"
            >
              Alpaca disclosures
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

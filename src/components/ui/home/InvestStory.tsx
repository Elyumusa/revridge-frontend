import { Check } from 'lucide-react';
import Reveal from '@/components/ui/home/Reveal';
import { appCutouts, appScreens } from '@/assets/appScreens';

/** Explain the Alpaca Connect paper journey and the roles of both services. */
const steps = [
  { title: 'Explore a U.S. stock', copy: 'Learn about supported securities before making a decision.' },
  { title: 'Connect your Alpaca account', copy: 'Alpaca handles account opening and identity checks. You choose what Revridge may access.' },
  { title: 'Grant trading permission', copy: 'A read-only connection shows your account; trading requires a separate grant.' },
  { title: 'Practice with virtual money', copy: 'Submit paper orders and follow their status. Live trading awaits Alpaca approval and release.' },
];

export default function InvestStory() {
  return (
    <section
      id="invest"
      className="scroll-mt-20 overflow-hidden bg-[#00322D] py-20 text-white md:py-28"
      aria-labelledby="invest-title"
    >
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div>
          <Reveal>
            <h2 id="invest-title" className="display-lg max-w-[12ch] text-white">
              Explore U.S. investing, <span className="text-[#CAF300]">step by step.</span>
            </h2>
            <p className="lead-copy mt-6 max-w-[44ch] text-white/75">
              Connect an Alpaca account you own to view it in Revridge. Paper trading is available for practice with virtual money. Alpaca handles account opening, verification, funding, and brokerage services. Live trading is awaiting approval.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-3">
            {steps.map(({ title, copy }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <li className="flex gap-5 rounded-[22px] bg-white/[.06] p-5 ring-1 ring-white/10 transition-colors hover:bg-white/[.1]">
                  <span className="tabular grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#CAF300] text-sm font-[760] text-[#00322D]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-[680] tracking-[-.02em] text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/70">{copy}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal y={56} className="relative mx-auto w-full max-w-[460px]">
          <img
            src={appCutouts.invest.src}
            alt={appScreens.invest.alt}
            width={appCutouts.invest.width}
            height={appCutouts.invest.height}
            className="mx-auto block w-[78%] max-w-[380px] drop-shadow-[0_40px_50px_rgba(0,0,0,.4)]"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-3 text-center text-xs text-white/70">Illustrative screen and price. Paper trading uses virtual money.</p>
          <span className="float-chip absolute left-0 top-[18%] hidden sm:inline-flex lg:-left-6">
            <span className="float-chip__icon"><Check size={18} strokeWidth={2.6} /></span>
            <span className="text-sm leading-tight">
              <span className="block font-[700]">Paper trading with Alpaca</span>
              <span className="text-[color:var(--meta-ink)]">Virtual money · separate from net worth</span>
            </span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}

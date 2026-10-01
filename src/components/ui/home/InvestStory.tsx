import { Check } from 'lucide-react';
import Reveal from '@/components/ui/home/Reveal';
import { appCutouts, appScreens } from '@/assets/appScreens';

/** Same four steps as the retired HowExecutionWorks band — the broker's role
 *  must stay explicit wherever investing is described (PRODUCT.md). */
const steps = [
  { title: 'Choose a LuSE company', copy: 'Review the company information and decide what fits your own plan.' },
  { title: 'Complete onboarding', copy: 'Eligible investors complete identity and broker requirements before ordering.' },
  { title: 'Revridge routes the order', copy: 'Your order goes to an operational licensed broker partner for review.' },
  { title: 'The broker confirms it', copy: 'The broker executes, settles, and holds your shares; Revridge shows you the confirmed status.' },
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
              Invest on the LuSE, <span className="text-[#CAF300]">today.</span>
            </h2>
            <p className="lead-copy mt-6 max-w-[44ch] text-white/75">
              Explore companies you already know, then place eligible orders
              through licensed broker partners — with every step visible.
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
          <span className="float-chip absolute left-0 top-[18%] hidden sm:inline-flex lg:-left-6">
            <span className="float-chip__icon"><Check size={18} strokeWidth={2.6} /></span>
            <span className="text-sm leading-tight">
              <span className="block font-[700]">Executed by your broker</span>
              <span className="text-[color:var(--meta-ink)]">Status updated in the app</span>
            </span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}

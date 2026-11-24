import Reveal from '@/components/ui/home/Reveal';
import { appCutouts, appScreens } from '@/assets/appScreens';

/** Introduce investing for beginners and explain the current practice option. */
const steps = [
  { title: 'Explore a U.S. stock', copy: 'Learn about supported securities before making a decision.' },
  { title: 'Learn as you go', copy: 'Build your understanding before choosing what to do next.' },
  { title: 'Try it out', copy: 'Place a practice order and follow its progress.' },
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
              Explore U.S. stocks and practise with virtual money. Live investing is not available yet.
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
          <p className="mt-3 text-center text-xs text-white/70">Illustrative screen and price.</p>
        </Reveal>
      </div>
    </section>
  );
}

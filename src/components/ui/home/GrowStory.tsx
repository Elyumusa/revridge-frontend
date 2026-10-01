import Reveal from '@/components/ui/home/Reveal';
import {
  APP_SCREEN_HEIGHT,
  APP_SCREEN_WIDTH,
  appScreens,
} from '@/assets/appScreens';

const cards = [
  {
    title: 'Plan for what matters',
    copy: 'Set goals and see how steady saving could carry you there.',
    screen: appScreens.grow,
  },
  {
    title: 'Your net worth, in one place',
    copy: 'Follow cash, investments, and progress together as they change.',
    screen: appScreens.portfolio,
  },
];

export default function GrowStory() {
  return (
    <section id="grow" className="scroll-mt-20 bg-white py-20 md:py-28" aria-labelledby="grow-title">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 id="grow-title" className="display-lg mx-auto max-w-[14ch]">
            Build wealth, not just a portfolio.
          </h2>
          <p className="lead-copy mx-auto mt-6 max-w-[46ch] text-[color:var(--muted-ink)]">
            Goals, planning, and net worth tracking sit beside everything you
            invest — so you always see the whole picture.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map(({ title, copy, screen }, index) => (
            <Reveal key={title} delay={index * 0.1} y={44} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[clamp(24px,3vw,36px)] bg-[#E9E9E9]">
                <div className="p-7 pb-2 sm:p-9 sm:pb-2">
                  <h3 className="text-[clamp(1.6rem,2.6vw,2.2rem)] font-[680] leading-[1.05] tracking-[-.035em]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[color:var(--muted-ink)]">{copy}</p>
                </div>
                <img
                  src={screen.src}
                  alt={screen.alt}
                  width={APP_SCREEN_WIDTH}
                  height={APP_SCREEN_HEIGHT}
                  className="mx-auto mb-8 mt-auto block w-[72%] max-w-[300px] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-3 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                  loading="lazy"
                  decoding="async"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { BookOpen, ChartNoAxesCombined, Leaf } from 'lucide-react';
import {
  APP_SCREEN_ASPECT,
  APP_SCREEN_HEIGHT,
  APP_SCREEN_WIDTH,
  appScreens,
} from '@/assets/appScreens';

const stages = [
  {
    id: 'learn',
    title: 'Learn without the jargon',
    copy: 'Build investing knowledge in plain language and continue from where you stopped.',
    screen: appScreens.learn,
    icon: BookOpen,
  },
  {
    id: 'invest',
    title: 'Start where the market is open to you',
    copy: 'Follow companies listed on the LuSE and submit eligible orders through licensed broker partners.',
    screen: appScreens.invest,
    icon: ChartNoAxesCombined,
  },
  {
    id: 'grow',
    title: 'Build wealth, not just a portfolio',
    copy: 'Set goals, plan ahead, and track your net worth alongside what you invest.',
    screen: appScreens.grow,
    icon: Leaf,
  },
];

export default function ProductJourney() {
  return (
    <section className="bg-white py-12 md:py-16" aria-labelledby="journey-title">
      <div className="site-container">
        <h2 id="journey-title" className="sr-only">Learn, Invest, and Grow with Revridge</h2>

        <div className="overflow-hidden rounded-[16px] border border-border bg-[#F5F7F6] lg:grid lg:grid-cols-3">
          {stages.map(({ id, title, copy, screen, icon: Icon }) => (
            <article id={id} key={id} className="flex scroll-mt-24 flex-col border-b border-border p-5 last:border-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-7">
              <div className="flex items-center gap-3">
                <span className="lime-marker grid h-10 w-10 shrink-0 place-items-center rounded-[10px]"><Icon size={19} /></span>
                <h3 className="text-xl tracking-[-.025em]">{title}</h3>
              </div>
              <p className="mt-4 mb-6 text-sm leading-6 text-[color:var(--meta-ink)]">{copy}</p>
              {/* The frame carries the device shots' own aspect ratio so the whole
                  handset shows, capped in width so a full-bleed panel does not
                  blow the phone up. mt-auto keeps the three plates on a shared
                  baseline when a heading wraps to two lines. */}
              <figure className={`mt-auto mx-auto w-full max-w-[300px] ${APP_SCREEN_ASPECT} overflow-hidden rounded-[14px] border border-border bg-white`}>
                <img
                  src={screen.src}
                  alt={screen.alt}
                  width={APP_SCREEN_WIDTH}
                  height={APP_SCREEN_HEIGHT}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

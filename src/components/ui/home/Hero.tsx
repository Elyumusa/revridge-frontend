import { BookOpen, ChartNoAxesCombined, Leaf, Play } from 'lucide-react';
import { AppleMark } from '@/components/ui/StoreMarks';
import {
  APP_SCREEN_ASPECT,
  APP_SCREEN_HEIGHT,
  APP_SCREEN_WIDTH,
  appScreens,
} from '@/assets/appScreens';
import { PLAY_STORE_URL, TESTFLIGHT_URL } from '@/lib/storeLinks';

const stages = [
  {
    label: 'Learn',
    copy: 'Understand the basics with clear, practical lessons.',
    icon: BookOpen,
  },
  {
    label: 'Invest',
    copy: 'Reach real investments through licensed brokers.',
    icon: ChartNoAxesCombined,
  },
  {
    label: 'Grow',
    copy: 'Track goals, net worth, and progress in one place.',
    icon: Leaf,
  },
];

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-border bg-[#F5F7F6]">
      <div className="site-container grid items-center gap-14 pb-14 pt-12 lg:grid-cols-[1fr_1.02fr] lg:gap-10 lg:pb-16 lg:pt-16">
        <div className="max-w-xl">
          <h1 className="text-[clamp(3.6rem,8vw,6rem)] font-[820] leading-[.88] tracking-[-.04em]">
            Learn.
            <br />
            Invest.
            <br />
            <span className="text-primary">Grow.</span>
          </h1>
          <p className="mt-7 text-[clamp(1.15rem,1.9vw,1.5rem)] leading-[1.4] tracking-[-.02em] text-[#17201E]">
            One connected wealth journey.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="store-action store-action--filled"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Play size={18} fill="currentColor" /> Get Android
            </a>
            {/* Was a NavLink to /download that opened a waitlist modal; the
                beta is public now, so this goes straight to TestFlight. */}
            <a
              className="store-action store-action--filled"
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noreferrer"
            >
              <AppleMark size={19} /> Get iOS Beta
            </a>
          </div>
          <p className="mt-6 text-sm leading-6 text-[color:var(--meta-ink)]">
            Investing involves risk. Historical results are not forecasts or
            recommendations.
          </p>
        </div>

        {/* Two product plates, layered and tilted — the Layered Wealth Table
            motif at hero scale. The device shots carry their own plate ground,
            so they are framed rather than cut out. */}
        <div className="hero-stage relative mx-auto flex w-full max-w-[560px] justify-center pb-6 pt-2 lg:pb-2">
          <figure className="hero-plate hero-plate--back w-[46%] max-w-[260px] sm:w-[48%]">
            <img
              src={appScreens.invest.src}
              alt={appScreens.invest.alt}
              width={APP_SCREEN_WIDTH}
              height={APP_SCREEN_HEIGHT}
              className={`block w-full rounded-[13px] ${APP_SCREEN_ASPECT} object-cover`}
              fetchPriority="high"
            />
          </figure>
          <figure className="hero-plate hero-plate--front w-[46%] max-w-[260px] sm:w-[48%]">
            <img
              src={appScreens.grow.src}
              alt={appScreens.grow.alt}
              width={APP_SCREEN_WIDTH}
              height={APP_SCREEN_HEIGHT}
              className={`block w-full rounded-[13px] ${APP_SCREEN_ASPECT} object-cover`}
              fetchPriority="high"
            />
          </figure>
        </div>
      </div>

      {/* The Learn → Invest → Grow trajectory. It moved here from the old
          calculator workbench so the journey still opens the page. The markers
          straddle the line and the copy sits beneath, so the trajectory reads as
          one path through three points and never strikes through the text. */}
      <div className="site-container pb-14 lg:pb-20">
        <div className="journey-rail grid gap-x-8 gap-y-9 border-t border-[#dce3e0] pt-9 sm:grid-cols-3 sm:pt-0">
          <span aria-hidden="true" className="journey-trajectory" />
          {stages.map(({ label, copy, icon: Icon }) => (
            <div key={label} className="journey-stage">
              {/* Only straddles the rule from sm up, where the trajectory exists
                  to straddle. Stacked, the markers sit inside the block. */}
              <span className="lime-marker grid h-11 w-11 place-items-center rounded-[10px] sm:-mt-[22px] sm:ring-4 sm:ring-[#F5F7F6]">
                <Icon size={20} />
              </span>
              <h2 className="mt-5 text-base font-[740] tracking-[-.02em] text-[#17201E]">
                {label}
              </h2>
              <p className="mt-1.5 max-w-[34ch] text-sm leading-6 text-[color:var(--meta-ink)]">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

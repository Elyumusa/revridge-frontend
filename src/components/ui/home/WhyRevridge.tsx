import {
  BarChart3,
  BookOpen,
  Coins,
  Eye,
  PiggyBank,
  ShieldCheck,
} from 'lucide-react';
import Reveal from '@/components/ui/home/Reveal';

/**
 * Restored from the previous site's "Why Choose Revridge" / FeaturesAndPerks
 * section (commit 0dfa3b4), same six topics and running order.
 *
 * Two departures from the original: the "Why Choose Revridge" eyebrow chip is
 * gone, because the heading carries itself; and the six per-card accent colours
 * (blue, emerald, indigo, pink, yellow, purple) are replaced by the lime marker,
 * since DESIGN.md keeps colour to the teal-and-lime system rather than a
 * different hue per tile.
 */
const perks = [
  {
    title: 'Start with an amount you choose',
    description:
      'Build a savings goal with an amount you choose. Track progress without moving money into Revridge.',
    icon: Coins,
  },
  {
    title: 'Always in the know',
    description:
      'See whether an Alpaca paper order is pending, filled, canceled, or rejected. Paper balances stay separate from real net worth.',
    icon: Eye,
  },
  {
    title: 'Investing, protected',
    description:
      'Alpaca handles account opening, identity checks, funding, execution, and custody. Revridge accesses your account only with your Connect permission.',
    icon: ShieldCheck,
  },
  {
    title: 'Explore companies you can name',
    description:
      'Explore supported U.S. companies, learn what they do, and review their market information before deciding what to practise.',
    icon: BarChart3,
  },
  {
    title: 'Investing 101, in plain language',
    description:
      'Structured lessons and a jargon buster take you from the basics to real understanding. No finance degree needed, no jargon left unexplained.',
    icon: BookOpen,
  },
  {
    title: 'Understand how dividends work',
    description:
      'See how some companies share profits with shareholders, when those payments land, and what that means for what you are building.',
    icon: PiggyBank,
  },
];

export default function WhyRevridge() {
  return (
    <section
      className="bg-[#F5F7F6] py-20 md:py-28"
      aria-labelledby="why-revridge-title"
    >
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 id="why-revridge-title" className="display-lg mx-auto max-w-[13ch]">
            Investing, built around you.
          </h2>
          <p className="lead-copy mx-auto mt-6 max-w-[50ch] text-[color:var(--muted-ink)]">
            Education worth the name, tools to plan and track goals, and
            paper trading through Alpaca Connect, clearly separate from live investing.
          </p>
        </Reveal>

        {/* Bento: the first tile carries the deep-teal field so the grid has
            one anchor; the rest stay white on the planning field. */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map(({ title, description, icon: Icon }, index) => {
            const featured = index === 0;
            return (
              <Reveal
                key={title}
                delay={(index % 3) * 0.08}
                className={
                  featured
                    ? 'sm:col-span-2 lg:row-span-2'
                    : index === perks.length - 1
                      ? 'sm:col-span-2 lg:col-span-1'
                      : ''
                }
              >
                <article
                  className={
                    featured
                      ? 'hero-glow flex h-full min-h-[300px] flex-col justify-between rounded-[28px] p-8 text-white transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0'
                      : 'flex h-full flex-col rounded-[28px] bg-white p-8 transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0'
                  }
                >
                  <span className="lime-marker grid h-12 w-12 place-items-center rounded-full">
                    <Icon size={21} />
                  </span>
                  <div className={featured ? 'mt-16' : 'mt-8'}>
                    <h3
                      className={
                        featured
                          ? 'text-[clamp(1.8rem,3vw,2.6rem)] font-[680] leading-[1.02] tracking-[-.04em] text-white'
                          : 'text-xl font-[680] tracking-[-.025em]'
                      }
                    >
                      {title}
                    </h3>
                    <p
                      className={
                        featured
                          ? 'mt-4 max-w-[36ch] leading-7 text-white/75'
                          : 'mt-3 max-w-[42ch] leading-7 text-[color:var(--meta-ink)]'
                      }
                    >
                      {description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

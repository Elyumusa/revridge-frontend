import {
  BarChart3,
  BookOpen,
  Coins,
  Eye,
  PiggyBank,
  ShieldCheck,
} from 'lucide-react';

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
      'There is no minimum fortune to begin. Put in an amount you are comfortable with, and add to it as your confidence grows.',
    icon: Coins,
  },
  {
    title: 'Always in the know',
    description:
      'Every order carries a status you can see: submitted, sent to the broker, executed. You always know where your money stands — no black boxes.',
    icon: Eye,
  },
  {
    title: 'Investing, protected',
    description:
      'Orders are handled by licensed brokers who execute and custody your securities, and your data is protected at every step.',
    icon: ShieldCheck,
  },
  {
    title: 'Explore companies you can name',
    description:
      'Browse the companies you already see around you. Learn what they do, how their share price moves, and why people invest in them.',
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
      className="site-section border-t border-border bg-white"
      aria-labelledby="why-revridge-title"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <h2 id="why-revridge-title" className="section-title">
            Investing, built around you.
          </h2>
          <p className="section-copy lg:pb-1">
            Everything you need to build wealth with confidence: financial
            education worth the name, tools to plan and track goals, and
            investing handled by licensed brokers with every step visible to you.
          </p>
        </div>

        {/* A ruled grid rather than six floating cards — the system is
            border-first, and drop shadows are reserved for the workbench. */}
        <div className="mt-14 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {perks.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="border-b border-border py-8 sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:pl-8 lg:pr-8 lg:[&:nth-child(even)]:border-l-0 lg:[&:nth-child(even)]:pl-0 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:pl-8"
            >
              <span className="lime-marker grid h-11 w-11 place-items-center rounded-[10px]">
                <Icon size={21} />
              </span>
              <h3 className="mt-5 text-lg tracking-[-.02em]">{title}</h3>
              <p className="mt-3 max-w-[42ch] leading-7 text-[color:var(--meta-ink)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

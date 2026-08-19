import { ArrowRight, BookOpen, Goal, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/ui/home/Footer";
import SocialLinks from "@/components/ui/SocialLinks";
// Face-centred 112px crops of Elyu.jpg / Wongani.jpg. The originals are 232KB
// combined for what renders as two 56px avatars.
import ElyuPortrait from "@/assets/images/founder-elyumusa.webp";
import WonganiPortrait from "@/assets/images/founder-wongani.webp";

const journey = [
  {
    icon: BookOpen,
    step: "Learn",
    copy: "Understand investing in plain language before money is involved.",
  },
  {
    icon: Landmark,
    step: "Invest",
    copy: "Explore LuSE companies and route eligible orders through licensed broker partners.",
  },
  {
    icon: Goal,
    step: "Grow",
    copy: "Track goals, plans, and net worth so wealth is more than one balance.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <header className="page-hero border-b border-border">
          {/* The heading carries the weight here, so it gets the wider column;
              at 0.9fr it broke into five lines with dead space alongside. */}
          <div className="site-container route-frame grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h1 className="font-[760] tracking-[-0.04em] text-foreground">
              Investing makes more sense when the journey is connected.
            </h1>
            <p className="section-copy lg:pb-2">
              Revridge brings learning, financial planning, investing, and
              progress tracking into one approachable wealth-building platform
              for Zambia.
            </p>
          </div>
        </header>

        <section className="site-section bg-white">
          <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 className="section-title">Why Revridge exists</h2>
            </div>
            <div className="max-w-3xl text-lg leading-8 text-muted-foreground">
              <p>
                Most people are shut out of investing long before they ever reach
                a market. They are shut out by jargon, by minimums set for
                somebody else, and by advice that assumes knowledge nobody
                offered them. What is left is scattered: lessons in one place,
                market information in another, goals somewhere else again.
              </p>
              <p className="mt-5">
                Revridge exists to close that gap. One app where the education is
                genuinely good, the planning tools are yours to use whether or
                not you have money invested yet, and the investment options are
                reachable through licensed partners — so that access grows with
                your understanding instead of waiting on it.
              </p>
            </div>
          </div>
        </section>

        <section className="site-section border-y border-border bg-[#F5F7F6]">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <h2 className="section-title">Learn → Invest → Grow</h2>
                <p className="section-copy mt-5">
                  Not three separate features. One sequence that keeps context
                  as you move.
                </p>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {journey.map(({ icon: Icon, step, copy }, index) => (
                  <div
                    key={step}
                    className="grid gap-4 py-7 sm:grid-cols-[48px_130px_1fr] sm:items-center"
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-[9px] bg-[#CAF300] text-[#004B44]">
                        <Icon size={19} />
                      </span>
                      <h3 className="text-xl font-[720]">{step}</h3>
                    </div>
                    <p className="max-w-xl leading-7 text-muted-foreground">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="site-section bg-white">
          <div className="site-container grid divide-y divide-border border-y border-border md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="py-7 md:pr-8">
              <h2 className="text-2xl font-[720]">
                Built for Zambian investors
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                Local market context and practical education for first-time and
                early-stage investors. Investing is available today on the
                Lusaka Securities Exchange.
              </p>
            </div>
            <div className="py-7 md:pl-8">
              <h2 className="text-2xl font-[720]">Broker-backed execution</h2>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                Revridge is the technology layer. Licensed broker partners are
                responsible for accepted order execution, settlement, and
                custody.
              </p>
            </div>
          </div>
        </section>

        {/* Restored from the pre-redesign About page (commit 399ebb3). Two
            phrases were adjusted to match the current LuSE-and-brokers
            positioning — see the note in the handoff. */}
        <section
          className="site-section border-t border-border bg-[#F5F7F6]"
          aria-labelledby="founders-title"
        >
          <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 id="founders-title" className="section-title">
                Why we built this
              </h2>
              <p className="section-copy mt-5">A message from our co-founders.</p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={ElyuPortrait}
                  alt=""
                  width={112}
                  height={112}
                  className="h-14 w-14 rounded-full border border-border object-cover"
                  loading="lazy"
                />
                <img
                  src={WonganiPortrait}
                  alt=""
                  width={112}
                  height={112}
                  className="-ml-7 h-14 w-14 rounded-full border border-border object-cover"
                  loading="lazy"
                />
                <p className="text-sm font-[680] text-[#17201E]">
                  Ely&rsquo;umusa &amp; Wongani
                  <span className="mt-0.5 block font-normal text-[color:var(--meta-ink)]">
                    Co-Founders
                  </span>
                </p>
              </div>
            </div>

            <blockquote className="surface-panel p-6 text-lg leading-8 text-muted-foreground md:p-9">
              <p className="text-[#17201E]">
                <strong className="font-[720]">
                  We started Revridge because we lived this problem.
                </strong>
              </p>
              <p className="mt-5">
                As young Zambians who wanted to grow our money, we kept running
                into the same wall. Investing was treated as something for other
                people — people with capital, contacts, or a finance background.
                The knowledge sat behind jargon, the products sat behind
                gatekeepers, and nobody was explaining either.
              </p>
              <p className="mt-5">
                So we asked ourselves:{' '}
                <strong className="font-[680] text-[#17201E]">
                  &ldquo;What if one app could teach you properly and let you act
                  on what you learn?&rdquo;
                </strong>
              </p>
              <p className="mt-5">
                That question is what Revridge is. Education worth the name, in
                plain language. Tools to plan and see your whole financial
                picture. And access to real investments, handled by licensed
                partners — starting with the market open to Zambians today, and
                widening as we earn the right to carry more.
              </p>
              <footer className="mt-7 border-t border-border pt-6">
                <p className="italic">
                  &ldquo;We&rsquo;re building the platform we wish existed when
                  we were starting out — one where the door is open first and the
                  options grow with you. If you&rsquo;ve ever felt like investing
                  wasn&rsquo;t for you, this is for you.&rdquo;
                </p>
                <cite className="mt-4 block not-italic font-[680] text-primary">
                  — Ely&rsquo;umusa &amp; Wongani, Co-Founders
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="site-section bg-[#00322D] text-white">
          <div className="site-container flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-2xl text-4xl font-[740] tracking-[-0.035em] text-white md:text-5xl">
                See the journey in the app.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Android is available now. iOS is in beta.
              </p>
              <p className="mt-8 text-sm font-[680] text-white/60">
                Follow Revridge
              </p>
              <SocialLinks className="mt-3" />
            </div>
            <Link
              className="store-action shrink-0 border-white bg-white text-[#004B44] hover:bg-[#F5F7F6]"
              to="/download"
            >
              Get the app <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

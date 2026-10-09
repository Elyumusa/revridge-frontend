import { ArrowRight, BookOpen, Goal, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/ui/home/Footer";
import SocialLinks from "@/components/ui/SocialLinks";
import Reveal from "@/components/ui/home/Reveal";
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
    copy: "Start with real local investing on the LuSE, through licensed broker partners.",
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
            <h1>
              Investing makes more sense when the journey is connected.
            </h1>
            <p className="section-copy lg:pb-2">
              Revridge brings learning, financial planning, investing, and
              progress tracking into one wealth-building platform. We are
              starting in Zambia with real local investing, and building toward
              broader opportunities over time.
            </p>
          </div>
        </header>

        <section className="site-section bg-white">
          <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <Reveal>
                <h2 className="display-lg max-w-[10ch]">Why Revridge exists</h2>
              </Reveal>
            </div>
            <Reveal className="max-w-3xl text-lg leading-8 text-muted-foreground">
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
            </Reveal>
          </div>
        </section>

        <section className="site-section bg-[#F5F7F6]">
          <div className="site-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="display-lg mx-auto max-w-[14ch]">Learn → Invest → Grow</h2>
              <p className="lead-copy mx-auto mt-5 max-w-[42ch] text-[color:var(--muted-ink)]">
                Not three separate features. One sequence that keeps context as
                you move.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {journey.map(({ icon: Icon, step, copy }, index) => (
                <Reveal key={step} delay={index * 0.08}>
                  <div className="h-full rounded-[28px] bg-white p-8 transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0">
                    <span className="lime-marker grid h-12 w-12 place-items-center rounded-full">
                      <Icon size={21} />
                    </span>
                    <p className="tabular mt-8 text-sm font-[700] text-[color:var(--meta-ink)]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 text-2xl font-[680] tracking-[-.03em]">{step}</h3>
                    <p className="mt-3 leading-7 text-[color:var(--meta-ink)]">{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section bg-white">
          <div className="site-container grid gap-4 md:grid-cols-2">
            {[
              [
                "Starting in Zambia",
                "Local market context and practical education for first-time and early-stage investors. Real investing is available today on the Lusaka Securities Exchange; our ambition is to help you build wealth across more opportunities over time.",
              ],
              [
                "Broker-backed execution",
                "Revridge is the technology layer. Licensed broker partners are responsible for accepted order execution, settlement, and custody.",
              ],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="h-full rounded-[28px] bg-[#F5F7F6] p-8 md:p-10">
                  <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-[680] tracking-[-.03em]">{title}</h2>
                  <p className="mt-4 max-w-md leading-7 text-[color:var(--meta-ink)]">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Restored from the pre-redesign About page (commit 399ebb3). Two
            phrases were adjusted to match the current LuSE-and-brokers
            positioning — see the note in the handoff. */}
        <section
          className="site-section bg-white"
          aria-labelledby="founders-title"
        >
          <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 id="founders-title" className="display-lg max-w-[9ch]">
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

            <blockquote className="rounded-[clamp(24px,3vw,36px)] bg-[#F5F7F6] p-7 text-lg leading-8 text-muted-foreground md:p-12">
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

        <section className="bg-white pb-16 md:pb-24">
          <div className="site-container">
            <div className="hero-glow flex flex-col justify-between gap-8 rounded-[clamp(28px,4vw,48px)] p-8 text-white sm:p-12 md:flex-row md:items-end lg:p-16">
              <div>
                <h2 className="display-lg max-w-[12ch] text-white">
                  See the journey in the app.
                </h2>
                <p className="lead-copy mt-4 max-w-xl text-white/75">
                  Android is available now. iOS is in beta.
                </p>
                <p className="mt-8 text-sm font-[680] text-white/70">
                  Follow Revridge
                </p>
                <SocialLinks className="mt-3" />
              </div>
              <Link className="pill-btn pill-btn--white shrink-0" to="/download">
                Get the app <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

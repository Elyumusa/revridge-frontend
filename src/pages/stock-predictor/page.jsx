import { useState } from "react";
import { AlertTriangle, ArrowRight, Info } from "lucide-react";
import Footer from "@/components/ui/home/Footer";

export default function StockPredictorPage() {
  const [notice, setNotice] = useState("");
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <header className="page-hero border-b border-border">
          <div className="site-container route-frame max-w-5xl">
            <h1 className="font-[760] tracking-[-0.04em]">
              Price prediction, kept in perspective.
            </h1>
            <p className="section-copy mt-6">
              This experimental interface is separate from LuSE investing and
              does not generate trade recommendations.
            </p>
          </div>
        </header>
        <section className="site-section bg-white">
          <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setNotice("Prediction generation is not currently available.");
              }}
              className="surface-panel draft-grid p-6"
            >
              <h2 className="text-2xl font-[720]">Prediction inputs</h2>
              {/* The generator is not wired up yet. Saying so before the user
                  fills the form beats letting them submit into a dead end. */}
              <p className="mt-4 flex gap-2 rounded-[10px] border border-border bg-[#F5F7F6] p-3 text-sm leading-6 text-muted-foreground">
                <Info size={17} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  Prediction generation is not available yet. You can review the
                  inputs, but no result will be produced.
                </span>
              </p>
              <label className="mt-6 block text-sm font-[650]">
                Stock symbol
                <input
                  className="mt-2 h-12 w-full rounded-[10px] border border-input px-4 uppercase outline-none focus:border-primary"
                  placeholder="Enter a supported symbol"
                  autoComplete="off"
                  autoCapitalize="characters"
                  spellCheck={false}
                  required
                />
              </label>
              <label className="mt-5 block text-sm font-[650]">
                Timeframe
                <select
                  className="mt-2 h-12 w-full rounded-[10px] border border-input bg-white px-4 outline-none focus:border-primary"
                  defaultValue="1m"
                >
                  <option value="1d">1 day</option>
                  <option value="1w">1 week</option>
                  <option value="1m">1 month</option>
                  <option value="3m">3 months</option>
                </select>
              </label>
              <button className="store-action store-action--filled mt-6">
                Generate prediction <ArrowRight size={17} />
              </button>
              {notice && (
                <p
                  className="mt-4 text-sm font-[650] text-[#765000]"
                  role="status"
                >
                  {notice}
                </p>
              )}
            </form>
            <div>
              <h2 className="section-title">
                Models are one input, not an answer.
              </h2>
              <div className="mt-7 divide-y divide-border border-y border-border">
                {[
                  [
                    "Historical data",
                    "Predictions inherit the limitations and gaps in their source data.",
                  ],
                  [
                    "Market change",
                    "News, liquidity, and company events can make prior patterns irrelevant.",
                  ],
                  [
                    "Your decision",
                    "A model cannot assess your goals, time horizon, or ability to absorb a loss.",
                  ],
                ].map(([title, copy]) => (
                  <div key={title} className="py-5">
                    <h3 className="text-lg font-[700]">{title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex gap-3 rounded-[12px] border border-[#F59E0B]/30 bg-[#F59E0B]/10 p-5 text-[#5E4A16]">
                <AlertTriangle className="mt-1 shrink-0" size={20} />
                <p className="leading-7">
                  Predicted prices are uncertain and should never be treated as
                  a guarantee or personalised advice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import axios from "axios";
import {
  AlertTriangle,
  ArrowDownCircle,
  ArrowUpCircle,
  Loader2,
  Minus,
  Search,
} from "lucide-react";
import StockChart from "@/components/ui/StockChart";
import Footer from "@/components/ui/home/Footer";

export default function StockTradingBot() {
  const [ticker, setTicker] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stockData, setStockData] = useState([]);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const mainURL = import.meta.env.VITE_TRADING_BOT_URL;
      const response = await axios.get(
        `${mainURL}/trading_bot/?symbol=${encodeURIComponent(ticker.trim())}`,
      );
      const analysis = response.data.analysis_result;
      const action = analysis.buy ? "Buy" : analysis.sell ? "Sell" : "Hold";
      setStockData(
        (response.data.stock_data || []).map((quote) => ({
          time: quote.time.split("T")[0],
          price: quote.close_price,
        })),
      );
      setResult({ action, analysis: analysis.explanation });
    } catch {
      setError(
        "The analysis service is unavailable right now. Try again later.",
      );
    } finally {
      setLoading(false);
    }
  }

  const ActionIcon =
    result?.action === "Buy"
      ? ArrowUpCircle
      : result?.action === "Sell"
        ? ArrowDownCircle
        : Minus;
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <header className="page-hero border-b border-border">
          <div className="site-container route-frame max-w-5xl">
            <h1 className="font-[760] tracking-[-0.04em]">
              Experimental market analysis.
            </h1>
            <p className="section-copy mt-6">
              A separate research utility. It is not the Revridge LuSE order
              flow and its output is not investment advice.
            </p>
          </div>
        </header>
        <section className="site-section bg-white">
          <div className="site-container max-w-5xl">
            <form
              onSubmit={handleSubmit}
              className="surface-panel draft-grid grid gap-3 p-5 sm:grid-cols-[1fr_auto]"
            >
              <label
                htmlFor="analysis-ticker"
                className="text-sm font-[650] sm:col-span-2"
              >
                Ticker symbol
              </label>
              <input
                id="analysis-ticker"
                name="ticker"
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                className="h-12 rounded-[10px] border border-input px-4 uppercase outline-none focus:border-primary"
                value={ticker}
                onChange={(event) => setTicker(event.target.value)}
                placeholder="Enter a supported symbol"
                required
              />
              <button
                className="store-action store-action--filled"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={17} />
                    Analysing…
                  </>
                ) : (
                  <>
                    <Search size={17} />
                    Analyse
                  </>
                )}
              </button>
            </form>
            {error && (
              <p className="mt-5 text-[#B71C1C]" role="alert">
                {error}
              </p>
            )}
            {result && (
              <div className="mt-10 grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <ActionIcon
                      className={
                        result.action === "Buy"
                          ? "text-[#2E7D32]"
                          : result.action === "Sell"
                            ? "text-[#B71C1C]"
                            : "text-[#F59E0B]"
                      }
                    />
                    <h2 className="text-3xl font-[730]">{result.action}</h2>
                  </div>
                  <p className="mt-5 whitespace-pre-line leading-7 text-muted-foreground">
                    {result.analysis}
                  </p>
                </div>
                <div className="surface-panel min-h-72 overflow-hidden p-4">
                  <StockChart data={stockData} />
                </div>
              </div>
            )}
            <div className="mt-10 rounded-[12px] border border-[#F59E0B]/30 bg-[#F59E0B]/10 p-5">
              <div className="flex items-center gap-2 font-[700] text-[#765000]">
                <AlertTriangle size={19} />
                Research warning
              </div>
              <p className="mt-2 leading-7 text-[#5E4A16]">
                Models can be wrong. Research the company, understand the
                market, and consider your circumstances before acting.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

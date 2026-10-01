import { useEffect, useState } from "react";
import axios from "axios";
import { AlertTriangle, CalendarDays, Loader2, Search } from "lucide-react";
import Footer from "@/components/ui/home/Footer";

function firstOfMonth(value) {
  const date = value ? new Date(`${value}-01T00:00:00`) : new Date();
  date.setDate(1);
  return date;
}

/** LuSE dividends are declared in kwacha; the table was printing a dollar sign. */
function formatKwacha(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "—";
  return new Intl.NumberFormat("en-ZM", {
    style: "currency",
    currency: "ZMW",
    currencyDisplay: "code",
    minimumFractionDigits: 2,
  }).format(amount);
}

function formatMediumDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString("en-ZM", { dateStyle: "medium" });
}

export default function DividendCalendar() {
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const [dividends, setDividends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let live = true;
    async function fetchDividends() {
      setLoading(true);
      setError("");
      try {
        const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
        const result = await axios.get(
          `${mainURL}/api/div_calendar/?start=${firstOfMonth(month).toLocaleDateString("en-CA")}`,
        );
        if (live) setDividends(result.data.cash_dividends || []);
      } catch {
        if (live) {
          setDividends([]);
          setError("Dividend data could not be loaded right now.");
        }
      } finally {
        if (live) setLoading(false);
      }
    }
    fetchDividends();
    return () => {
      live = false;
    };
  }, [month]);

  async function handleSearch(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
      const result = await axios.get(
        `${mainURL}/api/div_cal_stock/?query=${encodeURIComponent(searchTerm.trim())}`,
      );
      setDividends(result.data.cash_dividends || []);
    } catch {
      setDividends([]);
      setError("No dividend data could be returned for that search.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <header className="page-hero border-b border-border">
          <div className="site-container route-frame max-w-5xl">
            <h1 className="font-[760] tracking-[-0.04em]">
              Dividend dates, in one view.
            </h1>
            <p className="section-copy mt-6">
              Search a supported company or review the configured market
              calendar by month.
            </p>
          </div>
        </header>
        <section className="site-section bg-white">
          <div className="site-container max-w-6xl">
            <div className="grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
              <label className="surface-panel draft-grid p-5 text-sm font-[650]">
                Calendar month
                <div className="relative mt-2">
                  <CalendarDays
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                    size={18}
                  />
                  <input
                    type="month"
                    className="h-12 w-full rounded-[10px] border border-input pl-11 pr-4 outline-none focus:border-primary"
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}
                  />
                </div>
              </label>
              <form onSubmit={handleSearch} className="surface-panel draft-grid p-5">
                <label htmlFor="dividend-search" className="text-sm font-[650]">
                  Company or symbol
                </label>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <input
                    id="dividend-search"
                    name="dividend-search"
                    className="h-12 flex-1 rounded-[10px] border border-input px-4 outline-none focus:border-primary"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Enter a supported company"
                    required
                  />
                  <button className="store-action store-action--filled">
                    <Search size={17} />
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-10">
              <div className="flex items-end justify-between gap-5 border-b border-border pb-5">
                <h2 className="text-3xl font-[730] tracking-[-0.03em]">
                  Dividend calendar
                </h2>
                <span className="text-sm text-muted-foreground">
                  {firstOfMonth(month).toLocaleDateString("en-ZM", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              {loading ? (
                <div className="grid h-48 place-items-center">
                  <Loader2 className="animate-spin text-primary" />
                </div>
              ) : error ? (
                <p className="py-10 text-[#B71C1C]" role="alert">
                  {error}
                </p>
              ) : dividends.length ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <caption className="sr-only">
                      Dividend amounts and dates for the selected companies
                    </caption>
                    <thead className="border-b border-border text-xs uppercase tracking-[0.06em] text-muted-foreground">
                      <tr>
                        <th scope="col" className="px-3 py-4">Company</th>
                        <th scope="col" className="px-3 py-4">Symbol</th>
                        <th scope="col" className="px-3 py-4">Amount</th>
                        <th scope="col" className="px-3 py-4">Payment date</th>
                        <th scope="col" className="px-3 py-4">Ex-dividend date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {dividends.map((dividend) => (
                        <tr
                          key={
                            dividend.id ||
                            `${dividend.symbol}-${dividend.ex_date}`
                          }
                        >
                          <th scope="row" className="px-3 py-5 text-left font-[650]">
                            {dividend.company || dividend.symbol}
                          </th>
                          <td className="px-3 py-5">{dividend.symbol}</td>
                          <td className="px-3 py-5 tabular">
                            {formatKwacha(dividend.rate)}
                          </td>
                          <td className="px-3 py-5 tabular">
                            {formatMediumDate(dividend.payable_date)}
                          </td>
                          <td className="px-3 py-5 tabular">
                            {formatMediumDate(dividend.ex_date)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="py-10 text-muted-foreground">
                  No dividends found for this selection.
                </p>
              )}
            </div>
            <div className="mt-8 flex gap-3 rounded-[12px] border border-[#F59E0B]/30 bg-[#F59E0B]/10 p-5 text-[#5E4A16]">
              <AlertTriangle className="mt-1 shrink-0" size={20} />
              <p className="leading-7">
                Dividend dates and amounts can change. Verify company
                announcements and understand the investment risks before making
                a decision.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

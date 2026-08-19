import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  CalendarClock,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface Company {
  id: string;
  name: string;
  shortName: string;
}

interface HistoryPoint {
  date: string;
  close: number;
}

interface CalculationResult {
  symbol: string;
  company_name: string;
  currency: "ZMW";
  old_price: string;
  latest_price: string;
  start_date: string;
  /** The API returns `calculation_date`; older payloads used `latest_date`. */
  latest_date?: string;
  calculation_date?: string;
  history?: HistoryPoint[];
  split?: number | string;
  is_mock?: boolean;
}

const companies: Company[] = [
  { id: "CECZ", name: "Copperbelt Energy", shortName: "CEC" },
  { id: "ZNCO", name: "Zanaco", shortName: "ZAN" },
  { id: "ZMBF", name: "Zambeef", shortName: "ZMB" },
  { id: "ATEL", name: "Airtel Zambia", shortName: "AIR" },
  { id: "ZSUG", name: "Zambia Sugar", shortName: "ZSG" },
  { id: "CHIL", name: "Chilanga Cement", shortName: "CHI" },
  { id: "PUMA", name: "Puma Energy", shortName: "PUM" },
  { id: "BATZ", name: "BAT Zambia", shortName: "BAT" },
  { id: "AECI", name: "AECI Mining", shortName: "AEC" },
];

const timeFrames = [
  { years: 1, label: "1Y" },
  { years: 2, label: "2Y" },
  { years: 3, label: "3Y" },
  { years: 5, label: "5Y" },
];

const minAmount = 100;
const maxAmount = 100_000;

function sliderPosition(amount: number) {
  const min = Math.log(minAmount);
  const max = Math.log(maxAmount);
  return ((Math.log(amount) - min) / (max - min)) * 100;
}

function amountFromSlider(position: number) {
  const min = Math.log(minAmount);
  const max = Math.log(maxAmount);
  const raw = Math.exp(min + ((max - min) * position) / 100);
  return Math.round(raw / 10) * 10;
}

function formatKwacha(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-ZM", {
    style: "currency",
    currency: "ZMW",
    currencyDisplay: "code",
    maximumFractionDigits,
  }).format(value);
}

/**
 * Historical closing prices change at most once a trading day, and the response
 * varies only by (symbol, period) — nine companies and four periods, so the
 * whole feature has 36 possible answers. Caching them per session turns a
 * browsing user's dozens of requests into at most one per combination they
 * actually open.
 *
 * This is a client-side floor, not the real fix: a shared cache in front of the
 * API is what makes upstream load independent of how many people visit.
 */
const RESULT_TTL_MS = 12 * 60 * 60 * 1000;
const resultCache = new Map<string, { at: number; data: CalculationResult }>();

function resultCacheKey(symbol: string, years: number) {
  return `revridge:calc:${symbol}:${years}`;
}

function readCachedResult(
  symbol: string,
  years: number,
  ignoreAge = false,
): CalculationResult | null {
  const key = resultCacheKey(symbol, years);
  const fresh = (entry: { at: number; data: CalculationResult }) =>
    ignoreAge || Date.now() - entry.at < RESULT_TTL_MS;

  const inMemory = resultCache.get(key);
  if (inMemory && fresh(inMemory)) return inMemory.data;

  try {
    const raw = window.sessionStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as { at: number; data: CalculationResult };
    if (!entry?.data || !fresh(entry)) return null;
    resultCache.set(key, entry);
    return entry.data;
  } catch {
    // Private browsing and storage-blocked contexts fall back to memory only.
    return null;
  }
}

function writeCachedResult(
  symbol: string,
  years: number,
  data: CalculationResult,
) {
  const key = resultCacheKey(symbol, years);
  const entry = { at: Date.now(), data };
  resultCache.set(key, entry);
  try {
    window.sessionStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // Memory cache still applies.
  }
}

function formatMediumDate(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-ZM", { dateStyle: "medium" });
}

export default function InvestmentCalculator() {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(1);
  const [investmentAmount, setInvestmentAmount] = useState(1_000);
  const investmentAmountRef = useRef(investmentAmount);
  const [apiData, setApiData] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requestNonce, setRequestNonce] = useState(0);
  // Tracks which nonce has already been honoured, so "Try again" bypasses the
  // cache once instead of disabling it for the rest of the session.
  const servedNonceRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    investmentAmountRef.current = investmentAmount;
  }, [investmentAmount]);

  // Nothing is fetched until the section is close to the viewport. Visitors who
  // read the hero and leave cost the market API nothing at all.
  useEffect(() => {
    const element = sectionRef.current;
    if (!element || isVisible) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const controller = new AbortController();

    // The response depends only on symbol and period — every amount is derived
    // client-side from old_price/latest_price — so a combination fetched once is
    // good for the whole session.
    const isRetry = requestNonce !== servedNonceRef.current;
    servedNonceRef.current = requestNonce;

    const cached = readCachedResult(selectedCompany.id, selectedTimeFrame);
    if (cached && !isRetry) {
      setApiData(cached);
      setError(null);
      setLoading(false);
      return;
    }

    async function fetchReturns() {
      setLoading(true);
      setError(null);
      setApiData(null);

      const selectedDate = new Date();
      selectedDate.setFullYear(selectedDate.getFullYear() - selectedTimeFrame);
      const backend =
        import.meta.env.VITE_REVRIDGE_BACKEND_URL || "http://localhost:8000";

      try {
        const response = await axios.get<CalculationResult>(
          `${backend}/api/investment_calculator/`,
          {
            params: {
              start: selectedDate.toLocaleDateString("en-CA"),
              symbol: selectedCompany.id,
              amount: investmentAmountRef.current,
            },
            signal: controller.signal,
          },
        );
        writeCachedResult(selectedCompany.id, selectedTimeFrame, response.data);
        setApiData(response.data);
      } catch (requestError) {
        if (axios.isCancel(requestError)) return;
        const status = axios.isAxiosError(requestError)
          ? requestError.response?.status
          : null;
        const message = axios.isAxiosError<{ error?: string }>(requestError)
          ? requestError.response?.data?.error
          : null;
        // A stale cached answer beats an empty chart: these are historical
        // closes, so yesterday's copy is still the right shape.
        const fallback = readCachedResult(
          selectedCompany.id,
          selectedTimeFrame,
          true,
        );
        if (fallback) {
          setApiData(fallback);
          return;
        }
        setError(
          status === 429
            ? "Too many requests just now. Give it a moment and try again."
            : message ||
                "Historical LuSE prices are temporarily unavailable. Please try again.",
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchReturns();
    return () => controller.abort();
  }, [selectedCompany, selectedTimeFrame, requestNonce, isVisible]);

  const calculation = useMemo(() => {
    if (!apiData) return null;
    const oldPrice = Number(apiData.old_price);
    const latestPrice = Number(apiData.latest_price);
    if (
      !Number.isFinite(oldPrice) ||
      !Number.isFinite(latestPrice) ||
      oldPrice <= 0
    )
      return null;

    const parsedSplit =
      typeof apiData.split === "number"
        ? apiData.split
        : Number(apiData.split || 1);
    const split =
      Number.isFinite(parsedSplit) && parsedSplit > 0 ? parsedSplit : 1;
    const shares = (investmentAmount / oldPrice) * split;
    const finalAmount = shares * latestPrice;
    const percentage =
      ((finalAmount - investmentAmount) / investmentAmount) * 100;
    const history = apiData.history?.length
      ? apiData.history.map((point) => ({
          date: point.date,
          value: point.close * shares,
        }))
      : Array.from({ length: 11 }, (_, index) => ({
          date: new Date(
            Date.now() -
              ((10 - index) / 10) * selectedTimeFrame * 365.25 * 86400000,
          ).toISOString(),
          value:
            investmentAmount +
            (finalAmount - investmentAmount) * (index / 10) ** 2,
        }));
    return { finalAmount, percentage, history };
  }, [apiData, investmentAmount, selectedTimeFrame]);

  const latestDateLabel = formatMediumDate(
    apiData?.latest_date ?? apiData?.calculation_date,
  );

  const gain = calculation ? calculation.percentage >= 0 : true;

  return (
    <section
      id="calculator"
      ref={sectionRef}
      className="site-section scroll-mt-20 border-b border-border bg-white"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mx-auto text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-.035em]">
            See what a holding could have done.
          </h2>
          <p className="section-copy mx-auto mt-5">
            Pick a company, choose how far back to look, and set an amount. The
            figures come from historical closing prices — a way to build
            intuition, not a forecast.
          </p>
        </div>

        <div className="mt-14 grid gap-10 xl:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] xl:gap-14">
          <div className="space-y-9">
            <div>
              <h3 id="company-picker-label" className="text-xs font-[700] uppercase tracking-[.1em] text-[color:var(--meta-ink)]">
                Select a company
              </h3>
              <div
                role="group"
                aria-labelledby="company-picker-label"
                className="mt-4 grid grid-cols-3 gap-3"
              >
                {companies.map((company) => {
                  const isSelected = selectedCompany.id === company.id;
                  return (
                    <button
                      type="button"
                      key={company.id}
                      onClick={() => setSelectedCompany(company)}
                      aria-pressed={isSelected}
                      title={company.name}
                      className={cn(
                        "company-tile flex flex-col items-center gap-2 rounded-[12px] border p-3 text-center",
                        isSelected
                          ? "company-tile--selected border-primary/25 bg-[#E7EFED]"
                          : "border-transparent",
                      )}
                    >
                      <span
                        className={cn(
                          "grid h-11 w-11 place-items-center rounded-full text-[11px] font-[780] transition-colors",
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-white text-primary ring-1 ring-[color:var(--line)]",
                        )}
                      >
                        {company.shortName}
                      </span>
                      <span
                        className={cn(
                          "w-full truncate text-[11px] leading-4",
                          isSelected
                            ? "text-[color:var(--meta-ink-on-teal)]"
                            : "text-[color:var(--meta-ink)]",
                        )}
                      >
                        {company.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 id="period-label" className="text-xs font-[700] uppercase tracking-[.1em] text-[color:var(--meta-ink)]">
                Investment duration
              </h3>
              <div
                role="group"
                aria-labelledby="period-label"
                className="mt-4 flex flex-wrap gap-2"
              >
                {timeFrames.map((frame) => (
                  <button
                    key={frame.years}
                    type="button"
                    onClick={() => setSelectedTimeFrame(frame.years)}
                    aria-pressed={selectedTimeFrame === frame.years}
                    className={cn(
                      "h-11 rounded-full px-6 text-sm font-[700] transition-colors",
                      selectedTimeFrame === frame.years
                        ? "bg-primary text-white"
                        : "border border-[color:var(--line)] bg-white text-[color:var(--meta-ink-strong)] hover:border-primary hover:text-primary",
                    )}
                  >
                    {frame.years} {frame.years === 1 ? "year" : "years"}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[14px] border border-border bg-[#F5F7F6] p-5 sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <label
                  htmlFor="initial-investment"
                  className="text-xs font-[700] uppercase tracking-[.1em] text-[color:var(--meta-ink)]"
                >
                  Initial investment
                </label>
                <output className="tabular rounded-[10px] border border-border bg-white px-3 py-1 text-xl font-[800] tracking-[-.02em] text-[#17201E]">
                  {formatKwacha(investmentAmount)}
                </output>
              </div>
              <Slider
                id="initial-investment"
                value={[sliderPosition(investmentAmount)]}
                min={0}
                max={100}
                step={0.1}
                onValueChange={([value]) =>
                  setInvestmentAmount(amountFromSlider(value))
                }
                className="mt-6 py-2"
                aria-label="Initial investment in Zambian kwacha"
              />
              {/* Ticks sit at their true position on the logarithmic track
                  rather than at even intervals. */}
              <div className="tabular relative mt-2 h-4 text-[11px] text-[color:var(--meta-ink)]">
                {[100, 500, 2_000, 10_000, 100_000].map((mark) => (
                  <span
                    key={mark}
                    className="absolute -translate-x-1/2 whitespace-nowrap"
                    style={{ left: `${sliderPosition(mark)}%` }}
                  >
                    {mark >= 1000 ? `${mark / 1000}k` : mark}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="surface-panel flex min-w-0 flex-col p-6 md:p-8">
            <p className="text-base text-[color:var(--meta-ink)]">
              {formatKwacha(investmentAmount)} invested in {selectedCompany.name} over{" "}
              {selectedTimeFrame} {selectedTimeFrame === 1 ? "year" : "years"}{" "}
              would be worth
            </p>

            <div className="mt-4 flex flex-wrap items-baseline gap-4">
              {loading ? (
                <div className="h-16 w-72 animate-pulse rounded-[12px] bg-[#EDF1EF]" />
              ) : calculation ? (
                <>
                  <p className="tabular text-[clamp(2.75rem,6vw,4.5rem)] font-[820] leading-none tracking-[-.04em] text-[#17201E]">
                    {formatKwacha(calculation.finalAmount)}
                  </p>
                  <span
                    className={cn(
                      "tabular inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-[760]",
                      gain
                        ? "bg-[#E6F0E7] text-[#256B29]"
                        : "bg-[#FBE9E9] text-[#B71C1C]",
                    )}
                  >
                    {gain ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
                    {Math.abs(calculation.percentage).toFixed(2)}%
                  </span>
                </>
              ) : (
                <p className="tabular text-[clamp(2.75rem,6vw,4.5rem)] font-[820] leading-none tracking-[-.04em] text-[color:var(--meta-ink)]">
                  —
                </p>
              )}
            </div>

            <div className="mt-8 min-w-0 flex-1">
              {error ? (
                <div className="grid h-[300px] place-items-center rounded-[12px] bg-[#FFF6F6] p-6 text-center">
                  <div>
                    <AlertTriangle className="mx-auto text-[#B71C1C]" />
                    <p className="mt-3 text-sm font-semibold text-[#B71C1C]">
                      {error}
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline"
                      onClick={() => setRequestNonce((value) => value + 1)}
                    >
                      <RefreshCw size={15} /> Try again
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="h-[300px] min-w-0 lg:h-[340px]"
                  aria-label={`Historical value chart for ${selectedCompany.name}`}
                >
                  {loading ? (
                    <div className="h-full animate-pulse rounded-[12px] bg-[#F0F3F2]" />
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={calculation?.history || []}
                        margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id="luse-value-fill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#004B44"
                              stopOpacity={0.26}
                            />
                            <stop
                              offset="95%"
                              stopColor="#004B44"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="date" hide />
                        <YAxis hide domain={["dataMin", "auto"]} />
                        <Tooltip
                          cursor={{
                            stroke: "#004B44",
                            strokeWidth: 1,
                            strokeDasharray: "4 4",
                          }}
                          contentStyle={{
                            background: "#fff",
                            border: "1px solid #E2E7E5",
                            borderRadius: 10,
                            boxShadow: "0 12px 30px rgba(0,75,68,.08)",
                          }}
                          formatter={(value) => [
                            formatKwacha(Number(value), 2),
                            "Illustrated value",
                          ]}
                          labelFormatter={(label) =>
                            formatMediumDate(String(label)) ?? ""
                          }
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#004B44"
                          strokeWidth={3}
                          fillOpacity={1}
                          fill="url(#luse-value-fill)"
                          activeDot={{
                            r: 5,
                            fill: "#CAF300",
                            stroke: "#004B44",
                            strokeWidth: 2,
                          }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}
                </div>
              )}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-[color:var(--meta-ink)]">
              <span className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F0F3F2] text-primary">
                  <TrendingUp size={16} />
                </span>
                {apiData?.is_mock ? (
                  <span className="font-[700] text-[#765000]">
                    Demonstration data
                  </span>
                ) : (
                  "Historical closing prices"
                )}
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F0F3F2] text-primary">
                  <CalendarClock size={16} />
                </span>
                {latestDateLabel ? `Through ${latestDateLabel}` : "Not a forecast"}
              </span>
              <span className="sm:ml-auto">
                Powered by{" "}
                <span className="font-[760] text-[#17201E]">
                  Revridge Intelligence
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

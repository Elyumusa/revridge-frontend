import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CalendarClock, Info, TrendingUp } from "lucide-react";

import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

/**
 * Replaces the earlier LuSE investment calculator, which fetched live closing
 * prices per company/period and could exhaust the market API's rate limit
 * under real traffic (see git history on this file). This calculator is pure
 * arithmetic — no fetch, no cache, no backend dependency of any kind.
 *
 * Growth-rate options are illustrative comparison benchmarks (bank interest,
 * government bonds, unit trusts), not products available through Revridge —
 * unit trusts in particular are a future instrument, not a current one. See
 * PRODUCT.md's Capabilities and Constraints.
 */
interface GrowthAssumption {
  id: string;
  label: string;
  qualifier: string;
  rate: number;
}

const growthAssumptions: GrowthAssumption[] = [
  { id: "bank", label: "Bank interest", qualifier: "average", rate: 0.02 },
  { id: "bonds", label: "Govt bonds", qualifier: "average", rate: 0.15 },
  { id: "unit-trusts", label: "Unit trusts", qualifier: "ambitious", rate: 0.17 },
];

const minStarting = 0;
const maxStarting = 20_000;
const minMonthly = 0;
const maxMonthly = 2_000;
const minYears = 1;
const maxYears = 20;

function formatKwacha(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-ZM", {
    style: "currency",
    currency: "ZMW",
    currencyDisplay: "code",
    maximumFractionDigits,
  }).format(value);
}

/**
 * Annual compounding only. The previous version offered Annually / Quarterly
 * / Monthly, which tested as more confusing than useful — the difference in
 * outcome is small at these amounts, and "grows once a year" is the one
 * mental model everyone already has.
 */
function growthSeries(
  starting: number,
  monthlyTopUp: number,
  years: number,
  annualRate: number,
) {
  const yearlyTopUp = monthlyTopUp * 12;
  const points = [{ year: 0, value: starting }];
  let value = starting;
  for (let year = 1; year <= years; year++) {
    value = value * (1 + annualRate) + yearlyTopUp;
    points.push({ year, value });
  }
  return points;
}

export default function GrowCalculator() {
  const [starting, setStarting] = useState(5_000);
  const [monthlyTopUp, setMonthlyTopUp] = useState(0);
  const [years, setYears] = useState(10);
  const [rateId, setRateId] = useState("bonds");

  const rate = growthAssumptions.find((a) => a.id === rateId) ?? growthAssumptions[1];

  const { series, finalValue, deposited } = useMemo(() => {
    const points = growthSeries(starting, monthlyTopUp, years, rate.rate);
    return {
      series: points,
      finalValue: points[points.length - 1].value,
      deposited: starting + monthlyTopUp * 12 * years,
    };
  }, [starting, monthlyTopUp, years, rate.rate]);

  const grown = Math.max(finalValue - deposited, 0);

  return (
    <section
      id="calculator"
      className="site-section scroll-mt-20 border-b border-border bg-white"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mx-auto text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-.035em]">
            See what consistency could add up to.
          </h2>
          <p className="section-copy mx-auto mt-5">
            Set an amount and a timeframe. The rest is just arithmetic —
            nothing here is pulled from the market.
          </p>
        </div>

        <div className="mt-14 grid gap-10 xl:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] xl:gap-14">
          <div className="rounded-[14px] border border-border bg-[#F5F7F6] p-5 sm:p-6">
            <div>
              <div className="flex items-end justify-between gap-4">
                <label
                  htmlFor="gc-starting"
                  className="text-xs font-[700] uppercase tracking-[.1em] text-[color:var(--meta-ink)]"
                >
                  Starting amount
                </label>
                <output
                  htmlFor="gc-starting"
                  className="tabular rounded-[10px] border border-border bg-white px-3 py-1 text-xl font-[800] tracking-[-.02em] text-[#17201E]"
                >
                  {formatKwacha(starting)}
                </output>
              </div>
              <Slider
                id="gc-starting"
                value={[starting]}
                min={minStarting}
                max={maxStarting}
                step={100}
                onValueChange={([value]) => setStarting(value)}
                className="mt-6 py-2"
                aria-label="Starting amount in Zambian kwacha"
              />
              <div className="tabular mt-1 flex justify-between text-[11px] text-[color:var(--meta-ink)]">
                <span>ZMW 0</span>
                <span>ZMW 20,000</span>
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-end justify-between gap-4">
                <label
                  htmlFor="gc-monthly"
                  className="text-xs font-[700] uppercase tracking-[.1em] text-[color:var(--meta-ink)]"
                >
                  Monthly top-up
                </label>
                <output
                  htmlFor="gc-monthly"
                  className="tabular rounded-[10px] border border-border bg-white px-3 py-1 text-xl font-[800] tracking-[-.02em] text-[#17201E]"
                >
                  {formatKwacha(monthlyTopUp)}
                </output>
              </div>
              <Slider
                id="gc-monthly"
                value={[monthlyTopUp]}
                min={minMonthly}
                max={maxMonthly}
                step={50}
                onValueChange={([value]) => setMonthlyTopUp(value)}
                className="mt-6 py-2"
                aria-label="Monthly top-up in Zambian kwacha"
              />
              <div className="tabular mt-1 flex justify-between text-[11px] text-[color:var(--meta-ink)]">
                <span>ZMW 0</span>
                <span>ZMW 2,000</span>
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-end justify-between gap-4">
                <label
                  htmlFor="gc-years"
                  className="text-xs font-[700] uppercase tracking-[.1em] text-[color:var(--meta-ink)]"
                >
                  Time period
                </label>
                <output
                  htmlFor="gc-years"
                  className="tabular rounded-[10px] border border-border bg-white px-3 py-1 text-xl font-[800] tracking-[-.02em] text-[#17201E]"
                >
                  {years} {years === 1 ? "yr" : "yrs"}
                </output>
              </div>
              <Slider
                id="gc-years"
                value={[years]}
                min={minYears}
                max={maxYears}
                step={1}
                onValueChange={([value]) => setYears(value)}
                className="mt-6 py-2"
                aria-label="Time period in years"
              />
              <div className="tabular mt-1 flex justify-between text-[11px] text-[color:var(--meta-ink)]">
                <span>1 yr</span>
                <span>20 yrs</span>
              </div>
            </div>

            <div className="mt-7">
              <h3
                id="gc-rate-label"
                className="text-xs font-[700] uppercase tracking-[.1em] text-[color:var(--meta-ink)]"
              >
                Illustrative annual growth
              </h3>
              <div
                role="group"
                aria-labelledby="gc-rate-label"
                className="mt-4 grid grid-cols-3 gap-3"
              >
                {growthAssumptions.map((assumption) => {
                  const isSelected = assumption.id === rateId;
                  return (
                    <button
                      type="button"
                      key={assumption.id}
                      onClick={() => setRateId(assumption.id)}
                      aria-pressed={isSelected}
                      className={cn(
                        "company-tile flex flex-col items-center gap-1 rounded-[12px] border p-3 text-center",
                        isSelected
                          ? "company-tile--selected border-primary/25 bg-[#E7EFED]"
                          : "border-transparent",
                      )}
                    >
                      <span
                        className={cn(
                          "tabular text-lg font-[800] tracking-[-.01em]",
                          isSelected ? "text-primary" : "text-[#17201E]",
                        )}
                      >
                        {Math.round(assumption.rate * 100)}%
                      </span>
                      <span className="text-[11px] font-[700] leading-4">
                        {assumption.label}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] leading-4",
                          isSelected
                            ? "text-[color:var(--meta-ink-on-teal)]"
                            : "text-[color:var(--meta-ink)]",
                        )}
                      >
                        {assumption.qualifier}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="surface-panel flex min-w-0 flex-col p-6 md:p-8">
            <p className="text-base text-[color:var(--meta-ink)]">
              {formatKwacha(starting)} to start
              {monthlyTopUp > 0 && (
                <> plus {formatKwacha(monthlyTopUp)} a month</>
              )}{" "}
              over {years} {years === 1 ? "year" : "years"} could become
            </p>

            <div className="mt-4 flex flex-wrap items-baseline gap-4">
              <p className="tabular text-[clamp(2.75rem,6vw,4.5rem)] font-[820] leading-none tracking-[-.04em] text-[#17201E]">
                {formatKwacha(finalValue)}
              </p>
              {grown > 0 && (
                <span className="tabular inline-flex items-center gap-1 rounded-full bg-[#E6F0E7] px-3 py-1 text-sm font-[760] text-[#256B29]">
                  + {formatKwacha(grown)} grown
                </span>
              )}
            </div>

            <div className="mt-8 min-w-0 flex-1">
              <div
                className="h-[300px] min-w-0 lg:h-[340px]"
                aria-label="Projected growth chart"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={series}
                    margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="grow-value-fill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="5%" stopColor="#004B44" stopOpacity={0.26} />
                        <stop offset="95%" stopColor="#004B44" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" hide />
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
                        label === 0 ? "Starting point" : `Year ${label}`
                      }
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#004B44"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#grow-value-fill)"
                      activeDot={{
                        r: 5,
                        fill: "#CAF300",
                        stroke: "#004B44",
                        strokeWidth: 2,
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-[color:var(--meta-ink)]">
              <span className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F0F3F2] text-primary">
                  <TrendingUp size={16} />
                </span>
                You set every number here
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#F0F3F2] text-primary">
                  <CalendarClock size={16} />
                </span>
                Not a forecast
              </span>
              <span className="sm:ml-auto">
                Powered by{" "}
                <span className="font-[760] text-[#17201E]">
                  Revridge Intelligence
                </span>
              </span>
            </div>

            <div className="mt-4 flex gap-2 text-xs leading-5 text-[color:var(--meta-ink)]">
              <Info size={14} className="mt-0.5 shrink-0 text-[color:var(--meta-ink)]" />
              <span>
                Bank, bond, and unit trust rates are broad estimates for
                comparison, not guaranteed figures or current rates — and not
                products available through Revridge today.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
import Reveal from "@/components/ui/home/Reveal";

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
      className="scroll-mt-20 bg-white py-16 md:py-24"
      aria-labelledby="calculator-title"
    >
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 id="calculator-title" className="display-lg mx-auto max-w-[14ch]">
            Watch consistency compound.
          </h2>
          <p className="lead-copy mx-auto mt-6 max-w-[46ch] text-[color:var(--muted-ink)]">
            Pick an amount, a timeframe, and a growth rate to compare. The rest
            is just arithmetic — nothing here is pulled from the market.
          </p>

          <div
            role="group"
            aria-label="Illustrative annual growth"
            className="segmented mt-9 max-w-full flex-wrap justify-center rounded-[24px] sm:rounded-full"
          >
            {growthAssumptions.map((assumption) => (
              <button
                type="button"
                key={assumption.id}
                onClick={() => setRateId(assumption.id)}
                aria-pressed={assumption.id === rateId}
              >
                {assumption.label}{" "}
                <span className="tabular">{Math.round(assumption.rate * 100)}%</span>
                <span className="sr-only"> ({assumption.qualifier})</span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-[color:var(--meta-ink)]">
            {rate.label}: an {rate.qualifier} estimate, not a quoted rate
          </p>
        </Reveal>

        <Reveal y={48} className="mt-12">
          <div className="grid gap-4 rounded-[clamp(24px,3vw,36px)] bg-[#F5F7F6] p-3 sm:p-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
            <div className="flex min-w-0 flex-col rounded-[clamp(18px,2.4vw,28px)] bg-white p-6 md:p-9">
              <p className="text-base text-[color:var(--meta-ink)]">
                {formatKwacha(starting)} to start
                {monthlyTopUp > 0 && (
                  <> plus {formatKwacha(monthlyTopUp)} a month</>
                )}{" "}
                over {years} {years === 1 ? "year" : "years"} could become
              </p>

              <div className="mt-3 flex flex-wrap items-baseline gap-4">
                <p className="tabular text-[clamp(2.8rem,6.4vw,5rem)] font-[680] leading-none tracking-[-.045em] text-[#17201E]">
                  {formatKwacha(finalValue)}
                </p>
                {grown > 0 && (
                  <span className="tabular inline-flex items-center gap-1 rounded-full bg-[#CAF300] px-3 py-1 text-sm font-[700] text-[#00322D]">
                    + {formatKwacha(grown)} grown
                  </span>
                )}
              </div>

              <div
                className="mt-8 h-[280px] min-w-0 flex-1 lg:h-[340px]"
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
                        borderRadius: 14,
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

            <div className="flex flex-col gap-8 rounded-[clamp(18px,2.4vw,28px)] bg-white p-6 md:p-9">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="gc-starting" className="text-sm font-[640] text-[color:var(--muted-ink)]">
                  Starting amount
                </label>
                <output htmlFor="gc-starting" className="tabular text-xl font-[700] tracking-[-.02em] text-[#17201E]">
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
                className="mt-5 py-2"
                aria-label="Starting amount in Zambian kwacha"
              />
              <div className="tabular mt-1 flex justify-between text-xs text-[color:var(--meta-ink)]">
                <span>ZMW 0</span>
                <span>ZMW 20,000</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="gc-monthly" className="text-sm font-[640] text-[color:var(--muted-ink)]">
                  Monthly top-up
                </label>
                <output htmlFor="gc-monthly" className="tabular text-xl font-[700] tracking-[-.02em] text-[#17201E]">
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
                className="mt-5 py-2"
                aria-label="Monthly top-up in Zambian kwacha"
              />
              <div className="tabular mt-1 flex justify-between text-xs text-[color:var(--meta-ink)]">
                <span>ZMW 0</span>
                <span>ZMW 2,000</span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="gc-years" className="text-sm font-[640] text-[color:var(--muted-ink)]">
                  Time period
                </label>
                <output htmlFor="gc-years" className="tabular text-xl font-[700] tracking-[-.02em] text-[#17201E]">
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
                className="mt-5 py-2"
                aria-label="Time period in years"
              />
              <div className="tabular mt-1 flex justify-between text-xs text-[color:var(--meta-ink)]">
                <span>1 yr</span>
                <span>20 yrs</span>
              </div>
            </div>

              <div className="mt-auto border-t border-border pt-6 text-sm text-[color:var(--meta-ink)]">
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <span className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary" />
                    You set every number
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarClock size={16} className="text-primary" />
                    Grows once a year
                  </span>
                </div>
                <p className="mt-3">
                  Powered by{" "}
                  <span className="font-[700] text-[#17201E]">
                    Revridge Intelligence
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-5 flex max-w-3xl justify-center gap-2 text-center text-xs leading-5 text-[color:var(--meta-ink)]">
            <Info size={14} className="mt-0.5 shrink-0" />
            <span>
              Bank, bond, and unit trust rates are broad estimates for
              comparison, not guaranteed figures or current rates — and not
              products available through Revridge today. This is an
              illustration, not a forecast.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

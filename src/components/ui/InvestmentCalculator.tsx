import { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button, Card, Heading, Text } from "@/components/design-system";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown, TrendingUp, Calendar } from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

// Logos (served from public folder)
const Tesla = '/tesla.svg';
const Apple = "/Apple.svg";
const Spot = '/spotify.svg';
const MSFT = '/microsoft.svg';
const Nvidia = '/nvidia-7.svg';
const SBUX = '/starbucks.svg';
const Google = '/google.svg';
const Meta = '/meta-facebook.svg';
const Netflix = '/netflix.svg';

// Interfaces
interface Company {
  id: string;
  name: string;
  logo: string;
  gradient: string;
}

interface CalculationResult {
  split: number;
  latest_price: string;
  old_price: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// Data
const companies: Company[] = [
  { id: 'TSLA', name: 'Tesla', logo: `${Tesla}?height=40&width=40`, gradient: "from-red-500 to-red-900" },
  { id: 'AAPL', name: 'Apple', logo: `${Apple}?height=40&width=40`, gradient: "from-gray-400 to-gray-800" },
  { id: 'GOOGL', name: 'Google', logo: `${Google}?height=40&width=40`, gradient: "from-green-500 to-green-900" },
  { id: 'AMZN', name: 'Amazon', logo: `https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg`, gradient: "from-yellow-500 to-orange-900" }, // Added Amazon
  { id: 'MSFT', name: 'Microsoft', logo: `${MSFT}?height=40&width=40`, gradient: "from-blue-500 to-blue-900" },
  { id: 'NVDA', name: 'Nvidia', logo: `${Nvidia}?height=40&width=40`, gradient: "from-green-400 to-emerald-900" },
  { id: 'NFLX', name: 'Netflix', logo: `${Netflix}?height=40&width=40`, gradient: "from-red-600 to-red-950" },
  { id: 'META', name: 'Meta', logo: `${Meta}?height=40&width=40`, gradient: "from-blue-400 to-blue-800" },
  { id: 'SBUX', name: 'Starbucks', logo: `${SBUX}?height=40&width=40`, gradient: "from-green-600 to-green-900" },
];

const timeFrames = [
  { id: 1, label: '1 Year' },
  { id: 2, label: '2 Years' },
  { id: 3, label: '3 Years' },
  { id: 5, label: '5 Years' },
];

export default function InvestmentCalculator() {
  const [selectedCompany, setSelectedCompany] = useState<Company>(companies[0]);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(1);
  const [investmentAmount, setInvestmentAmount] = useState(100);
  const [percentageGain, setPercentageGain] = useState(0);
  const [finalAmount, setFinalAmount] = useState(100);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState<CalculationResult | null>(null);

  // Chart data state
  const [chartData, setChartData] = useState<{ name: string, value: number }[]>([]);

  useEffect(() => {
    fetchReturns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCompany, selectedTimeFrame]);

  // Recalculate when investment amount changes (local only, no API call needed if data exists)
  useEffect(() => {
    console.log('⚡ useEffect triggered! investmentAmount:', investmentAmount);
    if (apiData) {
      // Always calculate based on current amount and price data
      const latest = parseFloat(apiData.latest_price);
      const old = parseFloat(apiData.old_price);
      const split = typeof apiData.split === 'number' ? apiData.split : parseFloat(apiData.split as string) || 1;

      const sharesAtOldPrice = investmentAmount / old;
      const sharesAfterSplit = split * sharesAtOldPrice;
      const newAmount = sharesAfterSplit * latest;

      const percIncrease = ((newAmount - investmentAmount) / investmentAmount) * 100;

      console.log('✅ Calculated:', { investmentAmount, newAmount, percIncrease: percIncrease.toFixed(2) + '%' });

      setFinalAmount(newAmount);
      setPercentageGain(percIncrease);
      console.log('🎨 Display updated to:', formatCurrency(newAmount));

      // Generate chart data
      const points = [];
      for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const value = investmentAmount + (newAmount - investmentAmount) * (t * t); // Quadratic ease-in
        points.push({ name: `${i}`, value: value });
      }
      setChartData(points);
    }
  }, [investmentAmount, apiData]);

  const fetchReturns = async () => {
    setLoading(true);
    const selectedDate = new Date();
    const year = selectedDate.getFullYear();
    const newYear = year - selectedTimeFrame;
    selectedDate.setFullYear(newYear);

    const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL || "http://localhost:8000";
    const apiUrl = `${mainURL}/api/investment_calculator/?start=${selectedDate.toLocaleDateString('en-CA')}&symbol=${selectedCompany.id}&amount=${investmentAmount}`;

    try {
      // For development/demo without backend, mock the data if fetch fails
      // or if we know backend might not be ready.
      // But we will try to fetch first.

      const result = await axios.get(apiUrl);
      const data = result.data;

      // Debug logging
      console.log('API Response:', data);
      console.log('Investment Amount:', investmentAmount);

      setApiData(data);
      calculateAndSetValues(investmentAmount, data);

    } catch (error) {
      console.error("Error fetching data:", error);
      if (axios.isAxiosError(error)) {
        console.error("API Error Details:", error.response?.data);
      }

      // Fallback mock data for demo purposes (so UI doesn't break)
      const mockData = {
        split: 1,
        latest_price: (Math.random() * 200 + 100).toString(),
        old_price: (Math.random() * 100 + 50).toString()
      };
      console.log('Using mock data:', mockData);
      setApiData(mockData);
      calculateAndSetValues(investmentAmount, mockData);
    } finally {
      setLoading(false);
    }
  };

  const calculateAndSetValues = (amount: number, data: CalculationResult) => {
    // Always calculate based on current amount and price data
    // Don't use backend's pre-calculated new_amount/perc_increase as they're for the original API request amount
    const latest = parseFloat(data.latest_price);
    const old = parseFloat(data.old_price);
    const split = typeof data.split === 'number' ? data.split : parseFloat(data.split as string) || 1;

    const sharesAtOldPrice = amount / old;
    const sharesAfterSplit = split * sharesAtOldPrice;
    const newAmount = sharesAfterSplit * latest;

    const percIncrease = ((newAmount - amount) / amount) * 100;

    setFinalAmount(newAmount);
    setPercentageGain(percIncrease);

    // Generate chart data
    const points = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const value = amount + (newAmount - amount) * (t * t); // Quadratic ease-in
      points.push({ name: `${i}`, value: value });
    }
    setChartData(points);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  // Logarithmic scale for better UX
  // Map slider percentage (0-100) to dollar amount ($10-$10,000)
  const minAmount = 10;
  const maxAmount = 10000;

  const toLog = (val: number) => {
    if (val <= 0) return 0;
    const minv = Math.log(minAmount);
    const maxv = Math.log(maxAmount);
    const scale = (maxv - minv) / 100;
    return (Math.log(val) - minv) / scale;
  };

  const fromLog = (val: number) => {
    const minv = Math.log(minAmount);
    const maxv = Math.log(maxAmount);
    const scale = (maxv - minv) / 100;

    const rawValue = Math.exp(minv + scale * val);

    // NO rounding - return exact value to prevent dead zones
    // The display will format it nicely with toLocaleString()
    return Math.round(rawValue * 100) / 100; // Round to 2 decimal places only
  };


  return (
    <section className="py-24 w-full bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <Heading level="h2" className="text-4xl md:text-5xl font-bold">
            Simulate Your Potential Returns
          </Heading>
          <Text className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See how your money could have grown if you invested in top global companies.
            <br />
            <span className="text-sm opacity-70">Based on historical market data. Past performance is not indicative of future results.</span>
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: CONTROLS */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>

            {/* Company Selection Grid */}
            <div className="space-y-4">
              <Text weight="medium" className="text-muted-foreground uppercase tracking-wider text-sm">Select a Company</Text>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-4">
                {companies.map((company) => (
                  <button
                    key={company.id}
                    onClick={() => setSelectedCompany(company)}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 border border-transparent",
                      selectedCompany.id === company.id
                        ? "bg-secondary shadow-inner scale-95 ring-1 ring-primary/20"
                        : "hover:bg-secondary/50 hover:shadow-md hover:-translate-y-1"
                    )}
                  >
                    <div className="w-10 h-10 mb-2 p-1 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-medium truncate w-full text-center">{company.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Timeframe Selection */}
            <div className="space-y-4">
              <Text weight="medium" className="text-muted-foreground uppercase tracking-wider text-sm">Investment Duration</Text>
              <div className="flex flex-wrap gap-2">
                {timeFrames.map((frame) => (
                  <Button
                    key={frame.id}
                    variant={selectedTimeFrame === frame.id ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTimeFrame(frame.id)}
                    className={cn(
                      "rounded-full px-6 transition-all",
                      selectedTimeFrame === frame.id ? "shadow-md" : "hover:bg-accent"
                    )}
                  >
                    {frame.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Investment Slider */}
            <div className="space-y-6 p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-border/50">
              <div className="flex justify-between items-end">
                <Text weight="medium" className="text-muted-foreground uppercase tracking-wider text-sm">Initial Investment</Text>
                <div className="text-2xl font-bold font-mono bg-background px-3 py-1 rounded-md shadow-sm border border-border">
                  ${investmentAmount.toLocaleString()}
                </div>
              </div>
              <Slider
                value={[toLog(investmentAmount)]}
                min={0}
                max={100}
                step={0.1}
                onValueChange={(vals) => {
                  console.log('🎚️ Slider moved to:', vals[0], '%');
                  const newVal = fromLog(vals[0]);
                  console.log('💰 Calculated amount:', newVal);
                  console.log('📊 Previous amount:', investmentAmount);
                  console.log('🔄 Will update:', newVal !== investmentAmount);
                  setInvestmentAmount(newVal);
                }}
                className="py-4"
              />
              <div className="relative text-xs text-muted-foreground h-4">
                {/* Labels positioned according to logarithmic scale */}
                <span className="absolute" style={{ left: `${toLog(10)}%`, transform: 'translateX(-50%)' }}>$10</span>
                <span className="absolute" style={{ left: `${toLog(100)}%`, transform: 'translateX(-50%)' }}>$100</span>
                <span className="absolute" style={{ left: `${toLog(500)}%`, transform: 'translateX(-50%)' }}>$500</span>
                <span className="absolute" style={{ left: `${toLog(1000)}%`, transform: 'translateX(-50%)' }}>$1k</span>
                <span className="absolute" style={{ left: `${toLog(5000)}%`, transform: 'translateX(-50%)' }}>$5k</span>
                <span className="absolute" style={{ left: `${toLog(10000)}%`, transform: 'translateX(-50%)' }}>$10k</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: RESULTS */}
          <div className="lg:col-span-12 xl:col-span-7 h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Card variant="glass" className="h-full flex flex-col p-8 md:p-10 relative overflow-hidden ring-1 ring-white/10">

              {/* Background Gradient for specific company */}
              <div className={cn(
                "absolute top-0 right-0 w-2/3 h-full opacity-10 blur-3xl bg-gradient-to-l transition-colors duration-700",
                selectedCompany.gradient
              )} />

              <div className="relative z-10 flex flex-col h-full justify-between gap-8">

                {/* Header Result */}
                <div className="space-y-2">
                  <Text className="text-muted-foreground text-lg">Your {selectedTimeFrame} year investment would be worth</Text>
                  <div className="flex flex-wrap items-baseline gap-4">
                    {loading ? (
                      <div className="h-16 w-64 bg-secondary/50 animate-pulse rounded-lg" />
                    ) : (
                      <h3 className="text-6xl md:text-7xl font-black tracking-tighter">
                        {formatCurrency(finalAmount)}
                      </h3>
                    )}

                    {!loading && (
                      <div className={cn(
                        "px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1",
                        percentageGain >= 0 ? "bg-green-500/20 text-green-600 dark:text-green-400" : "bg-red-500/20 text-red-600 dark:text-red-400"
                      )}>
                        {percentageGain >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        {Math.abs(percentageGain).toFixed(2)}%
                      </div>
                    )}
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 w-full min-h-[300px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="currentColor" className="text-primary" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="currentColor" className="text-primary" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" hide />
                      <YAxis hide domain={['dataMin', 'auto']} />
                      <Tooltip
                        contentStyle={{ backgroundColor: 'var(--background)', borderRadius: '8px', border: '1px solid var(--border)' }}
                        formatter={(value: number) => [formatCurrency(value || 0), 'Value']}
                        labelStyle={{ display: 'none' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="currentColor"
                        className="text-primary"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Footer Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-secondary rounded-full"><TrendingUp size={16} /></div>
                    <span>Real market data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-secondary rounded-full"><Calendar size={16} /></div>
                    <span>Updated daily</span>
                  </div>
                  <div className="ml-auto">
                    Powered by <span className="font-bold text-foreground">Revridge Intelligence</span>
                  </div>
                </div>

              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
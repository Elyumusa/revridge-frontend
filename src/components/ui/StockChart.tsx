import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface Point { time: string; price: number; }

export default function StockChart({ data }: { data: Point[] }) {
  if (!data.length) return <div className="grid h-64 place-items-center text-sm text-muted-foreground">No chart data returned.</div>;
  return <div className="h-64 w-full"><ResponsiveContainer width="100%" height="100%"><LineChart data={data} margin={{ top: 8, right: 12, left: -18, bottom: 0 }}><CartesianGrid vertical={false} stroke="#E2E7E5" /><XAxis dataKey="time" tick={{ fill: '#747D7A', fontSize: 11 }} tickLine={false} axisLine={false} minTickGap={32} /><YAxis tick={{ fill: '#747D7A', fontSize: 11 }} tickLine={false} axisLine={false} /><Tooltip contentStyle={{ background: '#fff', border: '1px solid #E2E7E5', borderRadius: 10 }} /><Line type="monotone" dataKey="price" stroke="#004B44" strokeWidth={2.5} dot={false} activeDot={{ r: 4, fill: '#CAF300', stroke: '#004B44', strokeWidth: 2 }} /></LineChart></ResponsiveContainer></div>;
}

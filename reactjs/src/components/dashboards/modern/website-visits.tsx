
import { useEffect, useRef, useState } from "react";
import { Activity, CircleArrowUp } from "lucide-react";
import {  CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { DashboardCard } from "../../shared/dashboard-card";

type BarShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
};

function SegmentBar({ x = 0, y = 0, width = 0, height = 0, fill }: BarShapeProps) {
  if (height <= 0) return null;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      <rect x={x} y={y} width={width} height={1} fill="hsl(var(--background))" />
    </g>
  );
}

function TopSegmentBar({ x = 0, y = 0, width = 0, height = 0, fill }: BarShapeProps) {
  if (height <= 0) return null;
  const r = 1;
  return (
    <g>
      <path
        d={`M${x},${y + r} Q${x},${y} ${x + r},${y} L${x + width - r},${y} Q${x + width},${y} ${x + width},${y + r} L${x + width},${y + height} L${x},${y + height} Z`}
        fill={fill}
      />
      <rect x={x} y={y} width={width} height={1} fill="#0A0A0A80" />
    </g>
  );
}

// ── Per-period chart data ─────────────────────────────────────────────────────
type DataPoint = { date: string; teamA: number; teamB: number; teamC: number };

const chartDataByPeriod: Record<string, DataPoint[]> = {
  "Last 7 Days": [
    { date: "Mon", teamA: 4200, teamB: 2800, teamC: 2100 },
    { date: "Tue", teamA: 5800, teamB: 3200, teamC: 2600 },
    { date: "Wed", teamA: 4900, teamB: 2900, teamC: 2400 },
    { date: "Thu", teamA: 6200, teamB: 3800, teamC: 3100 },
    { date: "Fri", teamA: 7100, teamB: 4200, teamC: 3500 },
    { date: "Sat", teamA: 3800, teamB: 2400, teamC: 1800 },
    { date: "Sun", teamA: 3200, teamB: 2000, teamC: 1600 },
  ],
  "Last 30 Days": [
    { date: "Jan 1", teamA: 7500, teamB: 4700, teamC: 4700 },
    { date: "Jan 4", teamA: 7500, teamB: 4300, teamC: 4300 },
    { date: "Jan 6", teamA: 9200, teamB: 5500, teamC: 5500 },
    { date: "Jan 8", teamA: 8300, teamB: 5000, teamC: 5000 },
    { date: "Jan 12", teamA: 10200, teamB: 6300, teamC: 6300 },
    { date: "Jan 16", teamA: 7100, teamB: 4300, teamC: 4300 },
    { date: "Jan 20", teamA: 8700, teamB: 5400, teamC: 5400 },
    { date: "Jan 24", teamA: 11000, teamB: 6800, teamC: 6800 },
    { date: "Jan 28", teamA: 10300, teamB: 6200, teamC: 6200 },
    { date: "Feb 1", teamA: 9000, teamB: 5500, teamC: 5500 },
    { date: "Feb 5", teamA: 10200, teamB: 6700, teamC: 5500 },
    { date: "Feb 8", teamA: 12000, teamB: 8000, teamC: 6300 },
  ],
  "Last 90 Days": [
    { date: "W1", teamA: 6200, teamB: 3800, teamC: 3200 },
    { date: "W2", teamA: 7800, teamB: 4600, teamC: 3800 },
    { date: "W3", teamA: 7200, teamB: 4200, teamC: 3500 },
    { date: "W4", teamA: 9400, teamB: 5800, teamC: 4900 },
    { date: "W5", teamA: 8600, teamB: 5200, teamC: 4400 },
    { date: "W6", teamA: 10800, teamB: 6600, teamC: 5600 },
    { date: "W7", teamA: 9200, teamB: 5600, teamC: 4800 },
    { date: "W8", teamA: 11400, teamB: 7000, teamC: 5900 },
    { date: "W9", teamA: 10200, teamB: 6200, teamC: 5200 },
    { date: "W10", teamA: 12600, teamB: 7800, teamC: 6600 },
    { date: "W11", teamA: 11800, teamB: 7200, teamC: 6100 },
    { date: "W12", teamA: 13500, teamB: 8400, teamC: 7100 },
    { date: "W13", teamA: 14000, teamB: 9200, teamC: 7500 },
  ],
};

// ── Per-period header stats ───────────────────────────────────────────────────
const statsByPeriod: Record<string, { revenue: string; change: string; label: string }> = {
  "Last 7 Days": { revenue: "$120,000", change: "+8.4%", label: "vs previous 7 days" },
  "Last 30 Days": { revenue: "$640,000", change: "+18.0%", label: "vs last month" },
  "Last 90 Days": { revenue: "$1,840,000", change: "+22.1%", label: "vs previous 90 days" },
};


const legends = [
  { key: "teamA", label: "Team A" },
  { key: "teamB", label: "Team B" },
  { key: "teamC", label: "Team C" },
] as const;

const periodOptions = ["Last 7 Days", "Last 30 Days", "Last 90 Days"];

// ── Animated counter ──────────────────────────────────────────────────────────
function useAnimatedNumber(target: number, duration = 450) {
  const [display, setDisplay] = useState(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    const from = currentRef.current;
    const diff = target - from;
    if (diff === 0) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(from + diff * eased);
      currentRef.current = next;
      setDisplay(next);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        currentRef.current = target;
        setDisplay(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return display;
}

function AnimatedValue({ value }: { value: number }) {
  const animated = useAnimatedNumber(value);
  return <>{animated.toLocaleString()}</>;
}

type TooltipPayloadItem = {
  name?: string;
  value?: number;
  color?: string;
  dataKey?: string;
  type?: string;
};

function AnimatedTooltipContent({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="grid min-w-36 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <div className="font-medium">{label}</div>
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== "none" && item.value !== undefined)
          .map((item, index) => (
            <div key={index} className="flex w-full items-center gap-2">
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">
                {item.name}
              </span>
              <span className="ml-auto font-mono font-medium tabular-nums text-foreground">
                <AnimatedValue value={item.value as number} />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default function WebsiteVisits() {
  const [period, setPeriod] = useState("Last 30 Days");
  


  const chartConfig = {
    teamA: { label: "Team A", color: "var(--primary)" },
    teamB: { label: "Team B", color: "color-mix(in srgb, var(--primary) 60%, transparent)" },
    teamC: { label: "Team C", color: "color-mix(in srgb, var(--primary) 20%, transparent)" },
  } satisfies ChartConfig;

  const activeData = chartDataByPeriod[period];
  const activeStats = statsByPeriod[period];

  return (
    <DashboardCard>
      {/* Header bar */}
      <CardHeader className="flex flex-row items-center justify-between border-b border-border">
        <CardTitle className="flex items-center gap-2">
          <Activity size={16} className="text-muted-foreground" />
          Sales Overview
        </CardTitle>
        <div className="flex items-center gap-2">
          <CircleArrowUp size={16} className="text-emerald-600" />
          <span className="text-sm font-normal text-emerald-600">{activeStats.change}</span>
        </div>
      </CardHeader>

      {/* Body */}
      <CardContent className="px-5 pt-5 pb-5">
        {/* Stats + legend + period row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          {/* Left: title + amount */}
          <div className="flex flex-col gap-1">
            <p className="text-base font-normal text-foreground">Revenue Overview</p>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-2xl font-semibold tracking-tight text-foreground">
                {activeStats.revenue}
              </p>
              <p className="text-sm font-medium text-emerald-600">{activeStats.change}</p>
              <p className="text-sm font-normal text-muted-foreground">{activeStats.label}</p>
            </div>
          </div>

          {/* Right: legend + period selector */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4">
              {legends.map(({ key, label }) => (
                <div key={key} className="flex items-center gap-2">
                  <span
                    className="size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: chartConfig[key].color }}
                  />
                  <span className="text-sm text-foreground">{label}</span>
                </div>
              ))}
            </div>
            <Select value={period} onValueChange={(v) => v && setPeriod(v)}>
              <SelectTrigger className="h-auto! px-4 py-1.5 rounded-md border border-border bg-background shadow-xs cursor-pointer text-sm font-medium text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {periodOptions.map((opt) => (
                  <SelectItem key={opt} value={opt} className="cursor-pointer">
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[560px]">
            <ChartContainer config={chartConfig} className="h-[260px]! w-full">
              <BarChart
                accessibilityLayer
                data={activeData}
                margin={{ top: 4, right: 0, left: -2, bottom: 0 }}
                barCategoryGap="38%"
              >
                <CartesianGrid
                  vertical={false}
                  stroke="var(--border)"
                  strokeDasharray="4 4"
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                  interval={0}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                  domain={[0, 30000]}
                  ticks={[0, 5000, 10000, 15000, 20000, 25000, 30000]}
                  tickFormatter={(v) => (v === 0 ? "0" : `${v / 1000}k`)}
                  width={35}
                />
                <ChartTooltip
                  cursor={false}
                  content={<AnimatedTooltipContent />}
                />
                <Bar dataKey="teamA" barSize={30} stackId="s" fill="var(--color-teamA)" shape={<SegmentBar />} isAnimationActive animationBegin={0} animationDuration={700} animationEasing="ease-out" />
                <Bar dataKey="teamB" barSize={30} stackId="s" fill="var(--color-teamB)" shape={<SegmentBar />} isAnimationActive animationBegin={120} animationDuration={700} animationEasing="ease-out" />
                <Bar dataKey="teamC" barSize={30} stackId="s" fill="var(--color-teamC)" shape={<TopSegmentBar />} isAnimationActive animationBegin={240} animationDuration={700} animationEasing="ease-out" />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </DashboardCard>
  );
}

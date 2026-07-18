;

import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Line, LineChart, CartesianGrid, ReferenceLine, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "../../shared/dashboard-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allChartData: Record<string, { date: string; newUser: number; existingUser: number }[]> = {
  "Last 30 Days": [
    { date: "Mar 30", newUser: 12, existingUser: 20 },
    { date: "Apr 1", newUser: 18, existingUser: 25 },
    { date: "Apr 2", newUser: 14, existingUser: 22 },
    { date: "Apr 4", newUser: 22, existingUser: 30 },
    { date: "Apr 5", newUser: 16, existingUser: 18 },
    { date: "Apr 7", newUser: 20, existingUser: 24 },
    { date: "Apr 9", newUser: 18, existingUser: 32 },
    { date: "Apr 11", newUser: 26, existingUser: 22 },
    { date: "Apr 12", newUser: 20, existingUser: 26 },
    { date: "Apr 14", newUser: 30, existingUser: 20 },
    { date: "Apr 15", newUser: 22, existingUser: 28 },
    { date: "Apr 17", newUser: 26, existingUser: 22 },
    { date: "Apr 19", newUser: 28, existingUser: 18 },
    { date: "Apr 20", newUser: 24, existingUser: 24 },
    { date: "Apr 22", newUser: 38, existingUser: 18 },
    { date: "Apr 23", newUser: 22, existingUser: 26 },
    { date: "Apr 24", newUser: 20, existingUser: 22 },
    { date: "Apr 26", newUser: 24, existingUser: 20 },
    { date: "Apr 27", newUser: 18, existingUser: 24 },
    { date: "Apr 29", newUser: 22, existingUser: 20 },
    { date: "May 1", newUser: 20, existingUser: 18 },
    { date: "May 4", newUser: 24, existingUser: 22 },
  ],
  "Last 7 Days": [
    { date: "Apr 28", newUser: 18, existingUser: 22 },
    { date: "Apr 29", newUser: 22, existingUser: 20 },
    { date: "Apr 30", newUser: 20, existingUser: 28 },
    { date: "May 1", newUser: 30, existingUser: 18 },
    { date: "May 2", newUser: 24, existingUser: 26 },
    { date: "May 3", newUser: 32, existingUser: 20 },
    { date: "May 4", newUser: 22, existingUser: 28 },
  ],
  "Last 90 Days": [
    { date: "Feb 1", newUser: 14, existingUser: 22 },
    { date: "Feb 15", newUser: 20, existingUser: 28 },
    { date: "Mar 1", newUser: 18, existingUser: 24 },
    { date: "Mar 15", newUser: 26, existingUser: 20 },
    { date: "Mar 30", newUser: 22, existingUser: 30 },
    { date: "Apr 14", newUser: 32, existingUser: 22 },
    { date: "Apr 22", newUser: 38, existingUser: 18 },
    { date: "Apr 29", newUser: 24, existingUser: 26 },
    { date: "May 4", newUser: 28, existingUser: 20 },
  ],
};

const xAxisLabels: Record<string, Set<string>> = {
  "Last 30 Days": new Set(["Mar 30", "Apr 4", "Apr 9", "Apr 14", "Apr 19", "Apr 24", "Apr 29", "May 4"]),
  "Last 7 Days": new Set(["Apr 28", "Apr 29", "Apr 30", "May 1", "May 2", "May 3", "May 4"]),
  "Last 90 Days": new Set(["Feb 1", "Feb 15", "Mar 1", "Mar 15", "Mar 30", "Apr 14", "Apr 29", "May 4"]),
};

const chartConfig = {
  newUser: { label: "New User", color: "var(--color-primary)" },
  existingUser: { label: "Existing User", color: "color-mix(in srgb, var(--primary) 60%, transparent)" },
} satisfies ChartConfig;

const periodOptions = ["Last 30 Days", "Last 7 Days", "Last 90 Days"];

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
      if (progress < 1) { rafRef.current = requestAnimationFrame(tick); }
      else { currentRef.current = target; setDisplay(target); }
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

type TooltipItem = { name?: string; value?: number; color?: string; dataKey?: string; type?: string };
type ConfigEntry = { label?: string; color?: string };

function AnimatedTooltipContent({ active, payload, label, hideLabel = false, config }: {
  active?: boolean; payload?: TooltipItem[]; label?: string;
  hideLabel?: boolean; config?: Record<string, ConfigEntry>;
}) {
  if (!active || !payload?.length) return null;
  const items = payload.filter((item) => item.type !== "none" && item.value !== undefined);
  if (!items.length) return null;
  return (
    <div className="grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      {!hideLabel && label && <div className="font-medium">{label}</div>}
      <div className="grid gap-1.5">
        {items.map((item, index) => (
          <div key={index} className="flex w-full items-center gap-2">
            <div className="h-2.5 w-2.5 shrink-0 rounded-[2px]" style={{ backgroundColor: item.color }} />
            <span className="text-muted-foreground">{config?.[item.dataKey ?? ""]?.label ?? item.name}</span>
            <span className="ml-auto font-mono font-medium tabular-nums text-foreground">
              <AnimatedValue value={item.value as number} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TotalSales() {
  const [period, setPeriod] = useState(periodOptions[0]);

  const chartData = allChartData[period];
  const visibleLabels = xAxisLabels[period];

  return (
    <DashboardCard className="flex flex-col gap-0!">
      {/* Header */}
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp size={16} className="text-muted-foreground" />
          Sales Overview
        </CardTitle>
      </CardHeader>

      <CardContent className="p-5 flex flex-col gap-6">
        {/* Stats row + period selector */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className="text-base font-normal text-foreground leading-6">Total Sales</span>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-2xl font-semibold tracking-[-0.3px] text-foreground leading-8">
                $12,450.00
              </span>
              <span className="text-sm font-medium text-chart-2">+22%</span>
              <span className="text-sm font-normal text-muted-foreground">vs last month</span>
            </div>
          </div>

          <Select value={period} onValueChange={(v) => v && setPeriod(v)}>
            <SelectTrigger className="h-auto! w-fit text-sm font-medium text-foreground border-border shadow-[0px_1px_2px_rgba(0,0,0,0.05)] cursor-pointer gap-1.5 px-3">
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

        {/* Chart */}
        <ChartContainer config={chartConfig} className="h-[215px]! w-full">
          <LineChart
            data={chartData}
            margin={{ top: 8, right: 4, bottom: 0, left: -10 }}
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
              tickMargin={10}
              interval={0}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              tickFormatter={(v) => (visibleLabels.has(v) ? v : "")}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
              ticks={[0, 10, 20, 30, 40]}
              domain={[0, 40]}
              tickFormatter={(v) => (v === 0 ? "0" : `${v}k`)}
            />
            <ChartTooltip
              cursor={{
                stroke: "var(--border)",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              content={<AnimatedTooltipContent config={chartConfig} />}
            />
            <ReferenceLine
              x="Apr 22"
              stroke="var(--border)"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
            {/* New User — solid primary */}
            <Line
              dataKey="newUser"
              type="linear"
              stroke="var(--color-primary)"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 4, fill: "var(--color-primary)", strokeWidth: 0 }}
              isAnimationActive
              animationBegin={0}
              animationDuration={700}
              animationEasing="ease-out"
            />
            {/* Existing User — dashed muted */}
            <Line
              dataKey="existingUser"
              type="linear"
              stroke="color-mix(in srgb, var(--primary) 60%, transparent)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={false}
              activeDot={{ r: 4, fill: "color-mix(in srgb, var(--primary) 60%, transparent)", strokeWidth: 0 }}
              isAnimationActive
              animationBegin={120}
              animationDuration={700}
              animationEasing="ease-out"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </DashboardCard>
  );
}

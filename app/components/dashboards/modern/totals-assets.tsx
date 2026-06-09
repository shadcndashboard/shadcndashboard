"use client";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "../../shared/dashboard-card";
import { Badge } from "@/components/ui/badge";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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

export default function TotalsAssets() {
    const AllAssets = [
        {
            id: uuidv4(),
            color: "bg-chart-1",
            distribution: "Product Sales",
            value: "$312,500.45",
            percentage: "65",
        },
        {
            id: uuidv4(),
            color: "bg-chart-2",
            distribution: "Service Revenue",
            value: "$125,000.25",
            percentage: "26",
        },
        {
            id: uuidv4(),
            color: "bg-chart-3",
            distribution: "Other Income",
            value: "$40,730.20",
            percentage: "9",
        },
    ];

    const chartData = [
        {
            name: "Assets",
            product: 48,
            service: 20,
            other: 15,
        },
    ];

    const chartConfig = {
        product: {
            label: "Product",
            color: "var(--color-chart-1)",
        },
        service: {
            label: "Service",
            color: "var(--color-chart-2)",
        },
        other: {
            label: "Other",
            color: "var(--color-chart-3)",
        },
    } satisfies ChartConfig;

    return (
        <DashboardCard className="flex flex-col justify-between gap-3 !overflow-visible">
            <CardHeader>
                <CardTitle className="text-lg font-medium">Total Assets</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-4 !overflow-visible">
                <div className="flex flex-col gap-1.5">
                    <h3 className="text-2xl font-semibold">$478,230.90</h3>
                    <div className="flex items-center gap-1">
                        <Badge className="bg-chart-2/10  text-chart-2">+15.7%</Badge>
                        <h6 className="text-sm font-medium text-foreground">+$65,000</h6>
                        <p className="text-xs font-normal text-muted-foreground">
                            compared to last year
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0">
                        <p className="text-sm font-medium text-foreground">Distribution</p>
                        <ChartContainer config={chartConfig} className="h-8! [&_.recharts-wrapper]:!overflow-visible">
                            <BarChart data={chartData} layout="vertical" stackOffset="expand">
                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="name" hide />
                                <ChartTooltip
                                    cursor={false}
                                    allowEscapeViewBox={{ x: true, y: true }}
                                    content={<AnimatedTooltipContent hideLabel config={chartConfig} />}
                                />
                                <Bar
                                    dataKey="product"
                                    stackId="a"
                                    fill="var(--color-product)"
                                    radius={[5, 5, 5, 5]}
                                    strokeWidth={2}
                                    stroke="var(--color-background)"
                                    isAnimationActive
                                    animationBegin={0}
                                    animationDuration={700}
                                    animationEasing="ease-out"
                                />

                                <Bar
                                    dataKey="service"
                                    stackId="a"
                                    fill="var(--color-service)"
                                    stroke="var(--color-background)"
                                    radius={[5, 5, 5, 5]}
                                    isAnimationActive
                                    animationBegin={100}
                                    animationDuration={700}
                                    animationEasing="ease-out"
                                />

                                <Bar
                                    dataKey="other"
                                    stackId="a"
                                    fill="var(--color-other)"
                                    stroke="var(--color-background)"
                                    radius={[5, 5, 5, 5]}
                                    isAnimationActive
                                    animationBegin={200}
                                    animationDuration={700}
                                    animationEasing="ease-out"
                                />
                            </BarChart>
                        </ChartContainer>

                        <div className="flex flex-col">
                            {AllAssets.map((item) => (
                                <div
                                    key={item.id}
                                    className="py-4 border-b border-border  last:border-b-0 flex items-center justify-between last:pb-0"
                                >
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`w-2 h-2 rounded-full ${item.color}`}
                                        ></span>
                                        <h6 className="text-sm font-normal">{item.distribution}</h6>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <h6 className="text-sm font-medium">{item.value}</h6>
                                        <p className="text-xs font-normal text-muted-foreground">{`(${item.percentage}%)`}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </DashboardCard>
    );
}


import {
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Lightbulb } from "lucide-react";
import { DashboardCard } from "src/components/shared/dashboard-card";

const regionData = [
  { key: "Asia", label: "Asia", value: 60, color: "var(--primary)" },
  { key: "USA", label: "USA", value: 25, color: "color-mix(in srgb, var(--primary) 60%, transparent)" },
  { key: "Europe", label: "Europe", value: 15, color: "color-mix(in srgb, var(--primary) 20%, transparent)" },
];

const TOTAL_BARS = 52;

function generateBars() {
  const bars: { color: string; key: string }[] = [];
  let assigned = 0;
  regionData.forEach(({ key, color, value }, index) => {
    const count =
      index === regionData.length - 1
        ? TOTAL_BARS - assigned
        : Math.round((TOTAL_BARS * value) / 100);
    for (let i = 0; i < count; i++) {
      bars.push({ color, key });
    }
    assigned += count;
  });
  return bars;
}

const bars = generateBars();

export default function KeyInsights() {
 

  return (
    <DashboardCard>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>
          <div className="flex items-center gap-2">
            <Lightbulb size={16} className="text-muted-foreground" />
            Key Insights
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="border-t border-border px-5 py-4">
        <div className="flex flex-col gap-4">
          {/* Stats */}
          <div className="flex flex-col items-start gap-1">
            <p className="text-2xl font-semibold tracking-tight text-foreground">
              $20,320
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-normal text-emerald-600">+40%</p>
              <p className="text-sm font-normal text-muted-foreground">
                vs last month
              </p>
            </div>
          </div>

          {/* Bar visualization — opacity tiers match Asia / USA / Europe */}
          <TooltipProvider>
            <div className="flex w-full items-center gap-[3px]">
              {bars.map((bar, i) => {
                const region = regionData.find((r) => r.key === bar.key);
                return (
                  <Tooltip key={i}>
                    <TooltipTrigger
                      render={
                        <div
                          className="h-5 flex-1 rounded-[1px] cursor-default"
                          style={{ backgroundColor: region?.color }}
                        />
                      }
                    />
                    <TooltipContent>
                      <span className="font-medium">{region?.label}</span>
                      <span className="opacity-70">: {region?.value}%</span>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>

          {/* Legend */}
          <div className="flex items-center gap-4">
            {regionData.map(({ key, label, color }) => (
              <div key={key} className="flex items-center gap-1.5">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </DashboardCard>
  );
}


import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { HardDrive, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardCard } from "../../shared/dashboard-card";

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const s = polarToCartesian(cx, cy, r, startDeg);
  const e = polarToCartesian(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`;
}

const SEGMENT_ANGLES = [
  { startDeg: -90, endDeg: -39 },
  { startDeg: -39, endDeg: 21 },
  { startDeg: 21, endDeg: 177 },
];

export default function CurrentVisits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      name: "Website",
      value: "$4,385",
      growth: "+4.7%",
      color: "var(--primary)",
    },
    {
      name: "Marketplace",
      value: "$4,590",
      growth: "+2.1%",
      color: "color-mix(in srgb, var(--primary) 60%, transparent)",
    },
    {
      name: "Affiliate",
      value: "$18,356",
      growth: "+1.7%",
      color: "color-mix(in srgb, var(--primary) 20%, transparent)",
    },
  ];

  const totalTicks = 60;

  const getTickColor = (i: number) => {
    if (i >= 45) return "var(--border)";
    const segmentIndex = i < 9 ? 0 : i < 19 ? 1 : 2;
    if (hoveredIndex === null) {
      return metrics[segmentIndex].color;
    }
    return hoveredIndex === segmentIndex ? metrics[segmentIndex].color : "var(--border)";
  };

  const getTickOpacity = (i: number) => {
    if (hoveredIndex === null) return 1;
    if (hoveredIndex === 0 && i < 9) return 1;
    if (hoveredIndex === 1 && i >= 9 && i < 19) return 1;
    if (hoveredIndex === 2 && i >= 19 && i < 45) return 1;
    return 0.25;
  };

  const handleSegmentEnter = (idx: number, e: React.MouseEvent) => {
    setHoveredIndex(idx);
    const rect = svgContainerRef.current?.getBoundingClientRect();
    if (rect) setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleSegmentMove = (e: React.MouseEvent) => {
    const rect = svgContainerRef.current?.getBoundingClientRect();
    if (rect) setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleSegmentLeave = () => {
    setHoveredIndex(null);
    setTooltip(null);
  };

  return (
    <DashboardCard>
      <CardHeader className="border-b border-border">
        <CardTitle>
          <div className="flex items-center gap-2">
            <HardDrive size={16} className="text-muted-foreground" />
            <span>Sales Distribution</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between p-5 gap-6">

        {/* Radial Progress Chart Container */}
        <div className="relative w-full flex items-center justify-center py-2">
          <div
            ref={svgContainerRef}
            className="relative w-52 h-52 flex items-center justify-center"
          >
            {/* SVG dashed/tick circle */}
            <svg
              width="210"
              height="210"
              viewBox="0 0 200 200"
              className="w-[220px] h-[220px] shrink-0 transform rotate-0 transition-transform duration-500 ease-out select-none"
            >
              {/* Tick marks */}
              <g>
                {Array.from({ length: totalTicks }).map((_, i) => {
                  const angle = (i * 360) / totalTicks - 90;
                  const angleRad = (angle * Math.PI) / 180;
                  const rInner = 90;
                  const rOuter = 100;
                  const x1 = 100 + rInner * Math.cos(angleRad);
                  const y1 = 100 + rInner * Math.sin(angleRad);
                  const x2 = 100 + rOuter * Math.cos(angleRad);
                  const y2 = 100 + rOuter * Math.sin(angleRad);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={getTickColor(i)}
                      strokeWidth={2.8}
                      strokeLinecap="round"
                      className="transition-all duration-300"
                      style={{ transformOrigin: "100px 100px", opacity: getTickOpacity(i) }}
                    />
                  );
                })}
              </g>

              {/* Invisible arc hit areas for tooltip */}
              <g>
                {SEGMENT_ANGLES.map((seg, idx) => (
                  <path
                    key={idx}
                    d={arcPath(100, 100, 95, seg.startDeg, seg.endDeg)}
                    fill="none"
                    stroke="transparent"
                    strokeWidth={22}
                    className="cursor-pointer"
                    onMouseEnter={(e) => handleSegmentEnter(idx, e)}
                    onMouseMove={handleSegmentMove}
                    onMouseLeave={handleSegmentLeave}
                  />
                ))}
              </g>
            </svg>

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <div className="size-10 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center shadow-xs mb-2">
                <Wallet size={16} className="text-foreground" />
              </div>
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                Total Revenue
              </span>
              <span className="text-[22px] font-bold text-foreground tracking-tight mt-0.5">
                $284,920.00
              </span>
            </div>

            {/* Floating Tooltip */}
            {tooltip && hoveredIndex !== null && (
              <div
                className="pointer-events-none absolute z-50 rounded-lg bg-foreground px-3 py-2 shadow-md"
                style={{
                  left: tooltip.x + 14,
                  top: tooltip.y - 48,
                }}
              >
                <p className="text-xs font-semibold text-background leading-none mb-1">
                  {metrics[hoveredIndex].name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-background/80">
                    {metrics[hoveredIndex].value}
                  </span>
                  <span className="text-xs font-medium text-emerald-400">
                    {metrics[hoveredIndex].growth}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Legend / Metrics List */}
        <div className="flex flex-col">
          {metrics.map((item, idx) => (
            <div
              key={item.name}
              className={cn(
                "flex items-center justify-between py-1.5 px-2 rounded-lg transition-all duration-200 cursor-pointer",
                hoveredIndex === idx ? "scale-[1.01]" : ""
              )}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-1.5 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-foreground">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">{item.value}</span>
                <span className="text-sm font-normal text-emerald-600">
                  {item.growth}
                </span>
              </div>
            </div>
          ))}
        </div>

      </CardContent>
    </DashboardCard>
  );
}

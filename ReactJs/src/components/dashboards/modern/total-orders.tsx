
import { CardContent } from "@/components/ui/card";
import { DashboardCard } from "../../shared/dashboard-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handbag } from "lucide-react";

export default function TotalOrders() {

  return (
    <DashboardCard className="py-6">
      <CardContent className="flex justify-between flex-row px-6">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-foreground">
                Weekly sales
              </p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold">714k</h3>
                <Badge className="bg-chart-2/10! text-chart-2!">40%</Badge>
              </div>
            </div>
            <div className="border border-border p-2.5 w-fit rounded-md">
              <Handbag size={16} />
            </div>
          </div>
          <Button variant={'outline'} className="flex gap-1.5 px-4 py-2 h-auto rounded-md cursor-pointer">
            See Statistics
            <span>
              <ArrowRight width={18} height={18} />
            </span>
          </Button>
        </div>
      </CardContent>
    </DashboardCard>
  );
}




import {
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";
import {  Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';
import { DashboardCard } from "../../shared/dashboard-card";

// ---- DATA ----
const CampaignData = [
  {
    title: "Instagram",
    users: "8.49k users",
    icon: "simple-icons:instagram",
    badgevalue: "Completed",
    badgeColor: "bg-chart-2/10! text-chart-2!",
    divider: true,
  },
  {
    title: "Google",
    users: "9.12k users",
    icon: "devicon:google",
    badgevalue: "Running",
    badgeColor: "bg-orange-600/10! text-orange-600!",
    divider: true,
  },
  {
    title: "Facebook",
    users: "6.98k users",
    icon: "logos:facebook",
    badgevalue: "Stopped",
    badgeColor: "bg-rose-600/10! text-rose-600!",
    divider: true,
  },
  {
    title: "X/Twiter",
    users: "8.92k users",
    icon: "pajamas:twitter",
    badgevalue: "Stopped",
    badgeColor: "bg-rose-600/10! text-rose-600!",
    divider: true,
  },

];

const CampaignPerformance = () => {

  return (
    <DashboardCard className="gap-0!">
      <CardHeader className="border-b border-border">
        <CardTitle>
          <div className="flex items-center gap-2">
            <Megaphone size={16} className="text-muted-foreground" />
            <span>Campaign Performance</span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className='px-0!'>
        <div className='flex flex-col'>
          {CampaignData.map((item, index) => (
            <React.Fragment key={index}>
              <div className='flex gap-3 items-center p-4'>
                <div className={cn(`flex justify-center items-center overflow-hidden p-3 rounded-md outline outline-border`)}>
                  <Icon icon={item.icon} height={16} width={16} />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div>
                    <h5 className='text-base font-medium text-foreground'>{item.title}</h5>
                    <p className='text-sm font-normal tracking-wide text-muted-foreground'>
                      {item.users}
                    </p>
                  </div>
                  <Badge className={cn(item.badgeColor, "font-normal")}>{item.badgevalue}</Badge>
                </div>
              </div>
              <Separator />
            </React.Fragment>
          ))}
          <div className="py-3 px-6 flex justify-center gap-1.5 items-center" >
            <Button variant="outline" className={"w-full h-auto rounded-md px-4 py-2 cursor-pointer"}>
              See Report
              <ArrowRight size={16} />
            </Button>

          </div>
        </div>
      </CardContent>
    </DashboardCard>
  );
};

export default CampaignPerformance;

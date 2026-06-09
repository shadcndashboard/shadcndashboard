import CampaignPerformance from "@/app/components/dashboards/modern/campaign-perf";
import CurrentVisits from "@/app/components/dashboards/modern/current-visits";
import KeyInsights from "@/app/components/dashboards/modern/key-insights";
import ReportBanner from "@/app/components/dashboards/modern/report-banner";
import TrafficData from "@/app/components/dashboards/modern/traffic-data";
import WebsiteVisits from "@/app/components/dashboards/modern/website-visits";
import TotalOrders from "@/app/components/dashboards/modern/total-orders";
import TotalProfit from "@/app/components/dashboards/modern/total-profit";
import AdvertisementCost from "@/app/components/dashboards/modern/advertisement-cost";
import StyleAwareWrapper from "@/app/components/shared/StyleAwareWrapper";
import StyleDivider from "@/app/components/shared/StyleDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Admin Dashboard",
  description: "Analytics template page",
};

const page = () => {
  return (
    <StyleAwareWrapper
      lyraClassName="grid grid-cols-12 p-px gap-px bg-border"
    >
      <div className="xl:col-span-8 col-span-12">
        <ReportBanner />
      </div>
      <div className="xl:col-span-4 col-span-12">
        <KeyInsights />
      </div>
      <StyleDivider wrapperClassName="col-span-12" />
      <div className="xl:col-span-8 col-span-12">
        <WebsiteVisits />
      </div>
      <div className="xl:col-span-4 col-span-12">
        <CurrentVisits />
      </div>
      <StyleDivider wrapperClassName="col-span-12" />
      <div className="lg:col-span-4 col-span-12">
        <TotalOrders />
      </div>
      <div className="lg:col-span-4 col-span-12">
        <TotalProfit />
      </div>
      <div className="lg:col-span-4 col-span-12">
        <AdvertisementCost />
      </div>
      <StyleDivider wrapperClassName="col-span-12" />
      <div className="xl:col-span-4 col-span-12">
        <CampaignPerformance />
      </div>
      <div className="xl:col-span-8 col-span-12">
        <TrafficData />
      </div>
    </StyleAwareWrapper>
  );
};

export default page;

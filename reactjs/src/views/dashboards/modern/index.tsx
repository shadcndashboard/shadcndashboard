import AdvertisementCost from "@/components/dashboards/modern/advertisement-cost";
import OverviewTab from "@/components/dashboards/modern/overview-tab";
import TotalOrders from "@/components/dashboards/modern/total-orders";
import TotalProfit from "@/components/dashboards/modern/total-profit";
import TotalSales from "@/components/dashboards/modern/total-sales";
import UpdateBanner from "@/components/dashboards/modern/update-banner"
import TotalAssets from "@/components/dashboards/modern/totals-assets";
import ProjectsOrders from "src/components/dashboards/modern/projects-orders";
import StyleAwareWrapper from "src/components/shared/StyleAwareWrapper";
import StyleDivider from "src/components/shared/StyleDivider";

const page = () => {
  return (
    <>
      <div className="pb-4">
        <OverviewTab />
      </div>
      <StyleAwareWrapper
        lyraClassName="grid grid-cols-12 p-px gap-px bg-border"
        defaultClassName="grid grid-cols-12 gap-4"
      >
        <div className="col-span-12">
          <UpdateBanner />
        </div>
        <StyleDivider wrapperClassName="col-span-12" />
        <div className="lg:col-span-7 col-span-12">
          <TotalSales />
        </div>
        <div className="lg:col-span-5 col-span-12">
          <TotalAssets />
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
        <div className="col-span-12">
          <ProjectsOrders />
        </div>
      </StyleAwareWrapper>
    </>
  );
};

export default page;

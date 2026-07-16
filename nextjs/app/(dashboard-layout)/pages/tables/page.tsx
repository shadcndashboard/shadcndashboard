import { Metadata } from "next";
import BreadcrumbComp from "../../layout/shared/breadcrumb/breadcrumb-comp";
import StyleAwareWrapper from "@/app/components/shared/StyleAwareWrapper";
import StyleDivider from "@/app/components/shared/StyleDivider";
import BasicTable from "@/app/components/tables/basic-table/BasicTable";
import DataTable from "@/app/components/tables/data-table/DataTable";
import { EmployeeData } from "@/app/components/tables/table-data";
import HoverTable from "@/app/components/tables/hover-table/HoverTable";
import StripedRowTable from "@/app/components/tables/striped-row-table/StripedRowTable";
import CheckboxTable from "@/app/components/tables/checkbox-table/CheckboxTable";

export const metadata: Metadata = {
  title: "Tables List",
};
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tables List",
  },
];
function page() {
  return (
    <StyleAwareWrapper
      lyraClassName="flex flex-col p-px gap-px bg-border"
    >
      <BreadcrumbComp title="Tables" items={BCrumb} />
      <StyleDivider />

      <StyleAwareWrapper
        lyraClassName="grid grid-cols-12 gap-px bg-border">
        <div className="col-span-12">
          <BasicTable />
        </div>
        <div className="col-span-12">
          <StyleDivider />
        </div>
        <div className="col-span-12">
          <DataTable data={EmployeeData} />
        </div>
        <div className="col-span-12">
          <StyleDivider />
        </div>
        <div className="col-span-12">
          <HoverTable />
        </div>
        <div className="col-span-12">
          <StyleDivider />
        </div>
        <div className="col-span-12">
          <StripedRowTable />
        </div>
        <div className="col-span-12">
          <StyleDivider />
        </div>
        <div className="col-span-12">
          <CheckboxTable />
        </div>
        <div className="col-span-12">
          <StyleDivider />
        </div>
      </StyleAwareWrapper>

    </StyleAwareWrapper>
  );
}

export default page;

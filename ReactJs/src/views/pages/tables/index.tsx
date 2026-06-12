import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import BasicTable from 'src/components/tables/basic-table/BasicTable';
import CheckboxTable from 'src/components/tables/checkbox-table/CheckboxTable';
import HoverTable from 'src/components/tables/hover-table/HoverTable';
import StripedRowTable from 'src/components/tables/striped-row-table/StripedRowTable';
import DataTable from 'src/components/tables/data-table/DataTable';
import { EmployeeData } from 'src/components/tables/table-data';
import StyleDivider from 'src/components/shared/StyleDivider';
import StyleAwareWrapper from 'src/components/shared/StyleAwareWrapper';

const BCrumb = [
  { to: '/', title: 'Home' },
  { title: 'Tables' },
];

function TablesPage() {
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

export default TablesPage;

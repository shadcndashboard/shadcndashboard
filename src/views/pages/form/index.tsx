import StyleDivider from 'src/components/shared/StyleDivider';
import StyleAwareWrapper from 'src/components/shared/StyleAwareWrapper';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import FormCompo from 'src/components/form';
const BCrumb = [{ to: '/', title: 'Home' }, { title: 'Form' }];

function TablesPage() {
  return (
    <StyleAwareWrapper lyraClassName="flex flex-col p-px gap-px bg-border">
      <BreadcrumbComp title="Form Elements" items={BCrumb} />
      <StyleDivider />
      <FormCompo />
    </StyleAwareWrapper>
  );
}

export default TablesPage;

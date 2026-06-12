import TicketsApp from "src/components/apps/tickets";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import StyleAwareWrapper from "src/components/shared/StyleAwareWrapper";
import StyleDivider from "src/components/shared/StyleDivider";

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Tickets" },
];

const Tickets = () => {
  return (
    <StyleAwareWrapper
      lyraClassName="flex flex-col p-px gap-px bg-border"
      defaultClassName="flex flex-col gap-4"
    >
      <BreadcrumbComp title="Tickets App" items={BCrumb} />
      <StyleDivider />
      <TicketsApp />
    </StyleAwareWrapper>
  );
};

export default Tickets;

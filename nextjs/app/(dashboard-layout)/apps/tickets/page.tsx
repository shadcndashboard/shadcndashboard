import TicketsApp from "@/app/components/apps/tickets";
import type { Metadata } from "next";
import BreadcrumbComp from "../../layout/shared/breadcrumb/breadcrumb-comp";
import StyleAwareWrapper from "@/app/components/shared/StyleAwareWrapper";
import StyleDivider from "@/app/components/shared/StyleDivider";

export const metadata: Metadata = {
  title: "Ticket App",
};

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Tickets" },
];

const Tickets = () => {
  return (
    <StyleAwareWrapper
      lyraClassName="flex flex-col p-px gap-px bg-border"
    >
      <BreadcrumbComp title="Tickets App" items={BCrumb} />
      <StyleDivider />
      <TicketsApp />
    </StyleAwareWrapper>
  );
};

export default Tickets;

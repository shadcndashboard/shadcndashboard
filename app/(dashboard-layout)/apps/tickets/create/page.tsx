import CreateTicketForm from "@/app/components/apps/tickets/create-ticketform";
import type { Metadata } from "next";
import { TicketProvider } from "@/app/context/ticket-context/index";
import BreadcrumbComp from "@/app/(dashboard-layout)/layout/shared/breadcrumb/breadcrumb-comp";
import StyleAwareWrapper from "@/app/components/shared/StyleAwareWrapper";
import StyleDivider from "@/app/components/shared/StyleDivider";

export const metadata: Metadata = {
  title: "Ticket App",
};

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Tickets" },
];

const CreateTickets = () => {
  return (
    <TicketProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
      >
        <BreadcrumbComp title="Tickets App" items={BCrumb} />
        <StyleDivider />
        <CreateTicketForm />
      </StyleAwareWrapper>
    </TicketProvider>
  );
};

export default CreateTickets;

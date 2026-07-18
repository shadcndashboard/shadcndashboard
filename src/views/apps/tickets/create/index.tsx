import CreateTicketForm from "src/components/apps/tickets/create-ticketform";
import { TicketProvider } from "src/context/ticket-context";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import StyleAwareWrapper from "src/components/shared/StyleAwareWrapper";
import StyleDivider from "src/components/shared/StyleDivider";

const BCrumb = [
  { to: "/", title: "Home" },
  { title: "Tickets" },
];

const CreateTickets = () => {
  return (
    <TicketProvider>
      <StyleAwareWrapper
        lyraClassName="flex flex-col p-px gap-px bg-border"
        defaultClassName="flex flex-col gap-4"
      >
        <BreadcrumbComp title="Tickets App" items={BCrumb} />
        <StyleDivider />
        <CreateTicketForm />
      </StyleAwareWrapper>
    </TicketProvider>
  );
};

export default CreateTickets;

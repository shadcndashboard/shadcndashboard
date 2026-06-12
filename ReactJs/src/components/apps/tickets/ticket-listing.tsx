import { useNavigate } from "react-router";
import { useContext } from "react";
import { CircleAlert, Trash } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { TicketContext } from "@/context/ticket-context";
import {
  AnimatedTableWrapper,
  AnimatedTableBody,
  AnimatedTableRow,
} from "@/components/animated-components/animated-table";
import InputPlaceholderAnimate from "@/components/animated-components/animatedinput-placeholder";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { SearchIcon } from "lucide-react";
import { TicketType } from "src/types/apps/ticket";

const TicketListing = () => {
  const { tickets, deleteTicket, ticketSearch, setTicketSearch, filter } =
    useContext(TicketContext);
  const router = useNavigate();

  const getVisibleTickets = (
    tickets: TicketType[],
    filter: string,
    ticketSearch: string
  ) => {
    switch (filter) {
      case "total_tickets":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Pending":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Pending" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Closed":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Closed" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Open":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Open" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const visibleTickets = getVisibleTickets(
    tickets,
    filter,
    ticketSearch.toLowerCase()
  );

  const ticketBadge = (ticket: TicketType) => {
    return ticket.Status === "Open"
      ? "bg-chart-2/12! text-chart-2!"
      : ticket.Status === "Closed"
        ? "bg-destructive/12! text-destructive!"
        : ticket.Status === "Pending"
          ? "bg-chart-4/12! text-chart-4!"
          : ticket.Status === "Moderate"
            ? "bg-primary/5! text-primary!"
            : "bg-primary/5! text-primary! ";
  };

  return (
    <>
      {visibleTickets.length === 0 ? (
        <div className="px-6 pt-3 flex justify-center ">
          <Alert variant="destructive" className="max-w-sm w-full text-center ">
            <CircleAlert size={18} />
            <AlertTitle>No Tickets available.</AlertTitle>
          </Alert>
        </div>
      ) : (
        <div className="my-6">
          <div className="flex justify-between  flex-wrap  items-center mb-4 gap-4">
            <Button
              onClick={() => router("/apps/tickets/create")}
              className=" whitespace-nowrap"
            >
              Create Ticket
            </Button>
            <div className="relative sm:max-w-60 max-w-full w-full">
              <SearchIcon size={16}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <InputPlaceholderAnimate
                value={ticketSearch}
                onChange={setTicketSearch}
                placeholders={[
                  "Search ticket...",
                  "Find ticket...",
                  "Look up ticket...",
                ]}
              />
            </div>
          </div>
          <AnimatedTableWrapper className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                    Id
                  </TableHead>
                  <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                    Ticket
                  </TableHead>
                  <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                    Assigned To
                  </TableHead>
                  <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                    Status
                  </TableHead>
                  <TableHead className="text-base font-semibold py-3 whitespace-nowrap">
                    Date
                  </TableHead>
                  <TableHead className="text-base font-semibold py-3 text-end">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <AnimatedTableBody className="divide-y divide-border">
                {visibleTickets.map((ticket, index) => (
                  <AnimatedTableRow key={ticket.Id} index={index}>
                    <TableCell className="whitespace-nowrap">
                      {ticket.Id}
                    </TableCell>
                    <TableCell className="max-w-md">
                      <h6 className="text-base truncate line-clamp-1">
                        {ticket.ticketTitle}
                      </h6>
                      <p className="text-sm text-muted-foreground truncate line-clamp-1 text-wrap sm:max-w-56">
                        {ticket.ticketDescription}
                      </p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div>
                          <Avatar>
                            <AvatarImage
                              src={ticket.thumb}
                              alt={ticket.AgentName}
                            />
                            <AvatarFallback>
                              {ticket.AgentName?.charAt(0) || "A"}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <h6 className="text-base"> {ticket.AgentName}</h6>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge className={`${ticketBadge(ticket)} `}>
                        {ticket.Status}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(ticket.Date), "E, MMM d")}
                      </p>
                    </TableCell>
                    <TableCell className="text-end">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Button
                              variant="destructive"
                              size="icon"
                              onClick={() => deleteTicket(ticket.Id)}
                              className="bg-background dark:bg-background"
                            >
                              <Trash size="18" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete Ticket</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </AnimatedTableRow>
                ))}
              </AnimatedTableBody>
            </Table>
          </AnimatedTableWrapper>
        </div>
      )}
    </>
  );
};

export default TicketListing;

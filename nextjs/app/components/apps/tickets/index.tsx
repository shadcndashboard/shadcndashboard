"use client";
import React from "react";

import { Card } from "@/components/ui/card";
import TicketFilter from "@/app/components/apps/tickets/ticket-filter";
import TicketListing from "@/app/components/apps/tickets/ticket-listing";
import { TicketProvider } from "@/app/context/ticket-context/index";

const TicketsApp = () => {
  return (
    <>
      <TicketProvider>
        <Card className="p-6">
          <TicketFilter />
          <TicketListing />
        </Card>
      </TicketProvider>
    </>
  );
};

export default TicketsApp;

import React, { useContext, useEffect } from "react";
import { TicketContext } from "@/app/context/ticket-context/index";
import { mutate } from "swr";
import { Chance } from "chance";
import { usePathname } from "next/navigation";

const chance = new Chance();

const TicketFilter = () => {
  const { tickets, setFilter } = useContext(TicketContext);
  const pendingC = tickets.filter(
    (t: { Status: string }) => t.Status === "Pending"
  ).length;
  const openC = tickets.filter(
    (t: { Status: string }) => t.Status === "Open"
  ).length;
  const closeC = tickets.filter(
    (t: { Status: string }) => t.Status === "Closed"
  ).length;
  const location = usePathname();

  // Reset Tickets on browser refresh

  const handleResetTickets = async () => {
    const response = await fetch("/api/ticket", {
      method: "GET",
      headers: {
        broserRefreshed: "true",
      },
    });
    const result = await response.json();
    await mutate("/api/ticket");
  };

  useEffect(() => {
    const isPageRefreshed = sessionStorage.getItem("isPageRefreshed");
    if (isPageRefreshed === "true") {
      sessionStorage.removeItem("isPageRefreshed");
      handleResetTickets();
    }
  }, [location]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("isPageRefreshed", "true");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-3 md:col-span-6  col-span-12">
          <div
            className="p-8 bg-primary/5 border  border-primary text-center rounded-lg cursor-pointer"
            onClick={() => setFilter("total_tickets")}
          >
            <h3 className="text-2xl">{tickets.length}</h3>
            <h6 className="text-base ">Total Tickets</h6>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6  col-span-12">
          <div
            className="p-8 bg-chart-4/12 border border-chart-4 text-center rounded-lg cursor-pointer"
            onClick={() => setFilter("Pending")}
          >
            <h3 className=" text-2xl">{pendingC}</h3>
            <h6 className="text-base ">Pending Tickets</h6>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6  col-span-12">
          <div
            className="p-8 bg-chart-2/12 border border-chart-2 text-center rounded-lg cursor-pointer"
            onClick={() => setFilter("Open")}
          >
            <h3 className=" text-2xl">{openC}</h3>
            <h6 className="text-base ">Open Tickets</h6>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6  col-span-12">
          <div
            className="p-8 bg-destructive/12 border border-destructive text-center rounded-lg cursor-pointer"
            onClick={() => setFilter("Closed")}
          >
            <h3 className="text-2xl">{closeC}</h3>
            <h6 className="text-base ">Closed Tickets</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketFilter;

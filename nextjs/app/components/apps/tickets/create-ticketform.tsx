"use client";
import React, { useState, useContext, useEffect } from "react";
import { TicketContext } from "@/app/context/ticket-context/index";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useRouter } from "next/navigation";
import { isValid, format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { TicketType } from "@/app/(dashboard-layout)/types/apps/ticket";

const agents = [
  { id: 1, name: "Liam", photo: "/images/profile/user-10.png" },
  { id: 2, name: "Steve", photo: "/images/profile/user-2.png" },
  { id: 3, name: "Jack", photo: "/images/profile/user-3.png" },
  { id: 4, name: "John", photo: "/images/profile/user-8.png" },
];

const CreateTicketForm = () => {
  const { tickets, addTicket } = useContext(TicketContext);
  const [ticketId, setTicketId] = useState<number | undefined>(undefined);
  const [ticketDate, setTicketDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const [agentPhoto, setAgentPhoto] = useState(agents[0].photo);

  const router = useRouter();

  useEffect(() => {
    // Find the maximum ID in the existing tickets
    const maxId = tickets.reduce(
      (max, ticket) => (ticket.Id > max ? ticket.Id : max),
      0
    );
    // Set the new ticket ID
    setTicketId(maxId + 1);
  }, [tickets]);

  const handleSubmit = () => {
    if (!ticketTitle || !ticketDescription) {
      alert("Please fill out all fields.");
      return;
    }

    const newTicket: TicketType = {
      Id: ticketId!,
      ticketTitle,
      ticketDescription,
      Status: "Open",
      Label: "primary",
      thumb: agentPhoto,
      AgentName: selectedAgent.name,
      Date: new Date(ticketDate),
      deleted: false,
    };

    addTicket(newTicket);
    resetForm();
    router.push("/apps/tickets");
  };

  const resetForm = () => {
    setTicketId(undefined);
    setTicketDate(new Date().toISOString().split("T")[0]);
    setTicketTitle("");
    setTicketDescription("");
    setSelectedAgent(agents[0]);
    setAgentPhoto(agents[0].photo);
  };
  const parsedDate = isValid(new Date(ticketDate))
    ? new Date(ticketDate)
    : new Date();
  const formattedOrderDate = format(parsedDate, "EEEE, MMMM dd, yyyy");

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-base font-semibold ">Create New Ticket</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p> ID : {ticketId !== undefined ? ticketId : ""}</p>
        <p>Date : {formattedOrderDate}</p>
        <div className="bg-background border   my-6 rounded-xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="ticketTitle">Ticket Title</Label>
              </div>
              <Input
                id="ticketTitle"
                value={ticketTitle}
                onChange={(e) => setTicketTitle(e.target.value)}
                placeholder="Ticket Title"
                className="w-full"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="ticketDescription">Ticket Description</Label>
              </div>
              <Input
                id="ticketDescription"
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                placeholder="Ticket Description"
                className="w-full "
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-6 gap-3">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button >
                    {selectedAgent.name}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-md">
                  {agents.map((agent) => (
                    <DropdownMenuItem
                      className={"cursor-pointer"}
                      key={agent.id}
                      onClick={() => {
                        setSelectedAgent(agent);
                        setAgentPhoto(agent.photo);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={agent.photo}
                            alt={agent.name}
                            width={40}
                            height={40}
                          />
                          <AvatarFallback>{agent.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{agent.name}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex gap-3 ">
              <Button onClick={handleSubmit} >
                Save
              </Button>
              <Button
                variant={"destructive"}
                className="rounded-md"
                onClick={() => {
                  router.push("/apps/tickets");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default CreateTicketForm;

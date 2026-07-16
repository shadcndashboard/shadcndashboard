export interface TicketType {
  Id: number;
  ticketTitle: string;
  ticketDescription: string;
  Status: string;
  Label: string;
  thumb: string;
  AgentName: string;
  Date: Date;
  deleted: boolean;
}

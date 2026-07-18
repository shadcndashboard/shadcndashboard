import { createContext, useState, useEffect } from 'react';
import { TicketType } from '../../types/apps/ticket';
import { getFetcher, deleteFetcher, postFetcher } from 'src/api/global-fetcher';

import useSWR from 'swr';

export interface TicketContextType {
  tickets: TicketType[];
  deleteTicket: (id: number) => void;
  setTicketSearch: (searchTerm: string) => void;
  searchTickets: (searchTerm: string) => void;
  ticketSearch: string;
  filter: string;
  error: null;
  loading: boolean;
  setFilter: (filter: string) => void;
  addTicket: (ticket: any) => void;
}

// Create Context
export const TicketContext = createContext<TicketContextType>({} as TicketContextType);

// Provider Component
export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [ticketSearch, setTicketSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('total_tickets');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  // Fetch tickets from the API when the component mounts using useEffect
  const {
    data: ticketsData,
    isLoading: isTicketsLoading,
    error: ticketsError,
    mutate,
  } = useSWR('/api/data/ticket/TicketData', getFetcher);
  useEffect(() => {
    if (ticketsData) {
      setTickets(ticketsData.data);
      setLoading(isTicketsLoading);
    } else if (ticketsError) {
      setError(ticketsError);
      setLoading(isTicketsLoading);
    } else {
      setLoading(isTicketsLoading);
    }
  }, [ticketsData, ticketsError, isTicketsLoading]);

  // Delete a ticket with the specified ID from the server and update the tickets state
  const deleteTicket = async (id: number) => {
    try {
      await mutate(deleteFetcher('/api/data/ticket/delete', { id }));
    } catch (err) {
      console.error('Error deleting ticket:', err);
    }
  };

  // Update the ticket search term state based on the provided search term value.
  const searchTickets = (searchTerm: string) => {
    setTicketSearch(searchTerm);
  };

  // Add ticket
  const addTicket = async (newTicket: TicketType) => {
    try {
      await mutate(postFetcher('/api/data/ticket/add', newTicket));
    } catch (err) {
      console.error('Error adding ticket:', err);
    }
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        error,
        loading,
        deleteTicket,
        setTicketSearch,
        searchTickets,
        ticketSearch,
        filter,
        setFilter,
        addTicket,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

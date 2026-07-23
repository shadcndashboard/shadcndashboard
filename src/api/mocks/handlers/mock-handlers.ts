

import { Bloghandlers } from 'src/api/blog/blogdata';
import { NotesHandlers } from 'src/api/notes/notedata';
import { TicketHandlers } from 'src/api/ticket/ticket-data';


export const mockHandlers = [
  ...Bloghandlers,
  ...NotesHandlers,
  ...TicketHandlers,
];

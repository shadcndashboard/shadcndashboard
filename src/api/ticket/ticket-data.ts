
import { Chance } from 'chance';
import { TicketType } from 'src/types/apps/ticket';
import { http, HttpResponse } from 'msw';

import userImg2 from '@/assets/images/profile/user-2.png';
import userImg3 from '@/assets/images/profile/user-3.png';
import userImg4 from '@/assets/images/profile/user-4.png';
import userImg5 from '@/assets/images/profile/user-5.png';
import userImg6 from '@/assets/images/profile/user-6.png';
import userImg7 from '@/assets/images/profile/user-7.png';
import userImg8 from '@/assets/images/profile/user-8.png';
import userImg10 from '@/assets/images/profile/user-10.png';

const chance = new Chance();

let TicketData: TicketType[] = [
  {
    Id: 1,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: userImg10,
    AgentName: 'Liam',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 2,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Label: 'warning',
    thumb: userImg2,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 3,
    ticketTitle: 'Exercitationem ullam corporis',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Label: 'success',
    thumb: userImg3,
    AgentName: 'Jack',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 4,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: userImg4,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 5,
    ticketTitle: 'Exercitationem ullam corporis',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: userImg5,
    AgentName: 'Liam',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 6,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Label: 'warning',
    thumb: userImg6,
    AgentName: 'Jack',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 7,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Label: 'success',
    thumb: userImg7,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 8,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: userImg8,
    AgentName: 'John',
    Date: chance.date(),
    deleted: false,
  },
]


export const TicketHandlers = [
  // Mock GET request to retrieve Ticket data
  http.get('/api/data/ticket/TicketData', () => {
    try {
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  // Mock DELETE endpoint for deleting a ticket
  http.delete('/api/data/ticket/delete', async ({ request }) => {
    try {
      const { id } = (await request.json()) as { id: string | number };
      const remainingTickets = TicketData.filter((ticket) => ticket.Id !== id);
      TicketData = remainingTickets;
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  // Mock POST endpoint for adding a ticket
  http.post('/api/data/ticket/add', async ({ request }) => {
    try {
      const newTicket = (await request.json()) as TicketType;
      TicketData.push(newTicket);
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),
];

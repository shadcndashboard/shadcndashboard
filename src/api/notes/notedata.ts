import { http, HttpResponse } from 'msw';
import { notesType } from 'src/types/apps/notes';

export let NotesData: notesType[] = [
  {
    id: 1,
    color: 'primary',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    datef: '2023-06-03T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 2,
    color: 'destructive',
    title:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,',
    datef: '2023-06-02T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 3,
    color: 'chart-4',
    title:
      'consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    datef: '2023-06-01T23:28:56.782Z',
    deleted: false,
  },
  {
    id: 4,
    color: 'chart-2',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    datef: '2023-06-03T23:28:56.782Z',
    deleted: false,
  },
];

export const NotesHandlers = [
  // GET request to retrieve Notes data
  http.get('/api/data/notes/NotesData', () => {
    try {
      return HttpResponse.json({ status: 200, msg: 'Success', data: NotesData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  // DELETE endpoint for deleting a note
  http.delete('/api/notes/delete', async ({ request }) => {
    try {
      const { id } = (await request.json()) as { id: string | number };
      const remainingNotes = NotesData.filter(note => note.id !== id);
      NotesData = remainingNotes;
      return HttpResponse.json({ status: 200, msg: 'Success', data: NotesData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  //  POST endpoint for adding a new note

  http.post('/api/notes/add', async ({ request }) => {
    const currentDate = new Date();
    try {
      const { title, color } = (await request.json()) as { title: string; color: string };

      // Find the highest ID currently in the NotesData array
      const highestId = NotesData.reduce((maxId, note) => Math.max(maxId, note.id), 0);

      // Create a new note with the next unique ID
      const newNote = {
        id: highestId + 1,
        title,
        color,
        deleted: false,
        datef: currentDate.toISOString(),
      };

      NotesData.push(newNote);
      return HttpResponse.json({ status: 200, msg: 'Success', data: NotesData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  // PUT endpoint for updating a note
  http.put('/api/notes/update', async ({ request }) => {
    try {
      const { id, title, color } = (await request.json()) as {
        id: string | number;
        title: string;
        color: string;
      };
      const index = NotesData.findIndex((note) => note.id === id);

      if (index !== -1) {
        NotesData[index] = { ...NotesData[index], title, color };
        return HttpResponse.json({
          status: 200,
          msg: 'Success',
          data: NotesData,
        });
      } else {
        return HttpResponse.json({ status: 400, msg: 'Note not found' });
      }
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),
];

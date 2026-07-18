import { createContext, useState, useEffect } from 'react';

import React from 'react';
import useSWR from 'swr';
import { deleteFetcher, getFetcher, postFetcher, putFetcher } from 'src/api/global-fetcher';
import { notesType } from 'src/types/apps/notes';

// Define context type
interface NotesContextType {
  notes: notesType[];
  loading: boolean;
  error: Error | null;
  selectedNoteId: number;
  selectNote: (id: number) => void;
  addNote: (newNote: notesType) => Promise<void>;
  updateNote: (id: number, title: string, color: string) => Promise<void>;
  deleteNote: (id: number) => Promise<void>;
}

// Initial context values
const initialContext: NotesContextType = {
  notes: [],
  loading: true,
  error: null,
  selectedNoteId: 1,
  selectNote: () => {},
  addNote: async () => {},
  updateNote: async () => {},
  deleteNote: async () => {},
};

// Create context
export const NotesContext = createContext<NotesContextType>(initialContext);

// Provider component
export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<notesType[]>(initialContext.notes);
  const [loading, setLoading] = useState<boolean>(initialContext.loading);
  const [error, setError] = useState<Error | null>(initialContext.error);
  const [selectedNoteId, setSelectedNoteId] = useState<number>(initialContext.selectedNoteId);

  // Fetch notes from the server
  const {
    data: notesData,
    isLoading: isNotesLoading,
    error: notesError,
    mutate,
  } = useSWR('/api/data/notes/NotesData', getFetcher);
  useEffect(() => {
    if (notesData) {
      setNotes(notesData.data);
      setLoading(false);
    } else if (notesError) {
      setError(notesError);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [notesData, notesError, isNotesLoading]);

  // Select a note by its ID
  const selectNote = (id: number) => {
    setSelectedNoteId(id);
  };

  // Add a new note
  const addNote = async (newNote: notesType) => {
    try {
      await mutate(postFetcher('/api/notes/add', newNote));
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  // Update a note by its ID
  const updateNote = async (id: number, title: string, color: string) => {
    try {
      await mutate(putFetcher('/api/notes/update', { id, title, color }));
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  // Delete a note by its ID
  const deleteNote = async (id: number) => {
    try {
      const response = await mutate(deleteFetcher('/api/notes/delete', { id }));
      console.log(response.data);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        loading,
        error,
        selectedNoteId,
        selectNote,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

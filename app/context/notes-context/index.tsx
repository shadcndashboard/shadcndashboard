"use client";
import React, { createContext, useState, useEffect } from "react";

import { NotesType } from "@/app/(dashboard-layout)/types/apps/notes";
import useSWR from "swr";
import {
  deleteFetcher,
  getFetcher,
  postFetcher,
  putFetcher,
} from "@/app/api/global-fetcher";

// Define context type
interface NotesContextType {
  notes: NotesType[];
  loading: boolean;
  error: Error | null;
  selectedNoteId: number;
  selectNote: (id: number) => void;
  addNote: (newNote: NotesType) => Promise<void>;
  updateNote: (id: number, title: string, color: string) => Promise<void>;
  deleteNote: (id: number) => Promise<void>;
}

// Initial context values
const initialContext: NotesContextType = {
  notes: [],
  loading: true,
  error: null,
  selectedNoteId: 1,
  selectNote: (id: number) => {},
  addNote: async (newNote: NotesType) => {},
  updateNote: async (id: number, title: string, color: string) => {},
  deleteNote: async (id: number) => {},
};

// Create context
export const NotesContext = createContext<NotesContextType>(initialContext);

// Provider component
export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notes, setNotes] = useState<NotesType[]>(initialContext.notes);
  const [loading, setLoading] = useState<boolean>(initialContext.loading);
  const [error, setError] = useState<Error | null>(initialContext.error);
  const [selectedNoteId, setSelectedNoteId] = useState<number>(
    initialContext.selectedNoteId
  );

  // Fetch notes from the server
  const {
    data: notesData,
    isLoading: isNotesLoading,
    error: notesError,
    mutate,
  } = useSWR("/api/notes", getFetcher);
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
  }, [notesData, notesError]);

  // Select a note by its ID
  const selectNote = (id: number) => {
    setSelectedNoteId(id);
  };

  // Add a new note
  const addNote = async (newNote: NotesType) => {
    try {
      await mutate(postFetcher("/api/notes", newNote));
    } catch (error: unknown) {
      console.error("Error adding note:", error);
    }
  };

  // Update a note by its ID
  const updateNote = async (id: number, title: string, color: string) => {
    try {
      await mutate(putFetcher("/api/notes", { id, title, color }));
    } catch (error: unknown) {
      console.error("Error updating note:", error);
    }
  };

  // Delete a note by its ID
  const deleteNote = async (id: number) => {
    try {
      const response = await mutate(deleteFetcher("/api/notes", { id }));
      console.log(response.data);
    } catch (error: unknown) {
      console.error("Error deleting note:", error);
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

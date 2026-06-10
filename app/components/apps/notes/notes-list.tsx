"use client";
import { Trash2 } from "lucide-react";
import React, { useState, useContext, useEffect } from "react";
import { NotesType } from "../../../(dashboard-layout)/types/apps/notes";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { NotesContext } from "@/app/context/notes-context/index";
import AnimatedItem from "../../animated-components/list-animation";
import PlaceholdersInput from "@/app/components/animated-components/animatedinput-placeholder";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const Notelist = () => {
  const { notes, selectNote, deleteNote } = useContext(NotesContext);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeNoteId, setActiveNoteId] = useState<any | null>(null);

  useEffect(() => {
    if (notes.length > 0) {
      // Set the first note as active
      const firstNoteId = notes[0].id;
      setActiveNoteId(firstNoteId);
    }
  }, [notes]);

  const filterNotes = (notes: NotesType[], nSearch: string) => {
    if (nSearch !== "")
      return notes.filter(
        (t) =>
          !t.deleted &&
          (t.title ?? "")
            .toLocaleLowerCase()
            .concat(" ")
            .includes(nSearch.toLocaleLowerCase())
      );
    return notes.filter((t) => !t.deleted);
  };

  const filteredNotes = filterNotes(notes, searchTerm);
  const handleNoteClick = (noteId: number) => {
    setActiveNoteId(noteId);
    selectNote(noteId);
  };

  type NoteColor =
    | "primary"
    | "destructive"
    | "chart-3"
    | "chart-4"
    | "chart-2"
    | "secondary";



  const colorClasses: Record<NoteColor, string> = {
    primary: "bg-primary/5  text-primary border border-primary",
    destructive: "bg-destructive/5  text-primary border border-destructive",
    "chart-3": "bg-chart-3/5  text-primary  border border-chart-3",
    "chart-4": "bg-chart-4/5 text-primary border border-chart-4",
    "chart-2": "bg-chart-2/5 text-primary  border border-chart-2",
    secondary: "bg-secondary/5 text-primary  border border-secondary",
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="relative w-full">

          <SearchIcon size={16} className="absolute left-2 top-1/2 -translate-y-1/2  text-muted-foreground" />

          <PlaceholdersInput
            value={searchTerm}
            className="pl-8"
            onChange={setSearchTerm}
            placeholders={[
              "Search Notes...",
              "Find Your Notes...",
              "Look up Notes...",
            ]}
          />
        </div>
        <h6 className="text-base mt-6">All Notes</h6>
        <div className="flex flex-col gap-3 mt-4">
          {filteredNotes && filteredNotes.length ? (
            filteredNotes.map((note, index) => (
              <div key={note.id}>
                <AnimatedItem index={index}>
                  <div
                    className={`cursor-pointer relative p-4 rounded-xl   ${colorClasses[note.color as NoteColor] ||
                      "bg-chart-5/5"
                      } 
                  ${activeNoteId === note.id ? "scale-100" : "scale-95"
                      } transition-transform duration-200`}
                    onClick={() => handleNoteClick(note.id)}
                  >
                    <h6 className={`text-base truncate text-primary`}>
                      {note.title}
                    </h6>
                    <div className="flex items-center justify-between">
                      <p className="text-xs">
                        {new Date(note.datef ?? "").toLocaleDateString()}
                      </p>
                      <div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Button
                                variant={"ghost"}
                                className={
                                  "hover:text-destructive hover:bg-destructive/12 text-black dark:text-white dark:hover:text-destructive dark:hover:bg-destructive/12"
                                }
                                size="icon"
                                onClick={() => deleteNote(note.id)}
                                aria-label="Delete note"
                              >
                                <Trash2 size={18} />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Delete</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              </div>
            ))
          ) : (
            <Alert variant="destructive">
              <AlertTitle>No Notes Found!</AlertTitle>
            </Alert>
          )}
        </div>
      </div>
    </>
  );
};
export default Notelist;

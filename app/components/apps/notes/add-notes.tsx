"use client";
import * as React from "react";
import { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { NotesContext } from "@/app/context/notes-context/index";

interface ColorOption {
  lineColor: string;
  disp: string;
  id: number;
}

interface Props {
  colors: ColorOption[];
}

const AddNotes = ({ colors }: Props) => {
  const { addNote } = useContext(NotesContext);

  const [openNoteModal, setOpenNoteModal] = useState(false);
  const [scolor, setScolor] = useState<string>("primary");
  const [title, setTitle] = useState("");

  const setColor = (color: string) => {
    setScolor(color);
  };

  const handleSave = () => {
    addNote({
      title,
      color: scolor,
      id: 0,
      deleted: false,
    });
    setOpenNoteModal(false);
    setTitle("");
  };

  return (
    <Dialog open={openNoteModal} onOpenChange={setOpenNoteModal}>
      <DialogTrigger>
        <Button>Add Note</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg rtl:[&_[data-slot=dialog-close]]:left-2 rtl:[&_[data-slot=dialog-close]]:right-auto">
        <DialogHeader>
          <DialogTitle>Add New Note</DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          <Textarea
            rows={5}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
            placeholder="Write your note here..."
          />
          <h6 className="text-base pt-4">Change Note Color</h6>
          <div className="flex gap-2 items-center">
            {colors?.map((color) => (
              <div
                key={color.disp}
                onClick={() => setColor(color.disp)}
                className={`h-7 w-7 flex justify-center items-center rounded-full cursor-pointer bg-${color.disp}`}
              >
                {scolor === color.disp && (
                  <Check size={18} className="text-white" />
                )}
              </div>
            ))}
          </div>
        </div>

        <DialogFooter className="pt-4">
          <Button disabled={!title} onClick={handleSave} >
            Save
          </Button>
          <Button
            variant="destructive"

            onClick={() => setOpenNoteModal(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNotes;

"use client";
import React from "react";
import Notelist from "./notes-list";


const NotesSidebar = () => {
  return (
    <>
      <div className="w-80 border-e border-border p-6 h-full">
        <Notelist />
      </div>
    </>
  );
};

export default NotesSidebar;

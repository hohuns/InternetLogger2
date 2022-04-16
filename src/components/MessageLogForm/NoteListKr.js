import React from "react";
import Note from "./NoteKr";
import "./NoteList.css";

const NoteListKr = (props) => {
  return (
    <ul className="note-list">
      {props.note.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          date={note.date}
          text={note.text}
        />
      ))}
    </ul>
  );
};

export default NoteListKr;

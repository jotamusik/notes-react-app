import * as React from 'react';
import { DependencyList } from 'react';
import './NoteList.scss';
import { Note } from '../Note';
import { NoteData } from '../models/NoteData';
import { Dependencies } from '../models/Dependencies';

export const NoteList: React.FC<Dependencies> = ({ noteService }) => {

  function renderNote(note: NoteData) {
    return (
      <li key={note.id}>
        <Note title={note.title} elements={note.elements}/>
      </li>
    );
  }

  const [notes, setNotes] = React.useState<NoteData[]>([]);

  const onInit: DependencyList = [];
  React.useEffect(() => {
    noteService.getNotes().then(setNotes);
  }, onInit);

  return (
    <div className="NoteList">
      <ul>
        {notes.map(renderNote)}
      </ul>
    </div>
  );
};

NoteList.displayName = 'NoteList';

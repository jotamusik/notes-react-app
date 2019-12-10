import * as React from 'react';
import './NoteList.scss';
import { Note } from '../Note';
import { NoteData } from '../models/NoteData';
import { Dependencies } from '../models/Dependencies';
import { Link } from 'react-router-dom';

export const NoteList: React.FC<Dependencies> = ({ noteService }) => {

  function renderNote(note: NoteData) {
    return (
      <li key={note.id} className="list-group-item text-center">
        <Link to={`/notes/${note.id}`}>
          <Note title={note.title} description={note.description} content={note.content}/>
        </Link>
      </li>
    );
  }

  const [notes, setNotes] = React.useState<NoteData[]>([]);

  const onInit: React.DependencyList = [];
  React.useEffect(() => {
    noteService.getNotes().then(setNotes);
  }, onInit);

  return (
    <div className="NoteList">
      <ul className="list-group">
        {notes.map(renderNote)}
      </ul>
    </div>
  );
};

NoteList.displayName = 'NoteList';

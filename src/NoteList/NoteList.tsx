import * as React from 'react';
import './NoteList.scss';
import { NoteResume } from '../NoteResume';
import { NoteData } from '../models/NoteData';
import { Dependencies } from '../models/Dependencies';
import { Link } from 'react-router-dom';

export const NoteList: React.FC<Dependencies> = ({ noteService }) => {

  const [ notes, setNotes ] = React.useState<NoteData[]>([]);

  const onInit: React.DependencyList = [];
  React.useEffect(() => {
    noteService.getNotes().then(setNotes);
  }, onInit);

  function renderNote(note: NoteData) {
    return (
      <li key={ note.id } className="list-group-item text-center">
        <Link to={ `/notes/${ note.id }` }>
          <NoteResume title={ note.title } description={ note.description } content={ note.content }/>
        </Link>
      </li>
    );
  }

  return (
    <div className="NoteList">
      <ul className="list-group">
        { notes.map(renderNote) }
      </ul>
    </div>
  );
};

NoteList.displayName = 'NoteList';

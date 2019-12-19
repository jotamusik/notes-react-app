import * as React from 'react';
import './NoteList.scss';
import { NoteResume } from '../NoteResume';
import { NoteData } from '../models/NoteData';
import { Dependencies } from '../models/Dependencies';
import { Link } from 'react-router-dom';
import { useNotesContext } from '../LocalState';

export const NoteList: React.FC<Dependencies> = ({ noteService }) => {

  const { notes, selectedNoteId } = useNotesContext();

  const isActiveNote = (note: NoteData) => note.id === selectedNoteId;

  function renderNote(note: NoteData) {
    return (
      <Link to={ `/notes/${ note.id }` }
            className={ `list-group-item text-center ${ isActiveNote(note) ? 'NoteList-ActiveItem' : '' }` }>
        <NoteResume title={ note.title } description={ note.description } content={ note.content }/>
      </Link>
    );
  }

  return (
    <div className="NoteList">
      <div className="list-group">
        { notes.map(renderNote) }
      </div>
    </div>
  );
};

NoteList.displayName = 'NoteList';

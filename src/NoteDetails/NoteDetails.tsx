import * as React from 'react';
import './NoteDetails.scss';
import { NoteData } from '../models/NoteData';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useNotesContext } from '../LocalState';

const useGetNote = () => {
  const { noteId } = useParams();
  const match = useRouteMatch();

  const { actions } = useNotesContext();

  const [ note, setNote ] = React.useState<NoteData>();

  const onInit: React.DependencyList = [];
  const onNoteIdChange: React.DependencyList = [ noteId ];

  React.useEffect(() => {
    if ( actions.selectNote ) {
      actions.selectNote(Number(noteId));
    }
    if ( actions.getNoteById ) {
      actions.getNoteById(Number(noteId)).then(setNote);
    }
  }, onInit);

  React.useEffect(() => {
    if ( actions.selectNote ) {
      actions.selectNote(Number(noteId));
    }
    if ( actions.getNoteById ) {
      actions.getNoteById(Number(noteId)).then(setNote);
    }
  }, onNoteIdChange);

  return { note, match };
};

export const NoteDetails: React.FC = () => {

  const { note, match } = useGetNote();

  function renderNoteDetails(noteDetails?: NoteData) {
    if ( noteDetails ) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{ noteDetails.title }</h5>
            <h6 className="card-subtitle text-muted">{ noteDetails.description }</h6>
            { renderNoteContent(noteDetails.content) }
            <Link to={ `${ match.url }/edit` }><a href="" className="btn btn-dark">Edit</a></Link>
          </div>
        </div>
      );
    }
  }

  function renderNoteContent(content: string) {
    const paragraphs = content.split('\n');
    return (
      <div className="Content">
        { paragraphs.map((paragraph) => <p className="card-text">{ paragraph }</p>) }
      </div>
    );
  }

  return (
    <div className="col-7">
      <div className="NoteDetails">
        { renderNoteDetails(note) }
      </div>
    </div>
  );
};

NoteDetails.displayName = 'NoteDetails';

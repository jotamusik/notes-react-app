import * as React from 'react';
import './NoteDetails.scss';
import { Dependencies } from '../models/Dependencies';
import { NoteData } from '../models/NoteData';
import { useParams } from 'react-router-dom';

export const NoteDetails: React.FC<Dependencies> = ({ noteService }) => {

  const { noteId } = useParams();

  const [note, setNote] = React.useState<NoteData>();

  const onInit: React.DependencyList = [];
  const onNoteIdChange: React.DependencyList = [noteId];

  React.useEffect(() => {
    noteService.getNoteById(Number(noteId)).then(setNote);
  }, onInit);

  React.useEffect(() => {
    noteService.getNoteById(Number(noteId)).then(setNote);
  }, onNoteIdChange);

  function renderNoteDetails(noteDetails?: NoteData) {
    if (noteDetails) {
      return (
        <div className="NoteDetails">
          <h2 className="Title">{noteDetails.title}</h2>
          <small className="Description text-muted">{noteDetails.description}</small>
          <br/>
          {renderNoteContent(noteDetails.content)}
        </div>
      );
    }
  }

  function renderNoteContent(content: string) {
    const paragraphs = content.split('\n');
    return (
      <div className="Content">
        {paragraphs.map((paragraph) => <p className="Content-paragraph">{paragraph}</p>)}
      </div>
    );
  }

  return (
    <div className="NoteDetails">
      {renderNoteDetails(note)}
    </div>
  );
};

NoteDetails.displayName = 'NoteDetails';

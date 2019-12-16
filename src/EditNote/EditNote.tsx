import * as React from 'react';
import './EditNote.scss';
import { Dependencies } from '../models/Dependencies';
import { NoteData } from '../models/NoteData';
import { useParams } from 'react-router-dom';

export const EditNote: React.FC<Dependencies> = ({ noteService }) => {

  const emptyNote = {
    title: '',
    description: '',
    content: '',
  };

  const { noteId } = useParams();

  const [ note, setNote ] = React.useState<NoteData>(emptyNote);

  const onInit: React.DependencyList = [];

  React.useEffect(() => {
    noteService.getNoteById(Number(noteId)).then(setNote);
  }, onInit);

  const handleTitleChange = (event: any) => {
    note.title = event.target.value;
    setNote({ ...note });
  };

  const renderTitleForm = (title?: string) => (
    <div className="form-group col-md-4">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        className="form-control"
        id="title"
        name="title"
        value={ title } onChange={ handleTitleChange }/>
    </div>
  );

  const renderDescriptionForm = (description?: string) => (
    <div className="form-group col-md-8">
      <label htmlFor="description">Description</label>
      <input
        type="text"
        className="form-control"
        id="description"
        name="description"
        value={ description }/>
    </div>
  );

  const renderContentForm = (content?: string) => (
    <>
      <label htmlFor="content">Content</label>
      <textarea
        className="form-control EditNote-content"
        id="content"
        name="content"
        value={ content }/>
    </>
  );

  const renderNoteEditForm = (noteToEdit: NoteData) => (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Edit Note</h5>
        <form>
          <div className="form-row">
            { renderTitleForm(noteToEdit.title) }
            { renderDescriptionForm(noteToEdit.description) }
          </div>
          <div className="form-row">
            { renderContentForm(noteToEdit.content) }
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="col-7">
      <div className="EditNote">
        { renderNoteEditForm(note) }
      </div>
    </div>
  );
};

EditNote.displayName = 'EditNote';

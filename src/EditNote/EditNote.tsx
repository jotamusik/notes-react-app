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
  const [ editedNote, setEditedNote ] = React.useState<NoteData>(emptyNote);

  const onInit: React.DependencyList = [];

  React.useEffect(() => {
    noteService.getNoteById(Number(noteId)).then((retrievedNote) => {
      setNote(retrievedNote);
      setEditedNote(retrievedNote);
    });
  }, onInit);

  const handleTitleChange = (event: any) => {
    editedNote.title = event.target.value;
    setEditedNote({ ...editedNote });
  };

  const handleDescriptionChange = (event: any) => {
    editedNote.description = event.target.value;
    setEditedNote({ ...editedNote });
  };

  const handleContentChange = (event: any) => {
    editedNote.content = event.target.value;
    setEditedNote({ ...editedNote });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    noteService.saveNote(editedNote).then((savedNote) => {
      console.log(savedNote);
    });
  };

  const renderTitleForm = (title?: string) => (
    <div className="form-group col-md-4">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        className="form-control"
        id="title"
        name="title"
        value={ title }
        onChange={ handleTitleChange }/>
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
        value={ description }
        onChange={ handleDescriptionChange }/>
    </div>
  );

  const renderContentForm = (content?: string) => (
    <>
      <label htmlFor="content">Content</label>
      <textarea
        className="form-control EditNote-content"
        id="content"
        name="content"
        value={ content }
        onChange={ handleContentChange }/>
    </>
  );

  const renderNoteEditForm = (noteToEdit: NoteData) => (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Edit Note</h5>
        <form onSubmit={ handleSubmit }>
          <div className="form-row">
            { renderTitleForm(noteToEdit.title) }
            { renderDescriptionForm(noteToEdit.description) }
          </div>
          <div className="form-row">
            { renderContentForm(noteToEdit.content) }
          </div>
          <div className="form-row EditNote-buttons-row">
            <button type="submit" className="btn btn-success EditNote-button">Save</button>
            <button type="button" className="btn btn-danger EditNote-button">Discard</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="col-7">
      <div className="EditNote">
        { renderNoteEditForm(editedNote) }
      </div>
    </div>
  );
};

EditNote.displayName = 'EditNote';

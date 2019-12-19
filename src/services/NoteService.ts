import { NoteData } from '../models/NoteData';

export class NoteService {

  private notesData: NoteData[] = [
    {
      id: 1,
      title: 'Lista de la Compra',
      description: 'Nota para la lista de la compra',
      content: '- fresas\n- nata\n- chocolate',
    },
    {
      id: 2,
      title: 'Cosas pendientes',
      description: 'Nota para recordar las cosas por hacer',
      content: '',
    },
  ];

  public getNotes(): Promise<NoteData[]> {
    return Promise.resolve(this.notesData);
  }

  public getNoteById(id: number): Promise<NoteData> {
    return new Promise((resolve, reject) => {
      const matchedNote = this.notesData.find((note) => note.id === id);
      if ( matchedNote ) {
        resolve(matchedNote);
      } else {
        reject();
      }
    });
  }

  public saveNote(noteToSave: NoteData): Promise<NoteData> {
    return new Promise((resolve) => {
      const noteIndex = this.notesData.findIndex((note) => note.id === noteToSave.id);
      const isFound = noteIndex !== -1;
      if ( isFound ) {
        this.notesData[noteIndex] = noteToSave;
      } else {
        noteToSave.id = this.notesData.length + 1;
        this.notesData.push(noteToSave);
      }
      resolve(noteToSave);
    });
  }
}

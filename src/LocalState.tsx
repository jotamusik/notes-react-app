import * as React from 'react';
import { NoteData } from './models/NoteData';
import { Dependencies } from './models/Dependencies';

interface NotesActions {
  getNoteById?(id: number): Promise<NoteData>;

  selectNote?(id: number): void;

  saveNote?(note: NoteData): Promise<NoteData>;
}

interface LocalState {
  notes: NoteData[];
  selectedNoteId?: number;
  actions: NotesActions;
  services?: Dependencies;
}

const LocalStateContext = React.createContext<LocalState>({ notes: [], selectedNoteId: 0, actions: {} });

const NotesStateProvider: React.FC<Dependencies> = ({ noteService, children }) => {

  const OnInit: React.DependencyList = [];
  const [ notes, setNotes ] = React.useState<NoteData[]>([]);
  const [ selectedNoteId, setSelectedNoteId ] = React.useState<number>();

  React.useEffect(() => {
    noteService.getNotes().then(setNotes);
  }, OnInit);

  const localState: LocalState = {
    notes,
    selectedNoteId,
    actions: {
      getNoteById: async (id: number) => {
        return await noteService.getNoteById(id);
      },
      selectNote: (id: number) => {
        setSelectedNoteId(id);
      },
      saveNote: async (note: NoteData): Promise<NoteData> => {
        const savedNote = await noteService.saveNote(note);

        const noteIndex = notes.findIndex((iteratedNote) => iteratedNote.id === savedNote.id);
        const isFound = noteIndex !== -1;

        if ( isFound ) {
          notes[noteIndex] = savedNote;
          setNotes([ ...notes ]);
        } else {
          setNotes([ ...notes, savedNote ]);
        }
        return Promise.resolve(savedNote);
      },
    },
    services: {
      noteService,
    },
  };

  return (
    <LocalStateContext.Provider value={ localState }>
      { children }
    </LocalStateContext.Provider>
  );
};

const useNotesContext = (): LocalState => {
  return React.useContext(LocalStateContext);
};

export { NotesStateProvider, useNotesContext };

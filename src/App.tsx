import React from 'react';
import './App.css';
import { NoteList } from './NoteList';
import { NoteService } from './services/NoteService';
import { Dependencies } from './models/Dependencies';

const App: React.FC = () => {

  const dependencies: Dependencies = {
    noteService: new NoteService(),
  };

  return (
    <div className="App">
      <header>
        <h1>Note List App</h1>
      </header>
      <div>
        <NoteList noteService={dependencies.noteService} />
      </div>
    </div>
  );
};

export default App;

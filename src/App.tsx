import React from 'react';
import './App.css';
import { NoteList } from './NoteList';
import { NoteService } from './services/NoteService';
import { Dependencies } from './models/Dependencies';
import { NoteDetails } from './NoteDetails';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App: React.FC = () => {

  const dependencies: Dependencies = {
    noteService: new NoteService(),
  };

  return (
    <Router>
      <div className="container">
        <header className="row justify-content-center App-header">
          <Link to="/notes"><h1>Note List App</h1></Link>
        </header>
        <div className="row">
          <div className="col">
            <NoteList noteService={dependencies.noteService}/>
          </div>
          <div className="col-7">
            <Route path="/notes/:noteId">
              <NoteDetails noteService={dependencies.noteService}/>
            </Route>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

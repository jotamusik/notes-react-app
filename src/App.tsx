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
        <header className="row align-items-center App-header alert alert-dark">
          <div className="col">
            <Link to="/notes" className="alert-link">
              <h1>Note List App</h1>
            </Link>
          </div>
          <div className="col">
            <Link to="/notes/new" className="alert-link">
              <button type="button" className="btn btn-dark">New</button>
            </Link>
          </div>
        </header>
        <div className="row">
          <div className="col">
            <NoteList noteService={dependencies.noteService}/>
          </div>
          <Route path="/notes/:noteId">
            <div className="col-7">
              <NoteDetails noteService={dependencies.noteService}/>
            </div>
          </Route>
          <Route path="/notes/new">
            <div className="col-7">
              New Note
            </div>
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;

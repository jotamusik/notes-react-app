import React from 'react';
import './App.css';
import { NoteList } from './NoteList';
import { NoteService } from './services/NoteService';
import { Dependencies } from './models/Dependencies';
import { NoteDetails } from './NoteDetails';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { EditNote } from './EditNote';
import { NotesStateProvider } from './LocalState';

const App: React.FC = () => {

  const noteService = new NoteService();

  const dependencies: Dependencies = {
    noteService: new NoteService(),
  };

  return (
    <NotesStateProvider noteService={ noteService }>
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
              <NoteList />
            </div>
            <Switch>
              <Route exact path="/notes/new" component={ () => <EditNote /> } />
              <Route exact path="/notes/:noteId/edit"
                     component={ () => <EditNote /> } />
              <Route path="/notes/:noteId" component={ () => <NoteDetails /> } />
            </Switch>
          </div>
        </div>
      </Router>
    </NotesStateProvider>
  );
};

export default App;

import * as React from 'react';
import './Note.scss';
import { NoteData } from '../models/NoteData';

export const Note: React.FC<NoteData> = ({ title, elements }) => (
  <div className="Note">
    <h3 className="Title">{title}</h3>
    <ul>
      {elements.map((element) => <li>{element.content}</li>)}
    </ul>
  </div>
);

Note.displayName = 'Note';

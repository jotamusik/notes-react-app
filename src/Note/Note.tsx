import * as React from 'react';
import './Note.scss';
import { NoteData } from '../models/NoteData';

export const Note: React.FC<NoteData> = ({ title, description }) => (
  <div className="Note">
    <h4 className="Title">{title}</h4>
    <small className="Description text-muted">{description}</small>
  </div>
);

Note.displayName = 'Note';

import * as React from 'react';
import './NoteResume.scss';
import { NoteData } from '../models/NoteData';

export const NoteResume: React.FC<NoteData> = ({ title, description }) => (
  <div className="Note">
    <h4 className="Title">{title}</h4>
    <small className="Description text-muted">{description}</small>
  </div>
);

NoteResume.displayName = 'NoteResume';

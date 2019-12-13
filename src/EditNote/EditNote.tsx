import * as React from 'react';
import './EditNote.scss';
import { Dependencies } from '../models/Dependencies';

export const EditNote: React.FC<Dependencies> = ({ noteService }) => (
  <div className="col-7">
    <div className="EditNote">
      'New Note'
    </div>
  </div>
);

EditNote.displayName = 'EditNote';

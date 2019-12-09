import { NoteData } from '../models/NoteData';

export class NoteService {

  private notesData: NoteData[] = [
    {
      id: 1,
      title: 'Lista de la Compra',
      elements: [
        { id: 1, content: 'fresas' },
        { id: 2, content: 'nata' },
        { id: 3, content: 'chocolate' },
      ],
    },
    {
      id: 2,
      title: 'Cosas pendientes',
      elements: [
        { id: 1, content: 'fregar la loza' },
        { id: 2, content: 'ir a comprar' },
      ],
    },
  ];

  public getNotes(): Promise<NoteData[]> {
    return Promise.resolve(this.notesData);
  }
}

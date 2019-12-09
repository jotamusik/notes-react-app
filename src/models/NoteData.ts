interface NoteElement {
  id: number;
  content: string;
}

export interface NoteData {
  id?: number;
  title: string;
  elements: NoteElement[];
}

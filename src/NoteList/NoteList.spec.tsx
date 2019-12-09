import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NoteList} from './';

describe('NoteList', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <NoteList/>,
    );
    expect(renderResult.queryByText('Hello from NoteList!')).toBeTruthy();
  });
});
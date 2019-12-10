import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NoteDetails} from './';

describe('NoteDetails', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <NoteDetails/>,
    );
    expect(renderResult.queryByText('Hello from NoteDetails!')).toBeTruthy();
  });
});
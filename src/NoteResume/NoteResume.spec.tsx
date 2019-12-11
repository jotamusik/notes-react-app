import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NoteResume} from './';

describe('NoteResume', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <NoteResume/>,
    );
    expect(renderResult.queryByText('Hello from NoteResume!')).toBeTruthy();
  });
});

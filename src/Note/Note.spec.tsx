import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Note} from './';

describe('Note', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Note/>,
    );
    expect(renderResult.queryByText('Hello from Note!')).toBeTruthy();
  });
});
import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { EditNote} from './';

describe('EditNote', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <EditNote/>,
    );
    expect(renderResult.queryByText('Hello from EditNote!')).toBeTruthy();
  });
});
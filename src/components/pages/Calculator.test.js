import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './Calculator';

describe('the calculator app', () => {
  it('should have a length of 1', () => {
    const { container } = render(<Calculator />);
    expect(container.querySelectorAll('.calc-container')).toHaveLength(1);
  });
});

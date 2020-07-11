import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('my-cra-app', () => {
  it('renders learn react link', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('text-box');
    fireEvent.change(input, { target: { value: 'Hello!' } });
    const characterCount = getByTestId('character-count');
    expect(characterCount.innerHTML).toEqual('Character Count: 6');
  });
});

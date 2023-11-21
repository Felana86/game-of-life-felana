import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../main/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Cells state', () => {

  const cellState  = (cellsALive, neighbour) => {
    return false;
  }
  it('Cells should be alive when it has 2 neighbours alive', () => {
    //GIVEN
    const cellsAlive = true
    const neighbour = 2

    //THEN
    expect(cellState(cellsAlive, neighbour)).toBe(false)
  })

  it('Cells should be dead when it has 1 neighbour alive')
})

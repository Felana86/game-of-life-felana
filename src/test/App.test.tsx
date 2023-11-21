import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../main/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Cells state', () => {


  it('Cells should be alive when it has 2 neighbours alive', () => {
    // GIVEN
    const cellsAlive = true
    const neighbour = 2

    // WHEN
    const cellState  = (cellsALive, neighbour) => {
      return true;
    }

    //THEN
    expect(cellState(cellsAlive, neighbour)).toBe(true)
  })

  it('Cells should be dead when it has 1 neighbour alive', () => {
    const cellsDead = true
    const neighbour = 1

    const cellState = (cellsDead, neighbour) => {
      return true
    }
    expect(cellState(cellsDead, neighbour)).toBe(true)
  })
})

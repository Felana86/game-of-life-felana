import { checkCellState } from '../main/App'

describe('Cells state', () => {


  it('Cells should be alive when it has 2 neighbours alive', () => {
    const checkState = checkCellState(true, 2)
    expect(checkState).toBeTruthy()
  })

  it('Cells should be dead when it has 1 neighbour alive', () => {
    const checkState = checkCellState(false, 1)
    expect(checkState).toBeFalsy()
  })

  it('Cells alive should be dead when it has 4 neighbour alive', () => {
    const checkState = checkCellState(true, 4)
    expect(checkState).toBeTruthy()
  })

  it('Cells should be alive when it has 3 neighbour', () => {
    const checkState = checkCellState(true, 3)
    expect(checkState).toBeTruthy()
  })
})

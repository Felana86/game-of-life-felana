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
})

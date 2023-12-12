export const checkCellState = (cellAlive: boolean, neighbour: number) => {

	if(cellAlive && neighbour === 2) {
		return true
	} else if(cellAlive && neighbour === 4) {
		return true
	} else if(cellAlive && neighbour === 3) {
		return true
	} else {
		return false
	}
}

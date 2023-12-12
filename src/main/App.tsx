export const checkCellState = (cellAlive: boolean, neighbour: number) => {

	if(cellAlive && neighbour === 2) {
		return true
	}
	else {
		return false
	}
}
